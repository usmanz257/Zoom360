import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetIAM } from 'src/app/models/Govern/GetIAMModel';
import { IdentityAccessManagmentModel } from 'src/app/models/Govern/IdentityAccessManagment.model';

import { environment } from 'src/environments/environment';
import { ClientDateTimeService } from '../../client-date-time.service';
import { StorageService } from '../../storage.service';


@Injectable({
  providedIn: 'root'
})
export class IdenstityAndAccessManagmentServiceService {
  _getIAMDropDownUrl= environment.apiUrl+'/api/IdentityAndAccessmanagement/GetIAMDropdown';
  _SaveIAMUrl= environment.apiUrl+'/api/IdentityAndAccessmanagement/SaveIdentityAndAccessManagment';
  _GetIAMUrl=environment.apiUrl+'/api/IdentityAndAccessmanagement/GetIdentityAndAccessManagement';
  userId:string='admin';
  workSpaceId:string=''+1;
  client_id:string=''+1002;
  Status_message:string;
  //SubUserId:string=''+1;
  constructor(private _http:HttpClient,private storageService:StorageService,private router:Router,private clientDateTimeService:ClientDateTimeService) {
}

saveIdentityAccessManagementSetup(UserData:IdentityAccessManagmentModel){
  debugger
  return this._http.post(`${this._SaveIAMUrl}`,UserData);  
  }
  getIAMDropDown(dropdownName){
    //this.SubUserId=''+12;
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("dropdownName", dropdownName)
    return this._http.get(`${this._getIAMDropDownUrl}`,{params:params});
  }
  getIAM(getIAM : GetIAM){
    debugger
    let params = new HttpParams()
    .set("userID", getIAM.userId)
    .set("WorkSpaceId",getIAM.workspaceId)
    .set("Client_Id", getIAM.clientId)
    .set("ProcedureName", getIAM.ProcedureName)
      return this._http.get(`${this._GetIAMUrl}`,{params:params});
    }
 
}