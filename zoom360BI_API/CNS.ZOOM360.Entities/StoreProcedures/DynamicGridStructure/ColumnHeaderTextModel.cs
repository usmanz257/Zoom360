using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure
{
    public class ColumnHeaderTextModel
    {
        [Column("columntext")]
        public string columntext { get; set; }
    }
}
