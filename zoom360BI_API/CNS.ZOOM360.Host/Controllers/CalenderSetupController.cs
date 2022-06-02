using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.CalenderSetup;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.CalenderSetup.RouteName)]
    [ApiController]
    public class CalenderSetupController : ControllerBase
    {
        private readonly ICalenderSetupService _CalenderSetupService;
        private readonly ILoggerManager _logger;

        public CalenderSetupController(ICalenderSetupService CalenderSetupService, ILoggerManager logger) {
            _CalenderSetupService = CalenderSetupService;
            _logger = logger;
        }

        [Route(ServiceConstants.CalenderSetup.SaveCalenderSetup)]
        [HttpPost]
        public async Task<IActionResult> SaveWorkspaceSetup(CalenderSetupModel modal)
        {
            var worksapceData = _CalenderSetupService.SaveCalenderSetup(modal);

            return Ok(worksapceData);
        }
        [Route(ServiceConstants.CalenderSetup.GetCalenderSetup)]
        [HttpGet]
        public async Task<IActionResult> GetCalenderSetup( string userId, string workspaceId, string ClientId)
        {
            var workspaceData = _CalenderSetupService.GetCalenderSetup(userId, workspaceId, ClientId);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(workspaceData.Result);
        }


    }
}