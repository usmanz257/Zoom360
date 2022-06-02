import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ColumnChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';

@Component({
  selector: 'app-basic-column-chart-widget',
  templateUrl: './basic-column-chart-widget.component.html',
  styleUrls: ['./basic-column-chart-widget.component.css']
})
export class BasicColumnChartWidgetComponent implements OnInit {
  basicColumnChartId:string="";
  chartSettings:ColumnChartSettingsModel;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.BasicColumnChartPopulation();
  }
  
  BasicColumnChartPopulation(){
    this.basicColumnChartId= this.chartSettings.Chartid;
  this.dashboardService.get(this.chartSettings).subscribe(res => {
    debugger
    Highcharts.chart(this.basicColumnChartId, res);
  })
}
}