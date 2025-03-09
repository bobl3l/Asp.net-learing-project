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
                    Image = "https://foryourworkplace.co.uk/cdn/shop/files/Foryourworkplace_Jabra_27599-999-989_INT_1.webp?v=1736251691&width=600",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Wireless Mouse",
                    Price = 29.99M,
                    Description = "Ergonomic wireless mouse with long battery life and precise tracking.",
                    Image = "https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/pointing-devices/ms300/ms300-kbm-01-bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=472&qlt=100,1&resMode=sharp2&size=472,804&chrss=full",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "HD Webcam",
                    Price = 59.99M,
                    Description = "1080p high-definition webcam perfect for video calls and streaming.",
                    Image = "https://www.hp.com/gb-en/shop/Html/Merch/Images/c08755615_1750x1285.jpg",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Bluetooth Speaker",
                    Price = 79.99M,
                    Description = "Portable Bluetooth speaker with rich sound and 12-hour battery life.",
                    Image = "https://media.wired.com/photos/6698764221d442cdea712848/master/w_960,c_limit/Bose-SoundLink-Max-Bluetooth-Speaker%20(black)-Offwhite-Background-SOURCE-Amazon.jpg",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Smart Watch",
                    Price = 129.99M,
                    Description = "Feature-rich smartwatch with fitness tracking, notifications, and GPS.",
                    Image = "https://www.fhinds.co.uk/Images/Product/Default/xlarge/W47328_L_1.jpg",
                    IsBestSeller = true
                },
                new Item
                {
                    Name = "Mechanical Keyboard",
                    Price = 89.99M,
                    Description = "Tactile mechanical keyboard with RGB lighting and programmable macros.",
                    Image = "https://assetsio.gnwcdn.com/k2he.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
                    IsBestSeller = false
                },
                new Item
                {
                    Name = "External SSD",
                    Price = 149.99M,
                    Description = "Fast external SSD with 1TB capacity and durable aluminum casing.",
                    Image = "https://m.media-amazon.com/images/I/61KujzGVxYL.jpg",
                    IsBestSeller = false
                },
                new Item
                {
                    Name = "Wireless Earbuds",
                    Price = 69.99M,
                    Description = "True wireless earbuds with touch controls and premium sound quality.",
                    Image = "https://cdn.mos.cms.futurecdn.net/nSYHDzR3pzWXzqs6scRrXB-320-80.jpg",
                    IsBestSeller = false
                }
            };

            context.Items.AddRange(items);
            context.SaveChanges();
        }
    }
} 