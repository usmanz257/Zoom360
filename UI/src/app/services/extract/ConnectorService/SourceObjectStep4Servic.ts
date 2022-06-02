import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { ObjectFieldsList } from 'src/app/models/extract/Step4SourceObjectistModel';
import { SourcObject } from 'src/app/models/extract/access-microsoft-sqlserver';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class SourceObject {
  url=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  urlsourceobjectsave=environment.apiUrl+'/api/SqlConnector/SaveSourceObjects';
  getObjectList=environment.apiUrl+"/api/SqlConnector/GetSourceObjectListForStep4Grid";
  updateSourceFieldObjecr=environment.apiUrl+"/api/SqlConnector/SourceObjectGridListUpdateStep4";
  constructor(private _http: HttpClient) { }
   
  GetSourceObjectList( Account_Id:string,Mappedtable:string,UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string,Databasename:string){
    debugger
   let params = new HttpParams()
   .set("Account_Id", Account_Id)
   .set("Mappedtable",Mappedtable)
   .set("UserId", UserId)
   .set("Workspaceid",Workspaceid)
   .set("Clientid", Clientid)
   .set("ConnectorId",ConnectorId)
   .set("Databasename", Databasename);
    return this._http.get(`${this.getObjectList}`,{params:params});
  }
Step4WorkspaceDropdown(UserId:string,DropdownType:string){
    debugger
     let params = new HttpParams().set("userId",UserId).set("dropdownName",DropdownType);
  return  this._http.get(`${this.url}`,{params:params});
  
  }
  SaveDataForSourceObject(SourceData:SourcObject){
    debugger
   
    return this._http.post(this.urlsourceobjectsave,SourceData);
  }
  UpdateSourceObjectList(SourceObjectList:ObjectFieldsList[],UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string){
    debugger
   let params = new HttpParams()
   .set("UserId", UserId)
   .set("Workspaceid",Workspaceid)
   .set("Clientid", Clientid)
   .set("ConnectorId",ConnectorId);
   
  //  return this._http.get(`${this.url+'/api/SqlConnector/ObjectEntityFieldUpdateStep6'}`,EntityFieldList,{params:params});
 return this._http.post(this.updateSourceFieldObjecr,SourceObjectList,{params:params}); 
}
}