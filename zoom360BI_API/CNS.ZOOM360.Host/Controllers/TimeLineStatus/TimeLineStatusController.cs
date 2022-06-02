using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers.TimeLineStatus
{

    [Route(ServiceConstants.ApiPrefix + ServiceConstants.timeLine.RouteName)]
    [ApiController]
    public class TimeLineStatusController : ControllerBase
    {
        private readonly ITimeLineStatusServices _timelinestatusservices;
        private readonly ILoggerManager _logger;
        public TimeLineStatusController(ITimeLineStatusServices timeLineStatusServices, ILoggerManager logger)
        {
            _timelinestatusservices = timeLineStatusServices;
            _logger = logger;
        }

        [Route(ServiceConstants.timeLine.GetAllTimeLineStatus)]
        [HttpGet]
        public async Task<IActionResult> GetTimeLineStatus([FromQuery] TimeLineInputModel Inputmodel)
        {
            var worksapceData = _timelinestatusservices.GetTimeLineStatus(Inputmodel);
            if (worksapceData == null)
            {

                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(worksapceData.Result);
        }
        [Route(ServiceConstants.timeLine.GetUserTimelineInfo)]
        [HttpGet]
        public async Task<IActionResult> GetUserTemplateInfo([FromQuery] string userId, string workSpaceId, string Client_Id)
        {
            var workspaceData = _timelinestatusservices.GetUserTemplateInfo(userId, workSpaceId, Client_Id);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(workspaceData);
        }
    
        [Route(ServiceConstants.timeLine.GetUserTimelineData)]
        [HttpGet]
        public async Task<IActionResult> GetTimeLineData([FromQuery] string userId, string workSpaceId, string Client_Id, string Widget_Id)
           {
            var workspaceData = _timelinestatusservices.GetTimeLineWidgetDetailData(userId, workSpaceId, Client_Id, Widget_Id);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(workspaceData);
        }
    }
}
    

