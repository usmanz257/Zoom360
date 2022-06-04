import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealRoutingModule } from './reveal-routing.module';
import { RevealComponent } from './reveal.component';
import { RevealDashboardComponent } from './reveal-dashboard/reveal-dashboard.component';
import { WidgetModule } from '../widget/widget.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { FusionChartsModule } from 'angular-fusioncharts';



@NgModule({
  declarations: [
    RevealComponent,
    RevealDashboardComponent
  
],
  imports: [
    CommonModule,
    FusionChartsModule,
    RevealRoutingModule,
    SharedModule,
    WidgetModule,
    AgGridModule.withComponents([]),
    HighchartsChartModule,
  ],
  exports:[
  ]
})
export class RevealModule { }
