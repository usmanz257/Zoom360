import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { GetWorkbookdto } from 'src/app/models/DynamicDashboard/Workbookdto';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { environment } from 'src/environments/environment';
import { AppMenuService } from '../../Services/common/app-menu.service';
import { WorkbookpagesComponent } from './workbookpages/workbookpages.component';


@Component({
  selector: 'app-publish',
  templateUrl: './dynamicDashboard.component.html',
  styleUrls: ['./dynamicDashboard.component.css']
})
export class DynamicDashboardComponent extends AppComponentBase implements OnInit {
  @ViewChild("test",{static:true}) test: WorkbookpagesComponent;
  mainmenuID:number=7;
  Getworkbookdtos:GetWorkbookdto[]=[];
  userId="";  
  workSpaceId=""; 
  client_id=""; 
  test1="";
  pageName:string="";
  
  constructor(public MenuService: AppMenuService,injector:Injector) { super(injector)}

  ngOnInit(): void {
    this.userId=this.storageService.getItem(environment.storage.userId);
    this.workSpaceId=this.storageService.getItem(environment.storage.workspaceId);
    this.client_id=this.storageService.getItem(environment.storage.clientId);
    // if(this.storageService.getItem('page')){
    // this.getpagewidgets('',this.storageService.getItem('page'));
    // }
    this.MenuService.getsubMenuSection(this.mainmenuID);
    this.MenuService.getWorkbooks(this.userId,this.workSpaceId,this.client_id).subscribe(res => {
      this.Getworkbookdtos = res;
      this.MenuService.page$.next(this.Getworkbookdtos[0].pages[0]);
     this.MenuService.workbook$.next(this.Getworkbookdtos[0].name);
    });

  }

  getpagewidgets(workbookName,test1){
    this.MenuService.page$.next(test1);
    this.MenuService.workbook$.next(workbookName);
        this.test.page = test1
        this.test.getWidgets(test1);
  }

  setActive(id:number){
    this.MenuService.setActiveClass("link"+id);
  }
}

