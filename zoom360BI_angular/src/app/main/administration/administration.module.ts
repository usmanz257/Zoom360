import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderSetupComponent } from './calender-setup/calender-setup.component';
import { WorkspaceSetupComponent } from './workspace-setup/workspace-setup.component';
import { WorkspaceSetupGridComponent } from './workspace-setup/workspace-setup-grid/workspace-setup-grid.component';
import { CurrencySetupComponent } from './currency-setup/currency-setup.component';
import { TimeZoneSetupComponent } from './time-zone-setup/time-zone-setup.component';
import { NumeralsSetupComponent } from './numerals-setup/numerals-setup.component';
import { DataGovernanceComponent } from './data-governance/data-governance.component';
import { QuotaSettingsComponent } from './quota-settings/quota-settings.component';
import { DisplaySettingsComponent } from './display-settings/display-settings.component';
import { ExportTemplateComponent } from './export-template/export-template.component';
import { ChildWorkspacesSetupComponent } from './child-workspaces-setup/child-workspaces-setup.component';
import { UsageHistoryComponent } from './usage-history/usage-history.component';
import { UsersLogComponent } from './users-log/users-log.component';
import { ChangesLogComponent } from './changes-log/changes-log.component';
import { ConfigurationTemplateComponent } from './configuration-template/configuration-template.component';
import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { RouterModule } from '@angular/router';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, DropDownListComponent, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EJAngular2Module } from 'ej-angular2';
import { SharedModule } from 'src/app/shared/shared.module';
import { TreeTemplateGridComponent } from './tree-template-grid/tree-template-grid.component';

@NgModule({
  declarations: [
    WorkspaceSetupComponent,
    WorkspaceSetupGridComponent,
    CurrencySetupComponent,
    TimeZoneSetupComponent,
    NumeralsSetupComponent,
    CalenderSetupComponent,
    DataGovernanceComponent,
    QuotaSettingsComponent,
    DisplaySettingsComponent,
    ExportTemplateComponent,
    ChildWorkspacesSetupComponent,
    UsageHistoryComponent,
    UsersLogComponent,
    ChangesLogComponent,
    ConfigurationTemplateComponent,
    AdministrationComponent,
    // TreeTemplateGridComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    EJAngular2Module.forRoot(), 
  ],
  exports:[
    WorkspaceSetupGridComponent
  ]
})
export class AdministrationModule { }
