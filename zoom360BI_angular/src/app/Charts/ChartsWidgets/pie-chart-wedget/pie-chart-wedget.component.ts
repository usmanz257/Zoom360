import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PieChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
@Component({
  selector: 'app-pie-chart-wedget',
  templateUrl: './pie-chart-wedget.component.html',
  styleUrls: ['./pie-chart-wedget.component.css']
})
export class PieChartWedgetComponent implements OnInit {
picChartId:string='';
chartSettings:PieChartSettingsModel;
  constructor( private dashboardService: DashboardService) { }

  ngOnInit() {
    this.pieChartPopulation();
  }
pieChartPopulation(){
  this.picChartId= this.chartSettings.Chartid;
  this.dashboardService.get(this.chartSettings).subscribe(res => {
    Highcharts.chart(this.picChartId, res);
  })
}
}
