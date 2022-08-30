import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecentConnectionsService {
url= environment.apiUrl + '/api/ConnectionLog/RecentConnectionLog';
  constructor(private _http:HttpClient) { }
  ResentModule(UserId:string,Workspaceid:string,Clientid:string){
     let params = new HttpParams()
     .set("UserId",UserId)
     .set("Workspaceid",Workspaceid)
     .set("Client_Id",Clientid)
      return  this._http.get(`${this.url}`,{params:params}); 
  
  }
}
