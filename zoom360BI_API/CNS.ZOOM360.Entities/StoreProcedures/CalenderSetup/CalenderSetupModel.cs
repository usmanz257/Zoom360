using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.CalenderSetup
{
    public class CalenderSetupModel 
    {
        [NotMapped]
        public string userId { get; set; }
        [NotMapped]
        public int workspaceId { get; set; }
        [NotMapped]
        public string ClientId { get; set; }
        [Column("CALENDER_SETUP")]
        public string calenderSetup { get; set; }
        [Column("BUSSINESS_YEAR_DATE")]
        public string bussinessYearDate { get; set; }
        [Column("FINANCIAL_YEAR_DATE")]
        public string finacialYearDate { get; set; }
        [Column("REPORTING_YEAR_DATE")]
        public string reportingYearDate { get; set; }
        [Column("WEEK_START_DAY")]
        public string weekStartDay { get; set; }
        [Column("ANNUAL_HOLIDAY_CALDENER")]
        public string annualHolidayCalender { get; set; }
        [Column("ANNUAL_CAMPAIGNS_CALDENER")]
        public string annualCampaignCalender { get; set; }
        [Column("NOTIFY_CAMPAIGNS_CALDENER")]
        public bool notifyCampaignsCalender { get; set; }
        [Column("MILESTONE_ANNUAL_HOLIDAY_CALDENER")]
        public string milestoneAnnualHolidayCalender { get; set; }
        [Column("NOTIFY_MILESTONE_CALDENER")]
        public bool notifyMilestoneCalender { get; set; }
        [Column("CALENDER_APPLY_AND_ENFORCE")]
        public string calenderApplyAndEnforce { get; set; }
        [Column("BSTATUS")]
        public string bstatus { get; set; }
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
