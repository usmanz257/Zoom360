import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/Services/common/filters.service';
import { AllissuesService } from 'src/app/Services/extract/allissues.service';

@Component({
  selector: 'app-all-issues-log-widget',
  templateUrl: './all-issues-log-widget.component.html',
  styleUrls: ['./all-issues-log-widget.component.css']
})
export class AllIssuesLogWidgetComponent implements OnInit {
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
  constructor(public allissueSer:AllissuesService,private filterService:FiltersService) { }

  ngOnInit(): void {
    this.getAllIssues();
    this.allissueSer._tablecounter=0;
  }
  getAllIssues(){
  this.filterService.setFilter(this.screenName);
  debugger
  this.allissueSer.getAllissues(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
    ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
    }
}
