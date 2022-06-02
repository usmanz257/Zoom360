import { Component, OnInit } from '@angular/core';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';


@Component({
  selector: 'app-all-extract-log-widget',
  templateUrl: './all-extract-log-widget.component.html',
  styleUrls: ['./all-extract-log-widget.component.css']
})
export class AllExtractLogWidgetComponent implements OnInit {
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  constructor(public AllExtractService:GetAllExtractsService) { }

  ngOnInit(): void {
    this.getallExtracts();
   }
   getallExtracts(){
     this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
       ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
   }

}
