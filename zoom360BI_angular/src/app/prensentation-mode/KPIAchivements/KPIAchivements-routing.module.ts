import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KPIAchivementsComponent } from './KPIAchivements.component';
import { KpiLibraryComponent } from '../../main/publish/publish-dash-board/kpi-library/kpi-library.component';
import { ChannelsComponent } from 'src/app/main/publish/channels/channels.component';
import { PerformancedashboardComponent } from 'src/app/main/publish/performancedashboard/performancedashboard.component';
import { MarketingDashboardComponent } from 'src/app/Charts/ChartsDashBoard/marketing-dashboard/marketing-dashboard.component';
import { PublishModule } from 'src/app/main/publish/publish.module';
import { DarkthemeDashboardComponent } from 'src/app/Charts/ChartsDashBoard/darktheme-dashboard/darktheme-dashboard.component';

const routes: Routes = [
  { path: 'achivements', component:KPIAchivementsComponent,
  children:[
    { path: 'digitalsalesdashboard', component:ChannelsComponent,
  },
  { path: 'performancedashboard', component:PerformancedashboardComponent,
  },
  { path: 'marketingdashboard', component:MarketingDashboardComponent,
},
{ path: 'darkthemedashboard', component:DarkthemeDashboardComponent,
}
  ]
  }

]
// const routes: Routes = [];
@NgModule({
  declarations: [],
  imports: [
     CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule,PublishModule]
})
export class KPIAchivementsRoutingModule { }
