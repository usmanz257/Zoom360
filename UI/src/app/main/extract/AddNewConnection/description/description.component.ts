import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Descriptionmodel } from 'src/app/models/extract/description-model';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
   
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  DescriptionModel=new Descriptionmodel();
  workspacedropdownlist:any[]=[];
  Accountdisplayname=true;
  imgname:string;
  constructor(  public sourceAccountSettup:SourceAccountSettup,
    public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,
    private router: Router,) { 
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
    this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="css-Connectorwizard"
    this.addNewConnectoinWizardStyle.TempleteAccountWizard=true;
     this.router.navigate(['extract/AddNewConnection/ConnectorType']);
 
 }
 nextmove(Description:Descriptionmodel){
  localStorage.getItem("description");
  localStorage.setItem("description",JSON.stringify(Description));
  this.sourceAccountSettup.SaveDescriptionInfo(Description).subscribe((data:any)=>{
  this.addNewConnectoinWizardStyle.TempleteWizardClass="AddNewConnectionTemplatewizardtick"
  this.addNewConnectoinWizardStyle.SourceAccountDisable=false;
  this.router.navigate(['extract/AddNewConnection/Template']);
  })
 }
 SaveDescription(Description:Descriptionmodel){
  debugger
  localStorage.getItem("description");
  localStorage.setItem("description",JSON.stringify(Description));
  this.sourceAccountSettup.SaveDescriptionInfo(Description).subscribe((data:any)=>{
   
 })
 }
}
