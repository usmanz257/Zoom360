import { Component, OnInit } from '@angular/core';
import { AllissuesService } from 'src/app/Services/extract/allissues.service';
import { FiltersService } from 'src/app/Services/common/filters.service';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css']
})
export class AllIssuesComponent implements OnInit {
  screenName:string='allissue';
  limit:string = 'All';
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  allcheckbox : boolean=false;
  heading_toggle:boolean=false;
  heading_arrow:boolean=false;
  ack_toggle:boolean=false;
  ack_arrow:boolean=false;
  _tablecounter:number=0;
  constructor(public allissueSer:AllissuesService,private filterService:FiltersService) { }

  ngOnInit(): void {
    this.filterService._screenName='Issue Logs';
    this.getAllIssues();
    this.allissueSer._tablecounter=0;
    this.filterService._tablecounter=0;
  }
  getAllIssues(){
    this.filterService.setFilter(this.screenName);
    this.allissueSer.getAllissues(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
  }
  // getAllIssues(){
  //   this.allissueSer.getAllissuewithLimit('All');
  //     }
  checkAll(ev) {
    this.allissueSer._issueData.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e) {
    
    if(e.target.checked)
    {
      this.allcheckbox=false;
     this._tablecounter+=1;
    }
    else{
      this._tablecounter-=1;
      this.allcheckbox=false;
    }
   }
  functionCount(e){
    if(e.target.checked)
    {
      this.allcheckbox=true;
      this._tablecounter= this.filterService._recordLength;      
    }
    else{
         this.allcheckbox=false;
         this._tablecounter=0;
    }
   }
   applySort(fieldName){
     if(fieldName=='connectionName'){
      this.heading_arrow=true;
      this.heading_toggle=!this.heading_toggle;
      this.allissueSer._sortToggle=!this.allissueSer._sortToggle;
      this.allissueSer.sortAllIssues(fieldName);
     }
     else if(fieldName=='statusAck'){
      this.ack_arrow=true;
      this.ack_toggle=!this.ack_toggle;
      this.allissueSer._sortToggle=!this.allissueSer._sortToggle;
      this.allissueSer.sortAllIssues(fieldName);
     }
    
  }
  reloadPage(){
    this.heading_arrow=false;
    this.ack_arrow=false;
    this.filterService.setFilter(this.screenName);
    this.allissueSer.getAllissues(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
   // this.allissueSer.getAllissuewithLimit('')
    //window.location.reload();
   }
}
