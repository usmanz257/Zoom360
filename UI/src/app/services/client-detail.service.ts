import { environment } from './../../environments/environment.prod';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {
  public userDetail:UserDetail={
    userId:'',
    workspaceId:'',
    clientId:''
  };
  
  constructor(private storageService: StorageService) {
    // this.userDetail.userId= this.storageService.getItem(environment.storage.userId);
    // this.userDetail.workspaceId= this.storageService.getItem(environment.storage.workspaceId);
    // this.userDetail.userId= this.storageService.getItem(environment.storage.clientId);
    }
  // getUserDetailFromLocalStorage():UserDetail{
  //   this.userDetail.userId= this.storageService.getItem(environment.storage.userId);
  //   this.userDetail.workspaceId= this.storageService.getItem(environment.storage.workspaceId);
  //   this.userDetail.userId= this.storageService.getItem(environment.storage.clientId);
  //   return this.userDetail
  //   }
  public getuserID(){
    return  this.userDetail.userId= this.storageService.getItem(environment.storage.userId);
  }
  getWorkspaceID(){
    return  this.userDetail.workspaceId= this.storageService.getItem(environment.storage.workspaceId);
    }
  getClientID(){
      return  this.userDetail.clientId= this.storageService.getItem(environment.storage.clientId);
      }
}
