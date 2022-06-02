import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
 import {observable, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
 


@Injectable({
  providedIn: 'root'
})

export class LookupvalueListservice {
 url='https://localhost:44397';
 _sortToggle:boolean=false;
 _connectionData: any[]=[];
 getLookuplist=environment.apiUrl+"/api/Prepare/GetLookupList";
 getdestinationList=environment.apiUrl+"/api/Load/GetdestinationList";
    constructor(private _http: HttpClient, private router: Router,private sort: ArraySortPipe) 
    { }
    
  getLookupList(USER_ID:string,WORKSPACE_ID:string,CLIENT_ID:string,WORKSPACE_NAME:string,LOOKUP_DISPLAY_NAME:string,
    ACCOUNT_DISPLAY_NAME:string,TABLE_NAME:string,ENABLED:string,VISIBILTY:string,Lookupid:string){
    debugger
   
     
    var obj={
     "UserId":USER_ID, 
     "workspaceId":WORKSPACE_ID,
     "clientId":CLIENT_ID, 
     "tablename":TABLE_NAME, 
     "enable":ENABLED, 
     "visibilty":VISIBILTY, 
     "workspacename":WORKSPACE_NAME, 
     "lookupdisplayname":LOOKUP_DISPLAY_NAME, 
     "accountdispalyname":ACCOUNT_DISPLAY_NAME,
     "lookupid":Lookupid,
    }
    let params = new HttpParams()
    .set("UserId",USER_ID) 
    .set("workspaceId",WORKSPACE_ID)
    .set("clientId",CLIENT_ID)
    .set("tablename",TABLE_NAME)
    .set("enable",ENABLED)
    .set("visibilty",VISIBILTY)
    .set("workspacename",WORKSPACE_NAME)
    .set("lookupdisplayname",LOOKUP_DISPLAY_NAME)
    .set("accountdispalyname",ACCOUNT_DISPLAY_NAME)
    .set("lookupid",Lookupid); 
    return  this._http.get(`${this.getLookuplist}`,{params:params});
  }
   
    
  GetDestinationList(){
    debugger
     var USER_ID ="admin";
     var WORKSPACE_ID ="1";
     var CLIENT_ID = "1002";
     var ACCOUNT_ID =null;
     var WORKSPACE_NAME = null;
     var CONNECTION_NAME = null;
     var SOURCE_NAME =null;
     var ACCESS_GRANTED = null;
     var CREATED_BY = null;
     var IS_ACTIVE = null;
     var DESTINATION_ENABLED = null;
     var LAST_ACCESSED = null;
     
    var obj={
     "UserId":USER_ID, 
     "workspaceId":WORKSPACE_ID,
     "clientId":CLIENT_ID, 
     "accountid":ACCOUNT_ID, 
     "workspacename":WORKSPACE_NAME, 
     "connectionname":CONNECTION_NAME, 
     "sourcename":SOURCE_NAME, 
     "accessgrante":ACCESS_GRANTED, 
     "createdby":CREATED_BY,
     "isactive":IS_ACTIVE,
     "destinationenable":DESTINATION_ENABLED,
     "lastaccess":LAST_ACCESSED,
    }
    let params = new HttpParams()
    .set("UserId",USER_ID) 
    .set("workspaceId",WORKSPACE_ID)
    .set("clientId",CLIENT_ID)
    .set("accountid",ACCOUNT_ID)
    .set("workspacename",WORKSPACE_NAME)
    .set("connectionname",CONNECTION_NAME)
    .set("sourcename",SOURCE_NAME)
    .set("accessgrante",ACCESS_GRANTED)
    .set("createdby",CREATED_BY)
    .set("isactive",IS_ACTIVE)
    .set("destinationenable",DESTINATION_ENABLED)
    .set("lastaccess",LAST_ACCESSED); 
    return  this._http.get(`${this.getdestinationList}`,{params:params});
  }
  sortAllDestinationList(field){
    if(this._sortToggle){
       this._connectionData = this.sort.transform(this._connectionData,field);
     }
   
     else if(!this._sortToggle){
       this._connectionData = this.sort.transform2(this._connectionData,field);
     }
   
     }
   
  }