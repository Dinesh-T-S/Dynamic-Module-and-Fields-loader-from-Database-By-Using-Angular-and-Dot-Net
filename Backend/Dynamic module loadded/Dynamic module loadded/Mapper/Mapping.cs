using AutoMapper;
using Dynamic_module_loadded.DTO;
using Dynamic_module_loadded.Model;

namespace Dynamic_module_loadded.Mapper
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<DynamicModule, DynamicModuleDto>().ReverseMap();
            CreateMap<DynamicField, DynamicFieldDto>().ReverseMap();

        }
    }
}
