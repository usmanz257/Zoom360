import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/Services/common/filters.service';
import { AllissuesService } from 'src/app/Services/extract/allissues.service';
@Component({
  selector: 'app-wedget-allissues',
  templateUrl: './wedget-allissues.component.html',
  styleUrls: ['./wedget-allissues.component.css']
})
export class WedgetAllissuesComponent implements OnInit {

  constructor(public allissueSer:AllissuesService,private filterService:FiltersService) { }
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
  buttonAccorStatus:boolean=false;
  widgetAccorButtonText:string='Show all';
  ngOnInit(): void {
    this.getAllIssues();
    this.allissueSer._tablecounter=0;
  }
  getAllIssues(){
    this.filterService.setFilter(this.screenName);
    this.allissueSer.getAllissues(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
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
