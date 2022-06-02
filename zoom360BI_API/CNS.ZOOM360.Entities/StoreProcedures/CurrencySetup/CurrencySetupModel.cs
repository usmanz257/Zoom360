using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
namespace CNS.ZOOM360.Entities.StoreProcedures.CurrencySetup
{
    public class CurrencySetupModel
    {
        [NotMapped]
        public string userId { get; set; }
        [NotMapped]
        public int workSpaceId { get; set; }
        [NotMapped]
        public string CLIENT_ID { get; set; }

        [Column("CURRENCY_TYPE")]
        public string currencyType { get; set; }


        [Column("CURRENCY_TYPE_SIGN")]
        public string currenceyTypeSign { get; set; }
        [Column("CURRENCY_IMAGE")]
        public string currencyImage { get; set; }
        [Column("CURRENCY_COLLECTED_Data")]
        public bool currencyCollectedData { get; set; }
        [Column("CURRENCY_PREPARING_Data")]
        public bool currencyPrepareData { get; set; }
        [Column("CURRENCY_PRESENTING_Data")]
        public bool currencyPresentingData { get; set; }
        [Column("CURRENCY_CONVERSION")]
        public bool currencyConversion { get; set; }
        [Column("EXCHANGE_RATE_AND_DATA_CONVERSION")]
        public bool exchangeRateAndDataConversion { get; set; }
        [Column("CURRENCY_REPORT_HEADERS")]
        public string currencyReportHeaders { get; set; }
        [Column("CURRENCY_VISUALIZATION")]
        public string currencyVisulization { get; set; }
        [Column("CURRENCY_VALUE")]
        public string currencyValue { get; set; }
        [Column("CURRENCY_APPLY_AND_ENFORCE")]
        public string currencyApplyAndEnforce { get; set; }
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
