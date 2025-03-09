using backend.Models;
using System.Linq;

namespace backend.Data
{
    public static class SeedData
    {
        public static void Initialize(AppDbContext context)
        {
            // Look for existing items
            if (context.Items.Any())
            {
                return;   // Database already seeded
            }

            var items = new Item[]
            {
                new Item
                {
                    Name = "Premium Headphones",
                    Price = 99.99M,
                    Description = "High-quality headphones with noise cancellation and exceptional sound quality.",
                    Image = "https://via.placeholder.com/300?text=Headphones",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Wireless Mouse",
                    Price = 29.99M,
                    Description = "Ergonomic wireless mouse with long battery life and precise tracking.",
                    Image = "https://via.placeholder.com/300?text=Mouse",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "HD Webcam",
                    Price = 59.99M,
                    Description = "1080p high-definition webcam perfect for video calls and streaming.",
                    Image = "https://via.placeholder.com/300?text=Webcam",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Bluetooth Speaker",
                    Price = 79.99M,
                    Description = "Portable Bluetooth speaker with rich sound and 12-hour battery life.",
                    Image = "https://via.placeholder.com/300?text=Speaker",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Smart Watch",
                    Price = 129.99M,
                    Description = "Feature-rich smartwatch with fitness tracking, notifications, and GPS.",
                    Image = "https://via.placeholder.com/300?text=Watch",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Mechanical Keyboard",
                    Price = 89.99M,
                    Description = "Tactile mechanical keyboard with RGB lighting and programmable macros.",
                    Image = "https://via.placeholder.com/300?text=Keyboard",
                    IsBestSeller = false
                },
                new Item
                {
                    Name = "External SSD",
                    Price = 149.99M,
                    Description = "Fast external SSD with 1TB capacity and durable aluminum casing.",
                    Image = "https://via.placeholder.com/300?text=SSD",
                    IsBestSeller = false
                },
                new Item
                {
                    Name = "Wireless Earbuds",
                    Price = 69.99M,
                    Description = "True wireless earbuds with touch controls and premium sound quality.",
                    Image = "https://via.placeholder.com/300?text=Earbuds",
                    IsBestSeller = false
                }
            };

            context.Items.AddRange(items);
            context.SaveChanges();
        }
    }
} 