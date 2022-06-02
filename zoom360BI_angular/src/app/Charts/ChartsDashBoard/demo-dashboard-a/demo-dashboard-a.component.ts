import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AreaChartSettingsModel, ColumnChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import { Chartthemes } from '../../ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from '../../ChartsThemes/HighChartsColors';
import { AreaChartWedgetComponent } from '../../ChartsWidgets/area-chart-wedget/area-chart-wedget.component';
import { BasicColumnChartWidgetComponent } from '../../ChartsWidgets/basic-column-chart-widget/basic-column-chart-widget.component';

@Component({
  selector: 'app-demo-dashboard-a',
  templateUrl: './demo-dashboard-a.component.html',
  styleUrls: ['./demo-dashboard-a.component.css']
})
export class DemoDashboardAComponent implements OnInit {
  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
    //Basic Column Chart
    public basicColumnChartSetting7:ColumnChartSettingsModel;
    public basicColumnChartSetting8:ColumnChartSettingsModel;
    public basicColumnChartSetting9:ColumnChartSettingsModel;


      //Basic Column Chart
  @ViewChild('basicColumnChart7',{static:true}) basicColumnChart7 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart8',{static:true}) basicColumnChart8 :BasicColumnChartWidgetComponent;
  @ViewChild('basicColumnChart9',{static:true}) basicColumnChart9 :BasicColumnChartWidgetComponent;

  constructor(private dashboardService: DashboardService ) {

    this.basicColumnChartSetting7={
      Chartid:'basicColumnChart7',
      ChartType:'column',
      MainTitle:'Column Chart',
      SubTitle:'',
      Colors:this.Colors.ColorScheme2,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      XAxisallowDecimals:true,
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
    };
    this.basicColumnChartSetting8={
      Chartid:'basicColumnChart8',
      ChartType:'column',
      MainTitle:'Column Chart',
      SubTitle:'',
      XAxisallowDecimals:true,
      Colors:this.Colors.ColorScheme1,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
    };
    this.basicColumnChartSetting9={
      Chartid:'basicColumnChart9',
      ChartType:'column',
      MainTitle:'Column Chart',
      SubTitle:'',
      XAxisallowDecimals:true,
      Colors:this.Colors.ColorSchemeM,
      GradientBGColor1:"#fff",
      GradientBGColor2:"#fff",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:true,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :null,
      MarginRight :"10",
      MarginTop : "35",
    };

    Highcharts.setOptions(this.theme.defaulttheme);
   }

  ngOnInit() {
        //Basic Column Chart
        this.basicColumnChart7.chartSettings=this.basicColumnChartSetting7;
        this.basicColumnChart8.chartSettings=this.basicColumnChartSetting8;
        this.basicColumnChart9.chartSettings=this.basicColumnChartSetting9;
  }

}
