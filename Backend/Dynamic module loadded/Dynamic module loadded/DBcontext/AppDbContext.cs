using Dynamic_module_loadded.Model;
using Microsoft.EntityFrameworkCore;

namespace Dynamic_module_loadded.DBcontext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :base(options) { }
        public DbSet<DynamicModule> DynamicModules { get; set; }
        public DbSet<DynamicField> DynamicFields { get; set; }

    }
}
