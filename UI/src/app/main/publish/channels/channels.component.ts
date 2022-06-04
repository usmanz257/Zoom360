import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import * as Highcharts from 'highcharts';
import { AreaChartSettingsModel, barChartSettingsModel, ColumnChartSettingsModel, ColumnStackSettingsModel, LineChartSettingsModel, PieChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { PieChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/pie-chart-wedget/pie-chart-wedget.component';
import { BarChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/bar-chart-wedget/bar-chart-wedget.component';
import { StackChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/stack-chart-wedget/stack-chart-wedget.component';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { BasicColumnChartWidgetComponent } from 'src/app/Charts/ChartsWidgets/basic-column-chart-widget/basic-column-chart-widget.component';
import { AreaChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/area-chart-wedget/area-chart-wedget.component';
// import theme from 'highcharts/themes/dark-unica';
// theme(Highcharts);


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
  public test:object;
  cate : any[] = [];
  imp:any[] = [];
  clicks: any[] = [];
  ctr: any[] = [];

  sscate : any[] = [];
  ssimp:any[] = [];
  ssclicks: any[] = [];
  ssctr: any[] = [];
  mscate : any[] = [];
  msimp:any[] = [];
  msclicks: any[] = [];
  msctr: any[] = [];
//BarChart
  public barChartSetting:barChartSettingsModel;
  public barChart2Setting:barChartSettingsModel;
  public barChart3Setting:barChartSettingsModel;
  // public barChart4Setting:barChartSettingsModel;
  // public barChart5Setting:barChartSettingsModel;
  //Basic Column Chart
  public basicColumnChartSetting2:ColumnChartSettingsModel;
  public basicColumnChartSetting3:ColumnChartSettingsModel;
  public basicColumnChartSetting4:ColumnChartSettingsModel;
  public basicColumnChartSetting5:ColumnChartSettingsModel;
  public basicColumnChartSetting6:ColumnChartSettingsModel;
  public basicColumnChartSetting7:ColumnChartSettingsModel;
  public basicColumnChartSetting8:ColumnChartSettingsModel;
//Stack Chart
  public stackChartSetting:ColumnStackSettingsModel;
  public stackChart2Setting:ColumnStackSettingsModel;
  public stackChart3Setting:ColumnStackSettingsModel;
  public stackChart4Setting:ColumnStackSettingsModel;
  public stackChart5Setting:ColumnStackSettingsModel;
//Line Chart
  public lineChartSetting:LineChartSettingsModel;
  public lineChart2Setting:LineChartSettingsModel;
  public lineChart3Setting:LineChartSettingsModel;
  public lineChart4Setting:LineChartSettingsModel;
  public lineChart5Setting:LineChartSettingsModel;
 //areaChart
 public areaChartSetting1:AreaChartSettingsModel;
  public areaChartSetting2:AreaChartSettingsModel;
  public areaChartSetting3:AreaChartSettingsModel;
  public areaChartSetting4:AreaChartSettingsModel;
  public areaChartSetting5:AreaChartSettingsModel;
  //pie Chart
  public pieChartSetting:PieChartSettingsModel;  
  public pieChart2Setting:PieChartSettingsModel;  
  public pieChart3Setting:PieChartSettingsModel;  
  public pieChart4Setting:PieChartSettingsModel;  
  public pieChart5Setting:PieChartSettingsModel;  
 
  //BarChart
  @ViewChild('barChart',{static:true}) barChart :BarChartWedgetComponent;
  @ViewChild('barChart2',{static:true}) barChart2 :BarChartWedgetComponent;
  @ViewChild('barChart3',{static:true}) barChart3 :BarChartWedgetComponent;
  // @ViewChild('barChart4',{static:true}) barChart4 :BarChartWedgetComponent;
  // @ViewChild('barChart5',{static:true}) barChart5 :BarChartWedgetComponent;
  //Basic Column Chart
  @ViewChild('basicColumnChart2',{static:true}) basicColumnChart2 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart3',{static:true}) basicColumnChart3 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart4',{static:true}) basicColumnChart4 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart5',{static:true}) basicColumnChart5 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart6',{static:true}) basicColumnChart6 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart7',{static:true}) basicColumnChart7 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart8',{static:true}) basicColumnChart8 :BasicColumnChartWidgetComponent;
 //Stack Chart
  @ViewChild('stackChart',{static:true}) stackChart :StackChartWedgetComponent;
  @ViewChild('stackChart2',{static:true}) stackChart2 :StackChartWedgetComponent;
  @ViewChild('stackChart3',{static:true}) stackChart3 :StackChartWedgetComponent;
  @ViewChild('stackChart4',{static:true}) stackChart4 :StackChartWedgetComponent;
  @ViewChild('stackChart5',{static:true}) stackChart5 :StackChartWedgetComponent;
//Line Chart
@ViewChild('lineChart',{static:true}) lineChart :LineChartWedgetComponent;
@ViewChild('lineChart2',{static:true}) lineChart2 :LineChartWedgetComponent;
@ViewChild('lineChart3',{static:true}) lineChart3 :LineChartWedgetComponent;
@ViewChild('lineChart4',{static:true}) lineChart4 :LineChartWedgetComponent;
@ViewChild('lineChart5',{static:true}) lineChart5 :LineChartWedgetComponent;
//AreaChart
@ViewChild('areaChart1',{static:true}) areaChart1 :AreaChartWedgetComponent;
  @ViewChild('areaChart2',{static:true}) areaChart2 :AreaChartWedgetComponent;
  @ViewChild('areaChart3',{static:true}) areaChart3 :AreaChartWedgetComponent;
  @ViewChild('areaChart4',{static:true}) areaChart4 :AreaChartWedgetComponent;
  @ViewChild('areaChart5',{static:true}) areaChart5 :AreaChartWedgetComponent;
 //Pie Chart
 @ViewChild('pieChart',{static:true}) pieChart:PieChartWedgetComponent;
 @ViewChild('pieChart2',{static:true}) pieChart2:PieChartWedgetComponent;
 @ViewChild('pieChart3',{static:true}) pieChart3:PieChartWedgetComponent;
 @ViewChild('pieChart4',{static:true}) pieChart4:PieChartWedgetComponent;
 @ViewChild('pieChart5',{static:true}) pieChart5:PieChartWedgetComponent;
  constructor(private dashboardService: DashboardService ) 
  {
    //BarChart
    this.barChartSetting={
      Chartid:'barChart',
      ChartType:'bar',
      MainTitle:'',
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
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
    this.barChart2Setting={
      Chartid:'barChart2',
      ChartType:'bar',
      MainTitle:'',
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
    this.barChart3Setting={
      Chartid:'barChart3',
      ChartType:'bar',
      MainTitle:'Clicks',
      Colors:this.Colors.ColorSchemeM,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
    // this.barChart4Setting={
    //   Chartid:'barChart4',
    //   ChartType:'bar',
    //   MainTitle:'',
    //   Colors:this.Colors.ColorSchemeDefault,
    //   GradientBGColor1:"#fff",
    //   GradientBGColor2:"#fff",
    //   LegendsEnabled:false,
    //   DataLabelEnabled:false,
    //   xAxisVisible:false,
    //   yAxisVisible:false,
    //   MarginLeft :"0",
    //   MarginBottom :"0",
    //   MarginRight :"0",
    //   MarginTop : "0",
    // };
    // this.barChart5Setting={
    //   Chartid:'barChart5',
    //   ChartType:'bar',
    //   MainTitle:'',
    //   Colors:this.Colors.ColorDarkLucinda,
    //   GradientBGColor1:"#fff",
    //   GradientBGColor2:"#fff",
    //   LegendsEnabled:false,
    //   DataLabelEnabled:false,
    //   xAxisVisible:false,
    //   yAxisVisible:false,
    //   MarginLeft :"0",
    //   MarginBottom :"0",
    //   MarginRight :"0",
    //   MarginTop : "0",
    // };
    //Basic Column Chart
     this.basicColumnChartSetting2={
      Chartid:'basicColumnChart2',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      Colors:this.Colors.ColorScheme2,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      XAxisallowDecimals:false,
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0"
    };
    this.basicColumnChartSetting3={
      Chartid:'basicColumnChart3',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "35",
    };
    this.basicColumnChartSetting4={
      Chartid:'basicColumnChart4',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorSchemeM,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
    };
    this.basicColumnChartSetting5={
      Chartid:'basicColumnChart5',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
 
    };
    this.basicColumnChartSetting6={
      Chartid:'basicColumnChart6',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:true,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
 
    };
    this.basicColumnChartSetting7={
      Chartid:'basicColumnChart7',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
 
    };
    this.basicColumnChartSetting8={
      Chartid:'basicColumnChart8',
      ChartType:'column',
      MainTitle:'',
      SubTitle:'',
      XAxisallowDecimals:false,
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
 
    };
    //StackChart
    this.stackChartSetting={
      Chartid:'columnStack',
      ChartType:'columnStack',
      MainTitle:'',
      Colors:this.Colors.ColorSchemeM,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:true,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :"35",
      MarginRight :"10",
      MarginTop : "35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold",
      LegendsBackgroundColor:"#282828",
      StackDatalabelscolorTop:"#E0E0E3"
    };
    this.stackChart2Setting={
      Chartid:'columnStack2',
      ChartType:'columnStack',
      MainTitle:'',
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold",
      LegendsBackgroundColor:"#282828",
      StackDatalabelscolorTop:"#E0E0E3"
    };
    this.stackChart3Setting={
      Chartid:'columnStack3',
      ChartType:'columnStack',
      MainTitle:'',
      Colors:this.Colors.ColorScheme2,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#666666",
      DatalabelfontWeight:"bold",
      LegendsBackgroundColor:"#282828",
      StackDatalabelscolorTop:"#666666"
    };
    this.stackChart4Setting={
      Chartid:'columnStack4',
      ChartType:'columnStack',
      MainTitle:'',
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#666666",
      DatalabelfontWeight:"bold",
      LegendsBackgroundColor:"#282828",
      StackDatalabelscolorTop:"#666666"
    };
    this.stackChart5Setting={
      Chartid:'columnStack5',
      ChartType:'columnStack',
      MainTitle:'',
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#666666",
      DatalabelfontWeight:"bold",
      LegendsBackgroundColor:"#282828",
      StackDatalabelscolorTop:"#666666"
    };
    //Line Chart
    this.lineChartSetting={
      Chartid:'line',
      ChartType:'Line',
      MainTitle:' ',
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      Marker:true,
      MarginBottom :"60",
      MarginRight :"10",
      MarginTop : "35",
    };
    this.lineChart2Setting={
      Chartid:'line2',
      ChartType:'Line',
      MainTitle:'',
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      Marker:true,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"0",
    };
    this.lineChart3Setting={
      Chartid:'line3',
      ChartType:'Line',
      MainTitle:' ',
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      Marker:true,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"35",
    };
    this.lineChart4Setting={
      Chartid:'line4',
      ChartType:'Line',
      MainTitle:' ',
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      Marker:true,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"0",
    };
    this.lineChart5Setting={
      Chartid:'line5',
      ChartType:'Line',
      MainTitle:' ',
      Colors:this.Colors.ColorScheme2,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      Marker:true,
      MarginLeft:"0",
      MarginBottom:"0",
      MarginRight:"0",
      MarginTop:"0",
    };
    //Area Chart
    this.areaChartSetting1={
      Chartid:'areaChart1',
      ChartType:'area',
      MainTitle:'',
      SubTitle:'',
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      XAxisallowDecimals:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
    };
    this.areaChartSetting2={
      Chartid:'areaChart2',
      ChartType:'area',
      MainTitle:'AreaChart',
      SubTitle:'',
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      XAxisallowDecimals:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
    };
    this.areaChartSetting3={
      Chartid:'areaChart3',
      ChartType:'area',
      MainTitle:'',
      SubTitle:'',
      Colors:this.Colors.ColorScheme2,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      XAxisallowDecimals:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
    };
    this.areaChartSetting4={
      Chartid:'areaChart4',
      ChartType:'area',
      MainTitle:'',
      SubTitle:'',
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      XAxisallowDecimals:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
    };
    this.areaChartSetting5={
      Chartid:'areaChart5',
      ChartType:'area',
      MainTitle:"",
      SubTitle:'',
      Colors:this.Colors.ColorSchemeM,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:true,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      XAxisallowDecimals:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
    };

// Pie Chart
this.pieChartSetting={
      Chartid:'pieChart',
      ChartType:'pie',
      MainTitle:'',
      SubTitle:"",
      Colors:this.Colors.ColorSchemeM,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:true,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"10",
      MarginTop : "35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"

    };
    this.pieChart2Setting={
      Chartid:'pieChart2',
      ChartType:'pie',
      MainTitle:'',
      SubTitle:"",
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
    this.pieChart3Setting={
      Chartid:'pieChart3',
      ChartType:'pie',
      MainTitle:'',
      SubTitle:"",
      Colors:this.Colors.ColorScheme2,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
    this.pieChart4Setting={
      Chartid:'pieChart4',
      ChartType:'pie',
      MainTitle:'',
      SubTitle:"",
      Colors:this.Colors.ColorSchemeDefault,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
    this.pieChart5Setting={
      Chartid:'pieChart5',
      ChartType:'pie',
      MainTitle:'',
      SubTitle:"",
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:false,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :"0",
      MarginBottom :"0",
      MarginRight :"0",
      MarginTop : "0",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold"
    };
//   this.test= Highcharts.setOptions(Highcharts.getOptions());
//     // Apply the theme
//  console.log(this.test);
// debugger
 //this.test = Highcharts.defaultOptions;
Highcharts.setOptions(this.theme.defaulttheme);
 }
  ngOnInit(): void {
   // this.pieChart2.pieChartPopulation(this.pieChart2Setting);
   //this.pieChart.pieChartPopulation(this.pieChartSetting);
    //Area Charts
    
    this.barChart.chartSettings=this.barChartSetting;
    this.barChart2.chartSettings=this.barChart2Setting;
    this.barChart3.chartSettings=this.barChart3Setting;
    // this.barChart4.chartSettings=this.barChart4Setting;
    // this.barChart5.chartSettings=this.barChart5Setting;
    //Basic Column Chart
    this.basicColumnChart2.chartSettings=this.basicColumnChartSetting2;
    this.basicColumnChart3.chartSettings=this.basicColumnChartSetting3;
    this.basicColumnChart4.chartSettings=this.basicColumnChartSetting4;
    this.basicColumnChart5.chartSettings=this.basicColumnChartSetting5;
    this.basicColumnChart6.chartSettings=this.basicColumnChartSetting6;
    this.basicColumnChart7.chartSettings=this.basicColumnChartSetting7;
    this.basicColumnChart8.chartSettings=this.basicColumnChartSetting8;
    //Stack Charts
    this.stackChart.chartSettings=this.stackChartSetting;
    this.stackChart2.chartSettings=this.stackChart2Setting;
    this.stackChart3.chartSettings=this.stackChart3Setting;
    this.stackChart4.chartSettings=this.stackChart4Setting;
    this.stackChart5.chartSettings=this.stackChart5Setting;
    //LineChart
    this.lineChart.chartSettings=this.lineChartSetting;
    this.lineChart2.chartSettings=this.lineChart2Setting;
    this.lineChart3.chartSettings=this.lineChart3Setting;
    this.lineChart4.chartSettings=this.lineChart4Setting;
    this.lineChart5.chartSettings=this.lineChart5Setting;
    //areaChart
    this.areaChart1.chartSettings=this.areaChartSetting1;
    this.areaChart2.chartSettings=this.areaChartSetting2;
    this.areaChart3.chartSettings=this.areaChartSetting3;
    this.areaChart4.chartSettings=this.areaChartSetting4;
    this.areaChart5.chartSettings=this.areaChartSetting5;
   //Pie Chart
   this.pieChart.chartSettings=this.pieChartSetting;
   this.pieChart2.chartSettings=this.pieChart2Setting;
   this.pieChart3.chartSettings=this.pieChart3Setting;
   this.pieChart4.chartSettings=this.pieChart4Setting;
   this.pieChart5.chartSettings=this.pieChart5Setting;
  }
   data = {
    chart: {
      // caption:"",
      // subcaption: "China (2012-15)",
      // yaxisname: "Units Sold",
      // syaxisname: "Share of market",
      snumbersuffix: "k",
      drawcustomlegendicon: "0",
      showvalues: "0",
      rotatelabels: "1",
      theme: "fusion"
    },
    categories: [
        
      {
        category: this.cate
      }
    ],
    dataset: [
      {
        seriesname: "Impressions",
        data:this.imp
      },
      {
        seriesname: "Clicks",
        data: this.clicks
      },

      {
        seriesname: "CTR(%)",
        renderas: "line",
        parentyaxis: "S",
        data: this.ctr
      }
    ]
  };
  ssdata = {
    chart: {
      // caption:"",
      // subcaption: "China (2012-15)",
      // yaxisname: "Units Sold",
      // syaxisname: "Share of market",
      snumbersuffix: "k",
      drawcustomlegendicon: "0",
      showvalues: "0",
      rotatelabels: "1",
      theme: "fusion"
    },
    categories: [
      
        
      {
        category: this.sscate
      }
    ],
    dataset: [
      {
        seriesname: "Impressions",
        data:this.ssimp
      },
      {
        seriesname: "Clicks",
        data: this.ssclicks
      },
      {
        seriesname: "CTR(%)",
        renderas: "line",
        parentyaxis: "S",
        data: this.ssctr
      }
    ]
  };

  msdata = {
    chart: {
      // caption:"",
      // subcaption: "China (2012-15)",
      // yaxisname: "Units Sold",
      // syaxisname: "Share of market",
      snumbersuffix: "k",
      drawcustomlegendicon: "0",
      showvalues: "0",
      rotatelabels: "1",
      theme: "fusion"
    },
    categories: [
      
        
      {
        category: this.mscate
      }
    ],
    dataset: [
      {
        seriesname: "Impressions",
        data:this.msimp
      },
      {
        seriesname: "Clicks",
        data: this.msclicks
      },
      {
        seriesname: "CTR(%)",
        renderAs: "line",
        parentyaxis: "S",
        data: this.msctr
      }
    ]
  };
  clickdata={

    chart: {
      palettecolors:"#29C3BE",
      showlables: "0",
      showvalues: "0",
      showYAxisvalue:"0",
      theme: "fusion"
    },
    data: this.clicks
  }
  ssclickdata={

    chart: {
      palettecolors:"#29C3BE",
      showlables: "0",
      showvalues: "0",
      showYAxisvalue:"0",
      theme: "fusion"
    },
    data: this.ssclicks
  }

  msclickdata={

    chart: {
      palettecolors:"#29C3BE",
      showlables: "0",
      showvalues: "0",
      showYAxisvalue:"0",
      theme: "fusion"
    },
    data: this.msclicks
  }
  width= 100+'%';
  height = 250;
  // type = "msline";
  type = "mscombidy2d";
  dataFormat = "json";
  dataSource = this.data;
  ssdataSource = this.ssdata;
  msdataSource = this.msdata;
  ClicksdataSource = this.clickdata
  ssClicksdataSource = this.ssclickdata
  msClicksdataSource = this.msclickdata


}
