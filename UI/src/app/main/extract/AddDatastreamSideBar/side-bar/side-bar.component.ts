import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public WizardControlsService:WizardControls,private router: Router,) { }

  ngOnInit(): void {
     let path = window.location.href;
    var rest = path.substring(path.lastIndexOf("/") + 1);
    this.checkUrlComponentName(rest);
  }
  ReversSourceAccountClass(){
    this.WizardControlsService.SourceAccountClass='css-skkt0a';
    this.WizardControlsService.TempleteWizardClass='css-11p48i9';
    this.WizardControlsService.TempleteAccountWizard=true;
  }
  onclickTypeDisableBelowWizard(){
    this.WizardControlsService.SourceAccountClass="css-107z33x";
    this.WizardControlsService.ConnectionTypeWizardClass="css-Connectorwizard";
    this.WizardControlsService.SourceAccountDisable=true;
    this.WizardControlsService.TempleteAccountWizard=true;
    // this.router.navigate(['/AddnewDataStream/SelectType']);


  }
  checkUrlComponentName(rest){
    debugger
    if(rest=="Config"){
      this.router.navigate(['/extract/AddnewDataStream/Micr']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      // this.WizardControlsService.SourceAccountClass="css-skkt0a";

    }
    else if(rest=="Templet"){
      this.router.navigate(['/AddnewDataStream/Templet']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      this.WizardControlsService.SourceAccountClass="css-skkt0atick";
      this.WizardControlsService.TempleteAccountWizard=false;
      // this.WizardControlsService.TempleteWizardClass="css-Templatewizard";
    }
    else if(rest=="SourceObject"){
      this.router.navigate(['/AddnewDataStream/SourceObject']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      this.WizardControlsService.SourceAccountClass="css-skkt0atick";
      this.WizardControlsService.TempleteAccountWizard=false;
      this.WizardControlsService.TempleteWizardClass="css-Templatewizardtick";
      this.WizardControlsService.SourceObjectWizard=false;
      // this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizard";
    }
    else if(rest=="Filters"){
      this.router.navigate(['/AddnewDataStream/Filters']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      this.WizardControlsService.SourceAccountClass="css-skkt0atick";
      this.WizardControlsService.TempleteAccountWizard=false;
      this.WizardControlsService.TempleteWizardClass="css-Templatewizardtick";
      this.WizardControlsService.SourceObjectWizard=false;
      this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizardtick";
      this.WizardControlsService.FilterWizzard=false;
      // this.WizardControlsService.FilterWizzardClass="css-filterwizard";
    }
    else if(rest=="FieldsSelection"){
      this.router.navigate(['/AddnewDataStream/FieldsSelection']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      this.WizardControlsService.SourceAccountClass="css-skkt0atick";
      this.WizardControlsService.TempleteAccountWizard=false;
      this.WizardControlsService.TempleteWizardClass="css-Templatewizardtick";
      this.WizardControlsService.SourceObjectWizard=false;
      this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizardtick";
      this.WizardControlsService.FilterWizzard=false;
      this.WizardControlsService.FilterWizzardClass="css-filterstick";
      this.WizardControlsService.FilterSelectionWizard=false;


    }
    else if(rest=="ExecutionPlan"){
      this.router.navigate(['/AddnewDataStream/ExecutionPlan']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      this.WizardControlsService.SourceAccountClass="css-skkt0atick";
      this.WizardControlsService.TempleteAccountWizard=false;
      this.WizardControlsService.TempleteWizardClass="css-Templatewizardtick";
      this.WizardControlsService.SourceObjectWizard=false;
      this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizardtick";
      this.WizardControlsService.FilterWizzard=false;
      this.WizardControlsService.FilterWizzardClass="css-filterstick";
      this.WizardControlsService.FilterSelectionWizard=false;
      this.WizardControlsService.FilterSelectionClass="css-FilterSelectiontick";
      this.WizardControlsService.ExecitionPlanWizard=false;



    }
    else if(rest=="Extract"){
      this.router.navigate(['/AddnewDataStream/Extract']);
      this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
      this.WizardControlsService.SourceAccountDisable=false;
      this.WizardControlsService.SourceAccountClass="css-skkt0atick";
      this.WizardControlsService.TempleteAccountWizard=false;
      this.WizardControlsService.TempleteWizardClass="css-Templatewizardtick";
      this.WizardControlsService.SourceObjectWizard=false;
      this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizardtick";
      this.WizardControlsService.FilterWizzard=false;
      this.WizardControlsService.FilterWizzardClass="css-filterstick";
      this.WizardControlsService.FilterSelectionWizard=false;
      this.WizardControlsService.FilterSelectionClass="css-FilterSelectiontick";
      this.WizardControlsService.ExecitionPlanWizard=false;
      this.WizardControlsService.ExecitionPlanWizardClass="css-ExecutionPlanWizardtick";
      this.WizardControlsService.ExtractWizard=false;




    }
  }
  
}
