using API.Entities;
using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Cart> Carts { get; set; }
    public required DbSet<Order> Orders { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        
        builder.Entity<IdentityRole>().HasData(
            new IdentityRole { Id = "152d99e7-8ec7-434b-ba39-64cac47359df", Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Id = "1a37ba4e-a318-4bb6-8012-5230a1ae0578", Name = "Admin", NormalizedName = "ADMIN" }
        );
    }
}
