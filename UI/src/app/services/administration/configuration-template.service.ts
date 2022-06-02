import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationTemplateService {
_urlSaveConfigTemplate="https://localhost:44357/api/ConfigurationMappping/SaveConfigTemplate";
_urlGetConfigTemplate="https://localhost:44357/api/ConfigurationMappping/GetConfigTemplate";
userId:string='admin';
  workSpaceId:number=11;
  client_id:string=''+1003;
  constructor(private _http:HttpClient) { }
  saveConfigTemplate(JsonData,description){
    debugger
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("workSpaceId",""+this.workSpaceId)
    .set("client_id", this.client_id)
    .set("connectorId", ""+194)
    .set("connectorName",'YouTube Analytics')
    .set("JsonData",  JSON.stringify(JsonData))
    .set("description", description)
    debugger
   return this._http.get(`${this._urlSaveConfigTemplate}`,{params:params});
  }
  getConfigTemplate(){
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("workSpaceId",""+this.workSpaceId)
    .set("client_id", this.client_id)
    .set("connectorId", ""+194)
    return this._http.get(`${this._urlGetConfigTemplate}`,{params:params});
  }
}
