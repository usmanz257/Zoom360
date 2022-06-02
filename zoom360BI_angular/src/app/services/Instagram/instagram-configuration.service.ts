import { Injectable } from '@angular/core';
import { ControlDefaultsAndDiscription_Model } from 'src/app/Models/mainmenu.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SourceConnectionSettingModel, ObjectFieldsList, FieldMappingRuleTemplateModel } from 'src/app/Models/SourceSettings.Model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InstagramConfigurationService {
_url='https://localhost:44357/api/Instagram/GetDefualtDesc';

_urlSaveSourceConnectionSettings='https://localhost:44357/api/SourceSettings/updateSourceConnection';
_urlGetSourceTableList='https://localhost:44357/api/SourceDataTableList/GetSourceObjectListForStep4Grid';
_urlUpdateSourceTableList='https://localhost:44357/api/SourceDataTableList/SourceObjectGridListUpdateStep4';_
//_urlgetmappingScreenDropdowns='https://localhost:44357/api/MappingRule/getMapTempDropDown';

//_urlgetMappedFieldsDropdowns='https://localhost:44357/api/MappingRule/getMappedfieldDropDown';
_urlgetMappedFieldsDropdowns=environment.apiUrl + '/api/CommonDropdownList/GetDropdownList';
_urlmappingtemplateListDropdown=environment.apiUrl + '/api/SourceEdit/GetMapTempList';
_urlgetMappingRules= environment.apiUrl + '/api/SourceEdit/GetMappingRule';
_urlsaveMappingRulesTemplate= environment.apiUrl +'/api/SourceEdit/SaveMappingRule';
userId='admin'
workSpaceId='1';
Client_ID='1002';
connectorId:string='182';
accountId:string='1003';
connectionName:string='Master';
//Field_Label='Workspace';
Field_Value='Default';
Status_message:string;
_deafultAndDescriptionData:ControlDefaultsAndDiscription_Model[]=
[
  {fielD_VALUE:'',fielD_REMARK:''},
  {fielD_VALUE:'',fielD_REMARK:''},
  {fielD_VALUE:'',fielD_REMARK:''},
  {fielD_VALUE:'',fielD_REMARK:''},
  {fielD_VALUE:'',fielD_REMARK:''}

];
  constructor(private _http:HttpClient) { }

  GetMapedField(dropdownname){
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("dropdownName", dropdownname);
    return this._http.get(`${this._urlgetMappedFieldsDropdowns}`,{params:params});
  }
  getMapTempDropDown(){
    debugger
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("workspaceId", this.workSpaceId)
    .set("clientId", this.Client_ID)
    .set("connectorId", ''+182)
    return this._http.get(`${this._urlmappingtemplateListDropdown}`,{params:params});
  }
  getMappingRule(selectedMappingTemplate){
    let params = new HttpParams()
   .set("userId", this.userId)
   .set("workSpaceId",this.workSpaceId)
   .set("clientId", this.Client_ID)
   .set("connectorId",this.connectorId)
   .set("accountId", this.accountId)
   .set("templateName", selectedMappingTemplate);
   return this._http.get(`${this._urlgetMappingRules}`,{params:params})
  }
  SaveMappingRuleTemplate(fieldMappingRuleTemplateModel:FieldMappingRuleTemplateModel[],templateName){
    debugger
   let params = new HttpParams()
   .set("UserId", this.userId)
   .set("Workspaceid",this.workSpaceId)
   .set("Clientid", this.Client_ID)
   .set("connectorId",this.connectorId)
   .set("templateName",templateName);
  //  return this._http.get(`${this.url+'/api/SqlConnector/ObjectEntityFieldUpdateStep6'}`,EntityFieldList,{params:params});
  return this._http.post(this._urlsaveMappingRulesTemplate,fieldMappingRuleTemplateModel,{params:params}); 
  }
getDefaultAndDescription(Field_Label,j){
    // let params = new HttpParams().set("userId", this.userId).set("workSpaceId", this.workSpaceId)
    // .set("Client_ID", this.Client_ID).set("Account_Id",this.Account_Id).set("Field_Label",Field_Label).set("Field_Value",this.Field_Value);
    // this._http.get(`${this._url}`,{params:params}).subscribe((data:ControlDefaultsAndDiscription_Model) => {
    //   debugger
    //   this._deafultAndDescriptionData[j].fielD_VALUE= data.fielD_VALUE;
    //   this._deafultAndDescriptionData[j].fielD_REMARK= data.fielD_REMARK;
    //   console.log(this._deafultAndDescriptionData);
    //   });
}
setConfiguration(Field_Label,j){
  // let params = new HttpParams().set("userId", this.userId).set("workSpaceId", this.workSpaceId)
  // .set("Client_ID", this.Client_ID).set("Account_Id",this.Account_Id).set("Field_Label",Field_Label).set("Field_Value",this.Field_Value);
  // this._http.post(`${this._url}`,{params:params});
}
updateSourceConnectionSettings(sourceConnectionSettingModel:SourceConnectionSettingModel){
  sourceConnectionSettingModel.userId = this.userId;
  sourceConnectionSettingModel.workspaceId = this.workSpaceId;
  sourceConnectionSettingModel.clientId = this.Client_ID;
    this._http.post(`${this._urlSaveSourceConnectionSettings}`,sourceConnectionSettingModel,{responseType:'text'}).subscribe((data:string) => {
      debugger
      this.Status_message = data;
      console.log(this.Status_message);
      });

}
GetSourceObjectList(UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string,Databasename:string){
  debugger
 let params = new HttpParams().set("UserId", UserId)
 .set("Workspaceid",Workspaceid)
 .set("Clientid", Clientid)
 .set("ConnectorId",ConnectorId)
 .set("Databasename", Databasename);
 
 return this._http.get(`${this._urlGetSourceTableList}`,{params:params});

}
UpdateSourceObjectList(SourceObjectList:ObjectFieldsList[],UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string){
  debugger
 let params = new HttpParams().set("UserId", UserId)
 .set("Workspaceid",Workspaceid)
 .set("Clientid", Clientid)
 .set("ConnectorId",ConnectorId);
//  return this._http.get(`${this.url+'/api/SqlConnector/ObjectEntityFieldUpdateStep6'}`,EntityFieldList,{params:params});
return this._http.post(this._urlUpdateSourceTableList,SourceObjectList,{params:params}); 
}

}