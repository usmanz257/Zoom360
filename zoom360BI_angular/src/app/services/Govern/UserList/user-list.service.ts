import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  userId:string;
  workSpaceId:string;
  client_id:string;
  Status_message:string;
  SubUserId:string='Humna';
  _getUserListUrl= environment.apiUrl+'/api/UserAccessManagement/GetUserList';
  constructor(private _http:HttpClient) { }
  getUserList(){
    
    this.userId='admin';
    this.workSpaceId=''+1;
    this.client_id=''+1002;
    let params = new HttpParams()
    .set("UserId", this.userId)
    .set("WorkSpaceId", ''+this.workSpaceId)
    .set("Client_Id", this.client_id)
    debugger
    return this._http.get(`${this._getUserListUrl}`,{params:params});
  }
}
