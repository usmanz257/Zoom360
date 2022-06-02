using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AllExtract
{
    public class AllIssuesModel
    {
        [Column("APPEARANCE_LOGO")]
        public string AppearanceLogo { get; set; }
        [Column("CONNECTOR_DISPLAY_NAME")]
        public string ConnectorDisplayName { get; set; }
        [Column("SOURCE_ACCOUNT_ID")]
        public Int32 SourceAccountId { get; set; }
        [Column("FILE_NAME")]
        public string fileName { get; set; }
        [Column("CONNECTON_NAME")]
        public string connectionName { get; set; }
        [Column("DAYS_AGO")]
        public string daysAgo { get; set; }
        [Column("HOURS_AGO")]
        public string hoursAgo { get; set; }
        [Column("MESSAGE_TYPE")]
        public string messageType { get; set; }
        [Column("MESSAGE_1")]
        public string message_1 { get; set; }
        [Column("STATUS_ACK")]
        public string statusAck { get; set; }
        [Column("SERVER_INSERT_DATE")]
        public string ServerInsertDate { get; set; }

    }
}
