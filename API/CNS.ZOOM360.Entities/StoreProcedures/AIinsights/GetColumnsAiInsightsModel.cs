using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace CNS.ZOOM360.Entities.StoreProcedures.AIinsights
{
   public class GetColumnsAiInsightsModel
    {
        [Column("ATTRIBUTE_ID")]
        public string AttributeID { get; set; }

        [Column("ATTRIBUTE")]
        public string Attribute { get; set; }
    }
}
