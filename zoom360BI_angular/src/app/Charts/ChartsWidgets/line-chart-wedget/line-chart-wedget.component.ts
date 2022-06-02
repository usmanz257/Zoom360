import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LineChartSettingsModel } from 'src/app/models/Charts/ChartSettingsModel';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';

@Component({
  selector: 'app-line-chart-wedget',
  templateUrl: './line-chart-wedget.component.html',
  styleUrls: ['./line-chart-wedget.component.css']
})
export class LineChartWedgetComponent implements OnInit {

  picChartId:string='';
  chartSettings:any;
  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
   this.picChartId=this.chartSettings.Chartid;
    setTimeout(()=>{
      this.dashboardService.get(this.chartSettings).subscribe(res=>{
        console.log(res);
        Highcharts.chart(this.picChartId,res);
      })
    },100);
    // this.picChartId=this.chartSettings.Chartid;
    // this.linePopulation();
  }
  // linePopulation(){
  // this.dashboardService.get(this.chartSettings).subscribe(res=>{
  //   console.log(res);
  //   Highcharts.chart(this.picChartId,res);
  // })
//}

}
