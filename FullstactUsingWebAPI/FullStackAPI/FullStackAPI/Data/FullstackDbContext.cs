using FullStackAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Data
{
    public class FullstackDbContext:DbContext
    {
        public FullstackDbContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<Employee> EmployeesTabel { get; set; }
    }
}
