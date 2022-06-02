import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect.component';
import { HomeComponent } from './home/home.component';
import { AllExtractsComponent } from './all-extracts/all-extracts.component';
import { DataStreamComponent } from './data-stream/data-stream.component';
import { AllIssuesComponent } from './all-issues/all-issues.component';
import { AllConnectionsComponent } from './all-connections/all-connections.component';
import { ConnectorsComponent } from './connectors/connectors.component';
import { OverviewAllComponent } from './connectors/overview-all/overview-all.component';
import { InstagramConfigurationComponent } from './connectors/Instagram/instagram-configuration/instagram-configuration.component';
import { LocalDataRetentionComponent } from './connectors/Instagram/local-data-retention/local-data-retention.component';
import { PrimaryStorageComponent } from './connectors/Instagram/primary-storage/primary-storage.component';
import { MappingRulesComponent } from './connectors/Instagram/mapping-rules/mapping-rules.component';
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
import { ConnectorTypesComponent } from './AddNewConnection/connector-types/connector-types.component';
import { DescriptionComponent } from './AddNewConnection/description/description.component';
import { MainComponentComponent } from './AddNewConnection/NewConnectionMainComponent/main-component/main-component.component';
import { SourceAccountSettupComponent } from './AddNewConnection/source-account-settup/source-account-settup.component';
import { SummaryPageComponent } from './AddNewConnection/summary-page/summary-page.component';
import { TemplateComponent } from './AddNewConnection/template/template.component';
import { SelectDestinationComponent } from './Destination/bodycontent/destinationtype/select-destination/select-destination.component';
import { DestinationComponent } from './Destination/bodycontent/destination/destination.component';
import { DesTemplateComponent } from './Destination/bodycontent/des-template/des-template.component';
import { DesDescriptionComponent } from './Destination/bodycontent/des-description/des-description.component';
import { DesConfigurationComponent } from './Destination/bodycontent/des-configuration/des-configuration.component';
import { UserRightsGuardService } from 'src/app/guards/user-rights-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'extraction',pathMatch:'full' },
  { path: 'extraction',component:ConnectComponent,
    children: [
    { path: '', redirectTo: 'summary',pathMatch:'full' },
    { path: 'summary', component: HomeComponent},
    { path: 'sourceslist', component: DataStreamComponent},
    { path: 'extractlogs', component: AllExtractsComponent},
    { path: 'issueslogs', component: AllIssuesComponent},
    { path: 'connectionslist', component: AllConnectionsComponent,canActivate:[UserRightsGuardService]}
  ]

  },
  { path: 'source', component: ConnectorsComponent,
  children:[
    {path: '', redirectTo:'overview', pathMatch:'full'},
    { path: 'overview', component: OverviewAllComponent},
    { path: 'configuration', component: InstagramConfigurationComponent},
    { path: 'dataretention', component: LocalDataRetentionComponent},
    { path: 'allextracts', component: AllExtractsComponent},
    { path: 'allissue', component: AllIssuesComponent}, 
    { path: 'primerystorage', component: PrimaryStorageComponent},
    { path: 'seconderystorage', component: PrimaryStorageComponent},
    { path: 'mappingrules', component: MappingRulesComponent}
  ]  
},

{ path:'AddnewDataStream',component:NewDataStreamComponent,
    children:[
    { path:'SelectType',component:SelectDataStreamComponent
    },
  { path:'Micr',component:DatastreamSqlComponent
  },
  { path:'Templet',component:TempletForConnectionComponent
  },
  { path:'SourceObject',component:SourceObjectComponent
  },
  { path:'Filters',component:FiltersComponent
  },
  { path:'FieldsSelection',component:FieldsSelectionComponent
  },
  { path:'ExecutionPlan',component:ExecutionPlanComponent
  },
  { path:'Extract',component:ExtractComponent
  },
  { path:'NewConnections',component:SetupNewConnectionComponent
  },
  ]
  },

  { path:'AddNewConnection',component:MainComponentComponent,
  children:[
 { path:'ConnectorType',component:ConnectorTypesComponent},
 { path:'description',component:DescriptionComponent},
 { path:'Template',component:TemplateComponent},
 { path:'Configuration',component:SourceAccountSettupComponent},
 { path:'ViewdataSummary',component:SummaryPageComponent},
//  { path:'Configuration',component:ConfigurationComponent},
  ]
 },


///destination routes

 {path:'destination',component:DestinationComponent,
children:[

  { path:'Type',component:SelectDestinationComponent},
  { path:'description',component:DesDescriptionComponent},
  { path:'Template',component:DesTemplateComponent},
  { path:'configration',component:DesConfigurationComponent},
 
]



},
{path:'',redirectTo:'extraction/summary'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ExtractRoutingModule { }
