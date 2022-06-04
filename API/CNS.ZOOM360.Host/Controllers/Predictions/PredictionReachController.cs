using CNS.ZOOM360.Entities.StoreProcedures.Predictions;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.Predictions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Host.Controllers.Predictions
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.Predictions.RouteName)]
    [ApiController]
    public class PredictionReachController : ControllerBase
    {
        private readonly IPredictionReachServices _PredictionReachServices;
        private readonly ILoggerManager _logger;
        public PredictionReachController(IPredictionReachServices PredictionReachServices, ILoggerManager logger)
        {
            _PredictionReachServices = PredictionReachServices;
            _logger = logger;
        }

        [Route(ServiceConstants.Predictions.GetPredictionReach)]
        [HttpGet]
        public async Task<IActionResult> GetPredictionReachData([FromQuery] string UserID, string WorkspaceId, string ClientId)
        {
            var PredictionReachData = _PredictionReachServices.GetPredictionReachData(UserID, WorkspaceId, ClientId);
            if (PredictionReachData.Count == 0)
            {
                _logger.LogInfo($"Extract List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(PredictionReachData);
        }
        [Route(ServiceConstants.Predictions.SavePrediction)]
        [HttpPost]
        public async Task<IActionResult> GetPredictionReachData(SavePredictionModel savePrediction)
        {
            var PredictionReachData = _PredictionReachServices.SavePredictionSetup(savePrediction);
            if (PredictionReachData.Result == "")
            {
                _logger.LogInfo($"Extract List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(PredictionReachData);
        }

        [Route(ServiceConstants.Predictions.GetProductionProcessData)]
        [HttpGet]
        public async Task<IActionResult> GetProductionProcess([FromQuery] string UserID, string WorkspaceId, string ClientId, string ProdctionProcess)
        {
            var productionprocess = _PredictionReachServices.GetProductionProcess(UserID, WorkspaceId, ClientId, ProdctionProcess);
            if (productionprocess.Count == 0)
            {
                _logger.LogInfo($"Extract List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(productionprocess);
        }

        [Route(ServiceConstants.Predictions.GetMarketingStrategyData)]
        [HttpGet]
        public async Task<IActionResult> GetMarketingWidgetData([FromQuery] MarketingInputDTOModel marketingInput)
        {
            var worksapceData = _PredictionReachServices.GetMarketingWidgetData(marketingInput);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData.Result);
        }
    }
}
