import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessLockingModel } from 'src/app/models/Govern/IdentityAccessManagment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessLockingService {

  _getDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  _saveIdentityControlUrl=environment.apiUrl+'/api/IndentityAndAccessmanagement/SaveAccessLockingSetup';
  userId:string='admin';
  workSpaceId:number=11;
  client_id:number=1003;
  WeekStartDay:any[]=[];
  Status_message:string;
    constructor(private _http:HttpClient) { }
    getDropDown(dropdownName){
      debugger
      let params = new HttpParams().set("userId", this.userId).set("dropdownName", dropdownName);
      return this._http.get(`${this._getDropDownUrl}`,{params:params});
    }
    saveAccessLockingSetup(UserData:AccessLockingModel){
      UserData.UserId = this.userId;
      UserData.WorkspaceId = this.workSpaceId;
      UserData.ClientId = this.client_id;
      this._http.post(`${this._saveIdentityControlUrl}`,UserData,{responseType:'text'}).subscribe((data:string) => {
        this.Status_message = data;
        console.log(this.Status_message);
        });
      }
}
