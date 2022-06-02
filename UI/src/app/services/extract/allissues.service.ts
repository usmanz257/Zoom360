import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AllIssuesModel } from 'src/app/models/connect.model';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { FiltersService } from '../common/filters.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllissuesService {
//_urlAllissues='https://localhost:44357/api/Allissues/GetAllIssuesRowsLimitBysp';
//_urlAllissues='https://localhost:44357/api/Allissues/GetAllIssuesRowsLimitBysp';
//_urlAllissues='https://localhost:44357/api/AllissuesList/getIssuelist';
_urlAllissues = environment.apiUrl+'/api/AllExtract/GetAllIssueList';
userId:string='admin';
workSpaceId:number=1;
client_id:string=''+1002;
_issueData:any[]=[];
_issueSearch:AllIssuesModel[]=[];
_recordLength:number;
_tablecounter:number=0;
_sortToggle : boolean=false;
accountId:string='all';
  constructor(private _http:HttpClient,private sort: ArraySortPipe,private filterService:FiltersService) {
   }
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
        this.filterService._recordLength= data.length;
      }
  });
     }
  // getAllissuewithLimit(limit){
  //   let params = new HttpParams().set("limit", limit).set("userId", this.userId);
  // this._http.get(`${this._urlAllissues}`,{params:params}).subscribe((data: tblAllissues[]) => {
  //     if(data.length  > 0){
  //       this._issueData= data;
  //       this._issueSearch = data;
  //       this._recordLength = data.length;
  //     }
  // });
  //    }
searchAllissue(text){
  
      this._issueData = this._issueSearch;
      this._issueData = this._issueSearch.filter((data) =>data.connectionName.toLowerCase().includes(text.toLowerCase()));
      this._recordLength = this._issueData.length;
      this.filterService._recordLength=this._issueData.length;
      //t => t.title.toLowerCase().includes(this.query.toLowerCase())
    }
sortAllIssues(field){
   if(this._sortToggle){
      this._issueData = this.sort.transform(this._issueData,field);
    }
  
    else if(!this._sortToggle){
      this._issueData = this.sort.transform2(this._issueData,field);
    }
  
    }
}
