import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLookupComponent } from './add-lookup/add-lookup.component';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { LookuPageListComponent } from './looku-page-list/looku-page-list.component';
import { EnrichComponent } from './enrich.component';
import { RouterModule, Routes } from '@angular/router';
import { EnrichModelMappingComponent } from './enrich-model-mapping/enrich-model-mapping.component';
import { EnrichCSViewerComponent } from './enrich-csviewer/enrich-csviewer.component';
import { EnrichAgGridCSVViewerComponent } from './enrich-ag-grid-csvviewer/enrich-ag-grid-csvviewer.component';
import { DynamicEnrichFunctionsComponent } from './dynamic-enrich-functions/dynamic-enrich-functions.component';
import { QueryRuleBuilderComponent } from './query-rule-builder/query-rule-builder.component';
import { EnrichmentFunctionsGridComponent } from './enrichment-functions-grid/enrichment-functions-grid.component';
import { EnrichmentFunctionsGrid2Component } from './enrichment-functions-grid2/enrichment-functions-grid2.component';
const routes: Routes = [
  { path:'prepare',component: EnrichComponent ,
  children:[
    {path:'dataquality',component:DataQualityComponent},
    {path:'LookupValuesAdd',component:AddLookupComponent},
    {path:'lookupvalues',component:LookuPageListComponent},
    {path:'enrichmodelmapping',component:EnrichModelMappingComponent},
    {path:'csvviewer',component:EnrichCSViewerComponent},
    {path:'dynamiccomponent',component:DynamicEnrichFunctionsComponent},
    {path:'querybuilder',component:QueryRuleBuilderComponent},
    {path:'enrichmentfunctiongrid',component:EnrichmentFunctionsGridComponent},
    {path:'enrichmentfunctiongridColumn',component:EnrichmentFunctionsGrid2Component}
   ]
},
{path:'csvreportviewer',component:EnrichAgGridCSVViewerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class EnrichRoutingModule { }
 