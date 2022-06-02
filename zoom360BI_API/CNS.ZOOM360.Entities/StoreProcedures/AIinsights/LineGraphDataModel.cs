using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AIinsights
{
   public class LineGraphDataModel
    {

        [Column("PLATFORM_NAME")]
        public string PlatformName   { get; set; }
        [Column("PLATFORM_DATE")]
        public string PlatformDate { get; set; }
        [Column("PLATFORM_VALUE")]
        public int PlatformValues { get; set; }
    }
}