using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.Predictions;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights.AiInsightDto;
using CNS.ZOOM360.Shared.StoreProcedures.Predictions;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ZOOM360.Charts.HighCharts;

namespace CNS.ZOOM360.Services.StoreProcedures.Predictions
{
    public class PredictionReachServices : IPredictionReachServices
    {
        private readonly IRepositoryBase<PredictionReachModel> _PredictionReachRepositry;
        private readonly IRepositoryBase<SavePredictionModel> _predictionReachRepositrySave;
        private readonly IRepositoryBase<ProductionProcessModel> _ProductionProcessRepositry;
        private readonly IRepositoryBase<MarketingStrategyModel> _MarketingStrategyRepositry;
        private readonly IRepositoryBase<GetAIWidgetGraphDataModel> _MarketingGraphRepositry;
        public PredictionReachServices(IRepositoryBase<PredictionReachModel> PredictionReachRepositry,
            IRepositoryBase<SavePredictionModel> predictionReachRepositrySave,
             IRepositoryBase<MarketingStrategyModel> MarketingStrategyRepositry,
             IRepositoryBase<GetAIWidgetGraphDataModel> MarketingGraphRepositry,
            IRepositoryBase<ProductionProcessModel> ProductionProcessRepositry)
        {
            _PredictionReachRepositry = PredictionReachRepositry;
            _predictionReachRepositrySave = predictionReachRepositrySave;
            _ProductionProcessRepositry = ProductionProcessRepositry;
            _MarketingStrategyRepositry = MarketingStrategyRepositry;
            _MarketingGraphRepositry = MarketingGraphRepositry;
        }
        public async Task<List<MarketingStrategyModel>> GetMarketingWidgetData(MarketingInputDTOModel marketingInput)
        {

            {
                object[] parameters = {
                new SqlParameter("@USER_ID",marketingInput.UserId),
                new SqlParameter("@WORKSPACE_ID",marketingInput.WorkSpaceId),
                new SqlParameter("@CLIENT_ID",marketingInput.Client_Id),
                new SqlParameter("@CONNECTOR_ID",string.IsNullOrEmpty(marketingInput.ConnectorId) ? (object)DBNull.Value: marketingInput.ConnectorId),
                new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(marketingInput.AccountId) ? (object)DBNull.Value: marketingInput.AccountId),
                new SqlParameter("@WIDGET_CATEGORY",marketingInput.WidgetCategory),
                new SqlParameter("@ATTRIBUTE_ID",marketingInput.AttributeId),
                new SqlParameter("@ATTRIBUTES",marketingInput.Attributes),
                new SqlParameter("@WIDGET_ID",string.IsNullOrEmpty(marketingInput.WidgetID) ? (object)DBNull.Value:marketingInput.WidgetID),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
                string spQuery = StoreProcedureConstants.Sp_GETMARKETINGSTRATEGY + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                    "@CONNECTOR_ID, @ACCOUNT_ID, @WIDGET_CATEGORY,@ATTRIBUTE_ID, @ATTRIBUTES, @WIDGET_ID," +
                     " @V_MESSAGE OUTPUT";
                List<MarketingStrategyModel> AiInsight = _MarketingStrategyRepositry.ExecuteQuery(spQuery, parameters).ToList();

                var IDList = String.Join(",", AiInsight.Select(C => C.WidgetID).ToList());

                marketingInput.WidgetID = IDList;
                List<GetAIWidgetGraphDataModel> GraphDataForAllWidgets = GetAiInsightsGraphChartData(marketingInput);
                //string idlist = IDList.ToString();
                foreach (var item in AiInsight)
                {
                    var chartdata = GraphDataForAllWidgets.FindAll(x => x.WidgetID == item.WidgetID).ToList();
                    var chartdata1 = chartdata.ToArray();
                    if (item.chartType == "Line Chart")
                    {
                        item.Chart = InsighLineChartData(chartdata1, Convert.ToString(item.WidgetID));
                        item.Data = chartdata;
                    }
                    //else if (item.chartType == "Column Chart")
                    //{
                    //    item.Chart = InsighColumnChartData(chartdata1, Convert.ToString(item.WidgetID));
                    //    item.Data = chartdata;
                    //}

                    //else if (item.chartType == "Donout Chart")
                    //{
                    //    item.Chart = InsighDonoutChartData(chartdata1, Convert.ToString(item.WidgetID));
                    //    item.Data = chartdata;
                    //}
                    //else if (item.chartType == "Guage Chart")
                    //{
                    //    item.Chart = InsighGuageChartData(chartdata1, Convert.ToString(item.WidgetID));
                    //    item.Data = chartdata;
                    //}
                    else if (item.chartType == "Area Chart")
                    {
                        item.Chart = InsighAreaChartData(chartdata1, Convert.ToString(item.WidgetID));
                        item.Data = chartdata;
                    }
                }
                return AiInsight;

            }
        }
        public List<GetAIWidgetGraphDataModel> GetAiInsightsGraphChartData(MarketingInputDTOModel marketingInput)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",marketingInput.UserId),
                new SqlParameter("@WORKSPACE_ID",marketingInput.WorkSpaceId),
                new SqlParameter("@CLIENT_ID",marketingInput.Client_Id),
                new SqlParameter("@CONNECTOR_ID",string.IsNullOrEmpty(marketingInput.ConnectorId) ? (object)DBNull.Value: marketingInput.ConnectorId),
                new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(marketingInput.AccountId) ? (object)DBNull.Value: marketingInput.AccountId),
                new SqlParameter("@WIDGET_CATEGORY",marketingInput.WidgetCategory),
                new SqlParameter("@WIDGET_ID",string.IsNullOrEmpty(marketingInput.WidgetID) ? (object)DBNull.Value:marketingInput.WidgetID),
                new SqlParameter("@ATTRIBUTES",marketingInput.Attributes),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_AiInsightsWidgetGraphData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                "@CONNECTOR_ID, @ACCOUNT_ID, @WIDGET_CATEGORY, @WIDGET_ID, @ATTRIBUTES," +
                 " @V_MESSAGE OUTPUT";
            List<GetAIWidgetGraphDataModel> AiInsightGraphData = _MarketingGraphRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return AiInsightGraphData;
        }

        private LineChart InsighLineChartData(GetAIWidgetGraphDataModel[] data, string ChartID)
        {
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = "#fbf9fc";
            Stops[1, 0] = 1;
            Stops[1, 1] = "#fbf9fc";
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100; LinearGradient[1] = 100; LinearGradient[2] = 500; LinearGradient[3] = 500;
            List<SeriesData> LineData = new List<SeriesData>();
            List<Rules> rulesList = new List<Rules>();
            rulesList.Add(new Rules
            {
                Condition = new Condition
                {
                    MaxWidth = 800
                },
                ChartOptions = new ChartOptions
                {
                    Legend = new LegendLine
                    {
                        Enabled = false,
                        Layout = "horizontal",
                        Align = "center",
                        VerticalAlign = "bottom"
                    }
                }
            });
            //List<GetAIWidgetGraphDataModel> graphData = new List<GetAIWidgetGraphDataModel>();
            //graphData = GetAIinsgihtsGraphData(chartSettingsInputModel.UserId, chartSettingsInputModel.WorkSpaceId,
            //    chartSettingsInputModel.Client_Id, chartSettingsInputModel.DimentionType);
            //graphData = data;
            var cat = data.Select(x => x.Date).Distinct();
            List<string> names = data.Select(x => x.DimensionName).Distinct().ToList();
            var length = names.Count;
            // Trend line dimension alwayes set to the end to show on top in the View
            for (int ele = 0; ele < length; ele++)
            {
                string[] trend = names[ele].Split("_");
                trend[0] = trend[0].ToLower();
                if (trend[0] == "trend")
                {
                    string trendValue = names[ele];
                    names.RemoveAt(ele);
                    names.Add(trendValue);
                }
            }
            string[] colorsList = { "#C0C8CD", "#219B9C", "#CF9C0F", "#E8533E" };

            foreach (var item in names)
            {
                string[] trend = item.ToString().Split("_");
                trend[0] = trend[0].ToLower();
                if (trend[0] == "trend")
                { // Trend line Visibility Set 
                    LineData.Add(new SeriesData
                    {
                        Color = "#7F3CEE",
                        lineWidth = 4,
                        Name = item,
                        Data = builddataInsightLine(data, item)
                    });
                }
                else
                {
                    LineData.Add(new SeriesData
                    {
                        Color = null,
                        lineWidth = 2,
                        Name = item,
                        Data = builddataInsightLine(data, item)
                    });
                }

            }
            return new LineChart
            {
                Chart = new ChartLine
                {
                    //RenderTo =ChartID,
                    Type = "line",
                    MarginLeft = null,
                    MarginBottom = "60",
                    MarginRight = "10",
                    MarginTop = "35",
                    backgroundColor = new PlotBackgroundColorLine
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },
                },
                Colors = colorsList,
                Title = new Title
                {
                    Floating = false,
                    Text = null
                },
                Subtitle = new Subtitle
                {
                    Text = ""
                },
                YAxis = new YAxisLine
                {
                    //Min=-100000,
                    Visible = true,
                    GridLineWidth = 1,
                    MinorGridLineWidth = 1,
                    Title = new Title
                    {
                        Text = ""
                    },
                    Labels = new LabelLine
                    {
                        Enabled = true
                    }
                },
                XAxis = new XAxisLine
                {
                    Categories = cat.ToArray(),
                    Visible = false,
                    Accessibility = new AccessibilityLine
                    {
                        RangeDescription = "Range: 2010 to 2017"
                    },
                    //Labels = new LabelLine
                    //{
                    //    Enabled = false
                    //}
                },
                Legend = new LegendLine
                {
                    Enabled = false,
                    Layout = "vertical",
                    Align = "center",
                    VerticalAlign = "middle",
                    Floating = false
                },
                Tooltip = new TooltipColumnStack
                {
                    HeaderFormat = "<br>Dated:{point.x}<br>",
                    PointFormat = "{series.name}:{point.y}"
                    //HeaderFormat = "",
                    //PointFormat = "{series.name}: {point.y}"
                },
                PlotOptions = new plotOptionsLine
                {
                    Series = new SeriesLine
                    {
                        // LineWidth = 4,
                        Marker = new Marker
                        {
                            Enabled = false
                        },
                        Label = new LabelLine
                        {
                            ConnectorAllowed = false
                        },
                        //PointStart = 2010
                    }
                },
                Series = LineData,
                Responsive = new ResponsiveLine
                {
                    Rules = rulesList

                },
                Credits = new Creditss
                {
                    Enabled = false
                }
            };

            //return ch;

        }

        private AreaChart InsighAreaChartData(GetAIWidgetGraphDataModel[] data, string ChartID)
        {

            //string[] clr = new string[4];

            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = "#fbf9fc";
            Stops[1, 0] = 1;
            Stops[1, 1] = "#fbf9fc";
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100;
            LinearGradient[1] = 100;
            LinearGradient[2] = 500;
            LinearGradient[3] = 500;
            List<AreaSeries> areaData = new List<AreaSeries>();
            var cat = data.Select(x => x.Date).Distinct();
            List<string> names = data.Select(x => x.DimensionName).Distinct().ToList();
            var length = names.Count;
            // Trend line dimension alwayes set to the end to show on top in the View
            for (int ele = 0; ele < length; ele++)
            {
                string[] trend = names[ele].Split("_");
                trend[0] = trend[0].ToLower();
                if (trend[0] == "trend")
                {
                    string trendValue = names[ele];
                    names.RemoveAt(ele);
                    names.Add(trendValue);
                }
            }
            string[] colorsList = { "#219B9C", "#C0C8CD", "#CF9C0F", "#E8533E" };
            foreach (var item in names)
            {
                string[] trend = item.ToString().Split("_");
                trend[0] = trend[0].ToLower();
                if (trend[0] == "trend")
                { // Trend line Visibility Set 
                    areaData.Add(new AreaSeries
                    {
                        name = item,
                        data = builddataInsightLine(data, item)
                    });
                }
                else
                {
                    areaData.Add(new AreaSeries
                    {
                        name = item,
                        data = builddataInsightLine(data, item)
                    });
                }

            }

            return new AreaChart
            {
                Colors = colorsList,
                chart = new AreaCharts
                {
                    Type = "area",
                    MarginLeft = null,
                    MarginBottom = null,
                    MarginRight = "-35",
                    MarginTop = null,
                    backgroundColor = new PlotBackgroundColorArea
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },
                },
                Accessibility =
                new AreaAccessibility
                {
                    Description = ""
                },
                Exporting =
                new AreaExporting
                {
                    Enabled = false
                },
                Title =
                new AreaTitle
                {
                    Text = null
                },
                Subtitle =
                new AreaSubtitle
                {
                    text = null
                },
                XAxis =
                new AreaXAxis
                {
                    Visible = false,
                    allowDecimals = false,
                    labels =
                    new AreaLabels
                    {
                        formatter = ""
                    },
                    accessibility =
                    new AreaAccessibility
                    {
                        //RangeDescription = "Range= 1940 to 2017."
                    }
                },
                YAxis =
                new AreaYAxis
                {
                    Visible = true,
                    title =
                    new AreaTitle
                    {
                        Text = ""
                    },
                    labels =
                    new AreaLabels
                    {
                        formatter = ""
                    }
                },
                Tooltip =
                new AreaTooltip
                {
                    Enabled = true,
                    HeaderFormat = "<b>{series.name}</b>",
                    PointFormat = " {point.y:,.0f}"
                },
                PlotOptions = new AreaPlotOptions
                {
                    Area = new Area()
                    {
                        Stacking = "normal",
                        LineColor = "#666666",
                        PointStart = 0,
                        size = "100%",
                        LineWidth = 1,
                        stickyTracking = true,
                        Marker = new AreaMarker
                        {
                            Enabled = true,
                            Symbol = "circle",

                            Radius = 2,
                            States = new AreaState()
                            {
                                Hover = new AreaHover()
                                {
                                    enabled = true
                                }
                            }
                        },

                    },
                    series = new AreaSeriesPlot()
                    {
                        strokeWidth = 1,
                        plotAreaWidth = "100%",
                        enableMouseTracking = false
                    }

                },
                Legend = new AreaLegend
                {
                    Enabled = false

                },
                Credits = new Areacredits
                {
                    Enabled = false
                },
                Series = areaData

                //new List<AreaSeries>
                //{
                //    new AreaSeries { name = "Impressions", data = results.Select(x=>(object)x.measures.Imperssions).ToList()  },
                //    new AreaSeries { name = "Clicks", data = results.Select(x=>(object)x.measures.Imperssions).ToList() },
                //    new AreaSeries { name = "CTR(%)", data = results.Select(x=>(object)x.measures.Imperssions).ToList() }
                //}

            };
        }
        public List<PredictionReachModel> GetPredictionReachData(string UserID, string WorkspaceId, string ClientId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",UserID),
                new SqlParameter("@WORKSPACE_ID",WorkspaceId),
                new SqlParameter("@CLIENT_ID",ClientId),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GETPREDICTIONREACH + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                 " @V_MESSAGE OUTPUT";
            List<PredictionReachModel> AiInsightGraphData = _PredictionReachRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return AiInsightGraphData;
        }

        public List<ProductionProcessModel> GetProductionProcess(string UserID, string WorkspaceId, string ClientId, string ProdctionProcess)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",UserID),
                new SqlParameter("@WORKSPACE_ID",WorkspaceId),
                new SqlParameter("@CLIENT_ID",ClientId),
                new SqlParameter("@PRODUCTION_PROCESS",ProdctionProcess),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GETPRODUCTIONPROCESS + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, @PRODUCTION_PROCESS," +
                 " @V_MESSAGE OUTPUT";
            List<ProductionProcessModel> productionProcessData = _ProductionProcessRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return productionProcessData;
        }

        public async Task<string> SavePredictionSetup(SavePredictionModel input)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", input.userID),
                new SqlParameter("@WORKSPACE_ID", input.workspaceID),
                new SqlParameter("@CLIENT_ID", input.clientId),
                new SqlParameter("@SCRIPT_NAME", string.IsNullOrEmpty(input.scriptName) ? (object)DBNull.Value:input.scriptName),
                new SqlParameter("@AMOUNT_SPENT_USD", string.IsNullOrEmpty(input.AmountSpentUSD) ? (object)DBNull.Value:input.AmountSpentUSD),
                new SqlParameter("@RESULTS", string.IsNullOrEmpty(input.results) ? (object)DBNull.Value:input.results),
                new SqlParameter("@IMPRESSIONS", string.IsNullOrEmpty(input.impressions) ? (object)DBNull.Value:input.impressions),
                new SqlParameter("@PURCHASES_CONVERSION_VALUE_USD", string.IsNullOrEmpty(input.purchaseConversionValueUSD) ? (object)DBNull.Value:input.purchaseConversionValueUSD),
                new SqlParameter("@REACH", string.IsNullOrEmpty(input.reach) ? (object)DBNull.Value:input.reach),
                new SqlParameter("@RESULT_TYPE_CODE",string.IsNullOrEmpty(input.resultTypeCode) ? (object)DBNull.Value: input.resultTypeCode),
                new SqlParameter("@PURCHASE_ROAS_RETURN_ON_AD_SPEND",string.IsNullOrEmpty(input.purchaseROASReturnonAdSpend) ? (object)DBNull.Value: input.purchaseROASReturnonAdSpend),
                new SqlParameter("@COST_PER_RESULT_USD",string.IsNullOrEmpty(input.costPerResultUSD) ? (object)DBNull.Value: input.costPerResultUSD),
                new SqlParameter("@STATUS",string.IsNullOrEmpty(input.Status) ? (object)DBNull.Value: input.Status),
                new SqlParameter("@PREDICTED_RESULTS",string.IsNullOrEmpty(input.PredictedResult) ? (object)DBNull.Value: input.PredictedResult),
                new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000,
            Value = ""
                }
        };
            string spQuery = StoreProcedureConstants.Sp_SavePrediction + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, o @SCRIPT_NAME,@AMOUNT_SPENT_USD, @RESULTS, @IMPRESSIONS, @PURCHASES_CONVERSION_VALUE_USD, @REACH, @RESULT_TYPE_CODE " +
                ", @PURCHASE_ROAS_RETURN_ON_AD_SPEND, @COST_PER_RESULT_USD, @STATUS, @PREDICTED_RESULTS," +
                " @V_MESSAGE OUTPUT";
            return _predictionReachRepositrySave.ExecuteCommand(spQuery, parameters);

        }



        private List<double> builddataInsightLine(GetAIWidgetGraphDataModel[] graphData, string plateformName)
        {
            //areaData.Add(new AreaSeries
            //{
            //    name = "FaceBook",
            //    data = builddata(graphData.ToArray())
            //}

            //List<GraphDataModel> dimentionData = new List<GraphDataModel>();

            List<double> dataList = new List<double>();

            GetAIWidgetGraphDataModel[] firstHeight = Array.FindAll(graphData, item1 => item1.DimensionName == plateformName);

            foreach (var item in firstHeight)
            {
                dataList.Add(Convert.ToDouble(item.DimensionValue));
            }
            return dataList;
        }
    }
}

