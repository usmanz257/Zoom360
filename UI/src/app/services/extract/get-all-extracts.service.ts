import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllExtractListModel } from 'src/app/models/connect.model';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';
import { FiltersService } from '../common/filters.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllExtractsService {
  //_AllExtractsUrl ='https://localhost:44357/api/AllExtracts/GetAllExtractsRowsLimitBysp';
  //_AllExtractsUrl ='https://localhost:44357/api/AllExtracts/GetAllExtractsRowsLimitBysp';
  
  _allExtractListUrl= environment.apiUrl + '/api/AllExtract/getAllExtractList';
  userId:string='admin';
  workSpaceId:number=1;
  client_id:string=''+1002;
  extractData:any[]=[];
  _ExtractSearch: AllExtractListModel[]=[];
  _recordLength:number=0;
  _sortToggle : boolean=false;
  _tablecounter:number=0;
  accountId:string='all';
 
  
  constructor(private _http:HttpClient,private sort: ArraySortPipe,private filterService:FiltersService) { 
    
  }

  getAllextract(workspaceName,connectionName,sourceName,accessGranted
    ,createdBy,isActive,lastAccessed,destinationEnabled,limit){
    
    this.accountId= localStorage.getItem("accountId");
    this.extractData.splice(0,this.extractData.length); 
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("workSpaceId", ''+this.workSpaceId)
    .set("CLIENT_ID", this.client_id)
    .set("accountId",this.accountId)
    .set("workspaceName", workspaceName)
    .set("connectionName", connectionName)
    .set("sourceName", sourceName)
    .set("accessGranted", accessGranted)
    .set("createdBy", createdBy)
    .set("isActive", isActive)
    .set("lastAccessed", lastAccessed)
    .set("destinationEnabled", destinationEnabled);
  
  this._http.get(`${this._allExtractListUrl}`,{params:params}).subscribe((data: AllExtractListModel[]) => { 
    if(data.length  > 0){
       
        this.extractData= data;
        this._ExtractSearch = data;
        this._recordLength = data.length;
        this.filterService._recordLength=data.length;
        console.log(this.extractData);
      }
  });
     }
//   geAllExtract(limit){
//     let params = new HttpParams().set("limit", limit)
//     .set("userId", this.userId);
//   return this._http.get(`${this._allExtractListUrl}`,{params:params}).subscribe((data:any) => {
//       if(data.length  > 0){
//         this.extractData= data;
//         this._ExtractSearch = data;
//         this._recordLength = data.length;
//         console.log(this.extractData);
//       }
//   });
// }
searchAllExtract(text){
  
    this.extractData = this._ExtractSearch;
    this.extractData = this._ExtractSearch.filter((data) =>data.connectionName.toLowerCase().includes(text.toLowerCase()));
    this._recordLength = this.extractData.length;
    this.filterService._recordLength=this.extractData.length;
    //t => t.title.toLowerCase().includes(this.query.toLowerCase())
  }
sortAllExtract(field){
 if(this._sortToggle){
    this.extractData = this.sort.transform(this.extractData,field);
  }

  else if(!this._sortToggle){
    this.extractData = this.sort.transform2(this.extractData,field);
  }

  }
}
