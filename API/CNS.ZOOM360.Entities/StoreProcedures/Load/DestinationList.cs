using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Load
{
  public  class DestinationList
    {
        [Column("DES_ACCOUNT_ID")]
        public int accountID { get; set; }
        [Column("APPEARANCE_LOGO")]
        public string appearanceLogo { get; set; }
        [Column("CONNECTOR_NAME")]
        public string connectorName { get; set; }
        [Column("SOURCE_CONNECTOR_ID")]
        public int connectorID { get; set; }
        [Column("WORKSPACE_NAME")]
        public string workspaceName { get; set; }
        [Column("ACCOUNT_DISPLAY_NAME")]
        public string accountDisplayName { get; set; }
        [Column("DESTINATION_ENABLED")]
        public string destinationEnable { get; set; }
        [Column("ACCESS_GRANTED")]
        public string accessGranted { get; set; }
     }
}
