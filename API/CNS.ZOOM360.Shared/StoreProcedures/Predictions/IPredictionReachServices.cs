using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.Predictions;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights.AiInsightDto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.Predictions
{
  public  interface IPredictionReachServices
    {
        public List<PredictionReachModel> GetPredictionReachData(string UserID, string WorkspaceId, string ClientId);
        Task<string> SavePredictionSetup(SavePredictionModel input);
        public List<ProductionProcessModel> GetProductionProcess(string UserID, string WorkspaceId, string ClientId, string ProdctionProcess);

        public  Task<List<MarketingStrategyModel>> GetMarketingWidgetData(MarketingInputDTOModel marketingInput);
        public List<GetAIWidgetGraphDataModel> GetAiInsightsGraphChartData(MarketingInputDTOModel marketingInput);

    }
}
