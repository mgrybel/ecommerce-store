using API.Data;
using API.DTO;
using API.Entities.OrderAggregate;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;

namespace API.Controllers
{
    public class PaymentsController(PaymentService paymentsService, StoreContext context, 
        IConfiguration config, ILogger<PaymentsController> logger) : BaseApiController
    {
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<CartDto>> CreateOrUpdatePaymentIntent()
        {
            var cart = await context.Carts.GetCartWithItems(Request.Cookies["cartId"]);

            if (cart == null) return BadRequest("Problem with the cart");

            var intent = await paymentsService.CreateOrUpdatePaymentIntent(cart);

            if (intent == null) return BadRequest("Problem creating payment intent");

            cart.PaymentIntentId ??= intent.Id;
            cart.ClientSecret ??= intent.ClientSecret;

            if (context.ChangeTracker.HasChanges())
            {
                var result = await context.SaveChangesAsync() > 0;
                
                if (!result) return BadRequest("Problem updating cart with intent");
            }

            return cart.ToDto();
        }

        [HttpPost("webhook")]
        public async Task<IActionResult> StripeWebhook()
        {
            var json = await new StreamReader(Request.Body).ReadToEndAsync();
            
            try
            {
                var stripeEvent = ConstructStripeEvent(json);
                
                if (stripeEvent.Data.Object is not PaymentIntent intent)
                {
                    return BadRequest("Invalid event data");
                }
                
                if (intent.Status == "succeeded")
                {
                    await HandlePaymentIntentSucceeded(intent);
                } 
                else
                {
                    await HandlePaymentIntentFailed(intent);
                } 
                
                return Ok();
            }
            catch (StripeException ex)
            {
                logger.LogError(ex, "Stripe webhook error");
                return StatusCode(StatusCodes.Status500InternalServerError, "Webhook error");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An unexpected error has occurred");
                return StatusCode(StatusCodes.Status500InternalServerError, "Unexpected error");
            }
        }

        private async Task HandlePaymentIntentSucceeded(PaymentIntent intent)
        {
            var order = await context.Orders
                .Include(x => x.OrderItems)
                .FirstOrDefaultAsync(x => x.PaymentIntentId == intent.Id)
                    ?? throw new Exception("Order not found");
                    
            if (order.GetTotal() != intent.Amount)
            {
                order.OrderStatus = OrderStatus.PaymentMismatch;
            }
            else
            {
                order.OrderStatus = OrderStatus.PaymentReceived;
            }

            var cart = await context.Carts.FirstOrDefaultAsync(x => x.PaymentIntentId == intent.Id);
            
            if (cart != null)
            {
                context.Carts.Remove(cart);
            } 
            
            await context.SaveChangesAsync();
        }

        private async Task HandlePaymentIntentFailed(PaymentIntent intent)
        {
            var order = await context.Orders
                .Include(x => x.OrderItems)
                .FirstOrDefaultAsync(x => x.PaymentIntentId == intent.Id)
                    ?? throw new Exception("Order not found");

            foreach (var item in order.OrderItems)
            {
                var productItem = await context.Products
                    .FindAsync(item.ItemOrdered.ProductId)
                        ?? throw new Exception("Problem updating order stock");

                productItem.QuantityInStock += item.Quantity;
            }

            order.OrderStatus = OrderStatus.PaymentFailed;

            await context.SaveChangesAsync();
        }

        private Event ConstructStripeEvent(string json)
        {
            try
            {
                return EventUtility.ConstructEvent(json, 
                    Request.Headers["Stripe-Signature"], config["StripeSettings:WhSecret"]);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Failed to construct stripe event");
                throw new StripeException("Invalid signature");
            }
        }
    }
}
