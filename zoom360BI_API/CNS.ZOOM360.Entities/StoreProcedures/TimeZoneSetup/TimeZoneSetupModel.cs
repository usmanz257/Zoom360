using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.TimeZoneSetup
{
    public class TimeZoneSetupModel
    {
        [NotMapped]
        public string userId { get; set; }
        [NotMapped]
        public string workSpaceId { get; set; }
        [NotMapped]
        public string CLIENT_ID { get; set; }
        [Column("DATE_FORMAT_TYPE")]
        public string dataFormatType { get; set; }
        [Column("DATE_FORMAT")]
        public string dateFormat { get; set; }
        [Column("CLOCK_IMAGE")]
        public string clockImage { get; set; }
        [Column("DATE_COLLECTED_DATA")]
        public bool dateCollectedData { get; set; }
        [Column("DATE_PREPARING_DATA")]
        public bool datePreparingData { get; set; }
        [Column("DATE_PRESENTING_DATA")]
        public bool datePresentingData { get; set; }
        [Column("DATE_CONVERSION")]
        public bool dateConversion { get; set; }
        [Column("DATE_CONVERSION_VALUE")]
        public bool dateConversionValue { get; set; }
        [Column("TIME_ZONE")]
        public string  timeZone { get; set; }
        [Column("TIME_ZONE_TYPE")]
        public string timeZoneType { get; set; }
        [Column("DATE_FORMAT_REPORTS")]
        public string dateFormatReports { get; set; }
        [Column("REPORTS_DATE_FORMAT")]
        public string reportsDate { get; set; }
        [Column("DATE_FORMAT_VISUALIZATION")]
        public string dateFormatVisulization { get; set; }
        [Column("VISUALIZATION_DATE_FORMAT")]
        public string visulizationDate { get; set; }
        [Column("TIME_FORMAT_REPORTS")]
        public string timeFormatReports { get; set; }
        [Column("REPORTS_TIME_FORMAT")]
        public string reportTime { get; set; }
        [Column("TIME_FORMAT_VISUALIZATION")]
        public string timeFormatVisualization { get; set; }
        [Column("VISUALIZATION_TIME_FORMAT")]
        public string visualizationTime { get; set; }
        [Column("APPLY_AND_ENFORCE_DATETIME")]
        public string applyAndEnforceDatetime { get; set; }
        [Column("BSTATUS")]
        public string bStatus { get; set; }
    }
}

