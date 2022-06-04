using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Predictions
{
   public class MarketingInputDTOModel
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

	}
}
