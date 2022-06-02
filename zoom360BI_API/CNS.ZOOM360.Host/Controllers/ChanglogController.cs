using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.ChangeLog;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.ChangeLog.RouteName)]
    [ApiController]
    public class ChangLogController : ControllerBase
    {
        private readonly IChangeLogService _changeLogService;
        private readonly ILoggerManager _logger;
        public ChangLogController(IChangeLogService changeLogService, ILoggerManager logger) {
            _changeLogService = changeLogService;
            _logger = logger;
        }

        [Route(ServiceConstants.ChangeLog.GETCHANGESLOGLIST)]
        [HttpGet]
        public async Task<IActionResult> Getlist(string UserId, string WorkspaceId, string client_id)
        {
            var workspaceData = _changeLogService.getChangeLogList(UserId, WorkspaceId, client_id);
            if (workspaceData.Result.Count == 0)
            {

                _logger.LogInfo($"Change Log data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }

    }
}