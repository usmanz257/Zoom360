using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.GridAndGraphData
{
    public class GraphDataModel
    {
        [Column("PLATFORM")]
        public string Platform { get; set; }
        [Column("PERIOD_DATE")]
        public int Period_Date { get; set; }
        [Column("PERIOD_DISPLAY_DATE")]
        public string Period_Display_Date { get; set; }
        [Column("IMPRESSIONS")]
        public int Imperssions{ get; set; }
        [Column("CLICKS")]
        public int Clicks { get; set; }
        [Column("CTR")]
        public int CTR { get; set; }
        [Column("CONNECTOR_IMAGE")]
        public string Connectorimage { get; set; }
    }
}
