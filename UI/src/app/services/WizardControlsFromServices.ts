import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class WizardControls {
  
    ConnectionTypeWizardClass="css-Connectorwizard"
    SourceAccountDisable=true;
    SourceAccountClass="css-skkt0a"
    TempleteAccountWizard=true;
    TempleteWizardClass="css-Templatewizard";
    SourceObjectWizard=true;
    SourceObjectWizardClass="css-Sourcewizard";
    FilterWizzard=true;
    FilterWizzardClass="css-filterwizard";
    FilterSelectionWizard=true;
    FilterSelectionClass="css-FilterSelectionwizard";
    ExecitionPlanWizard=true;
    ExecitionPlanWizardClass="css-ExecutionPlanWizard";
    ExtractWizard=true;
    ExtractWizardClass="css-ExractWizard";

    constructor() {
   
   
    }


}