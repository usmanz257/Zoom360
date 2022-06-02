import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { SharedModule } from '../../shared/shared.module';
import { PublishRoutingModule } from './publish-routing.module';

import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
import { PublishComponent } from './publish.component';
// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionChartsModule } from 'angular-fusioncharts';
import { ChannelsComponent } from './channels/channels.component';
import { PublishDashBoardComponent } from './publish-dash-board/publish-dash-board.component';
import { GetStartedComponent } from './publish-dash-board/get-started/get-started.component';
import { PreBuiltComponent } from './publish-dash-board/pre-built/pre-built.component';
import { KpiLibraryComponent } from './publish-dash-board/kpi-library/kpi-library.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PerformancedashboardComponent } from './performancedashboard/performancedashboard.component';
import { EcommercedashboardComponent } from './ecommercedashboard/ecommercedashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterDashboardComponent } from './gridster-dashboard/gridster-dashboard.component';
import { MarketingDashboardComponent } from 'src/app/Charts/ChartsDashBoard/marketing-dashboard/marketing-dashboard.component';

import { WidgetModule } from '../widget/widget.module';
import { DarkthemeDashboardComponent } from 'src/app/Charts/ChartsDashBoard/darktheme-dashboard/darktheme-dashboard.component';
import { DemoDashboardAComponent } from 'src/app/Charts/ChartsDashBoard/demo-dashboard-a/demo-dashboard-a.component';
import { ChartSelectListComponent } from 'src/app/Charts/ChartsDashBoard/chart-select-list/chart-select-list.component';
//  import { CountUpModule } from 'ngx-countup';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    PublishComponent,
    CreateDashboardComponent,
    ChannelsComponent,
    PublishDashBoardComponent,
    GetStartedComponent,
    PreBuiltComponent,
    KpiLibraryComponent,
    PerformancedashboardComponent,
    EcommercedashboardComponent,
    GridsterDashboardComponent,
    MarketingDashboardComponent,
    DarkthemeDashboardComponent,
    DemoDashboardAComponent,
    ChartSelectListComponent
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublishRoutingModule,
    FusionChartsModule,
    WidgetModule,
    AgGridModule.withComponents([]),
  HighchartsChartModule,
    GridsterModule,
    //  CountUpModule
  ]
})
export class PublishModule { }
