import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { GetAiInsightsModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { LineChartAiInsightSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';

@Component({
  selector: 'app-effort-suggestions',
  templateUrl: './effort-suggestions.component.html',
  styleUrls: ['./effort-suggestions.component.css']
})
export class EffortSuggestionsComponent implements OnInit {

  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
  public AIinsight:GetAiInsightsModel[];
  public lineChartSetting7:LineChartAiInsightSettingsModel;
  public lineChartSetting8:LineChartAiInsightSettingsModel;
  UserId:string='admin';
  WorkSpaceId:string='1';
  Client_Id :string='1002';
  DimentionType:string='';
  @ViewChild('lineChart7',{static:true}) lineChart7 :LineChartWedgetComponent;
  @ViewChild('lineChart8',{static:true}) lineChart8 :LineChartWedgetComponent;
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
    
    this.lineChartSetting7={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'ES1',
      Chartid:'ES1',
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
    this.lineChartSetting8={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'TD1',
      Chartid:'ES2',
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
    this.lineChart7.chartSettings=this.lineChartSetting7;
    this.lineChart8.chartSettings=this.lineChartSetting8;
    
  }
  getAIinsights(){
    debugger
    this._AIinsightsService.getAIinsightData().subscribe((data:GetAiInsightsModel[])=>{
      debugger
    this.AIinsight=data;
});
  }

}
