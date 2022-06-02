using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights.AiInsightDto;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers.AIinsights
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.AiInsights.RouteName)]
    [ApiController]
    public class AiInsightsDataController : ControllerBase
    {
        private readonly IAiInsightsServices _AiInsightsServices;
        private readonly ILoggerManager _logger;
        public AiInsightsDataController(IAiInsightsServices AiInsightsServices, ILoggerManager logger)
        {
            _AiInsightsServices = AiInsightsServices;
            _logger = logger;
        }
        [Route(ServiceConstants.AiInsights.GetAiInsightsData)]
        [HttpGet]
        public async Task<IActionResult> GetAiInsightsData([FromQuery] string UserID, string WorkspaceId, string ClientId)
        {
            var worksapceData = _AiInsightsServices.GetAiInsightsData(UserID, WorkspaceId, ClientId);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData.Result);
        }
        [Route(ServiceConstants.AiInsights.GetAiInsightsWidgetData)]
        [HttpGet]
        public async Task<IActionResult> GetAiInsightsWidgetData([FromQuery] AiInsightInputModal AiInsightInput)
        {
            var worksapceData = _AiInsightsServices.GetAiInsightsWidgetData(AiInsightInput);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData.Result);
        }
        [Route(ServiceConstants.AiInsights.GetColumNameAiInsight)]
        [HttpGet]
        public async Task<IActionResult> GetColumnName([FromQuery] string UserID, string WorkspaceId, string ClientId, string WidgetCategory)
        {
            var worksapceData = _AiInsightsServices.GetColumnName(UserID, WorkspaceId, ClientId, WidgetCategory);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData);
        }

        [Route(ServiceConstants.AiInsights.SaveLikeAndDislike)]
        [HttpPost]

        public async Task<IActionResult> SaveLikeAndDislike(SaveLikeAndDislikeModel saveLikeAndDislikeModel)
        {
            var worksapceData = _AiInsightsServices.SaveLikeAndDislike(saveLikeAndDislikeModel);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData);
        }

    }
}
