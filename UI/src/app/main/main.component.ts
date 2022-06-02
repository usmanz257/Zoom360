import {  OnInit, ViewChild } from "@angular/core";
import { Component, Injector } from '@angular/core';
import { ToastComponent } from "@syncfusion/ej2-angular-notifications";
import { ButtonComponent } from "ej-angular2";
import { environment } from "src/environments/environment";
import { ClientLoginDetailModel } from "../models/clientLoginDetails.model";
import { UAMDropdownModel } from "../models/common/dropdownmodel";
import { ToastMessage } from "../models/MessageTypes/toast-message";
import { AppComponentBase } from "../services/AppComponentBase";
import { AppMenuService } from "../Services/common/app-menu.service";
import { UserLogService } from "../services/common/user-log.service";
import { StorageService } from "../services/storage.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AppComponentBase implements OnInit {
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position=this.testToast.position;
	public btnEleShow: ButtonComponent;
  modeid:'';
  modelist:UAMDropdownModel[]=[];
  clientLoginDetails:ClientLoginDetailModel={} as ClientLoginDetailModel;
constructor(injector:Injector,private MenuService:AppMenuService){
  super(injector);
  
  this.storageService.setItem(environment.storage.ModeId,1);
  // this.storageService.setItem(environment.storage.appMode,true);
  // this.storageService.setItem(environment.storage.presentMode,false);
  this.MenuService.getNavModedropdown(this.storageService.getItem(environment.storage.userId),this.storageService.getItem(environment.storage.ModeId));
//  this.modelist =
    
}
ngOnInit(){
}

}
