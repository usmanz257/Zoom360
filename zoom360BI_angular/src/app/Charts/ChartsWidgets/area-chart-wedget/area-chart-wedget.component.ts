import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import * as Highcharts from 'highcharts';
import { AreaChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';

@Component({
  selector: 'app-area-chart-wedget',
  templateUrl: './area-chart-wedget.component.html',
  styleUrls: ['./area-chart-wedget.component.css']
})
export class AreaChartWedgetComponent implements OnInit {
  chartSettings:AreaChartSettingsModel;
  constructor( private dashboardService: DashboardService) { }
  areaChartId:string='';
  ngOnInit() {
    this.AreaChartPopulation();
  }
  AreaChartPopulation() {
    this.areaChartId=this.chartSettings.Chartid;
    this.dashboardService.get(this.chartSettings).subscribe(res => {
      
      res.xAxis.labels.formatter = function(){
        return this.value;
        }
        res.yAxis.labels.formatter = function(){return this.value / 1000 + 'k'}
    
      Highcharts.chart(this.areaChartId, res);
    });
  }
}
