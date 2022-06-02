import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class Destination {
  
    ConnectionTypeWizardClass="css-Connectorwizard"
    SourceAccountDisable=true;
    SourceAccountClass="AddNewConnectionSourcewizard"
    TempleteAccountWizard=true;
    TempleteWizardClass="AddNewConnectionTemplatewizard";
    ConfiguureWizard=true;
    ConfiguureWizardClass="AddNewConnectionConfigure";
    

    constructor() {
   
   
    }


}