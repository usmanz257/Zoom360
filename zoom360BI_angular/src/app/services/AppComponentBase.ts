import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ServiceInjector } from '../libraries/serviceInjector';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ClientDateTimeService } from './client-date-time.service';
import { ClientDetailService } from './client-detail.service';
import { ClientDeviceInfoService } from './client-DeviceInfo.service';
import { StorageService } from './storage.service';

export abstract class AppComponentBase {
  public clientDetailService:ClientDetailService;
  public clientDateTimeService:ClientDateTimeService;
  public clientDeviceInfoService:ClientDeviceInfoService;
  public storageService: StorageService;
constructor(injector : Injector) {
  this.clientDetailService     =  injector.get(ClientDetailService);
  this.clientDateTimeService   =  injector.get(ClientDateTimeService);
  this.clientDeviceInfoService =  injector.get(ClientDeviceInfoService);
  this.storageService          =  injector.get(StorageService);
  }

}
