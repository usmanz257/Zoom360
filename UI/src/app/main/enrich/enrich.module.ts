import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrichRoutingModule } from './enrich-routing.module';
import { AddLookupComponent } from './add-lookup/add-lookup.component';
import { FormsModule } from '@angular/forms';
import { DataQualityComponent } from './data-quality/data-quality.component';
import { LookuPageListComponent } from './looku-page-list/looku-page-list.component';
import { EnrichComponent } from './enrich.component';
import { EJAngular2Module } from 'ej-angular2';
import { DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EditService, GridAllModule, GridModule, VirtualScrollService } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { EnrichModelMappingComponent } from './enrich-model-mapping/enrich-model-mapping.component';
import { EnrichCSViewerComponent } from './enrich-csviewer/enrich-csviewer.component';
import { EnrichAgGridCSVViewerComponent } from './enrich-ag-grid-csvviewer/enrich-ag-grid-csvviewer.component';
import { AgGridModule } from 'ag-grid-angular';
import { DynamicEnrichFunctionsComponent } from './dynamic-enrich-functions/dynamic-enrich-functions.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { QueryRuleBuilderComponent } from './query-rule-builder/query-rule-builder.component';
import { EnrichmentFunctionsGridComponent } from './enrichment-functions-grid/enrichment-functions-grid.component';
import { EnrichmentFunctionsGrid2Component } from './enrichment-functions-grid2/enrichment-functions-grid2.component';
@NgModule({
  declarations: [
    AddLookupComponent,
    DataQualityComponent,
    LookuPageListComponent,
    EnrichComponent,
    EnrichModelMappingComponent,
    EnrichCSViewerComponent,
    EnrichAgGridCSVViewerComponent,
    DynamicEnrichFunctionsComponent,
    QueryRuleBuilderComponent,
    EnrichmentFunctionsGridComponent,
    EnrichmentFunctionsGrid2Component
  ],
  imports: [
    CommonModule,
    EnrichRoutingModule,
    FormsModule,
    DropDownListModule,
    MultiSelectModule,
    ButtonModule,
    CheckBoxModule,
    GridModule,
    GridAllModule,
    DragDropModule,
    DropDownButtonModule,
    QueryBuilderModule,
    AgGridModule.withComponents([])
  ],
})
export class EnrichModule { }
