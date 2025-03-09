using AutoMapper;
using Dynamic_module_loadded.DTO;
using Dynamic_module_loadded.Model;
using Dynamic_module_loadded.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dynamic_module_loadded.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DynamicModuleController : ControllerBase
    {

        public readonly IDynamicModuleService service;

        public readonly IMapper mapper;

        public DynamicModuleController(IDynamicModuleService service, IMapper mapper)
        {
            this.service = service;
            this.mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<DynamicModuleDto>> CreateModule([FromBody] DynamicModuleDto dto)
        {
            if (dto == null)
                return BadRequest(new { message = "Invalid module data." });

            var module = mapper.Map<DynamicModule>(dto);
            await service.Create(module);

            return CreatedAtAction(nameof(GetModulesByName), new { moduleName = module.ModuleName }, dto);
        }


        [HttpGet]
        public async Task<ActionResult<List<DynamicModuleDto>>> GetAllModules()
        {
            var data = await service.GetAllModules();
            var dtoList = mapper.Map<List<DynamicModuleDto>>(data);
            return data.Count > 0 ? Ok(dtoList) : NoContent();
        }
        [HttpGet("{moduleName}")]
        public async Task<ActionResult<List<DynamicModuleDto>>> GetModulesByName(string moduleName)
        {
            var modules = await service.GetModulesByName(moduleName);
            if (modules == null || !modules.Any())
                return NotFound(new { message = $"No modules found for '{moduleName}'." });

            var dtoList = mapper.Map<List<DynamicModuleDto>>(modules);
            return Ok(dtoList);
        }
    }

}
