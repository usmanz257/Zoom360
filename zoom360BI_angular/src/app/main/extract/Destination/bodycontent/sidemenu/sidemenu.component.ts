import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from 'src/app/services/extract/destination/wizard-services';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(public destinationwizard:Destination,private router: Router) { }

  ngOnInit() {
    let path = window.location.href;
    var rest = path.substring(path.lastIndexOf("/") + 1);
    this.checkUrlComponentName(rest);
  }
  checkUrlComponentName(rest){
    debugger
     if(rest=="description"){
      this.router.navigate(['/extract/destination/description']);
      this.destinationwizard.ConnectionTypeWizardClass="AddNewConnectionTemplatewizardtick";
      this.destinationwizard.TempleteAccountWizard=false;
      // this.WizardControlsService.SourceAccountClass="css-skkt0a";

    }
    else if(rest=="Template"){
      this.router.navigate(['/extract/destination/Template']);
      this.destinationwizard.ConnectionTypeWizardClass="AddNewConnectionTemplatewizardtick";
      this.destinationwizard.TempleteAccountWizard=false;
       this.destinationwizard.TempleteWizardClass="AddNewConnectionTemplatewizardtick";
      this.destinationwizard.SourceAccountDisable=false;
      // this.WizardControlsService.TempleteWizardClass="css-Templatewizard";
    }
    else if(rest=="configration"){
      this.router.navigate(['/extract/destination/configration']);
      this.destinationwizard.ConnectionTypeWizardClass="AddNewConnectionTemplatewizardtick";
      this.destinationwizard.TempleteAccountWizard=false;
       this.destinationwizard.TempleteWizardClass="AddNewConnectionTemplatewizardtick";
       this.destinationwizard.SourceAccountDisable=false;
      this.destinationwizard.SourceAccountClass="AddNewConnectionSourcewizardtick";
      this.destinationwizard.ConfiguureWizard=false;
    }
     
  }

}
