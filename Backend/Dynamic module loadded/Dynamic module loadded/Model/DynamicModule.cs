using System.ComponentModel.DataAnnotations;

namespace Dynamic_module_loadded.Model
{
    public class DynamicModule
    {
        
        [Key]
        public int Id { get; set; }

        [Required]
        public string[]? ModuleName { get; set; }

        public List<DynamicField> Fields { get; set; } = new List<DynamicField>();
    }
}
