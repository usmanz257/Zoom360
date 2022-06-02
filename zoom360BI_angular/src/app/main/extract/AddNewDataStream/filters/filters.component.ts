import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(public WizardControlsService:WizardControls, private router: Router) { }

  ngOnInit(): void {
  }
  ReversClass(){
    this.WizardControlsService.FilterWizzard=true;
    this.WizardControlsService.FilterWizzardClass="css-11p48i9filter"
    this.WizardControlsService.SourceObjectWizard=false;
    this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizard";
    this.router.navigate(['extract/AddnewDataStream/SourceObject']);
  }
  NextPageWizzardClassChange(){
    this.WizardControlsService.FilterWizzard=false;
    this.WizardControlsService.FilterWizzardClass="css-FilterSelectiontick"
    this.WizardControlsService.FilterSelectionWizard=false;
    this.WizardControlsService.FilterSelectionClass="css-FilterSelectionwizard"
    this.router.navigate(['extract/AddnewDataStream/FieldsSelection']);
  }
}
