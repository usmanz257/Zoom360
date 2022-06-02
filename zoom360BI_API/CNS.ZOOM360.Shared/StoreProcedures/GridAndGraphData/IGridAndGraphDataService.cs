using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Shared.Dashboard.Dto;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData.Dto;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using ZOOM360.Charts.HighCharts;

namespace CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData
{
    public interface IGridAndGraphDataService
    {
        Task<List<GraphDataModel>> getGraphData();
        Task<LineChart> getLineChartData(ChartSettingsInputModel chartSettingsInputModel);
        Task<object> basicBarChartData(ChartSettingsInputModel chartSettingsInputModel);
        Task<AreaChart> getGraphAreaData(ChartSettingsInputModel chartSettingsInputModel);
        Task<Piechart> getGraphPieData(ChartSettingsInputModel chartSettingsInputModel);

        Task<List<GridDataModel>> getGridData();
        Task<DataTable> dynamicGridData(string userID, string WorkSpaceId, string Client_Id, string analysisType);
        public List<double> builddata(GraphDataModel[] graphData, string plateformName);
        public List<LineGraphDataModel> GetAIinsgihtsGraphData(string UserId, string WorkSpaceId, string Client_Id, string DimentionType);
        public List<double> builddataInsightLine(LineGraphDataModel[] graphData, string plateformName);
        Task<LineChart> InsighLineChartData(ChartSettingsInputModel chartSettingsInputModel);
        Task<object> GetCharts(WidgetDto widget);

    }
}
