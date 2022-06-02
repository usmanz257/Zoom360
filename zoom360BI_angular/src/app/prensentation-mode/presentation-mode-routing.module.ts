import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrensentationModeComponent } from './prensentation-mode.component';

// const routes: Routes = [
//   { path: 'Presentation', component:PrensentationModeComponent,
//     children:[
//       { path: 'kpiachivements', component:ChannelsComponent,
//     },
//     { path: 'kpiachivements1', component:PerformancedashboardComponent,
//     },
//     { path: 'kpiachivements2', component:MarketingDashboardComponent,
//   }
//     ]
//   }
 
// ]


const routes: Routes = [
  { path: '', redirectTo: 'PresentMain',pathMatch:'full' },
  {path:'PresentMain',component:PrensentationModeComponent,
  children:[
    { path: '', redirectTo: 'kpi',pathMatch:'full' },
  {
    path: 'kpi',
    loadChildren: () => import('./KPIAchivements/KPIAchivements.module').then(m => m.KPIAchivementsModule)
  },
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
export class PrensentationModeRoutingModule { }
