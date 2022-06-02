using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights.AiInsightDto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace CNS.ZOOM360.Shared.StoreProcedures.AIinsights
{
    public interface IAiInsightsServices
    {
        Task<List<GetAiInsightsModel>> GetAiInsightsData(string UserID, string WorkspaceId,string ClientId);
        Task<List<AIinsightWidgetDataModel>> GetAiInsightsWidgetData(AiInsightInputModal AiInsightInput);
        List<GetAIWidgetGraphDataModel> GetAiInsightsGraphChartData(AiInsightInputModal AiInsightInput);

        List<GetColumnsAiInsightsModel> GetColumnName(string UserID, string WorkspaceId, string ClientId, string WidgetCategory);

        Task<string> SaveLikeAndDislike(SaveLikeAndDislikeModel saveLikeAndDislikeModel);
    }
}
