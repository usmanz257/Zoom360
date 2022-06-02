using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.GridAndGraph.RouteName)]
    [ApiController]
    public class GridandGraphController : ControllerBase
    {
        private readonly IGridAndGraphDataService _GridAndGraphDataService;
        private readonly ILoggerManager _logger;

        public GridandGraphController(IGridAndGraphDataService GridAndGraphDataService, ILoggerManager logger)
        {
            _GridAndGraphDataService = GridAndGraphDataService;
            _logger = logger;
        }
        [Route(ServiceConstants.GridAndGraph.GraphData)]
        [HttpGet]
        public async Task<IActionResult> GetGraphData()
        {
            var graphData = _GridAndGraphDataService.getGraphData();

            return Ok(graphData.Result);
        }
        [Route(ServiceConstants.GridAndGraph.HighChartGraphData)]
        [HttpPost]
        public async Task<IActionResult> GetGraphData(ChartSettingsInputModel chartSettingsInputModel)
        {
            if (chartSettingsInputModel.ModuleName == "AIInsight")
            {
                var graphData = _GridAndGraphDataService.InsighLineChartData(chartSettingsInputModel);
                return Ok(graphData.Result);

            }
            else
            {
                if (chartSettingsInputModel.ChartType == "pie")
                {
                    return Ok(_GridAndGraphDataService.getGraphPieData(chartSettingsInputModel).Result);
                }
                else if (chartSettingsInputModel.ChartType == "area")
                {
                    return Ok(_GridAndGraphDataService.getGraphAreaData(chartSettingsInputModel).Result);
                }
                else if (chartSettingsInputModel.ChartType == "columnStack" || chartSettingsInputModel.ChartType == "bar" || chartSettingsInputModel.ChartType == "column")
                {
                    return Ok(_GridAndGraphDataService.basicBarChartData(chartSettingsInputModel).Result);
                }
                else if (chartSettingsInputModel.ChartType == "Line")
                {
                    return Ok(_GridAndGraphDataService.getLineChartData(chartSettingsInputModel).Result);
                }
                else
                {
                    return Ok(_GridAndGraphDataService.basicBarChartData(chartSettingsInputModel).Result);
                }
            }
            
        }

        [Route(ServiceConstants.GridAndGraph.GridData)]
        [HttpGet]
        public async Task<IActionResult> GetGridData()
        {
            var graphData = _GridAndGraphDataService.getGridData();

            return Ok(graphData.Result);
        }
        [Route(ServiceConstants.GridAndGraph.GridDynamicData)]
        [HttpGet]
        public async Task<IActionResult> GridDynamicData(string userId, string WorkSpaceId, string Client_Id, string analysisType)
        {
            var graphData = _GridAndGraphDataService.dynamicGridData(userId, WorkSpaceId, Client_Id, analysisType);
            return Ok(graphData.Result);
        }
        [Route(ServiceConstants.GridAndGraph.getLineGraph)]
        [HttpPost]
        public async Task<IActionResult> GetAIinsightGraphData(ChartSettingsInputModel chartSettingsInputModel)
        {
            var graphData = _GridAndGraphDataService.InsighLineChartData(chartSettingsInputModel);
            return Ok(graphData.Result);
        }
    }
}
