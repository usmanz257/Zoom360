import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  mainmenuID:number=7;
  constructor(public MenuService: AppMenuService) { }

  ngOnInit() {
    //this.mainmenuID=this.MenuService.getMainMenuId()
    this.MenuService.getsubMenuSection(this.mainmenuID);
  }

}
