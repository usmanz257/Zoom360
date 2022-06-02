using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.Common;
using CNS.ZOOM360.Shared.StoreProcedures.Common.Dto;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.CommonDropdown.RouteName)]
    [ApiController]
    public class CommonDropdownListController : ControllerBase
    {
        private readonly ICommonDropdownListService _commonDropdownListService;
        private readonly ILoggerManager _logger;
       public CommonDropdownListController(ICommonDropdownListService commonDropdownListService, ILoggerManager logger) {

            _commonDropdownListService = commonDropdownListService;
            _logger = logger;
        }

        [Route(ServiceConstants.CommonDropdown.GetDropdownList)]
        [HttpGet]
        public async Task<IActionResult> GetDropdownList(string userId, string dropdownName)
        {
            var worksapceResult = await _commonDropdownListService.GetDropDownList(userId, dropdownName);
            if (worksapceResult.Count == 0)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceResult);
        }
        [Route(ServiceConstants.CommonDropdown.GetMultiSelectDropDown)]
        [HttpGet]
        public async Task<IActionResult> GetMultiSelectDropDown(string userId, string dropdownName, string subUserID)
        {
            var worksapceResult = await _commonDropdownListService.GetMultiSelectDropDown(userId, dropdownName, subUserID);
            if (worksapceResult.Count == 0)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceResult);
        }
    
    [Route(ServiceConstants.CommonDropdown.GetTreeDropdown)]
    [HttpGet]
    public async Task<IActionResult> GetTreeDropDown([FromQuery] TreeDropDownInputModel treeDropDownInputModel)
    {
        var worksapceResult = await _commonDropdownListService.GetTreeDropDownChild(treeDropDownInputModel);
        if (worksapceResult.Count == 0)
        {
            _logger.LogInfo($"Workspace data doesn't exist in the database.");
            return NotFound();
        }

        return Ok(worksapceResult);
    }
        [Route(ServiceConstants.CommonDropdown.GetDropdownWithCategory)]
        [HttpGet]
        public async Task<IActionResult> GetDropdownWithCategory(string userId, string dropdownName)
        {
            var worksapceResult = await _commonDropdownListService.GetDropDownListWithCategory(userId, dropdownName);
            if (worksapceResult.Count == 0)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceResult);
        }
        [Route(ServiceConstants.CommonDropdown.GetRollupTree)]
        [HttpGet]
        public async Task<IActionResult> GetRoolupTree([FromQuery] TreeviewInputDto treeDropDownInputModel)
        {
            var worksapceResult = await _commonDropdownListService.TreeViewData(treeDropDownInputModel);
            if (worksapceResult.Count == 0)
            {
                _logger.LogInfo($"Treeview data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceResult);
        }
    }
}