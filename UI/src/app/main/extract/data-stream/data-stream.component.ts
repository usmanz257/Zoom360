import { Component, OnInit } from '@angular/core';
import { TblDatastream } from 'src/app/Models/mainmenu.model';
import { GetDataStreamService } from 'src/app/Services/extract/get-data-stream.service';
import { FiltersService } from 'src/app/Services/common/filters.service';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';
import { GetAllConnectionsService } from 'src/app/Services/extract/get-all-connections.service';
import { AllissuesService } from 'src/app/Services/extract/allissues.service';

@Component({
  selector: 'app-data-stream',
  templateUrl: './data-stream.component.html',
  styleUrls: ['./data-stream.component.css']
})
export class DataStreamComponent implements OnInit {
  screenName:string='datastream';
  limit:string = 'All';
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  streamTable : TblDatastream[]=[]; 
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
  accountId:string;
  _tablecounter:number=0;
  constructor(
    public _gridDataService:GetDataStreamService,
    private filterService:FiltersService,
    private getAllExtractsService:GetAllExtractsService,
    private allissuesService:AllissuesService,
    public getAllConnectionsService:GetAllConnectionsService
    )
     {

      }

  ngOnInit(): void {
    this.filterService._screenName='Available Source Accounts';
    this.getdata();
    this._gridDataService._tablecounter=0;
    this.filterService._tablecounter=0;
  }
  getdata(){
    
    this.filterService.setFilter(this.screenName);
    this._gridDataService.getDatastreamswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);  
   }
   sourceEdit(sourceId){
     debugger
    JSON.stringify(localStorage.setItem("accountId",sourceId));
    // this.accountId=sourceId;
    // this.getAllExtractsService.accountId=sourceId;
    // this.allissuesService.accountId=sourceId;
    // this.getAllConnectionsService.accountId=sourceId;
    this.getAllConnectionsService.getAllConnectionswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5)
   }
   checkAll(ev) {
    this._gridDataService._StreamData.forEach(x => x.state = ev.target.checked)

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
      this._tablecounter= this._gridDataService._recordLength;      
    }
    else{
         this.allcheckbox=false;
         this._tablecounter=0;
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
     else if(fieldName=='sourceName'){
      this.sname_arrow=true;
      this.sname_toggle=!this.sname_toggle;
      this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
      this._gridDataService.sortDataStream(fieldName);
     }
    else if(fieldName=='destinationEnabled'){
      this.destination_arrow=true;
      this.destination_toggle=!this.destination_toggle;
      this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
      this._gridDataService.sortDataStream(fieldName);
    }
    else if(fieldName=='nextRun'){
      this.snext_arrow=true;
      this.snext_toggle=!this.snext_toggle;
      this._gridDataService._sortToggle=!this._gridDataService._sortToggle;
      this._gridDataService.sortDataStream(fieldName);
    }
    else if(fieldName=='serverInsertDate'){
      this.supdate_arrow=true;
      this.supdate_toggle=!this.supdate_toggle;
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
