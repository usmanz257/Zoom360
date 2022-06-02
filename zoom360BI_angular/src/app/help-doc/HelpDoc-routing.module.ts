import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpDocComponent } from './HelpDoc.component';
import { HelpHomeComponent } from './help-home/help-home.component';
import { ExtractHelpComponent } from './extract-help/extract-help.component';
import { SummaryComponent } from './extract-help/summary/summary.component';
import { SourceListComponent } from './extract-help/source-list/source-list.component';
import { ConnectionsListComponent } from './extract-help/connections-list/connections-list.component';
import { ExtractLogsComponent } from './extract-help/extract-logs/extract-logs.component';
import { IssuesLogsComponent } from './extract-help/issues-logs/issues-logs.component';
import { PipelinsComponent } from './extract-help/pipelins/pipelins.component';
import { AddNewDatastreamHelpComponent } from './add-new-datastream-help/add-new-datastream-help.component';
// import { FileSystemAndStorageServicesComponent } from './add-new-datastream-help/file-system-and-storage-services/file-system-and-storage-services.component';
import { FsssConnectorTypeComponent } from './add-new-datastream-help/conector-type/fsss-connector-type/fsss-connector-type.component';
import { FsssDescriptionComponent } from './add-new-datastream-help/description/fsss-description/fsss-description.component';
import { FsssConfigurationComponent } from './add-new-datastream-help/configuration/fsss-configuration/fsss-configuration.component';
import { FsssTemplateComponent } from './add-new-datastream-help/template/fsss-template/fsss-template.component';
import { DBMSComponent } from './add-new-datastream-help/dbms/dbms.component';
import { DBMSDescriptionComponent } from './add-new-datastream-help/description/dbms-description/dbms-description.component';
import { DBMSConnectorTypeComponent } from './add-new-datastream-help/conector-type/dbms-connector-type/dbms-connector-type.component';
import { DBMSTemplateComponent } from './add-new-datastream-help/template/DBMS-template/dbms-template.component';
import { DBMSConfigurationComponent } from './add-new-datastream-help/configuration/DBMS-configuration/dbms-configuration.component';
import { BusinessPlatformsAndApisComponent } from './add-new-datastream-help/business-platforms-and-apis/business-platforms-and-apis.component';
import { BpaConnectorTypeComponent } from './add-new-datastream-help/conector-type/bpa-connector-type/bpa-connector-type.component';
import { BpaDescriptionComponent } from './add-new-datastream-help/description/bpa-description/bpa-description.component';
import { BpaTemplateComponent } from './add-new-datastream-help/template/bpa-template/bpa-template.component';
import { BpaConfigurationComponent } from './add-new-datastream-help/configuration/bpa-configuration/bpa-configuration.component';
import { EnrichHelpComponent } from './enrich-help/enrich-help.component';
import { EnrichSummaryComponent } from './enrich-help/enrich-summary/enrich-summary.component';
import { EnrichTransformationScriptsComponent } from './enrich-help/enrich-transformation-scripts/enrich-transformation-scripts.component';
import { EnrichLookupValuesComponent } from './enrich-help/enrich-lookup-values/enrich-lookup-values.component';
import { EnrichValueTableComponent } from './enrich-help/enrich-value-table/enrich-value-table.component';
import { EnrichCustomScriptsComponent } from './enrich-help/enrich-custom-scripts/enrich-custom-scripts.component';
import { LoadHelpComponent } from './load-help/load-help.component';
import { DestinationListComponent } from './load-help/destination-list/destination-list.component';
import { LoadLogsComponent } from './load-help/load-logs/load-logs.component';
import { LoadIssuesLogsComponent } from './load-help/load-issues-logs/load-issues-logs.component';
import { AIInsightsComponent } from './ai-insights/ai-insights.component';
import { AnomalyDetectionComponent } from './ai-insights/anomaly-detection/anomaly-detection.component';
import { TrendDetectionComponent } from './ai-insights/trend-detection/trend-detection.component';
import { PortfolioAnalysisComponent } from './ai-insights/portfolio-analysis/portfolio-analysis.component';
import { ForecastingComponent } from './ai-insights/forecasting/forecasting.component';
import { MarketingMixModelComponent } from './ai-insights/marketing-mix-model/marketing-mix-model.component';
import { EffortSuggestionsComponent } from './ai-insights/effort-suggestions/effort-suggestions.component';
import { ManageComponent } from './manage/manage.component';
import { WorkspaceSetupComponent } from './manage/workspace-setup/workspace-setup.component';
import { TimezoneSetupComponent } from './manage/timezone-setup/timezone-setup.component';
import { CurrencySetupComponent } from './manage/currency-setup/currency-setup.component';
import { CalenderSetupComponent } from './manage/calender-setup/calender-setup.component';
import { NumeralsSetupComponent } from './manage/numerals-setup/numerals-setup.component';
import { QuotaSettingsComponent } from './manage/quota-settings/quota-settings.component';
import { DisplaySettingsComponent } from './manage/display-settings/display-settings.component';
import { TemplatesComponent } from './manage/templates/templates.component';
import { UserComponent } from './manage/user/user.component';
import { DataGovernanceComponent } from './manage/data-governance/data-governance.component';
import { ChildWorkspaceComponent } from './manage/child-workspace/child-workspace.component';
import { UsageHistoryComponent } from './manage/usage-history/usage-history.component';
import { UsersLogComponent } from './manage/users-log/users-log.component';
import { AlarmsAndAlertsComponent } from './manage/alarms-and-alerts/alarms-and-alerts.component';
import { ChangesLogComponent } from './manage/changes-log/changes-log.component';
import { EmailsComponent } from './manage/emails/emails.component';
import { ThresholdIntensityComponent } from './manage/threshold-intensity/threshold-intensity.component';
import { MappingConfigurationComponent } from './manage/mapping-configuration/mapping-configuration.component';
import { GovernComponent } from './govern/govern.component';
import { IdentityControlComponent } from './govern/identity-control/identity-control.component';
import { PasswordControlComponent } from './govern/password-control/password-control.component';
import { AccessLockingComponent } from './govern/access-locking/access-locking.component';
import { MultiFactorAuthenticationComponent } from './govern/multi-factor-authentication/multi-factor-authentication.component';
import { RiskBasedAuthenticationComponent} from './govern/risk-based-authentication/risk-based-authentication.component';
import { UserListComponent } from './govern/user-list/user-list.component';
import { UserRoleComponent } from './govern/user-role/user-role.component';
import { PublishComponent } from './publish/publish.component';
import { CreateDashboardComponent } from './publish/create-dashboard/create-dashboard.component';
import { DigitalDashboardComponent } from './publish/digital-dashboard/digital-dashboard.component';
import { SalesPerformanceDashboardComponent } from './publish/sales-performance-dashboard/sales-performance-dashboard.component';
import { MarketingDashboardComponent } from './publish/marketing-dashboard/marketing-dashboard.component';
import { SocialMediaOverviewComponent } from './publish/social-media-overview/social-media-overview.component';
import { CreateDashboardsCycleComponent } from './publish/create-dashboards-cycle/create-dashboards-cycle.component';
import { CDGetStartedComponent } from './publish/create-dashboards-cycle/cdget-started/cdget-started.component';
import { CDKpiLibraryComponent } from './publish/create-dashboards-cycle/cdkpi-library/cdkpi-library.component';
import { CDPreBuiltContentComponent } from './publish/create-dashboards-cycle/cdpre-built-content/cdpre-built-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { AnalysisDashboardFeatureComponent } from './analyze/analysis-dashboard-feature/analysis-dashboard-feature.component';
import { CustomDashboardFeatureComponent } from './dashboard/custom-dashboard-feature/custom-dashboard-feature.component';
import { ScrollTargetComponent } from './scroll-target/scroll-target.component';
import { TemplatesHelpComponent } from './templates-help/templates-help.component';
import { TemplateComponent } from './templates-help/template/template.component';


