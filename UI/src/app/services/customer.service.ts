import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

  constructor() {
    super();
  }

  save(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/customers', this.getBody(data), { headers: this.headers });
  }

  update(id , data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/customers/'+id, data, { headers: this.headers });
  }

  getAll(params?): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/customers', { params:this.getParams(params) ,  headers: this.headers });
  }


  show(id): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/customers/' + id, { headers: this.headers });
  }

  upload_profile_image(id , data)
  {
    return this.http.post<any>(this.apiUrl + '/customers/'+id+'/customer-profile-image-upload', this.getBody(data), { headers: this.headers });
  }


}
