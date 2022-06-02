import { environment } from '../../environments/environment.prod';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
// import publicIp from 'public-ip';
// import getMAC from 'getmac';
//import pkg from 'getmac';

@Injectable({
  providedIn: 'root'
})
export class ClientDeviceInfoService {
MACAddress:string='';
publicIpAddr:string;
constructor(private storageService: StorageService,private http:HttpClient) {
    }

  getMacAddress(){
    // var macaddress = require('macaddress');
    // macaddress.one
    return 'D8-FC-93-29-B4-DB';
  }

  getIPAddress(){
    // this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
    //   debugger
    //   this.ipAddress = res.ip;
    // });
    // return this.ipAddress;
    // publicIp.v4().then((ip) => this.publicIpAddr = ip);
    //return  this.userDetail.workspaceId= this.storageService.getItem(environment.storage.workspaceId); 
    return '192.168.32.36'
   
  }
  getDeviceType(){
    
    return 'Laptop';
  }
  getConnectionType(){
    
    return 'WIFI (Private)';
  }
  getLocation(){
    
    return 'Lahore';
  }

}
