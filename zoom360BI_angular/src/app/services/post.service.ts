import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'; 
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  url='https://localhost:44397';
  constructor(private _http: HttpClient) { 
  
  }
   ///     For Type ,Connection ,Templete ,Fetch Wadges

}
