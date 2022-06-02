using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AIinsights
{
  public  class GetAiInsightsModel
    {
        [Column("HEADER_CONTENT")]
        public string Header_Content { get; set; }

        [Column("TAIL_CONTENT")]
        public string Tail_Content { get; set; }
    }
}
