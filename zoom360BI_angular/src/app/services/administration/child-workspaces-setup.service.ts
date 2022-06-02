import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChildWorkspacesModel } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildWorkspacesSetupService {
  _saveChildWorkspaceSetup= environment.apiUrl+'/api/ChildWorkSpace/SaveChildWorkspaces';
  _getChildWorkspaceSetup= environment.apiUrl+'/api/ChildWorkSpace/GetChildWorkSpace';
  userId:string='admin';
  workSpaceId:number=11;
  Client_id:string=''+1003;
  Status_message:string;
  _recordLength:number=0;
  allchildworkspace:ChildWorkspacesModel[]=[]
  constructor(private _http:HttpClient) { }


  saveWorkSpaceSetup(model:ChildWorkspacesModel){
    debugger
   return this._http.post(`${this._saveChildWorkspaceSetup}`,model,{responseType:'text'})
  
  }

  getchildWorksacesetup(userId:string,workSpaceId:string,Client_id:string){
    this.allchildworkspace.splice(0,this.allchildworkspace.length); 
    //this.accountId= localStorage.getItem("accountId");'abs
    debugger
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",workSpaceId)
    .set("CLIENT_ID",Client_id);
  return this._http.get(`${this._getChildWorkspaceSetup}`,{params:params});
  
}
}
