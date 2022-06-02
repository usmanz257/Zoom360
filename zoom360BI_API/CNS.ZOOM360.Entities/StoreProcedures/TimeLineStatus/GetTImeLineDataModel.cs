using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus
{
  public  class GetTImeLineDataModel
    {
        [Column("WIDGET_ID")]
        public string Widget_Id { get; set; }
        [Column("PERIOD_DATE")]
        public string Period_Date { get; set; }
        [Column("MEASURE")]
        public string Measure { get; set; }
        [Column("MATURITY_PERIOD")]
        public string Maturity_Period { get; set; }
        [Column("MATURITY_PERIOD_RANGE")]
        public string Maturity_Period_Name { get; set; }

    }
}
