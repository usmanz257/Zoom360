import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';

import {observable, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewConnectionSetupService {
  url='https://localhost:44397';
  constructor(private _http: HttpClient) { }
  SetDataForNewSQLConnection(listPropertyNames,listPropertyvalue,UserData){
    debugger
      // let params = new HttpParams().set("ConnectorId",ConnectorId).set("ConnectorName",ConnectorName);
      // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
      //  let obj={
      //   listPropertyNames,
      //    listPropertyvalue
      //   }
    
    
return this._http.post(this.url+'/api/Connector/SaveNewConnection',UserData,{responseType:'text'});

}
EmailAuthorization(Email:string,AccountAuthurization:string): Observable<any>{
  var UserData={
    Email,
    AccountAuthurization
  }
  debugger
  return this._http.post(this.url+'/api/Connector/EmailAuthanticationForConnection',UserData);

}
 

}
