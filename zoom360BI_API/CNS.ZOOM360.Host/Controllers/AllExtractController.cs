using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.AllExtract.RouteName)]
    [ApiController]
    public class AllExtractController : ControllerBase
    {
        private readonly IAllExtractService _allExtractService;
        private readonly ILoggerManager _logger;
        public AllExtractController(IAllExtractService allExtractService, ILoggerManager logger) {
            _allExtractService = allExtractService;
            _logger = logger;
        }


        [Route(ServiceConstants.AllExtract.GetAllExtractList)]
        [HttpGet]
        public async Task<IActionResult> getAllExtractList([FromQuery]ExtractListInputModel Input)
        {
            var ExtractData = _allExtractService.GetExtractlist(Input);
            if (ExtractData.Result.Count == 0)
            {
                _logger.LogInfo($"Extract List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(ExtractData.Result);
        }

        [Route(ServiceConstants.AllExtract.GetAllIssueList)]
        [HttpGet]
        public async Task<IActionResult> GetAllIssueList([FromQuery]ExtractListInputModel Input)
        {
            var ExtractData = _allExtractService.GetIssuetlist(Input);
            if (ExtractData.Result.Count == 0)
            {

                _logger.LogInfo($"Issue List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(ExtractData.Result);
        }
        [Route(ServiceConstants.AllExtract.GetEnrichLog)]
        [HttpGet]
        public async Task<IActionResult> GetEnrichLog([FromQuery] ExtractListInputModel Input)
        {
            var ExtractData = _allExtractService.GetEnrichLog(Input);
            if (ExtractData.Result.Count == 0)
            {

                _logger.LogInfo($"Issue List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(ExtractData.Result);
        }

        [Route(ServiceConstants.AllExtract.GetConnectionList)]
        [HttpGet]
        public async Task<IActionResult> GetConnectionList([FromQuery]ExtractListInputModel Input)
        {
            var ConnectionData = _allExtractService.GetConnectionlist(Input);
            if (ConnectionData.Result.Count == 0)
            {

                _logger.LogInfo($"Connection List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(ConnectionData.Result);
        }

        [Route(ServiceConstants.AllExtract.GetSourceList)]
        [HttpGet]
        public async Task<IActionResult> GetSourceList([FromQuery]ExtractListInputModel Input)
        {
            var SourceData = _allExtractService.GetSourceList(Input);
            if (SourceData.Result.Count == 0)
            {

                _logger.LogInfo($"Source List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(SourceData.Result);
        }
    }
}