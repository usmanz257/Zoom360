import { Component, OnInit, ViewChild } from '@angular/core';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { ButtonComponent } from 'ej-angular2'
import * as Highcharts from 'highcharts';
import { BasicColumnChartWidgetComponent } from 'src/app/Charts/ChartsWidgets/basic-column-chart-widget/basic-column-chart-widget.component';
import { barChartSettingsModel, ColumnChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import { BarChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/bar-chart-wedget/bar-chart-wedget.component';
@Component({
  selector: 'app-reveal-dashboard',
  templateUrl: './reveal-dashboard.component.html',
  styleUrls: ['./reveal-dashboard.component.css']
})
export class RevealDashboardComponent implements OnInit {
  public Colors= new HighChartColorScheme();
  public basicColumnChart1Setting:ColumnChartSettingsModel;
  public basicColumnChart2Setting:ColumnChartSettingsModel;
  public basicColumnChart3Setting:ColumnChartSettingsModel;
  // public barChartSetting:barChartSettingsModel;
  @ViewChild('basicColumnChart1',{static:true}) basicColumnChart1 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart2',{static:true}) basicColumnChart2 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart3',{static:true}) basicColumnChart3 :BasicColumnChartWidgetComponent;
  // @ViewChild('barChart',{static:true}) barChart :BarChartWedgetComponent;

  constructor(private dashboardService: DashboardService) { 

    this.basicColumnChart1Setting={
      Chartid:'basicColumnChart1',
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
    this.basicColumnChart2Setting={
      Chartid:'basicColumnChart2',
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
    this.basicColumnChart3Setting={
      Chartid:'basicColumnChart3',
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
    // this.barChartSetting={
    //   Chartid:'barChart3',
    //   ChartType:'bar',
    //   MainTitle:'',
    //   Colors:this.Colors.ColorSchemeM,
    //   GradientBGColor1:"#fff",
    //   GradientBGColor2:"#fff",
    //   LegendsEnabled:true,
    //   DataLabelEnabled:true,
    //   xAxisVisible:true,
    //   yAxisVisible:true,
    //   MarginLeft :"75",
    //   MarginBottom :"35",
    //   MarginRight :"0",
    //   MarginTop : "35",
    //   DatalableStroke:"#E0E0E3",
    //   DatalableStrokeWidth:0,
    //   Datalabelscolor:"#E0E0E3",
    //   DatalabelfontWeight:"bold"
    // };

  }

  ngOnInit():void {
    this.basicColumnChart1.chartSettings=this.basicColumnChart1Setting;
    this.basicColumnChart2.chartSettings=this.basicColumnChart2Setting;
    this.basicColumnChart3.chartSettings=this.basicColumnChart3Setting;
    // this.barChart.chartSettings=this.barChartSetting;
  }

}
