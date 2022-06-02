import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimeLineComponent } from './time-line.component';



const routes: Routes = [
  { path: 'main', component:TimeLineComponent,
  // children:[
  //   {path:'createdashBoard', component:CreateDashboardComponent}, 
  // ]
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
export class TimeLineRoutingModule { }
