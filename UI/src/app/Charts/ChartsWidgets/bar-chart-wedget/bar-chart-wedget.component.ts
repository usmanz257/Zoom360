import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { barChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
@Component({
  selector: 'app-bar-chart-wedget',
  templateUrl: './bar-chart-wedget.component.html',
  styleUrls: ['./bar-chart-wedget.component.css']
})
export class BarChartWedgetComponent implements OnInit {
barChartId:string='';
chartSettings:barChartSettingsModel;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.BarChartPopulation();
  }
  BarChartPopulation(){
     this.barChartId= this.chartSettings.Chartid;
  this.dashboardService.get(this.chartSettings).subscribe(res => {
    Highcharts.chart(this.barChartId, res);
  })
}
}
