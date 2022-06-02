import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { SharedModule } from '../../shared/shared.module';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionChartsModule } from 'angular-fusioncharts';
import { WidgetModule } from '../widget/widget.module';
import { TimeLineRoutingModule } from './time-line-routing.module';
import { TimeLineComponent } from './time-line.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    TimeLineComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    TimeLineRoutingModule,
    FusionChartsModule,
    WidgetModule,
    AgGridModule.withComponents([]),
  ]
})
export class TimeLineModule { }
