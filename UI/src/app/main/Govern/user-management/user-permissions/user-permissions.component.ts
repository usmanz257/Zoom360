import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { dropdownModel, UAMDropdownModel } from 'src/app/models/common/dropdownmodel';
import { TreeDropDownParentModel } from 'src/app/models/common/TreeDropDownModel';
import { SaveUserAccessManagementModel } from 'src/app/models/Govern/UserAccessManagment.model';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { DropDownLoadService } from 'src/app/services/common/drop-down-load.service';
import { UserAccessManagementService } from 'src/app/services/Govern/UserManagement/user-access-management.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.css']
})
export class UserPermissionsComponent extends AppComponentBase implements OnInit {
  dataList: any;
  fieldsvalues: Object;
  dropdownNames:string[]=["Workspaces","Child Workspaces","Display Modes"];
  _workspaces:UAMDropdownModel[]=[];
  _childWorkspaces:UAMDropdownModel[]=[];
  _displayMode:UAMDropdownModel[]=[];
  _timeSlot:UAMDropdownModel[]=[];
  _deviceType :UAMDropdownModel[]=[];
  SaveUserPermissions: FormGroup;
  sp_SaveUserProfile:string='SAVEUSERPERMISSIONS';
  ProcedureName='GETUSERPERMISSIONS';
  dropDownName='Module Allowed';
  test1:string;
  subUserId :string='';
  //data:TreeDropDownParentModel[]=[];
  public fields: Object;
  public treeSettings: Object;
  // dataSource
  public data: { [key: string]: Object }[];
  
  constructor(
    injector:Injector,
    private fb: FormBuilder,public userAccessManagementService: UserAccessManagementService,
    public dropDownLoadService:DropDownLoadService,private router:Router) 
  { super(injector);
   }

ngOnInit() {  
    this.createForm();
    this.getdropdown();
    this.getTreeDropDown();
    let test=this.storageService.getItem(environment.storage.governUserId);
  if (test !=null){
    this.GetUserPermissions();
  } 
    
  }
getdropdown(){

  this.subUserId=this.storageService.getItem(environment.storage.governUserId);

    for(let i=0;i<this.dropdownNames.length;i++){
     if(this.dropdownNames[i]=='Workspaces'){
       this.userAccessManagementService.getDropDown(this.dropdownNames[i],this.subUserId)
       .subscribe((data: UAMDropdownModel[]) => {
       if(data.length  > 0){
         this._workspaces = data;
         this.fieldsvalues = { dataSource: this._workspaces,text:'dropdownText',value:'dropdownValue',selected:"selected"};
       }
     });
     }
     else if(this.dropdownNames[i]=='Child Workspaces'){
      this.userAccessManagementService.getDropDown(this.dropdownNames[i],this.subUserId)
      .subscribe((data: UAMDropdownModel[]) => {
        if(data.length  > 0){
        this._childWorkspaces = data;
        this.fieldsvalues = { dataSource: this._childWorkspaces,text:'dropdownText',value:'dropdownValue',selected:"selected"};
        }
   });
     }
    else if(this.dropdownNames[i]=='Display Modes'){
     this.userAccessManagementService.getDropDown(this.dropdownNames[i],this.subUserId)
     .subscribe((data: UAMDropdownModel[]) => {
      this._displayMode = data;
      this.fieldsvalues = { dataSource: this._displayMode,text:'dropdownText',value:'dropdownValue',selected:'selected'};
        });
    }
  }
}//comment
createForm() {
    this.SaveUserPermissions = this.fb.group({
      Useractive:[true],
      UserLocked:[false],
    });
  }
SaveConfig(saveUserAccessManagementModel: SaveUserAccessManagementModel,module){
  debugger
    var workspaces1= document.getElementById('workspaces1') as HTMLInputElement;
    var childWorkspace1= document.getElementById('childworkspaces1') as HTMLInputElement;
    var displayMode1= document.getElementById('displayMode1') as HTMLInputElement;
    var dataOperation1= document.getElementById('dataOperation1') as HTMLInputElement;
    saveUserAccessManagementModel.Workspace= workspaces1.value;
    saveUserAccessManagementModel.ChildWorkspace= childWorkspace1.value;
    saveUserAccessManagementModel.DisplayMode= displayMode1.value;
    saveUserAccessManagementModel.ModuleAllowed= module.toString();
    this.test1 =module.toString();
    saveUserAccessManagementModel.DataOperaion= dataOperation1.value;
    this.subUserId= this.storageService.getItem(environment.storage.governUserId);
    saveUserAccessManagementModel.subUserId= this.subUserId;
    saveUserAccessManagementModel.ProcedureName= this.sp_SaveUserProfile;
    this.userAccessManagementService.saveUserAccessManagementSetup(saveUserAccessManagementModel).subscribe((data:any) => {
      debugger
      var Status_message1=data[0].result;
      console.log(Status_message1);
      });
  }
GetUserPermissions(){
    this.userAccessManagementService.getUserPermissions(this.ProcedureName,this.subUserId).subscribe((data:any)=>{
      debugger
      this.SaveUserPermissions.patchValue({
        Useractive: data[0].useR_ACTIVE,
        UserLocked:data[0].useR_LOCKED,
       });
    });
  }
getTreeDropDown(){
  debugger
  this.subUserId=this.storageService.getItem(environment.storage.governUserId);
  this.userAccessManagementService.gettreeDropDownData(this.dropDownName,this.subUserId).subscribe((datalist:any[])=>{
    debugger
       this.data = datalist;
       this.fields = { dataSource: this.data, value: 'dropdownValue', text: 'dropdownText', child: 'treeDropDownChildItems',selected:'selected' };// treeSettings
     this.treeSettings = { autoCheck: true };
  });
}
newUser(){
  debugger
 // this.storageService.removeItem("userId");
localStorage.removeItem(environment.storage.governUserId);
this.router.navigate(['/govern/users/userprofile']);

}
}
