import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    ToastModule,
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    DropDownListModule
  ]
})
export class AuthModule { }
