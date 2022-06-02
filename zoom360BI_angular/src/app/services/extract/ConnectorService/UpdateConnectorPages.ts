import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';

import {observable, Observable} from 'rxjs';
 
import { extractModel } from 'src/app/models/extract/ExtractPageModelForStep8';
import { SourceAccount, updatesourceaccountStep2,   } from 'src/app/models/extract/access-microsoft-sqlserver';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class UpdateConnectorPages {
  SourceAccountModel =new SourceAccount();
  ConnectorTabledata:any[]=[];
  UpdateSourceAccountLst:updatesourceaccountStep2[]=[];
  UpdateExtract:extractModel[]=[];


   
  
  RowLengthForSqlConnector:number;
    url='https://localhost:44397';
    GetConnectionForUpadte=environment.apiUrl+"/api/SqlConnector/GetSqlConnectorList";
    ExtractList=environment.apiUrl+"/api/SqlConnector/GetSqlExtractPageList";
    constructor(private _http: HttpClient, private router: Router,) { }
    
  SourceAccountEditMode(Account_Id:string,UserId:string,Workspaceid:string,Clientid:string,ConnectorId:string){
    debugger
     let params = new HttpParams()
     .set("Account_Id",Account_Id)
     .set("UserId",UserId)
     .set("Workspaceid",Workspaceid)
     .set("Clientid",Clientid)
     .set("ConnectorId",ConnectorId);
    this._http.get(`${this.GetConnectionForUpadte}`,{params:params}).subscribe((data:updatesourceaccountStep2[])=>{
      debugger
      if(data.length > 0){
         this.UpdateSourceAccountLst=data;
         let resultkeyname = data.map(a => a.filedname);
         let resultkeyvalue = data.map(a => a.fieldvalue);
        //  this.router.navigate(['/extract/AddnewDataStream/Micr']);
         this.router.navigate(['/extract/AddnewDataStream/Micr']);

        //  this.router.navigate(['/enrich/prepare/LookupValuesAdd']);
        }
    });
  
  }
  
  RefreshSourceAccountEditMode(Account_Id:string,UserId:string,Workspaceid:string,Clientid:string,ConnectorId:string){
    debugger
     let params = new HttpParams()
     .set("Account_Id",Account_Id)
     .set("UserId",UserId)
     .set("Workspaceid",Workspaceid)
     .set("Clientid",Clientid)
     .set("ConnectorId",ConnectorId);
    return this._http.get(`${this.GetConnectionForUpadte}`,{params:params});
     
  }
  upadteExtractStep8(Account_Id:string,UserId:string,Workspaceid:string,Clientid:string,ConnectorId:string){
    debugger
    let params = new HttpParams()
    .set("Account_Id",Account_Id)
    .set("UserId", UserId)
    .set("WorkspaceId",Workspaceid)
    .set("ClientId", Clientid)
    .set("ConnectorId",ConnectorId);
    var input={
      "Account_Id":Account_Id,
      "UserId": UserId,
      "WorkspaceId":Workspaceid,
      "ClientId":Clientid,
      "ConnectorId":ConnectorId
      }
    this._http.post(`${this.ExtractList}`,input).subscribe((data:extractModel[])=>{
      //  if(data.length > 0){
        this.UpdateExtract=data;
        this.router.navigate(['extract/AddnewDataStream/Extract']);
        

      // }
     })
  
   }
   ControlUpdateValueOnExtractStep8(Account_Id:string,UserId:string,Workspaceid:string,Clientid:string,ConnectorId:string){
    let params = new HttpParams()
    .set("Account_Id", Account_Id)
    .set("UserId", UserId)
    .set("Workspaceid",Workspaceid)
    .set("Clientid", Clientid)
    .set("ConnectorId",ConnectorId);
   return this._http.get(`${this.url+'/api/SqlConnector/GetSqlExtractPageList'}`,{params:params});
  
   }
  }