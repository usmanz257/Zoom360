import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublishComponent } from './publish.component';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
import { ChannelsComponent } from './channels/channels.component';
import { PublishDashBoardComponent } from './publish-dash-board/publish-dash-board.component';
import { GetStartedComponent } from './publish-dash-board/get-started/get-started.component';
import { PreBuiltComponent } from './publish-dash-board/pre-built/pre-built.component';
import { KpiLibraryComponent } from './publish-dash-board/kpi-library/kpi-library.component';
import { PerformancedashboardComponent } from './performancedashboard/performancedashboard.component';
import { EcommercedashboardComponent } from './ecommercedashboard/ecommercedashboard.component';
import { GridsterDashboardComponent } from './gridster-dashboard/gridster-dashboard.component';
import { MarketingDashboardComponent } from 'src/app/Charts/ChartsDashBoard/marketing-dashboard/marketing-dashboard.component';
import { DarkthemeDashboardComponent } from 'src/app/Charts/ChartsDashBoard/darktheme-dashboard/darktheme-dashboard.component';
import { DemoDashboardAComponent } from 'src/app/Charts/ChartsDashBoard/demo-dashboard-a/demo-dashboard-a.component';
import { ChartSelectListComponent } from 'src/app/Charts/ChartsDashBoard/chart-select-list/chart-select-list.component';



const routes: Routes = [
  {path: '', redirectTo:'publisheddashboard', pathMatch:'full'},
  { path: 'publisheddashboard', component:PublishComponent,
  children:[
    {path: '', redirectTo:'createdashBoard', pathMatch:'full'},
    {path:'createdashBoard', component:CreateDashboardComponent},
   // { path: 'darkthemedashboard', component:DarkthemeDashboardComponent},
   // { path: 'digitalsalesdashboard', component:ChannelsComponent},
    { path: 'performancedashboard', component:PerformancedashboardComponent},
    { path: 'marketingdashboard', component:MarketingDashboardComponent},
    { path: 'darkthemedashboard', component:DarkthemeDashboardComponent},
    { path: 'digitalsalesdashboard', component:DemoDashboardAComponent},
    { path: 'ChartSelectListComponent', component:ChartSelectListComponent},
    
    // { path: 'ecommercedashboard', component:EcommercedashboardComponent},
    // { path: 'gridsterdashboard', component:GridsterDashboardComponent}
  ]
},
{ path: 'createdashboard', component: PublishDashBoardComponent,
children:[
  {path:'getstarted', component:GetStartedComponent},
  {path:'prebuilt', component:PreBuiltComponent},
  {path:'kpilibrary', component:KpiLibraryComponent},
]
},

]
@NgModule({
  declarations: [],
  imports: [
     CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class PublishRoutingModule { }
