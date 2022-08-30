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
      this.SetDefault();
    });
    this.MenuService.deletedpage$.subscribe((res)=> this.loadNextDashboard(res));
  }

  getpagewidgets(workbook,page){
    this.MenuService.page$.next(...page);
    this.MenuService.workbook$.next(...workbook);
        this.test.page = page
        this.test.getWidgets(page);
  }

  setActive(id:number){
    this.MenuService.setActiveClass("link"+id);
  }
  loadNextDashboard(page){
    this.Getworkbookdtos.forEach(function(o) {
      o.pages = o.pages.filter(s => s.id != page.id);
    });
    this.SetDefault()
  }
  SetDefault(){
    for(var i=0;i<this.Getworkbookdtos.length;i++){
      if(this.Getworkbookdtos[i].pages.length>=1){
        this.MenuService.workbook$.next(this.Getworkbookdtos[i]);
        this.MenuService.page$.next(this.Getworkbookdtos[i].pages[0]);
        break;
      }
    }
  }
}

