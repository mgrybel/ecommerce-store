using API.Entities;
using Stripe;

namespace API.Services;

public class PaymentService(IConfiguration config, DiscountService discountService)
{
    public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Cart cart, bool removeDiscount = false)
    {
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
        
        var service = new PaymentIntentService();
        
        var intent = new PaymentIntent();
        var subtotal = cart.Items.Sum(x => x.Quantity * x.Product.Price);
        var deliveryFee = subtotal > 10000 ? 0 : 500; // above $100 the delivery is free, otherwise it is $5
        long discount = 0;
        
        if (cart.Coupon != null)
        {
            discount = await discountService.CalculateDiscountFromAmount(cart.Coupon, subtotal, removeDiscount);
        }
        
        var totalAmount = subtotal - discount + deliveryFee;
        
        if (string.IsNullOrEmpty(cart.PaymentIntentId))
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = subtotal + deliveryFee,
                Currency = "usd",
                PaymentMethodTypes = ["card"]
            };
            intent = await service.CreateAsync(options);
        }
        else
        {
            var options = new PaymentIntentUpdateOptions
            {
                Amount = subtotal + deliveryFee
            };
            await service.UpdateAsync(cart.PaymentIntentId, options);
        }
        
        return intent;
    }
}
