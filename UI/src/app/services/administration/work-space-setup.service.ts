import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { WorkspaceSetup, workSpaceParentGrid_Model } from 'src/app/Models/mainmenu.model';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WorkSpaceSetupService {

  
  _workSpaceDropDownUrl=environment.apiUrl+'/api/CommonDropdownList/GetDropDownList';
  // _getGridDataUrl='https://localhost:44357/api/WorkSpaceSetup/GetGridWorkspacelist';
  _getWorkspaceSetingsUrl=environment.apiUrl+'/api/WorkspaceSetup/GetWorkspaceSetupSettings';
  _getGridDataUrl=environment.apiUrl+'/api/WorkspaceSetup/GetWorkspaceSetupList';
  _url=environment.apiUrl+'/api/WorkspaceSetup/SaveWorkspaceSetup';
  _workSpaceParentDropdown:any[]=[];
  _workSpaceGrid:any[]=[];
  _workSpaceGridRandom:WorkspaceSetup[]=[];
  _tablecounter=0;
  status:boolean=false;
  _sortToggle : boolean=false;
  _recordLength:number=0;
  userId:string='admin';
  dropDownParentName='Parent Workspace';
  workSpaceId:string="11";
  workspaceName:string=null;
  Client_Id:string='1002';
  workspacename='';
  parentWorkSpace='';
  Status_message:string='';
  constructor(private _http:HttpClient,private sort: ArraySortPipe) { }
  
  getWorkSpaceParentList(){
    let params = new HttpParams().set("UserId", this.userId).set("dropdownName", this.dropDownParentName);
   return this._http.get(`${this._workSpaceDropDownUrl}`,{params:params});
  }
  getWorkSpaceSettings(){
    let params = new HttpParams()
    .set("UserId", this.userId)
    .set("ClientId",this.Client_Id)
    .set("WorkspaceId",this.workSpaceId);
    return this._http.get(`${this._getWorkspaceSetingsUrl}`,{params:params});
}
  getGridWorkSpaceList(userId:string,workSpaceId:string,Client_Id:string){
    debugger
      let params = new HttpParams()
      .set("userId", userId)
      .set("workSpaceId",'')
      .set("ClientId", Client_Id)
      .set("workSpaceName",'')
      .set("parentWorkSpace",'');
    return this._http.get(`${this._getGridDataUrl}`,{params:params}) 
}
getWorkSpaceList(userId:string,workSpaceId:string,Client_Id:string){
  debugger
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",'')
    .set("ClientId", Client_Id)
    .set("workSpaceName",'')
    .set("parentWorkSpace",'');
 return this._http.get(`${this._getGridDataUrl}`,{params:params})
}
saveWorkSpaceSetup(modal:WorkspaceSetup){
    debugger
       
  return  this._http.post(`${this._url}`,modal,{responseType:'text'})

  }
sortWorkSetup(field){
    if(this._sortToggle){
       this._workSpaceGrid = this.sort.transform(this._workSpaceGrid,field);
     }
   
     else if(!this._sortToggle){
       this._workSpaceGrid = this.sort.transform2(this._workSpaceGrid,field);
     }
   
      }
}
