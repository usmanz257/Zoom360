using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.AIinsights.AiInsightDto
{
   public class AiInsightInputModal
    {
		public string UserId { get; set; }
		public string WorkSpaceId { get; set; }
		public string Client_Id { get; set; }
		public string ConnectorId { get; set; }
		public string AccountId { get; set; }
		public string WidgetCategory { get; set; }
		public string AttributeId { get; set; }
		public string Attributes { get; set; }
		public string WidgetID { get; set; }
		////public string ChartType { get; set; }

	}
}
