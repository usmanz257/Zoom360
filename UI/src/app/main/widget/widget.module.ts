import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetRoutingModule } from './widget-routing.module';
import { AllExtractLogWidgetComponent } from './all-extract-log-widget/all-extract-log-widget.component';
import { AllIssuesLogWidgetComponent } from './all-issues-log-widget/all-issues-log-widget.component';
import { ExtractStatusComponent } from './extract-status/extract-status.component';
import { WedgetSourceLogComponent } from './wedget-source-log/wedget-source-log.component';
import { WedgetAllissuesComponent } from './wedget-allissues/wedget-allissues.component';
import { ExploreEditorComponent } from './explore-editor/explore-editor.component';
import { WedgetAllExtractComponent } from './wedget-all-extract/wedget-all-extract.component';
import { WedgetEnrichLogComponent } from './wedget-enrich-log/wedget-enrich-log.component';
import { WedgetLoadLogComponent } from './wedget-load-log/wedget-load-log.component';
import { WedgetObjectLogComponent } from './wedget-object-log/wedget-object-log.component';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionChartsModule } from 'angular-fusioncharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { WedgetActivityMonitorComponent } from './wedget-activity-monitor/wedget-activity-monitor.component';
import { ReportWidgetComponent } from './report-widget/report-widget.component';
import { AreaChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/area-chart-wedget/area-chart-wedget.component';
import { BarChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/bar-chart-wedget/bar-chart-wedget.component';
import { LineChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/line-chart-wedget/line-chart-wedget.component';
import { PieChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/pie-chart-wedget/pie-chart-wedget.component';
import { StackChartWedgetComponent } from 'src/app/Charts/ChartsWidgets/stack-chart-wedget/stack-chart-wedget.component';
import { BasicColumnChartWidgetComponent } from 'src/app/Charts/ChartsWidgets/basic-column-chart-widget/basic-column-chart-widget.component';
import { ReportImageComponent } from './report-image/report-image.component';
import { AIInsightDemo1Component } from './aiinsight-demo1/aiinsight-demo1.component';
import { AIInsightDemo2Component } from './aiinsight-demo2/aiinsight-demo2.component';
import { EffortSuggestionsComponent } from './effort-suggestions/effort-suggestions.component';
import { ForecastingComponent } from './forecasting/forecasting.component';
// import { TreetemplateComponent } from './treetemplate/treetemplate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatusErrorComponent } from './status-error/status-error.component';
import { AgGridDataViewerComponent } from '../aiinsights/ag-grid-data-viewer/ag-grid-data-viewer.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GridsterModule } from 'angular-gridster2';
import { DashboardFiltersComponent } from './dashboard-filters/dashboard-filters.component';
import { NgSelectModule } from '@ng-select/ng-select';


FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AllExtractLogWidgetComponent,
    AllIssuesLogWidgetComponent,
    ExtractStatusComponent,
    WedgetSourceLogComponent,
    WedgetAllExtractComponent,
    WedgetAllissuesComponent,
    ExploreEditorComponent,
    WedgetEnrichLogComponent,
    WedgetLoadLogComponent,
    WedgetObjectLogComponent,
    ExtractStatusComponent,
    WedgetActivityMonitorComponent,
    AreaChartWedgetComponent,
    BarChartWedgetComponent,
    LineChartWedgetComponent,
    PieChartWedgetComponent,
    StackChartWedgetComponent,
    BasicColumnChartWidgetComponent,
    ReportWidgetComponent,
    ReportImageComponent,
    AIInsightDemo1Component,
    AIInsightDemo2Component,
    EffortSuggestionsComponent,
    ForecastingComponent,
    // TreetemplateComponent,
    StatusErrorComponent,
    AgGridDataViewerComponent,
    DashboardFiltersComponent
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    WidgetRoutingModule,
    FusionChartsModule,
    AgGridModule.withComponents([]),
    HighchartsChartModule,
    GridsterModule,
    NgSelectModule
  ],
  exports:[
    AllExtractLogWidgetComponent,
    AllIssuesLogWidgetComponent,
    ExtractStatusComponent,
    WedgetSourceLogComponent,
    WedgetAllExtractComponent,
    WedgetAllissuesComponent,
    ExploreEditorComponent,
    WedgetEnrichLogComponent,
    WedgetLoadLogComponent,
    WedgetObjectLogComponent,
    ExtractStatusComponent,
    WedgetActivityMonitorComponent,
    AreaChartWedgetComponent,
    BarChartWedgetComponent,
    LineChartWedgetComponent,
    PieChartWedgetComponent,
    StackChartWedgetComponent,
    BasicColumnChartWidgetComponent,
    ReportWidgetComponent,
    ReportImageComponent,
    AIInsightDemo1Component,
    AIInsightDemo2Component,
    EffortSuggestionsComponent,
    ForecastingComponent,
    // TreetemplateComponent,
    StatusErrorComponent,
    AgGridDataViewerComponent,
    DashboardFiltersComponent
  ]
})
export class WidgetModule { }
