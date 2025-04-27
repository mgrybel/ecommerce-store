using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace API.Entities.OrderAggregate;

[Owned]
public class PaymentSummary
{
    public int Last4 { get; set; } // last 4  digits of the card
    public required string Brand { get; set; }
    
    [JsonPropertyName("exp_month")]
    public int ExpMonth { get; set; }
    
    [JsonPropertyName("exp_year")]
    public int ExpYear { get; set; }
}
