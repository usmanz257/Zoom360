import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionChartsModule } from 'angular-fusioncharts';
import { PrensentationModeRoutingModule } from './Presentation-mode-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrensentationModeComponent } from './prensentation-mode.component';
import { RevealComponent } from '../main/reveal/reveal.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    PrensentationModeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PrensentationModeRoutingModule,
    FusionChartsModule,
    AgGridModule.withComponents([]),
  ]
})
export class PrensentationModeModule { }
