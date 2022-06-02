import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UAMDropdownModel } from 'src/app/models/common/dropdownmodel';
import { SaveUserAccessManagementModel } from 'src/app/models/Govern/UserAccessManagment.model';
import { UserAccessManagementService } from 'src/app/services/Govern/UserManagement/user-access-management.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-restrictions',
  templateUrl: './user-restrictions.component.html',
  styleUrls: ['./user-restrictions.component.css']
})
export class UserRestrictionsComponent implements OnInit {
  SaveUserRestriction: FormGroup;
  sp_SaveUserProfile:string='SAVEUSERRESTRICTIONS';
  ProcedureName= 'GETUSERRESTRICTIONS';
  dropdownName='Supervisor Name';
  fieldsvalues: Object;
 // SupervisorName:string;
  _superVisor:UAMDropdownModel[]=[];
  shown:boolean=false;
  subUserId :string;
  constructor(private fb: FormBuilder,public userAccessManagementService: UserAccessManagementService,
    private storageService:StorageService,private router:Router)
  {
     
   }

  ngOnInit() {
    this.createForm();
    this.getdropdown();
    this.subUserId=this.storageService.getItem(environment.storage.governUserId);
    if (this.subUserId !=null){
      this.getUserRistrications();
    }
  }
  getdropdown(){
    this.subUserId=this.storageService.getItem(environment.storage.governUserId);
    this.userAccessManagementService.getDropDown(this.dropdownName,this.subUserId)
    .subscribe((data:UAMDropdownModel[]) => {
      debugger
     this._superVisor = data;
     this.fieldsvalues = { dataSource: this._superVisor,text:'dropdownText',value:'dropdownValue'};
  });
}
  createForm() {
    this.SaveUserRestriction = this.fb.group({
      RegistarionAccessMode:['Restricted access'],
      SupervisorMode:[false],
    });
  }
  SaveConfig(saveUserAccessManagementModel: SaveUserAccessManagementModel){
    debugger
    var SupervisorName= document.getElementById('SupervisorName') as HTMLInputElement;
    
    if(SupervisorName==null)
    {
      saveUserAccessManagementModel.SuperVisorName='';  
    }else{
      saveUserAccessManagementModel.SuperVisorName= SupervisorName.value;
    }
    saveUserAccessManagementModel.ProcedureName= this.sp_SaveUserProfile;
    this.subUserId= this.storageService.getItem(environment.storage.governUserId);
    saveUserAccessManagementModel.subUserId= this.subUserId;
  this.userAccessManagementService.saveUserAccessManagementSetup(saveUserAccessManagementModel).subscribe((data:any) => {
    debugger
    var Status_message1=data.result;
    console.log(Status_message1);
    });
  }
showSupervisor(e){
  debugger
          if(e.target.checked)
          {
            this.shown=true;
          }
          else{
              this.shown=false
          }
    }
getUserRistrications(){
  this.userAccessManagementService.getUserRestriction(this.ProcedureName,this.subUserId).subscribe((data:any)=>{
    debugger
    this.SaveUserRestriction.patchValue({
      RegistarionAccessMode: data[0].restrictioN_ACCESS_MODE,
      SupervisorMode:  data[0].supervisoR_MODE
     });
     if(data[0].supervisoR_MODE==true){
       this.shown=true;
     }
  });
}
newUser(){
  debugger
 // this.storageService.removeItem("userId");
localStorage.removeItem(environment.storage.governUserId);
this.router.navigate(['/govern/users/userprofile']);

}
}
