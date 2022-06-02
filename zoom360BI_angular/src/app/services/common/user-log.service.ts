import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLoginDetailModel } from 'src/app/models/clientLoginDetails.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {
  
  public headers: HttpHeaders;
  
   userLoggedinURL= environment.apiUrl+ '/api/authentication/UserLoggedin';

  constructor(private _http:HttpClient) { }

  UserLoggedin(user:ClientLoginDetailModel){
    return this._http.post(`${this.userLoggedinURL}`,user);
  }
}
