using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus
{
    public class MainmenuRightsModel
    {

        [Column("WIDGET_ID")]
        public string Widget_Id { get; set; }

        [Column("APPEARANCE_LOGO")]
        public string Apprearance_Logo { get; set; }
        [Column("PLATFORM_DATE")]
        public string Platform_Date { get; set; }
        [Column("PLATFORM_TIME")]
        public string Platform_Time { get; set; }
        [Column("PLATFORM_NAME")]
        public string Platform_Name { get; set; }
        [Column("CLICKS")]
        public string Clicks { get; set; }
        [Column("POSTWISE_STATUS")]
        public string Postwise_Status { get; set; }
        [Column("PLATFORM_STATUS")]
        public string Platform_status { get; set; }
        [Column("WIDGET_TYPE")]
        public string WidgetType { get; set; }
        [Column("REPORT_IMAGE")]
        public string ReportImage { get; set; }
        [Column("FLEX_4")]
        public string Sumofsales { get; set; }
        [Column("FLEX_5")]
        public string Whereplatform { get; set; }
        [Column("FLEX_6")]
        public string View { get; set; }
        [Column("FLEX_7")]
        public string Systemgenerated { get; set; }
        [NotMapped]
        public List<object> Timeline_Widget_Data { get; set; }
    }
}