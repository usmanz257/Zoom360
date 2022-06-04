import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzeRoutingModule } from './aiinsights-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { KpiGraphComponent } from '../widget/kpi-graph/kpi-graph.component';
import { AIinsightsComponent } from './aiinsights.component';
// Import FusionCharts library and chart modules

import { WidgetModule } from '../widget/widget.module';
import { AIinsightWidgetComponent } from './aiinsight-widget/aiinsight-widget.component';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
import { MultiSelectAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AiinsightsExpandWidgetComponent } from './aiinsights-expand-widget/aiinsights-expand-widget.component';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);




@NgModule({
  declarations: [
    AIinsightsComponent,
    KpiGraphComponent,
    AIinsightWidgetComponent,
    AiinsightsExpandWidgetComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AnalyzeRoutingModule,
    WidgetModule,
    ButtonModule,
    CheckBoxModule,
    MultiSelectAllModule,
  ]
})
export class aiinsightsModule {
  
}
