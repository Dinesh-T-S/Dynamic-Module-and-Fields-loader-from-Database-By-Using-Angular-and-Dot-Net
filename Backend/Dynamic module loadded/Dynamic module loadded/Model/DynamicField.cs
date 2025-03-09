using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Dynamic_module_loadded.Model
{
    public class DynamicField
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FieldName { get; set; } = string.Empty;

        public string? Unit { get; set; }

        [Required]
        public string Type { get; set; } = string.Empty;

        public string Placeholder { get; set; } = string.Empty;

        [ForeignKey("DynamicModule")]
        public int ModuleId { get; set; }
        public DynamicModule? DynamicModule { get; set; }
    }
}
