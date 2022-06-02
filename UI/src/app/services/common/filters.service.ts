import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  userId='admin';
  _tablecounter:number=0;
  _recordLength:number=0;
  _screenName:string;
  //url For filters
  
  //COnnection
//  _workspaceAllCon:string='https://localhost:44357/api/AllConnections/GetWorkspacefiltersAllConBySp';
_getDestinationEnableDropDowns= environment.apiUrl + '/api/CommonDropdownList/GetDropdownList';
  _DatasourceAllCon:string= environment.apiUrl + '/api/AllConnections/GetDatasourcefiltersAllConBySp';
  _AccessGranted: string= environment.apiUrl + '/api/AllConnections/GetAccessGrantedfiltersAllConBySp';
  datastreamfilterStatus: boolean=false;
  allconnectionfilterStatus: boolean=false;
  allextractfilterStatus: boolean=false;
  allIssuefilterStatus: boolean=false;
  constructor(private _http:HttpClient) { }
  setFilter(screenName){
    if(screenName == 'datastream')
  {
    this.datastreamfilterStatus= true;
    this.allconnectionfilterStatus = false;
    this.allextractfilterStatus=false;
    this.allIssuefilterStatus=false;
  
  }else if(screenName == 'connections'){
    this.datastreamfilterStatus= false;
    this.allconnectionfilterStatus = true;
    this.allextractfilterStatus=false;
    this.allIssuefilterStatus=false;
  }
  else if(screenName == 'allextracts'){
    this.datastreamfilterStatus= false;
    this.allconnectionfilterStatus = false;
    this.allextractfilterStatus=true;
    this.allIssuefilterStatus=false;
    
  }
  else if(screenName == 'allissue'){
    this.datastreamfilterStatus= false;
    this.allconnectionfilterStatus = false;
    this.allextractfilterStatus=false;
    this.allIssuefilterStatus=true;
  }
  }
 
  
  //Connections
  GetDropDowns(dropdownname){
    let params = new HttpParams()
    .set("userId", this.userId)
    //.set("userId", "2")
    .set("dropdownName", dropdownname);
    return this._http.get(`${this._getDestinationEnableDropDowns}`,{params:params});
  }
  GetDatasourceAllCon(){
    return this._http.get(`${this._DatasourceAllCon}`);
  }
  GetAccessGrantedAllCon(){
    return this._http.get(`${this._AccessGranted}`);
  }
}
