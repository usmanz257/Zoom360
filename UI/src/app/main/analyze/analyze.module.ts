import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { DigitalSalesAnalysisComponent } from './digital-sales-analysis/digital-sales-analysis.component';
import { AnalysisToolComponent } from './analysis-tool/analysis-tool.component';
import { SharedModule } from '../../shared/shared.module';
import { AnalyzeComponent } from './analyze.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { DataMonitorComponent } from './data-monitor/data-monitor.component';
import { VideoPlayerComponent } from '../widget/video-player/video-player.component';
import { ImageFormatterComponent } from '../widget/image-formatter/image-formatter.component';
import { TreeControlComponent } from './tree-control/tree-control.component';
import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
@NgModule({
  declarations: [
    AnalyzeComponent,
    DigitalSalesAnalysisComponent,
    AnalysisToolComponent,
    DataMonitorComponent,
    VideoPlayerComponent,
    ImageFormatterComponent,
    TreeControlComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AnalyzeRoutingModule,
    DropDownTreeModule,
    ListViewModule,
    AgGridModule.withComponents([]),
    
  ],
  entryComponents: [
    ImageFormatterComponent,
  ],
})
export class AnalyzeModule { }
