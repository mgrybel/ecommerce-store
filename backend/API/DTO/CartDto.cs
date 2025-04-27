using API.Entities;

namespace API.DTO;

public class CartDto
{
    public int Id { get; set; }
    public required string CartId { get; set; }
    public List<CartItemDto> Items { get; set; } = [];
    public string? ClientSecret { get; set; }
    public string? PaymentIntentId { get; set; }
    public AppCoupon? Coupon { get; set; }
}
