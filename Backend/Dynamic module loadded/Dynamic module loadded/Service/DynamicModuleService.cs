using Dynamic_module_loadded.DBcontext;
using Dynamic_module_loadded.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dynamic_module_loadded.Service
{
    public interface IDynamicModuleService
{
    Task Create(DynamicModule entity);
    Task<List<DynamicModule>> GetAllModules();
    Task<List<DynamicModule>> GetModulesByName(string moduleName);
    Task<DynamicModule?> GetModuleByName(string moduleName);
}

public class DynamicModuleService : IDynamicModuleService
{
    private readonly AppDbContext _context;

    public DynamicModuleService(AppDbContext context)
    {
        _context = context;
    }

    public async Task Create(DynamicModule entity)
    {
        await _context.DynamicModules.AddAsync(entity);
        await _context.SaveChangesAsync();
    }

    public async Task<List<DynamicModule>> GetAllModules()
    {
        return await _context.DynamicModules.Include(m => m.Fields).ToListAsync();
    }

    public async Task<List<DynamicModule>> GetModulesByName(string moduleName)
    {
        return await _context.DynamicModules
                             .Include(m => m.Fields)
                             .Where(m => m.ModuleName.Contains(moduleName))
                             .ToListAsync();
    }

    public async Task<DynamicModule?> GetModuleByName(string moduleName)
    {
        return await _context.DynamicModules
                             .Include(m => m.Fields)
                             .FirstOrDefaultAsync(m => m.ModuleName.Contains(moduleName));
    }
}
}
