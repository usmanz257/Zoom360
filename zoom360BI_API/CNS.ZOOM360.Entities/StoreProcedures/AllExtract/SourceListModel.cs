using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AllExtract
{
    public class SourceListModel
    {
        [Column("SOURCE_ACCOUNT_ID")]
        public Int32 SourceAccountId { get; set; }
        [Column("CONNECTION_NAME")]
        public string ConnectionName { get; set; }
        [Column("CONNECTOR_TYPE_NAME")]
        public string ConnectorTypeName { get; set; }
        [Column("APPEARANCE_LOGO")]
        public string AppearanceLogo { get; set; }
        [Column("WORKSPACE_NAME")]
        public string WorkspaceName { get; set; }
        [Column("SOURCE_CONNECTOR_ID")]
        public Int32 SourceConnectorId { get; set; }
        [Column("WORKSPACE_DISPLAY_NAME")]
        public string WorkSpaceDisplayName { get; set; }
        
        [Column("SOURCE_NAME")]
        public string SourceName { get; set; }
        [Column("BSTATUS")]
        public string BStatus { get; set; }
        [Column("USER_NAME_INSERT")]
        public string UserNameInsert { get; set; }
        [Column("SERVER_INSERT_DATE")]
        public string ServerInsertDate { get; set; }
        [Column("DESTINATION_ENABLED")]
        public string DestinationEnabled { get; set; }
        [Column("ACCESS_GRANTED")]
        public string AccessGranted { get; set; }
        [Column("NEXT_RUN")]
        public string NextRun { get; set; }
    }
}
