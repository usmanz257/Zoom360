 
import { SaveUserAccessManagementModel, GetUserAccessManagmentInputModel } from './../../../../models/Govern/UserAccessManagment.model';
import { MustMatch } from 'src/app/utils/must-match.validator';

import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
import { UAMDropdownModel } from 'src/app/models/common/dropdownmodel';

import { UserAccessManagementService } from 'src/app/services/Govern/UserManagement/user-access-management.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { GetUAM } from 'src/app/models/Govern/GetUAMModel';
// import { UploaderComponent, SelectedEventArgs, FileInfo, RemovingEventArgs } from '@syncfusion/ej2-angular-inputs';
// import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
// import { EmitType, detach, Browser, createElement, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent extends AppComponentBase implements OnInit {
  @ViewChild('checkbox', {static: true}) mulObj: MultiSelectComponent; 
 
btnclick() {  
    console.log(this.mulObj.value); 
} 
  dropdownName='Time Zone';
  sp_SaveUserProfile:string='SAVEUSERPROFILE';
  ProcedureName='GETUSERPROFILE';
  TimeZone:string="";
  dataList: any;
  fieldsvalues: Object;
  SaveUserProfile: FormGroup;
  _timezone:UAMDropdownModel[]=[];
  timeZoneValue:number;
  GovernUserId :string;
  mySubscription: any;
  test:any;
  getuam:GetUAM = {} as GetUAM;
  savauser:SaveUserAccessManagementModel[]=[];
  constructor(injector:Injector,
    private fb: FormBuilder,public userAccessManagementService: UserAccessManagementService,private router:Router) {super(injector);
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    
    // this.mySubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //   }
    // });
  }
  ngOnInit() {
    debugger
    console.log('userprofile');
    this.createForm();
    this.getdropdown();
    this.GovernUserId=this.storageService.getItem(environment.storage.governUserId);
    if (this.GovernUserId !=null){
      this.GetUserProfile();
    }  
  }
  
  createForm() {
    this.SaveUserProfile = this.fb.group({
      EmailAddress: ['', [Validators. required, Validators.email]],
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required],
      PhoneNo: ['',Validators.required],
      Flex1:['',Validators.required],
      ConfirmPassword:[''],}
    // },{validator:MustMatch('Flex1','ConfirmPassword')
  );
  }
  SaveConfig(saveUserAccessManagementModel: SaveUserAccessManagementModel){

  
   this.GovernUserId= this.storageService.getItem(environment.storage.governUserId);
   saveUserAccessManagementModel.UserId=this.GovernUserId;
   saveUserAccessManagementModel.WorkspaceId=this.clientDetailService.getWorkspaceID();
   saveUserAccessManagementModel.ClientId=this.clientDetailService.getuserID();
    // saveUserAccessManagementModel.subUserId= this.subUserId;
    saveUserAccessManagementModel.TimeZone = this.timeZoneValue;
    saveUserAccessManagementModel.ProcedureName= this.sp_SaveUserProfile;
  this.userAccessManagementService.saveUserAccessManagementSetup(saveUserAccessManagementModel).subscribe((data:any) => {
    
 
  debugger
  var ResultDetail = data.result.split(',')
  if(ResultDetail.length == 2){
  var id = ResultDetail[0].trim();
  var message = ResultDetail[1];
  this.storageService.setItem(environment.storage.governUserId,id);
  console.log(id);
  console.log(message);
}
else if(ResultDetail.length == 1){
  debugger
  var message= data.result;
  console.log(message);
}
 // console.log(data.result);

    });;
  }
  getdropdown(){
        if(this.GovernUserId==undefined){
          this.GovernUserId = '';
        }
       this.userAccessManagementService.getDropDown(this.dropdownName,this.GovernUserId)
       .subscribe((data:UAMDropdownModel[]) => {
         debugger
        this._timezone = data;
        this.fieldsvalues = { dataSource: this._timezone,text:'dropdownText',value:'dropdownValue',selected:"selected"};
     });
}
GetUserProfile(){
  debugger
  this.getuam.clientId=this.clientDetailService.getuserID();
  this.getuam.workspaceId=this.clientDetailService.getWorkspaceID();
  this.userAccessManagementService.getUserProfile(this.ProcedureName,this.GovernUserId).subscribe((data:any)=>{
    debugger
    this.SaveUserProfile.patchValue({
      EmailAddress: data[0].emaiL_ADDRESS,
      FirstName: data[0].firsT_NAME,
      LastName: data[0].lasT_NAME,
      PhoneNo: data[0].phonE_NO,
     });
     this.timeZoneValue = data[0].timE_ZONE;
  });
}
newUser(){
  debugger
 // this.storageService.removeItem("userId");
localStorage.removeItem(environment.storage.governUserId);
//  console.log("user id removed" + localStorage.getItem("userId"));
// this.SaveUserProfile.reset();
 this.SaveUserProfile.setValue({
  EmailAddress: [''],
  FirstName: [''],
  LastName: [''],
  PhoneNo: [''],
  OldPassword:[''],
  ConfirmPassword:[''],
 });
}
ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
