import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
 

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor( private router: Router,
    public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,) { }

  ngOnInit(): void {
  }
  ReversClass(){
    this.addNewConnectoinWizardStyle.SourceAccountClass="AddNewConnectionSourcewizard"
    this.addNewConnectoinWizardStyle.ConfiguureWizard=true;
    this.router.navigate(['extract//AddNewConnection/AccountSettup']);
  }
}
