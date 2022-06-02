import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chartthemes } from 'src/app/Charts/ChartsThemes/ChartsThemes';
import { HighChartColorScheme } from 'src/app/Charts/ChartsThemes/HighChartsColors';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { GetAiInsightsModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { LineChartAiInsightSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';


@Component({
  selector: 'app-kpi-graph',
  templateUrl: './kpi-graph.component.html',
  styleUrls: ['./kpi-graph.component.css']
})
export class KpiGraphComponent implements OnInit {
  public theme= new Chartthemes();
  public Colors= new HighChartColorScheme();
  public AIinsight:GetAiInsightsModel[];
  public lineChartSetting:LineChartAiInsightSettingsModel;
  public lineChartSetting2:LineChartAiInsightSettingsModel;
  UserId:string='admin';
  WorkSpaceId:string='1';
  Client_Id :string='1002';
  DimentionType:string='';
  @ViewChild('lineChart',{static:true}) lineChart :LineChartWedgetComponent;
  @ViewChild('lineChart2',{static:true}) lineChart2 :LineChartWedgetComponent;
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
    this.lineChartSetting={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'CTRH',
      Chartid:'CTRH',
      ChartType:'Line',
      ModuleName:'AIInsight',
      MainTitle:'',
      ToolTipHeader:'CTR',
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
    this.lineChartSetting2={
      UserId:this.UserId,
      WorkSpaceId:this.WorkSpaceId,
      Client_Id :this.Client_Id,
      DimentionType:'CTRD',
      Chartid:'CTRD',
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
  }
  ngOnInit(){
    this.lineChart.chartSettings=this.lineChartSetting;
    this.lineChart2.chartSettings=this.lineChartSetting2;
    this.getAIinsights();
  }
  getAIinsights(){
    debugger
    this._AIinsightsService.getAIinsightData().subscribe((data:GetAiInsightsModel[])=>{
      debugger
    this.AIinsight=data;
});
  }
}
