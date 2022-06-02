import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
 import { Descriptionmodel } from 'src/app/models/extract/description-model';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
import { Destinationservices } from 'src/app/services/extract/destination/destinationservice';
import { Destination } from 'src/app/services/extract/destination/wizard-services';

@Component({
  selector: 'app-des-description',
  templateUrl: './des-description.component.html',
  styleUrls: ['./des-description.component.css']
})
export class DesDescriptionComponent implements OnInit {

  DescriptionModel=new Descriptionmodel();
  workspacedropdownlist:any[]=[];
  Accountdisplayname=true;
  imgname:string;
  constructor(  public sourceAccountSettup:SourceAccountSettup,
    public destinationwizardstyle:Destination,
    private router: Router, private destination:Destinationservices) { 
       this.imgname=localStorage.getItem('src');

    }

  ngOnInit(): void {
    this.getWorspaceDropdown()
  }
  getWorspaceDropdown(){
    debugger
    var UserId='admin';
    var DropdownType='workspace'
    debugger
    this.sourceAccountSettup.SourceAccountSettup(UserId,DropdownType).subscribe((data:any)=>{
      debugger
      if(data.length > 0){
      this.workspacedropdownlist=data;
    }
    });
  }
  ReversClass(){
    debugger
    this.destinationwizardstyle.ConnectionTypeWizardClass="css-Connectorwizard"
    this.destinationwizardstyle.TempleteAccountWizard=true;
     this.router.navigate(['extract/destination/Type']);
 
 }
 nextmove(Description:Descriptionmodel){
   debugger
  localStorage.getItem("description");
  localStorage.setItem("description",JSON.stringify(Description));
   
      // this.WizardControlsService.TempleteWizardClass="
      this.destinationwizardstyle.TempleteWizardClass="AddNewConnectionTemplatewizardtick"
      this.destinationwizardstyle.SourceAccountDisable=false;
      this.router.navigate(['extract/destination/Template']);
  this.destination.savedescription(Description).subscribe((data:any)=>{
    
  })
 }
 SaveDescription(Description:Descriptionmodel){
  debugger
  localStorage.getItem("description");
  localStorage.setItem("description",JSON.stringify(Description));
  this.destinationwizardstyle.TempleteWizardClass="AddNewConnectionTemplatewizardtick"
  this.destinationwizardstyle.SourceAccountDisable=false;
  this.router.navigate(['extract/destination/Template']);
  this.destination.savedescription(Description).subscribe((data:any)=>{
   
 })
 }
}
