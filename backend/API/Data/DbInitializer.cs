using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        
        var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
            ?? throw new InvalidOperationException("Failed to retrieve store context");
            
        var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>()
            ?? throw new InvalidOperationException("Failed to retrieve user manager");
            
        SeedData(context,  userManager);
    }
    
    private static async void SeedData(StoreContext context, UserManager<User> userManager)
    {
        context.Database.Migrate();
        
        if (!userManager.Users.Any())
        {
            var user = new User
            {
                UserName = "bob@test.com",
                Email = "bob@test.com",
            };
            
            await userManager.CreateAsync(user, "Pass12345!");
            await userManager.AddToRoleAsync(user, "Member");
            
            var admin = new User
            {
                UserName = "admin@test.com",
                Email = "admin@test.com",
            };
            
            await userManager.CreateAsync(admin, "Pass12345!");
            await userManager.AddToRolesAsync(admin, ["Member", "Admin"]);
        }
        
        if (context.Products.Any()) return;
        
        var products = new List<Product>
        {
            new () {
                Name = "Hyperlite Speedster Wakesurf Board",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 20000,
                PictureUrl = "/images/products/sb-ang1.png",
                Brand = "Hyperlite",
                Type = "Boards",
                QuantityInStock = 100
            },
            new () {
                Name = "Hyperlite Speedster Board 3000",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 15000,
                PictureUrl = "/images/products/sb-ang2.png",
                Brand = "Hyperlite",
                Type = "Boards",
                QuantityInStock = 100
            },
            new () {
                Name = "Hyperlite Board Speed Rush 3",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 18000,
                PictureUrl = "/images/products/sb-core1.png",
                Brand = "Hyperlite",
                Type = "Boards",
                QuantityInStock = 100
            },
            new () {
                Name = "Hyperlite Super Board",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 30000,
                PictureUrl = "/images/products/sb-core2.png",
                Brand = "Hyperlite",
                Type = "Boards",
                QuantityInStock = 100
            },
            new () {
                Name = "Hyperlite Board Super Whizzy Fast",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 25000,
                PictureUrl = "/images/products/sb-react1.png",
                Brand = "Hyperlite",
                Type = "Boards",
                QuantityInStock = 100
            },
            new () {
                Name = "Hyperlite Entry Board",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 12000,
                PictureUrl = "/images/products/sb-ts1.png",
                Brand = "Hyperlite",
                Type = "Boards",
                QuantityInStock = 100
            },
            new () {
                Name = "Patagonia Snowboard Blue Hat",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 1000,
                PictureUrl = "/images/products/hat-core1.png",
                Brand = "Patagonia",
                Type = "Hats",
                QuantityInStock = 100
            },
            new () {
                Name = "Patagonia Snowboard Woolen Hat",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 8000,
                PictureUrl = "/images/products/hat-react1.png",
                Brand = "Patagonia",
                Type = "Hats",
                QuantityInStock = 100
            },
            new () {
                Name = "Patagonia Snowboard Purple Woolen Hat",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 1500,
                PictureUrl = "/images/products/hat-react2.png",
                Brand = "Patagonia",
                Type = "Hats",
                QuantityInStock = 100
            },
            new () {
                Name = "Burton Snowboard Gloves",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 1800,
                PictureUrl = "/images/products/glove-code1.png",
                Brand = "Burton",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new () {
                Name = "Burton Snowboard Green Gloves",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 1500,
                PictureUrl = "/images/products/glove-code2.png",
                Brand = "Burton",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new () {
                Name = "Burton Snowboard Purple Gloves",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 1600,
                PictureUrl = "/images/products/glove-react1.png",
                Brand = "Burton",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new () {
                Name = "Burton Snowboard Black Gloves",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 1400,
                PictureUrl = "/images/products/glove-react2.png",
                Brand = "Burton",
                Type = "Gloves",
                QuantityInStock = 100
            },
            new () {
                Name = "Burton Snowboard Red Boots",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 25000,
                PictureUrl = "/images/products/boot-redis1.png",
                Brand = "Burton",
                Type = "Boots",
                QuantityInStock = 100
            },
            new () {
                Name = "Nidecker Snowboard Boots",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 18999,
                PictureUrl = "/images/products/boot-core2.png",
                Brand = "Nidecker",
                Type = "Boots",
                QuantityInStock = 100
            },
            new () {
                Name = "Nidecker Snowboard Purple Boots",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 19999,
                PictureUrl = "/images/products/boot-core1.png",
                Brand = "Nidecker",
                Type = "Boots",
                QuantityInStock = 100
            },
            new () {
                Name = "Nidecker Snowboard Black Boots",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 15000,
                PictureUrl = "/images/products/boot-ang2.png",
                Brand = "Nidecker",
                Type = "Boots",
                QuantityInStock = 100
            },
            new () {
                Name = "Nidecker Snowboard Blue Boots",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit nulla, tempus quis ultrices nec, mollis sit amet tortor. Vivamus sed maximus felis. Vivamus nec tincidunt nibh. Fusce consectetur ex id tortor condimentum, ac vestibulum sem lacinia. Cras suscipit orci libero, vel gravida nulla ultrices sit amet. Nullam ut malesuada velit. Donec felis justo, elementum quis ante ac, imperdiet aliquet risus. Sed at tristique mauris. Vestibulum eu iaculis ipsum.",
                Price = 18000,
                PictureUrl = "/images/products/boot-ang1.png",
                Brand = "Nidecker",
                Type = "Boots",
                QuantityInStock = 100
            },
        };
        
        context.Products.AddRange(products);
        
        context.SaveChanges();
    }
}
