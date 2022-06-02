import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveUserAccessManagementModel } from 'src/app/models/Govern/UserAccessManagment.model';
import { UserAccessManagementService } from 'src/app/services/Govern/UserManagement/user-access-management.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-create-user-password',
  templateUrl: './create-user-password.component.html',
  styleUrls: ['./create-user-password.component.css']
})
export class CreateUserPasswordComponent implements OnInit {
  SaveUserPassword: FormGroup;
  sp_SaveUserProfile:string='SAVEUSERPASSWORD';
  ProcedureName='GETUSERPASSWORD';
  subUserId :string;
  constructor(private fb: FormBuilder,public userAccessManagementService: UserAccessManagementService,
    private storageService:StorageService,private router:Router) { }

  ngOnInit() {
    this.createForm();
    // this.subUserId=this.storageService.getItem("userId");
    // if (this.subUserId !=null){
    //   this.getUserPassword();
    // } 
  }
  createForm() {
    this.SaveUserPassword = this.fb.group({
      OldPassword: [""],
      NewPassword: [""],
      RetypeNewPassword: [""],
      OverwriteExisting:[true]
    });
  }
  SaveConfig(saveUserAccessManagementModel: SaveUserAccessManagementModel){
   debugger
   this.subUserId= this.storageService.getItem("userId");
   saveUserAccessManagementModel.subUserId= this.subUserId;
   saveUserAccessManagementModel.ProcedureName= this.sp_SaveUserProfile;
  this.userAccessManagementService.saveUserAccessManagementSetup(saveUserAccessManagementModel).subscribe((data:any) => {
    debugger
    var Status_message1=data.result;
    console.log(Status_message1);
    });
  }
  getUserPassword(){
    this.userAccessManagementService.getUserPassword(this.ProcedureName,this.subUserId).subscribe((data:any)=>{
      this.subUserId= this.storageService.getItem("userId");
      this.SaveUserPassword.patchValue({
        OldPassword: data[0].olD_PASSWORD,
        NewPassword: data[0].neW_PASSWORD,
        RetypeNewPassword: data[0].retypE_NEW_PASSWORD,
        OverwriteExisting: data[0].overwritE_EXISTING,
       });
    });
  }
  newUser(){
      debugger
     // this.storageService.removeItem("userId");
    localStorage.removeItem("userId");
    this.router.navigate(['/govern/users/userprofile']);
    
  }
}
