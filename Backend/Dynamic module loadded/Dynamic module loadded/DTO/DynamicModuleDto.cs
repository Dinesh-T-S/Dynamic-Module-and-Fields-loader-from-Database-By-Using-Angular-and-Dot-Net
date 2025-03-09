namespace Dynamic_module_loadded.DTO
{
    public class DynamicModuleDto
    {
       
        public int Id { get; set; }
        public string[] ModuleName { get; set; } = Array.Empty<string>();
        public List<DynamicFieldDto> Fields { get; set; } = new List<DynamicFieldDto>();
    }
}
