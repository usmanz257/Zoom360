import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
 

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  imgname:string;
  constructor(public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle, private router: Router) {
    this.imgname=localStorage.getItem('src');
   }

  ngOnInit(): void {
  }
  ReverseClass(){
    this.addNewConnectoinWizardStyle.TempleteWizardClass="AddNewConnectionTemplatewizard";
    this.addNewConnectoinWizardStyle.SourceAccountDisable=true;
     this.router.navigate(['extract//AddNewConnection/description']);
   }
  NextSourceObject(){
    this.addNewConnectoinWizardStyle.SourceAccountClass="AddNewConnectionSourcewizardtick"

    // this.addNewConnectoinWizardStyle.TempleteWizardClass="AddNewConnectionTemplatewizardtick"
    this.addNewConnectoinWizardStyle.ConfiguureWizard=false;
    // this.router.navigate(['/AddNewConnection/AccountSettup']);
             
            this.router.navigate(['extract//AddNewConnection/Configuration']);

  }
}
