import { Component, OnInit } from '@angular/core';
import { ConnectionListModel } from 'src/app/Models/connect.model';
import { SalesDetailAnalysisService } from 'src/app/Services/Analyze/sales-detail-analysis.service';
import { FiltersService } from 'src/app/Services/common/filters.service';
import { GetAllConnectionsService } from 'src/app/Services/extract/get-all-connections.service';
@Component({
  selector: 'app-data-monitor',
  templateUrl: './data-monitor.component.html',
  styleUrls: ['./data-monitor.component.css']
})
export class DataMonitorComponent implements OnInit {
  screenName:string='connections';
  updateConnections:ConnectionListModel[]=[];
  allcheckbox:boolean=false;
  limit:string = 'All';
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  appearanceLogo_toggle:boolean=false;
  appearanceLogo_arrow:boolean=false;
  workspaceName_toggle:boolean=false;
  workspaceName_arrow:boolean=false;
  connectorName_toggle:boolean=false;
  connectorName_arrow:boolean=false;
  bstatus_toggle=false;
  bstatus_arrow:boolean=false;
  _tablecounter:number=0;
  constructor(public allConService:GetAllConnectionsService, private filterService:FiltersService,public salesDetailAnalysisService:SalesDetailAnalysisService) { 

  }

 ngOnInit(): void {
   this.filterService._screenName='Available Connections';
   this.getAllConections(this.limit);
   //this.allConService._tablecounter=0;
   this._tablecounter=0;

 }
getAllConections(limit){
 
 this.filterService.setFilter(this.screenName);
 this.allConService.getAllConnectionswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
   ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
}
checkAll(ev) {
 this.allConService._connectionData.forEach(x => x.state = ev.target.checked)
 
}
findCount(index,e) {
 debugger
 if(e.target.checked)
 {
   this.allcheckbox=false;
   this._tablecounter+=1;
   var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
   var sourceConnectionId = 'sourceConnectionId';
   var  test= this.allConService._connectionData[index][sourceConnectionId];
   var result= this.updateConnections.findIndex(x=>x.sourceConnectionId==test);
   if(result==-1){
       this.updateConnections.push(this.allConService._connectionData[index]);
       }
   else{
       this.updateConnections.splice(result,1);
       this.updateConnections.push(this.allConService._connectionData[index]);
       }
 }
 else{
   this._tablecounter-=1;
   var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
   var sourceConnectionId = 'sourceConnectionId';
   var  test= this.allConService._connectionData[index][sourceConnectionId];
   var result= this.updateConnections.findIndex(x=>x.sourceConnectionId==test);
   if(result!=-1){
     this.updateConnections.splice(result,1);
       }
   this.allcheckbox=false;
   
 }
}
functionCount(e){
 
 if(e.target.checked)
 {
   this.allcheckbox=true;
   this._tablecounter= this.allConService._recordLength;
   for(let i=0;i<this.allConService._connectionData.length;i++){
     
     var sourceConnectionId = 'sourceConnectionId';
     var  test= this.allConService._connectionData[i][sourceConnectionId];
     var result= this.updateConnections.findIndex(x=>x.sourceConnectionId==test);
     if(result==-1){
         this.updateConnections.push(this.allConService._connectionData[i]);
         }
     else{
         this.updateConnections.splice(result,1);
         this.updateConnections.push(this.allConService._connectionData[i]);
         }
 }      
 }
 else{
      this.allcheckbox=false;
      this._tablecounter=0;
      this.updateConnections.splice(0,this.updateConnections.length);
 }
}
applySort(fieldName){
 if(fieldName=='connectorName'){
   this.appearanceLogo_arrow=true;
   this.appearanceLogo_toggle=!this.appearanceLogo_toggle;
   this.allConService._sortToggle=!this.allConService._sortToggle;
   this.allConService.sortAllissues(fieldName);
 }
 else if(fieldName=='workspaceName'){
   this.workspaceName_arrow=true;
   this.workspaceName_toggle=!this.workspaceName_toggle;
   this.allConService._sortToggle=!this.allConService._sortToggle;
   this.allConService.sortAllissues(fieldName);
 }
 else if(fieldName=='account_Display_Name'){
   this.connectorName_arrow=true;
   this.connectorName_toggle=!this.connectorName_toggle;
   this.allConService._sortToggle=!this.allConService._sortToggle;
   this.allConService.sortAllissues(fieldName);
 }
 else if(fieldName=='accessgranted'){
   
   this.bstatus_arrow=true;
   this.bstatus_toggle=!this.bstatus_toggle;
   this.allConService._sortToggle=!this.allConService._sortToggle;
   this.allConService.sortAllissues(fieldName);
 }

}
ToggleDestination(index){
 debugger
var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
elemCheckBox.checked=true;
var sourceConnectionId = 'sourceConnectionId';
var  test= this.allConService._connectionData[index][sourceConnectionId];
var result= this.updateConnections.findIndex(x=>x.sourceConnectionId==test);
if(result==-1){
 this.updateConnections.push(this.allConService._connectionData[index]);
 this._tablecounter +=1;
}
else{
 this.updateConnections.splice(result,1);
 this.updateConnections.push(this.allConService._connectionData[index]);
}

}
reloadPage(){
 this.appearanceLogo_arrow=false;
 this.workspaceName_arrow=false;
 this.connectorName_arrow=false;
 this.bstatus_toggle=false;
 this.allConService.getAllConnectionswithLimit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
   ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5);
}

}
