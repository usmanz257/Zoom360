import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';

import {observable, Observable} from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class MainmenuService {
    client_id:string='1002';
    userId:string='admin';
    Mode_ID:number=1;
    url='https://localhost:44397';
    constructor(private _http: HttpClient, private router: Router) { }
    
    getMenuItems(){
        debugger
        let params = new HttpParams()
        .set("userId", this.userId)
        .set("workSpaceId",''+9)
        .set("CLIENT_ID", this.client_id)
        .set("Mode_ID",""+this.Mode_ID);
        return this._http.get(`${this.url+'/api/Menu/getMainMenulist'}`,{params:params});        
        } 
   
  }