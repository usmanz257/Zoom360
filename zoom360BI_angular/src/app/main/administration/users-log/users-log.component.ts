import { Component, OnInit } from '@angular/core';
import { UsersLogService } from 'src/app/Services/administration/users-log.service';

@Component({
  selector: 'app-users-log',
  templateUrl: './users-log.component.html',
  styleUrls: ['./users-log.component.css']
})
export class UsersLogComponent implements OnInit {
  allcheckbox:boolean=false;
  clientId_arrow:boolean=false;
  clientId_toggle:boolean=false;
  userLoginId_arrow:boolean=false;
  userLoginId_toggle:boolean=false;
  workspaceName_arrow:boolean=false;
  workspaceName_toggle:boolean=false;
  workspaceParentName_arrow:boolean=false;
  workspaceParentName_toggle:boolean=false;
  dateAccessStart_arrow:boolean=false;
  dateAccessStart_toggle:boolean=false;
  dateAccessEnd_arrow:boolean=false;
  dateAccessEnd_toggle:boolean=false;
  statusGranted_arrow:boolean=false;
  statusGranted_toggle:boolean=false;

  constructor(public userLogService :UsersLogService) { }

  ngOnInit(): void {
    this.userLogService.getGridUserWorkSpaceList();
  }
  checkAll(ev) {
    
    this.userLogService._UserLogGrid.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e) {
    
    if(e.target.checked)
    {
    this.allcheckbox=false;
    this.userLogService._tablecounter+=1;
    }
    else{
      this.userLogService._tablecounter-=1;
      this.allcheckbox=false;
    }
   }
  functionCount(e){
    
    if(e.target.checked)
    {
      this.allcheckbox=true;
      this.userLogService._tablecounter= this.userLogService._recordLength;      
    }
    else{
         this.allcheckbox=false;
         this.userLogService._tablecounter=0;
    }
   }
   applySort(fieldName){
    if(fieldName=='clientId'){
      this.clientId_arrow=true;
      this.clientId_toggle=!this.clientId_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='userLoginId'){
      this.userLoginId_arrow=true;
      this.userLoginId_toggle=!this.userLoginId_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='workspaceName'){
      this.workspaceName_arrow=true;
      this.workspaceName_toggle=!this.workspaceName_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='workspaceParentName'){
      this.workspaceParentName_arrow=true;
      this.workspaceParentName_toggle=!this.workspaceName_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='dateAccessStart'){
      this.dateAccessStart_arrow=true;
      this.dateAccessStart_toggle=!this.dateAccessStart_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='dateAccessEnd'){
      this.dateAccessEnd_arrow=true;
      this.dateAccessEnd_toggle=!this.dateAccessEnd_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='active'){
      this.statusGranted_arrow=true;
      this.statusGranted_toggle=!this.statusGranted_toggle;
      this.userLogService._sortToggle=!this.userLogService._sortToggle;
      this.userLogService.sortWorkSetup(fieldName);
    }
  }

   reloadPage(){
    this.clientId_arrow=false;
    this.userLoginId_arrow=false;
    this.workspaceName_arrow=false;
    this.workspaceParentName_arrow=false;
    this.dateAccessStart_arrow=false;
    this.dateAccessEnd_arrow=false;
    this.statusGranted_arrow=false
    this.userLogService.getGridUserWorkSpaceList();
   }
}
