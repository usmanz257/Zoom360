import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { ServiceService } from './service.service';

import { TouchSequence } from 'selenium-webdriver';
import { stringmappingDictionary } from 'src/app/utils/ExtractMapping';
import { ExtractSqlTableData } from 'src/app/models/extract/ExtractDataModel';
import { ExtractDataSave, updatesourceaccountStep2 } from 'src/app/models/extract/access-microsoft-sqlserver';

  
@Injectable({
  providedIn: 'root'
})
export class ExtractData {
    url='https://localhost:44397';
     data:any[]=[];
     stringmappingDictionary=new stringmappingDictionary();
     SourceAccountLst:ExtractDataSave[]=[];
     accessgrantedarray:any[]=[];
     TES: ExtractSqlTableData[] = []
     key:string;
     //ConnectorIds=[];
     
     obj={
            Account_Id:"",
            UserId:"",
            Workspaceid:"",
            Clientid:"",
            ConnectorIds:this.TES
         }
     
    //  [{
    //     accountdisplayname:"Hafiz umar", 
    //     enableconnection:true,
    //     emailid:"hafizumar66945@gmail.com",   
    //     authorizationgrant:"FirsttimeConnection",   
    //     statusnotifygrant:"Bstatus",   
    //     filedname:"Hostname",  
    //     ConnectorType:"sql", 
    //     fieldvalue:{
    //         hostName:"192.168.23.43",
    //         databaseName:"advarity",
    //         port:"8080",
    //         username:"usman",
    //         password:"12345"
    //     },   
    //     bstatusforvarification:"True", 
    //     tablename:["tablename1","tablename2","tablename3","tablename4"]
    //  },{
    //     accountdisplayname:"Hafiz usman", 
    //     enableconnection:true,
    //     emailid:"hafizusman66945@gmail.com",   
    //     authorizationgrant:"secondtimeConnection",   
    //     statusnotifygrant:"Bstatus",   
    //     filedname:"Hostname",  
    //     ConnectorType:"sql",  
    //     fieldvalue:{
    //         hostName:"192.168.23.43",
    //         databaseName:"advarity",
    //         port:"8080",
    //         username:"usman",
    //         password:"12345"
    //     },    
    //     bstatusforvarification:"false", 
    //     tablename:["tablename5","tablename6","tablename7","tablename8"]
    //  }
    // ];

     SourceAccountObjectLst:any[]=[];
      resultkeyname; 
    resultkeyvalue:any[]=[]; 
    constructor(private _http: HttpClient ,public serviceService:ServiceService) {
   }
 
