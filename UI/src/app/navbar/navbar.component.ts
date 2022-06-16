import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientLoginDetailModel } from '../models/clientLoginDetails.model';
import { UAMDropdownModel } from '../models/common/dropdownmodel';
import { MianMenuModel } from '../models/common/mainmenu.model';
import { GetWorkbookdto } from '../models/DynamicDashboard/Workbookdto';
import { AppComponentBase } from '../services/AppComponentBase';
import { AppMenuService } from '../Services/common/app-menu.service';
import { DropDownLoadService } from '../services/common/drop-down-load.service';
import { FiltersService } from '../Services/common/filters.service';
import { UserLogService } from '../services/common/user-log.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppComponentBase  implements OnInit {
  applicationMode:boolean=true;
  presentationMode:boolean=false;
  mode_id: number=1;
  mainmenuID:number=2;
  path:String;
  userId:string='';
  workSpaceId:string='';
  client_id:string='';
  title = 'DataAnalysisRaptore';
  userName:string='';
  companyName:string='';
  userProfileImage:string;
  clientName:string;
  clientLogo:string;
  clientLoginDetails:ClientLoginDetailModel={} as ClientLoginDetailModel;
  userInfo:any;
  Getworkbookdtos:GetWorkbookdto[]=[];
  constructor(
    private router: Router,public MenuService: AppMenuService,
    private userLogService: UserLogService,
    injector:Injector){
   // this.loginDataService.getLoginDetail();
    super(injector);
    this.userInfo = this.storageService.getItem(environment.storage.userData);
    this.userName =  this.userInfo.customUserInfo.loginUserName;
    this.companyName = this.userInfo.customUserInfo.userDeptInfo;
    this.clientName = this.userInfo.customUserInfo.clientName;
    this.clientLogo = this.userInfo.customUserInfo.clientLogo;
    this.userProfileImage=this.storageService.getItem(environment.storage.userProfileImage);
    this.mode_id=this.storageService.getItem(environment.storage.ModeId);
    // this.applicationMode= this.storageService.getItem(environment.storage.appMode);
    // this.presentationMode= this.storageService.getItem(environment.storage.presentMode);
    //this.getMenu(this.mode_id);
  }
  ngOnInit(){
    this.userId=this.storageService.getItem(environment.storage.userId);
    this.workSpaceId=this.storageService.getItem(environment.storage.workspaceId);
    this.client_id=this.storageService.getItem(environment.storage.clientId);
    let path = window.location.href;
    let subMenuName = path.substring(path.lastIndexOf("/") + 1);
    if(this.mode_id==2){
      this.MenuService.getWorkbooks(this.userId,this.workSpaceId,this.client_id).subscribe(res => {
        this.Getworkbookdtos = res;
     this.MenuService.page$.next(this.Getworkbookdtos[0].pages[0]);
      });
    }
   

    

  }
  getMenu(mode_id){
  this.userId = this.clientDetailService.getuserID();
  this.workSpaceId=this.clientDetailService.getWorkspaceID();
  this.client_id = this.clientDetailService.getClientID();
    this.MenuService.getMenuItems(mode_id,this.userId,this.workSpaceId,this.client_id);
  }
  changeMode(value){
  if(value==1){
  this.storageService.setItem(environment.storage.ModeId,value);
  this.router.navigate(['extract/extraction/summary']);
  }
  else if(value==2){
    
    this.storageService.setItem(environment.storage.ModeId,value);
    //this.MenuService.getsubMenuSection('7');
    this.MenuService.getWorkbooks(this.userId,this.workSpaceId,this.client_id).subscribe(res => {
      debugger
      this.Getworkbookdtos = res;
      this.router.navigate(['presentationMode/PresentMain/kpi/achivements']);
    })

  }
  else if(value==3){
    this.logout();
  }
  else if(value==4){
    this.router.navigate(['timeline/main']);
  }
  
}
getpagewidgets(page:any){
  debugger
  this.MenuService.page$.next(page);
  //   setTimeout (() => {
  //     this.MenuService.setActiveClass("link"+test1.id);
  //  }, 500);
}
logout(){
  // var Allkeys= Object.keys(environment.storage)
  // Allkeys.forEach(e=> this.storageService.removeItem(environment.storage[e])
  this.storageService.removeItem(environment.storage.userData);
  localStorage.clear();
  this.UserLoggedout();
  this.router.navigate(["/auth/login"]);
  this.userName='';
}
UserLoggedout() {
  this.clientLoginDetails.ClientDate= this.clientDateTimeService.getCilentDate();
  this.clientLoginDetails.ClientTime= this.clientDateTimeService.getCilentTime();
  this.clientLoginDetails.ClientTimeZone= this.clientDateTimeService.getClientTimeZone();
  this.clientLoginDetails.location=this.clientDeviceInfoService.getLocation();
  this.clientLoginDetails.ipAddress=this.clientDeviceInfoService.getIPAddress();
  this.clientLoginDetails.macAddress=this.clientDeviceInfoService.getMacAddress();
  this.clientLoginDetails.deviceType=this.clientDeviceInfoService.getDeviceType();
  this.clientLoginDetails.loginStatus='Successfully Logout';
  this.clientLoginDetails.connectionType=this.clientDeviceInfoService.getConnectionType();
  this.clientLoginDetails.Email=this.clientDetailService.getuserID();
  this.clientLoginDetails.workspaceId=this.clientDetailService.getWorkspaceID();
  this.clientLoginDetails.clientID=this.clientDetailService.getClientID();
  this.clientLoginDetails.userActivity='0';
  this.userLogService.UserLoggedin(this.clientLoginDetails).subscribe(
    (data:any) => {
 
      console.log(data);
    },
    (err:any) => {

      //this.testToast.toast[2].content='err.statusText';
      console.log(err.statusText);
    });
}
setMainMenuId(id){
this.MenuService.setMainMenuId(id);
this.storageService.setItem(environment.storage.mainMenu,id);
}

}
