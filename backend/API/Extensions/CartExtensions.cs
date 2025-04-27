using API.DTO;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class CartExtensions
{
    public static CartDto ToDto(this Cart cart)
    {
        return new CartDto
        {
            CartId = cart.CartId,
            ClientSecret = cart.ClientSecret,
            PaymentIntentId = cart.PaymentIntentId,
            Coupon = cart.Coupon,
            Items = cart.Items.Select(x => new CartItemDto
            {
                ProductId = x.ProductId,
                Name = x.Product.Name,
                Price = x.Product.Price,
                PictureUrl = x.Product.PictureUrl,
                Brand = x.Product.Brand,
                Type = x.Product.Type,
                Quantity = x.Quantity
            }).ToList()
        };
    }
    
    public static async Task<Cart> GetCartWithItems(this IQueryable<Cart> query, string? cartId)
    {
        return await query
            .Include(x => x.Items)
            .ThenInclude(x => x.Product)
            .FirstOrDefaultAsync(x => x.CartId == cartId) ?? throw new Exception("Cannot get cart");
    }
}
