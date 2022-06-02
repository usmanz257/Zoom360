import { Component, OnInit } from '@angular/core';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';
import { FiltersService } from 'src/app/Services/common/filters.service';

@Component({
  selector: 'app-all-extracts',
  templateUrl: './all-extracts.component.html',
  styleUrls: ['./all-extracts.component.css']
})
export class AllExtractsComponent implements OnInit {
  allcheckbox: boolean=false;
  checkbox:boolean=false;
  screenName:string='allextracts';
  limit:string = 'All';
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  
  status_toggle:boolean=false;
  status_arrow:boolean=false;
  name_toggle:boolean=false;
  name_arrow:boolean=false;
  Created_toggle:boolean=false;
  Created_arrow:boolean=false;
  datastream_toggle:boolean=false;
  datastream_arrow:boolean=false;
  clientName_toggle:boolean=false;
  clientName_arrow:boolean=false;
  datarow_toggle:boolean=false;
  datarow_arrow:boolean=false;  
  datacolumn_toggle:boolean=false;
  datacolumn_arrow:boolean=false;
  filesize_toggle:boolean=false;
  filesize_arrow:boolean=false;
  _tablecounter:number=0;
  constructor(public AllExtractService:GetAllExtractsService,private filterService:FiltersService) { }

  ngOnInit(): void {
    debugger
    this.filterService._screenName='Extract Logs';
    this.getAllExtracts();
    this.AllExtractService._tablecounter=0;
    this.filterService._tablecounter=0;
  }
getAllExtracts(){
  this.filterService.setFilter(this.screenName);
  
  this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
    ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
}
checkAll(ev) {
  
  this.AllExtractService.extractData.forEach(x => x.state = ev.target.checked)
  
}
findCount(e) {
  
  if(e.target.checked)
  {
    this.allcheckbox=true;
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
    this._tablecounter= this.AllExtractService._recordLength;      
  }
  else{
       this.allcheckbox=false;
       this._tablecounter=0;
  }
 }
 applySort(fieldName){
   if(fieldName=='statusExtract'){
    this.status_arrow=true;
    this.status_toggle=!this.status_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='fileName'){
     this.name_arrow=true;
    this.name_toggle=!this.name_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='serverInsertDate'){
     this.Created_arrow=true;
    this.Created_toggle=!this.Created_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='connectionName'){
     this.datastream_arrow=true;
    this.datastream_toggle=!this.datastream_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='userNameInsert'){
     this.clientName_arrow=true;
    this.clientName_toggle=!this.clientName_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='rowsCountExtract'){
     this.datarow_arrow=true;
    this.datarow_toggle=!this.datarow_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='colsCountExtract'){
    this.datacolumn_arrow=true;
    this.datacolumn_toggle=!this.datacolumn_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
   else if (fieldName=='dataSizeExtract'){
     this.filesize_arrow=true;
    this.filesize_toggle=!this.filesize_toggle;
    this.AllExtractService._sortToggle=!this.AllExtractService._sortToggle;
    this.AllExtractService.sortAllExtract(fieldName);
   }
}
reloadPage(){
  this.status_arrow=false;
  this.name_arrow=false;
  this.Created_arrow=false;
  this.datastream_arrow=false;
  this.clientName_arrow=false;
  this.datarow_arrow=false;
  this.datacolumn_arrow=false;
  this.filesize_arrow=false;
  this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
    ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
//  window.location.reload();
}
}
