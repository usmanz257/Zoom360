using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Predictions
{
    public class MarketingStrategyModel
    {
        [Column("WIDGET_CATEGORY")]
        public string WidgetCategory { get; set; }
        [Column("WIDGET_ID")]
        public string WidgetID { get; set; }
        [Column("ATTRIBUTE_ID")]
        public string AttributeID { get; set; }
        [Column("ATTRIBUTE")]
        public string Attribute { get; set; }
        [Column("CHART_TYPE")]
        public string chartType { get; set; }

        //[Column("WIDGET_TYPE")]
        //public string widgetType { get; set; }

        [Column("SEVERITY_COLOR")]
        public string SeverityColor { get; set; }

        [Column("SEVERITY_LEVEL")]
        public string SeverityLevel { get; set; }
        [Column("WORKSPACE_NAME")]
        public string WorkspaceName { get; set; }
        [Column("SUB_CATEGORY")]
        public string SubCategory { get; set; }
        [Column("CONNECTOR_ICON")]
        public string ConnectorIcon { get; set; }
        [Column("WORKSPACE_COLOR")]
        public string WorkspaceColor { get; set; }

        [Column("ML_OUTLIER")]
        public string MlOutlier { get; set; }

        [Column("ML/AI_OUTCOME")]
        public string MlaiOutcome { get; set; }
        [Column("DETAIL_DESCRIPTION")]
        public string DetailDescription { get; set; }

        [Column("TOTAL_LIKE")]
        public int? TotalLike { get; set; }
        [Column("TOTAL_DISLIKE")]
        public int? TotalDislike { get; set; }

        [Column("ISLIKE")]
        public bool? IsLike { get; set; }
        [Column("DISLIKE")]
        public bool? Dislike { get; set; }
        [Column("TOTAL_SHARE")]
        public int TotalShare { get; set; }
        [Column("TOTAL_COMMENTS")]
        public int TotalComments { get; set; }
        [NotMapped]
        public object Chart { get; set; }
        [NotMapped]
        public object Data { get; set; }
    }
}
