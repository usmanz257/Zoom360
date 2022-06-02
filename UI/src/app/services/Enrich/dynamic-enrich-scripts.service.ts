import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamicEnrichScriptsService {
  _FunctionTemplateUrl=environment.apiUrl+'/api/DynamicEnrichScript/getfunctiontemplate';
  _saveScriptUrl=environment.apiUrl+'/api/DynamicEnrichScript/saveEnrichScript';
  _getScriptUrl=environment.apiUrl+'/api/DynamicEnrichScript/getEnrichScript';
  _updateScriptUrl=environment.apiUrl+'/api/DynamicEnrichScript/updateEnrichScript';
  //Grid
  _saveScriptUrlbyGrid=environment.apiUrl+'/api/DynamicEnrichScript/saveEnrichScriptByGrid';
  _getScriptUrlForGrid=environment.apiUrl+'/api/DynamicEnrichScript/getEnrichScriptForGrid';
  _updateScriptUrlForGrid=environment.apiUrl+'/api/DynamicEnrichScript/updateEnrichScriptOfGrid';
  //Grid 2
  _saveScriptUrlbyGrid2=environment.apiUrl+'/api/DynamicEnrichScript/saveEnrichScriptByGrid2';
  _getScriptUrlForGrid2=environment.apiUrl+'/api/DynamicEnrichScript/getEnrichScriptForGrid2';
  _updateScriptUrlForGrid2=environment.apiUrl+'/api/DynamicEnrichScript/updateEnrichScriptOfGrid2';
  constructor(private _http: HttpClient) { }
  getfunctionTemplate(){
    return  this._http.get(`${this._FunctionTemplateUrl}`);
  }
  saveScript(collection){
    return  this._http.post(`${this._saveScriptUrl}`,collection);
  }
  getScript(usedId,workspaceId,clientId,templateId){
    let params = new HttpParams()
  .set("userId", usedId)
  .set("workspaceId", workspaceId)
  .set("clientId", clientId)
  .set("templateId", templateId)
    return  this._http.get(`${this._getScriptUrl}`,{params:params});
  }
  updateScript(Script,scriptId){
    let params = new HttpParams()
  .set("_id", scriptId);
    return  this._http.put(`${this._updateScriptUrl}`,Script,{params:params});
  }
  //Script by grid
  saveScriptByGrid(collection){
    return  this._http.post(`${this._saveScriptUrlbyGrid}`,collection);
  }
  getScriptForGrid(usedId,workspaceId,clientId,templateId){
    let params = new HttpParams()
  .set("userId", usedId)
  .set("workspaceId", workspaceId)
  .set("clientId", clientId)
  .set("templateId", templateId)
    return  this._http.get(`${this._getScriptUrlForGrid}`,{params:params});
  }
  updateScriptForGrid(Script,scriptId){
    let params = new HttpParams()
  .set("_id", scriptId);
    return  this._http.put(`${this._updateScriptUrlForGrid}`,Script,{params:params});
  }
   //Script by grid2
  saveScriptByGrid2(collection){
    return  this._http.post(`${this._saveScriptUrlbyGrid2}`,collection);
  }
  getScriptForGrid2(usedId,workspaceId,clientId,templateId){
    let params = new HttpParams()
  .set("userId", usedId)
  .set("workspaceId", workspaceId)
  .set("clientId", clientId)
  .set("templateId", templateId)
    return  this._http.get(`${this._getScriptUrlForGrid2}`,{params:params});
  }
  updateScriptForGrid2(Script,scriptId){
    let params = new HttpParams()
  .set("_id", scriptId);
    return  this._http.put(`${this._updateScriptUrlForGrid2}`,Script,{params:params});
  }
}
