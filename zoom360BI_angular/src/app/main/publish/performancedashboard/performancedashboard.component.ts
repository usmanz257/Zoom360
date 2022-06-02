import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import * as Highcharts from 'highcharts';
import { PieChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/pie-chart-wedget/pie-chart-wedget.component';
import { AreaChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/area-chart-wedget/area-chart-wedget.component';
import { BarChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/bar-chart-wedget/bar-chart-wedget.component';
import { StackChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/stack-chart-wedget/stack-chart-wedget.component';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import theme from 'highcharts/themes/gray';
import { AreaChartSettingsModel, barChartSettingsModel, ColumnStackSettingsModel, PieChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
theme(Highcharts);
@Component({
  selector: 'app-performancedashboard',
  templateUrl: './performancedashboard.component.html',
  styleUrls: ['./performancedashboard.component.css']
})
export class PerformancedashboardComponent implements OnInit {
  public theme=new Chartthemes();
  public Colors= new HighChartColorScheme();
  public test;
  public pieChartSetting:PieChartSettingsModel; 
  public areaChartSetting:AreaChartSettingsModel;
  public barChartSetting:barChartSettingsModel;
  public stackChartSetting:ColumnStackSettingsModel;
  @ViewChild('pieChart',{static:true}) pieChart :PieChartWedgetComponent;
  @ViewChild('areaChart',{static:true}) areaChart :AreaChartWedgetComponent;
  @ViewChild('barChart',{static:true}) barChart :BarChartWedgetComponent;
  @ViewChild('stackChart',{static:true}) stackChart :StackChartWedgetComponent;
  constructor( private dashboardService: DashboardService) {
    this.pieChartSetting={
      Chartid:'pieChart',
      ChartType:'pie',
      MainTitle:'Performance Pie Chart',
      SubTitle:"",
      Colors:this.Colors.ColorScheme2,
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
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
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
      Chartid:'barChart',
      ChartType:'bar',
      MainTitle:'Performance Bar Chart',
      Colors:this.Colors.ColorScheme2,
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
    this.stackChartSetting={
      Chartid:'columnStack',
      ChartType:'columnStack',
      MainTitle:'Performance Stack Chart',
      Colors:this.Colors.ColorDarkLucinda,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :"50",
      MarginBottom :"45",
      MarginRight :"10",
      MarginTop : "35",
      DatalableStroke:"#E0E0E3",
      DatalableStrokeWidth:0,
      Datalabelscolor:"#E0E0E3",
      DatalabelfontWeight:"bold",
      LegendsBackgroundColor:"#282828",
      StackDatalabelscolorTop:"#E0E0E3"
    };
    // Apply the theme
   Highcharts.setOptions(this.theme.defaulttheme);
   }

  ngOnInit(): void {
    this.pieChart.chartSettings=this.pieChartSetting;
        this.areaChart.chartSettings=this.areaChartSetting;
        this.barChart.chartSettings=this.barChartSetting;
        this.stackChart.chartSettings=this.stackChartSetting;
      }

    //  formatXAxis() {
    //     return this.value; // clean, unformatted number for year
    // }

    //  formatYAxis() {
    //     return this.value / 1000 + 'k';
    // }

     //      }
}
