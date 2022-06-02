import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ConnectionListModel } from '../../../../src/app/models/connect.model';
import { ArraySortPipe } from '../../../../src/app/shared/pipes/array-pipes';
import { FiltersService } from '../common/filters.service';
import{environment} from '../../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetAllConnectionsService {
//_urlAllConnections='https://localhost:44357/api/ConnectionList/GetConnectionlist';
_urlAllConnections=environment.apiUrl+'/api/AllExtract/GetConnectionList';
userId:string='admin';
workSpaceId:number=1;
client_id:string=''+1003;
_connectionData: any[]=[];
_connectionsearch : ConnectionListModel[]=[];
_connectionEdit : ConnectionListModel[]=[];
_recordLength:number=0;
_sortToggle:boolean=false;
_tablecounter:number=0;
accountId:string='all';
connectionLogo:string;
connectionName:string;
  constructor(private _http:HttpClient,private sort: ArraySortPipe, private filterService:FiltersService) {
    // this.accountId= JSON.parse(localStorage.getItem("SourceId"));
   }
  getAllConnectionswithLimit(workspaceName,connectionName,sourceName,accessGranted
    ,createdBy,isActive,lastAccessed,destinationEnabled,limit){
      debugger
    this._connectionData.splice(0,this._connectionData.length); 
    this.accountId= localStorage.getItem("accountId");
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
    
  this._http.get(`${this._urlAllConnections}`,{params:params}).subscribe((data: ConnectionListModel[]) => { 
    if(data.length  > 0){
        debugger
        this._connectionData= data;
        this._connectionsearch = data;
        this.connectionName=data[0].connectorName;
        this.connectionLogo=data[0].appearanceLogo;
        this.filterService._recordLength = data.length;
        this._recordLength=data.length;
        console.log(this._connectionEdit);
      }
  });
     }
searchAllConnections(text){
      this._connectionData = this._connectionsearch;
      this._connectionData = this._connectionsearch.filter((data) =>data.accountDisplayName.toLowerCase().includes(text.toLowerCase()));
      this._recordLength = this._connectionData.length;
      this.filterService._recordLength=this._connectionData.length;
      //t => t.title.toLowerCase().includes(this.query.toLowerCase())
    }
    sortAllissues(field){
      if(this._sortToggle){
         this._connectionData = this.sort.transform(this._connectionData,field);
       }
     
       else if(!this._sortToggle){
         this._connectionData = this.sort.transform2(this._connectionData,field);
       }
     
       }
}
