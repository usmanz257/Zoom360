using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Entities.StoreProcedures.CurrencySetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.CurrencySetup;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.CurrencySetup.RouteName)]
    [ApiController]
    public class CurrencySetupController : ControllerBase
    {
        private readonly ICurrencySetupService _CurrencySetupService;
        private readonly ILoggerManager _logger;
        public CurrencySetupController(ICurrencySetupService CurrencySetupService, ILoggerManager logger) {
            _CurrencySetupService = CurrencySetupService;
            _logger = logger;
        }

        [Route(ServiceConstants.CurrencySetup.SaveCurrencySetup)]
        [HttpPost]
        public async Task<IActionResult> SaveCurrencySetup(CurrencySetupModel modal)
        {
            var CurrencyData = _CurrencySetupService.SaveCurrencySetup(modal);
            if (CurrencyData.Result == null)
            {
                _logger.LogError("");
                return NotFound(CurrencyData);
            }

            return Ok(CurrencyData);
        }

        [Route(ServiceConstants.CurrencySetup.GetCurrencySetupList)]
        [HttpGet]
        public async Task<IActionResult> GetCurrencySetup(string userId, string workSpaceId, string CLIENT_ID, string currenceyTypeSign)
        {
            var workspaceData = _CurrencySetupService.GetCurrencySetup(userId, workSpaceId, CLIENT_ID, currenceyTypeSign);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }

    }

}