const routes: Routes = [
  { path: '', redirectTo: '',pathMatch:'full' },
  { path:'',component:HelpDocComponent, 
  children:[
  { path:'helpHome',component:HelpHomeComponent},
  {
    path:'extract',component:ExtractHelpComponent,
children:[
  { path:'summary',component:SummaryComponent},
  { path:'connectionslist',component:ConnectionsListComponent},
  { path:'sourcelist',component:SourceListComponent},
  { path:'extractlog',component:ExtractLogsComponent},
  { path:'issueslog',component:IssuesLogsComponent},
  { path:'pipeline',component:PipelinsComponent}
],
  },
  { path:'addnewdatastreamhelp',component:AddNewDatastreamHelpComponent,
  children:[
    { path: '', redirectTo: 'fsssconnectortype', pathMatch:'full' },
    // {path:'filesystemandstorage',component:FileSystemAndStorageServicesComponent},
    { path:'fsssconnectortype',component:FsssConnectorTypeComponent},
    { path:'fsssdescription',component:FsssDescriptionComponent},
    { path:'fssstemplate',component:FsssTemplateComponent},
    { path:'fsssconfiguration',component:FsssConfigurationComponent},
    { path:'DBMS',component:DBMSComponent},
    { path:'DBMSconnectortype',component:DBMSConnectorTypeComponent},
    { path:'DBMSdescription',component:DBMSDescriptionComponent},
    { path:'DBMStemplate',component:DBMSTemplateComponent},
    { path:'DBMSconfiguration',component:DBMSConfigurationComponent},
    { path:'businessplatformandapi',component:BusinessPlatformsAndApisComponent},
    { path:'bpaconnectortype',component:BpaConnectorTypeComponent},
    { path:'bpadescription',component:BpaDescriptionComponent},
    { path:'bpatemplate',component:BpaTemplateComponent},
    { path:'bpaconfiguration',component:BpaConfigurationComponent},
    ],
  },
  
  {
  path:'enrich',component:EnrichHelpComponent,
    children:[
    { path:'summary',component:EnrichSummaryComponent},
    { path:'transformationscripts',component:EnrichTransformationScriptsComponent},
    { path:'lookupvalues',component:EnrichLookupValuesComponent},
    { path:'valuetables',component:EnrichValueTableComponent},
    { path:'customscripts',component:EnrichCustomScriptsComponent},
  ],
  },
  {
    path:'load',component:LoadHelpComponent,
      children:[
      { path:'destinationlist',component:DestinationListComponent},
      { path:'loadlogs',component:LoadLogsComponent},
      { path:'issueslogs',component:LoadIssuesLogsComponent},
    ],
    },
    {
      path:'aiinsight',component:AIInsightsComponent,
        children:[
        { path:'anomalydetection',component:AnomalyDetectionComponent},
        { path:'trenddetection',component:TrendDetectionComponent},
        { path:'portfolioanalysis',component:PortfolioAnalysisComponent},
        { path:'forecasting',component:ForecastingComponent},
        { path:'effortsugestion',component:EffortSuggestionsComponent},
        { path:'marketingmixmodel',component:MarketingMixModelComponent},
      ],
      },
      {
        path:'manage',component:ManageComponent,
          children:[
            { path: '', redirectTo: 'workspaceSetup', pathMatch:'full' },
          { path:'workspaceSetup',component:WorkspaceSetupComponent},
          { path:'currencySetup',component:CurrencySetupComponent},
          { path:'TimezoneSetup',component:TimezoneSetupComponent},
          { path:'NumeralsSetup',component:NumeralsSetupComponent},
          { path:'CalenderSetup',component:CalenderSetupComponent},
          { path:'QuotaSettings',component:QuotaSettingsComponent},
          { path:'DisplaySettings',component:DisplaySettingsComponent},
          { path:'Templates',component:TemplatesComponent},
          { path:'User',component:UserComponent},
          { path:'DataGovernance',component:DataGovernanceComponent},
          { path:'ChildWorkspace',component:ChildWorkspaceComponent},
          { path:'UsageHistory',component:UsageHistoryComponent},
          { path:'UsersLog',component:UsersLogComponent},
          { path:'ChangesLog',component:ChangesLogComponent},
          { path:'AlarmsAndAlerts',component:AlarmsAndAlertsComponent},
          { path:'Emails',component:EmailsComponent},
          { path:'ThresholdIntensity',component:ThresholdIntensityComponent},
          { path:'MappingConfiguration',component:MappingConfigurationComponent}
        ],
        },
        {
          path:'govern',component:GovernComponent,
            children:[
              { path: '', redirectTo: 'IdentityControl', pathMatch:'full' },
            { path:'IdentityControl',component:IdentityControlComponent},
            { path:'PasswordControl',component:PasswordControlComponent},
            { path:'AccessLocking',component:AccessLockingComponent},
            { path:'MFA',component:MultiFactorAuthenticationComponent},
            { path:'RBA',component:RiskBasedAuthenticationComponent},
            { path:'UserList',component:UserListComponent},
            { path:'UserRole',component:UserRoleComponent},
          ],
          },
          {
            path:'publish',component:PublishComponent,
              children:[
                { path: '', redirectTo:'createDashboard', pathMatch:'full' },
              { path:'createDashboard',component:CreateDashboardComponent},
              { path:'DigitalDashboard',component:DigitalDashboardComponent},
              { path:'SalesPerformanceDashboard',component:SalesPerformanceDashboardComponent},
              { path:'MarketingDashboard',component:MarketingDashboardComponent},
              { path:'SocialMediaOverview',component:SocialMediaOverviewComponent},
            ],
            },
            {
              path:'CreateDashboardsCycle',component:CreateDashboardsCycleComponent,
                children:[
                  { path: '', redirectTo:'CDGetStarted', pathMatch:'full' },
                { path:'CDGetStarted',component:CDGetStartedComponent},
                { path:'CDKpiLibrary',component:CDKpiLibraryComponent},
                { path:'CDPreBuiltContent',component:CDPreBuiltContentComponent},
              ],
              },
              {
                path:'Analyze',component:AnalyzeComponent,
                  children:[
                    { path: '', redirectTo:'AnalysisDashboardFeature', pathMatch:'full' },
                    { path:'AnalysisDashboardFeature',component:AnalysisDashboardFeatureComponent},
                ],
                },
              {
                path:'Dashboard',component:DashboardComponent,
                  children:[
                    { path: '', redirectTo:'CustomDashboardFeature', pathMatch:'full' },
                    { path:'CustomDashboardFeature',component:CustomDashboardFeatureComponent},
                ],
                },
{
  path:'template', component:TemplatesHelpComponent,
  children:[
{path:'' , redirectTo: 'subTemplate', pathMatch:'full'},
{path:'subTemplate',component:TemplateComponent}
  ]
},
                
{path:'ScrollTarget', component:ScrollTargetComponent},


  ]},
    { path: '**', redirectTo: 'help-home' },
    
]; 

// const routes: Routes = [];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class HelpDocRoutingModule { }
