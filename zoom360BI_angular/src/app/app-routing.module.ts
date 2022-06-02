import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationStartupComponent } from './main/application-startup/application-startup.component';
import { AuthGuard } from './guards/auth.guard';
import { StatusErrorComponent } from './main/widget/status-error/status-error.component';


const routes: Routes = [
  
  {path:'home', component:ApplicationStartupComponent},

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [AuthGuard]
  },
  {
    path: 'presentationMode',
    loadChildren: () => import('./prensentation-mode/presntation-mode.module').then(m => m.PrensentationModeModule), canActivate: [AuthGuard]
  },
  {
    path: 'timeline',
    loadChildren: () => import('./main/time-line/time-line.module').then(m => m.TimeLineModule),canActivate: [AuthGuard]
  },
  {
    path: 'help',
    loadChildren: () => import('./help-doc/HelpDoc.module').then(m => m.HelpDocModule),canActivate: [AuthGuard]
  },
 // {path:'status', component:StatusErrorComponent},
 // { path: '**', redirectTo: 'auth/login' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

