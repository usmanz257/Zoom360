import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityAccessManagmentModel } from 'src/app/models/Govern/IdentityAccessManagment.model';
import { TimeZoneSetupModel } from 'src/app/Models/mainmenu.model';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { IdenstityAndAccessManagmentServiceService } from 'src/app/services/Govern/IdentityAccessManagement/idenstity-and-access-managment-service.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { ToastMessage } from 'src/app/models/MessageTypes/toast-message';
import { GetIAM } from 'src/app/models/Govern/GetIAMModel';

@Component({
  selector: 'app-access-locking',
  templateUrl: './access-locking.component.html',
  styleUrls: ['./access-locking.component.css']
})
export class AccessLockingComponent extends AppComponentBase implements OnInit {
  DATE_FORMAT_TYPE_toggle:boolean=false;
  dataFormatTypeToggle:boolean=false;
  timeZoneToggle:boolean=false;
  dateFormatReportsToggle:boolean=false;
  dateFormatVisulizationToggle:boolean=false;
  timeFormatReportsToggle:boolean=false;
  timeFormatVisualizationToggle:boolean=false;
  accesslockingSetup: FormGroup;
  sp_SaveUserProfile:string='SAVEALSETUP';
  ProcedureName:string='GETALSETUP';
  getIAM:GetIAM = {} as GetIAM;
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position;
	public btnEleShow: ButtonComponent;

  constructor(
    injector:Injector,
    private fb: FormBuilder,
    public _idenstityAndAccessManagmentServiceService:IdenstityAndAccessManagmentServiceService,private router:Router
    ) { super(injector);}
  ngOnInit(): void {
    this.position=this.testToast.position;
    this.createForm();
    this.getAccessLooking();
  }
  createForm() {
    this.accesslockingSetup = this.fb.group({
      UserLocked: [true],
      FailedAttempt: [1],
      FailedTimeInterval: [1],
      UnlockOption: ['1'],
      UnlockTimeInterval: ['1'],
      UnlockAdministrator: [true],
      UnlockSupervisor: [true],
    });
}
SaveConfig(accessLockingData: IdentityAccessManagmentModel){
  accessLockingData.ProcedureName='SAVEALSETUP'
  accessLockingData.UserId = this.clientDetailService.getuserID();
  accessLockingData.WorkspaceId=this.clientDetailService.getWorkspaceID();
  accessLockingData.ClientId = this.clientDetailService.getClientID();
  accessLockingData.ClientTime = this.clientDateTimeService.getCilentTime();
  accessLockingData.ClientDate = this.clientDateTimeService.getCilentDate();
  accessLockingData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
  accessLockingData.IpVerifcation = '';
this._idenstityAndAccessManagmentServiceService.saveIdentityAccessManagementSetup(accessLockingData).subscribe(
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
setdateFormatVisible(value){
  this.dataFormatTypeToggle= value;
  if(value==false){
    this.accesslockingSetup.patchValue({dateFormat:''});
  }
}
  getAccessLooking(){
    debugger 
    this.getIAM.ProcedureName= this.ProcedureName;
    this.getIAM.clientId=this.clientDetailService.getClientID();
    this.getIAM.workspaceId=this.clientDetailService.getWorkspaceID();
    this.getIAM.userId=this.clientDetailService.getuserID();
    this._idenstityAndAccessManagmentServiceService.getIAM(this.getIAM).subscribe((data:any)=>{
    // this.storageService.getItem("userId");
    debugger
    this.accesslockingSetup.patchValue({
      UserLocked: data[0].useR_LOCKED,
      FailedAttempt: data[0].faileD_ATTEMPTS,
      FailedTimeInterval: data[0].faileD_TIMEINTERVAL,
      UnlockOption: data[0].unlocK_OPTIONS,
      UnlockTimeInterval: data[0].unlocK_TIMEINTERVAL,
      UnlockAdministrator: data[0].unlocK_ADMINISTRATOR,
      UnlockSupervisor: data[0].  unlocK_SUPERVISIOR,
     
       });
    });
  }
  
  }
 
