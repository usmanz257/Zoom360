import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddNewConnectoinWizardStyle } from '../AddNewConnectionWizardStyle';
  
@Injectable({
  providedIn: 'root'
})
export class testApi {
    text:string;
    url='https://localhost:44397';
     constructor(private _http: HttpClient,private router: Router,public addNewConnectoinWizardStyle:AddNewConnectoinWizardStyle,) {
   
   
    }
      
    TestAPi(){
        debugger
        var UserId="Admin";
        var Workspaceid="1";
        var Clientid="1002";
        var ConnectorId="214";
        var Account_Id="9003"
        let params = new HttpParams()
        .set("Account_Id",Account_Id)
        .set("UserId",UserId)
        .set("Workspaceid",Workspaceid)
        .set("Clientid",Clientid)
        .set("ConnectorId",ConnectorId);
        this._http.get(`${this.url+'/api/SqlConnector/GetSqlConnectorList'}`,{params:params}).subscribe((data:any)=>{
         debugger
            var data =data;
            let resultkeyname = data.map(a => a.filedname);
            let resultkeyvalue = data.map(a => a.fieldvalue);
         var typeofMssql="mssql";
         var tablename="ACCOUNT_TYPE_SRC";
         var obj={
            "pipeline":{
               "1":{
               "mysql":{
                         "fileName":["fb_raw_data"],
                          "toLoad":[typeofMssql]
                       },
                       [typeofMssql]:{
               
                           "fileName":["FB_RAW_DATA"],
                           "toLoad":["mysql"]
                       }
                   },
                   "2":{
               
                       "googledrivedownload":{
               
                           "fileName":["Facebook data with time field.xlsx"],
                           "toLoad":["googledriveupload"]
                       }
                   },
                   "3":{
               
                       "postgres":{
               
                           "fileName":["fb_raw_data"],
                           "toLoad":["postgres"]
                       },
                       
                       "facebook":{
               
                               "fileName":["about"],
                               "toLoad":["mssql"]
                           }
                       
                   }
                   
               },
               "connections":{
               
                     "mysql":{
               
                   "host":["192.168.223.111"],
                   "port":[3306],
                   "user":["CNSE_TEST"],
                   "password":["CNSE@12345"],
                   "schema":["test"],
                   "tableName":["fb_raw_data"]
                   
               },
               [typeofMssql]:{
                   "host":[resultkeyvalue[1]],
                   "port":[],
                   "user":[resultkeyvalue[3]],
                   "password":[resultkeyvalue[2]],
                   "schema":["test"],
                   "tableName":[tablename]
                   
               },
               "postgres":{
               
                   "host":["192.168.223.111"],
                   "port":[],
                   "user":["postgres"],
                   "password":["Cnse#12345"],
                   "schema":["postgres"],
                   "tableName":["fb_raw_data"]
                   
               },
               "googledrivedownload":{
               
                   "fileName":["Facebook data with time field.xlsx"],
                   "filetype":["xlsx"]
                   
               },
               "googledriveupload":{
               
                   "fileName":["Facebook data with time field.xlsx"]
               },   
               "oracle":{
               
                   "host":["192.168.223.111"],
                   "port":["1521"],
                   "user":["CNSE_TEST"],
                   "password":["CNSE_TEST"],
                   "serviceName":["orcl.CNSE.COM.PK"],
                   "table":["fb_raw_data"]
                   
               },
               "facebook":{
                   "token":["EAARHrKAf1CYBABfztWMoRSZAQAPyhmAtkAjcZA5wHTZA43DAA5rJG3rLl7nIKTYr48ZA6ErZA0lf7CmYjwrO7kMRihHReE2w7NpfyTkzvX67CixYAdnJ25RmzDwnFu12Yc8J2qUqoUTbnhZAQt1RrEU9RiGmdhqMrCBSvTI9mSNRD3QmG1VifYPgckJCXpFX0m1t1d8hTfO9eZAvEbUoPIYx836hITjBjWZAP58q1VWmYOmXJv7vl9kW5L0h2miqtyoZD"]
               }
                   
                   
               }
             }
             
            
             let headers = new Headers();
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',obj,{responseType: 'text'}).subscribe((data:any)=>{
              
               var data=JSON.parse(data);
                alert(data.message);
               
             });

          });
          
          
      
          
          }
}