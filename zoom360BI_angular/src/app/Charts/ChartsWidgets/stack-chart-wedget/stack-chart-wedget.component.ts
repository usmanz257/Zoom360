import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ColumnStackSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
@Component({
  selector: 'app-stack-chart-wedget',
  templateUrl: './stack-chart-wedget.component.html',
  styleUrls: ['./stack-chart-wedget.component.css']
})
export class StackChartWedgetComponent implements OnInit {
stackChartId:string='';
chartSettings:ColumnStackSettingsModel;
  constructor( private dashboardService: DashboardService) { }

  ngOnInit() {
    this.columnStackPopulation();
  }
  columnStackPopulation() {
    this.stackChartId= this.chartSettings.Chartid;
    this.dashboardService.get(this.chartSettings).subscribe(res => {
      console.log(res)
      Highcharts.chart(this.stackChartId, res);
    })
  }
}
