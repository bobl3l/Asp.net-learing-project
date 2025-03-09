using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Item entity
            modelBuilder.Entity<Item>()
                .HasKey(i => i.Id);

            modelBuilder.Entity<Item>()
                .Property(i => i.Name)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<Item>()
                .Property(i => i.Price)
                .IsRequired()
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Item>()
                .Property(i => i.Description)
                .HasMaxLength(500);

            modelBuilder.Entity<Item>()
                .Property(i => i.Image)
                .IsRequired()
                .HasMaxLength(500);
        }
    }
} 