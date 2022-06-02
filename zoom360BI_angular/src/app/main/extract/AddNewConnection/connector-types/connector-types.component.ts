import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
import { ConnectorTypeDashbord } from 'src/app/services/extract/ConnectorService/Connectortype';
import { FileUploadService } from 'src/app/services/extract/FilesValidations';
import { ServiceService } from 'src/app/services/extract/service.service';
  

@Component({
  selector: 'app-connector-types',
  templateUrl: './connector-types.component.html',
  styleUrls: ['./connector-types.component.css']
})
export class ConnectorTypesComponent implements OnInit {
  Files=false;
  RelationalDatabases=false;
  FileDatalake=false;
  ResentUseDb=true;
  ResentModules:any[]=[];
  FileClasshightLight:string;
  RecentDashBox:string="box-active";
  DatabasefileBox:string;
  businessfileBox:string

  constructor(public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,private router: Router,private fileUploadService:FileUploadService,
    private connectorTypeDashbord:ConnectorTypeDashbord,
    private serviceService:ServiceService,
    public sourceAccountSettupservis:SourceAccountSettup,
    ) { }

  ngOnInit(): void {
    this.GetResendModule();
    this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="css-Connectorwizard";
    this.addNewConnectoinWizardStyle.TempleteAccountWizard=true;
    this.addNewConnectoinWizardStyle.SourceAccountDisable=true;
    this.addNewConnectoinWizardStyle.ConfiguureWizard=true;
    
  }
  GoSocialMedia(FileName,id){
    localStorage.removeItem('src');
    debugger
    // SocialMediaConnector
    this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="AddNewConnectorType";
    this.addNewConnectoinWizardStyle.TempleteAccountWizard=false;
    var mydivval=document.getElementById(id);
    var myimg=mydivval.getElementsByTagName('img')[0];
    var mycomponentName=myimg.sizes;
    var ConnectorId=myimg.id;
    var name=myimg.alt;
    var ConnectorName=myimg.name;
    var Connectortitle=myimg.title;
    localStorage.setItem('src',FileName);
    JSON.stringify(localStorage.setItem("Connectortitle",Connectortitle));
    localStorage.setItem('ConnectorName',JSON.stringify(ConnectorName));
    localStorage.setItem('Connectorid',JSON.stringify(ConnectorId));

    this.router.navigate(['extract//AddNewConnection/description']); 
  }
  GetInfoDBConnector(FileName,id){
    // localStorage.removeItem('src');
    localStorage.clear();
    debugger
    this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="AddNewConnectorType";
    this.addNewConnectoinWizardStyle.TempleteAccountWizard=false;
    var mydivval=document.getElementById(id);
    var myimg=mydivval.getElementsByTagName('img')[0];
    var mycomponentName=myimg.sizes;
    var ConnectorId=myimg.id;
    var name=myimg.alt;
    var ConnectorName=myimg.name;
    var Connectortitle=myimg.title;
    localStorage.setItem('src',FileName);
    JSON.stringify(localStorage.setItem("Connectortitle",Connectortitle));

    localStorage.setItem('ConnectorName',JSON.stringify(ConnectorName));
    localStorage.setItem('Connectorid',JSON.stringify(ConnectorId));

     
    this.router.navigate(['extract//AddNewConnection/description']); 

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
    Fileuploade(value,FileName,id){
      debugger
      localStorage.removeItem('src');
      JSON.stringify(localStorage.setItem("FileType",value));
      this.sourceAccountSettupservis.FileType=value;
      // this.fileUploadService.FileType=value;
      this.addNewConnectoinWizardStyle.ConnectionTypeWizardClass="AddNewConnectorType";
    this.addNewConnectoinWizardStyle.TempleteAccountWizard=false;
    var mydivval=document.getElementById(id);
    var myimg=mydivval.getElementsByTagName('img')[0];
     var imgpath=myimg.src;
     var z =imgpath.substring(imgpath.lastIndexOf('/')+1);
    var ConnectorName=myimg.name;
    var Connectortitle=myimg.title;
    var ConnectorId=myimg.id;
    localStorage.setItem('src',FileName);
    JSON.stringify(localStorage.setItem("Connectortitle",Connectortitle));
    localStorage.setItem('ConnectorName',JSON.stringify(ConnectorName));
    localStorage.setItem('Connectorid',JSON.stringify(ConnectorId));
   

     
    this.router.navigate(['extract//AddNewConnection/description']); 
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
