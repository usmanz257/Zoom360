import { Component, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import { AreaChartSettingsModel} from 'src/app/models/Charts/ChartSettingsModel';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import { Chartthemes } from '../../ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from '../../ChartsThemes/HighChartsColors';
import { AreaChartWedgetComponent } from '../../ChartsWidgets/area-chart-wedget/area-chart-wedget.component';

@Component({
  selector: 'app-chart-select-list',
  templateUrl: './chart-select-list.component.html',
  styleUrls: ['./chart-select-list.component.css']
})
export class ChartSelectListComponent implements OnInit {
  public chart: Chart;
  public chartOptions: Highcharts.Options;
  Highcharts: typeof Highcharts = Highcharts;

  public theme =new Chartthemes();
  public areaChartSetting:AreaChartSettingsModel;
  public Colors= new HighChartColorScheme();
  // @ViewChild('areaChart1',{static:true}) areaChart1 :AreaChartWedgetComponent;

  // ChartList: Array<SelectchatrlistModel> = [];
  chartList = [{ChartTitle:"Social Sites States stacked Column",ChartDescription:"Avg. Lead Score = Sum of Individual lead scores over a given period of time (day, week, month, etc.) / Total number of days in that period",
  Chart:{
    "colors": [
        "#FC766AFF",
        "#5B84B1FF",
        "#5F4B8BFF",
        "#E69A8DFF",
        "#42EADDFF",
        "#CDB599FF",
        "#606060FF",
        "#D6ED17FF",
        "#E94B3CFF",
        "#76528BFF"
    ],
    "chart": {
        "type": "column",
        "marginLeft": null,
        "marginBottom": null,
        "marginRight": null,
        "marginTop": null,
        "renderTo": null,
        "backgroundColor": null,
        "style": {
            "fontFamily": "Open Sans"
        },
        "options3d": null
    },
    "credits": {
        "enabled": false
    },
    "title": {
        "align": "center",
        "text": null,
        "floating": false,
        "style": {
            "fontSize": "18px",
            "color": "#515961",
            "fontWeight": null,
            "fontFamily": "Open Sans"
        }
    },
    "subtitle": {
        "text": ""
    },
    "xAxis": {
        "categories": [
            "Ad set(Ladies + Kids)",
            "Ads set(Gents)",
            "Ads set(Kids + Gents)",
            "Ads set(Kids)",
            "Ads set(Ladies + Kids + Gents)"
        ],
        "crosshair": true,
        "visible": false,
        "title": null,
        "labels": {
            "overflow": null,
            "enabled": false
        }
    },
    "yAxis": {
        "gridLineColor": "#e6e6e6",
        "visible": true,
        "min": 1000,
        "max": null,
        "title": {
            "align": null,
            "text": null,
            "floating": false
        },
        "labels": {
            "overflow": null,
            "enabled": true,
            "style": null
        },
        "stackLabels": null
    },
    "tooltip": {
        "enabled": false,
        "headerFormat": "<span>{point.key}</span><br>",
        "pointFormat": "<tr><td>{series.name}: </td><td><b>{point.y:.1f} mm    </b><br></td></tr>",
        "footerFormat": "",
        "clusterFormat": null,
        "shared": true,
        "useHTML": true,
        "valueSuffix": null,
        "backgroundColor": "white",
        "style": {
            "color": null
        }
    },
    "legend": {
        "enabled": false
    },
    "plotOptions": {
        "column": {
            "pointPadding": 0.2,
            "borderWidth": 0,
            "depth": 0,
            "stacking": null,
            "dataLabels": {
                "enabled": null,
                "style": null
            }
        }
    },
    "series": [
        {
            "name": "IMPRESSIONS",
            "data": [
                6560,
                7843,
                5859,
                6560,
                6560
            ]
        },
        {
            "name": "CLICKS",
            "data": [
                6034,
                7308,
                5297,
                6034,
                6034
            ]
        },
        {
            "name": "CTR",
            "data": [
                8459,
                9732,
                -7775,
                8444,
                8444
            ]
        }
    ]
}
  },
  {ChartTitle:"Area Chart",ChartDescription:"Avg. Lead Score = Sum of Individual lead scores over a given period of time (day, week, month, etc.) / Total number of days in that period",
  Chart:{
    "colors": [
        "#ec6a2d",
        "#EEDA2A",
        "#CE2CF3",
        "#A22C2C",
        "#1C6666",
        "#2b908f",
        "#92A8CD",
        "#A47D7C",
        "#B5CA92"
    ],
    "chart": {
        "type": "area",
        "marginLeft": null,
        "marginBottom": null,
        "marginRight": null,
        "marginTop": null,
        "spacingTop": null,
        "spacingRight": null,
        "spacingBottom": null,
        "spacingLeft": null,
        "margin": null,
        "plotBackgroundImage": null,
        "plotBorderWidth": null,
        "backgroundColor": null
    },
    "accessibility": {
        "description": "Image"
    },
    "title": {
        "align": "center",
        "text": null,
        "floating": false,
        "style": {
            "font": null,
            "color": "#515961",
            "floating": false,
            "fontSize": "18px",
            "fontWeight": null,
            "fontFamily": "Open Sans"
        }
    },
    "subtitle": {
        "text": null
    },
    "xAxis": {
        "categories": [],
        "allowDecimals": true,
        "visible": false,
        "labels": {
            "overflow": null,
            "enabled": true,
            "formatter": "",
            "style": {
                "color": "#515961"
            },
            "accessibility": {}
        },
        "accessibility": null
    },
    "yAxis": {
        "visible": true,
        "gridLineColor": "#e6e6e6",
        "title": {
            "align": null,
            "text": null,
            "floating": false,
            "enabled": false
        },
        "labels": {
            "overflow": null,
            "enabled": true,
            "formatter": "",
            "style": {
                "color": "#515961"
            }
        }
    },
    "tooltip": {
        "enabled": false,
        "headerFormat": "{series.name}: ",
        "pointFormat": "<b>{point.y:,.0f}</b>",
        "footerFormat": null,
        "backgroundColor": "white",
        "style": {
            "color": "#515961"
        }
    },
    "plotOptions": {
        "area": {
            "size": null,
            "stickyTracking": false,
            "lineWidth": 0,
            "marker": {
                "enabled": false,
                "symbol": "circle",
                "radius": 2,
                "states": {
                    "enabled": false,
                    "hover": {
                        "enabled": true
                    }
                }
            },
            "pointStart": 0
        },
        "series": null
    },
    "legend": {
        "backgroundColor": "white",
        "enabled": false,
        "style": null
    },
    "credits": {
        "enabled": false
    },
    "series": [
        {
            "name": "IMPRESSIONS",
            "data": [
                6560,
                7843,
                5859,
                6560,
                6560
            ]
        },
        {
            "name": "CLICKS",
            "data": [
                6034,
                7308,
                5297,
                6034,
                6034
            ]
        },
        {
            "name": "CTR",
            "data": [
                8459,
                9732,
                -7775,
                8444,
                8444
            ]
        }
    ]
  }},
{
  ChartTitle:"Pie Chart",ChartDescription:"Avg. Lead Score = Sum of Individual lead scores over a given period of time (day, week, month, etc.) / Total number of days in that period",
Chart:{
  "chart": {
      "type": "pie",
      "marginLeft": null,
      "marginBottom": null,
      "marginRight": null,
      "marginTop": null,
      "plotBackgroundImage": null,
      "plotBorderWidth": null,
      "plotShadow": false,
      "backgroundColor": null,
      "style": {
          "fontFamily": "Open Sans"
      }
  },
  "title": {
      "align": "center",
      "text": null,
      "floating": false,
      "style": {
          "fontSize": "18px",
          "color": "#515961",
          "fontWeight": null,
          "fontFamily": "Open Sans"
      }
  },
  "tooltip": {
      "enabled": false,
      "pointFormat": "{series.name}: <b>{point.percentage:.1f}</b>",
      "backgroundColor": "white",
      "style": {
          "color": null
      }
  },
  "credits": {
      "enabled": false
  },
  "legend": {
      "enabled": false
  },
  "accessibility": {
      "point": {
          "valueSuffix": "%"
      }
  },
  "plotOptions": {
      "pie": {
          "allowPointSelect": true,
          "cursor": "pointer",
          "color": null,
          "colors": [
              "#4572A7",
              "#AA4643",
              "#89A54E",
              "#80699B",
              "#3D96AE",
              "#DB843D",
              "#92A8CD",
              "#A47D7C",
              "#B5CA92"
          ],
          "dataLabels": {
              "enabled": true,
              "color": "#515961",
              "format": "<b>{point.name}</b>:{point.percentage:.1f} %",
              "shadow": false,
              "datalableStrokeWidth": 0,
              "datalableStroke": "#E0E0E3",
              "style": {
                  "color": "#E0E0E3",
                  "textOutline": "transparent",
                  "datalableStrokeWidth": 0,
                  "datalableStroke": "#E0E0E3",
                  "fontFamily": "sans-serif"
              }
          }
      }
  },
  "series": [
      {
          "name": "PLATFORM",
          "innerSize": null,
          "colorByPoint": true,
          "data": [
              {
                  "name": "Ad set(Ladies + Kids)",
                  "y": 6560,
                  "sliced": false,
                  "selected": false
              },
              {
                  "name": "Ads set(Gents)",
                  "y": 7843,
                  "sliced": true,
                  "selected": true
              },
              {
                  "name": "Ads set(Kids + Gents)",
                  "y": 5859,
                  "sliced": false,
                  "selected": false
              },
              {
                  "name": "Ads set(Kids)",
                  "y": 6560,
                  "sliced": false,
                  "selected": false
              },
              {
                  "name": "Ads set(Ladies + Kids + Gents)",
                  "y": 6560,
                  "sliced": false,
                  "selected": false
              }
          ]
      }
  ]
}
},
{
  ChartTitle:"Line Chart",ChartDescription:"Avg. Lead Score = Sum of Individual lead scores over a given period of time (day, week, month, etc.) / Total number of days in that period",
  Chart:{
    "colors": [
        "#4572A7",
        "#AA4643",
        "#89A54E",
        "#80699B",
        "#3D96AE",
        "#DB843D",
        "#92A8CD",
        "#A47D7C",
        "#B5CA92"
    ],
    "chart": {
        "type": "line",
        "backgroundColor": null,
        "marginLeft": null,
        "marginBottom": null,
        "marginRight": null,
        "marginTop": null,
        "spacingTop": null,
        "spacingRight": null,
        "spacingBottom": null,
        "spacingLeft": null,
        "style": {
            "fontFamily": "Open Sans"
        }
    },
    "title": {
        "align": "center",
        "text": null,
        "floating": false,
        "style": {
            "fontSize": "18px",
            "color": "#515961",
            "fontWeight": null,
            "fontFamily": "Open Sans"
        }
    },
    "subtitle": {
        "text": ""
    },
    "xAxis": {
        "visible": true,
        "labels": {
            "enabled": false
        },
        "accessibility": {
            "rangeDescription": "Range: 2010 to 2017"
        }
    },
    "yAxis": {
        "gridLineColor": "#e6e6e6",
        "visible": true,
        "gridLineWidth": 1,
        "minorGridLineWidth": 1,
        "tickPositions": null,
        "title": {
            "align": null,
            "text": null,
            "floating": false
        },
        "labels": {
            "enabled": true,
            "style": {
                "color": "#000"
            }
        }
    },
    "tooltip": {
        "enabled": false,
        "headerFormat": "",
        "pointFormat": "{series.name}: {point.y}",
        "footerFormat": null,
        "backgroundColor": "#fff",
        "style": {
            "color": "#000"
        }
    },
    "plotOptions": {
        "series": null
    },
    "legend": {
        "layout": "vertical",
        "align": "center",
        "verticalAlign": "middle",
        "floating": false,
        "enabled": false
    },
    "credits": {
        "enabled": false
    },
    "series": [
        {
            "name": "IMPRESSIONS",
            "data": [
                6560,
                7843,
                5859,
                6560,
                6560
            ]
        },
        {
            "name": "CLICKS",
            "data": [
                6034,
                7308,
                5297,
                6034,
                6034
            ]
        },
        {
            "name": "CTR",
            "data": [
                8459,
                9732,
                -7775,
                8444,
                8444
            ]
        }
    ]
}
}]
  constructor(private dashboardService: DashboardService,public MenuService: AppMenuService) {
    // this.areaChartSetting={
    //   Chartid:'areaChart1',
    //       ChartType:'area',
    //       MainTitle:"Area Chart",
    //       SubTitle:'',
    //       Colors:this.Colors.ColorScheme2,
    //       GradientBGColor1:"#fff",
    //       GradientBGColor2:"#fff",
    //       LegendsEnabled:false,
    //       DataLabelEnabled:true,
    //       xAxisVisible:true,
    //       yAxisVisible:true,
    //       XAxisallowDecimals:true,
    //       MarginLeft :null,
    //       MarginBottom :null,
    //       MarginRight :"10",
    //       MarginTop : "35",
    // };
    Highcharts.setOptions(this.theme.defaulttheme);
   
   }

  ngOnInit() {

   // this.areaChart1.chartSettings=this.areaChartSetting;
    // let customObj = new SelectchatrlistModel();
    // customObj.ChartTitle = "Area chart";
    // customObj.Discription = "something";
    // this.ChartList.push(customObj);
    
  }

}
