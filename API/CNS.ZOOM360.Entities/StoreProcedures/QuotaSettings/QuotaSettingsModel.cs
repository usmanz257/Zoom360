using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.QuotaSettings
{
    public class QuotaSettingsModel
    {
        [NotMapped]
        public string UserId { get; set; }
        [NotMapped]
        public int WorkSpaceId { get; set; }
        [NotMapped]
        public string clientId { get; set; }
        [Column("QUOTA_LIMIT")]
        public string QuotaLimit { get; set; }
        [Column("QUOTA_TYPE")]
        public string QuotaType { get; set; }
        [Column("QUOTA_USAGE_CYCLE")]
        public string QuotaUsageCycle { get; set; }
        [Column("QUOTA_START_DATE")]
        public string QuotaStartDate { get; set; }
        [Column("QUOTA_END_DATE")]
        public string QuotaEndDate { get; set; }
        [Column("BSTATUS")]
        public string BStatus { get; set; }
        [NotMapped]
        public string ClientDate { get; set; }
        [NotMapped]
        public string ClientTime { get; set; }
        [NotMapped]
        public string ClientTimeZone { get; set; }
        [NotMapped]
        public string Remark1 { get; set; }
        [NotMapped]
        public string Remark2 { get; set; }
        [NotMapped]
        public string Remark3 { get; set; }
        [NotMapped]
        public string Remark4 { get; set; }
        [NotMapped]
        public string Flex1 { get; set; }
        [NotMapped]
        public string Flex2 { get; set; }
        [NotMapped]
        public string Flex3 { get; set; }
        [NotMapped]
        public string Flex4 { get; set; }
        [NotMapped]
        public string Flex5 { get; set; }
        [NotMapped]
        public string Flex6 { get; set; }
        [NotMapped]
        public string Flex7 { get; set; }
        [NotMapped]
        public string Flex8 { get; set; }
        [NotMapped]
        public string Flex9 { get; set; }
        [NotMapped]
        public string Flex10 { get; set; }
        [NotMapped]
        public string Flex11 { get; set; }
        [NotMapped]
        public string Flex12 { get; set; }
        [NotMapped]
        public string Flex13 { get; set; }
        [NotMapped]
        public string Flex14 { get; set; }
        [NotMapped]
        public string Flex15 { get; set; }
        [NotMapped]
        public string Flex16 { get; set; }
    }
}
