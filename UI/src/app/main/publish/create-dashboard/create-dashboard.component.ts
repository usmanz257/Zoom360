import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetWorkbookdto } from 'src/app/models/DynamicDashboard/Workbookdto';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-dashboard',
  templateUrl: './create-dashboard.component.html',
  styleUrls: ['./create-dashboard.component.css']
})
export class CreateDashboardComponent extends AppComponentBase implements OnInit {
  Getworkbookdtos:GetWorkbookdto[]=[];
  userId="usmanz0257@gmail.com";  
  workSpaceId="13"; 
  client_id="1003"; 
  constructor(injector:Injector, public MenuService: AppMenuService,private router: Router) {super(injector); }

  ngOnInit(): void {
    this.MenuService.getWorkbooks(this.userId,this.workSpaceId,this.client_id).subscribe(res => {

      this.storageService.setItem   
       debugger
      this.Getworkbookdtos = res;
      console.log("publishcarddata",this.Getworkbookdtos)
      
    })
  }
  getDashboardwidget(page:string){
    this.storageService.setItem("page",page);
    this.router.navigateByUrl("/dashboard/customdashboard");
  }
}
