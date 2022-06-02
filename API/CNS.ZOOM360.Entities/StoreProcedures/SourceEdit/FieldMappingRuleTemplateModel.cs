using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.SourceEdit
{
    public class FieldMappingRuleTemplateModel
    {
        [Column("SOURCE_COLUMN")]
        public string sourceColumn { get; set; }
        [Column("TARGET_COLUMN")]
        public string? targetColumn { get; set; }
        [Column("KEY_COLUMN")]
        public string keyColumn { get; set; }
        [Column("AGGREGATION_STATUS")]
        public string? aggregationStatus { get; set; }
        [Column("VISIBILITY_STATUS")]
        public string? visibilityStatus { get; set; }
        [Column("IMAGE")]
        public string? image { get; set; }
    }
}
