import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllIssuesModel } from 'src/app/Models/connect.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrichLogsService {
  _urlAllissues= environment.apiUrl+'/api/AllExtract/GetEnrichLog';
  userId:string='admin';
  workSpaceId:number=1;
  client_id:string=''+1002;
  _issueData:any[]=[];
  _issueSearch:AllIssuesModel[]=[];
  _recordLength:number;
  _tablecounter:number=0;
  _sortToggle : boolean=false;
  accountId:string='all';
  constructor(private _http:HttpClient) { }
  getAllissues(workspaceName,connectionName,sourceName,accessGranted
    ,createdBy,isActive,lastAccessed,destinationEnabled,limit){
      this.accountId= localStorage.getItem("accountId");
    this._issueData.splice(0,this._issueData.length); 
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("workSpaceId", ''+this.workSpaceId)
    .set("CLIENT_ID", this.client_id)
    .set("accountId", this.accountId)
    .set("workspaceName", workspaceName)
    .set("connectionName", connectionName)
    .set("sourceName", sourceName)
    .set("accessGranted", accessGranted)
    .set("createdBy", createdBy)
    .set("isActive", isActive)
    .set("lastAccessed", lastAccessed)
    .set("destinationEnabled", destinationEnabled);
  this._http.get(`${this._urlAllissues}`,{params:params}).subscribe((data: AllIssuesModel[]) => { 
    if(data.length  > 0){
        this._issueData= data;
        this._issueSearch = data;
        this._recordLength = data.length;
       // this.filterService._recordLength= data.length;
      }
  });
     }
}
