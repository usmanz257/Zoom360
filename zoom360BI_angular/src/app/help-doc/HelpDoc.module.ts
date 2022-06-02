import { SharedModule } from './../shared/shared.module';
import { HelpDocComponent } from './HelpDoc.component';
import { NgModule } from '@angular/core';
import { HelpDocRoutingModule } from './HelpDoc-routing.module';

import { ExtractHelpComponent } from './extract-help/extract-help.component';
import { SummaryComponent } from './extract-help/summary/summary.component';
import { ConnectionsListComponent } from './extract-help/connections-list/connections-list.component';
import { SourceListComponent } from './extract-help/source-list/source-list.component';
import { ExtractLogsComponent } from './extract-help/extract-logs/extract-logs.component';
import { IssuesLogsComponent } from './extract-help/issues-logs/issues-logs.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { AddNewDatastreamHelpComponent } from './add-new-datastream-help/add-new-datastream-help.component';
import { PipelinsComponent } from './extract-help/pipelins/pipelins.component';
import { DBMSConfigurationComponent } from './add-new-datastream-help/configuration/DBMS-configuration/dbms-configuration.component';
import { DBMSConnectorTypeComponent } from './add-new-datastream-help/conector-type/dbms-connector-type/dbms-connector-type.component';
import { DBMSComponent } from './add-new-datastream-help/dbms/dbms.component';
import { BusinessPlatformsAndApisComponent } from './add-new-datastream-help/business-platforms-and-apis/business-platforms-and-apis.component';
import { FsssConnectorTypeComponent } from './add-new-datastream-help/conector-type/fsss-connector-type/fsss-connector-type.component';
import { FsssTemplateComponent } from './add-new-datastream-help/template/fsss-template/fsss-template.component';
import { EnrichHelpComponent } from './enrich-help/enrich-help.component';
import { DBMSDescriptionComponent } from './add-new-datastream-help/description/dbms-description/dbms-description.component';
import { FsssDescriptionComponent } from './add-new-datastream-help/description/fsss-description/fsss-description.component';
import { FsssConfigurationComponent } from './add-new-datastream-help/configuration/fsss-configuration/fsss-configuration.component';
import { BpaConnectorTypeComponent } from './add-new-datastream-help/conector-type/bpa-connector-type/bpa-connector-type.component';
import { BpaTemplateComponent } from './add-new-datastream-help/template/bpa-template/bpa-template.component';
import { BpaDescriptionComponent } from './add-new-datastream-help/description/bpa-description/bpa-description.component';
import { BpaConfigurationComponent } from './add-new-datastream-help/configuration/bpa-configuration/bpa-configuration.component';
import { EnrichSummaryComponent } from './enrich-help/enrich-summary/enrich-summary.component';
import { EnrichTransformationScriptsComponent } from './enrich-help/enrich-transformation-scripts/enrich-transformation-scripts.component';
import { EnrichLookupValuesComponent } from './enrich-help/enrich-lookup-values/enrich-lookup-values.component';
import { EnrichValueTableComponent } from './enrich-help/enrich-value-table/enrich-value-table.component';
import { EnrichCustomScriptsComponent } from './enrich-help/enrich-custom-scripts/enrich-custom-scripts.component';
import { LoadHelpComponent } from './load-help/load-help.component';
import { DestinationListComponent } from './load-help/destination-list/destination-list.component';
import { LoadLogsComponent } from './load-help/load-logs/load-logs.component';
import { LoadIssuesLogsComponent } from './load-help/load-issues-logs/load-issues-logs.component';
import { HelpHomeComponent } from './help-home/help-home.component';
import { AIInsightsComponent } from './ai-insights/ai-insights.component';
import { TrendDetectionComponent } from './ai-insights/trend-detection/trend-detection.component';
import { PortfolioAnalysisComponent } from './ai-insights/portfolio-analysis/portfolio-analysis.component';
import { ForecastingComponent } from './ai-insights/forecasting/forecasting.component';
import { AnomalyDetectionComponent } from './ai-insights/anomaly-detection/anomaly-detection.component';
import { EffortSuggestionsComponent } from './ai-insights/effort-suggestions/effort-suggestions.component';
import { MarketingMixModelComponent } from './ai-insights/marketing-mix-model/marketing-mix-model.component';
import { DBMSTemplateComponent } from './add-new-datastream-help/template/DBMS-template/dbms-template.component';
import { ManageComponent } from './manage/manage.component';
import { WorkspaceSetupComponent } from './manage/workspace-setup/workspace-setup.component';
import { CurrencySetupComponent } from './manage/currency-setup/currency-setup.component';
import { TimezoneSetupComponent } from './manage/timezone-setup/timezone-setup.component';
import { NumeralsSetupComponent } from './manage/numerals-setup/numerals-setup.component';
import { CalenderSetupComponent } from './manage/calender-setup/calender-setup.component';
import { QuotaSettingsComponent } from './manage/quota-settings/quota-settings.component';
import { DisplaySettingsComponent } from './manage/display-settings/display-settings.component';
import { TemplatesComponent } from './manage/templates/templates.component';
import { UserComponent } from './manage/user/user.component';
import { DataGovernanceComponent } from './manage/data-governance/data-governance.component';
import { ChildWorkspaceComponent } from './manage/child-workspace/child-workspace.component';
import { UsageHistoryComponent } from './manage/usage-history/usage-history.component';
import { UsersLogComponent } from './manage/users-log/users-log.component';
import { ChangesLogComponent } from './manage/changes-log/changes-log.component';
import { AlarmsAndAlertsComponent } from './manage/alarms-and-alerts/alarms-and-alerts.component';
import { EmailsComponent } from './manage/emails/emails.component';
import { ThresholdIntensityComponent } from './manage/threshold-intensity/threshold-intensity.component';
import { MappingConfigurationComponent } from './manage/mapping-configuration/mapping-configuration.component';
import { IdentityControlComponent } from './govern/identity-control/identity-control.component';
import { PasswordControlComponent } from './govern/password-control/password-control.component';
import { AccessLockingComponent } from './govern/access-locking/access-locking.component';
import { MultiFactorAuthenticationComponent } from './govern/multi-factor-authentication/multi-factor-authentication.component';
import { RiskBasedAuthenticationComponent } from './govern/risk-based-authentication/risk-based-authentication.component';
import { UserListComponent } from './govern/user-list/user-list.component';
import { UserRoleComponent } from './govern/user-role/user-role.component';
import { GovernComponent } from './govern/govern.component';
import { PublishComponent } from './publish/publish.component';
import { CreateDashboardComponent } from './publish/create-dashboard/create-dashboard.component';
import { DigitalDashboardComponent } from './publish/digital-dashboard/digital-dashboard.component';
import { SalesPerformanceDashboardComponent } from './publish/sales-performance-dashboard/sales-performance-dashboard.component';
import { MarketingDashboardComponent } from './publish/marketing-dashboard/marketing-dashboard.component';
import { SocialMediaOverviewComponent } from './publish/social-media-overview/social-media-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateDashboardsCycleComponent } from './publish/create-dashboards-cycle/create-dashboards-cycle.component';
import { CDKpiLibraryComponent } from './publish/create-dashboards-cycle/cdkpi-library/cdkpi-library.component';
import { CDPreBuiltContentComponent } from './publish/create-dashboards-cycle/cdpre-built-content/cdpre-built-content.component';
import { CDGetStartedComponent } from './publish/create-dashboards-cycle/cdget-started/cdget-started.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { AnalysisDashboardFeatureComponent } from './analyze/analysis-dashboard-feature/analysis-dashboard-feature.component';
import { CustomDashboardFeatureComponent } from './dashboard/custom-dashboard-feature/custom-dashboard-feature.component';
import { ScrollTargetComponent } from './scroll-target/scroll-target.component';
import { TemplatesHelpComponent } from './templates-help/templates-help.component';
import { TemplateComponent } from './templates-help/template/template.component';
@NgModule({
  declarations: [
    HelpDocComponent,
    ExtractHelpComponent,
    SummaryComponent,
    ConnectionsListComponent,
    SourceListComponent,
    ExtractLogsComponent,
    IssuesLogsComponent,
    HeaderFooterComponent,
    AddNewDatastreamHelpComponent,
    PipelinsComponent,
    DBMSComponent,
    BusinessPlatformsAndApisComponent,
    DBMSConfigurationComponent,
    DBMSDescriptionComponent,
    DBMSConnectorTypeComponent,
    DBMSTemplateComponent,
    FsssConnectorTypeComponent,
    FsssDescriptionComponent,
    FsssTemplateComponent,
    FsssConfigurationComponent,
    EnrichHelpComponent,
    BpaConnectorTypeComponent,
    BpaTemplateComponent,
    BpaDescriptionComponent,
    BpaConfigurationComponent,
    EnrichSummaryComponent,
    EnrichTransformationScriptsComponent,
    EnrichLookupValuesComponent,
    EnrichValueTableComponent,
    EnrichCustomScriptsComponent,
    LoadHelpComponent,
    DestinationListComponent,
    LoadLogsComponent,
    LoadIssuesLogsComponent,
    HelpHomeComponent,
    AIInsightsComponent,
    TrendDetectionComponent,
    PortfolioAnalysisComponent,
    ForecastingComponent,
    AnomalyDetectionComponent,
    EffortSuggestionsComponent,
    MarketingMixModelComponent,
    ManageComponent,
    WorkspaceSetupComponent,
    CurrencySetupComponent,
    TimezoneSetupComponent,
    NumeralsSetupComponent,
    CalenderSetupComponent,
    QuotaSettingsComponent,
    DisplaySettingsComponent,
    TemplatesComponent,
    UserComponent,
    DataGovernanceComponent,
    ChildWorkspaceComponent,
    UsageHistoryComponent,
    UsersLogComponent,
    ChangesLogComponent,
    AlarmsAndAlertsComponent,
    EmailsComponent,
    ThresholdIntensityComponent,
    MappingConfigurationComponent,
    IdentityControlComponent,
    PasswordControlComponent,
    AccessLockingComponent,
    MultiFactorAuthenticationComponent,
    RiskBasedAuthenticationComponent,
    UserListComponent,
    UserRoleComponent,
    GovernComponent,
    PublishComponent,
    CreateDashboardComponent,
    DigitalDashboardComponent,
    SalesPerformanceDashboardComponent,
    MarketingDashboardComponent,
    SocialMediaOverviewComponent,
    DashboardComponent,
    CreateDashboardsCycleComponent,
    CDKpiLibraryComponent,
    CDPreBuiltContentComponent,
    CDGetStartedComponent,
    AnalyzeComponent,
    AnalysisDashboardFeatureComponent,
    CustomDashboardFeatureComponent,
    ScrollTargetComponent,
    TemplatesHelpComponent,
    TemplateComponent

  ],
  imports: [
    SharedModule,
    HelpDocRoutingModule
  ]
})
export class HelpDocModule { }
