import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Descriptionmodel } from 'src/app/models/extract/description-model';
import { environment } from 'src/environments/environment';
import { SourceAccountSettup } from '../AddNewConnectionServices/SourceAccountSettup';
import { ServiceService } from '../service.service';
  
@Injectable({
  providedIn: 'root'
})
export class Destinationservices {
   DataBase_Span=false;
   Username_Span=false;
   Password_Span=false;
  descriptinsave=environment.apiUrl+"/api/Destination/saveDescriptionInfo";
  savecredentials=environment.apiUrl+"/api/Destination/saveDbCredentialInfo";   
  constructor(private _http: HttpClient,private serviceService:ServiceService,private sourceAccountSettup:SourceAccountSettup,private router: 
    Router) {}
  savedescription(description:Descriptionmodel){
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
     "SourceInfoModel":description
   }
    return  this._http.post(`${this.descriptinsave}`,InputModel);
   }
   Savedbcredentials(){
    debugger
    localStorage.getItem("DbConfigure");
    var DBObject={
      "Hostname":this.sourceAccountSettup.Hostname,
      "Database": this.sourceAccountSettup.Database,
      "PortNumber":this.sourceAccountSettup.PortNumber,
      "UserName":this.sourceAccountSettup.Username ,
      "Password":this.sourceAccountSettup.Password,
       } 
       var CommonParams={
        "userId":"admin",
        "workspaceId":"1",
        "clientId":"1002",
        "AccountId":"1006",
        "connectorId":"214", 
       }
      var  DbAccount={
         "SourceCommonModel":CommonParams,
         "sOURCE_CNF":DBObject
      }
       localStorage.setItem("DbConfigure",JSON.stringify(DBObject));
       if(this.sourceAccountSettup.Database==null){
        this.DataBase_Span=true;
         
       }
       else if(this.sourceAccountSettup.Database!=null){
        this.DataBase_Span=false;
       }
      if(this.sourceAccountSettup.Username==null){
        this.Username_Span=true;
         
       }
       else if(this.sourceAccountSettup.Username!=null){
        this.Username_Span=false;
       }
        if(this.sourceAccountSettup.Password==null){
        this.Password_Span=true;
         
       }
       else if(this.sourceAccountSettup.Password!=null){
        this.Password_Span=false;
       }
       if(this.sourceAccountSettup.Password!=null && this.sourceAccountSettup.Username!=null && this.sourceAccountSettup.Database!=null){
        this._http.post(this.savecredentials,DbAccount).subscribe((data:any)=>{
        //   this.router.navigate(['extract/AddNewConnection/ViewdataSummary']);
         });
        }
        
  }
}