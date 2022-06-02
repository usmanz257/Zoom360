import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { GetAllConnectionsService } from 'src/app/Services/extract/get-all-connections.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  mainmenuID:number=31;
  accountId=null;
  constructor(public MenuService: AppMenuService,public getAllConnectionsService:GetAllConnectionsService) {
      
     }

  ngOnInit(): void {
    JSON.stringify(localStorage.setItem("accountId",this.accountId));
    this.MenuService.getsubMenuSection(this.mainmenuID);
    }
 
  

}
