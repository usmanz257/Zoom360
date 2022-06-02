using CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.DynamicGridStructure;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Host.Controllers.DynmaicGridStructure
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.DynamicGridStructure.RouteName)]
    [ApiController]
    public class DynamicGridStructureController : Controller
    {
        
            private readonly IDynamicGridStructureService _dynamicGridStructureService;
            private readonly ILoggerManager _logger;
            public DynamicGridStructureController(IDynamicGridStructureService dynamicGridStructureService, ILoggerManager logger)
            {
                _dynamicGridStructureService = dynamicGridStructureService;
                _logger = logger;
            }

            [Route(ServiceConstants.DynamicGridStructure.getGridStructure)]
            [HttpGet]
            public async Task<IActionResult> GetTemplate(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel)
            {
                var submenu = _dynamicGridStructureService.GetTemplate(UserId,  subUserId,  WorkspaceId, Client_Id, ParentId, ChildId, TreeLevel);

                //if (submenu.Result.Count == 0)
                //{
                //    return NotFound();
                //}

                return Ok(submenu);
            }
        [Route(ServiceConstants.DynamicGridStructure.saveTemplateStructure)]
        [HttpPost]
        public async Task<IActionResult> SaveTemplate(SaveTemplateModel saveTemplateinputModel)
        {
            var message = _dynamicGridStructureService.SaveTemplate(saveTemplateinputModel);

            //if (submenu.Result.Count == 0)
            //{
            //    return NotFound();
            //}

            return Ok(message);
        }

    }
}
