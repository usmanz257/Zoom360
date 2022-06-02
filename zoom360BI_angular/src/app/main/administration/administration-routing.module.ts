import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { WorkspaceSetupComponent } from './workspace-setup/workspace-setup.component';
import { CurrencySetupComponent } from './currency-setup/currency-setup.component';
import { TimeZoneSetupComponent } from './time-zone-setup/time-zone-setup.component';
import { NumeralsSetupComponent } from './numerals-setup/numerals-setup.component';
import { CalenderSetupComponent } from './calender-setup/calender-setup.component';
import { DataGovernanceComponent } from './data-governance/data-governance.component';
import { QuotaSettingsComponent } from './quota-settings/quota-settings.component';
import { DisplaySettingsComponent } from './display-settings/display-settings.component';
import { ExportTemplateComponent } from './export-template/export-template.component';
import { ChildWorkspacesSetupComponent } from './child-workspaces-setup/child-workspaces-setup.component';
import { UsageHistoryComponent } from './usage-history/usage-history.component';
import { UsersLogComponent } from './users-log/users-log.component';
import { ChangesLogComponent } from './changes-log/changes-log.component';
import { ConfigurationTemplateComponent } from './configuration-template/configuration-template.component';
import { UserRightsGuardService } from 'src/app/guards/user-rights-guard.service';
import { StatusErrorComponent } from '../widget/status-error/status-error.component';
import { TreeTemplateGridComponent } from './tree-template-grid/tree-template-grid.component';
import { TreetemplateComponent } from '../widget/treetemplate/treetemplate.component';
 

const routes: Routes = [
  
  //{ path: '', component:ApplicationStartupComponent},
   
    //Administration
    { path: '', redirectTo:'settings', pathMatch:'full'},
    { path: 'settings', component: AdministrationComponent,
      children:[
        { path: '', redirectTo:'workspacesetup', pathMatch:'full'},
        { path: 'workspacesetup', component: WorkspaceSetupComponent,canActivate:[UserRightsGuardService]},
        { path: 'currencysetup', component: CurrencySetupComponent,canActivate:[UserRightsGuardService]},
        { path: 'timezonesetup', component: TimeZoneSetupComponent,canActivate:[UserRightsGuardService]},
        { path: 'numeralssetup', component: NumeralsSetupComponent,canActivate:[UserRightsGuardService]},
        { path: 'calendersetup', component: CalenderSetupComponent,canActivate:[UserRightsGuardService]},
        { path:'datagovernance', component:DataGovernanceComponent,canActivate:[UserRightsGuardService]},
        { path:'quotasettings', component:QuotaSettingsComponent,canActivate:[UserRightsGuardService]},
        { path:'displaysettings', component:DisplaySettingsComponent,canActivate:[UserRightsGuardService]},
        // { path:'templates', component:TreeTemplateGridComponent,canActivate:[UserRightsGuardService]},
        { path:'childworkspace', component:ChildWorkspacesSetupComponent,canActivate:[UserRightsGuardService]},
        { path:'usagehistory', component:UsageHistoryComponent,canActivate:[UserRightsGuardService]},
        { path:'userslog', component:UsersLogComponent,canActivate:[UserRightsGuardService]},
        { path:'changeslog', component:ChangesLogComponent,canActivate:[UserRightsGuardService]},
        { path:'mappingconfiguration',component:ConfigurationTemplateComponent,canActivate:[UserRightsGuardService]},
        // { path:'treeview',component:TreetemplateComponent},
        // { path:'TreeTemplateGrid',component:TreeTemplateGridComponent,canActivate:[UserRightsGuardService]},
        {path:'status', component:StatusErrorComponent},
       // { path: '', redirectTo:'workspacesetup', pathMatch:'full'}
      ] ,
      },
      // {path:'status', component:StatusErrorComponent},
      // {path: '**', redirectTo:'status',pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
