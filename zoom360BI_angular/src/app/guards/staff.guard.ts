import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { JwtService } from '../services/jwt.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
  constructor(private storageService: StorageService, private jwtService: JwtService, private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userData = this.storageService.getItem(environment.storage.userData);
    if (userData) {
      if (userData.role == environment.adminRole) {
        return true;
      }
      else {
        this.router.navigate(["/"]);
      }
    }
    else {
      this.router.navigate(["/"]);
    }
  }

}
