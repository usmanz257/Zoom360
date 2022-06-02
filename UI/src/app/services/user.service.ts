
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor() {
    super();
  }

  login(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/api/authentication/login', data, { headers: this.headers });
  }

  adminRegister(data): Observable<any> {
    debugger
    return this.http.post<any>(this.apiUrl + '/api/authentication/RegisterUser', data, { headers: this.headers });
  }

  register(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/users', this.getBody(data), { headers: this.headers });
  }

  update(id, data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/users/' + id, data, { headers: this.headers });
  }

  getAll(params?): Observable<any> {
    debugger
    return this.http.get<any>(this.apiUrl + '/users', { params: this.getParams(params), headers: this.headers });
  }


  show(id): Observable<any> {
    debugger;
    return this.http.get<any>(this.apiUrl + '/users/' + id, { headers: this.headers });
  }

  upload_profile_image(id , data)
  {
    return this.http.post<any>(this.apiUrl + '/users/'+id+'/user-profile-image-upload', this.getBody(data), { headers: this.headers });
  }

  delete(id)
  {
    return this.http.delete<any>(this.apiUrl + '/users/'+id , { headers: this.headers });
  }

}
