import { Injectable, Injector } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { JwtService } from '../services/jwt.service';
import { environment } from 'src/environments/environment';
import { UserRightsService } from '../services/user-rights.service';
import { UserRightsModel } from '../models/UserRights/UserRightsModel';
import { AppComponentBase } from '../services/AppComponentBase';
import { filter } from 'rxjs/operators';
import { AppMenuService } from '../Services/common/app-menu.service';
@Injectable({
  providedIn: 'root'
})
export class UserRightsGuardService extends AppComponentBase implements CanActivate {

  userRightsModel={} as UserRightsModel;
  userright:any;
  constructor(injector:Injector,
    private appMenuService:AppMenuService,
    private  userRightsService:UserRightsService, private jwtService: JwtService, private router: Router) {
      super(injector); 
  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    debugger
    var test = state.url;
    var url = test.slice(1,test.length);
    this.userRightsModel.UserId = this.clientDetailService.getuserID();
    this.userRightsModel.WorkspaceId=this.clientDetailService.getWorkspaceID();
    this.userRightsModel.ClientId = this.clientDetailService.getClientID();
    this.userRightsModel.subUserId="";
    this.userRightsModel.url= url;
    return  this.CheckRight(this.userRightsModel);
}


async  CheckRight(userRightData:UserRightsModel){
    var result=false;
    var statusMessage;
    await this.userRightsService.getUserRightsURL(userRightData).then((data:any)=>{
      debugger
      statusMessage = data.result;
      statusMessage = statusMessage.split(',');
      if(statusMessage[0]=='1'){
        result = true;
      }else if(statusMessage[0]=='0'){
        this.router.navigate(['/manage/settings/status']);
        this.appMenuService.Error_Message=statusMessage[1];
        //alert(statusMessage[1]);
        result =false;
      }else if(statusMessage[0]=='2'){
        this.router.navigate(['/manage/settings/status']);
        this.appMenuService.Error_Message=statusMessage[1];
        // alert(statusMessage[1]);
        result =false;
      }
    });
  return result;
}
}
