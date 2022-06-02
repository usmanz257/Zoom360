import { Component, OnInit } from '@angular/core';
 import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

@Component({
  selector: 'app-templet-for-connection',
  templateUrl: './templet-for-connection.component.html',
  styleUrls: ['./templet-for-connection.component.css']
})
export class TempletForConnectionComponent implements OnInit {

  constructor(public WizardControlsService:WizardControls, private router: Router) { }

  ngOnInit(): void {
    this.ClassChangeForSourceAccountWizard();
  }
  ClassChangeForSourceAccountWizard(){
    debugger
    // this.WizardControlsService.SourceAccountClass="css-skkt0atick";
    // this.WizardControlsService.TempleteAccountWizard=!this.WizardControlsService.TempleteAccountWizard;
    
  }
  ReverseClass(){
    // this.WizardControlsService.SourceAccountDisable=!this.WizardControlsService.SourceAccountDisable;
    this.WizardControlsService.SourceAccountClass="css-skkt0a"
    this.WizardControlsService.TempleteAccountWizard=true;
    // this.WizardControlsService.TempleteWizardClass="css-11p48i9";
    this.router.navigate(['extract/extract/AddnewDataStream/Micr']);

  }
  NextSourceObject(){
    this.WizardControlsService.TempleteAccountWizard=false;
    this.WizardControlsService.TempleteWizardClass="css-Templatewizardtick";
    this.WizardControlsService.SourceObjectWizard=false;
    this.router.navigate(['extract/AddnewDataStream/SourceObject']);

  }
}
