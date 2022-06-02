import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { extractModel } from 'src/app/models/extract/ExtractPageModelForStep8';
import { ExtractServices } from 'src/app/services/extract/ConnectorService/ExtractDataServicesStep8';
import { UpdateConnectorPages } from 'src/app/services/extract/ConnectorService/UpdateConnectorPages';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

 
@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {
  Acount_id=localStorage.getItem("value");
  UpdateExtract:extractModel[]=[];
  // FromDateValue:string="";
  // TodateValue:string="";
  // RowDataValue:string="";
  ExtarctModel=new extractModel();
  // Extractprocessrunningoptions:string="Run single process";
  // Datacollectionoptionsvalue:string="Consolidate extracts";
  DonotPush:string="";
   constructor(public WizardControlsService:WizardControls,private router: Router,
    public extract:ExtractServices,public  updateConnectorPages:UpdateConnectorPages) { }

  ngOnInit(): void {
    this.UpdateStep8();
    if(this.Acount_id==null){
      debugger
      this.ExtarctModel.date_LINK="";
     this.ExtarctModel.date_LINK1=""
     this.ExtarctModel.data_RAW_STATE=false;
     this.ExtarctModel.extract_PROCESS_RUNNING="Multiple processes";
     this.ExtarctModel.data_COLLECTION="Individual extracts";

    }
    else{
     this.ControlsValueonRefreshPage();
    }
  }
  ExtractinfoSave(Data:extractModel){
    var UserId="admin";
    var Clientid="1002";
    var Workspaceid="1";
    var AccountId="9003";
    var ConnectorId="214";
    this.extract.SaveDataForExtract(Data,UserId,Clientid,Workspaceid,AccountId,ConnectorId).subscribe((data:any)=>{
     })
   }
  ReversClass(){
  this.WizardControlsService.ExtractWizard=true;
  this.WizardControlsService.ExecitionPlanWizard=false;
  this.WizardControlsService.ExecitionPlanWizardClass="css-ExecutionPlanWizard";
  this.router.navigate(['extract/AddnewDataStream/ExecutionPlan']);
   }
   UpdateStep8(){
     debugger
     this.ExtarctModel.date_LINK=this.updateConnectorPages.UpdateExtract.map(a=>a.date_LINK)[0];
     this.ExtarctModel.date_LINK1=this.updateConnectorPages.UpdateExtract.map(a=>a.date_LINK1)[0];
     this.ExtarctModel.data_RAW_STATE=this.updateConnectorPages.UpdateExtract.map(a=>a.data_RAW_STATE)[0];
     this.ExtarctModel.extract_PROCESS_RUNNING=this.updateConnectorPages.UpdateExtract.map(a=>a.extract_PROCESS_RUNNING)[0];
     this.ExtarctModel.data_COLLECTION=this.updateConnectorPages.UpdateExtract.map(a=>a.data_COLLECTION)[0];

   }
   ControlsValueonRefreshPage(){
    var UserId="Admin";
    var Workspaceid="1";
    var Clientid="1002";
    var ConnectorId="214";
    this.updateConnectorPages.ControlUpdateValueOnExtractStep8(this.Acount_id,UserId,Workspaceid,Clientid,ConnectorId).subscribe((data:extractModel[])=>{
      debugger
      if(data.length > 0){
         this.UpdateExtract=data;
         this.ExtarctModel.date_LINK=this.UpdateExtract.map(a=>a.date_LINK)[0];
         this.ExtarctModel.date_LINK1=this.UpdateExtract.map(a=>a.date_LINK1)[0];
         this.ExtarctModel.data_RAW_STATE=this.UpdateExtract.map(a=>a.data_RAW_STATE)[0];
         this.ExtarctModel.extract_PROCESS_RUNNING=this.UpdateExtract.map(a=>a.extract_PROCESS_RUNNING)[0];
         this.ExtarctModel.data_COLLECTION=this.UpdateExtract.map(a=>a.data_COLLECTION)[0];
   
        
   
  
    }
    });
   }
 
    

}
