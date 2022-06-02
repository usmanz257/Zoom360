import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionChartsModule } from 'angular-fusioncharts';
import { KPIAchivementsComponent } from './KPIAchivements.component';
import { KPIAchivementsRoutingModule } from './KPIAchivements-routing.module';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    KPIAchivementsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    KPIAchivementsRoutingModule,
    FusionChartsModule,
    AgGridModule.withComponents([]),
  ]
})
export class KPIAchivementsModule { }
