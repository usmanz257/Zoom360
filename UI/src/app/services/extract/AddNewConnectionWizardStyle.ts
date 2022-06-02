import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class AddNewConnectoinWizardStyle {
  
    ConnectionTypeWizardClass="css-Connectorwizard"
    SourceAccountDisable=true;
    SourceAccountClass="AddNewConnectionSourcewizard"
    TempleteAccountWizard=true;
    TempleteWizardClass="AddNewConnectionTemplatewizard";
    ConfiguureWizard=true;
    ConfiguureWizardClass="AddNewConnectionConfigure";
    // FilterWizzard=true;
    // FilterWizzardClass="css-filterwizard";
    // FilterSelectionWizard=true;
    // FilterSelectionClass="css-FilterSelectionwizard";
    // ExecitionPlanWizard=true;
    // ExecitionPlanWizardClass="css-ExecutionPlanWizard";
    // ExtractWizard=true;
    // ExtractWizardClass="css-ExractWizard";

    constructor() {
   
   
    }


}