import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
 
import {observable, Observable} from 'rxjs';

import { ServiceService } from '../service.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ConnectorTypeDashbord {
  url='https://localhost:44397';
  getRecentConnection=environment.apiUrl+"/api/ConnectionLog/RecentConnectionLog";
  constructor(private _http: HttpClient,private serviceService:ServiceService) { }


  ResentModule(UserId:string,Workspaceid:string,Clientid:string){
    debugger
     let params = new HttpParams()
     .set("UserId",UserId)
     .set("Workspaceid",Workspaceid)
     .set("Client_Id",Clientid)
     .set("AccountId","")
     .set("WorkspaceName","")
     .set("ConnectionName","")
     .set("SourceName","")
     .set("AccessGranted","")
     .set("CreatedBy","")
     .set("IsActive","")
     .set("DestinationEnabled","")
     .set("LastAccessed","")
    return  this._http.get(`${this.getRecentConnection}`,{params:params});

    
       
  
  }
  


}