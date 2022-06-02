using CNS.ZOOM360.Entities.StoreProcedures.UserAccessManagment;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement;
using CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Host.Controllers.UserAccessManagment
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.UserAccessManagement.RouteName)]
    [ApiController]
    public class UserAccessManagementController : Controller
    {
       
      
        private readonly IUserAccessManagementService _userAccessManagementService;
        private readonly ILoggerManager _logger;
        public UserAccessManagementController(
            IUserAccessManagementService userAccessManagementService,
            ILoggerManager logger)
        {
            _userAccessManagementService = userAccessManagementService;
            _logger = logger;
        }
        [Route(ServiceConstants.UserAccessManagement.SaveUserAccessManagmentSetup)]
        [HttpPost]
        public async Task<IActionResult> SaveUserAccessSetup(SaveUserAccessManagementModel saveUserAccessManagementModel)
        {
            var worksapceData = _userAccessManagementService.SaveUserAccessManagementSetup(saveUserAccessManagementModel);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(worksapceData);
        }
        [Route(ServiceConstants.UserAccessManagement.GetUserList)]
        [HttpGet]
        public IActionResult getUserList([FromQuery] UserListInputModel Input)
        {
            var ExtractData = _userAccessManagementService.GetUserlist(Input);
            //if (ExtractData.Result.Count == 0)
            //{

            //    _logger.LogInfo($"User List data doesn't exist in the database.");
            //    return NotFound();
            //}

            return Ok(ExtractData);
        }
        [Route(ServiceConstants.UserAccessManagement.GetUserAccessManagement)]
        [HttpGet]
        public async Task<IActionResult> GetUserAccessManagement([FromQuery] GetUserAccessManagmentInputModel Input)
        {
            var userData = _userAccessManagementService.GetUserAccessManagment(Input);
            //if (userData.Count == 0)
            //{

            //    _logger.LogInfo($"User data doesn't exist in the database.");
            //    return NotFound();
            //}
            return Ok(userData.Result);
        }

    }
}
