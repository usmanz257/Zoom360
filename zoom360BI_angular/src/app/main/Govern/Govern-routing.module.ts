import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

// import { EJAngular2Module } from 'ej-angular2';
import { UsersListComponent } from './users-list/users-list.component';
import { IdentityAndAccessManagementComponent } from './identity-and-access-management/identity-and-access-management.component';
import { IdentityControlComponent } from './identity-and-access-management/identity-control/identity-control.component';
import { AccessLockingComponent } from './identity-and-access-management/access-locking/access-locking.component';
import { PasswordControlComponent } from './identity-and-access-management/password-control/password-control.component';
import { RiskbasedAuthenticatioComponent } from './identity-and-access-management/riskbased-authenticatio/riskbased-authenticatio.component';
import { MultiFactorAuthenticationComponent } from './identity-and-access-management/multi-factor-authentication/multi-factor-authentication.component';
import { GovernComponent } from './govern.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CreateUserProfileComponent } from './user-management/create-user-profile/create-user-profile.component';
import { CreateUserPasswordComponent } from './user-management/create-user-password/create-user-password.component';
import { UserNotficationSettingComponent } from './user-management/user-notfication-setting/user-notfication-setting.component';
import { UserPermissionsComponent } from './user-management/user-permissions/user-permissions.component';
import { UserRestrictionsComponent } from './user-management/user-restrictions/user-restrictions.component';
import { UserSettingsComponent } from './user-management/user-settings/user-settings.component';
import { TreetemplateComponent } from '../widget/treetemplate/treetemplate.component';
import { StatusErrorComponent } from '../widget/status-error/status-error.component';
import { UserRightsGuardGovernService } from 'src/app/guards/user-rights-guard-govern.service ';

const routes: Routes = [
  {path: '', redirectTo:'accessmanagement', pathMatch:'full'},
  { path: 'accessmanagement', component: GovernComponent,
  children:[
    {path: '', redirectTo:'identityControl', pathMatch:'full'},
    { path: 'identityControl', component: IdentityControlComponent,canActivate:[UserRightsGuardGovernService]},
    { path: 'passwordcontrol', component: PasswordControlComponent,canActivate:[UserRightsGuardGovernService]},
    { path: 'accesslocking', component: AccessLockingComponent,canActivate:[UserRightsGuardGovernService]},
    { path: 'riskbasedauthentication', component: RiskbasedAuthenticatioComponent,canActivate:[UserRightsGuardGovernService]},
    { path: 'multifactorauthentication', component: MultiFactorAuthenticationComponent,canActivate:[UserRightsGuardGovernService]},
    {path:'userslist', component:UsersListComponent,canActivate:[UserRightsGuardGovernService]},
    // {path: '', redirectTo:'identitycontrol', pathMatch:'full'},
    {path:'status', component:StatusErrorComponent},
  ]  
  },
  { path: 'users', component: UserManagementComponent,
  children:[
    {path: '', redirectTo:'userprofile', pathMatch:'full'},
    { path: 'userprofile', component: CreateUserProfileComponent},
    { path: 'password', component: CreateUserPasswordComponent},
    { path: 'notifications', component: UserNotficationSettingComponent},
    {path: 'settings', component: UserSettingsComponent},
    { path: 'restrictions', component: UserRestrictionsComponent},
    { path: 'permissions', component: UserPermissionsComponent}
  ]  
  },
  // { path: 'usermanagement', component: UserManagementComponent,
  // children:[
  //   { path: 'userprofile', component: CreateUserProfileComponent},
  //   { path: 'password', component: CreateUserPasswordComponent},
  //   { path: 'notifications', component: UserNotficationSettingComponent},
  //   {path: 'settings', component: UserSettingsComponent},
  //   { path: 'restrictions', component: UserRestrictionsComponent},
  //   { path: 'permissions', component: UserPermissionsComponent},
  // ]  
  // },
  //{path: 'users', component:}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    // EJAngular2Module.forRoot(),
  ],
  exports:[RouterModule]
})
export class GovernRoutingModule { }
