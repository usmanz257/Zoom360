import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SaveUserAccessManagementModel } from 'src/app/models/Govern/UserAccessManagment.model';
import { ClientDateTimeService } from 'src/app/services/client-date-time.service';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserAccessManagementService {
  _getDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetMultiSelectDropDown';
  _SaveUAMUrl= environment.apiUrl+'/api/UserAccessManagement/SaveUserAccesManagmentSetup';
  _GetUAMUrl=environment.apiUrl+'/api/UserAccessManagement/GetUserAccessManagement';
  _urltreeDropDown = environment.apiUrl+'/api/CommonDropdownList/GetTreeropdown';
  userId:string='admin';
  workSpaceId:string=''+1;
  client_id:string=''+1002;
  Status_message:string;
  //SubUserId:string=''+1;
  SubUserId:number;
  constructor(
    
    private _http:HttpClient,private storageService:StorageService,private router:Router,private clientDateTimeService:ClientDateTimeService)
     {
     
   }

saveUserAccessManagementSetup(saveUserAccessManagementModel:SaveUserAccessManagementModel){
  
  saveUserAccessManagementModel.ClientDate= this.clientDateTimeService.getCilentDate();
  saveUserAccessManagementModel.ClientTime= this.clientDateTimeService.getCilentTime();
  saveUserAccessManagementModel.ClientTimeZone= this.clientDateTimeService.getClientTimeZone();
    debugger
    return this._http.post(`${this._SaveUAMUrl}`,saveUserAccessManagementModel);  
    }
      
getDropDown(dropdownName,subUser){
  //this.SubUserId=''+12;
  let params = new HttpParams()
  .set("userId", this.userId)
  .set("subUserID", ''+subUser)
  .set("dropdownName", dropdownName)
  return this._http.get(`${this._getDropDownUrl}`,{params:params});
}
gettreeDropDownData(dropDownType,subUser){
  debugger
  //this.SubUserId=this.storageService.getItem("userId");
  let params = new HttpParams()
  .set("UserId", this.userId)
  .set("subUserId", ''+subUser)
  .set("ClientId", this.client_id)
  .set("WorkspaceId", this.workSpaceId)
  .set("DropDownType",dropDownType)
  return this._http.get(`${this._urltreeDropDown}`,{params:params});
}
getUserProfile(procedureName,subUser){
  debugger
  //this.SubUserId=this.storageService.getItem("userId");
    let params = new HttpParams()
    .set("userID", this.userId)
    .set("subUserId", ''+subUser)
    .set("WorkSpaceId", ''+1)
    .set("Client_Id", ''+1002)
    .set("ProcedureName", procedureName)
    return this._http.get(`${this._GetUAMUrl}`,{params:params});
  }
getUserPassword(procedureName,subUser){
    let params = new HttpParams()
    .set("userID", this.userId)
    .set("subUserId", ''+subUser)
    .set("WorkSpaceId", ''+1)
    .set("Client_Id", ''+1002)
    .set("ProcedureName", procedureName)
    return this._http.get(`${this._GetUAMUrl}`,{params:params});
  }
getuserNotifications(procedureName,subUser){
    let params = new HttpParams()
    .set("userID", this.userId)
    .set("subUserId", ''+subUser)
    .set("WorkSpaceId", ''+1)
    .set("Client_Id", ''+1002)
    .set("ProcedureName", procedureName)
    debugger
    return this._http.get(`${this._GetUAMUrl}`,{params:params});
  }
getUserPermissions(procedureName,subUser){
    let params = new HttpParams()
    .set("userID", this.userId)
    .set("subUserId", ''+subUser)
    .set("WorkSpaceId", ''+1)
    .set("Client_Id", ''+1002)
    .set("ProcedureName", procedureName)
    return this._http.get(`${this._GetUAMUrl}`,{params:params});
  }
getUserRestriction(procedureName,subUser){
    let params = new HttpParams()
    .set("userID", this.userId)
    .set("subUserId", ''+subUser)
    .set("WorkSpaceId", ''+1)
    .set("Client_Id", ''+1002)
    .set("ProcedureName", procedureName)
    return this._http.get(`${this._GetUAMUrl}`,{params:params});
  }
getUserSettings(procedureName,subUser){
    let params = new HttpParams()
    .set("userID", this.userId)
    .set("subUserId", ''+subUser)
    .set("WorkSpaceId", ''+1)
    .set("Client_Id", ''+1002)
    .set("ProcedureName", procedureName)
    return this._http.get(`${this._GetUAMUrl}`,{params:params});
  }
newUser(){
    this.storageService.removeItem("userId");
    this.router.navigate(['/govern/users/userprofile']);
    //JSON.stringify(localStorage.removeItem("userId"));
  }
}
