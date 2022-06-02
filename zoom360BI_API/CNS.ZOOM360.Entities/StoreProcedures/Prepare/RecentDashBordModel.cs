using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
  public  class RecentDashBordModel
    {
        [Column("APPEARANCE_LOGO")]
        public string appearancelogo { get; set; }
        [Column("CONNECTION_TYPE")]
        public string connectiontype { get; set; }
        [Column("CONFIGURED_ACCOUNTS")]
        public string configuredaccounts { get; set; }
        [Column("FIRST_CREATED")]
        public string firstcreated { get; set; }
        [Column("TOTAL_EXTRACTS")]
        public string totalextract { get; set; }
        [Column("LAST_ACCESSED")]
        public string lastaccessed { get; set; }
    }
}
