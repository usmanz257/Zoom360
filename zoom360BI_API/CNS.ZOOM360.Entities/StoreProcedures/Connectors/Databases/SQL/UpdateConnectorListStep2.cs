using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class UpdateConnectorListStep2
    {
        [Column("ACCOUNT_DISPLAY_NAME")]
        public string accountdisplayname { get; set; }
        [Column("ENABLED_CONNECTION")]
        public string enableconnection { get; set; }
        [Column("EMAIL_ID")]
        public string Emailid { get; set; }
        [Column("AUTHORIZATION_GRANT")]
        public string authorizationgrant { get; set; }
        [Column("status_notify_grant")]
        public string StatusnotifyGrant { get; set; }
        [Column("FIELD_NAME")]
        public string Filedname { get;set; }
        [Column("FIELD_VALUE")]
        public string Fieldvalue { get;set; }
        [Column("BSTATUS")]
        public string BStatusforvarification { get; set; }








    }
}
