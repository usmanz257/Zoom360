using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.DataGovernance;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.DataGovernance;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.DataGovernance.RouteName)]
    [ApiController]
    public class DataGovernanceController : ControllerBase
    {
        private readonly IDataGovernanceService _DataGovernanceService;
        private readonly ILoggerManager _logger;
        public DataGovernanceController(IDataGovernanceService DataGovernanceService, ILoggerManager logger) {
            _DataGovernanceService = DataGovernanceService;
            _logger = logger;
        }

        [Route(ServiceConstants.DataGovernance.SaveDataGovernance)]
        [HttpPost]
        public async Task<IActionResult> Save(DataGovernanceModel modal)
        {
            var dataGovernance = _DataGovernanceService.SaveDataGovernance(modal);
            if (dataGovernance.Result == null)
            {
                _logger.LogError("");
                return NotFound(dataGovernance);
            }

            return Ok(dataGovernance);
        }
        [Route(ServiceConstants.DataGovernance.GetDataGovernance)]
        [HttpGet]
        public async Task<IActionResult> GetDataGovernance(string userId, string workSpaceId, string clientId)
        {
            var workspaceData = _DataGovernanceService.GetDataGovernance(userId, workSpaceId, clientId);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }
    }
}