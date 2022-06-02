import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractRoutingModule } from './extract-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ConnectComponent } from './connect.component';
import { HomeComponent } from './home/home.component';
import { DataStreamComponent } from './data-stream/data-stream.component';
import { AllExtractsComponent } from './all-extracts/all-extracts.component';
import { AllIssuesComponent } from './all-issues/all-issues.component';
import { AllConnectionsComponent } from './all-connections/all-connections.component';
import { ConnectFiltersComponent } from './connect-filters/connect-filters.component';
import { WidgetModule } from '../widget/widget.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ConnectorsComponent } from './connectors/connectors.component';
import { OverviewAllComponent } from './connectors/overview-all/overview-all.component';
import { InstagramConfigurationComponent } from './connectors/Instagram/instagram-configuration/instagram-configuration.component';
import { LocalDataRetentionComponent } from './connectors/Instagram/local-data-retention/local-data-retention.component';
import { PrimaryStorageComponent } from './connectors/Instagram/primary-storage/primary-storage.component';
import { MappingRulesComponent } from './connectors/Instagram/mapping-rules/mapping-rules.component';
import { SecondaryStorageComponent } from './connectors/Instagram/secondary-storage/secondary-storage.component';
import { SetupNewConnectionComponent } from './AddNewDataStream/setup-new-connection/setup-new-connection.component';
import { DatastreamSqlComponent } from './AddNewDataStream/datastream-sql/datastream-sql.component';
import { TempletForConnectionComponent } from './AddNewDataStream/templet-for-connection/templet-for-connection.component';
import { SourceObjectComponent } from './AddNewDataStream/source-object/source-object.component';
import { ExecutionPlanComponent } from './AddNewDataStream/execution-plan/execution-plan.component';
import { ExtractComponent } from './AddNewDataStream/extract/extract.component';
import { FieldsSelectionComponent } from './AddNewDataStream/fields-selection/fields-selection.component';
import { FiltersComponent } from './AddNewDataStream/filters/filters.component';
import { NewDataStreamComponent } from './AddNewDataStream/new-data-stream/new-data-stream.component';
import { SelectDataStreamComponent } from './AddNewDataStream/select-data-stream/select-data-stream.component';
import { SideBarComponent } from './AddDatastreamSideBar/side-bar/side-bar.component';
import { ConnectionPagesDirective } from '../../shared/directives/connection-pages.directive';
import { MongoDbSettupComponent } from './DataBase/mongo-db-settup/mongo-db-settup.component';
import { FilesUploadeComponent } from './Filse/files-uploade/files-uploade.component';
import { FBPublicPageComponent } from './Social-media/facebook/fbpublic-page/fbpublic-page.component';
import { ConnectorTypesComponent } from './AddNewConnection/connector-types/connector-types.component';
import { ConfigurationComponent } from './AddNewConnection/configuration/configuration.component';
import { DescriptionComponent } from './AddNewConnection/description/description.component';
import { MainComponentComponent } from './AddNewConnection/NewConnectionMainComponent/main-component/main-component.component';
import { SideWizardMenuComponent } from './AddNewConnection/side-wizard-menu/side-wizard-menu.component';
import { SourceAccountSettupComponent } from './AddNewConnection/source-account-settup/source-account-settup.component';
import { SummaryPageComponent } from './AddNewConnection/summary-page/summary-page.component';
import { TemplateComponent } from './AddNewConnection/template/template.component';
import { SelectDestinationComponent } from './Destination/bodycontent/destinationtype/select-destination/select-destination.component';
import { DestinationComponent } from './Destination/bodycontent/destination/destination.component';
import { SidemenuComponent } from './Destination/bodycontent/sidemenu/sidemenu.component';
import { DesTemplateComponent } from './Destination/bodycontent/des-template/des-template.component';
import { DesDescriptionComponent } from './Destination/bodycontent/des-description/des-description.component';
import { DesConfigurationComponent } from './Destination/bodycontent/des-configuration/des-configuration.component';
import { LoadConnectorsDirective } from './load-connectors.directive';
 

@NgModule({
  declarations: [
    ConnectComponent,
    HomeComponent,
    DataStreamComponent,
    AllExtractsComponent,
    AllIssuesComponent, 
    AllConnectionsComponent,
    ConnectFiltersComponent,
    ConnectorsComponent,OverviewAllComponent,
    InstagramConfigurationComponent,
    LocalDataRetentionComponent,
    PrimaryStorageComponent,
    SecondaryStorageComponent,
    MappingRulesComponent,
    DatastreamSqlComponent,
    ExecutionPlanComponent,
    ExtractComponent,
    FieldsSelectionComponent,
    FiltersComponent,
    NewDataStreamComponent,
    SelectDataStreamComponent,
    SetupNewConnectionComponent,
    SourceObjectComponent,
    TempletForConnectionComponent,
    SideBarComponent,
    ConnectionPagesDirective,
    MongoDbSettupComponent,
    SetupNewConnectionComponent,
    FilesUploadeComponent,
    FBPublicPageComponent,
    ConnectorTypesComponent,
    ConfigurationComponent,
    DescriptionComponent,
    MainComponentComponent,
    SideWizardMenuComponent,
    SourceAccountSettupComponent,
    SummaryPageComponent,
    TemplateComponent,
    SelectDestinationComponent,
    DestinationComponent,
    SidemenuComponent,
    DesTemplateComponent,
    DesDescriptionComponent,
    DesConfigurationComponent,
    LoadConnectorsDirective

  ],
  imports: [
    SharedModule,
    CommonModule,
    ExtractRoutingModule,
    WidgetModule,
    NgSelectModule,
    FormsModule,
    SharedModule,
  ],
  entryComponents:[
    MongoDbSettupComponent,
    SetupNewConnectionComponent,
    FilesUploadeComponent,
    FBPublicPageComponent,
  ]
})
export class ExtractModule { }
