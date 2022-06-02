import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { WizardControls } from './WizardControlsFromServices';
import { SourceAccountSettup } from './AddNewConnectionServices/SourceAccountSettup';
import { SQLCridentialModel } from 'src/app/models/extract/SqlDbCridentialModel';
import { SourcObject } from 'src/app/models/extract/access-microsoft-sqlserver';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EstablishConnector {
Hostname:string="192.168.50.101";
Database:string=null;
Username:string=null;
Password:string=null;
PortNumber:string=null;
DataBase_Span=false;
Username_Span=false;
Password_Span=false;
SqlModel=new  SQLCridentialModel();
Email_span=false;
AccountName_span=false;
   
  
  RowLengthForSqlConnector:number;
    url=environment.apiUrl+'/api/SqlConnector/SaveStep1Data';
    constructor(private _http: HttpClient, private router: Router, 
      public _WizardService:WizardControls,
      public sourceAccountSettup:SourceAccountSettup,) { }
      SaveAllData(obj1){
        debugger
       var ChildData={
    
       "Hostname":this.sourceAccountSettup.Hostname,
       "Database": this.sourceAccountSettup.Database ,
       "UserName":this.sourceAccountSettup.Username ,
       "Password":this.sourceAccountSettup.Password,
       "PortNumber":this.sourceAccountSettup.PortNumber,
        
        } 
         
          let params = new HttpParams()
          .set("AccountDisplayName",obj1.AccountDisplayName)
          .set("EnableConnectoins", ''+obj1.EnableConnectoins)
          .set("Email",obj1.Email)
          .set("AccountAuthurization",obj1.AccountAuthurization)
          .set("Workspace",obj1.Workspace);
      
    
     
    
    
    
    
    
        if(this.sourceAccountSettup.Database==null){
          this.sourceAccountSettup.DataBase_Span=true;
           
         }
         else if(this.sourceAccountSettup.Database!=null){
          this.sourceAccountSettup.DataBase_Span=false;
         }
        if(this.sourceAccountSettup.Username==null){
          this.sourceAccountSettup.Username_Span=true;
           
         }
         else if(this.sourceAccountSettup.Username!=null){
          this.sourceAccountSettup.Username_Span=false;
         }
          if(this.sourceAccountSettup.Password==null){
          this.sourceAccountSettup.Password_Span=true;
           
         }
         else if(this.sourceAccountSettup.Password!=null){
          this.sourceAccountSettup.Password_Span=false;
         }
         if(this.sourceAccountSettup.Password!=null && this.sourceAccountSettup.Username!=null && this.sourceAccountSettup.Database!=null){
          this._http.post(this.url,ChildData,{params:params}).subscribe((data:any)=>{
            this._WizardService.SourceAccountClass="css-skkt0atick";
            this._WizardService.TempleteAccountWizard=!this._WizardService.TempleteAccountWizard;
              this.router.navigate(['extract/AddnewDataStream/Templet']);
            
          });
          }
          
         }
  SaveDataForSourceObject(SourceData:SourcObject){
    debugger
   
     
    this._http.post(this.url+'/api/SqlConnector/SaveStep4Data',SourceData).subscribe((data:any)=>{
     
    
  });
  }
   
  }