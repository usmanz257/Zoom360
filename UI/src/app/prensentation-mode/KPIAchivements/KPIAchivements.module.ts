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
import { DynamicDashboardRoutingModule } from 'src/app/main/dynamicDashboard/dynamicDashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { GridsterModule } from 'angular-gridster2';
import { CountUpModule } from 'ngx-countup';
import { WidgetModule } from 'src/app/main/widget/widget.module';
import { DynamicDashboardModule } from 'src/app/main/dynamicDashboard/dynamicDashboard.module';

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
    HighchartsChartModule,
    DynamicDashboardModule,
    //HighchartsChartComponent,
    GridsterModule,
    // DynamicModule,
    CountUpModule,
    WidgetModule
  ]
})
export class KPIAchivementsModule { }
