import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AreaChartSettingsModel, barChartSettingsModel, ColumnChartSettingsModel, ColumnStackSettingsModel, LineChartSettingsModel, PieChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import { Chartthemes } from '../../ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from '../../ChartsThemes/HighChartsColors';
import { AreaChartWedgetComponent } from '../../ChartsWidgets/area-chart-wedget/area-chart-wedget.component';
import { BarChartWedgetComponent } from '../../ChartsWidgets/bar-chart-wedget/bar-chart-wedget.component';
import { BasicColumnChartWidgetComponent } from '../../ChartsWidgets/basic-column-chart-widget/basic-column-chart-widget.component';
import { LineChartWedgetComponent } from '../../ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { PieChartWedgetComponent } from '../../ChartsWidgets/pie-chart-wedget/pie-chart-wedget.component';
import { StackChartWedgetComponent } from '../../ChartsWidgets/stack-chart-wedget/stack-chart-wedget.component';

@Component({
  selector: 'app-darktheme-dashboard',
  templateUrl: './darktheme-dashboard.component.html',
  styleUrls: ['./darktheme-dashboard.component.css']
})
export class DarkthemeDashboardComponent implements OnInit {
  public test;
  public fullscreentoggle=false;
  public className;
  public pieChartSetting:PieChartSettingsModel; 
  public basicColumnChartSetting2:ColumnChartSettingsModel;
  public areaChartSetting:AreaChartSettingsModel;
  public barChartSetting:barChartSettingsModel;
  public stackChartSetting:ColumnStackSettingsModel;
  public lineChartSetting:LineChartSettingsModel;
  public theme =new Chartthemes();
  public Colors= new HighChartColorScheme();
  @ViewChild('pieChart',{static:true}) pieChart :PieChartWedgetComponent;
  @ViewChild('basicColumnChart2',{static:true}) basicColumnChart2 :BasicColumnChartWidgetComponent;
  @ViewChild('areaChart',{static:true}) areaChart :AreaChartWedgetComponent;
  @ViewChild('barChart',{static:true}) barChart :BarChartWedgetComponent;
  @ViewChild('stackChart',{static:true}) stackChart :StackChartWedgetComponent;
  @ViewChild('lineChart',{static:true}) lineChart :LineChartWedgetComponent;
  constructor(private dashboardService: DashboardService,public MenuService: AppMenuService) {
    this.pieChartSetting={
      Chartid:'pieChart',
      ChartType:'pie',
      MainTitle:'Performance Pie Chart',
      SubTitle:"",
      Colors:this.Colors.ColorDarkD,
      GradientBGColor1:"#525961",
      GradientBGColor2:"#525961",
      LegendsEnabled:true,
      DataLabelEnabled:false,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
    this.basicColumnChartSetting2={
      Chartid:'basicColumnChart2',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorDarkD,
      GradientBGColor1:"#525961",
      GradientBGColor2:"#525961",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
 
    };
  this.areaChartSetting={
    Chartid:'areaChart5',
        ChartType:'area',
        MainTitle:"Area Chart",
        SubTitle:'',
        Colors:this.Colors.ColorDarkD,
        GradientBGColor1:"#525961",
        GradientBGColor2:"#525961",
        LegendsEnabled:false,
        DataLabelEnabled:true,
        xAxisVisible:true,
        yAxisVisible:true,
        XAxisallowDecimals:true,
        MarginLeft :null,
        MarginBottom :null,
        MarginRight :"10",
        MarginTop : "35",
  };
  this.barChartSetting={
    Chartid:'bar',
    ChartType:'bar',
    MainTitle:'Marketing Bar Chart',
    Colors:this.Colors.ColorDarkD,
    GradientBGColor1:"#525961",
    GradientBGColor2:"#525961",
    LegendsEnabled:true,
    DataLabelEnabled:true,
    xAxisVisible:true,
    yAxisVisible:true,
    MarginLeft :null,
    MarginBottom :"45",
    MarginRight :"10",
    MarginTop : "35",
    DatalableStroke:"#E0E0E3",
    DatalableStrokeWidth:0,
    Datalabelscolor:"#E0E0E3",
    DatalabelfontWeight:"bold"
  };
  this.stackChartSetting={
    Chartid:'columnStack',
    ChartType:'columnStack',
    MainTitle:'Marketing Stack Chart',
    Colors:this.Colors.ColorDarkD,
    GradientBGColor1:"#525961",
    GradientBGColor2:"#525961",
    LegendsEnabled:false,
    DataLabelEnabled:false,
    xAxisVisible:true,
    yAxisVisible:true,
    MarginLeft :"50",
    MarginBottom :"60",
    MarginRight :"10",
    MarginTop : "35",
    DatalableStroke:"#E0E0E3",
    DatalableStrokeWidth:0,
    Datalabelscolor:"#E0E0E3",
    DatalabelfontWeight:"bold",
    LegendsBackgroundColor:"#282828",
    StackDatalabelscolorTop:"#E0E0E3"
  };
  this.lineChartSetting={
    Chartid:'line',
    ChartType:'Line',
    MainTitle:'Marketing Line Chart',
    Colors:this.Colors.ColorDarkD,
    GradientBGColor1:"#525961",
    GradientBGColor2:"#525961",
    LegendsEnabled:true,
    DataLabelEnabled:true,
    xAxisVisible:true,
    yAxisVisible:true,
    Marker:true,
    MarginLeft :"50",
    MarginBottom :"60",
    MarginRight :"10",
    MarginTop : "35",
  };
  Highcharts.setOptions(this.theme.darkLucidaTheme);
   }

  ngOnInit() {
    this.pieChart.chartSettings=this.pieChartSetting;
    this.basicColumnChart2.chartSettings=this.basicColumnChartSetting2;
    this.areaChart.chartSettings=this.areaChartSetting;
    this.barChart.chartSettings=this.barChartSetting;
    this.stackChart.chartSettings = this.stackChartSetting;
  }

}

