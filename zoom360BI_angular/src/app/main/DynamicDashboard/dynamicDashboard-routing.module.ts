import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDashboardComponent } from './dynamicDashboard.component';



const routes: Routes = [
  { path: 'customdashboard', component:DynamicDashboardComponent,
  children:[
  
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
export class DynamicDashboardRoutingModule { }