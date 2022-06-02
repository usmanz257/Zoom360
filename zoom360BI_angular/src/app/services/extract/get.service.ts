import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  url='https://localhost:44397';
  constructor(private _http: HttpClient) { 
  
  }
  GetAccessGrantDropdownList() {
    return this
           ._http.get(`${this.url+'/api/TblConnections/GetTbConnectionAccessGrantd'}`);
    }
    GetWorkspaceList() {
      return this
             ._http.get(`${this.url+'/api/TblConnections/GetTbWorkSpace'}`);
      }
}
