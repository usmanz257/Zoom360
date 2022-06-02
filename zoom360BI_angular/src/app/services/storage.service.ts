import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static storageSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  static watcher: Observable<boolean> = StorageService.storageSubject.asObservable();
  static openedSearchTab: string = '/search/all';

  constructor(public jwtService: JwtService) {
  }

  setItem(key: string, value: Object) {
    localStorage.setItem(key, btoa(encodeURIComponent(JSON.stringify(value))));
    StorageService.storageSubject.next(true);
  }

  getItem(key: string): any {
    let data = localStorage.getItem(key);
    try {
      if (data) {
        return JSON.parse(decodeURIComponent(atob(localStorage.getItem(key))));
      } else {
        // this.removeItem(environment.storage.userData)
        return null
      }
    }
    catch (e) {
      return null;
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    StorageService.storageSubject.next(true);
  }

  setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    StorageService.storageSubject.next(true);
  }

  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
