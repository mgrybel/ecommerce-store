using System.ComponentModel.DataAnnotations;

namespace API.DTO;

public class RegisterDto
{
    [Required]
    public string Email { get; set; } = string.Empty; 
    public required string Password { get; set; }
}
