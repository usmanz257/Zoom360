import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GridStructureService {

  _urlGetGridStructure = environment.apiUrl+'/api/DynamicGridStructure/getDynamicGridStructure';
  _urlSaveGridStructure = environment.apiUrl+'/api/DynamicGridStructure/saveTemplateStructure';
  userId:string='admin';
  subUserId:string=''+1;
  workSpaceId:string=''+1;
  client_id:string='1002';
  treeLevel: string=''+0;
  constructor(private _http: HttpClient) { 
   // this.subUserId=localStorage.getItem("userId");
  }
  getGridStructure(){
    let params = new HttpParams()
    .set("UserId", this.userId)
    .set("subUserId", this.subUserId)
    .set("WorkspaceId", this.workSpaceId)
    .set("Client_Id", this.client_id)
    .set("ParentId", this.workSpaceId)
    .set("ChildId", this.client_id)
    .set("TreeLevel",""+0)
    debugger
    return this._http.get(`${this._urlGetGridStructure}`,{params:params});
    
  //   this._http.get(`${this._urltreeDropDown}`,{params:params}).subscribe((data: TreeDropDownParentModel[]) => {
  //     if(data.length  > 0){
        
  //       this.subMenuSection = data;
  //       }
        
      
  // });        
}
SaveGridStructure(saveTemplateinputModel){
  debugger
  return this._http.post(`${this._urlSaveGridStructure}`,saveTemplateinputModel);
}
}