   Runforextractdata(){
    var UserId="Admin";
    var Workspaceid="1";
    var Clientid="1002";
    var ConnectorId="214";
    var Databasename="zmdb";
    var mappedtable="1";
    for(var i=0;i<this.serviceService.IdsCollectionArray.length; i++)
    {
        // this.key=this.stringmappingDictionary.getStringKey(this.serviceService.IdsCollectionArray[i].connectorname);
        if(this.serviceService.IdsCollectionArray[i].connectorId=="220")
        {
            var obj={
                "pipeline":{
                    "1":{
                        "csv":{
                            "fileName":["temp"],
                            "toLoad":["csv"]
                        } 
                    }
                     
                       
                   },
                   "connections":{
                    "csv":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["temp.csv"]
                        
                    }
                  },
                    "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"Mohsin",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',obj,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                 
               
             });
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="216"){
            var mysqlobj={
                "pipeline":{
                   "1":{
                   "mysql":{
                             "fileName":["fb_raw_data"],
                              "toLoad":["mssql"]
                           },
                           ["mssql"]:{
                   
                               "fileName":["fb_raw_data"],
                               "toLoad":["mysql"]
                           }
                       },
                       
                       
                       
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
              "mssql":{
                  "host":["192.168.223.111"],
                  "port":[],
                  "user":["sa"],
                  "password":["CNSE@12345"],
                  "schema":["test"],
                  "tableName":["fb_raw_data"]
                  
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
                  "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
              },   
              "oracle":{
                  "host":["192.168.223.111"],
                  "port":["1521"],
                  "user":["CNSE_TEST"],
                  "password":["CNSE_TEST"],
                  "serviceName":["orcl.CNSE.COM.PK"],
                  "table":["fb_raw_data"]
                  
              },
                      "csv":{
                          "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                          "fileName":["temp.csv"]
                          
                      },
                      
                      "excel":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["channel_data.xlsx"]
        
                    }
                    ,
                    "facebook":{
                    
                        "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                    }
                       
            },
                    "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"Rai Haq",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',mysqlobj,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                
               
             });
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="214"){
            this.GetSourceAccountList(this.serviceService.IdsCollectionArray[i].id,UserId,Workspaceid,Clientid,ConnectorId).subscribe((data:updatesourceaccountStep2[])=>{
                debugger
                if(data.length > 0){
                        this.SourceAccountLst.push({
                        accountdisplayname:data[0].accountdisplayname,
                        enableconnection:data[0].enableconnection,
                        emailid:data[0].emailid,   
                        authorizationgrant:data[0].authorizationgrant,   
                        statusnotifygrant:data[0].statusnotifygrant,   
                        filedname:"Hostname",
                        ConnectorType:"MSSQL",  
                        fieldvalue:{
                        hostName:data[1].fieldvalue,
                        databaseName:data[0].fieldvalue,
                        port:data[3].fieldvalue,
                        username:data[4].fieldvalue,
                        password:data[2].fieldvalue,
                         
                         },   
            bstatusforvarification:"True", 
            tablename:[]            
                   });
                   
       
                  this.resultkeyname = data.map(a => a.filedname);
                 this.resultkeyvalue = data.map(a => a.fieldvalue);
                   
            
          
              }
              });
            this.GetSourceObjectList(this.serviceService.IdsCollectionArray[i].id,mappedtable,UserId,Clientid,Workspaceid,ConnectorId,Databasename).subscribe((data:any)=>{
                debugger
                if(data.length > 0){
                    for(let i=0;i<data.length;i++){
                        
                        this.SourceAccountLst.forEach((item)=>{
                             item.tablename.push(data[i].objecT_NAME)
                        });     
                    }
                  
              }
              this.SourceAccountLst.forEach((item)=>{
                debugger
                var mssqlobj={
                    "pipeline":{
                       "1":{
                       "mysql":{
                                 "fileName":["fb_raw_data"],
                                  "toLoad":["mssql"]
                               },
                               ["mssql"]:{
                       
                                   "fileName":["fb_raw_data"],
                                   "toLoad":["mysql"]
                               }
                           },
                        //    "2":{
                       
                        //        "googledrivedownload":{
                       
                        //            "fileName":["Facebook data with time field.xlsx"],
                        //            "toLoad":["googledriveupload"]
                        //        }
                        //    },
                        //    "3":{
                       
                        //        "postgres":{
                       
                        //            "fileName":["fb_raw_data"],
                        //            "toLoad":["postgres"]
                        //        },
                               
                        //        "facebook":{
                       
                        //                "fileName":["about"],
                        //                "toLoad":["mssql"]
                        //            }
                               
                        //    }
                           
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
                       "mssql":{
                           "host":[item.fieldvalue.hostName],
                           "port":[],
                           "user":[item.fieldvalue.username],
                           "password":[item.fieldvalue.password],
                           "schema":["ZMDB"],
                           "tableName":[item.tablename]
                           
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
                        "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
                    },   
                    "oracle":{
                        "host":["192.168.223.111"],
                        "port":["1521"],
                        "user":["CNSE_TEST"],
                        "password":["CNSE_TEST"],
                        "serviceName":["orcl.CNSE.COM.PK"],
                        "table":["fb_raw_data"]
                        
                    },
                       "csv":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["temp.csv"]
                        
                    },
                    
                    "excel":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["channel_data.xlsx"]
        
                    },
                    "facebook":{
                    
                        "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                    }
                           
                       },
                        "userInfo":{
                        "SOURCE_STG_ID":"",
                        "SOURCE_STG_NAME":"",
                        "SOURCE_NAME":"Usman Zulfiqar",
                        "WORKSPACE_NAME":""
                        }
                     }
                     let headers = new Headers();
                     console.log(obj);
                 headers.append('Access-Control-Allow-Headers', 'Content-Type');
                 headers.append('Access-Control-Allow-Methods', 'GET');
                 headers.append('Access-Control-Allow-Origin', '*'); 
                 this._http.post('http://192.168.223.102:4444/extractTransformLoad',mssqlobj,{responseType: 'text'}).subscribe((data:any)=>{
                  debugger
                   var data=JSON.parse(data);
                    alert(data.message);
                    
                   
                 });
            });
                  
              });
    
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="217"){
            var postgressql={
                "pipeline":{
                      "3":{
                         "postgres":{
                   
                               "fileName":["fb_raw_data"],
                               "toLoad":["postgres"]
                           },
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
              "mssql":{
                  "host":["192.168.223.111"],
                  "port":[],
                  "user":["sa"],
                  "password":["CNSE@12345"],
                  "schema":["test"],
                  "tableName":["fb_raw_data"]
                  
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
                  "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
              },   
              "oracle":{
                  "host":["192.168.223.111"],
                  "port":["1521"],
                  "user":["CNSE_TEST"],
                  "password":["CNSE_TEST"],
                  "serviceName":["orcl.CNSE.COM.PK"],
                  "table":["fb_raw_data"]
                  
              },
                      "csv":{
                          "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                          "fileName":["temp.csv"]
                          
                      },
                      
                      "excel":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["channel_data.xlsx"]
        
                    }
                    ,
                    "facebook":{
                    
                        "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                    }
                      
                    
                    
             },
                    "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"Hamza",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',postgressql,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                 
               
             });
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="221"){
            var driveUpload={
                "pipeline":{
                      "1":{
                   
                           "googledrivedownload":{
                   
                               "fileName":["Facebook data with time field.xlsx"],
                               "toLoad":["googledriveupload"]
                           }
                       },
                      
                       
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
              "mssql":{
              
                  "host":["192.168.223.111"],
                  "port":[],
                  "user":["sa"],
                  "password":["CNSE@12345"],
                  "schema":["test"],
                  "tableName":["fb_raw_data"]
                  
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
              
                  "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
              },   
              "oracle":{
              
                  "host":["192.168.223.111"],
                  "port":["1521"],
                  "user":["CNSE_TEST"],
                  "password":["CNSE_TEST"],
                  "serviceName":["orcl.CNSE.COM.PK"],
                  "table":["fb_raw_data"]
                  
              },
                      "csv":{
              
                          "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                          "fileName":["temp.csv"]
                          
                      },
                      
                      "excel":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["channel_data.xlsx"]
        
                    }
                    ,
                    "facebook":{
                    
                        "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                    }
                    },
                 "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"Anser Ali Haider",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',driveUpload,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                 
             });
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="222"){
            var googledrivedownload={
                "pipeline":{
                      "1":{
                   
                           "googledrivedownload":{
                   
                               "fileName":["Facebook data with time field.xlsx"],
                               "toLoad":["googledriveupload"]
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
                  "mssql":{
                  
                      "host":["192.168.223.111"],
                      "port":[],
                      "user":["sa"],
                      "password":["CNSE@12345"],
                      "schema":["test"],
                      "tableName":["fb_raw_data"]
                      
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
                  
                      "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
                  },   
                  "oracle":{
                  
                      "host":["192.168.223.111"],
                      "port":["1521"],
                      "user":["CNSE_TEST"],
                      "password":["CNSE_TEST"],
                      "serviceName":["orcl.CNSE.COM.PK"],
                      "table":["fb_raw_data"]
                      
                  },
                          "csv":{
                  
                              "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                              "fileName":["temp.csv"]
                              
                          },
                          
                          "excel":{
                            "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                            "fileName":["channel_data.xlsx"]
            
                        }
                        ,
                        "facebook":{
                    
                            "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                        }
                },
                  
                  
                    "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"Adnan",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',googledrivedownload,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                 
               
             });
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="219"){
            var Excel={
                "pipeline":{
                    "1":{
                        "excel":{
                             "fileName":["channel_data.xlsx"],
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
              "mssql":{
                  "host":["192.168.223.111"],
                  "port":[],
                  "user":["sa"],
                  "password":["CNSE@12345"],
                  "schema":["test"],
                  "tableName":["fb_raw_data"]
                  
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
                  "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
              },   
              "oracle":{
                  "host":["192.168.223.111"],
                  "port":["1521"],
                  "user":["CNSE_TEST"],
                  "password":["CNSE_TEST"],
                  "serviceName":["orcl.CNSE.COM.PK"],
                  "table":["fb_raw_data"]
                  
              },
                      "csv":{
                          "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                          "fileName":["temp.csv"]
                          
                      },
                      
                      "excel":{
                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["channel_data.xlsx"]
        
                    }
                    ,
                    "facebook":{
                    
                        "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                    }
               
            },
                    "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"Marriam",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',Excel,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                
               
             });
        }
        else if(this.serviceService.IdsCollectionArray[i].connectorId=="218"){
            var fbobject={
                "pipeline":{
                    "1":{
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
              "mssql":{
              
                  "host":["192.168.223.111"],
                  "port":[],
                  "user":["sa"],
                  "password":["CNSE@12345"],
                  "schema":["test"],
                  "tableName":["FB_RAW_DATA"]
                  
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
              
                  "fileName":["googledrivedownload_googledriveupload_Facebook data with time field.csv"]
              },   
              "oracle":{
              
                  "host":["192.168.223.111"],
                  "port":["1521"],
                  "user":["CNSE_TEST"],
                  "password":["CNSE_TEST"],
                  "serviceName":["orcl.CNSE.COM.PK"],
                  "table":["fb_raw_data"]
                  
              },
                      "csv":{
              
                          "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                          "fileName":["temp.csv"]
                          
                      },
                      "excel":{

                        "path":["/home/cnse/Downloads/server_API_updated_v_0.1/test_dir"],
                        "fileName":["channel_data.xlsx"]
        
                    }
                    ,
                    "facebook":{
                    
                        "token":["EAARHrKAf1CYBAOrJEesHz5EZCqmy4iMlc0oSVviEktqQKELphpThtVxckOnp5yWqrf6pYhQWKCChh98DZChjKciOhpoBbpMnCyt0miRKbVo2GlFjPRG04MHWWexBMMZAnZBZBubZAOCdklRH3tGU8oXfbCZBuZCsuqlf4oIwYZBNLXxoKgCqHCCDGiTjtmc7BfZAZAIpBcZCNujC6GKTx1ODKdWdV07Fjds1QNPOAPdkAmHgqZANVNavRMzIffieQkNv7yZAYZD"]
                    }
             },
                    "userInfo":{
                    "SOURCE_STG_ID":"",
                    "SOURCE_STG_NAME":"",
                    "SOURCE_NAME":"pakistani_foodie_girl",
                    "WORKSPACE_NAME":""
                    }
                 }
                 let headers = new Headers();
                 console.log(obj);
             headers.append('Access-Control-Allow-Headers', 'Content-Type');
             headers.append('Access-Control-Allow-Methods', 'GET');
             headers.append('Access-Control-Allow-Origin', '*'); 
             this._http.post('http://192.168.223.102:4444/extractTransformLoad',fbobject,{responseType: 'text'}).subscribe((data:any)=>{
              debugger
               var data=JSON.parse(data);
                alert(data.message);
                 
               
             });
        }
        // this.GetSourceAccountList(this.serviceService.IdsCollectionArray[i].id,UserId,Workspaceid,Clientid,ConnectorId).subscribe((data:updatesourceaccountStep2[])=>{
        //     debugger
        //     if(data.length > 0){
        //             this.SourceAccountLst.push({
        //             accountdisplayname:data[0].accountdisplayname,
        //             enableconnection:data[0].enableconnection,
        //             emailid:data[0].emailid,   
        //             authorizationgrant:data[0].authorizationgrant,   
        //             statusnotifygrant:data[0].statusnotifygrant,   
        //             filedname:"Hostname",
        //             ConnectorType:"MSSQL",  
        //             fieldvalue:{
        //             hostName:data[1].fieldvalue,
        //             databaseName:data[0].fieldvalue,
        //             port:data[3].fieldvalue,
        //             username:data[4].fieldvalue,
        //             password:data[2].fieldvalue,
                     
        //              },   
        // bstatusforvarification:"True", 
        // tablename:[]            
        //        });
               
   
        //       this.resultkeyname = data.map(a => a.filedname);
        //      this.resultkeyvalue = data.map(a => a.fieldvalue);
               
        
      
        //   }
        //   });
        // this.GetSourceObjectList(this.serviceService.IdsCollectionArray[i].id,mappedtable,UserId,Clientid,Workspaceid,ConnectorId,Databasename).subscribe((data:any)=>{
        //     debugger
        //     if(data.length > 0){
        //         for(let i=0;i<data.length;i++){
                    
        //             this.SourceAccountLst.forEach((item)=>{
        //                  item.tablename.push(data[i].objecT_NAME)
        //             });     
        //         }
              
        //   }
        //   this.SourceAccountLst.forEach((item)=>{
        //     debugger
        //     var obj={
        //         "pipeline":{
        //            "1":{
        //            "mysql":{
        //                      "fileName":["fb_raw_data"],
        //                       "toLoad":["mssql"]
        //                    },
        //                    ["mssql"]:{
                   
        //                        "fileName":["FB_RAW_DATA"],
        //                        "toLoad":["mysql"]
        //                    }
        //                },
        //                "2":{
                   
        //                    "googledrivedownload":{
                   
        //                        "fileName":["Facebook data with time field.xlsx"],
        //                        "toLoad":["googledriveupload"]
        //                    }
        //                },
        //                "3":{
                   
        //                    "postgres":{
                   
        //                        "fileName":["fb_raw_data"],
        //                        "toLoad":["postgres"]
        //                    },
                           
        //                    "facebook":{
                   
        //                            "fileName":["about"],
        //                            "toLoad":["mssql"]
        //                        }
                           
        //                }
                       
        //            },
        //            "connections":{
                   
        //                  "mysql":{
                   
        //                "host":["192.168.223.111"],
        //                "port":[3306],
        //                "user":["CNSE_TEST"],
        //                "password":["CNSE@12345"],
        //                "schema":["test"],
        //                "tableName":["fb_raw_data"]
                       
        //            },
        //            "mssql":{
        //                "host":[item.fieldvalue.hostName],
        //                "port":[],
        //                "user":[item.fieldvalue.username],
        //                "password":[item.fieldvalue.password],
        //                "schema":["test"],
        //                "tableName":[item.tablename]
                       
        //            },
        //            "postgres":{
                   
        //                "host":["192.168.223.111"],
        //                "port":[],
        //                "user":["postgres"],
        //                "password":["Cnse#12345"],
        //                "schema":["postgres"],
        //                "tableName":["fb_raw_data"]
                       
        //            },
        //            "googledrivedownload":{
                   
        //                "fileName":["Facebook data with time field.xlsx"],
        //                "filetype":["xlsx"]
                       
        //            },
        //            "googledriveupload":{
                   
        //                "fileName":["Facebook data with time field.xlsx"]
        //            },   
        //            "oracle":{
                   
        //                "host":["192.168.223.111"],
        //                "port":["1521"],
        //                "user":["CNSE_TEST"],
        //                "password":["CNSE_TEST"],
        //                "serviceName":["orcl.CNSE.COM.PK"],
        //                "table":["fb_raw_data"]
                       
        //            },
        //            "facebook":{
        //                "token":["EAARHrKAf1CYBAICseKZBGrLzrMk73g71QIRTV78I29JJFHpEdDwjpg4oXkFfFWZAyEGZC63mMuBhET5AhvonUZCozZC85ZCpS2S5s7dlD5SR2wJZCt3eT0o2SvQ3P7FSPNhHv960SD0ODOllxyZCkZAjcjkuHfhd1ClNnXxkdp4u1VMKLHacxDZAPEvlfqYa3IEouHXs80EBrOxdDx8EljnpkFDKdxHQLOGuDD98PkSCEoXNOkj1QNFwF3Vu7YFLNQwIMZD"]
        //            }
                       
                       
        //            },
        //             "userInfo":{
        //             "SOURCE_STG_ID":"",
        //             "SOURCE_STG_NAME":"",
        //             "ACCOUNT_NAME":"",
        //             "WORKSPACE_NAME":""
        //             }
        //          }
        //          let headers = new Headers();
        //          console.log(obj);
        //      headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //      headers.append('Access-Control-Allow-Methods', 'GET');
        //      headers.append('Access-Control-Allow-Origin', '*'); 
        //      this._http.post('http://192.168.223.102:4444/extractTransformLoad',obj,{responseType: 'text'}).subscribe((data:any)=>{
        //       debugger
        //        var data=JSON.parse(data);
        //         alert(data.message);
               
        //      });
        // });
              
        //   });
        // // }
        // else( this.key=="FilesExtract")
        // {
            
        // }

    }
     
    // for(let i=0;i<=this.serviceService.IdsCollectionArray.length;i++)
    
         
    
   }
   GetSourceAccountList(Account_Id:string,UserId:string,Workspaceid:string,Clientid:string,ConnectorId:string){
    debugger
     
     
     let params = new HttpParams()
     .set("Account_Id",Account_Id)
     .set("UserId",UserId)
     .set("Workspaceid",Workspaceid)
     .set("Clientid",Clientid)
     .set("ConnectorId",ConnectorId);
  return  this._http.get(`${this.url+'/api/SqlConnector/GetSqlConnectorList'}`,{params:params});
  
  }
  GetSourceObjectList(Account_Id:string,Mappedtable:string,UserId:string,Clientid:string,Workspaceid:string,ConnectorId:string,Databasename:string){
    debugger
   let params = new HttpParams()
   .set("Account_Id", Account_Id)
   .set("Mappedtable", Mappedtable)
   .set("UserId", UserId)
   .set("Workspaceid",Workspaceid)
   .set("Clientid", Clientid)
   .set("ConnectorId",ConnectorId)
   .set("Databasename", Databasename);
   
   return this._http.get(`${this.url+'/api/SqlConnector/GetSourceObjectListForStep4Grid'}`,{params:params});
  }
  
  AccessGrantValidation(ConnectorI: ExtractSqlTableData[],Account_Id1:string,UserId1:string,Workspaceid1:string,Clientid1:string){
    debugger
    this.obj={
        Account_Id:Account_Id1,
        UserId:UserId1,
        Workspaceid:Workspaceid1,
        Clientid:Clientid1,
        ConnectorIds:ConnectorI
    }
       
     
        debugger
         return this._http.post(this.url+'/api/Extract/AccessGrantvalidation',this.obj);
     
   
  
}
}