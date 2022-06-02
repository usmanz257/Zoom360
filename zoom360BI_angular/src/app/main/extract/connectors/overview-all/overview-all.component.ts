import { Component, OnInit } from '@angular/core';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';


@Component({
  selector: 'app-overview-all',
  templateUrl: './overview-all.component.html',
  styleUrls: ['./overview-all.component.css']
})
export class OverviewAllComponent implements OnInit {
  limit:string = 'All';
  workspaceName:string='all';
  connectionName:string='all';
  sourceName:string='all';
  accessGranted:string='all';
  createdBy:string='all';
  isActive:string='all';
  lastAccessed:string='all';
  destinationEnabled:string='all';
  
  constructor(public AllExtractService:GetAllExtractsService) { }

  ngOnInit(): void {
    this.getAllExtract();
  }
  getAllExtract(){
    this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
  }
}
