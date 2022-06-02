using CNS.ZOOM360.Entities.StoreProcedures.AIinsights;
using CNS.ZOOM360.Entities.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Dashboard.Dto;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData.Dto;
using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using ZOOM360.Charts.HighCharts;

namespace CNS.ZOOM360.Services.StoreProcedures.GridAndGraphData
{
    public class GridAndGraphDataService : IGridAndGraphDataService
    {
        private readonly IRepositoryBase<GraphDataModel> _GraphDataRepository;
        private readonly IRepositoryBase<GridDataModel> _GirdDataRepository;
        private readonly IRepositoryBase<DataTable> _dynamicGridRepository;
        private readonly IRepositoryBase<LineGraphDataModel> _dymamicLineDataRepository;
        //private object _changeLogListRepository;

        public GridAndGraphDataService(IRepositoryBase<GraphDataModel> GraphDataRepository,
          IRepositoryBase<GridDataModel> GirdDataRepository,
          IRepositoryBase<DataTable> dynamicGridRepository,
          IRepositoryBase<LineGraphDataModel> dymamicLineDataRepository)
        {
            _GraphDataRepository = GraphDataRepository;
            _GirdDataRepository = GirdDataRepository;
            _dynamicGridRepository = dynamicGridRepository;
            _dymamicLineDataRepository = dymamicLineDataRepository;
        }
      

