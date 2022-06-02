using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.DynamicMenu;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.DynamicMenuItem.RouteName)]
    [ApiController]
    public class DynamicMenuItemController : ControllerBase
    {
        private readonly IDynamicMenuItemService _dynamicMenuItemService;
        private readonly ILoggerManager _logger;
        public DynamicMenuItemController(IDynamicMenuItemService dynamicMenuItemService, ILoggerManager logger) {
            _dynamicMenuItemService = dynamicMenuItemService;
            _logger = logger;
        }

        [Route(ServiceConstants.DynamicMenuItem.GetMenulist)]
        [HttpGet]
        public async Task<IActionResult> GetMenulist(string UserId,string SubUserId, string WorkspaceId, string Client_Id,string Mode_Id)
        {
            var menuList = _dynamicMenuItemService.GetMenulist(UserId, SubUserId, WorkspaceId, Client_Id, Mode_Id);

            if (menuList.Result.Count ==0)
            {
                return NotFound();
            }

            return Ok(menuList.Result);
        }
        [Route(ServiceConstants.DynamicMenuItem.GetSubMenuSectionItems)]
        [HttpGet]
        public async Task<IActionResult> GetSubMenu(string UserId, string SubUserId, string WorkspaceId, string Client_Id, string MainMenuID, string TreeLevel, string TreeNode)
        {
            var submenu = _dynamicMenuItemService.GetSubMenuSectionItems(UserId, SubUserId, WorkspaceId, Client_Id, MainMenuID, TreeLevel, TreeNode);

            if (submenu.Result.Count == 0)
            {
                return NotFound();
            }

            return Ok(submenu.Result);
        }
    }
}


