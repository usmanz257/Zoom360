import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltersService } from 'src/app/Services/common/filters.service';
import { GetDataStreamService } from 'src/app/Services/extract/get-data-stream.service';
import { GetAllExtractsService } from 'src/app/Services/extract/get-all-extracts.service';
import { AllissuesService } from 'src/app/Services/extract/allissues.service';
import { GetAllConnectionsService } from 'src/app/Services/extract/get-all-connections.service';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';

@Component({
  selector: 'app-connect-filters',
  templateUrl: './connect-filters.component.html',
  styleUrls: ['./connect-filters.component.css']
})
export class ConnectFiltersComponent implements OnInit {
  filternames:string[]=['Workspace','Destination Enabled','Created By','Access Granted','Data Sources','connector type','Enabled','Last Accessed'];
  btnCancel:boolean=false;
  datastreamfilterStatus: boolean;
  allconnectionfilterStatus: boolean;
  allextractfilterStatus: boolean;
  allIssuefilterStatus: boolean;
  sourceTypeValue:String;
  sourceNameValue: string;
  selectedConnection:string;
  _selectedtext: String;
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  accountId:string;
  //Connection
  _workspace:dropdownModel[]=[];
  _destinationEnabled:dropdownModel[]=[];
  _CreatedBy:dropdownModel[]=[];
  _AccessGranted:dropdownModel[]=[];
  _DataSources:dropdownModel[]=[];
  _connectortype:dropdownModel[]=[];
  _Enabled:dropdownModel[]=[];
  _lastAccessed:dropdownModel[]=[];
  constructor(public _Filter: FiltersService,public _gridDataService:GetDataStreamService,
    public AllExtractService:GetAllExtractsService,public _allissueSer:AllissuesService, public allConService:GetAllConnectionsService
    ) {
     
     }

  ngOnInit(): void {
    this.datastreamfilterStatus = this._Filter.datastreamfilterStatus;
    this.allconnectionfilterStatus = this._Filter.allconnectionfilterStatus;
    this.allextractfilterStatus = this._Filter.allextractfilterStatus;
    this.allIssuefilterStatus =this._Filter.allIssuefilterStatus;
    this._gridDataService._recordLength=0;
    this.AllExtractService._recordLength=0;
    this._allissueSer._recordLength=0;
    //Connections
    this.getDestinationEabled();
  }
//DataStream
searchValue(){
        debugger
        var SearchValue = ((document.getElementById("SearchText") as HTMLInputElement).value);
        if(SearchValue ==""){
          window.location.reload();
        }
        else{
        this._gridDataService.search(SearchValue);
      }
     }
  
//reset button
resetButton(){
this.btnCancel=true;
}
reloadWindow(){
  window.location.reload();
}
//Connection
getDestinationEabled(){
    for(let i=0;i<this.filternames.length;i++){
      if(this.filternames[i]=='Workspace'){
        this._Filter.GetDropDowns(this.filternames[i])
        .subscribe((data: dropdownModel[]) => {
          
          if(data.length  > 0){
            this._workspace = data;
          }
      });
    }
   else if(this.filternames[i]=='Destination Enabled'){
    this._Filter.GetDropDowns(this.filternames[i])
    .subscribe((data: dropdownModel[]) => {
      if(data.length  > 0){
        this._destinationEnabled = data;
      }
  });
}
else if(this.filternames[i]=='Created By'){
  this._Filter.GetDropDowns(this.filternames[i])
  .subscribe((data: dropdownModel[]) => {
    if(data.length  > 0){
      this._CreatedBy = data;
    }
});
}
else if(this.filternames[i]=='Access Granted'){
  this._Filter.GetDropDowns(this.filternames[i])
  .subscribe((data: dropdownModel[]) => {
    if(data.length  > 0){
      this._AccessGranted = data;
    }
});
}
else if(this.filternames[i]=='Data Sources'){
  this._Filter.GetDropDowns(this.filternames[i])
  .subscribe((data: dropdownModel[]) => {
    if(data.length  > 0){
      this._DataSources = data;
    }
});
}
else if(this.filternames[i]=='connector type'){
  this._Filter.GetDropDowns(this.filternames[i])
  .subscribe((data:dropdownModel[]) => {
    if(data.length  > 0){
      this._connectortype = data;
    }
});
}
else if(this.filternames[i]=='Enabled'){
  this._Filter.GetDropDowns(this.filternames[i])
  .subscribe((data: dropdownModel[]) => {
    if(data.length  > 0){
      this._Enabled = data;
    }
    });
  }
  else if(this.filternames[i]=='Last Accessed'){
    this._Filter.GetDropDowns(this.filternames[i])
    .subscribe((data: dropdownModel[]) => {
      if(data.length  > 0){
        this._lastAccessed = data;
      }
      });
    }
  
    }
}

SearchConnection(){
  debugger
  var SearchValue = ((document.getElementById("SearchConnection") as HTMLInputElement).value);
  if(this._Filter.datastreamfilterStatus==true){
    if(SearchValue ==""){
      window.location.reload();
    }
    else{
    this._gridDataService.search(SearchValue);
    }
  }
  
else if(this._Filter.allconnectionfilterStatus==true){
          if(SearchValue ==""){
            window.location.reload();
          }
          else{
          this.allConService.searchAllConnections(SearchValue);
          }
        }
else if(this._Filter.allextractfilterStatus==true){
        if(SearchValue ==""){
          window.location.reload();
        }
        else{
        this.AllExtractService.searchAllExtract(SearchValue);
      }
 }
else if(this._Filter.allIssuefilterStatus==true){
 }
 if(SearchValue ==""){
  window.location.reload();
}
else{
this._allissueSer.searchAllissue(SearchValue);
}
}
applyFilter(){
  debugger;
  if(this._Filter.datastreamfilterStatus==true){
    this._gridDataService.getDatastreamswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
  } 
else if(this._Filter.allconnectionfilterStatus==true){
  this.allConService.getAllConnectionswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
    ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
}
else if(this._Filter.allextractfilterStatus==true){
  this.AllExtractService.getAllextract(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
    ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
}
else if(this._Filter.allIssuefilterStatus==true){
  this._allissueSer.getAllissues(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
    ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
}
  }



//AllExtract
searchValueExtracts(){
 // var SearchValue = ((document.getElementById("SearchExtract") as HTMLInputElement).value);
   
       
       }


//Allissues
searchValueIssue(){
       
          var SearchValue = ((document.getElementById("SearchIssue") as HTMLInputElement).value);
          if(SearchValue ==""){
            window.location.reload();
          }
          else{
          this._allissueSer.searchAllissue(SearchValue);
        }
         }
filterData(){
         var SearchValue = ((document.getElementById("Connections") as HTMLInputElement).value);
         console.log(SearchValue);
       }
       // getNumberOfRecord(){
       //   debugger
       //   var DS = (document.getElementById("numberOfRecords")) as HTMLSelectElement;
       //   var selofWS = DS.selectedIndex;
       //   var optWS = DS.options[selofWS];
       //   var WSValue = optWS.value;
       //   console.log(WSValue);
//}
SelectOption(event : any){
  var val=event.value;
   //this.Hservices.RecordRAnge(val);

}
       
}
