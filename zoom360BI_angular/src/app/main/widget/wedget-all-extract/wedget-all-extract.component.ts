import { Component, OnInit } from '@angular/core';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';


@Component({
  selector: 'app-wedget-all-extract',
  templateUrl: './wedget-all-extract.component.html',
  styleUrls: ['./wedget-all-extract.component.css']
})
export class WedgetAllExtractComponent implements OnInit {
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  widgetAccorButtonText='Show All';
  buttonAccorStatus:boolean=false;
  constructor(public AllExtractService:GetAllExtractsService) { }

  ngOnInit(): void {
   this.getallExtracts();
  }
  getallExtracts(){
    this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
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
