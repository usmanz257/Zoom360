import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

@Component({
  selector: 'app-administration',
  templateUrl: './TreeTemplate.component.html',
  styleUrls: ['./TreeTemplate.component.css']
})
export class CustomTreeTemplateComponent implements OnInit {

  mainmenuID:number=17;
  constructor(public MenuService: AppMenuService) { }

  ngOnInit() {
    //this.mainmenuID=this.MenuService.getMainMenuId()
    this.MenuService.getsubMenuSection(this.mainmenuID);
  }

}
