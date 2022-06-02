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

import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
import HighchartsBullet from 'highcharts/modules/bullet';
HighchartsBullet(Highcharts);
import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);
import highcharts3DArea from 'highcharts/highcharts-3d';
highcharts3DArea(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
import Cylinder from 'highcharts/modules/cylinder';
Cylinder(Highcharts);



import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);
import { GridsterModule } from 'angular-gridster2';
import { WorkbookpagesComponent } from './workbookpages/workbookpages.component';
import { DynamicDashboardRoutingModule } from './dynamicDashboard-routing.module';
import { DynamicDashboardComponent } from './dynamicDashboard.component';
import { CountUpModule } from 'ngx-countup';
import { DMAverageLeadScoreComponent } from './WidgetLibrary/dm-average-lead-score/dm-average-lead-score.component';
import { DefaultScoreCardComponent } from './WidgetLibrary/default-score-card/default-score-card.component';
import { WidgetLibraryComponent } from './widget-library/widget-library.component';
import { ScoreCardsComponent } from './widget-library/score-cards/score-cards.component';
// import { DynamicModule } from 'ng-dynamic-component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
const dashboardWidgets = [
  
];
@NgModule({
  declarations: [
    WorkbookpagesComponent,
    DynamicDashboardComponent,
    DMAverageLeadScoreComponent,
    DefaultScoreCardComponent,
    WidgetLibraryComponent,
    ScoreCardsComponent
  ],
  entryComponents:[],
  imports: [
    SharedModule,
    CommonModule,
    DynamicDashboardRoutingModule,
    FusionChartsModule,
    AgGridModule.withComponents([]),
    HighchartsChartModule,
    //HighchartsChartComponent,
    GridsterModule,
    // DynamicModule,
    CountUpModule
    
  ]
})
export class DynamicDashboardModule { }
