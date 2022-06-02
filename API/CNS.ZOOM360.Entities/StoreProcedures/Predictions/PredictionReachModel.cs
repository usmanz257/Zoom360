using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace CNS.ZOOM360.Entities.StoreProcedures.Predictions
{
  public  class PredictionReachModel
    {
        [Column("SCREEN_NAME")]
        public string screenName { get; set; }
        [Column("AMOUNT_SPENT_USD")]
        public string amountSpentUsd { get; set; }
        [Column("RESULTS")]
        public double results { get; set; }
        [Column("IMPRESSIONS")]
        public string impressions { get; set; }

        [Column("STATUS")]
        public string status { get; set; }

    }
}
