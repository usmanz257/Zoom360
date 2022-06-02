import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { PostService } from 'src/app/services/post.service';


import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DatastreamServiceService } from 'src/app/services/extract/datastream-service.service';
import { SqlConnector } from 'src/app/services/extract/ConnectorService/SqlConnectorServices';
import { ConnectorTypeDashbord } from 'src/app/services/extract/ConnectorService/Connectortype';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

 
@Component({
  selector: 'app-select-data-stream',
  templateUrl: './select-data-stream.component.html',
  styleUrls: ['./select-data-stream.component.css']
})
export class SelectDataStreamComponent implements OnInit {
   errorMsg:string="";
   Files=false;
   RelationalDatabases=false;
   FileDatalake=false;
   ResentUseDb=true;
  errorMsgflag=false;
  ResentModules:any[]=[];
  FileClasshightLight:string;
  RecentDashBox:string="box-active";
  DatabasefileBox:string;
  businessfileBox:string
  constructor(public AddnewDt:DatastreamServiceService,
    public WizardControlsService:WizardControls,
    public _sqlConnector:SqlConnector, 
    private router: Router,
    private connectorTypeDashbord:ConnectorTypeDashbord,
    ) { }

  ngOnInit(): void {
    this.WizardControlsService.ConnectionTypeWizardClass="css-Connectorwizard";
    this.WizardControlsService.SourceAccountDisable=true;
    this.WizardControlsService.TempleteAccountWizard=true;
    this.WizardControlsService.SourceObjectWizard=true;
    this.WizardControlsService.FilterWizzard=true;
    this.WizardControlsService.FilterSelectionWizard=true;
    this.WizardControlsService.ExecitionPlanWizard=true;
    this.WizardControlsService.ExtractWizard=true;
    this. GetResendModule();

  }
  GetDbConnectorInfo(FileName,id){
    debugger
    localStorage.clear();
   
    this.WizardControlsService.SourceAccountDisable=false;
    this.WizardControlsService.SourceAccountClass="css-skkt0a";
    this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
    console.log(this.WizardControlsService.SourceAccountDisable);
    var mydivval=document.getElementById(id);
     var myimg=mydivval.getElementsByTagName('img')[0];
    var mycomponentName=myimg.sizes;
    var ConnectorId=myimg.id;
    var Connectortitle=myimg.title;
    var name=myimg.alt;
    var ConnectorName=myimg.name;
    localStorage.setItem('src',FileName);
    JSON.stringify(localStorage.setItem("ConnectorId",ConnectorId));
    JSON.stringify(localStorage.setItem("Connectortitle",Connectortitle));
    JSON.stringify(localStorage.setItem("ConnectorName",ConnectorName));
      
      this.router.navigate(['/extract/AddnewDataStream/Micr']);

}
   MongoDB(){
    debugger
    this.WizardControlsService.SourceAccountDisable=!this.WizardControlsService.SourceAccountDisable;
    this.WizardControlsService.SourceAccountClass="css-skkt0a";
    this.WizardControlsService.ConnectionTypeWizardClass="ConnectorType";
    console.log(this.WizardControlsService.SourceAccountDisable);
     var mydivval=document.getElementById("mydiv1");
    var myimg=mydivval.getElementsByTagName('img')[0];
    var mycomponentName=myimg.sizes;
    var ConnectorId=myimg.id;
    var name=myimg.alt;
    var ConnectorName=myimg.name;
    localStorage.setItem('mycomponentName',JSON.stringify(mycomponentName));
    localStorage.setItem('ConnectorName',JSON.stringify(ConnectorName));
     this.router.navigate(['/extract/AddnewDataStream/Micr']);

    }
    FilesShow(){
      debugger
      this.Files=true;
      this.ResentUseDb=false;
      this.RelationalDatabases=false;
      this.FileDatalake=false;
      this.FileClasshightLight="box-active";
      this.RecentDashBox="simple-box"; 
      this.DatabasefileBox="simple-box"; 
      this.businessfileBox="simple-box"; 
       
    }
    ResentShow(){
      this.Files=false;
      this.ResentUseDb=true;
      this.RelationalDatabases=false;
      this.FileDatalake=false;
      this.FileClasshightLight="simple-box";
      this.RecentDashBox="box-active"; 
      this.DatabasefileBox="simple-box"; 
      this.businessfileBox="simple-box"; 
    }
    Databaseshow(){
      this.Files=false;
      this.ResentUseDb=false;
      this.RelationalDatabases=true;
      this.FileDatalake=false;
      this.FileClasshightLight="simple-box";
      this.RecentDashBox="simple-box"; 
      this.DatabasefileBox="box-active"; 
      this.businessfileBox="simple-box";
    }
    ShowBusinessPlateForm(){
      this.Files=false;
      this.ResentUseDb=false;
      this.RelationalDatabases=false;
      this.FileDatalake=true;
      this.FileClasshightLight="simple-box";
      this.RecentDashBox="simple-box"; 
      this.DatabasefileBox="simple-box"; 
      this.businessfileBox="box-active";
    }
    GetResendModule(){
      debugger
     var UserId="admin";
     var Workspaceid="1";
     var Clientid="1002";
    var GetConnectorIds="182";
     
      this.connectorTypeDashbord.ResentModule(UserId,Workspaceid,Clientid).subscribe((data:any)=>{
        if(data.length >0){
          debugger
         this.ResentModules=data;
     
        }
        });
     
      
     //}
  
    }
}
  
