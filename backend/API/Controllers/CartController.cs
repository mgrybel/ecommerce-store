using API.Data;
using API.DTO;
using API.Entities;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CartController(StoreContext context, DiscountService couponService, PaymentService paymentService) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<CartDto>> GetCart()
        {
            var cart = await RetrieveCart();

            if (cart == null) return NoContent();

            return cart.ToDto();
        }

        [HttpPost]
        public async Task<ActionResult<CartDto>> AddItemToCart(int productId, int quantity) 
        {
            var cart = await RetrieveCart();

            cart ??= CreateCart();

            var product = await context.Products.FindAsync(productId);

            if (product == null) return BadRequest("Problem adding item to cart");

            cart.AddItem(product, quantity);

            var result = await context.SaveChangesAsync() > 0;

            if (result) return CreatedAtAction(nameof(GetCart), cart.ToDto());

            return BadRequest("Problem updating cart");
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveCartItem(int productId, int quantity)
        {
            var cart = await RetrieveCart();

            if (cart == null) return BadRequest("Unable to retrieve cart");

            cart.RemoveItem(productId, quantity);

            var result = await context.SaveChangesAsync() > 0;

            if (result) return Ok();

            return BadRequest("Problem updating cart");
        }

        [HttpPost("{code}")]
        public async Task<ActionResult<CartDto>> AddCouponCode(string code)
        {
            // get the cart
            var cart = await RetrieveCart();
            if (cart == null || string.IsNullOrEmpty(cart.ClientSecret)) return BadRequest("Unable to apply voucher");
            
            // get the coupon
            var coupon = await couponService.GetCouponFromPromoCode(code);
            if (coupon == null) return BadRequest("Invalid coupon");
            
            // update the cart with the coupon
            cart.Coupon = coupon;

            // update the payment intent
            var intent = await paymentService.CreateOrUpdatePaymentIntent(cart);
            if (intent == null) return BadRequest("Problem applying coupon to cart");

            // save changes and return CartDto if successful
            var result = await context.SaveChangesAsync() > 0;

            if (result) return CreatedAtAction(nameof(GetCart), cart.ToDto());

            return BadRequest("Problem updating cart");
        }

        [HttpDelete("remove-coupon")]
        public async Task<ActionResult> RemoveCouponFromCart()
        {
            // get the cart
            var cart = await RetrieveCart();
            if (cart == null || cart.Coupon == null || string.IsNullOrEmpty(cart.ClientSecret))
            {
                return BadRequest("Unable to update cart with coupon");
            }
            
            var intent = await paymentService.CreateOrUpdatePaymentIntent(cart, true);
            if (intent == null)
            {
                return BadRequest("Problem removing coupon from cart");
            }
            
            cart.Coupon = null;
            
            var result = await context.SaveChangesAsync() > 0;
            
            if (result) return Ok();
            
            return BadRequest("Problem updating cart");
        }

        private Cart CreateCart()
        {
            var cartId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.UtcNow.AddDays(30)
            };
            Response.Cookies.Append("cartId", cartId, cookieOptions);
            var cart = new Cart { CartId = cartId };
            context.Carts.Add(cart);
            return cart;
        }

        private async Task<Cart?> RetrieveCart()
        {
            return await context.Carts
                .Include(x => x.Items)
                .ThenInclude(x => x.Product)
                .FirstOrDefaultAsync(x => x.CartId == Request.Cookies["cartId"]);
        }
    }
}
