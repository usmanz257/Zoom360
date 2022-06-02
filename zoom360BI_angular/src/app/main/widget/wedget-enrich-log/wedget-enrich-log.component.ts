import { Component, OnInit } from '@angular/core';
import { EnrichLogsService } from 'src/app/services/Enrich/enrich-logs.service';
// import { EnrichLogsService } from 'src/app/Services/Enrich/enrich-logs.service';

@Component({
  selector: 'app-wedget-enrich-log',
  templateUrl: './wedget-enrich-log.component.html',
  styleUrls: ['./wedget-enrich-log.component.css']
})
export class WedgetEnrichLogComponent implements OnInit {
  screenName:string='allissue';
  limit:string = null;
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
   
  widgetAccorButtonText:string='Show all';
  buttonAccorStatus:boolean=false;
  constructor(public enrichLogsService:EnrichLogsService) { }

  ngOnInit(): void {
   this.getAllIssues();
  }
  getAllIssues(){
   
    this.enrichLogsService.getAllissues(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
      }
      buttonText(){
        this.buttonAccorStatus=!this.buttonAccorStatus;
        if(this.buttonAccorStatus){
          this.widgetAccorButtonText ='Hide All';
        }else{
          
          this.widgetAccorButtonText ='Show All';
        }
        
      }
}
