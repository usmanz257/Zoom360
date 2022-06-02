import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
 

@Component({
  selector: 'app-side-wizard-menu',
  templateUrl: './side-wizard-menu.component.html',
  styleUrls: ['./side-wizard-menu.component.css']
})
export class SideWizardMenuComponent implements OnInit {

  constructor(public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,private router: Router) { }

  ngOnInit(): void {
    debugger
    let path = window.location.href;
    var rest = path.substring(path.lastIndexOf("/") + 1);
    this.checkUrlComponentName(rest);
  }
  checkUrlComponentName(rest){
    debugger
     if(rest=="description"){
      this.router.navigate(['/AddnewDataStream/description']);
      this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="AddNewConnectionTemplatewizardtick";
      this.addNewConnectoinWizardStyle.TempleteAccountWizard=false;
      // this.WizardControlsService.SourceAccountClass="css-skkt0a";

    }
    else if(rest=="Template"){
      this.router.navigate(['/AddnewDataStream/Template']);
      this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="AddNewConnectionTemplatewizardtick";
      this.addNewConnectoinWizardStyle.TempleteAccountWizard=false;
       this.addNewConnectoinWizardStyle.TempleteWizardClass="AddNewConnectionTemplatewizardtick";
      this.addNewConnectoinWizardStyle.SourceAccountDisable=false;
      // this.WizardControlsService.TempleteWizardClass="css-Templatewizard";
    }
    else if(rest=="Configuration"){
      this.router.navigate(['/extract/AddnewDataStream/Micruration']);
      this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="AddNewConnectionTemplatewizardtick";
      this.addNewConnectoinWizardStyle.TempleteAccountWizard=false;
       this.addNewConnectoinWizardStyle.TempleteWizardClass="AddNewConnectionTemplatewizardtick";
       this.addNewConnectoinWizardStyle.SourceAccountDisable=false;
      this.addNewConnectoinWizardStyle.SourceAccountClass="AddNewConnectionSourcewizardtick";
      this.addNewConnectoinWizardStyle.ConfiguureWizard=false;
    }
     
  }

}