        public async Task<List<GraphDataModel>> getGraphData()
        {
          //  var mycon = new MySqlConnection(MysqlConString.connectionString);
            // object[] parameters = null;
            //    object[] parameters = {
            //    new SqlParameter("@USER_ID", userId),
            //    new SqlParameter("@CLIENT_ID", CLIENT_ID),
            //    new SqlParameter("@WORKSPACE_ID", workSpaceId),
            //    new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            //};

            string spQuery = "select * from excel_channel_data_processed";
            List<GraphDataModel> graphData = _GraphDataRepository.ExecutePlainQuery(spQuery).ToList();
            return graphData;

        }
        public async Task<LineChart> getLineChartData(ChartSettingsInputModel chartSettingsInputModel)
        {
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = chartSettingsInputModel.GradientBGColor1;
            Stops[1, 0] = 1;
            Stops[1, 1] = chartSettingsInputModel.GradientBGColor2;
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100;
            LinearGradient[1] = 100;
            LinearGradient[2] = 500;
            LinearGradient[3] = 500;
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
                        Enabled = chartSettingsInputModel.LegendsEnabled,
                        Layout = "horizontal",
                        Align = "center",
                        VerticalAlign = "bottom"
                    }
                }
            });
            string spQuery = "SELECT PLATFORM ,CONVERT(INT,PERIOD_DATE) AS PERIOD_DATE,PERIOD_DISPLAY_DATE,CONVERT(INT,IMPRESSIONS) AS IMPRESSIONS," +
              "CONVERT(INT, CLICKS) AS CLICKS, CONVERT(INT, CTR) AS CTR, CONNECTOR_IMAGE FROM excel_channel_data_processed";
            List<GraphDataModel> graphData = _GraphDataRepository.ExecutePlainQuery(spQuery).ToList();

            var names = graphData.Select(x => x.Platform).Distinct();

            foreach (var item in names)
            {
                LineData.Add(new SeriesData
                {
                    Name = item,
                    Data = builddata(graphData.ToArray(), item)
                });
            }
            var ch = new LineChart
            {
                Chart = new ChartLine
                {
                    //RenderTo=chartSettingsInputModel.Chartid,                
                    Type = "line",
                    MarginLeft = chartSettingsInputModel.MarginLeft,
                    MarginBottom = chartSettingsInputModel.MarginBottom,
                    MarginRight = chartSettingsInputModel.MarginRight,
                    MarginTop = chartSettingsInputModel.MarginTop,
                    backgroundColor = new PlotBackgroundColorLine
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },
                },
                Colors = chartSettingsInputModel.Colors,
                Title = new Title
                {
                    Floating = false,
                    Text = chartSettingsInputModel.MainTitle
                },
                Subtitle = new Subtitle
                {
                    Text = ""
                },
                YAxis = new YAxisLine
                {
                    //Min=0,
                    Visible = chartSettingsInputModel.yAxisVisible,
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
                    Visible = chartSettingsInputModel.xAxisVisible,
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
                    Enabled = chartSettingsInputModel.LegendsEnabled,
                    Layout = "vertical",
                    Align = "center",
                    VerticalAlign = "middle",
                    Floating = false
                },
                Tooltip = new TooltipColumnStack
                {
                    HeaderFormat = "",
                    PointFormat = "{series.name}: {point.y}"
                },
                PlotOptions = new plotOptionsLine
                {
                    Series = new SeriesLine
                    {
                        //   LineWidth = 1,
                        Marker = new Marker
                        {
                            Enabled = chartSettingsInputModel.Marker
                        },
                        Label = new LabelLine
                        {
                            ConnectorAllowed = false
                        },
                        PointStart = 2010
                    }
                },
                Series = LineData,
                Responsive = new ResponsiveLine
                {
                    Rules = rulesList

                }
            };
            return ch;

        }
        public async Task<object> basicBarChartData(ChartSettingsInputModel chartSettingsInputModel)
        {
            object ch = new object();
            string spQuery = "SELECT PLATFORM ,CONVERT(INT,PERIOD_DATE) AS PERIOD_DATE,PERIOD_DISPLAY_DATE,CONVERT(INT,IMPRESSIONS) AS IMPRESSIONS," +
              "CONVERT(INT, CLICKS) AS CLICKS, CONVERT(INT, CTR) AS CTR, CONNECTOR_IMAGE FROM excel_channel_data_processed order by CTR";
            List<GraphDataModel> graphData = _GraphDataRepository.ExecutePlainQuery(spQuery).ToList();
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = chartSettingsInputModel.GradientBGColor1;
            Stops[1, 0] = 1;
            Stops[1, 1] = chartSettingsInputModel.GradientBGColor2;
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100;
            LinearGradient[1] = 100;
            LinearGradient[2] = 500;
            LinearGradient[3] = 500;
            string[] colors = {
        "#2f7ed8",
        "#0d233a",
        "#8bbc21",
        "#910000",
        "#1aadce",
        "#492970",
        "#f28f43",
        "#77a1e5",
        "#c42525",
        "#a6c96a"
      };
            List<Rules> rulesList = new List<Rules>();
            rulesList.Add(new Rules
            {
                Condition = new Condition
                {
                    MinHeight = 100,
                    MinWidth = 100,
                    MaxWidth = 100,
                },
                ChartOptions = new ChartOptions
                {
                    Legend = new LegendLine
                    {
                        Layout = "horizontal",
                        Align = "center",
                        VerticalAlign = "bottom"
                    }
                }
            });
            var results = from d in graphData
                          group d by d.Platform into g
                          select new
                          {
                              dimension = g.Key,
                              measures = new
                              {
                                  Imperssions = g.Sum(x => x.Imperssions),
                                  Clicks = g.Sum(x => x.Clicks),
                                  CTR = g.Sum(x => x.CTR)
                              }
                          };

            if (chartSettingsInputModel.ChartType == "bar")
            {
                ch = new BasicBarChart
                {
                    Colors = chartSettingsInputModel.Colors,
                    Chart = new Chart
                    {
                        MarginLeft = chartSettingsInputModel.MarginLeft,
                        MarginBottom = chartSettingsInputModel.MarginBottom,
                        MarginRight = chartSettingsInputModel.MarginRight,
                        MarginTop = chartSettingsInputModel.MarginTop,
                        backgroundColor = new PlotBackgroundColor
                        {
                            linearGradient = LinearGradient,
                            Stops = Stops
                        },
                        Type = chartSettingsInputModel.ChartType
                    },
                    Title = new Title
                    {
                        Text = chartSettingsInputModel.MainTitle
                    },
                    Subtitle = new Subtitle
                    {
                        Text = ""
                    },
                    XAxis = new XAxis
                    {
                        Categories = results.Select(x => x.dimension).ToList(),
                        Visible = chartSettingsInputModel.xAxisVisible,
                        Title = null,
                        GridLineWidth = 0,
                        MinorGridLineWidth = 0,
                        Labels = new Labels
                        {
                            Enabled = true
                        }
                    },
                    YAxis = new YAxis
                    {
                        Visible = chartSettingsInputModel.yAxisVisible,
                        GridLineWidth = 1,
                        MinorGridLineWidth = 1,
                        Min = 0,
                        Title = new Title3
                        {
                            Text = "",
                            Align = "high"
                        },
                        Labels = new Labels
                        {
                            Overflow = "justify",
                            Enabled = true
                        }
                    },
                    Tooltip = new Tooltip
                    {
                        ValueSuffix = "millions",
                    },
                    PlotOptions = new PlotOptions
                    {
                        Bar = new Bar
                        {

                            DataLabels = new DataLabels
                            {
                                Enabled = chartSettingsInputModel.DataLabelEnabled,
                            },
                            Tooltip = new Tooltip
                            {
                                HeaderFormat = "<b>{series.name}</b><br>",
                                PointFormat = "{point.y}",
                                ClusterFormat = "Clustered points: {point.clusterPointsAmount}"
                            }
                        }
                    },
                    Legend = new Legend
                    {
                        Layout = "vertical",
                        Align = "right",
                        VerticalAlign = "top",
                        X = 1,
                        Y = 1,
                        Floating = false,
                        BackgroundColor = "",
                        BorderColor = "#CCC",
                        BorderWidth = 1,
                        Shadow = true,
                        Enabled = false
                    },
                    //Legend = new Legend
                    //{
                    //    Enabled = true
                    //},
                    Credits = new Credits
                    {
                        Enabled = false
                    },
                    Series = new List<BarSeries> {

              new BarSeries {
                Name = "Impressions", Data = results.Select(x => (int) x.measures.Imperssions).ToList()
              },
              new BarSeries {
                Name = "Clicks", Data = results.Select(x => (int) x.measures.Clicks).ToList()
              },
              //new BarSeries { Name = "CTR(%)", Data = results.Select(x=>(int)x.measures.CTR).ToList() }

            },
                    Responsive = new ResponsiveLine
                    {
                        Rules = rulesList

                    }
                };
            }
            else if (chartSettingsInputModel.ChartType == "column")
            {
                ch = new BasicColumnChart
                {
                    Colors = chartSettingsInputModel.Colors,
                    chart = new BasicChart
                    {
                        Type = "column",
                        MarginLeft = chartSettingsInputModel.MarginLeft,
                        MarginBottom = chartSettingsInputModel.MarginBottom,
                        MarginRight = chartSettingsInputModel.MarginRight,
                        MarginTop = chartSettingsInputModel.MarginTop,
                        backgroundColor = new PlotBackgroundColorColumn
                        {
                            linearGradient = LinearGradient,
                            Stops = Stops
                        },
                    },

                    Title = new BasicTitle
                    {
                        Text = chartSettingsInputModel.MainTitle
                    },
                    Subtitle = new BasicSubtitle
                    {
                        Text = chartSettingsInputModel.SubTitle
                    },
                    XAxis = new BasicXAxis
                    {
                        Visible = chartSettingsInputModel.xAxisVisible,
                        Categories = results.Select(x => x.dimension).ToList(),
                        crosshair = true
                    },
                    YAxis = new BasicYAxis
                    {
                        Visible = chartSettingsInputModel.yAxisVisible,
                        Min = 0,
                        Title = new BasicTitle2
                        {
                            Text = ""
                        }

                    },
                    Tooltip = new BasicTooltip
                    {
                        Enabled = true,
                        headerFormat = "<span>{point.key}</span><table>",
                        pointFormat = "<tr><td>{series.name}: </td>" + "<td><b>{point.y:.1f} mm</b></td></tr>",
                        footerFormat = "</table>",
                        shared = true,
                        useHTML = true
                    },
                    PlotOptions = new BasicPlotOptions
                    {
                        Column = new Basiccolumn
                        {
                            pointPadding = 0.2,
                            borderWidth = 0
                        },
                    },
                    Legend = new BasicLegend
                    {
                        Enabled = chartSettingsInputModel.LegendsEnabled
                    },
                    Credits = new Basiccredits
                    {
                        Enabled = false
                    },
                    Series = new List<BasicSeries> {
              new BasicSeries {
                Name = "Impressions", Data = results.Select(x => (double) x.measures.Imperssions).ToList()
              },
              new BasicSeries {
                Name = "Clicks", Data = results.Select(x => (double) x.measures.Clicks).ToList()
              },
              new BasicSeries {
                Name = "CTR(%)", Data = results.Select(x => (double) x.measures.CTR).ToList()
              }
            }
                };
            }
            else if (chartSettingsInputModel.ChartType == "columnStack")
            {

                ch = new ColumnStackChartModel
                {
                    Colors = chartSettingsInputModel.Colors,
                    Chart = new ChartColumnStack
                    {
                        backgroundColor = new PlotBackgroundColorColumnStack
                        {
                            linearGradient = LinearGradient,
                            Stops = Stops
                        },
                        Type = "column",
                        MarginLeft = chartSettingsInputModel.MarginLeft,
                        MarginBottom = chartSettingsInputModel.MarginBottom,
                        MarginRight = chartSettingsInputModel.MarginRight,
                        MarginTop = chartSettingsInputModel.MarginTop,
                    },
                    Title = new TitleColumnStack
                    {
                        Text = chartSettingsInputModel.MainTitle
                    },

                    XAxis = new XAxisColumnStack
                    {
                        Visible = chartSettingsInputModel.xAxisVisible,
                        Categories = results.Select(x => x.dimension).ToList()
                    },
                    YAxis = new YAxisColumnStack
                    {
                        MinorGridLineWidth = 1,
                        GridLineWidth = 1,
                        Visible = chartSettingsInputModel.yAxisVisible,
                        Min = 0,
                        Title = new Title3ColumnStack
                        {
                            Text = "consumption",

                        },
                        Labels = new LabelsColumnStack
                        {
                            Enabled = true
                        },

                        stackLabels = new StackLabelsColumnStack
                        {
                            Enabled = chartSettingsInputModel.DataLabelEnabled,
                            Style = new StyleColumnStack
                            {
                                fontWeight = "bold"
                            }
                        },
                    },
                    Tooltip = new TooltipColumnStack
                    {
                        HeaderFormat = "<b>{point.x}</b><br/>",
                        PointFormat = "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
                    },
                    PlotOptions = new PlotOptionsColumnStack
                    {
                        column = new ColumnColumnStack
                        {
                            Stacking = "normal",
                            DataLabels = new DataLabels
                            {
                                Enabled = chartSettingsInputModel.DataLabelEnabled
                            }
                        }
                    },
                    Legend = new LegendColumnStack
                    {
                        Align = "right",
                        X = 1,
                        VerticalAlign = "top",
                        Y = 1,
                        Floating = true,
                        BackgroundColor = "",
                        BorderColor = "#CCC",
                        BorderWidth = 1,
                        Shadow = false,
                        Enabled = chartSettingsInputModel.LegendsEnabled
                    },

                    Series = new List<BarSeries> {
              new BarSeries {
                Name = "Impressions", Data = results.Select(x => (int) x.measures.Imperssions).ToList()
              },
              new BarSeries {
                Name = "Clicks", Data = results.Select(x => (int) x.measures.Clicks).ToList()
              },
              new BarSeries {
                Name = "CTR(%)", Data = results.Select(x => (int) x.measures.CTR).ToList()
              }

            }
                };
            }
            return ch;
        }
        public async Task<AreaChart> getGraphAreaData(ChartSettingsInputModel chartSettingsInputModel)
        {
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = chartSettingsInputModel.GradientBGColor1;
            Stops[1, 0] = 1;
            Stops[1, 1] = chartSettingsInputModel.GradientBGColor2;
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100;
            LinearGradient[1] = 100;
            LinearGradient[2] = 500;
            LinearGradient[3] = 500;
            List<AreaSeries> areaData = new List<AreaSeries>();
            string spQuery = "SELECT PLATFORM ,CONVERT(INT,PERIOD_DATE) AS PERIOD_DATE,PERIOD_DISPLAY_DATE,CONVERT(INT,IMPRESSIONS) AS IMPRESSIONS," +
              "CONVERT(INT, CLICKS) AS CLICKS, CONVERT(INT, CTR) AS CTR, CONNECTOR_IMAGE FROM excel_channel_data_processed";
            List<GraphDataModel> graphData = _GraphDataRepository.ExecutePlainQuery(spQuery).ToList();

            string[] names = graphData.Select(x => x.Platform).Distinct().ToArray();

            //foreach (var item in names)
            //{
            //    areaData.Add(new AreaSeries
            //    {
            //        name = item,
            //        data = builddata(graphData.ToArray(), item)
            //    });
            //}
            areaData.Add(new AreaSeries
            {
                name = names[0],
                data = builddata(graphData.ToArray(), names[0])
            });
            var ch = new AreaChart
            {
                Colors = chartSettingsInputModel.Colors,
                chart = new AreaCharts
                {
                    Type = chartSettingsInputModel.ChartType,
                    MarginLeft = chartSettingsInputModel.MarginLeft,
                    MarginBottom = chartSettingsInputModel.MarginBottom,
                    MarginRight = chartSettingsInputModel.MarginRight,
                    MarginTop = chartSettingsInputModel.MarginTop,
                    backgroundColor = new PlotBackgroundColorArea
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },
                },
                Accessibility =
                new AreaAccessibility
                {
                    Description = "Image ."
                },
                Title =
                new AreaTitle
                {
                    Text = chartSettingsInputModel.MainTitle
                },
                Subtitle =
                new AreaSubtitle
                {
                    text = chartSettingsInputModel.SubTitle
                },
                XAxis =
                new AreaXAxis
                {
                    Visible = chartSettingsInputModel.xAxisVisible,
                    allowDecimals = chartSettingsInputModel.XAxisallowDecimals,
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
                    Visible = chartSettingsInputModel.yAxisVisible,
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
                    pointFormat = " {point.y:,.0f}"
                },
                PlotOptions =
                new AreaPlotOptions
                {
                    area =
                    new Area
                    {
                        pointStart = 0,
                        marker =
                        new AreaMarker
                        {
                            enabled = false,
                            symbol = "circle",
                            radius = 2,
                            states =
                            new AreaStates
                            {
                                hover =
                                new AreaHover
                                {
                                    enabled = true
                                }
                            }
                        }
                    }
                },
                Legend = new AreaLegend
                {
                    Enabled = chartSettingsInputModel.LegendsEnabled

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

            return ch;

        }
        public async Task<Piechart> getGraphPieData(ChartSettingsInputModel chartSettingsInputModel)
        {
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = chartSettingsInputModel.GradientBGColor1;
            Stops[1, 0] = 1;
            Stops[1, 1] = chartSettingsInputModel.GradientBGColor2;
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100;
            LinearGradient[1] = 100;
            LinearGradient[2] = 500;
            LinearGradient[3] = 500;
            string spQuery = "SELECT PLATFORM ,CONVERT(INT,PERIOD_DATE) AS PERIOD_DATE,PERIOD_DISPLAY_DATE,CONVERT(INT,IMPRESSIONS) AS IMPRESSIONS," +
              "CONVERT(INT, CLICKS) AS CLICKS, CONVERT(INT, CTR) AS CTR, CONNECTOR_IMAGE FROM excel_channel_data_processed";
            List<GraphDataModel> graphData = _GraphDataRepository.ExecutePlainQuery(spQuery).ToList();

            var results = from d in graphData
                          group d by d.Platform into g
                          select new
                          {
                              dimension = g.Key,
                              Imperssions = g.Sum(x => x.Imperssions),
                              Clicks = g.Sum(x => x.Clicks),
                              CTR = g.Sum(x => x.CTR)
                          };

            List<PieSeries> pieSeries;

            var piechartdata = (from r in results
                                select new Datum
                                {
                                    Name = r.dimension,
                                    Y = (double)r.Imperssions
                                }
            //new Datum{

            //Name = "Clicks",
            //Y = (double) r.Clicks
            //},
            //new Datum{

            //Name = "Ctr(%)",
            //Y = (double) r.CTR
            //}

            ).ToList();

            var pichart = new Piechart
            {
                Chart = new Chart
                {
                    // Height= (9 / 16 * 100) + "%",
                    PlotBorderWidth = null,
                    PlotShadow = false,
                    Type = "pie",
                    MarginLeft = chartSettingsInputModel.MarginLeft,
                    MarginBottom = chartSettingsInputModel.MarginBottom,
                    MarginRight = chartSettingsInputModel.MarginRight,
                    MarginTop = chartSettingsInputModel.MarginTop,
                    backgroundColor = new PlotBackgroundColor
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },

                },
                Title = new Title
                {
                    Text = chartSettingsInputModel.MainTitle
                },
                Tooltip = new Tooltip
                {
                    PointFormat = "{series.name}: <b>{point.percentage:.1f}</b>"
                },
                Legend = new Legend
                {
                    Enabled = false
                },
                Accessibility = new Accessibility
                {
                    Point = new Point
                    {
                        ValueSuffix = "%"
                    }
                },
                PlotOptions = new PlotOptions
                {
                    Pie = new PiePlotOptions
                    {

                        AllowPointSelect = true,
                        Cursor = "pointer",
                        Colors = chartSettingsInputModel.Colors,
                        DataLabels = new DataLabels
                        {
                            Enabled = chartSettingsInputModel.DataLabelEnabled,
                            Format = "<b>{point.name}</b>: {point.percentage:.1f} %",
                            Color = "contrast"
                        },
                        showInLegend = true
                    }
                },
                Series = new List<PieSeries> {
            new PieSeries {
              Name = "Impressions",
                ColorByPoint = true,
                Data = piechartdata
            }

          }
            };
            return pichart;

        }
        public async Task<List<GridDataModel>> getGridData()
        {

            string spQuery = "select * from INVOICE_DATA";
            List<GridDataModel> gridData = _GirdDataRepository.ExecutePlainQuery(spQuery).ToList();
            return gridData;

        }
        public async Task<DataTable> dynamicGridData(string userID, string WorkSpaceId, string Client_Id, string analysisType)
        {

            //DataTable dataTable = new DataTable();
            DbParameter[] parameters = {
        new SqlParameter("@USER_ID", userID),
        new SqlParameter("@WORKSPACE_ID", WorkSpaceId),
        new SqlParameter("@CLIENT_ID", Client_Id),
        new SqlParameter("@ANALYZE_TYPE", analysisType),
        new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) {
          Direction = ParameterDirection.Output
        }
      };
            string spQuery = StoreProcedureConstants.Sp_GetAnalyzeData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
              " @ANALYZE_TYPE, @V_MESSAGE OUTPUT";
            DataTable dataTable = _dynamicGridRepository.getDynamicgrid(spQuery, parameters);
            return dataTable;
        }
        public List<double> builddata(GraphDataModel[] graphData, string plateformName)
        {
            //areaData.Add(new AreaSeries
            //{
            //    name = "FaceBook",
            //    data = builddata(graphData.ToArray())
            //}

            List<GraphDataModel> dimentionData = new List<GraphDataModel>();

            List<double> dataList = new List<double>();

            GraphDataModel[] firstHeight = Array.FindAll(graphData, item1 => item1.Platform == plateformName);

            foreach (var item in firstHeight)
            {
                dataList.Add(item.CTR);
            }
            return dataList;
        }
        public List<double> builddataInsightLine(LineGraphDataModel[] graphData, string plateformName)
        {
            //areaData.Add(new AreaSeries
            //{
            //    name = "FaceBook",
            //    data = builddata(graphData.ToArray())
            //}

            List<GraphDataModel> dimentionData = new List<GraphDataModel>();

            List<double> dataList = new List<double>();

            LineGraphDataModel[] firstHeight = Array.FindAll(graphData, item1 => item1.PlatformName == plateformName);

            foreach (var item in firstHeight)
            {
                dataList.Add(Convert.ToDouble(item.PlatformValues));
            }
            return dataList;
        }
        public List<LineGraphDataModel> GetAIinsgihtsGraphData(string UserId, string WorkSpaceId, string Client_Id, string DimentionType)
        {
            DbParameter[] parameters = {
        new SqlParameter("@USER_ID", UserId),
        new SqlParameter("@WORKSPACE_ID", WorkSpaceId),
        new SqlParameter("@CLIENT_ID", Client_Id),
        new SqlParameter("@DIMENSION_TYPE", DimentionType),
        new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) {
          Direction = ParameterDirection.Output
        }
      };
            string spQuery = StoreProcedureConstants.Sp_GetLineGraphData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
              " @DIMENSION_TYPE, @V_MESSAGE OUTPUT";
            List<LineGraphDataModel> lineData = _dymamicLineDataRepository.ExecuteQuery(spQuery, parameters).ToList();
            return lineData;
        }
        public async Task<LineChart> InsighLineChartData(ChartSettingsInputModel chartSettingsInputModel)
        {
            dynamic[,] Stops = new dynamic[2, 2];
            Stops[0, 0] = 0;
            Stops[0, 1] = chartSettingsInputModel.GradientBGColor1;
            Stops[1, 0] = 1;
            Stops[1, 1] = chartSettingsInputModel.GradientBGColor2;
            int[] LinearGradient = new int[4];
            LinearGradient[0] = 100;
            LinearGradient[1] = 100;
            LinearGradient[2] = 500;
            LinearGradient[3] = 500;
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
                        Enabled = chartSettingsInputModel.LegendsEnabled,
                        Layout = "horizontal",
                        Align = "center",
                        VerticalAlign = "bottom"
                    }
                }
            });
            List<LineGraphDataModel> graphData = new List<LineGraphDataModel>();
            graphData = GetAIinsgihtsGraphData(chartSettingsInputModel.UserId, chartSettingsInputModel.WorkSpaceId,
              chartSettingsInputModel.Client_Id, chartSettingsInputModel.DimentionType);

            var cat = graphData.Select(x => x.PlatformDate).Distinct();
            var names = graphData.Select(x => x.PlatformName).Distinct();

            foreach (var item in names)
            {
                LineData.Add(new SeriesData
                {
                    Name = item,
                    Data = builddataInsightLine(graphData.ToArray(), item)
                });
            }
            var ch = new LineChart
            {
                Chart = new ChartLine
                {
                    //RenderTo= chartSettingsInputModel.Chartid,
                    Type = "line",
                    MarginLeft = chartSettingsInputModel.MarginLeft,
                    MarginBottom = chartSettingsInputModel.MarginBottom,
                    MarginRight = chartSettingsInputModel.MarginRight,
                    MarginTop = chartSettingsInputModel.MarginTop,
                    backgroundColor = new PlotBackgroundColorLine
                    {
                        linearGradient = LinearGradient,
                        Stops = Stops
                    },
                },
                Colors = chartSettingsInputModel.Colors,
                Title = new Title
                {
                    Floating = false,
                    Text = chartSettingsInputModel.MainTitle
                },
                Subtitle = new Subtitle
                {
                    Text = ""
                },
                YAxis = new YAxisLine
                {
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
                    Visible = chartSettingsInputModel.xAxisVisible,
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
                    Enabled = chartSettingsInputModel.LegendsEnabled,
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
                        // LineWidth=4,
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

                }
            };
            return ch;

        }

        //Dynamic charts
        public async Task<object> GetCharts(WidgetDto widget)
        {
            var obj = new { };
            if (widget.Type == "bar")
            {
                return await GetBarChartData(widget);
            }
            else if (widget.Type == "column")
            {
                return await GetColumnChartData(widget);
            }
            else if (widget.Type == "pie")
            {
                return await GetPieChartData(widget);
            }
            else if (widget.Type == "donut")
            {
                return await GetDonutChartData(widget);
            }
            else if (widget.Type == "line")
            {
                return await GetLineChartData(widget);
            }
            else if (widget.Type == "area")
            {
                return await GetAreaChartData(widget);
            }
            else if (widget.Type == "stock")
            {
                return await GetStockSingleLineSeries(widget);
            }
            else if (widget.Type == "solidgauge")
            {
                return await GetSolidGaugeChartData(widget);
            }
            else if (widget.Type == "bullet")
            {
                return await GetBulletChartData(widget);
            }
            else if (widget.Type == "threeDcolumn")
            {
                return await GetThreeDColumnChartData(widget);
            }
            else if (widget.Type == "threeDarea")
            {
                return await GetThreeDAreaChartData(widget);
            }
            else if (widget.Type == "table")
            {
                return await GetTabularData(widget);
            }
            else if (widget.Type == "DMATPtable")
            {
                return await GetTabularData(widget);
            }
            else if (widget.Type == "dualaxis")
            {
                return await GetDualAxisChartData(widget);
            }
            else if (widget.Type == "DefaultScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "ScoreCardValueColor")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMALSScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "ScoreCardtwoValue")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "imgScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "ScoreCardColorLPurple")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMMOCScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMNPSScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMNSCRScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMCACScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMBRScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "MultiBRScoreCardimg")
            {
                return await GetScorecardImgValueChartData(widget);
            }
            else if (widget.Type == "MultiBRScoreCardimgTwo")
            {
                return await GetScorecardImgValueChartData(widget);
            }
            else if (widget.Type == "DMWTLRScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMCDScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMDRScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "DMEWLScoreCard")
            {
                return await GetScorecardChartData(widget);
            }
            else if (widget.Type == "AIWidgetStyleCard")
            {
                return await GetAIWidgetStyleCardData(widget);
            }
            else

            {
                return obj;
            }
        }
        private List<DatumGenaric> GetPieData(DataTable table, string dimensionName, string measureName)
        {
            List<DatumGenaric> data = new List<DatumGenaric>();
            foreach (DataRow row in table.Rows)
            {
                data.Add(new DatumGenaric()
                {
                    Name = row.Field<string>(dimensionName),
                    Y = Convert.ToDecimal(row.Field<object>(measureName))
                });
            }
            return data;
        }
        private List<BulletData> getTestBulletChartData(DataTable table, string measureName)
        {
            List<BulletData> data = new List<BulletData>();
            foreach (DataRow row in table.Rows)
            {
                try
                {
                    data.Add(new BulletData()
                    {
                        //Y = Convert.ToDecimal(row.Field<object>(measureName)),
                        Target = Convert.ToDecimal(row.Field<object>(measureName))
                    });
                }
                catch (Exception ex)
                {

                    throw ex;
                }

            }
            return data;
        }
        private List<DonutDatumGenaric> GetDonutData(DataTable table, string dimensionName, string measureName)
        {
            List<DonutDatumGenaric> Data = new List<DonutDatumGenaric>();
            foreach (DataRow row in table.Rows)
            {
                Data.Add(new DonutDatumGenaric()
                {
                    Name = row.Field<string>(dimensionName),
                    Y = Convert.ToDecimal(row.Field<object>(measureName))
                });
            }
            return Data;
        }
        //private List<SolidGuageDatumGenaric> GetSolidGuageData(DataTable table, string dimensionName, string measureName)
        //{
        //    List<SolidGuageDatumGenaric> Data = new List<SolidGuageDatumGenaric>();
        //    foreach (DataRow row in table.Rows)
        //    {
        //        Data.Add(new SolidGuageDatumGenaric() { Name = row.Field<string>(dimensionName), Y = Convert.ToDecimal(row.Field<object>(measureName)) });
        //    }
        //    return Data;
        //}
        private List<string> GetDimensionData(DataTable table, string name)
        {
            List<string> data = new List<string>();
            foreach (DataRow row in table.Rows)
            {
                data.Add(row.Field<string>(name));
            }
            return data;
        }
        private List<decimal> GetMeasureData(DataTable table, string name)
        {
            List<decimal> data = new List<decimal>();
            foreach (DataRow row in table.Rows)
            {
                data.Add(Convert.ToDecimal(row.Field<object>(name)));
            }
            return data;
        }
        private List<decimal> GetMeasureDataLine(DataTable table, string name)
        {
            List<decimal> data = new List<decimal>();
            foreach (DataRow row in table.Rows)
            {
                data.Add(Convert.ToDecimal(row.Field<object>(name)));
            }
            return data;
        }
        private decimal GetBulletData(DataTable table, string name)
        {
            decimal data = 0;
            foreach (DataRow row in table.Rows)
            {
                data = (Convert.ToDecimal(row.Field<object>(name)));
            }
            return data;
        }
        private async Task<BarChartGenaric> GetBarChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetBarChart(widget);
            ch.XAxis = new List<BarXAxisGenaric>() {
        new BarXAxisGenaric {
                Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name),
                Crosshair = true,
                  Labels = new BarLabelsXGenaric
                  {
                      style = new BarXAxislabelsStyle
                      {
                          fontSize = "6px"
                      }
                   }
                }    
         };
            widget.Measure.ToList().ForEach(x => ch.Series.Add(new BarSeriesGenaric()
            {
                Name = x.Name,
                Data = GetMeasureData(data, x.Name)
            }));
            return ch;
        }
        private async Task<TabularDataModel> GetTabularData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            TabularDataModel model = new TabularDataModel();
            widget.Dimension.ToList().ForEach(x => {
                model.Dimensions.Add(GetDimensionData(data, x.Name));
            });
            widget.Measure.ToList().ForEach(x => {
                model.Measures.Add(GetMeasureData(data, x.Name));
            });
            return model;
        }
        private async Task<ScoreCardChart> GetScorecardChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            ScoreCardChart model = GetScorecardChart(widget);
            widget.Dimension.ToList().ForEach(x => { model.Dimensions.Add(GetDimensionData(data, x.Name)); });
            widget.Measure.ToList().ForEach(x => {
                var list = GetMeasureData(data, x.Name);
                x.Total = list.Sum(x => x);
                model.Measures.Add(list);
            });
            return model;
        }
        private async Task<ScoreCardChart> GetScorecardImgValueChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            ScoreCardChart model = GetScorecardChart(widget);
            model.data = JsonConvert.SerializeObject(data, Formatting.None);
            //widget.Dimension.ToList().ForEach(x => { model.Dimensions.Add(GetDimensionData(data, x.Name)); });
            //widget.Measure.ToList().ForEach(x => {
            //    var list = GetMeasureData(data, x.Name);
            //    x.Total = list.Sum(x => x);
            //    model.Measures.Add(list);
            //});
            widget.Dimension.ToList().ForEach(x => {
                model.Dimensions.Add(GetDimensionData(data, x.Name));
            });
            widget.Measure.ToList().ForEach(x => {
                model.Measures.Add(GetMeasureData(data, x.Name));
            });
            return model;
        }
        private ScoreCardChart GetScorecardChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var data = JsonConvert.DeserializeObject<ScoreCardChart>(widget.PropertiesJson);
                return data;
            }
            else
            {
                return new ScoreCardChart() { ColorBackground = "#fff", ColorForeground = "#515961", CardImg = string.Empty, CardImgText= string.Empty, Prefix = string.Empty, Suffix = string.Empty,  };
            }
        }
        private async Task<AIWidgetStyleCard> GetAIWidgetStyleCardData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            AIWidgetStyleCard model = GetAIWidgetStyleCard(widget);
            model.data = JsonConvert.SerializeObject(data, Formatting.None);
            widget.Dimension.ToList().ForEach(x =>
            {
                model.Dimensions.Add(GetDimensionData(data, x.Name));
            });
            //widget.Measure.ToList().ForEach(x =>
            //{
            //    model.Measures.Add(GetMeasureData(data, x.Name));
            //});
            return model;
        }
        private AIWidgetStyleCard GetAIWidgetStyleCard(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var data = JsonConvert.DeserializeObject<AIWidgetStyleCard>(widget.PropertiesJson);
                return data;
            }
            else
            {
                return new AIWidgetStyleCard() { Type= "AIWidgetStyleCard" };
            }
        }
        private async Task<DualAxisColumnLineChart> GetDualAxisChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetDualAxisChart(widget);
            ch.XAxis = new List<DualColumnLineXAxis>() {
        new DualColumnLineXAxis {
          Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name), 
            Crosshair = true,
          labels= new XAxislabels
          {
              style=new XAxislabelsStyle
              {
                  fontSize="6px"
              }
          }
        }
      };
            int measureCount = 0;
            widget.Measure.ToList().ForEach(x => {
                measureCount++;
                if (measureCount < widget.Measure.Count)
                {
                    ch.Series.Add(new DualAxisColumnLineSeries()
                    {
                        Name = x.Name,
                        Data = GetMeasureData(data, x.Name),
                        Type = "column"
                    });
                }
                else if (measureCount == widget.Measure.Count)
                {
                    ch.Series.Add(new DualAxisColumnLineSeries()
                    {
                        Name = x.Name,
                        Data = GetMeasureData(data, x.Name),
                        Type = "spline",
                        yAxis = 1
                    });
                }
            });
            return ch;
        }
        private async Task<ColumnChartGenaric> GetColumnChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetColumnChart(widget);
        //    ch.XAxis = new ColumnXAxisGenaric { Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name), Title = null, Labels = new ColumnLabelsXGenaric() };
       //     widget.Measure.ToList().ForEach(x => ch.Series.Add(new BarSeriesGenaric() { Name = x.Name, Data = GetMeasureData(data, x.Name) }));

            ch.XAxis = new List<ColumnXAxisGenaric>() {
                    new ColumnXAxisGenaric {
                Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name),
                Crosshair = true,
                  Labels = new ColumnLabelsXGenaric
                  {
                      style = new ColumnLabelsXGenaricStyle
                      {
                          fontSize = "6px"
                      }
                   }
                }
         };
            widget.Measure.ToList().ForEach(x => ch.Series.Add(new ColumnSeriesGenaric()
            {
                Name = x.Name,
                Data = GetMeasureData(data, x.Name)
            }));

            return ch;
        }
        private async Task<_3DColumnGenaricCharts> GetThreeDColumnChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetThreeDColumnChart(widget);

           // ch.XAxis = new ColumnXAxisGenaric { Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name), Title = null, Labels = new ColumnLabelsXGenaric() };
            widget.Measure.ToList().ForEach(x => ch.Series.Add(new BarSeriesGenaric() {  Name = x.Name, Data = GetMeasureData(data, x.Name) }));
            return ch;
        }
        private async Task<LineChartGenaric> GetLineChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetLineChart(widget);
            ch.XAxis = new List<LineXAxisGenaric>() {
        new LineXAxisGenaric {
          Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name),
            Crosshair = true,
          Labels= new LineLabelsXGenaric
          {
              style=new LineLabelsXGenaricStyle
              {
                  fontSize="7px"
              }
          }
        }
      };
            widget.Measure.ToList().ForEach(x => ch.Series.Add(new LineSeriesGenaric()
            {
                Name = x.Name,
                Data = GetMeasureDataLine(data,x.Name),
                zoneAxis = "x",
                zones = new List<object>
                {
                     new Serieszonesobj1
                     {
                      // value= x.value
                     },
                       new Serieszonesobj2
                     {
                       //  dashStyle = x.dashStyle
                }
            }
            }
            ));
            return ch;
        }
        private async Task<AreaChartGenaric> GetAreaChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetAreaChart(widget);
            widget.Measure.ToList().ForEach(x => ch.Series.Add(new AreaSeriesGenaric()
            {
                Name = x.Name,
                Data = GetMeasureData(data, x.Name)
            }));
            return ch;
        }
        private async Task<_3DAreaGenaricCharts> GetThreeDAreaChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
           
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetThreeDAreaChart(widget);

            widget.Measure.ToList().ForEach(x => ch.Series.Add(new ThreeDAreaSeriesGenaric() { Name = x.Name, Data = GetMeasureData(data, x.Name) }));

            return ch;
        }
        private async Task<SolidGaugeChartGenaric> GetSolidGaugeChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetSolidGaugeChart(widget);

            widget.Measure.ToList().ForEach(x => ch.Series.Add(new SolidGaugeChartSeriesGenaric()
            {
                Type = "gauge",
                dataLabels = new SolidguageDataLabels
                {
                    format = "<span style='font-size:10px; color:#E0E0E3;'>{y}</span></div>",
                    y = 10,
                    borderwidth = 0
                },
                tooltip = new Solidguagetooltip
                {

                },
                Name = x.Name,
                Data = GetMeasureData(data, x.Name)
            }));
            return ch;
        }
        private async Task<BulletGenaricCharts> GetBulletChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetBulletChart(widget);
            //List<BulletData> data1 = new List<BulletData>();


            ch.XAxis = new List<BulletXAxisGenaric>() {
        new BulletXAxisGenaric {
          Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name),
            Crosshair = true,
          Labels= new BulletLabelsXGenaric
          {
              style=new BulletLabelsXGenaricStyle
              {
                  fontSize="6px"
              }
          }
        }
      };
            //  widget.Measure.ToList().ForEach(x => ch.Add(new SolidGaugeSeriesGenaric() { Type = "gauge", Name = x.Name, Data = GetMeasureData(data, x.Name) }));
            widget.Measure.ToList().ForEach(x => ch.Series.Add(new BulletSeriesGenaric()
            {
                Data = getTestBulletChartData(data, x.Name)
            }));

            return ch;

        }
        private DualAxisColumnLineChart GetDualAxisChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                return JsonConvert.DeserializeObject<DualAxisColumnLineChart>(widget.PropertiesJson);
            }
            else
            {
                var ch = new DualAxisColumnLineChart
                {
                    Chart = new DualColumnLineChart
                    {
                        ZoomType = "xy"
                    },
                    Title = new DualColumnLineTitle
                    {
                        Text = ""
                    },
                    Subtitle = new DualColumnLineSubtitle
                    {
                        Text = ""
                    },
                    YAxis = new List<DualColumnLineYAxis>() {
              new DualColumnLineYAxis {
                Title = new DualColumnLineYAxisTitle {
                    Text = "",
                      Align = "high"
                  },
              }
            },
                    Tooltip = new DualColumnLineTooltip
                    {
                        ValueSuffix = " millions"
                    },
                    Legend = new DualColumnLineLegend
                    {
                        Layout = "vertical",
                        Align = "right",
                        VerticalAlign = "top",
                        X = -40,
                        Y = 80,
                        Floating = true,
                        BorderWidth = 1,
                        BackgroundColor = "#FFFFFF",
                        Shadow = true
                    },
                    Credits = new DualColumnLineCredits
                    {
                        Enabled = false
                    },
                };

                return ch;
            }
        }
        private BarChartGenaric GetBarChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var ch = JsonConvert.DeserializeObject<BarChartGenaric>(widget.PropertiesJson);
                return ch;
            }
            else
            {
                var ch = new BarChartGenaric
                {
                    Chart = new BarChartGenaricBasic
                    {
                        Type = "bar"
                    },
                    Title = new BarTitleGenaric
                    {
                        Text = ""
                    },
                    Subtitle = new BarSubtitleGenaric
                    {
                        Text = ""
                    },
                    YAxis = new BarYAxisGenaric
                    {
                        Min = 0,
                        Title = new BarTitleYGenaric
                        {
                            Text = "",

                            Align = "high"
                        },
                        Labels = new BarLabelsYGenaric
                        {
                            Overflow = "justify"
                        }
                    },
                    XAxis = new List<BarXAxisGenaric>() {
              new BarXAxisGenaric {
                        Visible = true,
                        Crosshair = true,
                        Categories = new List<string> {
                     },
                        Labels = new BarLabelsXGenaric
                        {
                            Enabled = true
                        }
                        }
                    },
                    Tooltip = new BarTooltipGenaric
                    {
                        ValueSuffix = " millions"
                    },
                    PlotOptions = new BarPlotOptionsGenaric
                    {
                        Bar = new BarGenaric
                        {
                            DataLabels = new BarDataLabelsPGenaric
                            {
                                Enabled = true
                            }
                        }
                    },
                    Legend = new BarLegendGenaric
                    {
                        Layout = "vertical",
                        Align = "right",
                        VerticalAlign = "top",
                        X = -40,
                        Y = 80,
                        Floating = true,
                        BorderWidth = 1,
                        BackgroundColor = "#FFFFFF",
                        Shadow = true
                    },
                    Credits = new BarCreditsGenaric
                    {
                        Enabled = false
                    }
                };

                return ch;
            }
        }
        private PieChartGenaric GetPieChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                return JsonConvert.DeserializeObject<PieChartGenaric>(widget.PropertiesJson);
            }
            else
            {
                var ch = new PieChartGenaric
                {
                    Chart = new PieChartGenaricBasic
                    {
                        Type = "pie"
                    },
                    Title = new PieTitleGenaric
                    {
                        Text = "Traffic on Social Sites"
                    },
                    Tooltip = new PieTooltipGenaric
                    {
                        PointFormat = "{series.name}: <b>{point:.1f}</b>"
                    },
                    Accessibility = new PieAccessibilityGenaric
                    {
                        Point = new PiePointGenaric
                        {
                            ValueSuffix = "%"
                        }
                    },
                    PlotOptions = new PiePlotOptionsGenaric
                    {
                        Pie = new PieGenaric
                        {
                            AllowPointSelect = true,
                            Cursor = "pointer",
                            DataLabels = new PieDataLabelsGenaric
                            {
                                Enabled = true,
                                Format = "<b>{point.name}</b>: {point.percentage:.1f} %"
                            },
                        }
                    },
                    Series = new List<PieSeriesGenaric> {
              new PieSeriesGenaric {
                Name = "Impressions",
                  ColorByPoint = true
              }

            }
                };
                return ch;
            }
        }
        private DonutChartGenaric GetDonutChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                return JsonConvert.DeserializeObject<DonutChartGenaric>(widget.PropertiesJson);
            }
            else
            {
                var ch = new DonutChartGenaric
                {
                    chart = new DonutchartGenaric
                    {
                        PlotShadow = false,
                        PlotBorderWidth = null,
                        type = "pie",
                        renderTo = "container",
                        BackgroundColor = ""
                    },
                    Title = new DonutTitleGenaric
                    {
                        Text = "",
                        Align = "",

                        Style = new DonutTitleStyleGenaric
                        {
                            FontSize = "",
                            Color = "",
                            FontFamily = ""
                        }
                    },
                    Tooltip = new DonutTooltipGenaric
                    {
                        Enabled = true,
                        PointFormat = "",
                        BackgroundColor = "",
                        Style = new DonutTooltipStyleGenaric
                        {
                            Color = ""
                        }
                    },
                    Credits = new DonutCreditsGenaric
                    {
                        Enabled = false
                    },
                    Legend = new DonutLegendGenaric
                    {
                        Enabled = true
                    },
                    plotOptions = new DonutplotOptionsGenaric
                    {

                        Pie = new DonutPieGenaric
                        {
                            DataLabels = new DonutDataLabelsGenaric
                            {
                                Enabled = true,
                                Format = "<b>{point.name}</b>: {point.percentage:.1f} %",
                                Color = "contrast"
                            },

                            innerSize = "50%"
                        }
                    }

                };
                return ch;

            }
        }
        private ColumnChartGenaric GetColumnChart(WidgetDto widget)
        {

            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var ch = JsonConvert.DeserializeObject<ColumnChartGenaric>(widget.PropertiesJson);
                return ch;
            }
            else
            {
                var ch = new ColumnChartGenaric
                {
                    Colors = new List<string>() {
              "#4572A7",
              "#AA4643",
              "#89A54E",
              "#80699B",
              "#3D96AE",
              "#DB843D",
              "#92A8CD",
              "#A47D7C",
              "#B5CA92"
            },
                    Chart = new ColumnChartGenericBasic
                    {
                        Type = "column",
                        BackgroundColor = "black"
                    },
                    Title = new ColumnTitleGenaric
                    {
                        Text = "Social Sites States stacked",
                        Style = new ColumnStyleGenaric
                        {
                            FontSize = "18px",
                            FontWeight = ""
                        }
                    },
                //    XAxis = new ColumnXAxisGenaric
                //    {
                //        Visible = true,
                //        Categories = new List<string>() {
                //  "cat1",
                //  "cat2",
                //  "cat3",
                //  "cat4",
                //  "cat5"
                //},
                //        Crosshair = true,

                //    },


                    XAxis = new List<ColumnXAxisGenaric>() {
              new ColumnXAxisGenaric {
                        Visible = true,
                        Crosshair = true,
                        Categories = new List<string> {
                     },
                        Labels = new ColumnLabelsXGenaric
                        {
                            Enabled = true
                        }
                        }
                    },
                    YAxis = new ColumnYAxisGenaric
                    {
                        Min = 0,
                        Title = new ColumnTitleYGenaric
                        {
                            Text = "consumption",
                            //Style = new StyleGenaric
                            //{
                            //    FontSize = "28px",
                            //    FontWeight = "bold"
                            //}
                        },
                        Labels = new ColumnLabelsYGenaric { },
                    },
                    Tooltip = new ColumnTooltipGenaric
                    {
                        HeaderFormat = "<span style='font - size:10px'>{point.key}</span><table>",
                        PointFormat = "<tr><td style='color: { series.color}; padding: 0'>{series.name}: </td> <td style='padding: 0'><b>{point.y:.1f} mm</b></td></tr>",
                        FooterFormat = "</table>",
                        Shared = true,
                        UseHTML = true
                    },
                    Legend = new ColumnlegendGenaric
                    {
                        Enabled = false
                    },
                    PlotOptions = new ColumnPlotOptionsGenaric
                    {
                        Column = new ColumnGenaric
                        {

                            PointPadding = 0.2,
                            BorderWidth = 0
                        }
                    }
                };
                return ch;

            }
        }
        private _3DColumnGenaricCharts GetThreeDColumnChart(WidgetDto widget)
        {

            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var ch = JsonConvert.DeserializeObject<_3DColumnGenaricCharts>(widget.PropertiesJson);
                return ch;
            }
            else
            {
                var ch = new _3DColumnGenaricCharts
                {
                    //Colors = new List<string>() { "#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92" },
                    //Chart = new ColumnChartGenericBasic { Type = "column", BackgroundColor = "black" },
                    //Title = new ColumnTitleGenaric
                    //{
                    //    Text = "Social Sites States stacked",
                    //    Style = new ColumnStyleGenaric
                    //    {
                    //        FontSize = "18px",
                    //        FontWeight = ""
                    //    }
                    //},
                    //XAxis = new ColumnXAxisGenaric
                    //{
                    //    Visible = true,
                    //    Categories = new List<string>() { "cat1", "cat2", "cat3", "cat4", "cat5" },
                    //    Crosshair = true,

                    //},
                    //YAxis = new ColumnYAxisGenaric
                    //{
                    //    Min = 0,
                    //    Title = new ColumnTitleYGenaric
                    //    {
                    //        Text = "consumption",
                    //        //Style = new StyleGenaric
                    //        //{
                    //        //    FontSize = "28px",
                    //        //    FontWeight = "bold"
                    //        //}
                    //    },
                    //    Labels = new ColumnLabelsYGenaric { },
                    //},
                    //Tooltip = new ColumnTooltipGenaric
                    //{
                    //    HeaderFormat = "<span style='font - size:10px'>{point.key}</span><table>",
                    //    PointFormat = "<tr><td style='color: { series.color}; padding: 0'>{series.name}: </td> <td style='padding: 0'><b>{point.y:.1f} mm</b></td></tr>",
                    //    FooterFormat = "</table>",
                    //    Shared = true,
                    //    UseHTML = true
                    //},
                    //Legend = new ColumnlegendGenaric
                    //{
                    //    Enabled = false
                    //},
                    //PlotOptions = new ColumnPlotOptionsGenaric
                    //{
                    //    Column = new ColumnGenaric
                    //    {

                    //        PointPadding = 0.2,
                    //        BorderWidth = 0
                    //    }
                    //}
                };
                return ch;

            }
        }
        private LineChartGenaric GetLineChart(WidgetDto widget)
        {
            //if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            //{
            //    var data = JsonConvert.DeserializeObject<LineChartGenaric>(widget.PropertiesJson);
            //    if (data.XAxis.Labels == null)
            //    {
            //        data.XAxis.Labels = new LineLabelsXGenaric();
            //    }
            //    return data;
            //}


            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var ch = JsonConvert.DeserializeObject<LineChartGenaric>(widget.PropertiesJson);
                return ch;
            }
            else
            {
                var ch = new LineChartGenaric
                {
                    Colors = new List<string>() {
              "#4572A7",
              "#AA4643",
              "#89A54E",
              "#80699B",
              "#3D96AE",
              "#DB843D",
              "#92A8CD",
              "#A47D7C",
              "#B5CA92"
            },
                    Chart = new LineChartGenaricBasic
                    {
                        Type = "line"

                    },
                    Title = new LineTitleGenaric
                    {
                        Text = "Line Chart"
                    },
                    Subtitle = new LineSubtitleGenaric
                    {
                        Text = "Line Chart"
                    },
                    YAxis = new LineYAxisGenaric
                    {
                        Title = new LineTitleYGenaric
                        {
                            Text = "Line Chart"
                        },
                        Labels = new LineLabelsYGenaric { },
                    },

                    XAxis = new List<LineXAxisGenaric>() {
              new LineXAxisGenaric {
                        Visible = true,
                        Crosshair = true,
                         Accessibility = new LineAccessibilityXGenaric()
                        {
                            RangeDescription = "Range: 2010 to 2017"
                        },
                        Categories = new List<string> {
                     },
                        Labels = new LineLabelsXGenaric
                        {
                            Enabled = true
                        }
                        }
                    },



                    Tooltip = new LineTooltipGenaric()
                    {
                        PointFormat = "{series.name}: {point.y}"
                    },
                    Legend = new LineLegendGenaric()
                    {

                    },
                    PlotOptions = new LinePlotOptionsGenaric
                    {
                        Series = new LineSeriesPGenaric()
                        {
                            LineWidth = 1,
                            Marker = new LineMarkerGenaric
                            {
                                Enabled = true
                            },
                            Label = new LineLabelsSeriesGenaric
                            {
                                ConnectorAllowed = false
                            },
                            PointStart = 2010
                        }
                    }
                };
                return ch;
            }

        }
        private AreaChartGenaric GetAreaChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var data = JsonConvert.DeserializeObject<AreaChartGenaric>(widget.PropertiesJson);
                if (data.XAxis.Labels == null)
                {
                    data.XAxis.Labels = new AreaLabelsXGenaric();
                }
                return data;
            }
            else
            {
                var ch = new AreaChartGenaric
                {
                    Colors = new List<string>() {
              "#4572A7",
              "#AA4643",
              "#89A54E",
              "#80699B",
              "#3D96AE",
              "#DB843D",
              "#92A8CD",
              "#A47D7C",
              "#B5CA92"
            },
                    Chart = new AreaChartGenaricBasic
                    {
                        Type = "area",
                        marginLeft = null,
                        marginBottom = "0",
                        marginRight = null,
                        marginTop = "35",
                        BackgroundColor = new BackgroundColorGenaric()
                    },
                    Accessibility = new AreaAccessibilityGenaric()
                    {
                        Description = "Image"
                    },
                    Title = new AreaTitleGenaric
                    {
                        Text = "Area Chart"
                    },
                    Subtitle = new AreaSubtitleGenaric
                    {
                        Text = "Area Chart"
                    },
                    YAxis = new AreaYAxisGenaric
                    {
                        Visible = true,

                        Title = new AreaTitleYGenaric
                        {
                            Text = "Area Chart",
                            Enabled = false

                        },
                        Labels = new AreaLabelsYGenaric
                        {
                            Formatter = ""
                        },
                    },
                    XAxis = new AreaXAxisGenaric()
                    {
                        Visible = true,
                        Labels = new AreaLabelsXGenaric()
                        {
                            Formatter = ""
                        },
                        Accessibility = new AreaAccessibilityXGenaric()
                        {
                            RangeDescription = ""
                        }
                    },
                    Tooltip = new AreaTooltipGenaric()
                    {
                        Enabled = true,
                        HeaderFormat = "<b>{series.name}</b>",
                        PointFormat = "{point.y:,.0f}"
                    },
                    Legend = new AreaLegendGenaric()
                    {
                        Enabled = true
                    },
                    Credits = new AreaCreditsGenaric()
                    {
                        Enabled = true
                    },
                    PlotOptions = new AreaPlotOptionsGenaric
                    {
                        Area = new AreaGenaric()
                        {
                            LineWidth = 1,
                            Marker = new AreaMarkerGenaric
                            {
                                Enabled = false,
                                Symbol = "circle",
                                Radius = 2,
                                States = new AreaStateGenaric()
                                {
                                    Hover = new AreaHoverGenaric()
                                    {
                                        Enabled = true
                                    }
                                }
                            },
                            PointStart = 0
                        },
                        series = new SeriesGenaric()
                        {
                            enableMouseTracking = false
                        }

                    }
                };
                return ch;
            }

        }
        private _3DAreaGenaricCharts GetThreeDAreaChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var data = JsonConvert.DeserializeObject<_3DAreaGenaricCharts>(widget.PropertiesJson);

                return data;
            }
            else
            {
                var ch = new _3DAreaGenaricCharts
                {

                };
                return ch;
            }

        }
        private BulletGenaricCharts GetBulletChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var data = JsonConvert.DeserializeObject<BulletGenaricCharts>(widget.PropertiesJson);

                return data;
            }
            else
            {
                var ch = new BulletGenaricCharts { };
                return ch;
            }
        }
        private SolidGaugeChartGenaric GetSolidGaugeChart(WidgetDto widget)
        {
            if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            {
                var data = JsonConvert.DeserializeObject<SolidGaugeChartGenaric>(widget.PropertiesJson);

                return data;
            }
            else
            {
                var ch = new SolidGaugeChartGenaric
                {

                    Chart = new SolidGaugeChartGenaricBasic
                    {
                        Type = "solidgauge",
                        //PlotBackgroundImage = null, 
                        //PlotBorderWidth = 0, 
                        BackgroundColor = "#fff"
                    },
                    Title = new SolidGaugeTitleGenaric
                    {
                        Text = "Solid Gauge Chart",
                        //Align = "",
                        Style = new SolidGaugeTitleStyleGenaric
                        {
                            FontSize = "",
                            Color = "",
                            FontFamily = ""

                        }
                    },
                    Pane = new SolidGaugePaneGenaric
                    {
                        StartAngle = -90,
                        EndAngle = 90,
                        Background = new SolidGaugePaneGenaricBackground
                        {
                            // backgroundColor = "#ccc",
                            innerRadius = "60%",
                            outerRadius = "95%",
                            shape = "arc"
                        }
                    },
                    Credits = new SolidGaugeCreditGaugeGenaric
                    {
                        //Min = 0,
                        //Max = 40000,

                        Enabled = false
                    },
                    Tooltip = new SolidGaugeTooltipGaugeGenaric
                    {
                        Enabled = true,
                    },
                    PlotOptions = new SolidGaugePlotOptionsGenaric
                    {
                        Gauge = new GaugePlotGenaric
                        {
                            //Color = "contrast",
                            //BorderWidth = 0,
                            //Shadow = false,
                            //Enabled = true,
                            //Style = new { FontSize = "8px" },
                            //ValueSuffix = "%",
                            //PointFormat = "{series.name}<br><span style:'font-size:12px; color:{point.color}; font-weight: bold;textalign:center;'>{point.y}</span>",
                            //LineCap = "round",
                            //StickyTracking = false,
                            //Rounded = true

                            DataLabels = new GaugeDatalableGenaric
                            {
                                Y = 5,
                                BorderWidth = 0,
                                UseHTML = true
                            },
                            Dial = new GaugeDialGenaric
                            {
                                Radius = "60%",
                                BackgroundColor = "black",
                                BorderWidth = 20,
                                BaseWidth = 12,
                                TopWidth = 1,
                                BaseLength = "1%",
                                RearLength = "0%"
                            },
                            Pivot = new GaugePivotGenaric
                            {
                                Radius = 10
                            },

                            //Color = "contrast",
                            //BorderWidth = 0,
                            //Shadow = false,
                            //Enabled = true,
                            //Style = new { FontSize = "8px" },
                            //ValueSuffix = "%",
                            //PointFormat = "{series.name}<br><span style:'font-size:12px; color:{point.color}; font-weight: bold;textalign:center;'>{point.y}</span>",
                            //LineCap = "round",
                            //StickyTracking = true,
                            //Rounded = true
                        }
                    },
                    YAxis = new SolidGaugeYAxisGenaric
                    {
                        Min = 0,
                        Max = 800,
                        //TickPositions = null,

                        //plotBands = new PlotbandGaugeYAxisGenaric
                        //{
                        //    color = new plotBandsColorGenaric
                        //    {
                        //        Stops = 
                        //    },
                        //    from = 0,
                        //    to = 8000,
                        //    innerRadius = "60%",
                        //    outerRadius = "95%"
                        //}
                        //  Stops = new object[] {
                        //  new object[]
                        //  {0.1, "#55BF3B" },
                        //},
                        //MinorTickLength = 0,
                        //lineWidth = 0,
                        //tickWidth= 0,
                        //minorTickInterval = null,
                        //tickAmount = 2,
                        //Title = new TitleGenaric 
                        //{
                        //    Text = "Solid Gauge Chart" 
                        //},

                        //Labels = new LabelsGenaric
                        //{
                        //    Distance = 0
                        //},
                    }
                };
                return ch;
            }

        }
        //stock chart start
        private async Task<StockSingleLineSeriesGenaric> GetStockSingleLineSeries(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var ch = GetStockSingleLineSeriesChart(widget);
            ch.series = getLineStockSeries(data, widget.Dimension.FirstOrDefault().Name, widget.Measure.First().Name);
            //new List<StockSeries> {
            // new StockSeries { 
            //     data =  GetStockSingleLineSeriesData(data,widget.Dimension.FirstOrDefault().Name,widget.Measure.FirstOrDefault().Name), 
            //     name = "AAPL" }
            //                 };
            //ch.XAxis = new XAxis { Categories = GetDimensionData(data, widget.Dimension.FirstOrDefault().Name), Title = null, Labels = new Labels() };
            //widget.Measure.ToList().ForEach(x => ch.Series.Add(new BarSeries() { Name = x.Name, Data = GetMeasureData(data, x.Name) }));

            return ch;
        }
        private StockSingleLineSeriesGenaric GetStockSingleLineSeriesChart(WidgetDto widget)
        {
            //if (!string.IsNullOrWhiteSpace(widget.PropertiesJson))
            //{
            //    return JsonConvert.DeserializeObject<StockSingleLineSeriesGenaric>(widget.PropertiesJson);
            //}

            var ch = new StockSingleLineSeriesGenaric
            {
                rangeSelector = new StockRangeSelector
                {
                    selected = 1
                },

                title = new stockTitle
                {
                    text = "AAPL Price"
                },

                series = new List<StockSeries>{
                       new StockSeries { name = "AAPL", tooltip = new stockTooltip {valueDecimals = Convert.ToDecimal(78.00) },
                data = new List<List<object>>{
                    new List<object> { 1579617000000, 79.14 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                    new List<object> { 1579703400000, 79.43 },
                }
                       },
            }
            };

            return ch;
        }
        private List<StockSeries> getLineStockSeries(DataTable data, string DimensionName, string Measures)
        {
            List<StockSeries> stockSeries = new List<StockSeries>();

            stockSeries.Add(
            new StockSeries()
            {
                name = Measures,
                data = GetStockSingleLineSeriesData(data, DimensionName, Measures),
                tooltip = new stockTooltip
                {
                    valueDecimals = Convert.ToDecimal(78.00)

                }
            });
            return stockSeries;
        }
        private List<List<object>> GetStockSingleLineSeriesData(DataTable table, string dimensionName, string Measures)
        {
            List<List<object>> data = new List<List<object>>();

            foreach (DataRow row in table.Rows)
            {
                var listObject = new List<object>();
                listObject.Add(ConvertToTimestamp(row.Field<DateTime>(dimensionName)));
                listObject.Add(row.Field<decimal>(Measures));
                data.Add(listObject);
            }
            return data;
        }
        private long ConvertToTimestamp(DateTime value)
        {
            long epoch = new DateTimeOffset(value).ToUnixTimeMilliseconds(); //(value.Ticks - 621355968000000000) / 10000000;
            return epoch;
        }
        //stock chart end
        private async Task<PieChartGenaric> GetPieChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var pichart = GetPieChart(widget);

            pichart.Series = new List<PieSeriesGenaric> {
        new PieSeriesGenaric {
          Name = widget.Dimension.FirstOrDefault().Name,
            ColorByPoint = true,
            Data = GetPieData(data, widget.Dimension.FirstOrDefault().Name, widget.Measure.FirstOrDefault().Name)
        }
      };

            return pichart;
        }
        private async Task<DonutChartGenaric> GetDonutChartData(WidgetDto widget)
        {
            string spQuery = widget.Query.Sql;
            var data = _dynamicGridRepository.getDynamicgrid(spQuery);
            var donutchart = GetDonutChart(widget);
            donutchart.series = new List<DonutSeriesGenaric> {
            new DonutSeriesGenaric {
            Name = widget.Dimension.FirstOrDefault().Name,
            InnerSize = "50%",
            ColorByPoint = true,
            Data = GetDonutData(data, widget.Dimension.FirstOrDefault().Name, widget.Measure.FirstOrDefault().Name)
        }
      };
            return donutchart;
        }
    }
}