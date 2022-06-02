import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AIinsightsComponent } from './aiinsights.component';


const routes: Routes = [
  { path: '', redirectTo:'insights', pathMatch:'full'},
  { path: 'insights', component:AIinsightsComponent},
  
    // children:[
    // { path: 'graph', component:KpiGraphComponent},
    // { path: 'trenddetection', component:AIInsightDemo1Component},
    // { path: 'Portfolio', component:AIInsightDemo2Component},
    // { path: 'effortsuggestion', component:EffortSuggestionsComponent},
    // { path: 'forecasting', component:ForecastingComponent}
    // ]
  
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
