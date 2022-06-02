import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RiskBaseAuthenticationModel } from 'src/app/models/Govern/IdentityAccessManagment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RiskBasedAuthenticationService {

  _getDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
_saveRiskBasedAuthSetupUrl=environment.apiUrl+'/api/IndentityAndAccessmanagement/SaveRiskBasedAuthenticationSetup';
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
  saveRiskBasedAuthSetup(UserData:RiskBaseAuthenticationModel){
   
    UserData.UserId = this.userId;
    UserData.WorkspaceId = this.workSpaceId;
    UserData.ClientId = this.client_id;
    this._http.post(`${this._saveRiskBasedAuthSetupUrl}`,UserData,{responseType:'text'}).subscribe((data:string) => {
      debugger
      this.Status_message = data;
      console.log(this.Status_message);
      });
    }
}
