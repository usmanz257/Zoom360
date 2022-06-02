using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AIinsights
{
    public class GetAIWidgetGraphDataModel
    
    {
        [Column("WIDGET_ID")]
        public string WidgetID { get; set; }
        [Column("DIMENSION_NAME")]
        public string DimensionName { get; set; }
        [Column("DIMENSION_VALUE")]
        public double DimensionValue { get; set; }
        [Column("DATE")]
        public string Date { get; set; }

        [Column("PERFORMANCE")]
        public string Performance { get; set; }
        [Column("RANK")]
        public int Rank { get; set; }


    }
}
