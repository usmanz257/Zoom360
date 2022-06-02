import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { GetIAM } from 'src/app/models/Govern/GetIAMModel';
import { IdentityAccessManagmentModel } from 'src/app/models/Govern/IdentityAccessManagment.model';
import { ToastMessage } from 'src/app/models/MessageTypes/toast-message';
import { AppComponentBase } from 'src/app/services/AppComponentBase';

import { IdenstityAndAccessManagmentServiceService } from 'src/app/services/Govern/IdentityAccessManagement/idenstity-and-access-managment-service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-password-control',
  templateUrl: './password-control.component.html',
  styleUrls: ['./password-control.component.css']
})
export class PasswordControlComponent extends AppComponentBase implements OnInit {
  LoginIdFormat:boolean=false;
  passwordControl: FormGroup;

  sp_SaveUserProfile:string='SAVEPCSETUP';
  ProcedureName='GETPCSETUP';
  getIAM:GetIAM = {} as GetIAM;
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position;
	public btnEleShow: ButtonComponent;

  constructor(
    injector:Injector,
    private fb: FormBuilder,public _idenstityAndAccessManagmentServiceService:IdenstityAndAccessManagmentServiceService,
    private router:Router) { super(injector);}

  ngOnInit(): void {
    this.position=this.testToast.position;
    this.createForm();
    //this.getdropdown();
    this.getPasswordControl();
  }
  createForm() {
    debugger
    this.passwordControl = this.fb.group({
      PasswordLength: ['1'],
      StrongPassword: ['1'],
      PasswordField: ['1'],
      PasswordExpired: ['1'],
      FirstLoginOption: [true],
      FirstLoginDays: [1],
      UserCreatedDays:[1],
      LoginAttempts:[1],
      LastPasswordChanged:[1],
      NotifyUserPasswordExpiry:["1"],
      NotifyUserPasswordExpiryDays:[1],
      NotifySupervisorPasswordExpiry:["1"],
      NotifySupervisorPasswordExpiryDays:[1],
    });
}
  SaveConfig(identityControlData: IdentityAccessManagmentModel){
    debugger
    identityControlData.ProcedureName='SAVEPCSETUP'
    identityControlData.UserId = this.clientDetailService.getuserID();
		identityControlData.WorkspaceId=this.clientDetailService.getWorkspaceID();
		identityControlData.ClientId = this.clientDetailService.getClientID();
		identityControlData.ClientTime = this.clientDateTimeService.getCilentTime();
		identityControlData.ClientDate = this.clientDateTimeService.getCilentDate();
		identityControlData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
		identityControlData.IpVerifcation = '';
    this._idenstityAndAccessManagmentServiceService.saveIdentityAccessManagementSetup(identityControlData).subscribe(
      (data:any) => {
        debugger
        console.log(data);
        this.testToast.toast[1].content=data.result;
        this.toastObj.show(this.testToast.toast[1]);
      },
      (err:any) => {
        debugger
        //this.testToast.toast[2].content='err.statusText';
        this.toastObj.show(this.testToast.toast[2]);
        console.log(err.statusText);
      });
  }
  setLoginIdFormat(value){
    this.setLoginIdFormat= value;
    //if(value==false){
    //  this.TimezoneSetup.patchValue({dateFormat:''});
    //}
  }

    getPasswordControl(){
      debugger 
      this.getIAM.ProcedureName= this.ProcedureName;
      this.getIAM.clientId=this.clientDetailService.getClientID();
      this.getIAM.workspaceId=this.clientDetailService.getWorkspaceID();
      this.getIAM.userId=this.clientDetailService.getuserID();
      this._idenstityAndAccessManagmentServiceService.getIAM(this.getIAM).subscribe((data:any)=>{
      // this.storageService.getItem("userId");
      debugger
      this.passwordControl.patchValue({
        PasswordLength: data[0].passworD_LENGTH,
        StrongPassword: data[0].stronG_PASSWORD,
        PasswordField: data[0].passworD_FIELD,
        PasswordExpired: data[0].passworD_EXPIRED,
        FirstLoginOption: data[0].firsT_LOGIN_OPTION,
        FirstLoginDays: data[0].firsT_LOGIN_DAYS,
        UserCreatedDays: data[0].useR_CREATED_DAYS,
        LoginAttempts: data[0].logiN_ATTEMPTS,
        LastPasswordChanged: data[0].lasT_PASSWORD_CHANGED,
        NotifyUserPasswordExpiry: data[0].notifY_USER_PASSWORDEXPIRY,
        NotifyUserPasswordExpiryDays: data[0].notifY_USER_PASSWORDEXPIRY_DAYS,
        NotifySupervisorPasswordExpiry: data[0].notifY_SUPERVISOR_PASSWORDEXPIRY,
        NotifySupervisorPasswordExpiryDays: data[0].notifY_SUPERVISOR_PASSWORDEXPIRY_DAYS,
         });
      });
  }

  }

   