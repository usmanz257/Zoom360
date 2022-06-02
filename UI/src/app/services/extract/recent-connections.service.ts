import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentConnectionsService {
url='https://localhost:44357/api/ConnectorTypeDashbord/ConnectorTypeResntModule';
  constructor(private _http:HttpClient) { }
  ResentModule(UserId:string,Workspaceid:string,Clientid:string){
    debugger
     let params = new HttpParams()
     .set("UserId",UserId)
     .set("Workspaceid",Workspaceid)
     .set("Clientid",Clientid)
      return  this._http.get(`${this.url}`,{params:params}); 
  
  }
}
