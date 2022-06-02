import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
 import {observable, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
 


@Injectable({
  providedIn: 'root'
})

export class DataQualityService {
 url='https://localhost:44397';
 _saveDataQualityConfig=environment.apiUrl+'/api/Prepare/saveDataLabeling';
 getDatagualityList=environment.apiUrl+"/api/Prepare/GetDataQualityList";
    constructor(private _http: HttpClient, private router: Router) 
    { }
    
  getdataQualityList(UserId:string,WorkspaceId:string,ClientId:string,
    FunctionDisplayName:string,FunctionGroup:string,FunctionDetail:string,enable:string){
    debugger
    let params = new HttpParams()
    .set("UserId",UserId) 
    .set("WorspaceId",WorkspaceId) 
    .set("ClientId",ClientId) 
    .set("displayname",FunctionDisplayName) 
    .set("functiongroup",FunctionGroup) 
    .set("functiondetail",FunctionDetail)
    .set("enable",enable); 
    return  this._http.get(`${this.getDatagualityList}`,{params:params});
  }
  SaveConfiguration(inputModel){
   return this._http.post(`${this._saveDataQualityConfig}`,inputModel);
  }
  }