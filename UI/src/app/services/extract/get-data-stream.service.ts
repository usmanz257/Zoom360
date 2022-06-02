import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { SourceListModel } from 'src/app/models/connect.model';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { FiltersService } from '../common/filters.service';
import { TblDatastream } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataStreamService {
 // _urlDataStream = 'https://localhost:44357/api/getLists/GetDataStreamBysp';
  _urlFilteredDataStream = 'https://localhost:44357/api/getLists/GetfiltesDataStreamBySp';
  _urlAllConnections = 'https://localhost:44357/api/getLists/GetAllConnectionsBysp';
  _urlAllExtract = 'https://localhost:44357/api/getLists/GetAllExtractsBysp';
  _urlAllDataStreamWithLimit='https://localhost:44357/api/DataStream/GetDataStreamBySp';
  //last
 // _urlDataSteamList='https://localhost:44357/api/Sourcelist/GetSourcelist';
 _urlDataSteamList=environment.apiUrl+'/api/AllExtract/GetSourceList';
  userId:string='admin';
  workSpaceId:number=1;
  client_id:string=''+1002;
  scheduled:string='all';
  enabled:string='all';
  connection:string='all';
  datasource:string='all';
  creator:string='all';
  accountId:string;
  _StreamData : any[]=[];
  _StreamFilter : SourceListModel[]=[];
  _recordLength : number=0;
  _tablecounter : number=0;
  _sortToggle : boolean=false;
  text:string;
  constructor(private _http: HttpClient, private router: Router,private sort: ArraySortPipe,private filtersService:FiltersService) { }
  // getDatastreams(){
  //   this._http.get(`${this._urlDataStream}`).subscribe((data: TblDatastream[]) => {
  //       if(data.length  > 0){
  //         this._StreamData= data;
  //         this._StreamFilter = data;
  //         this._recordLength = data.length;
          
  //         //  this code get filter values from the table data
  //         //  this.connectionFilter = this.streamTable.map((stream)=> stream.sName);
  //         //  this.connectionFilter=this.connectionFilter.filter((v,i)=> this.connectionFilter.indexOf(v)===i);
  //         // console.log(this.connectionFilter);
  //        //this.countDataStream = this.streamTable.length;
  //       }
  //   });
  //      }
    getDatastreamswithLimit(workspaceName,connectionName,sourceName,accessGranted
      ,createdBy,isActive,lastAccessed,destinationEnabled,limit){
        
        this.accountId= localStorage.getItem("accountId");
        this._StreamData.splice(0,this._StreamData.length); 
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
      debugger
    this._http.get(`${this._urlDataSteamList}`,{params:params}).subscribe((data: SourceListModel[]) => {
        if(data.length  > 0){
          debugger
          this._StreamData= data;
          this._StreamFilter = data;
          this._recordLength = data.length;
          this.filtersService._recordLength=data.length;
          console.log(this._StreamData);
          //  this code get filter values from the table data
          //  this.connectionFilter = this.streamTable.map((stream)=> stream.sName);
          //  this.connectionFilter=this.connectionFilter.filter((v,i)=> this.connectionFilter.indexOf(v)===i);
          // console.log(this.connectionFilter);
         //this.countDataStream = this.streamTable.length;
        }
    });
       }
getDatastreamsEdit(workspaceName,connectionName,sourceName,accessGranted
        ,createdBy,isActive,lastAccessed,destinationEnabled,limit){
          
          this.accountId= localStorage.getItem("accountId");
          this._StreamData.splice(0,this._StreamData.length); 
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
        debugger
        return this._http.get(`${this._urlDataSteamList}`,{params:params});
         }     
    getFilterDatastreams(sName){
      let params = new HttpParams().set("sName", sName);
            this._http.get(`${this._urlFilteredDataStream}`,{params:params}).subscribe((data: TblDatastream[]) => {
              if(data.length  > 0){
                this._StreamData= data;         
                //  this code get filter values from the table data
                //  this.connectionFilter = this.streamTable.map((stream)=> stream.sName);
                //distinct
                //  this.connectionFilter=this.connectionFilter.filter((v,i)=> this.connectionFilter.indexOf(v)===i);
                
               //this.countDataStream = this.streamTable.length;
              }
          });
      }
    search(text){
      this._StreamData = this._StreamFilter;
      this._StreamData = this._StreamData.filter((data) =>data.sourceName.toLowerCase().includes(text.toLowerCase()));
      this._recordLength = this._StreamData.length;
      this.filtersService._recordLength = this._StreamData.length;

      //t => t.title.toLowerCase().includes(this.query.toLowerCase())
    }
    sortDataStream(field){
   if(this._sortToggle){
     this._StreamData = this.sort.transform(this._StreamData,field);
    }
  
    else if(!this._sortToggle){
     this._StreamData = this.sort.transform2(this._StreamData,field);
    }
  
    }
}
