import { Component, Injector, OnInit } from '@angular/core';
import { WorkspaceSetup } from 'src/app/Models/mainmenu.model';
import { WorkSpaceSetupService } from 'src/app/Services/administration/work-space-setup.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';

@Component({
  selector: 'app-workspace-setup-grid',
  templateUrl: './workspace-setup-grid.component.html',
  styleUrls: ['./workspace-setup-grid.component.css']
})
export class WorkspaceSetupGridComponent extends AppComponentBase implements OnInit {
  allcheckbox:boolean=false;
  limit:string = 'All';
  type_toggle:boolean=false;
  type_arrow:boolean=false;
  workspace_toggle:boolean=false;
  workspace_arrow:boolean=false;
  name_toggle:boolean=false;
  name_arrow:boolean=false;
  userAccessGranted_toggle=false;
  userAccessGranted_arrow:boolean=false;
  displayName_toggle:boolean=false;
  displayName_arrow:boolean=false;
  bStatus_toggle:boolean=false;
  bStatus_arrow:boolean=false;
  userId:string='';
  workSpaceId:string='';
  Client_Id:string='';
  _workSpaceParentDropdown:any[]=[];
  _workSpaceGrid:any[]=[];
  _workSpaceGridRandom:WorkspaceSetup[]=[];
  _recordLength:number=0;

  constructor(
    injector:Injector,
    public WorkSpaceService:WorkSpaceSetupService) { super(injector);}

  ngOnInit(): void {
     this.reloadPage();
     this.getDataById(this.workSpaceId);
  }
  checkAll(ev) {
    this.WorkSpaceService._workSpaceGrid.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e) {
    
    if(e.target.checked)
    {
    this.allcheckbox=false;
    this.WorkSpaceService._tablecounter+=1;
    }
    else{
      this.WorkSpaceService._tablecounter-=1;
      this.allcheckbox=false;
    }
   }
  functionCount(e){
    
    if(e.target.checked)
    {
      this.allcheckbox=true;
      this.WorkSpaceService._tablecounter= this.WorkSpaceService._recordLength;      
    }
    else{
         this.allcheckbox=false;
         this.WorkSpaceService._tablecounter=0;
    }
   }
   applySort(fieldName){
  if(fieldName=='workspaceName'){
    this.type_arrow=true;
    this.type_toggle=!this.type_toggle;
    this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
    this.WorkSpaceService.sortWorkSetup(fieldName);
  }
  else if(fieldName=='displayName'){
    this.displayName_arrow=true;
    this.displayName_toggle=!this.displayName_toggle;
    this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
    this.WorkSpaceService.sortWorkSetup(fieldName);
  }
  else if(fieldName=='parentWorkspace'){
    this.workspace_arrow=true;
    this.workspace_toggle=!this.workspace_toggle;
    this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
    this.WorkSpaceService.sortWorkSetup(fieldName);
  }
  else if(fieldName=='childApplyandEnforce'){
    this.name_arrow=true;
    this.name_toggle=!this.name_toggle;
    this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
    this.WorkSpaceService.sortWorkSetup(fieldName);
  }
  else if(fieldName=='excludeChildWorkspace'){
    this.userAccessGranted_arrow=true;
    this.userAccessGranted_toggle=!this.userAccessGranted_toggle;
    this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
    this.WorkSpaceService.sortWorkSetup(fieldName);
  }
  else if(fieldName=='bStatus'){
    
    this.bStatus_arrow=true;
    this.bStatus_toggle=!this.bStatus_toggle;
    this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
    this.WorkSpaceService.sortWorkSetup(fieldName);
  }
 
}
   reloadPage(){
    this.type_arrow=false;
    this.displayName_arrow=false
    this.workspace_arrow=false;
    this.name_arrow=false;
    this.userAccessGranted_arrow=false;
    this.userAccessGranted_arrow=false;
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.Client_Id = this.clientDetailService.getClientID();
    this.WorkSpaceService.getGridWorkSpaceList(this.userId,this.workSpaceId,this.Client_Id).subscribe((data: any[]) =>{
      debugger
      if(data.length  > 0){
        for(let i=0;i<data.length;i++)
        {
                if(data[i].bStatus_arrow==0)
                {
                  data[i].bStatus_arrow="no"
                }
                else
                {
                  data[i].bStatus_arrow="yes"
                }
        }
        this._workSpaceGrid = data;
        this._workSpaceGridRandom = data;
        this._recordLength = this._workSpaceGrid.length;
      }
    });
}
getDataById(workspaceId){
  console.log('workspaceId in it',workspaceId)

}
}