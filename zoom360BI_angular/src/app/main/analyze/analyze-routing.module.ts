import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzeComponent } from './analyze.component';
import { AnalysisToolComponent } from './analysis-tool/analysis-tool.component';
import { DigitalSalesAnalysisComponent } from './digital-sales-analysis/digital-sales-analysis.component';
import { DataMonitorComponent } from './data-monitor/data-monitor.component';
import { TreeControlComponent } from './tree-control/tree-control.component';

const routes: Routes = [
  { path: '', redirectTo: 'analysisdashboard',pathMatch:'full' },
{ path: 'analysisdashboard', component: AnalyzeComponent,
//   children:[
//           {path: 'salesdetailanalysis', component: AnalysisToolComponent},
//           {path: 'digitalsalesanalysis', component: DigitalSalesAnalysisComponent},
//           {path: 'datamonitor', component: DataMonitorComponent},
//           {path: 'treecontrol', component: TreeControlComponent},
//           ]
  },
  {path: 'datamonitor', component: DataMonitorComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class AnalyzeRoutingModule { }
