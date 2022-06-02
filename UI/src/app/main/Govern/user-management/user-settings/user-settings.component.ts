import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { SaveUserAccessManagementModel } from 'src/app/models/Govern/UserAccessManagment.model';
import { UserAccessManagementService } from 'src/app/services/Govern/UserManagement/user-access-management.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  dataList: any;
  fieldsvalues: Object;
  dropdownNames:string[]=["Default Page","Display Theme","Display Modes"];
  _defaultPage:dropdownModel[]=[];
  _displayTheme:dropdownModel[]=[];
  _displayMode:dropdownModel[]=[];
  // _timeSlot:dropdownModel[]=[];
  // _deviceType :dropdownModel[]=[];
  sp_SaveUserProfile:string='SAVEUSERSETTINGS';
  ProcedureName ='GETUSERSETTINGS';
  SaveUserSettings: FormGroup;
  defaultPageValue:any;
  defaultTheme:any;
  displayMode:any;
  public subUserId :string;
  saveUserAccessManagementModel=new SaveUserAccessManagementModel;
  // dataSource
  
// defining fieldMapping

public treeSettings: Object = { autoCheck: true }
  constructor(private fb: FormBuilder,public userAccessManagementService: UserAccessManagementService,
    private storageService:StorageService,private router: Router) {
    
  }
  ngOnInit() {  
    this.getdropdown();
  // this.createForm();  
    this.subUserId=this.storageService.getItem(environment.storage.governUserId);
    if (this.subUserId !=null){
      this.getUserSettings();
    }    
  }
  // createForm() {
  //   this.SaveUserSettings = this.fb.group({
  //   });
  // }
  getdropdown(){
    this.subUserId=this.storageService.getItem(environment.storage.governUserId);
    for(let i=0;i<this.dropdownNames.length;i++){
     if(this.dropdownNames[i]=='Default Page'){
       debugger
       this.userAccessManagementService.getDropDown(this.dropdownNames[i],this.subUserId)
       .subscribe((data: dropdownModel[]) => {
       if(data.length  > 0){
         debugger
         this._defaultPage = data;
         this.fieldsvalues = { dataSource: this._defaultPage,text:'dropdownText',value:'dropdownValue'};
       }
     });
     }
     else if(this.dropdownNames[i]=='Display Theme'){
       debugger
      this.userAccessManagementService.getDropDown(this.dropdownNames[i],this.subUserId)
      .subscribe((data: dropdownModel[]) => {
        console.log(data)
        if(data.length  > 0){
          debugger
        this._displayTheme = data;
        this.fieldsvalues = { dataSource: this._displayTheme,text:'dropdownText',value:'dropdownValue'};
        }
   });
     }
    else if(this.dropdownNames[i]=='Display Modes'){
      debugger
     this.userAccessManagementService.getDropDown(this.dropdownNames[i],this.subUserId)
     .subscribe((data: dropdownModel[]) => {
     if(data.length  > 0){
  debugger
       this._displayMode = data;
       this.fieldsvalues = { dataSource: this._displayMode,text:'dropdownText',value:'dropdownValue'};
         }
        });
    }
   }
   }
   SaveConfig(saveUserAccessManagement: SaveUserAccessManagementModel){

    this.saveUserAccessManagementModel.DefaultDisplaymode= this.displayMode;
    this.saveUserAccessManagementModel.DefaultPage= this.defaultPageValue;
    this.saveUserAccessManagementModel.DisplayTheme= this.defaultTheme;
    this.saveUserAccessManagementModel.ProcedureName= this.sp_SaveUserProfile;
    this.subUserId= this.storageService.getItem(environment.storage.governUserId);
    this.saveUserAccessManagementModel.subUserId= this.subUserId;
  this.userAccessManagementService.saveUserAccessManagementSetup(this.saveUserAccessManagementModel).subscribe((data:any) => {
    debugger
    var Status_message1=data[0].result;
    console.log(Status_message1);
    });;
  }
  // getselectedvalues(){
  //   this.defaultPageValue='5';
  //   this.defaultTheme='2';
  //   this.displayMode='2';
  // }
  getUserSettings(){
    this.subUserId=this.storageService.getItem(environment.storage.governUserId);
    this.userAccessManagementService.getUserSettings(this.ProcedureName,this.subUserId).subscribe((data:any)=>{
      this.defaultPageValue=data[0].defaulT_PAGE;
      this.defaultTheme=data[0].displaY_THEME;
      this.displayMode=data[0].defaulT_DISPLAY_MODE;
    });
}
newUser(){
  debugger
 // this.storageService.removeItem("userId");
localStorage.removeItem(environment.storage.governUserId);
this.router.navigate(['/govern/users/userprofile']);

}
}
