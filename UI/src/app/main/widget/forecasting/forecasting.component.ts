import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { GetAiInsightsModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { LineChartAiInsightSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';

@Component({
  selector: 'app-forecasting',
  templateUrl: './forecasting.component.html',
  styleUrls: ['./forecasting.component.css']
})
export class ForecastingComponent implements OnInit {

  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
  public AIinsight:GetAiInsightsModel[];
  public lineChartSetting9:LineChartAiInsightSettingsModel;
  public lineChartSetting10:LineChartAiInsightSettingsModel;
  UserId:string='admin';
  WorkSpaceId:string='1';
  Client_Id :string='1002';
  DimentionType:string='';
  @ViewChild('lineChart9',{static:true}) lineChart9 :LineChartWedgetComponent;
  @ViewChild('lineChart10',{static:true}) lineChart10 :LineChartWedgetComponent;
  constructor(private _AIinsightsService:AIinsightsService){
    this.AIinsight=[
      {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."}]
    Highcharts.setOptions(this.theme.defaulttheme);
    
    this.lineChartSetting9={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'TD1',
      Chartid:'FF1',
      ChartType:'Line',
      ModuleName:'AIInsight',
      ToolTipHeader:'Clicks',
      MainTitle:'',
      Colors:this.Colors.ColorsAI,
      GradientBGColor1:"#fbf9fc",
      GradientBGColor2:"#fbf9fc",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:false,
      yAxisVisible:false,
      MarginLeft :null,
      MarginBottom :"60",
      MarginRight :"10",
      MarginTop : "35",
    };
    this.lineChartSetting10={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'TD1',
      Chartid:'FF2',
      ChartType:'Line',
      ModuleName:'AIInsight',
      ToolTipHeader:'Impressions',
      MainTitle:'',
      Colors:this.Colors.ColorsAI,
      GradientBGColor1:"#fbf9fc",
      GradientBGColor2:"#fbf9fc",
      LegendsEnabled:false,
      DataLabelEnabled:true,
      xAxisVisible:false,
      yAxisVisible:true,
      MarginLeft :null,
      MarginBottom :"60",
      MarginRight :"10",
      MarginTop : "35",
    };
  }
  ngOnInit(){
    this.getAIinsights();
    this.lineChart9.chartSettings=this.lineChartSetting9;
    this.lineChart10.chartSettings=this.lineChartSetting10;
    
  }
  getAIinsights(){
    debugger
    this._AIinsightsService.getAIinsightData().subscribe((data:GetAiInsightsModel[])=>{
      debugger
    this.AIinsight=data;
});
  }

}
