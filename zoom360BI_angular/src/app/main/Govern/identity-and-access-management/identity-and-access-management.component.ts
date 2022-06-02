import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-identity-and-access-management',
  templateUrl: './identity-and-access-management.component.html',
  styleUrls: ['./identity-and-access-management.component.css']
})
export class IdentityAndAccessManagementComponent implements OnInit {

  mainmenuID:number=11;
  accountId=null;
  //constructor(public MenuService: AppMenuService,public getAllConnectionsService:GetAllConnectionsService) {     }
constructor(){}
  ngOnInit(): void {
    // JSON.stringify(localStorage.setItem("accountId",this.accountId));
    // this.MenuService.getsubMenuSection(this.mainmenuID);
    // this.getSubMenu(this.mainmenuID);
       //this.MenuService.getsubMenuSection(); 
   // this.getsubMenuSectionItems();
  }
  getSubMenu(menuID : number){
    //  this.mainmenuID = menuID;
    //  this.MenuService
    //  .getsubMenuItems(this.mainmenuID);

  }

}
