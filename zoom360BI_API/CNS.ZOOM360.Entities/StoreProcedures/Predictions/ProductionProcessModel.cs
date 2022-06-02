using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace CNS.ZOOM360.Entities.StoreProcedures.Predictions
{
  public class ProductionProcessModel
    {
        [Column("PRODUCTION_PROCESS")]
        public string? productionProcess { get; set; }
        [Column("PRODUCTION_PROCESS_HEADER")]
        public string? productionProcessHeader { get; set; }
        [Column("PRODUCTION_PROCESS_CONTROL_LABELS")]
        public string? productionProcessControlLabels { get; set; }
        [Column("PRODUCTION_PROCESS_CONTROL_HELP")]
        public string? productionProcessControlHelp { get; set; }

    }
}
