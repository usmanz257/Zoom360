import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { options } from 'fusioncharts';
import { RollupTreeDto, RollupTreeModel } from 'src/app/models/common/RollupTree.model';
import { TreeTemplateDto, TreeTemplateInput } from 'src/app/models/common/TreeTemplate.model';
import { environment } from 'src/environments/environment';
import { debug } from 'util';
import { AppComponentBase } from '../AppComponentBase';

@Injectable({
  providedIn: 'root'
})
export class TreeTemplateService extends AppComponentBase {
  
  rollupTreeModel:RollupTreeModel[]=[];
  public Treedropsetting: object;
  submenuId:string='';
  _getRollupTree= environment.apiUrl + '/api/CommonDropdownList/GetRollupTree';
  _saveTreetemplate=environment.apiUrl+'/api/TreeControlTemplate/SaveTreeControlTemplate';
  _getTreetemplate = environment.apiUrl +'/api/TreeControlTemplate/GetTreeControlTemplate';
  _driveuploadfile=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/UploadFIle";
  _geturl= environment.apiUrl+'/api/TreeControlTemplate/GetTreeTemplatequerydata'
  constructor(private _http: HttpClient,injector:Injector) {
    super(injector);
   }
   setSubMenuId(treeScriptIdValue){
    this.storageService.setItem(environment.storage.treeScriptId,treeScriptIdValue);
   }
  GetRollupTree(){
    let params = new HttpParams()
    .set("userId", this.clientDetailService.getuserID())
    .set("clientID", this.clientDetailService.getClientID())
    .set("workspaceId", this.clientDetailService.getWorkspaceID())
    .set("ClientDate", this.clientDateTimeService.getCilentDate())
    .set("ClientTime", this.clientDateTimeService.getCilentTime())
    .set("ClientTimeZone", this.clientDateTimeService.getClientTimeZone())
    .set("TreeName", '')
    .set("ScriptId", this.storageService.getItem(environment.storage.treeScriptId))
    this._http.get(`${this._getRollupTree}`,{params:params}).subscribe((data:any)=>{
      debugger
      this.rollupTreeModel=data;
      this.Treedropsetting={ dataSource: this.rollupTreeModel, id: 'nodeId', parentID: 'parentId', text: 'nodeName', hasChildren: 'hasChild', expanded: 'isExpanded'}
    });
  }

  saveTreeTempalte(treeTemplateDto:TreeTemplateDto,scriptId){
    debugger
    let params = new HttpParams()
    .set("_id", scriptId)
    return this._http.put(`${this._saveTreetemplate}`,treeTemplateDto,{params:params});
  }
  getTreeTemplate(treeTemplateInput:TreeTemplateInput){
    let params = new HttpParams()
    .set("userId", treeTemplateInput.userId)
    .set("workspaceId", treeTemplateInput.workspaceId)
    .set("clientId", treeTemplateInput.clientId)
    .set("nodeid", treeTemplateInput.Node_id)
    .set("scriptId", treeTemplateInput.scriptId)
    return this._http.get(`${this._getTreetemplate}`,{params:params});
  }
  uploadfile(formdata,UserId:string,WORKSPACEID:string,CLIENTID:string,ConnectorId:string,AccountId:string){
    debugger
    let params = new HttpParams()
      .set("UserId",UserId)
      .set("WORKSPACEID",WORKSPACEID)
      .set("CLIENTID",CLIENTID)
      .set("ConnectorId",ConnectorId)
      .set("AccountId",AccountId);
    
   // let params = new HttpParams().set("UserId",UserId).set("DropdownType",DropdownType);
  //Server file upload
   // return this._http.post(this.UploadFile,formdata,{params:params,reportProgress: true, observe: 'events'});
   
   //Google drive file upload
   return this._http.post(this._driveuploadfile,formdata,{params:params,reportProgress: true, observe: 'events'});
}
  getTreeTemplateQueryData(userId:string,workspaceId:string,clientId:string,scriptId:string,nodeid:string){
    debugger
    let params = new HttpParams()
    .set("userId", userId)
    .set("workspaceId", workspaceId)
    .set("clientId",clientId)
    .set("scriptId",scriptId)
    .set("nodeId",nodeid)
    return this._http.get(this._geturl,{params:params});
  }
}