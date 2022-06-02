using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto;
using CNS.ZOOM360.Shared.StoreProcedures.ConnectionStatus;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers.ConnectionStatus
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.ConnectionLog.RouteName)]
    [ApiController]
    public class ConnectionLogController : ControllerBase
    {
       
            private readonly IConnectionLogService _connectionLogService;
            private readonly ILoggerManager _logger;
            public ConnectionLogController(IConnectionLogService connectionLogService, ILoggerManager logger)
            {
                _connectionLogService = connectionLogService;
                _logger = logger;
            }


            [Route(ServiceConstants.ConnectionLog.RecentConnectionLog)]
            [HttpGet]
            public async Task<IActionResult> getRecentConnectionLog([FromQuery] ExtractListInputModel Input)
            {
                var ExtractData = _connectionLogService.GetAllConnections(Input);
                if (ExtractData.Result.Count == 0)
                {

                    _logger.LogInfo($"Recent Connection List data doesn't exist in the database.");
                    return NotFound();
                }

                return Ok(ExtractData.Result);
            }

        
    }
}
