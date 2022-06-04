import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevealDashboardComponent } from './reveal-dashboard/reveal-dashboard.component';

import { RevealComponent } from './reveal.component';

const routes: Routes = [
  { path: '', redirectTo: 'reveal',pathMatch:'full' },
  
  {path: 'reveal', component: RevealComponent,
  children: [
    { path: '', redirectTo:'revealDasboard', pathMatch:'full'},
  {path:'revealDasboard',component:RevealDashboardComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevealRoutingModule { }
