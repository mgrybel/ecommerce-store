using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("CartItems")]
public class CartItem
{
    public int Id { get; set; }
    public int Quantity {get; set; }

    // navigation properties
    public int ProductId { get; set; }
    public Product Product { get; set; } = null!;
    
    public int CartId { get; set; }
    public Cart Cart { get; set;} = null!;
}
