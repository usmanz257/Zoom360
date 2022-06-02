import { Injectable } from '@angular/core';
import { DataGovernanceModel } from 'src/app/Models/mainmenu.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataGovernanceService {
  _urlSaveCurrencySetup= environment.apiUrl+'/api/DataGovernance/Save';
  _urlGetDropDowns=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  _urlGetDataGovernance=environment.apiUrl+'/api/DataGovernance/GetDataGovernance';
  userId:string='admin';
  workSpaceId:number=11;
  client_id:string=''+1003;
  Status_message:string;
  private _recordLength: number;
  
  constructor(private _http:HttpClient) { }
  getActiveSourceLoactionList(){
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", 'Active Source Location');
    return this._http.get(`${this._urlGetDropDowns}`,{params:params});
  }
  getWorkspacesList(){
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", 'Workspace');
    return this._http.get(`${this._urlGetDropDowns}`,{params:params});
  }
  getActiveDestinationLocationList(){
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", 'Active Destination Location');
    return this._http.get(`${this._urlGetDropDowns}`,{params:params});
  }
  getPassiveDestinationLocationList(){
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", 'Passive Destination Location');
   return this._http.get(`${this._urlGetDropDowns}`,{params:params})
  }
  
  saveDataGovernance(modal:DataGovernanceModel){
  return  this._http.post(`${this._urlSaveCurrencySetup}`,modal,{responseType:'text'})
     
  }
  getDataGovernance(userId:string,workSpaceId:string,clientId:string){
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",workSpaceId)
    .set("clientId",clientId);
  return this._http.get(`${this._urlGetDataGovernance}`,{params:params});
  
  }
}
