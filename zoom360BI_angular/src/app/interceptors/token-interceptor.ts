
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable , throwError } from 'rxjs';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ServiceInjector } from '../libraries/serviceInjector';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage.service';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private bsModalService: BsModalService;
  private bsModalRef: BsModalRef;
  private tokenKey: string;
  // private storageService: StorageService;
  constructor(public storageService: StorageService , private router: Router,) {
    // this.bsModalService = ServiceInjector.injector.get(BsModalService);
    this.tokenKey = environment.storage.userData;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:one-variable-per-declaration
    const userData = this.storageService.getItem(this.tokenKey);
    // tslint:disable-next-line:prefer-const
    let httpHeaders: any = {};
    if (userData && userData.token) {
      httpHeaders.authorization = `Bearer ${userData.token}`;
      request = request.clone({
        url: request.url,
        setHeaders: httpHeaders
      });
      // console.log(request);
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              // this.errorDialogService.openDialog(event);
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if(error.error.expiredToken){
          this.storageService.setItem(environment.storage.userData , null);
          this.router.navigate(['auth/login']);
        }else if(error.status == 401){
          this.storageService.setItem(environment.storage.userData , null);
          this.router.navigate(['auth/login']);
        }else if(error.status == 401){
        }
          return throwError(error);
      }));;
  }
}
