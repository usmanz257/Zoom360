import { Injector, ViewChild } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";
import { RouterModule, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientLoginDetailModel } from 'src/app/models/clientLoginDetails.model';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from 'src/app/models/MessageTypes/toast-message';
import { ButtonComponent } from 'ej-angular2';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { UserLogService } from 'src/app/services/common/user-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AppComponentBase implements OnInit {
  public env = environment;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isAlert = false;
  public testToast=new ToastMessage();
  @ViewChild('defaulttoast',{static:true})
  public toastObj: ToastComponent;
  @ViewChild('toastBtnShow',{static:true})
  public btnEleShow: ButtonComponent;
  public position=this.testToast.position;
  clientLoginDetails:ClientLoginDetailModel={} as ClientLoginDetailModel;
  constructor(
    injector:Injector,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private userLogService: UserLogService
  ) {
    super(injector);
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }
  
  logIn(clientLoginDetails:ClientLoginDetailModel) {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      
      this.loading = false;
      console.log(this.loginForm)
      return;
    }
    debugger
    clientLoginDetails.ClientDate= this.clientDateTimeService.getCilentDate();
    clientLoginDetails.ClientTime= this.clientDateTimeService.getCilentTime();
    clientLoginDetails.ClientTimeZone= this.clientDateTimeService.getClientTimeZone();
    clientLoginDetails.location=this.clientDeviceInfoService.getLocation();
    clientLoginDetails.ipAddress=this.clientDeviceInfoService.getIPAddress();
    clientLoginDetails.macAddress=this.clientDeviceInfoService.getMacAddress();
    clientLoginDetails.deviceType=this.clientDeviceInfoService.getDeviceType();
    clientLoginDetails.connectionType=this.clientDeviceInfoService.getConnectionType();
    clientLoginDetails.username='abc';
    this.userService.login(clientLoginDetails).subscribe(
      res => {
          this.storageService.setItem(environment.storage.userData, res);
          // this.storageService.setItem(environment.storage.userId, 'admin');
          // this.storageService.setItem(environment.storage.workspaceId, 1002);
          this.storageService.setItem(environment.storage.clientId,res.customUserInfo.clientId);
          this.storageService.setItem(environment.storage.userId, res.userInfo.email);
          this.storageService.setItem(environment.storage.workspaceId,res.customUserInfo.workspaceId);
          this.storageService.setItem(environment.storage.userProfileImage,res.customUserInfo.loginuserImage);
          this.storageService.setItem(environment.storage.defaultpage,res.customUserInfo.defaultPage);
          this.UserLoggedin();
         // var defaultPage= this.storageService.getItem(environment.storage.defaultpage);
          this.router.navigate(['extract/extraction/summary']);
          debugger
          console.log(this.router.url);
          // this.router.navigate([defaultPage]);
      },
      err => {
        debugger
        this.testToast.toast[2].content=err.statusText;
        this.toastObj.show(this.testToast.toast[2]);
        console.log(err.statusText);

      }
    );
  }
  UserLoggedin() {
    debugger
    this.clientLoginDetails.ClientDate= this.clientDateTimeService.getCilentDate();
    this.clientLoginDetails.ClientTime= this.clientDateTimeService.getCilentTime();
    this.clientLoginDetails.ClientTimeZone= this.clientDateTimeService.getClientTimeZone();
    this.clientLoginDetails.location=this.clientDeviceInfoService.getLocation();
    this.clientLoginDetails.ipAddress=this.clientDeviceInfoService.getIPAddress();
    this.clientLoginDetails.macAddress=this.clientDeviceInfoService.getMacAddress();
    this.clientLoginDetails.deviceType=this.clientDeviceInfoService.getDeviceType();
    this.clientLoginDetails.loginStatus='Success Login';
    this.clientLoginDetails.connectionType=this.clientDeviceInfoService.getConnectionType();
    this.clientLoginDetails.Email=this.clientDetailService.getuserID();
    this.clientLoginDetails.workspaceId=this.clientDetailService.getWorkspaceID();
    this.clientLoginDetails.clientID=this.clientDetailService.getClientID();
    this.clientLoginDetails.userActivity='1';
    this.userLogService.UserLoggedin(this.clientLoginDetails).subscribe(
      (data:any) => {
        debugger
        console.log(data);
        // this.testToast.toast[1].content=data.result;
        // this.toastObj.show(this.testToast.toast[1]);
      },
      (err:any) => {
        debugger
        this.testToast.toast[2].content='user log error';
        this.toastObj.show(this.testToast.toast[2]);
        console.log(err.statusText);
      });
  }
}
