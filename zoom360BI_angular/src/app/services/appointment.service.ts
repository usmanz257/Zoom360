import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseService {

  constructor() {
    super();
  }

  save(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/appointments', data, { headers: this.headers });
  }

  update(id , data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/appointments/'+id, data, { headers: this.headers });
  }

  getAll(params?): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/appointments', { params: this.getParams(params) , headers: this.headers });
  }


  show(id): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/appointments/' + id, { headers: this.headers });
  }

  delete(id){
    return this.http.delete<any>(this.apiUrl + '/appointments/' + id, { headers: this.headers });
  }

}
