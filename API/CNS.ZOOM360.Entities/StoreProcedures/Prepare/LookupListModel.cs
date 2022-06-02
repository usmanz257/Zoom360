using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
    public class LookupListModel
    {
        [Column("LOOKUP_ID")]
        public int lookupid { get; set; }
        [Column("WORKSPACE_NAME")]
        public string workspacename { get; set; }
        [Column("LOOKUP_DISPLAY_NAME")]
        public string lookupdisplayname { get; set; }
        [Column("ACCOUNT_DISPLAY_NAME")]
        public string accountdispalyname { get; set; }
        [Column("ENABLED")]
        public string enableconnection { get; set; }
        [Column("LOOKUP_FIELDS")]
        public string lookupfield { get; set; }

        [Column("VISIBILTY")]
        public string visibiltyconnection { get; set; }

        [Column("DESTINATION_FIELD_SELECTION")]
        public string destinationfieldselection { get; set; }
        [Column("DESTINATION_FIELD_VALUE")]
        public string destinationfieldvalue { get; set; }
        [Column("SOURCE_FIELD_SELECTION")]
        public string sourcefieldselection { get; set; }
        [Column("SOURCE_FIELD_VALUE")]
        public string sourcefieldvalue { get; set; }
        [Column("CONNECTOR_ID")]

        public int connecrtorid { get; set; }
        [Column("SOURCE_ACCOUNT_ID")]
        public int sourceaccountid { get; set; }
        [Column("TABLE_NAME")]
        public string tablename { get; set; }
        [Column("LOAD_STATUS")]
        public string loadstatus { get; set; }
        [Column("DATA_OPTIONS")]
        public string datainsertionoption { get; set; }










    }
}
