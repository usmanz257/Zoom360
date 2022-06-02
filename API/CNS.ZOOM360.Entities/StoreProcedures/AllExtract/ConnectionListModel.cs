using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AllExtract
{
    public class ConnectionListModel
    {
        [Column("SOURCE_ACCOUNT_ID")]
        public Int32 SourceConnectionId { get; set; }
        [Column("APPEARANCE_LOGO")]
        public string AppearanceLogo { get; set; } 
        [Column("CONNECTOR_NAME")]
        public string ConnectorName { get; set; }
        
        [Column("SOURCE_CONNECTOR_ID")]
        public Int32 SourceConnectorId { get; set; }
        [Column("WORKSPACE_NAME")]
        public string WorkspaceName { get; set; }
        [Column("ACCOUNT_DISPLAY_NAME")]
        public string AccountDisplayName { get; set; }
        //[Column("BSTATUS")]
        //public string Bstatus { get; set; }
        //[Column("USER_NAME_INSERT")]
        //public string UsernameInsert { get; set; }
        //[Column("SERVER_INSERT_DATE")]
        //public string ServerInsertDate { get; set; }
        [Column("DESTINATION_ENABLED")]
        public string DestinationEnabled { get; set; }
        [Column("ACCESS_GRANTED")]
        public string Accessgranted { get; set; }
        //[Column("NEXT_RUN")]
        //public string NextRun { get; set; }

    }
}
