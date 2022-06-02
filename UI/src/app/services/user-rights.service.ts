import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRightsModel } from '../models/UserRights/UserRightsModel';

@Injectable({
  providedIn: 'root'
})
export class UserRightsService {

  _getUserRights=environment.apiUrl+'/api/UserRights/GetMainMenuRights';

 
  constructor(private _http:HttpClient) { }

  async getUserRightsURL(userRightsModel:UserRightsModel){
  debugger
  let params = new HttpParams()
  .set("UserId",userRightsModel.UserId)
  .set("subUserId",userRightsModel.subUserId)
  .set("WorkSpaceId",userRightsModel.WorkspaceId)
  .set("ClientId",userRightsModel.ClientId)
  .set("url",userRightsModel.url)
  return await this._http.get(`${this._getUserRights}`,{params:params}).toPromise();
}
}