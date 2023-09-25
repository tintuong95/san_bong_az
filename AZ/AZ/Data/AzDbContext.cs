using Microsoft.EntityFrameworkCore;
using AZ.Models;

namespace AZ.Data
{
    public class AzDbContext : DbContext
    {
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Pitch> Pitch { get; set; }
        public virtual DbSet<Order> Order { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Data Source=FVN-NB-077;Initial Catalog=master;Integrated Security=True;Database=test;");
            }
        }


        public AzDbContext(DbContextOptions<AzDbContext> options) : base(options)
        {

        }
    }
}
