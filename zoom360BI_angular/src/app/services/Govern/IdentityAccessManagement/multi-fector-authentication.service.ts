import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MultiFactorSetupeModel } from 'src/app/models/Govern/IdentityAccessManagment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultiFectorAuthenticationService {

  _getDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  _saveMultiFactorUrl=environment.apiUrl+'/api/IndentityAndAccessmanagement/SaveMultiFactorAuthenticationSetup';
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
    saveMultiFactorSetup(UserData:MultiFactorSetupeModel){
      UserData.UserId = this.userId;
      UserData.WorkspaceId = this.workSpaceId;
      UserData.ClientId = this.client_id;
      this._http.post(`${this._saveMultiFactorUrl}`,UserData,{responseType:'text'}).subscribe((data:string) => {
        this.Status_message = data;
        console.log(this.Status_message);
        });
      }
}
