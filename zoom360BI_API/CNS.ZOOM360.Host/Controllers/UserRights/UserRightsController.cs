using CNS.ZOOM360.Entities.StoreProcedures.UserRights;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.UserRights;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Host.Controllers.UserRights
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.UserRights.RouteName)]
    [ApiController]
    public class UserRightsController : ControllerBase
    {
        private readonly IUserRightsServices _userrightsservices;
        private readonly ILoggerManager _logger;
        public UserRightsController(IUserRightsServices userrightsservices, ILoggerManager logger)
        {
            _userrightsservices = userrightsservices;
            _logger = logger;
        }
        [Route(ServiceConstants.UserRights.GetMainMenuRights)]
        [HttpGet]
        public async Task<IActionResult> MainMenuUserRights([FromQuery] InputUserRightsModel inputmodel)
        {
            var workspaceData = _userrightsservices.MainMenuUserRights(inputmodel);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData);
        }
    }
}

