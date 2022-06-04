import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UserRightsGuardService } from '../guards/user-rights-guard.service';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'extract',pathMatch:'full' },
  {path:'',component:MainComponent,
  children:[
  {
    path: 'extract',
    loadChildren: () => import('./extract/extract.module').then(m => m.ExtractModule)
  },
  {
    path: 'enrich',
    loadChildren: () => import('./enrich/enrich.module').then(m => m.EnrichModule)
  },
  {
    path: 'analyze',
    loadChildren: () => import('./analyze/analyze.module').then(m => m.AnalyzeModule)
  },
  {
    path: 'manage',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)},
  {
    path: 'publish',
    loadChildren: () => import('./publish/publish.module').then(m => m.PublishModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dynamicDashboard/dynamicDashboard.module').then(m => m.DynamicDashboardModule)
  },
  {
    path: 'aiinsights',
    loadChildren: () => import('./aiinsights/aiinsights.module').then(m => m.aiinsightsModule)
  },
  {
    path: 'govern',
    loadChildren: () => import('./Govern/Govern-module').then(m => m.GovernModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./TreeTemplate/TreeTemplate.module').then(m => m.TreeTemplateModule)
  },
  {
    path: 'Predicts',
    loadChildren: () => import('./Predict/Predict.module').then(m => m.PredictModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./time-line/time-line.module').then(m => m.TimeLineModule),canActivate: [AuthGuard]
  },
  {
    path: 'reveals',
    loadChildren: () => import('./reveal/reveal.module').then(m => m.RevealModule),canActivate: [AuthGuard]
  },
]
},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
