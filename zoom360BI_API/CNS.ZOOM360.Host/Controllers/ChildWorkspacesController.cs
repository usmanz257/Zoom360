using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Entities.StoreProcedures;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.ChildWorkSpace.RouteName)]
    [ApiController]
    public class ChildWorkspacesController : ControllerBase
    {
        private readonly IChildWorkspaces _childWorkspaceService;
        private readonly ILoggerManager _logger;
        public ChildWorkspacesController(IChildWorkspaces ChildWorkspaceSetupService, ILoggerManager logger)
        {
            _childWorkspaceService = ChildWorkspaceSetupService;
            _logger = logger;
        }
       

        
        [Route(ServiceConstants.ChildWorkSpace.SaveChildWorkspaces)]
        [HttpPost]
        public async Task<IActionResult> SaveChildWorkspace(ChildWorkspacesModel model)
        {
            var displaySetting = _childWorkspaceService.SaveChildWorkspace(model);
            if (displaySetting.Result == null)
            {
                _logger.LogError("");
                return NotFound(displaySetting);
            }

            return Ok(displaySetting);

        }
        [Route(ServiceConstants.ChildWorkSpace.GETCHILDWORKSPACESLIST)]
        [HttpGet]
        public async Task<IActionResult> GetChildWorkspace(string userId, string workSpaceId, string CLIENT_ID)
        {
            var workspaceData = _childWorkspaceService.GetChildWorkspace(userId, workSpaceId, CLIENT_ID);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData.Result);
        }
    }
}