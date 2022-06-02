import { Component, OnInit } from '@angular/core';
import { ChangesLogService } from 'src/app/services/administration/changes-log.service';

@Component({
  selector: 'app-changes-log',
  templateUrl: './changes-log.component.html',
  styleUrls: ['./changes-log.component.css']
})
export class ChangesLogComponent implements OnInit {
  allcheckbox:boolean=false;
  clientId_arrow:boolean =false;
  clientId_toggle:boolean=false;
  accountId_arrow:boolean=false;
  accountId_toggle:boolean=false;
  AccountName_arrow:boolean=false;
  AccountName_toggle:boolean=false;
  workspaceId_arrow:boolean=false;
  workspaceId_toggle:boolean=false;
  workspaceName_arrow:boolean=false;
  workspaceName_toggle:boolean=false;
  accessGranted_arrow:boolean=false;
  accessGranted_toggle:boolean=false;
  workspaceParentName_arrow:boolean=false;
  workspaceParentName_toggle:boolean=false;
  storageUrl_arrow:boolean=false;
  storageUrl_toggle:boolean=false;
  destinationPrimery_arrow:boolean=false;
  destinationPrimery_toggle:boolean=false;
  detinationPassive_arrow:boolean=false;
  detinationPassive_toggle:boolean=false;
  quotaSize_arrow:boolean=false;
  quotaSize_toggle:boolean=false;
  quotaType_arrow:boolean=false;
  quotaType_toggle:boolean=false;
  quotaUsed_arrow:boolean=false;
  quotaUsed_toggle:boolean=false;
  constructor(public changesLogService :ChangesLogService) { }

  ngOnInit(): void {
    this.changesLogService.getChangeLogList();
  }
  checkAll(ev) {
    
    this.changesLogService._ChangeLogGrid.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e) {
    
    if(e.target.checked)
    {
    this.allcheckbox=false;
    this.changesLogService._tablecounter+=1;
    }
    else{
      this.changesLogService._tablecounter-=1;
      this.allcheckbox=false;
    }
   }
  functionCount(e){
    
    if(e.target.checked)
    {
      this.allcheckbox=true;
      this.changesLogService._tablecounter= this.changesLogService._recordLength;      
    }
    else{
         this.allcheckbox=false;
         this.changesLogService._tablecounter=0;
    }
   }
   applySort(fieldName){
    if(fieldName=='clientId'){
      this.clientId_arrow=true;
      this.clientId_toggle=!this.clientId_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='accountId'){
      this.accountId_arrow=true;
      this.accountId_toggle=!this.accountId_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='AccountName'){
      this.AccountName_arrow=true;
      this.AccountName_toggle=!this.AccountName_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='workspaceId'){
      this.workspaceId_arrow=true;
      this.workspaceId_toggle=!this.workspaceId_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='workspaceName'){
      this.workspaceName_arrow=true;
      this.workspaceName_toggle=!this.workspaceName_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='accessGranted'){
      this.accessGranted_arrow=true;
      this.accessGranted_toggle=!this.accessGranted_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='workspaceParentName'){
      this.workspaceParentName_arrow=true;
      this.workspaceParentName_toggle=!this.workspaceParentName_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='storageUrl'){
      this.storageUrl_arrow=true;
      this.storageUrl_toggle=!this.storageUrl_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='destinationPrimery'){
      this.destinationPrimery_arrow=true;
      this.destinationPrimery_toggle=!this.destinationPrimery_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='detinationPassive'){
      this.detinationPassive_arrow=true;
      this.detinationPassive_toggle=!this.detinationPassive_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='quotaSize'){
      this.quotaSize_arrow=true;
      this.quotaSize_toggle=!this.quotaSize_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='quotaType'){
      this.quotaType_arrow=true;
      this.quotaType_toggle=!this.quotaType_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
    else if(fieldName=='quotaUsed'){
      this.quotaUsed_arrow=true;
      this.quotaUsed_toggle=!this.quotaUsed_toggle;
      this.changesLogService._sortToggle=!this.changesLogService._sortToggle;
      this.changesLogService.sortWorkSetup(fieldName);
    }
  }
  reloadPage(){
        this.clientId_arrow=false;
        this.accountId_arrow=false;
        this.AccountName_arrow=false;
        this.workspaceId_arrow=false;
        this.workspaceName_arrow=false;
        this.accessGranted_arrow=false;
        this.workspaceParentName_arrow=false;
        this.storageUrl_arrow=false;
        this.destinationPrimery_arrow=false;
        this.detinationPassive_arrow=false;
        this.quotaSize_arrow=false;
        this.quotaType_arrow=false;
        this.quotaUsed_arrow=false;
        this.changesLogService.getChangeLogList();
}

}
