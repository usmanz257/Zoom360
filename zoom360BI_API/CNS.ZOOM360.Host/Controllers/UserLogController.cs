using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.UserLog.RouteName)]
    [ApiController]
    public class UserLogController : Controller
    {
        

        private readonly IUserLogServices _UserLogSetupService;
        private readonly ILoggerManager _logger;
        public UserLogController(IUserLogServices userLogSetupService, ILoggerManager logger)
        {
            _UserLogSetupService = userLogSetupService;
            _logger = logger;
        }
        [Route(ServiceConstants.UserLog.GETUSERWORKSPACELIST)]
        [HttpGet]
        public async Task<IActionResult> GetUserLogSetup([FromQuery] string userId, string workSpaceId, string ClientId)
        {
            var workspaceData = _UserLogSetupService.GetUserLogSetup(userId, workSpaceId, ClientId);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(workspaceData.Result);
        }

    }
}
