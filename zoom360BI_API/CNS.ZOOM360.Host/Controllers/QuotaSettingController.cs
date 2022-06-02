using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.QuotaSettings;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.QuotaSettings;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.QuotaSetting.RouteName)]
    [ApiController]
    public class QuotaSettingController : ControllerBase
    {
        private readonly IQuotaSettingService _quotaSettingService;
        private readonly ILoggerManager _logger;
        public QuotaSettingController(IQuotaSettingService quotaSettingService, ILoggerManager logger) {
            _quotaSettingService = quotaSettingService;
            _logger = logger;
        }
        [Route(ServiceConstants.QuotaSetting.GetQuotaSetting)]
        [HttpGet]
        public async Task<IActionResult> GetQuotaSetting([FromQuery] string userId, string workSpaceId, string clientId)
        {
            var workspaceData = _quotaSettingService.GetQuotaSetting(userId, workSpaceId, clientId);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }

        [Route(ServiceConstants.QuotaSetting.SaveQuotaSetting)]
        [HttpPost]
        public async Task<IActionResult> SaveQuotaSetting(QuotaSettingsModel model)
        {
            var quotaSetting = _quotaSettingService.SaveQuotaSetting(model);
            if (quotaSetting.Result == null)
            {
                _logger.LogError("");
                return NotFound(quotaSetting);
            }

            return Ok(quotaSetting);

        }
    }
}