import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'; 
import {observable, Observable} from 'rxjs';
import { UpdateObjectFieldlist } from 'src/app/models/extract/Step6ObjectFieldListModelClass';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FieldSelection {
  url=environment.apiUrl+'/api/SqlConnector/GetEntityNameDropdownStep6';
  FieldselectionGridlist=environment.apiUrl+'/api/SqlConnector/GetObjectFieldsListStep6';
  FieldSelectionUpdate=environment.apiUrl+"/api/SqlConnector/ObjectEntityFieldUpdateStep6";
  constructor(private _http: HttpClient) { }

  GetEntityNameList(UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string,Databasename:string){
  let params = new HttpParams().set("UserId", UserId)
  .set("Workspaceid",Workspaceid)
  .set("Clientid", Clientid)
  .set("ConnectorId",ConnectorId)
  .set("Databasename",Databasename);
  var input={
    "UserId":UserId,
    "Workspaceid":Workspaceid,
    "Clientid":Clientid,
    "ConnectorId":ConnectorId,
    "Databasename":Databasename,
    "Mappedtable":null,
    "Accountid":null
   }
   return this._http.get(`${this.url}`,{params:params});

  }
   
  GetObjectFieldNameList(UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string,AccountId:string,Databasename:string,ObjectName:string){
    debugger
  let params = new HttpParams().set("UserId", UserId)
  .set("Workspaceid",Workspaceid)
  .set("Clientid", Clientid)
  .set("ConnectorId",ConnectorId)
  .set("AccountId",AccountId)
  .set("Databasename",Databasename)
  .set("ObjectName",ObjectName);
  return this._http.get(`${this.FieldselectionGridlist}`,{params:params});

  }
  UpdateFieldNameList(EntityFieldList:UpdateObjectFieldlist[],UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string,ObjectName:string){
    debugger
  let params = new HttpParams().set("UserId", UserId)
  .set("Workspaceid",Workspaceid)
  .set("Clientid", Clientid)
  .set("ConnectorId",ConnectorId)
  .set("ObjectName",ObjectName);
  //  return this._http.get(`${this.url+'/api/SqlConnector/ObjectEntityFieldUpdateStep6'}`,EntityFieldList,{params:params});
  return this._http.post(this.FieldSelectionUpdate,EntityFieldList,{params:params}); 
}
}