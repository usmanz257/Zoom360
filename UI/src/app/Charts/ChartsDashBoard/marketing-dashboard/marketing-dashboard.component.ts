import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import * as Highcharts from 'highcharts';
import { PieChartWedgetComponent } from '../../ChartsWidgets/pie-chart-wedget/pie-chart-wedget.component';
import { StackChartWedgetComponent } from '../../ChartsWidgets/stack-chart-wedget/stack-chart-wedget.component';
import { AreaChartWedgetComponent } from '../../ChartsWidgets/area-chart-wedget/area-chart-wedget.component';
import { BarChartWedgetComponent } from '../../ChartsWidgets/bar-chart-wedget/bar-chart-wedget.component';
import { AreaChartSettingsModel, barChartSettingsModel,ColumnStackSettingsModel, LineChartSettingsModel, PieChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { Chartthemes } from '../../ChartsThemes/ChartsThemes';
import theme from 'highcharts/themes/dark-unica';
import { LineChartWedgetComponent } from '../../ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { HighChartColorScheme } from '../../ChartsThemes/HighChartsColors';
theme(Highcharts);
@Component({
  selector: 'app-marketing-dashboard',
  templateUrl: './marketing-dashboard.component.html',
  styleUrls: ['./marketing-dashboard.component.css']
})
export class MarketingDashboardComponent implements OnInit {
public test;
public fullscreentoggle=false;
public className;
public pieChartSetting:PieChartSettingsModel; 
public areaChartSetting:AreaChartSettingsModel;
public barChartSetting:barChartSettingsModel;
public stackChartSetting:ColumnStackSettingsModel;
public lineChartSetting:LineChartSettingsModel;
public theme =new Chartthemes();
public Colors= new HighChartColorScheme();
@ViewChild('pieChart',{static:true}) pieChart :PieChartWedgetComponent;
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
    Colors:this.Colors.ColorScheme2,
    GradientBGColor1:"#525961",
    GradientBGColor2:"#525961",
    LegendsEnabled:true,
    DataLabelEnabled:true,
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
this.areaChartSetting={
  Chartid:'areaChart5',
      ChartType:'area',
      MainTitle:"Area Chart",
      SubTitle:'',
      Colors:this.Colors.ColorSchemeM,
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
      MarginTop : "35"
};
this.barChartSetting={
  Chartid:'bar',
  ChartType:'bar',
  MainTitle:'Marketing Bar Chart',
  Colors:this.Colors.ColorSchemeM,
  GradientBGColor1:"#525961",
  GradientBGColor2:"#525961",
  LegendsEnabled:false,
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
  Colors:this.Colors.ColorDarkLucinda,
  GradientBGColor1:"#525961",
  GradientBGColor2:"#525961",
  LegendsEnabled:false,
  DataLabelEnabled:true,
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
  Colors:this.Colors.ColorDarkLucinda,
  GradientBGColor1:"#525961",
  GradientBGColor2:"#525961",
  LegendsEnabled:true,
  DataLabelEnabled:true,
  xAxisVisible:true,
  yAxisVisible:true,
  MarginLeft :"50",
  MarginBottom :"60",
  MarginRight :"10",
  MarginTop : "35",
  Marker:true
};
Highcharts.setOptions(this.theme.darkLucidaTheme);
 }

ngOnInit(): void {
    debugger;
       // this.columnChartPopulation();
        this.pieChart.chartSettings=this.pieChartSetting;
        this.areaChart.chartSettings=this.areaChartSetting;
        this.barChart.chartSettings=this.barChartSetting;
        this.stackChart.chartSettings = this.stackChartSetting;
        //this.lineChart.linePopulation(this.lineChartSetting);
      }
fullScreen(){
        this.fullscreentoggle=!this.fullscreentoggle;
        if(this.fullscreentoggle==true){
          this.MenuService.hideSideMenu=false;
          this.className='overlay col-sm-12';
          
        }
        else{
          this.MenuService.hideSideMenu=true;
          this.className='';
        }
        
        }
    //  formatXAxis() {
    //     return this.value; // clean, unformatted number for year
    // }

    //  formatYAxis() {
    //     return this.value / 1000 + 'k';
    // }

    //  columnChartPopulation() {
        // this.dashboardService.get("columnStack").subscribe(res => {
        //   console.log(res)
        //   debugger
        //   Highcharts.chart('columnstackedChart', res);
        // })
       
        // this.dashboardService.get("Pie").subscribe(res => {
        //   console.log(res)
        //   debugger
        //   Highcharts.chart('pieChart', res);
        // })
        
        // this.dashboardService.get("area").subscribe(res => {
        //   console.log(res)
        //   res.xAxis.labels.formatter = function(){
        //     return this.value;
        //     }
        //     res.yAxis.labels.formatter = function(){return this.value / 1000 + 'k'}
        //   debugger
        //   Highcharts.chart('AreaChart', res);
        // })

        // this.dashboardService.get("bar").subscribe(res => {
        //   console.log(res)
       
        //   Highcharts.chart('barChart', res);
        // })
     // }

}
