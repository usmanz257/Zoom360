using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights;
using CNS.ZOOM360.Shared.StoreProcedures.AIinsights.AiInsightDto;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZOOM360.Charts.HighCharts;

namespace CNS.ZOOM360.Services.StoreProcedures.AIinsights
{
    public class AiInsightsServices : IAiInsightsServices
    {
        private readonly IRepositoryBase<GetAiInsightsModel> _AiInsightRepositry;
        private readonly IRepositoryBase<AIinsightWidgetDataModel> _AiInsightWedgetsRepositry;
        private readonly IRepositoryBase<GetAIWidgetGraphDataModel> _AiInsightWedgetGraphRepositry;
        private readonly IRepositoryBase<GetColumnsAiInsightsModel> _AiInsightcolumRepositry;
        private readonly IRepositoryBase<SaveLikeAndDislikeModel> _AiInsightsavelikeanddislikeRepositry;
        public AiInsightsServices(IRepositoryBase<GetAiInsightsModel> AiInsightRepositry,
            IRepositoryBase<AIinsightWidgetDataModel> AiInsightWedgetsRepositry,
            IRepositoryBase<GetAIWidgetGraphDataModel> AiInsightWedgetGraphRepositry,
            IRepositoryBase<GetColumnsAiInsightsModel> AiInsightcolumRepositry,
            IRepositoryBase<SaveLikeAndDislikeModel> AiInsightsavelikeanddislikeRepositry)
        {
            _AiInsightRepositry = AiInsightRepositry;
            _AiInsightWedgetsRepositry = AiInsightWedgetsRepositry;
            _AiInsightWedgetGraphRepositry = AiInsightWedgetGraphRepositry;
            _AiInsightcolumRepositry = AiInsightcolumRepositry;
            _AiInsightsavelikeanddislikeRepositry = AiInsightsavelikeanddislikeRepositry;
        }

