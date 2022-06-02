import { Component, OnInit } from '@angular/core';
import { AppMenuService } from '../../Services/common/app-menu.service';
import { GetAllConnectionsService } from '../../Services/extract/get-all-connections.service';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  mainmenuID:number=1;
  accountId=null;
  constructor(
    public MenuService: AppMenuService,
    public getAllConnectionsService:GetAllConnectionsService
    ) {
      
     }

  ngOnInit(): void {
    JSON.stringify(localStorage.setItem("accountId",this.accountId));
    this.MenuService.getsubMenuSection(this.mainmenuID);
   // this.getSubMenu(this.mainmenuID);
       //this.MenuService.getsubMenuSection(); 
   // this.getsubMenuSectionItems();
  }
  // getSubMenu(menuID : number){
  //    this.mainmenuID = menuID;
  //    this.MenuService
  //    .getsubMenuItems(this.mainmenuID);
  // }
  
}
