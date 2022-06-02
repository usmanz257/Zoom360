import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveUserAccessManagementModel } from 'src/app/models/Govern/UserAccessManagment.model';
import { UserAccessManagementService } from 'src/app/services/Govern/UserManagement/user-access-management.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-notfication-setting',
  templateUrl: './user-notfication-setting.component.html',
  styleUrls: ['./user-notfication-setting.component.css']
})
export class UserNotficationSettingComponent implements OnInit {

  SaveUserNotification: FormGroup;
  sp_SaveUserProfile:string='SAVEUSERNOTIFICATIONS';
  ProcedureName='GETUSERNOTIFICATIONS';
  subUserId :string;
  constructor(private fb: FormBuilder,public userAccessManagementService: UserAccessManagementService,private storageService:StorageService,private router:Router) 
  {
    
   }

  ngOnInit() {
    this.createForm(); 
    this.subUserId=this.storageService.getItem(environment.storage.governUserId);
    if (this.subUserId !=null){
      debugger
      this.getUserNotifications();
    }    
  }
  createForm() {
    this.SaveUserNotification = this.fb.group({
      NewsLetter:[false],
      SystemNotification:[false],
      AccessNotification:[false]
    });
  }
  SaveConfig(saveUserAccessManagementModel: SaveUserAccessManagementModel){
    saveUserAccessManagementModel.ProcedureName= this.sp_SaveUserProfile;
    this.subUserId= this.storageService.getItem(environment.storage.governUserId);
    saveUserAccessManagementModel.subUserId= this.subUserId;
  this.userAccessManagementService.saveUserAccessManagementSetup(saveUserAccessManagementModel).subscribe((data:any) => {
    debugger
    var Status_message1=data[0].result;
    console.log(Status_message1);
    });;
  }
  getUserNotifications(){
    this.userAccessManagementService.getuserNotifications(this.ProcedureName,this.subUserId).subscribe((data:any)=>{
      debugger
      this.SaveUserNotification.patchValue({
        NewsLetter: data[0].newS_LETTER,
        SystemNotification: data[0].systeM_NOTIFICATION,
        AccessNotification: data[0].accesS_NOTIFICATION,
        
       });
    });
}
newUser(){
  debugger
 // this.storageService.removeItem("userId");
localStorage.removeItem(environment.storage.governUserId);
this.router.navigate(['/govern/users/userprofile']);

}
}
