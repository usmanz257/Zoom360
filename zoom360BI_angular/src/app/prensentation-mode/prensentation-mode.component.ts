import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppMenuService } from '../Services/common/app-menu.service';
import { MainmenuService } from '../services/extract/MainMenuService';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-prensentation-mode',
  templateUrl: './prensentation-mode.component.html',
  styleUrls: ['./prensentation-mode.component.css']
})
export class PrensentationModeComponent implements OnInit {

  constructor(private storageService: StorageService,private MenuService:AppMenuService){
    this.storageService.setItem(environment.storage.ModeId,2);
    this.MenuService.getNavModedropdown(this.storageService.getItem(environment.storage.userId),this.storageService.getItem(environment.storage.ModeId));
    // this.storageService.setItem(environment.storage.presentMode,true);
    // this.storageService.setItem(environment.storage.appMode,false);
  }

  ngOnInit() {
  }

}
