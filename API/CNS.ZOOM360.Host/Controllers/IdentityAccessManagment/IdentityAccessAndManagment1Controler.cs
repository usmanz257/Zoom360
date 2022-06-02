using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Services.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers.IdentityAccessManagment

{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.IndentityAndAccessmanagement.RouteName)]
    [ApiController]
    public class IdentityAccessAndManagment1Controler : Controller
    {

        private readonly IIdentityAndAccessManagementService _IidentityAccessManagementService;
        private readonly ILoggerManager _logger;
        private object saveIdentityAndAccessManagment;

        public IdentityAccessAndManagment1Controler(
           IIdentityAndAccessManagementService IidentityAccessManagementService,
            ILoggerManager logger)
        {
            _IidentityAccessManagementService = IidentityAccessManagementService;
            _logger = logger;
        }
        [Route(ServiceConstants.IndentityAndAccessmanagement.SaveIdentityAndAccessManagment)]
        [HttpPost]
        public async Task<IActionResult> SaveIdentityAndAccessManagment(AccessLockingModel accessLockingModel)
        {
            var worksapceData = _IidentityAccessManagementService.SaveIdentityManagement(accessLockingModel);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            
            return Ok(worksapceData);
        }

        [Route(ServiceConstants.CommonDropdown.GetIAMDropdown)]
        [HttpGet]
        public async Task<IActionResult> GetIAMDropDownList(string userId, string dropdownName)
        {
            var worksapceResult = await _IidentityAccessManagementService.GetIAMDropDownList(userId, dropdownName);
            if (worksapceResult.Count == 0)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceResult);
        }

            [Route(ServiceConstants.IndentityAndAccessmanagement.GetIdentityAndAccessManagement)]
            [HttpGet]
            public async Task<IActionResult> GetIdentityAndAccessManagment([FromQuery] GetIAMInputModel Input)
            {
                var userData = _IidentityAccessManagementService.GetIdentityAndAccessManagment(Input);
                //if (userData.Count == 0)
                //{

                //    _logger.LogInfo($"User data doesn't exist in the database.");
                //    return NotFound();
                //}
                return Ok(userData.Result);

            }
    }
}