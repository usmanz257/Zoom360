import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/Services/common/filters.service';
import { GetDataStreamService } from 'src/app/Services/extract/get-data-stream.service';

@Component({
  selector: 'app-primary-storage',
  templateUrl: './primary-storage.component.html',
  styleUrls: ['./primary-storage.component.css']
})
export class PrimaryStorageComponent implements OnInit {
  screenName:string='datastream';
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  allcheckbox: boolean=false;
  checkbox:boolean=false;
  sname_toggle:boolean=false;
  sname_arrow:boolean=false;
  sourceType_toggle:boolean=false;
  sourceType_arrow:boolean=false;
  workSpace_toggle:boolean=false;
  workSpace_arrow:boolean=false;
  destination_toggle:boolean=false;
  destination_arrow:boolean=false;
  snext_toggle:boolean=false;
  snext_arrow:boolean=false;
  supdate_toggle:boolean=false;
  supdate_arrow:boolean=false;
  constructor(private filterService:FiltersService,public _gridDataService:GetDataStreamService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    
    this.filterService.setFilter(this.screenName);
    this._gridDataService.getDatastreamswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);  
   }
   checkAll(ev) {
    this._gridDataService._StreamData.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e) {
    
    if(e.target.checked)
    {
      this.allcheckbox=false;
      this.filterService._tablecounter+=1;
    }
    else{
      this.filterService._tablecounter-=1;
      this.allcheckbox=false;
    }
   }
  functionCount(e){
    
    if(e.target.checked)
    {
      this.allcheckbox=true;
      this.filterService._tablecounter= this._gridDataService._recordLength;      
    }
    else{
         this.allcheckbox=false;
         this.filterService._tablecounter=0;
    }
   }
   applySort(fieldName){
     if(fieldName=='appearanceLogo'){
      this.sourceType_arrow=true;
      this.sourceType_toggle=this.sourceType_toggle;
      this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
      this._gridDataService.sortDataStream(fieldName);
     }
     else if(fieldName=='workspaceName'){
       
      this.workSpace_arrow=true;
      this.workSpace_toggle=!this.workSpace_toggle;
      this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
      this._gridDataService.sortDataStream(fieldName);
     }
     
    
  }
  reloadPage(){
    this.sourceType_arrow=false;
    this.sname_arrow=false;
    this.workSpace_arrow=false;
    this.destination_arrow=false;
    this.snext_arrow=false;
    this.supdate_arrow=false;
    this._gridDataService.getDatastreamswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
  // window.location.reload();
  }
}
