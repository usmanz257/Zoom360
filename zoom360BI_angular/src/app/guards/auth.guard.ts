import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { JwtService } from '../services/jwt.service';
import { environment } from 'src/environments/environment';
import { UserRightsService } from '../services/user-rights.service';
import { UserRightsModel } from '../models/UserRights/UserRightsModel';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private storageService: StorageService,private userRightsService:UserRightsService, private jwtService: JwtService, private router: Router) {
    
  }
  userRightsModel:UserRightsModel = {

UserId:"usmanz0257@gmail.com",
WorkspaceId:"13",
ClientId:"1003",
subUserId:"",
url:"extract/extraction/connectionslist"
  };
  userright:any;
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userData = this.storageService.getItem(environment.storage.userData);
    if (userData) {
      if (userData.token) {
        return true;
      }
      else {
        this.router.navigate(["/auth/login"]);
      }
    }
    else {
      this.router.navigate(["/auth/login"]);
    }
  }
// canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   debugger
//   this.router.url;
//   const ChilduserData=this.userRightsService.getCurrencySetupSetting(this.userRightsModel).subscribe((data:any)=>{
// debugger

//  this.userright = data;
 
// })
// if(ChilduserData){
//   return true;
// }
// else{
//   return false
// }
// }
}

