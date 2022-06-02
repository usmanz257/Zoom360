using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.TimeZoneSetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.TimeZoneSetup;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.TimeZoneSetup.RouteName)]
    [ApiController]
    public class TimeZoneSetupController : ControllerBase
    {
        private readonly ITimeZoneSetupService _timeZoneSetupService;
        private readonly ILoggerManager _logger;
        public TimeZoneSetupController(ITimeZoneSetupService timeZoneSetupService, ILoggerManager logger)
        {
            _timeZoneSetupService = timeZoneSetupService;
            _logger = logger;

        }
        [Route(ServiceConstants.TimeZoneSetup.GetTimeZoneSetup)]
        [HttpGet]
        public async Task<IActionResult> GetTimeZoneSetup([FromQuery]string userId, string workSpaceId, string CLIENT_ID)
        {
            var workspaceData = _timeZoneSetupService.GetTimeZoneSetup(userId, workSpaceId, CLIENT_ID);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }

        [Route(ServiceConstants.TimeZoneSetup.SaveTimeZoneSetup)]
        [HttpPost]
        public async Task<IActionResult> SaveTimeZoneSetup(TimezoneTestModel TimeZoneModel)
        {
            var worksapceData = _timeZoneSetupService.SaveTimeZoneSetup(TimeZoneModel);

            return Ok(worksapceData);
        }
    }
}