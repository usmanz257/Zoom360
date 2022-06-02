import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateConnectorPages } from 'src/app/services/extract/ConnectorService/UpdateConnectorPages';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

 
@Component({
  selector: 'app-execution-plan',
  templateUrl: './execution-plan.component.html',
  styleUrls: ['./execution-plan.component.css']
})
export class ExecutionPlanComponent implements OnInit {
  Acount_id=localStorage.getItem("value");

  constructor(public WizardControlsService:WizardControls, private router: Router,public  updateConnectorPages:UpdateConnectorPages) { }

  ngOnInit(): void {
  }
  MoveNextStep8(){
    this.WizardControlsService.ExtractWizard=false;
    this.WizardControlsService.ExecitionPlanWizard=false;
    this.WizardControlsService.ExecitionPlanWizardClass="css-ExecutionPlanWizardtick"
    var UserId="Admin";
    var Workspaceid="1";
    var Clientid="1002";
    var ConnectorId="214";
    if(this.Acount_id==null){
      this.router.navigate(['extract/AddnewDataStream/Extract']);
    }else{
      this.updateConnectorPages.upadteExtractStep8(this.Acount_id,UserId,Workspaceid,Clientid,ConnectorId);
     }
  }
  ReversClass(){
    this.WizardControlsService.ExecitionPlanWizard=true;
    this.WizardControlsService.FilterSelectionWizard=false;
    this.WizardControlsService.FilterSelectionClass="css-FilterSelectionwizard"
    // this.WizardControlsService.ExecitionPlanWizardClass="css-ExecutionPlanWizardtick"
    this.router.navigate(['extract/AddnewDataStream/FieldsSelection']);
  }
}
