using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.ConnectionStatus
{
   public class ConnectionLogModel
    {
        [Column("APPEARANCE_LOGO")]
        public string AppearanceLogo { get; set; }
        [Column("CONNECTION_TYPE")]
        public string connectiontype { get; set; }
        [Column("CONFIGURED_ACCOUNTS")]
        public string ConfiguredAccounts { get; set; }
        [Column("FIRST_CREATED")]
        public string firstcreated { get; set; }
        [Column("TOTAL_EXTRACTS")]
        public Int32 totalextract { get; set; }
        [Column("LAST_ACCESSED")]
        public string LastAccessed { get; set; }
    }
}
