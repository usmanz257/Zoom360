import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
 import {observable, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
 


@Injectable({
  providedIn: 'root'
})

export class Lookupvalueservice {
 url='https://localhost:44397';
 getdropdown=environment.apiUrl+"/api/CommonDropdownList/GetDropdownList";
 getSourceAccountList=environment.apiUrl+"/api/Prepare/GetAccountList";
 getSourceTableName=environment.apiUrl+"/api/Prepare/GetTableList";
 getObjectFieldList=environment.apiUrl+"/api/Prepare/GetobjectFieldList";
 SaveLookupValue=environment.apiUrl+"/api/Prepare/SaveLookup";
 GenerateCustomTable=environment.apiUrl+"/api/Prepare/GenerateCustomTable";
 LoadData=environment.apiUrl+"/api/Prepare/InsertionOptions";
 addlookupscreen=environment.apiUrl+"/api/Prepare/addLookupScreen";
    constructor(private _http: HttpClient, private router: Router) 
    { }
    
  getworkspaceList(UserId:string,Workspacetoapply:string){
    debugger
    let params = new HttpParams()
    .set("userId",UserId) 
    .set("dropdownName",Workspacetoapply); 
    return  this._http.get(`${this.getdropdown}`,{params:params});
  }
  getSourceConnectorList(UserId:string,sourceconnector:string){
        debugger
    let params = new HttpParams()
    .set("userId",UserId) 
    .set("dropdownName",sourceconnector) 
     ; 
    
    return  this._http.get(`${this.getdropdown}`,{params:params});
  }
    
  getSourceAccount(UserId:string,WorkspaceId:string,ClientId:string,sourceconnectorId:string){
    debugger
let params = new HttpParams()
.set("userId",UserId) 
.set("workspaceId",WorkspaceId) 
.set("clientId",ClientId) 
.set("connectorId",sourceconnectorId); 
 
return  this._http.get(`${this.getSourceAccountList}`,{params:params});
}
  getSourceTable(UserId:string,WorkspaceId:string,ClientId:string,sourceconnectorId:string,DatabaseName:string,MappedTable:string,AccountId:string){
  debugger
  
  let params = new HttpParams()
  .set("userId",UserId) 
  .set("workspaceId",WorkspaceId) 
  .set("clientId",ClientId) 
  .set("connectorId",sourceconnectorId)
  .set("Dbname",DatabaseName) 
  .set("MappedTable",MappedTable)
  .set("AccountId",AccountId)
  ;

 
return  this._http.get(`${this.getSourceTableName}`,{params:params});
}
getGridObjectList(UserId:string,WorkspaceId:string,ClientId:string,sourceconnectorId:string,ObjectName:string,DatabaseName:string,){
  debugger
  let params = new HttpParams()
  .set("userId",UserId) 
  .set("workspaceId",WorkspaceId) 
  .set("clientId",ClientId) 
  .set("connectorId",sourceconnectorId)
  .set("Dbname",DatabaseName) 
  .set("objectName",ObjectName)
  ;
return  this._http.get(`${this.getObjectFieldList}`,{params:params});
}
getexistingLookupTable(UserId:string,Dropdowntype:string,){
  debugger
let params = new HttpParams()
.set("userId",UserId) 
.set("dropdownName",Dropdowntype); 
return  this._http.get(`${this.getdropdown}`,{params:params});
}
getexistingLookupfield(UserId:string,Dropdowntype:string,){
  debugger
let params = new HttpParams()
.set("userId",UserId) 
.set("dropdownName",Dropdowntype); 
return  this._http.get(`${this.getdropdown}`,{params:params});
}
SaveLookupData(Lookupvaluemodel){
  debugger
  let params = new HttpParams()
// .set("User_id",user)
// .set("Client_id",Client_id)
// .set("workspace_id",workspace_id) 
// .set("tablevalues",tablevalues); 
https://localhost:44397/api/LookupValue/SaveLookupfield
return  this._http.post(`${this.addlookupscreen}`,Lookupvaluemodel,{responseType:'text'});
 }
GenerateCustomtable(UserId:string,ClientId:string,WorkspaceId:string,CustomLookup:string ){
  debugger
  
  let params = new HttpParams()
.set("User_id",UserId)
.set("Client_id",ClientId)
.set("workspace_id",WorkspaceId) 
.set("CustomLookup",CustomLookup); 
 
return  this._http.get(`${this.GenerateCustomTable}`,{params:params,responseType:'text'});
 }

 DataInsertionOption(Lookupvaluemodel){
  debugger
  
//   let params = new HttpParams()
// .set("User_id",UserId)
// .set("Client_id",ClientId)
// .set("workspace_id",WorkspaceId) 
// .set("sourcetablename",sourcetablename)
// .set("destinationtablename",destinationtablename)
// .set("sourcefieldname",sourcefieldname)
// .set("desfieldname",desfieldname)
// .set("Action",Action)
// .set("destinationtable",destinationtable)
// .set("Lookupid",Lookupid); 
 
// return  this._http.get(`${this.LoadData}`,{responseType:'text'});
return  this._http.post(`${this.addlookupscreen}`,Lookupvaluemodel,{responseType:'text'});
 }
}