        public async Task<List<GetAiInsightsModel>> GetAiInsightsData(string UserID, string WorkspaceId, string ClientId)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID",UserID),
                new SqlParameter("@WORKSPACE_ID",WorkspaceId),
                new SqlParameter("@CLIENT_ID",ClientId),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }

            };

            string spQuery = StoreProcedureConstants.Sp_AiInsightsData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                 " @V_MESSAGE OUTPUT";

            List<GetAiInsightsModel> AiInsight = _AiInsightRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return AiInsight;
        }
        public async Task<List<AIinsightWidgetDataModel>> GetAiInsightsWidgetData(AiInsightInputModal AiInsightInput)

        {
            object[] parameters = {
                new SqlParameter("@USER_ID",AiInsightInput.UserId),
                new SqlParameter("@WORKSPACE_ID",AiInsightInput.WorkSpaceId),
                new SqlParameter("@CLIENT_ID",AiInsightInput.Client_Id),
                new SqlParameter("@CONNECTOR_ID",string.IsNullOrEmpty(AiInsightInput.ConnectorId) ? (object)DBNull.Value: AiInsightInput.ConnectorId),
                new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(AiInsightInput.AccountId) ? (object)DBNull.Value: AiInsightInput.AccountId),
                new SqlParameter("@WIDGET_CATEGORY",AiInsightInput.WidgetCategory),
                new SqlParameter("@ATTRIBUTE_ID",AiInsightInput.AttributeId),
                new SqlParameter("@ATTRIBUTES",AiInsightInput.Attributes),
                new SqlParameter("@WIDGET_ID",string.IsNullOrEmpty(AiInsightInput.WidgetID) ? (object)DBNull.Value:AiInsightInput.WidgetID),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_AiInsightsWidgetData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                "@CONNECTOR_ID, @ACCOUNT_ID, @WIDGET_CATEGORY,@ATTRIBUTE_ID, @ATTRIBUTES, @WIDGET_ID," +
                 " @V_MESSAGE OUTPUT";
            List<AIinsightWidgetDataModel> AiInsight = _AiInsightWedgetsRepositry.ExecuteQuery(spQuery, parameters).ToList();

            var IDList = String.Join(",", AiInsight.Select(C => C.WidgetID).ToList());

            AiInsightInput.WidgetID = IDList;
            List<GetAIWidgetGraphDataModel> GraphDataForAllWidgets = GetAiInsightsGraphChartData(AiInsightInput);
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
                else if (item.chartType == "Column Chart")
                {
                    item.Chart = InsighColumnChartData(chartdata1, Convert.ToString(item.WidgetID));
                    item.Data = chartdata;
                }

                else if (item.chartType == "Donout Chart")
                {
                    item.Chart = InsighDonoutChartData(chartdata1, Convert.ToString(item.WidgetID));
                    item.Data = chartdata;
                }
                else if (item.chartType == "Guage Chart")
                {
                    item.Chart = InsighGuageChartData(chartdata1, Convert.ToString(item.WidgetID));
                    item.Data = chartdata;
                }
                else if (item.chartType == "Area Chart")
                {
                    item.Chart = InsighAreaChartData(chartdata1, Convert.ToString(item.WidgetID));
                    item.Data = chartdata;
                }
            }
            return AiInsight;

        }
        public List<GetAIWidgetGraphDataModel> GetAiInsightsGraphChartData(AiInsightInputModal AiInsightInput)

        {
            object[] parameters = {
                new SqlParameter("@USER_ID",AiInsightInput.UserId),
                new SqlParameter("@WORKSPACE_ID",AiInsightInput.WorkSpaceId),
                new SqlParameter("@CLIENT_ID",AiInsightInput.Client_Id),
                new SqlParameter("@CONNECTOR_ID",string.IsNullOrEmpty(AiInsightInput.ConnectorId) ? (object)DBNull.Value: AiInsightInput.ConnectorId),
                new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(AiInsightInput.AccountId) ? (object)DBNull.Value: AiInsightInput.AccountId),
                new SqlParameter("@WIDGET_CATEGORY",AiInsightInput.WidgetCategory),
                new SqlParameter("@WIDGET_ID",string.IsNullOrEmpty(AiInsightInput.WidgetID) ? (object)DBNull.Value:AiInsightInput.WidgetID),
                new SqlParameter("@ATTRIBUTES",AiInsightInput.Attributes),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_AiInsightsWidgetGraphData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                "@CONNECTOR_ID, @ACCOUNT_ID, @WIDGET_CATEGORY, @WIDGET_ID, @ATTRIBUTES," +
                 " @V_MESSAGE OUTPUT";
            List<GetAIWidgetGraphDataModel> AiInsightGraphData = _AiInsightWedgetGraphRepositry.ExecuteQuery(spQuery, parameters).ToList();

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
        private BasicColumnChart InsighColumnChartData(GetAIWidgetGraphDataModel[] data, string ChartID)
        {
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = "#fbf9fc";
            Stops[1, 0] = 1;
            Stops[1, 1] = "#fbf9fc";
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100; LinearGradient[1] = 100; LinearGradient[2] = 500; LinearGradient[3] = 500;
            List<BasicSeries> ColumnData = new List<BasicSeries>();
            //List<SeriesData> LineData = new List<SeriesData>();
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
            var cat = data.Select(x => x.Date).Distinct();
            List<string> names = data.Select(x => x.DimensionName).Distinct().ToList();
            var length = names.Count;
            // Trend line dimension alwayes set to the end to show on top in the View

            string[] colorsList = {"#C0C8CD", "#7F3CEE", "#219B9C", "#CF9C0F", "#E8533E"};

            foreach (var item in names)
            {
                {
                    ColumnData.Add(new BasicSeries
                    {

                        Name = item,
                        Data = builddataInsightLine(data, item)
                    });
                }

            }
            return new BasicColumnChart
            {
                chart = new BasicChart
                {
                    Type = "column",
                    MarginLeft = null,
                    MarginBottom = "60",
                    MarginRight = "10",
                    MarginTop = "35",
                    backgroundColor = new PlotBackgroundColorColumn
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },
                },
                // Colors = chartSettingsInputModel.Colors,
                Title = new BasicTitle
                {
                    Text = ""
                },
                Colors = colorsList,
                Subtitle = new BasicSubtitle
                {
                    Text = ""
                },
                YAxis = new BasicYAxis
                {
                    Visible = true,
                    Min = 0,
                    Title = new BasicTitle2
                    {
                        Text = ""
                    }
                },
                XAxis = new BasicXAxis
                {
                    //Categories = new List<string>() { "cat1", "cat2", "cat3", "cat4", "cat5" },
                    // Categories = cat.ToArray(),
                    Visible = true,
                    crosshair = true
                },
                Credits = new Basiccredits
                {
                    Enabled = false
                },
                Legend = new BasicLegend
                {
                    Enabled = false,
                    //Layout = "vertical",
                    //Align = "center",
                    //VerticalAlign = "middle",
                    //Floating = false
                },
                Tooltip = new BasicTooltip
                {
                    Enabled = false,
                    headerFormat = "<br>Dated:{point.x}<br>",
                    pointFormat = "{series.name}:{point.y}"
                    //HeaderFormat = "",
                    //PointFormat = "{series.name}: {point.y}"
                },
                PlotOptions = new BasicPlotOptions
                {
                    Column = new Basiccolumn
                    {
                        borderWidth = 0,
                        pointPadding = 0.2
                    }
                },
                Series = ColumnData

            };

            //return ch;

        }

        private DonoutChart InsighDonoutChartData(GetAIWidgetGraphDataModel[] data, string ChartID)
        {
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100; LinearGradient[1] = 100; LinearGradient[2] = 500; LinearGradient[3] = 500;
            List<DonutSeries> ColumnData = new List<DonutSeries>();
            List<DonutDatum> Donutdata = new List<DonutDatum>();
          
           foreach (var item in data)
            {
                    Donutdata.Add(new DonutDatum
                    {
                        Name = item.DimensionName,
                        Y = Convert.ToDecimal(item.DimensionValue)

                    });
               //DonutFulldata.Add(Donutdata);
            }

                // Trend line dimension alwayes set to the end to show on top in the View

                string[] colorsList = { "#C0C8CD", "#7F3CEE", "#219B9C", "#CF9C0F", "#E8533E" };

            ColumnData.Add(new DonutSeries
            {
                type = "pie",
                Name = "",
                InnerSize = "50%",
                ColorByPoint = true,
                Data = Donutdata
            }) ;
            
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
            var cat = data.Select(x => x.Date).Distinct();
         
            return new DonoutChart
            {
                chart = new Donutchart

                {
                    PlotShadow = false,
                    PlotBorderWidth = 0,
                    //type = "pie",
                    //renderTo = "container",
                    BackgroundColor = ""
                },
                Title = new DonutTitle
                { 
                    Text = "",
                    //Enabled = false,
                    Align = "",
                    VerticalAlign = "",

                    Style = new DonutTitleStyle
                    {
                        FontSize = "",
                        Color = "",
                        FontFamily = ""
                    }
                },
                Tooltip = new DonutTooltip
                {
                    PointFormat = "{series.name}: <b>{point.percentage:.1f}%</b>",
                    Enabled = true,
                    BackgroundColor = "white",
                    Style = new DonutTooltipStyle
                    {
                        Color = ""
                    }
                },

           Accessibility = new AccessibilityDonut  {
                 Point = new pointDonut
                {
                ValueSuffix = "%"
          
                }
            },
                Credits = new DonutCredits
                {
                    Enabled = false
                },
                Legend = new DonutLegend
                {
                    Enabled = true
                },
                plotOptions = new DonutplotOptions
                {

                    Pie = new DonutPie
                    {
                        AllowPointSelect = true,
                        Cursor = "pointer",
                        DataLabels = new DonutDataLabels
                        {
                            Enabled = true,
                            Format = "<b>{point.name}</b>: {point.percentage:.1f} %",
                           
                            Style = new DonutDatalableStyle{
                            FontWeight = "",
                            Color = "#515961",
                        }
                    },
                      
                        Size = "110%"
                    }
                },
                series = ColumnData

                //return ch;

            };
          }

        private StaticGuageChart InsighGuageChartData(GetAIWidgetGraphDataModel[] data, string ChartID)
        {
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100; LinearGradient[1] = 100; LinearGradient[2] = 500; LinearGradient[3] = 500;
            List<SolidGaugeChartSeries> SolidGuageData = new List<SolidGaugeChartSeries>();
            List<double> dataguage = new List<double>();
            int min=0, max=0 , val=0;
           
            foreach (var item in data)

            {
            
                if (item.DimensionName=="Minimum")
                {
                   min = Convert.ToInt32(item.DimensionValue);
                }
              
                else if (item.DimensionName == "Maximum")
                {
                    max = Convert.ToInt32(item.DimensionValue);
                }
                else
                {
                    dataguage.Add(item.DimensionValue);
                    val = Convert.ToInt32(item.DimensionValue);
                }
                SolidGuageData.Add(new SolidGaugeChartSeries
                {
                    Type = "gauge",
                    Name = item.DimensionName,
                    Data = dataguage,
                    dataLabels = new StaticSolidguageDataLabels
                    {
                        format = "<div style='text-align:center'>" +
                "<span style='font-size:12px'>{y}</span> &nbsp" +
                    "<span style='font-size:12px'>Units</span>" +
                "</div>"
                    },
                    tooltip = new StaticSolidguagetooltip
                    {
                        valueSuffix = "Units"
                    }
                });
            }
            string[] colorsList = { "#85C1E9", "#7F3CEE", "#219B9C", "#CF9C0F", "#E8533E" };
            List<string> center = new List<string>();
            center.Add("50%");
            center.Add("70%");
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
            var cat = data.Select(x => x.Date).Distinct();

            return new StaticGuageChart
            {

                Chart = new SolidGaugeChartBasic
                {
                    Type = "solidgauge",
                
                    BackgroundColor = "",
                    MarginLeft = 0,
                    MarginBottom = 0,
                    MarginRight = 0,
                    MarginTop = 0
                },
                Title = new SolidGaugeTitle
                {
                    Text = "",

                    Style = new SolidGaugeTitleStyle
                    {
                        FontSize = "",
                        Color = "",
                        FontFamily = ""

                    }
                },
                Pane = new SolidGaugePane
                {
                    Center= center,
                    StartAngle = -90,
                    EndAngle = 90,
                    Background = new SolidGaugePaneBackground
                    {
                        innerRadius = "60%",
                        outerRadius = "100%",
                        shape = "arc"
                    }
                },
                Credits = new SolidGaugeCreditGauge
                {
                    Enabled = false
                },
                Tooltip = new SolidGaugeTooltipGauge
                {
                    Enabled = true,
                    BackgroundColor = "#fff",
                    Style = new SolidGaugeTooltipStyle {
                    Color = "#200000"
                    }
            },
                PlotOptions = new SolidGaugePlotOptions
                {
                    Gauge = new GaugePlot
                    {
                        Color = "Blue",

                        DataLabels = new GaugeDatalable
                        {
                            Y = 0,
                            BorderWidth = 0,
                            UseHTML = true
                        },
                        Dial = new GaugeDial
                        {
                            Radius = "65%",
                            BackgroundColor = "#383838",
                            BorderWidth = 20,
                            BaseWidth = 12,
                            TopWidth = 1,
                            BaseLength = "1%",
                            RearLength = "0%"
                        },
                        Pivot =new GaugePivot
                        {
                            Radius= 6
                        }
                    }

                },
                YAxis = new SolidGaugeYAxis
                {
                    Min = min,
                    Max = max,
                    Lable = new LabelsStyle
                    {
                        Y = 12
                    },
               

                    PlotBands = new plotBandsYaxix
                    {
                        Color = "#5DADE2",
                        From = min,
                        To =val,
                        InnerRadius ="60%",
                        OuterRadius = "100%"
            
                       }
                   },
                exporting = new SolidGaugeExporting{
                Enabled = false
                    
                },
                   Series = SolidGuageData


            };
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
            string[] colorsList = { "#219B9C", "#C0C8CD",  "#CF9C0F", "#E8533E" };
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
                        PointStart = 0,
                         size = "100%",
                        LineWidth = 1,
                        stickyTracking= true,
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
                         strokeWidth= 1,
                        plotAreaWidth= "100%",
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
        public List<GetColumnsAiInsightsModel> GetColumnName(string UserID, string WorkspaceId, string ClientId, string WidgetCategory)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", UserID),
                new SqlParameter("@WORKSPACE_ID", WorkspaceId),
                new SqlParameter("@CLIENT_ID", ClientId),
                new SqlParameter("@WIDGET_CATEGORY", WidgetCategory),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetcolumAiInsights + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, @WIDGET_CATEGORY," +
                  " @V_MESSAGE OUTPUT";
            List<GetColumnsAiInsightsModel> AiInsightcolum = _AiInsightcolumRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return AiInsightcolum;
        }
        public async Task<string> SaveLikeAndDislike(SaveLikeAndDislikeModel saveLikeAndDislikeModel)
            {
                object[] parameters = {
                    new SqlParameter("@USER_ID",string.IsNullOrEmpty(saveLikeAndDislikeModel.UserId) ? (object)DBNull.Value: saveLikeAndDislikeModel.UserId),
                    new SqlParameter("@WORKSPACE_ID",string.IsNullOrEmpty(saveLikeAndDislikeModel.WorkspaceId) ? (object)DBNull.Value: saveLikeAndDislikeModel.WorkspaceId),
                    new SqlParameter("@CLIENT_ID", string.IsNullOrEmpty(saveLikeAndDislikeModel.ClientId) ? (object)DBNull.Value: saveLikeAndDislikeModel.ClientId),
                    new SqlParameter("@WIDGET_CATEGORY",string.IsNullOrEmpty(saveLikeAndDislikeModel.WidgetCategory) ? (object)DBNull.Value: saveLikeAndDislikeModel.WidgetCategory),
                    new SqlParameter("@ATTRIBUTE_ID", string.IsNullOrEmpty(saveLikeAndDislikeModel.AttributeId) ? (object)DBNull.Value: saveLikeAndDislikeModel.AttributeId),
                    new SqlParameter("@ISLIKE", string.IsNullOrEmpty(saveLikeAndDislikeModel.IsLike) ? (object)DBNull.Value: saveLikeAndDislikeModel.IsLike),
                    new SqlParameter("@CLIENT_DATE", string.IsNullOrEmpty(saveLikeAndDislikeModel.ClientDate) ? (object)DBNull.Value: saveLikeAndDislikeModel.ClientDate),
                    new SqlParameter("@CLIENT_TIME", string.IsNullOrEmpty(saveLikeAndDislikeModel.ClientTime) ? (object)DBNull.Value: saveLikeAndDislikeModel.ClientTime),
                    new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(saveLikeAndDislikeModel.ClientTimeZone) ? (object)DBNull.Value: saveLikeAndDislikeModel.ClientTimeZone),
                    new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(saveLikeAndDislikeModel.Remarks1) ? (object)DBNull.Value: saveLikeAndDislikeModel.Remarks1),
                    new SqlParameter("@REMARKS_2", string.IsNullOrEmpty(saveLikeAndDislikeModel.Remarks2) ? (object)DBNull.Value: saveLikeAndDislikeModel.Remarks2),
                    new SqlParameter("@REMARKS_3 ",string.IsNullOrEmpty(saveLikeAndDislikeModel.Remarks3) ? (object)DBNull.Value: saveLikeAndDislikeModel.Remarks3),
                    new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(saveLikeAndDislikeModel.Remarks4) ? (object)DBNull.Value: saveLikeAndDislikeModel.Remarks4),
                    new SqlParameter("@FLEX_1",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex1) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex1),
                    new SqlParameter("@FLEX_2",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex2) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex2),
                    new SqlParameter("@FLEX_3 ",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex3) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex3),
                    new SqlParameter("@FLEX_4",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex4) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex4),
                    new SqlParameter("@FLEX_5",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex5) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex5),
                    new SqlParameter("@FLEX_6 ",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex6) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex6),
                    new SqlParameter("@FLEX_7",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex7) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex7),
                    new SqlParameter("@FLEX_8",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex8) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex8),
                    new SqlParameter("@FLEX_9",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex9) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex9),
                    new SqlParameter("@FLEX_10",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex10) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex10),
                    new SqlParameter("@FLEX_11",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex11) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex11),
                    new SqlParameter("@FLEX_12",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex12) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex12),
                    new SqlParameter("@FLEX_13",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex13) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex13),
                    new SqlParameter("@FLEX_14",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex14) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex14),
                    new SqlParameter("@FLEX_15",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex15) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex15),
                    new SqlParameter("@FLEX_16",string.IsNullOrEmpty(saveLikeAndDislikeModel.Flex16) ? (object)DBNull.Value: saveLikeAndDislikeModel.Flex16),
                    new SqlParameter{ ParameterName = "@V_MESSAGE",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.NVarChar,
                Size = 4000,
                Value = ""
                    }

            };

                string spQuery = StoreProcedureConstants.Sp_SaveLikeAndDislike + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID,  @WIDGET_CATEGORY, @ATTRIBUTE_ID, @ISLIKE," +
                    "@CLIENT_DATE, @CLIENT_TIME, @CLIENT_TIME_ZONE, @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4," +
                    "@FLEX_1, @FLEX_2, @FLEX_3, @FLEX_4, @FLEX_5, @FLEX_6, @FLEX_7, @FLEX_8," +
                    "@FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16," +
                    " @V_MESSAGE OUTPUT";
                return _AiInsightsavelikeanddislikeRepositry.ExecuteCommand(spQuery, parameters);
            }
        }
} 

