import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ServiceInjector } from '../libraries/serviceInjector';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public apiUrl: string;
  public headers: HttpHeaders;
  protected http: HttpClient;

  constructor() {
    this.http = ServiceInjector.injector.get(HttpClient);
    this.headers = new HttpHeaders();
    this.apiUrl = environment.apiUrl;
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  getBody(data) {
    let body = new FormData();
    if (data instanceof Object && (data instanceof Array) === false) {
      if (Object.keys(data).length > 0) {
        for (let key in data) {
          if (data[key] instanceof Object && (data[key] instanceof Array) === false && data[key] instanceof File === false) {
            for (let nKey in data[key]) {
              body.append(`${key}[${nKey}]`, data[key][nKey]);
            }
          }
          else if ((data[key] instanceof Array) === true && data[key] instanceof File === false) {
            for (let i in data[key]) {
              body.append(`${key}[${i}]`, data[key][i]);
            }
          }
          else {
            body.append(key, data[key]);
          }
        }
      }
    }
    return body;
  }

  getParams(data) {
    let query = new HttpParams();
    if (data instanceof Object && (data instanceof Array) === false) {
      if (Object.keys(data).length > 0) {
        for (let key in data) {
          if (data[key] instanceof Object && (data[key] instanceof Array) === false && data[key] instanceof File === false) {
            for (let nKey in data[key]) {
              query = query.append(`${key}[${nKey}]`, data[key][nKey]);
            }
          }
          else if ((data[key] instanceof Array) === true && data[key] instanceof File === false) {
            for (let i in data[key]) {
              query = query.append(`${key}[${i}]`, data[key][i]);
            }
          }
          else {
            query = query.set(key, data[key]);
          }
        }
      }
    }
    return query;
  }
}
