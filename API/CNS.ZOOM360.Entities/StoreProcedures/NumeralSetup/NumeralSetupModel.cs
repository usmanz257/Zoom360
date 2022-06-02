using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.NumeralSetup
{
    public class NumeralSetupModel
    {
        [NotMapped]
        public string userId { get; set; }
        [Column("WORKSPACE_ID")]
        public string workSpaceId { get; set; }
        [Column("CLIENT_ID")]
        public string clientId { get; set; }
        [Column ("NUMBERING_SYSTEM_FORMAT")]
        public string numberingSystemFormat { get; set; }
        [Column("NUMBER_SIGN_TYPE")]
        public string numberSignType { get; set; }
        [Column("SIGN_FORMAT")]
        public string signFormat { get; set; }
        [Column("POSITIVE_NUMBER_COLOR_CODE")]
        public string positiveNumbeColorCode { get; set; }
        [Column("NEGATIVE_NUMBER_COLOR_CODE")]
        public string negitiveNumberColorCode { get; set; }
        [Column("NUMBER_CONVERSION")]
        public string numberConversion { get; set; }
        [Column("NUMBER_VALUE_CONVERSION")]
        public string numberValueConversion { get; set; }
        [Column("NUMBER_VALUE")]
        public string numberValue { get; set; }
        [Column("SELECTIVE_DECIMAL_PLACES")]
        public int selectiveDecimalPlaces { get; set; }
        [Column("FULL_DECIMAL_PLACES")]
        public bool fullDecimalPlaces { get; set; }
        [Column("ROUND_OFF_NUMBER")]
        public string roundOffNumbers { get; set; }
        [Column("SELECTIVE_ROUND_OFF_PLACES")]
        public int selectiveRoundOffPlace { get; set; }
        [Column("APPLY_AND_ENFORCE_NUMBER")]
        public string numberApplyAndEnforce { get; set; }
        [Column("BSTATUS")]
        public string bStatus { get; set; }
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
