using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.Load;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.Load;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.Load.RouteName)]
    [ApiController]
    public class LoadController : Controller
    {
        
        private readonly ILoad _load;
        private readonly ILoggerManager _logger;
        public LoadController(ILoad load, ILoggerManager logger)
        {
            _load = load;
            _logger = logger;
        }
        [Route(ServiceConstants.Load.GetdestinationList)]
        [HttpGet]
        public async Task<IActionResult> getdestinationlist([FromQuery]DestinationListModel Input)
        {
            var destinationList = _load.GetDestinationList(Input);
            if (destinationList.Result.Count == 0)
            {

                _logger.LogInfo($"Destination List doesn't exist in the database.");
                return NotFound();
            }

            return Ok(destinationList.Result);
        }

    }
}