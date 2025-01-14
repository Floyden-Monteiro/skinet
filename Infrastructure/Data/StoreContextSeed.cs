using System.Text.Json;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data;

public class StoreContextSeed
{
    public static async Task SeedAsync(StoreContext context, ILogger<StoreContextSeed> logger)
    {
        try
        {
            if (!context.ProductBrands.Any())
            {
                logger.LogInformation("Seeding ProductBrands...");
                var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                if (brands != null)
                {
                    context.ProductBrands.AddRange(brands);
                    logger.LogInformation("ProductBrands seeded successfully.");
                }
                else
                {
                    logger.LogWarning("No ProductBrands data found to seed.");
                }
            }
            else
            {
                logger.LogInformation("ProductBrands already exist in the database.");
            }

            if (!context.ProductTypes.Any())
            {
                logger.LogInformation("Seeding ProductTypes...");
                var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                if (types != null)
                {
                    context.ProductTypes.AddRange(types);
                    logger.LogInformation("ProductTypes seeded successfully.");
                }
                else
                {
                    logger.LogWarning("No ProductTypes data found to seed.");
                }
            }
            else
            {
                logger.LogInformation("ProductTypes already exist in the database.");
            }

            if (!context.Products.Any())
            {
                logger.LogInformation("Seeding Products...");
                var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                if (products != null)
                {
                    context.Products.AddRange(products);
                    logger.LogInformation("Products seeded successfully.");
                }
                else
                {
                    logger.LogWarning("No Products data found to seed.");
                }
            }
            else
            {
                logger.LogInformation("Products already exist in the database.");
            }

            if (context.ChangeTracker.HasChanges())
            {
                logger.LogInformation("Saving changes to the database...");
                await context.SaveChangesAsync();
                logger.LogInformation("Changes saved successfully.");
            }
            else
            {
                logger.LogInformation("No changes detected in the ChangeTracker.");
            }
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An error occurred during seeding");
        }
    }
}