using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure
{
    public class TemplateModel
    {
        [Column("COL_ID")]
        public string colId { get; set; }
        [Column("WIDTH")]
        public int width { get; set; }
        [Column("HIDE")]
        public bool hide { get; set; }
        [Column("PINNED")]
        public string? pinned { get; set; }
        [Column("SORT")]
        public string? sort { get; set; }
        [Column("SORT_INDEX")]
        public bool? sortIndex { get; set; }
        [Column("AGG_FUNC")]
        public string? aggFunc { get; set; }
        [Column("ROW_GROUP")]
        public bool rowGroup { get; set; }
        [Column("ROW_GROUP_INDEX")]
        public bool? rowGroupIndex { get; set; }
        [Column("PIVOT")]
        public bool? pivot { get; set; }
        [Column("PIVOT_INDEX")]
        public bool? pivotIndex { get; set; }

        //[Column("FLEX")]
        [NotMapped]
        public string? flex { get; set; }


    }
}
