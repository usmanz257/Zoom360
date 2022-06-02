using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Predictions
{
   public  class SavePredictionModel
    {
        public string userID { get; set; }
        public string workspaceID { get; set; }
        public string clientId { get; set; }
        public string scriptName { get; set; }
        public string AmountSpentUSD { get; set; }
        public string results { get; set; }
        public string impressions { get; set; }
        public string purchaseConversionValueUSD { get; set; }
        public string reach { get; set; }
        public string resultTypeCode { get; set; }
        public string purchaseROASReturnonAdSpend { get; set; }
        public string costPerResultUSD { get; set; }
        public string Status { get; set; }
        public string PredictedResult { get; set; }
    }
}
