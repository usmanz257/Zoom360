import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { GetAiInsightsModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { LineChartAiInsightSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';

@Component({
  selector: 'app-aiinsight-demo2',
  templateUrl: './aiinsight-demo2.component.html',
  styleUrls: ['./aiinsight-demo2.component.css']
})
export class AIInsightDemo2Component implements OnInit {

  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
  public AIinsight:GetAiInsightsModel[];
  public lineChartSetting5:LineChartAiInsightSettingsModel;
  public lineChartSetting6:LineChartAiInsightSettingsModel;
  UserId:string='admin';
  WorkSpaceId:string='1';
  Client_Id :string='1002';
  DimentionType:string='';
  @ViewChild('lineChart5',{static:true}) lineChart5 :LineChartWedgetComponent;
  @ViewChild('lineChart6',{static:true}) lineChart6 :LineChartWedgetComponent;
  constructor(private _AIinsightsService:AIinsightsService){
    this.AIinsight=[
      {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:"",tail_Content:""},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."},
       {header_Content:".",tail_Content:"."}]
    Highcharts.setOptions(this.theme.defaulttheme);
    
    this.lineChartSetting5={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'PA1',
      Chartid:'PA1',
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
    this.lineChartSetting6={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'PA2',
      Chartid:'PA2',
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
    this.lineChart5.chartSettings=this.lineChartSetting5;
    this.lineChart6.chartSettings=this.lineChartSetting6;
    
  }
  getAIinsights(){
    debugger
    this._AIinsightsService.getAIinsightData().subscribe((data:GetAiInsightsModel[])=>{
      debugger
    this.AIinsight=data;
});
  }
}
