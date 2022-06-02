import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
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
  selector: 'app-identity-control',
  templateUrl: './identity-control.component.html',
  styleUrls: ['./identity-control.component.css']
})
export class IdentityControlComponent  extends AppComponentBase implements OnInit {
  DATE_FORMAT_TYPE_toggle:boolean=false;
  LoginIdFormat:boolean=false;
  timeZoneToggle:boolean=false;
  dateFormatReportsToggle:boolean=false;
  dateFormatVisulizationToggle:boolean=false;
  timeFormatReportsToggle:boolean=false;
  timeFormatVisualizationToggle:boolean=false;
  IdentityControl: FormGroup;
  dropdownNames:string[]=["Available Formats","Mandatory Fields"];
  _availableFormats:dropdownModel[]=[];
  _mandatoryFields:dropdownModel[]=[];
  field:object;
  showonlogin=true;
  sp_SaveUserProfile:string='SAVEICSETUP';
  ProcedureName='GETICSETUP';
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
    public idenstityAndAccessManagmentServiceService: IdenstityAndAccessManagmentServiceService,
    private router:Router) {
      super(injector);}
  ngOnInit(): void {
    this.position=this.testToast.position;
    this.getdropdown();
    this.createForm();
    this.getIdentityControl();
  }
  createForm() {
    debugger
    this.IdentityControl = this.fb.group({
      //loginidFormatType: ['1'],
      DefinedFormat :['1'],
		  AvailableFormat :['1'],
		  MandatoryField :['1'],
		  UniqueMandatoryField :[true],
		  LogInIdActivation :['1'],
		  ApprovalSupervisor :[true],
		  ApprovalEmail :[true],
		  ApprovalQrCode :[true],
		  LoginIdCaseSensitive :['1'],
	  	LoginIdAuthentication :[true],
		  SsoAuthentication :[true],
		  SslCertificate :['1'],
       
    });
}
getdropdown(){
   for(let i=0;i<this.dropdownNames.length;i++){
    if(this.dropdownNames[i]=='Available Formats'){
      this.idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
      .subscribe((data: dropdownModel[]) => {
        if(data.length  > 0){
          this._availableFormats = data;
          this.field = { dataSource: this._availableFormats,text:'dropdownText',value:'dropdownValue'};
        }
    });
  }
 else if(this.dropdownNames[i]=='Mandatory Fields'){
  this.idenstityAndAccessManagmentServiceService.getIAMDropDown(this.dropdownNames[i])
  .subscribe((data: dropdownModel[]) => {
    if(data.length  > 0){
      this._mandatoryFields = data;
      this.field = { dataSource: this._mandatoryFields,text:'dropdownText',value:'dropdownValue'};
    }
});
  }
}
}
SaveConfig(identityControlData: IdentityAccessManagmentModel){
  debugger
  identityControlData.ProcedureName='SAVEICSETUP';
  identityControlData.UserId = this.clientDetailService.getuserID();
		identityControlData.WorkspaceId=this.clientDetailService.getWorkspaceID();
		identityControlData.ClientId = this.clientDetailService.getClientID();
		identityControlData.ClientTime = this.clientDateTimeService.getCilentTime();
		identityControlData.ClientDate = this.clientDateTimeService.getCilentDate();
		identityControlData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
		identityControlData.IpVerifcation = '';
  this.idenstityAndAccessManagmentServiceService.saveIdentityAccessManagementSetup(identityControlData).subscribe(
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
setLoginIdFormat(toggle,value){
  debugger
  if(toggle==true)
  {
      this.showonlogin=true;
      this.IdentityControl.patchValue({
        AvailableFormat: value});
  }
  else
  {
    this.showonlogin=false;
  }
  
  if(value==false){
    this.IdentityControl.patchValue({AvailableFormat:''});
  //}
}
}
getIdentityControl(){
  debugger 
  this.getIAM.ProcedureName= this.ProcedureName;
  this.getIAM.clientId=this.clientDetailService.getClientID();
  this.getIAM.workspaceId=this.clientDetailService.getWorkspaceID();
  this.getIAM.userId=this.clientDetailService.getuserID();
  this.idenstityAndAccessManagmentServiceService.getIAM(this.getIAM).subscribe((data:any)=>{
  // this.storageService.getItem("userId");
  debugger
  this.IdentityControl.patchValue({
    DefinedFormat: data[0].defineD_FORMATS,
    // AvailableFormat: data[0].availablE_FORMATS,
    MandatoryField: data[0].mandatorY_FIELDS,
    UniqueMandatoryField: data[0].uniquE_MANDATORYFIELDS,
    LogInIdActivation: data[0].loginiD_ACTIVATION,
    ApprovalSupervisor: data[0].approvaL_SUPERVISOR,
    ApprovalEmail: data[0].approvaL_EMAIL,
    ApprovalQrCode: data[0].approvaL_QRCODE,
    LoginIdCaseSensitive: data[0].loginiD_CASESENSITIVE,
    LoginIdAuthentication: data[0].loginiD_AUTHENTICATION,
    SsoAuthentication: data[0].ssO_AUTHENTICATION,
    SslCertificate: data[0].ssL_CERTIFICATE,
     });
     if (data[0].defineD_FORMATS=='1'){
      this. setLoginIdFormat(true,data[0].availablE_FORMATS);
   }
  });
}
}
