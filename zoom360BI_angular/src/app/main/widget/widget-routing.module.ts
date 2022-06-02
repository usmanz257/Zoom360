import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StatusErrorComponent } from './status-error/status-error.component';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
   

  ]
})
export class WidgetRoutingModule { }
