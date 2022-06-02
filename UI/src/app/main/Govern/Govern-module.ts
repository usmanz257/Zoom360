import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { IdentityAndAccessManagementComponent } from './identity-and-access-management/identity-and-access-management.component';
import { IdentityControlComponent } from './identity-and-access-management/identity-control/identity-control.component';
import { PasswordControlComponent } from './identity-and-access-management/password-control/password-control.component';
import { AccessLockingComponent } from './identity-and-access-management/access-locking/access-locking.component';
import { RiskbasedAuthenticatioComponent } from './identity-and-access-management/riskbased-authenticatio/riskbased-authenticatio.component';
import { MultiFactorAuthenticationComponent } from './identity-and-access-management/multi-factor-authentication/multi-factor-authentication.component';
import { GovernRoutingModule } from './Govern-routing.module';
import { GovernComponent } from './govern.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CreateUserProfileComponent } from './user-management/create-user-profile/create-user-profile.component';
import { CreateUserPasswordComponent } from './user-management/create-user-password/create-user-password.component';
import { UserNotficationSettingComponent } from './user-management/user-notfication-setting/user-notfication-setting.component';
import { UserSettingsComponent } from './user-management/user-settings/user-settings.component';
import { UserPermissionsComponent } from './user-management/user-permissions/user-permissions.component';
import { UserRestrictionsComponent } from './user-management/user-restrictions/user-restrictions.component';
import { EJAngular2Module } from 'ej-angular2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule, DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { WidgetModule } from '../widget/widget.module';

// import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
// import { ButtonModule } from '@syncfusion/ej2-angular-buttons/src/button/button.module';

@NgModule({
  declarations: [
    GovernComponent,
    IdentityAndAccessManagementComponent,
    IdentityControlComponent,
    PasswordControlComponent,
    AccessLockingComponent,
    RiskbasedAuthenticatioComponent,
    MultiFactorAuthenticationComponent,
    UsersListComponent,
    UserManagementComponent,
    CreateUserProfileComponent,
    CreateUserPasswordComponent,
    UserNotficationSettingComponent,
    UserSettingsComponent,
    UserPermissionsComponent,
    UserRestrictionsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    WidgetModule,
    GovernRoutingModule,
    EJAngular2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    //ToastModule,
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    DropDownTreeModule,
    DropDownListModule,
    UploaderModule
  ]
})
export class GovernModule { }
