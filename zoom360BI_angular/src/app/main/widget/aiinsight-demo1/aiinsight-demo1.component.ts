import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { GetAiInsightsModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { LineChartAiInsightSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';

@Component({
  selector: 'app-aiinsight-demo1',
  templateUrl: './aiinsight-demo1.component.html',
  styleUrls: ['./aiinsight-demo1.component.css']
})
export class AIInsightDemo1Component implements OnInit {

  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
  public AIinsight:GetAiInsightsModel[];
  public lineChartSetting3:LineChartAiInsightSettingsModel;
  public lineChartSetting4:LineChartAiInsightSettingsModel;
  UserId:string='admin';
  WorkSpaceId:string='1';
  Client_Id :string='1002';
  DimentionType:string='';
  @ViewChild('lineChart3',{static:true}) lineChart3 :LineChartWedgetComponent;
  @ViewChild('lineChart4',{static:true}) lineChart4 :LineChartWedgetComponent;
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
    this.lineChartSetting3={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'TD1',
      Chartid:'TD1',
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
    this.lineChartSetting4={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'TD2',
      Chartid:'TD2',
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
    
    Highcharts.setOptions(this.theme.defaulttheme);
   
  }
  ngOnInit(){
    this.getAIinsights();
    this.lineChart3.chartSettings=this.lineChartSetting3;
    this.lineChart4.chartSettings=this.lineChartSetting4;
    
  }
  getAIinsights(){
    debugger
    this._AIinsightsService.getAIinsightData().subscribe((data:GetAiInsightsModel[])=>{
      debugger
    this.AIinsight=data;
});
  }
}

