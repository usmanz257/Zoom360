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
  selector: 'app-multi-factor-authentication',
  templateUrl: './multi-factor-authentication.component.html',
  styleUrls: ['./multi-factor-authentication.component.css']
})
export class MultiFactorAuthenticationComponent extends AppComponentBase implements OnInit {
  accesslockingSetup: FormGroup;
  dropdownName='Security Question';
  _securityQuestion:dropdownModel[]=[];
 
  sp_SaveUserProfile:string='SAVEMFASETUP';
  ProcedureName='GETMFASETUP';
  getIAM:GetIAM = {} as GetIAM;
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position;
	public btnEleShow: ButtonComponent;
  field:object;
  constructor(
    injector:Injector,
    private fb: FormBuilder,public _idenstityAndAccessManagmentServiceService: IdenstityAndAccessManagmentServiceService,
    private router:Router)
     {  super(injector);}

  ngOnInit(): void {
    this.position=this.testToast.position;
    this.getdropdown();
    this.createForm();
    this.getMultiFactor();
  }
  createForm() {
    this.accesslockingSetup = this.fb.group({
     SecurityQuestion:['1'],
		 SqFirstTimeLogin:[true],
		 SqPasswordUpdation:[true],
		 SecurityQuestionOptions:['What was your driving instructors first name?'],
		 SecurityQuestionAnswer:['1'],
		 PasscodeAuthentication:['1'],
		 PaFirstTimeLogin:[true],
		 PaPasswordUpdation:[true],
		 PasscodeEmail:[true],
		 PasscodeSms:[true],
		 PasscodeSinglepart:[true],
		 PasscodeTwopart:[true],
		 PasscodeValidityTime:[1],
     PasscodeValidityAttempts :[1],
		 CryptoGraphicToken:['1'],
		 CtFirsttimeLogin:[true],
		 CtPasswordUpdation:[true],
		 QrCode:['1'],
		 QrFirsttimeLogin:[true],
		 QrPasswordUpdation:[true],
		 FaceId:['1'],
		 FIFirsttimeLogin:[true],
		 FiPasswordUpdation:[true],
		 SupervisorApproval:['1'],
		 SaFirsttimeLogin:[true],
		 SAPasswordUpdation:[true]
    });
  }
    SaveConfig(multiFactorData: IdentityAccessManagmentModel){
      debugger
      multiFactorData.ProcedureName='SAVEMFASETUP';
      
      multiFactorData.UserId = this.clientDetailService.getuserID();
      multiFactorData.WorkspaceId=this.clientDetailService.getWorkspaceID();
      multiFactorData.ClientId = this.clientDetailService.getClientID();
      multiFactorData.ClientTime = this.clientDateTimeService.getCilentTime();
      multiFactorData.ClientDate = this.clientDateTimeService.getCilentDate();
      multiFactorData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
      multiFactorData.IpVerifcation = '';

    this._idenstityAndAccessManagmentServiceService.saveIdentityAccessManagementSetup(multiFactorData).subscribe(
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
getdropdown(){
      this._idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownName)
      .subscribe((data: dropdownModel[]) => {
        if(data.length  > 0){
          this._securityQuestion = data;
          this.field = { dataSource: this._securityQuestion,text:'dropdownText',value:'dropdownValue'};
        }

          });
        }

        getMultiFactor(){
          debugger 
          this.getIAM.ProcedureName= this.ProcedureName;
          this.getIAM.clientId=this.clientDetailService.getClientID();
          this.getIAM.workspaceId=this.clientDetailService.getWorkspaceID();
          this.getIAM.userId=this.clientDetailService.getuserID();
          this._idenstityAndAccessManagmentServiceService.getIAM(this.getIAM).subscribe((data:any)=>{
          // this.storageService.getItem("userId");
          debugger
          this.accesslockingSetup.patchValue({
            SecurityQuestion: data[0].securitY_QUESTION,
            SqFirstTimeLogin: data[0].sQ_FIRSTTIME_LOGIN,
            SqPasswordUpdation: data[0].sQ_PASSWORD_UPDATION,
            SecurityQuestionOptions: data[0].securityquestioN_OPTIONS,
            SecurityQuestionAnswer: data[0].securityquestioN_ANSWER,
            PasscodeAuthentication: data[0].passcodE_AUTHENTICATION,
            PaFirstTimeLogin: data[0].pA_FIRSTTIME_LOGIN,
            PaPasswordUpdation: data[0].pA_PASSWORD_UPDATION,
            PasscodeEmail: data[0].passcodE_EMAIL,
            PasscodeSms: data[0].passcodE_SMS,
            PasscodeSinglepart: data[0].passcodE_SINGLEPART,
            PasscodeTwopart: data[0].passcodE_TWOPARTS,
            PasscodeValidityTime: data[0].passcodE_VALIDITY_TIME,
            PasscodeValidityAttempts: data[0].passcodE_VALIDITY_ATTEMPTS,
            CryptoGraphicToken: data[0].cryptographiC_TOKENS,
            CtFirsttimeLogin: data[0].cT_FIRSTTIME_LOGIN,
            CtPasswordUpdation: data[0].cT_PASSWORD_UPDATION,
            QrCode: data[0].qR_CODE,
            QrFirsttimeLogin: data[0].qR_FIRSTTIME_LOGIN,
            QrPasswordUpdation: data[0].qR_PASSWORD_UPDATION,
            FaceId: data[0].facE_ID,
            FIFirsttimeLogin: data[0].fI_FIRSTTIME_LOGIN,
            FiPasswordUpdation: data[0].fI_PASSWORD_UPDATION,
            SupervisorApproval: data[0].supervisorY_APPROVAL,
            SaFirsttimeLogin: data[0].sA_FIRSTTIME_LOGIN,
            SAPasswordUpdation: data[0].sA_PASSWORD_UPDATION,
             });
          });
        }
        }
