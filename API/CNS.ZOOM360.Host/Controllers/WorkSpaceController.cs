using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace;
using CNS.ZOOM360.Entities.StoreProcedures.Workspace;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.WorkspaceSetup.RouteName)]
    [ApiController]
    public class WorkspaceSetupController : ControllerBase
    {
        private readonly IWorkspaceSetupService _WorkspaceService;
        private readonly ILoggerManager _logger;
        public WorkspaceSetupController(IWorkspaceSetupService WorkspaceSetupService, ILoggerManager logger)
        {
            _WorkspaceService = WorkspaceSetupService;
            _logger = logger;
        }

        [Route(ServiceConstants.WorkspaceSetup.GetWorkspaceSetupSettings)]
        [HttpGet]
        public async Task<IActionResult> GetWorkspaceSetupSettings(string UserId, string ClientId, string WorkspaceId)
        {
            var worksapceData = _WorkspaceService.GetWorkspaceSetupSettings(UserId, ClientId, WorkspaceId);
            if (worksapceData == null)
            {
                
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData);
        }

        [Route(ServiceConstants.WorkspaceSetup.GetWorkspaceSetupList)]
        [HttpGet]
        public async Task<IActionResult> GetWorkspaceSetupList(string UserId, string ClientId, string WorkspaceId, string workSpaceName, string parentWorkSpace)
        {
            var worksapceResult = await _WorkspaceService.GetWorkspaceSetupList(UserId,WorkspaceId, ClientId,workSpaceName,parentWorkSpace);
            if (worksapceResult == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceResult);
        }

       


        [Route(ServiceConstants.WorkspaceSetup.SaveWorkspaceSetup)]
        [HttpPost]
        public async Task<IActionResult> SaveWorkspaceSetup(WorkspaceSetup modal)
        {
            var worksapceData = _WorkspaceService.SaveWorkspaceSetup(modal);
            return Ok(worksapceData);
        }
    }
}