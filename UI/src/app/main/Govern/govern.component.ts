import { Component, Injector, OnInit } from '@angular/core';
import { RollupTreeDto } from 'src/app/models/common/RollupTree.model';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { TreeTemplateService } from 'src/app/services/common/tree-template.service';

import { environment } from 'src/environments/environment';
import { AppMenuService } from '../../Services/common/app-menu.service';
import { GetAllConnectionsService } from '../../Services/extract/get-all-connections.service';

@Component({
  selector: 'app-govern',
  templateUrl: './govern.component.html',
  styleUrls: ['./govern.component.css']
})
export class GovernComponent extends AppComponentBase implements OnInit {
  rollupTreeDto:RollupTreeDto={} as RollupTreeDto;
  mainmenuID:number=11;
  accountId=null;
  submenuId:string='';
  constructor(
    public MenuService: AppMenuService,
    public getAllConnectionsService:GetAllConnectionsService,
    public treeTemplateService:TreeTemplateService,
    private injector:Injector) {
      super(injector);
      }
  ngOnInit(): void {

    this.storageService.setItem(environment.storage.accountId,this.accountId);
    this.MenuService.getsubMenuSection(this.mainmenuID);
  }
  setsubMenuid(subMenuIdval){
    debugger
    this.MenuService.setActiveClass(subMenuIdval);
  
    this.treeTemplateService.setSubMenuId(subMenuIdval);
    this.submenuId=this.storageService.getItem(environment.storage.subMenuId);
    this.rollupTreeDto.clientId=this.clientDetailService.getClientID();
    this.rollupTreeDto.userId=this.clientDetailService.getuserID();
    this.rollupTreeDto.workspaceId=this.clientDetailService.getWorkspaceID();
    this.rollupTreeDto.ClientTime=this.clientDateTimeService.getCilentTime();
    this.rollupTreeDto.ClientDate=this.clientDateTimeService.getCilentTime();
    this.rollupTreeDto.ClientTime=this.clientDateTimeService.getCilentTime();
    this.rollupTreeDto.ClientTimeZone=this.clientDateTimeService.getClientTimeZone();
    this.rollupTreeDto.TreeName='Rollup';
    this.rollupTreeDto.SubMenuId=this.submenuId;
    this.treeTemplateService.GetRollupTree();
  }
  
  
}
