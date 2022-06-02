using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.NumeralSetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.NumeralSetup;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.NumeralSetup.RouteName)]
    [ApiController]
    public class NumeralSetupController : ControllerBase
    {
        private readonly INumeralSetupService _numeralSetupService;
        private readonly ILoggerManager _logger;
        public NumeralSetupController(INumeralSetupService numeralSetupService , ILoggerManager logger) {
            _numeralSetupService = numeralSetupService;
            _logger = logger;
        }
        [Route(ServiceConstants.NumeralSetup.GETNUMERALSSETUPLIST)]
        [HttpGet]
        public async Task<IActionResult> GetNumeralSetup([FromQuery]string userId, string workSpaceId, string clientId)
        {
            var workspaceData = _numeralSetupService.GetNumeralSetup(userId, workSpaceId, clientId);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }

        [Route(ServiceConstants.NumeralSetup.SaveNumeralSetup)]
        [HttpPost]
        public async Task<IActionResult> SaveNumeralSetup(NumeralSetupModel model)
        {
            var displaySetting = _numeralSetupService.SaveNumeralSetup(model);
            if (displaySetting.Result == null)
            {
                _logger.LogError("");
                return NotFound(displaySetting);
            }

            return Ok(displaySetting);

        }

    }
}