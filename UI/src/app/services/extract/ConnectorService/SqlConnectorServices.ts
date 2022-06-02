import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';

import {observable, Observable} from 'rxjs';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SqlConnector {
  Mydropdonw:dropdownModel[]=[];
  ConnectorTabledata:any[]=[];
   RowLengthForSqlConnector:number;
    url=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
    constructor(private _http: HttpClient) { }
    
 getHostName(UserId:string,DropdownType:string){
     debugger
     let params = new HttpParams().set("userId",UserId).set("dropdownName",DropdownType);
     this._http.get(`${this.url}`,{params:params}).subscribe((data:any)=>{
     debugger
      if(data.length > 0){
       this.Mydropdonw=data;
    }
    });
  
  }
  
  GetAllConnectionList(UserId:string,Workspaceid:string,Clientid:string,ConnectorId:string){
    debugger
     let params = new HttpParams().set("UserId",UserId).set("Workspaceid",Workspaceid).set("Clientid",Clientid).set("ConnectorId",ConnectorId);
    this._http.get(`${this.url+'/api/SqlConnector/GetAllConnectionlist'}`,{params:params}).subscribe((data:any)=>{
      debugger
      if(data.length > 0){
         this.ConnectorTabledata=data;
         this.RowLengthForSqlConnector=this.ConnectorTabledata.length;
    }
    });
  
  }
  
  
   
   
  }