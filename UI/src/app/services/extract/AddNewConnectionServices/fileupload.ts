import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AddNewConnectoinWizardStyle } from '../AddNewConnectionWizardStyle';
  
@Injectable({
  providedIn: 'root'
})
export class FileUpload {
    url='https://localhost:44397';
    UploadFile=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/savefile"
    driveuploadfile=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/UploadFIle";
    onedriveuploadfile=environment.apiUrl+"/api/SourceDescriptionAndConfigurtionController/uploadOneDrive";
     constructor(private _http: HttpClient,private router: 
      Router,public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,) {
      
       
   
    }
     uploadfile(formdata,UserId:string,WORKSPACEID:string,CLIENTID:string,ConnectorId:string,AccountId:string){
         debugger
         let params = new HttpParams()
           .set("UserId",UserId)
           .set("WORKSPACEID",WORKSPACEID)
           .set("CLIENTID",CLIENTID)
           .set("ConnectorId",ConnectorId)
           .set("AccountId",AccountId);
         
        // let params = new HttpParams().set("UserId",UserId).set("DropdownType",DropdownType);
       //Server file upload
        // return this._http.post(this.UploadFile,formdata,{params:params,reportProgress: true, observe: 'events'});
        
        //Google drive file upload
        return this._http.post(this.driveuploadfile,formdata,{params:params,reportProgress: true, observe: 'events'});

         // onedrive file upload
        // return this._http.post(this.onedriveuploadfile,formdata,{params:params,reportProgress: true, observe: 'events'});
      
      }
       

      
       
}