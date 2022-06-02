import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { parse } from 'path';
import { Observable } from 'rxjs';
import { SourceAccount } from 'src/app/models/extract/access-microsoft-sqlserver';
import { Descriptionmodel } from 'src/app/models/extract/description-model';
import { environment } from 'src/environments/environment';

import { AddNewConnectoinWizardStyle } from '../AddNewConnectionWizardStyle';
  
@Injectable({
  providedIn: 'root'
})
export class SourceAccountSettup {
    url='https://localhost:44397';
    URL=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/saveDescriptionInfo";
    dropdownworkspave=environment.apiUrl+"/api/CommonDropdownList/GetDropdownList";
    savecredentials=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/saveDbCredentialInfo";
    saveAuthorizationArea=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/saveSocialMedia";
    getFileFromFilesComponent:string;
    FileType:string;
    file:string;
Hostname:string="192.168.50.101";
Database:string=null;
PortNumber:string=null;
Username:string=null;
Password:string=null;
DataBase_Span=false;
Username_Span=false;
Password_Span=false;
    FileErrorMessage=false;
    public progress: number;
    public message: string;
    formData = new FormData();
     constructor(private _http: HttpClient,private router: 
      Router,public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,) {
      var fileextention=localStorage.getItem("FileType");
      this.FileType=fileextention;
   
    }
     SourceAccountSettup(UserId:string,DropdownType:string){
        let params = new HttpParams().set("UserId",UserId).set("dropdownName",DropdownType);
        return  this._http.get(`${this.dropdownworkspave}`,{params:params});
      
      }
      SourceAccountSettupEmailAuthorization(SourceAccountSettupData:SourceAccount): Observable<any>{
        var obj={
          "userId":"1",
          "workspaceId":"1",
          "clientId":"103",
          "AccountId":"9005",
          "connectorId":"171",
        }
        
         var socialmedia={
          "Email":SourceAccountSettupData.Email,
          "AccountAuthurization":SourceAccountSettupData.AccountAuthurization,
          "SourceCommonModel":obj
           }
        debugger
        return this._http.post(this.saveAuthorizationArea,socialmedia,{responseType: 'text'});
      
      }

      filesName(fileInput:any,files)
      {
        if (files.length === 0) {
          return;
        }
        debugger
        this.file = fileInput.target.files[0].name.split('.').pop();
         
         if(this.FileType =="."+this.file){
           this.FileErrorMessage=false;
           let fileToUpload = <File>files[0];
          
           this.formData.append('file', fileToUpload, fileToUpload.name);
           
           }
           else{
            this.FileErrorMessage=true;
          }
        
        
        
        
           
      }

      SaveAllData(AccountDisplay:SourceAccount){
        debugger
        let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
 
        const httpOptions = {  
            headers: headers  
        };
         
           var SourceAccountSettupData={
             "ParentData":AccountDisplay,
             "file":this.formData,
           }
           let params = new HttpParams()
           .set("AccountName",AccountDisplay.AccountName)
           .set("workspace",AccountDisplay.workspace)
           .set("EnableConnectoins",""+AccountDisplay.EnableConnectoins)
           .set("Email",AccountDisplay.Email)
           .set("AccountAuthurization",AccountDisplay.AccountAuthurization);

            var formdata=this.formData;
            this._http.post(this.url+'/api/AddNewConnection/SourceAccountWithFile',this.formData,{params:params}).subscribe((data:any)=>{
            this.addNewConnectoinWizardStyle.SourceAccountClass="AddNewConnectionSourcewizardtick"
            this.addNewConnectoinWizardStyle.ConfiguureWizard=false
            this.router.navigate(['/AddNewConnection/Configuration']);
            
          });
          
          
         }

       SaveDescriptionInfo(Description:Descriptionmodel){
         debugger
         var userId="admin"; 
         var workspaceId="1";
         var clientid="401";
         var AccountId="9012";
         var connectorId=JSON.parse(localStorage.getItem('Connectorid'));
         var InputModel={
          "userId":userId,
          "workspaceId":workspaceId,
          "clientId":clientid,
          "AccountId":AccountId,
          "connectorId":connectorId,
          "SourceInfoModel":Description
        }
       return this._http.post(this.URL,InputModel);

      } 
      Savedbcredentials(){
        debugger
        localStorage.getItem("DbConfigure");
        var DBObject={
          "Hostname":this.Hostname,
          "Database": this.Database,
          "PortNumber":this.PortNumber,
          "UserName":this.Username ,
          "Password":this.Password,
           } 
           var CommonParams={
            "userId":"admin",
            "workspaceId":"1",
            "clientId":"1002",
            "AccountId":"9001",
            "connectorId":"214", 
           }
          var  DbAccount={
             "SourceCommonModel":CommonParams,
             "sOURCE_CNF":DBObject
          }
           localStorage.setItem("DbConfigure",JSON.stringify(DBObject));
           if(this.Database==null){
            this.DataBase_Span=true;
             
           }
           else if(this.Database!=null){
            this.DataBase_Span=false;
           }
          if(this.Username==null){
            this.Username_Span=true;
             
           }
           else if(this.Username!=null){
            this.Username_Span=false;
           }
            if(this.Password==null){
            this.Password_Span=true;
             
           }
           else if(this.Password!=null){
            this.Password_Span=false;
           }
           if(this.Password!=null && this.Username!=null && this.Database!=null){
            this._http.post(this.savecredentials,DbAccount).subscribe((data:any)=>{
              this.router.navigate(['extract/AddNewConnection/ViewdataSummary']);
             });
            }
            
      }
     

      ///Step 1 Data Save From SourceAccountSettup Service Now For 8 Wizard Style
       
}