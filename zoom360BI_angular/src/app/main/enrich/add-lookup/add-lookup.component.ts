import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Lookvaluemodel } from 'src/app/models/enrich/LookupvalueListModel';
import { InsertionLookvalue, newLookupModel } from 'src/app/models/enrich/LookupvaluesaveModel';
import { Lookupvalueservice } from 'src/app/services/Enrich/lookupvalue';
import { LookupvalueListservice } from 'src/app/services/Enrich/LookValuesList';
 

@Component({
  selector: 'app-add-lookup',
  templateUrl: './add-lookup.component.html',
  styleUrls: ['./add-lookup.component.css']
})
export class AddLookupComponent implements OnInit {
  DisplayName:string;
  User_id:string= ""; 
  Client_id:string="" ;
  user_id:string="1";
  tableErrorMsg:string;
  workspace_id:string="";
  errorforcustomtable=false;
  message:string;
  checkedfield:string;
  ErrorMessageIfUserNotSelectAnyrow=false;
  ErrorMessage:string;
  // Lookupvaluemodel =new InsertionLookvalue();
  Lookupvaluemodel =new newLookupModel();
  DefaultDestination=true;
  CustomDestination=false;
  DefaultDestinationField=true;
  CustomDestinationField=false;
  workspacedropdownlist:any[]=[];
  sourceconnectordropdownlist:any[]=[];
  sourceAccountList:any[]=[];
  sourceTableList:any[]=[];
  sourcegridObjectList:any[]=[];
  useexistinglist:any[]=[];
  customAndexistingTable:any[]=[];
  objcetnamelist:any[]=[];
  lookuplist:Lookvaluemodel[]=[];
   
  Lookupid:string;
  // FieldObjectList
  numberofRecordsofTable:number;
  
  constructor(private lookupvalueservice:Lookupvalueservice,private lookupvalueListservice:LookupvalueListservice) { 
    debugger
   this.Lookupid=localStorage.getItem("LookupId")
   if(this.Lookupid!=null)
    {
        var USER_ID ="admin";
        var WORKSPACE_ID="1";
        var CLIENT_ID= "1002";
        var Connector="214";
        var Databasename="zmdb";
        var MappedTable="1";
        var WORKSPACE_NAME=null ;
        var LOOKUP_DISPLAY_NAME =null;
        var ACCOUNT_DISPLAY_NAME=null;
        var TABLE_NAME=null;
         var ENABLED = null;
         var VISIBILTY =null; 
      this.lookupvalueListservice.getLookupList(USER_ID,WORKSPACE_ID,CLIENT_ID,WORKSPACE_NAME,LOOKUP_DISPLAY_NAME,
        ACCOUNT_DISPLAY_NAME,TABLE_NAME,ENABLED,VISIBILTY,this.Lookupid).subscribe((data:any)=>{
          debugger
        this.lookuplist=data;
        for(let i=0;i<this.lookuplist.length;i++){
          if(this.lookuplist[0].enableconnection=="0")
          {
            this.lookuplist[0].enableconnection=JSON.parse("false")
          }
          else {
            this.lookuplist[0].enableconnection=JSON.parse("true")
          }
          if(this.lookuplist[0].visibiltyconnection=="0")
          {
            this.lookuplist[0].visibiltyconnection=JSON.parse("false")
          }
          else {
            this.lookuplist[0].visibiltyconnection=JSON.parse("true")
          }
        }
          this.Lookupvaluemodel.lookupid=this.lookuplist[0].lookupid;
          this.Lookupvaluemodel.lookupdisplayname=this.lookuplist[0].lookupdisplayname;
          this.Lookupvaluemodel.workspacename=this.lookuplist[0].workspacename;
          this.Lookupvaluemodel.usedestinationtableoption=this.lookuplist[0].destinationfieldselection;
          if( this.Lookupvaluemodel.usedestinationtableoption=="Use Existing Destination")
          {
            this.CustomDestination=false
            this.DefaultDestination=true
            this.Lookupvaluemodel.useexistingtable=this.lookuplist[0].destinationfieldvalue;
          }
          else 
          {
            this.CustomDestination=true
            this.DefaultDestination=false
            this.Lookupvaluemodel.usecustomtable=this.lookuplist[0].destinationfieldvalue;
          }
         this.Lookupvaluemodel.lookupfieldvalue=this.lookuplist[0].sourcefieldselection;
         if(this.Lookupvaluemodel.lookupfieldvalue=="Default Field")
         {
          this.CustomDestinationField=false;
          this.DefaultDestinationField=true;
         }
         else{
          this.CustomDestinationField=true;
          this.DefaultDestinationField=false;
          this.Lookupvaluemodel.customlookupfield=this.lookuplist[0].sourcefieldvalue;
         }
        var array=this.lookuplist[0].lookupfield.split(',');
        for(let i=0;i<array.length;i++ )
        {
          var obj={
            "objectfieldname":array[i]
          }
          this.sourcegridObjectList.push(obj)
          this.objcetnamelist=[];
          this.numberofRecordsofTable=this.sourcegridObjectList.length;
        }
        
         this.Lookupvaluemodel.sourceconnectorname=this.lookuplist[0].connecrtorid;

        
         this.lookupvalueservice.getSourceAccount(USER_ID,WORKSPACE_ID,CLIENT_ID,this.Lookupvaluemodel.sourceconnectorname).subscribe((data:any)=>{
          debugger
          this.sourceAccountList=data;
          
        });
        this.Lookupvaluemodel.sourceaccountname=this.lookuplist[0].sourceaccountid;
       this.lookupvalueservice.getSourceTable(USER_ID,WORKSPACE_ID,CLIENT_ID,this.Lookupvaluemodel.sourceconnectorname,Databasename,MappedTable,this.Lookupvaluemodel.sourceaccountname).subscribe((data:any)=>{
      debugger
      for(let i=0;i<data.length;i++){

        if(data[i].displayname !="")
        {
          var removenullvalue=data[i];
          this.sourceTableList.push(removenullvalue);
           
        }
         
      }
      
     // this.getObject(AccountId);
      
    });

         this.Lookupvaluemodel.sourcetable=this.lookuplist[0].tablename;
         this.Lookupvaluemodel.Loadoption=this.lookuplist[0].loadstatus;
         this.Lookupvaluemodel.enable=this.getBoolean(this.lookuplist[0].enableconnection);
         this.Lookupvaluemodel.visibilty=this.getBoolean(this.lookuplist[0].visibiltyconnection);
         this.Lookupvaluemodel.datainsertionoption=this.lookuplist[0].datainsertionoption;
          })
       }
   else
   {

   }



  }

  ngOnInit(): void {
   
     
    this.getworkspacedropdown();
    this.getSourceConnectordropdown();
    this.getExistingtabledropdown();
    this.getexistingAndcustomtabledropdownfield();
     
  }
  SetDefaultFieldForLookup(){
    this.CustomDestinationField=false;
    this.DefaultDestinationField=true;
  }
  SetCustomFieldForLookup(){
    this.CustomDestinationField=true;
    this.DefaultDestinationField=false;
  }
  UseExistingDestination(){
    this.CustomDestination=false
    this.DefaultDestination=true
  }
  SetCustomDestination(){
    this.DefaultDestination=false
    this.CustomDestination=true
    
  }
  getworkspacedropdown(){
    debugger
    var UserId="admin"
    var workspace="workspace to apply"
  this.lookupvalueservice.getworkspaceList(UserId,workspace).subscribe((data:any)=>{
    this.workspacedropdownlist=data;
    
  });
  }
  getSourceConnectordropdown(){
    debugger
    var UserId="admin"
    var sourceconnector="source connector"
    this.lookupvalueservice.getSourceConnectorList(UserId,sourceconnector).subscribe((data:any)=>{
      this.sourceconnectordropdownlist=data;
      
    });
  }
  getexistingAndcustomtabledropdownfield(){
    var UserId="Admin";
    var WorkspaceId="LOOKUP FIELD";
    this.lookupvalueservice.getexistingLookupfield(UserId,WorkspaceId).subscribe((data:any)=>{
    this.customAndexistingTable=data;
    
  });
  }
  getExistingtabledropdown(){

    
    var UserId="Admin";
    var WorkspaceId="Use Existing";
    this.lookupvalueservice.getexistingLookupTable(UserId,WorkspaceId).subscribe((data:any)=>{
    this.useexistinglist=data;
    
  });

  }
  GetSelectedSourceIDAndGetAccount(event:any){
    debugger
    var UserId="Admin";
    var WorkspaceId="1";
    var ClientId="1002";
  var Sourceidvalue =event.target.value;
  this.lookupvalueservice.getSourceAccount(UserId,WorkspaceId,ClientId,Sourceidvalue).subscribe((data:any)=>{
    this.sourceAccountList=data;
    
  });
  }
  getSourceTableList(event:any){
    debugger
    var UserId="admin";
    var workspaceId="1";
    var ClientId="1002";
    var Connector="214";
    var Databasename="zmdb";
    var MappedTable="1";
    var AccountId=event.target.value;
    this.lookupvalueservice.getSourceTable(UserId,workspaceId,ClientId,Connector,Databasename,MappedTable,AccountId).subscribe((data:any)=>{
      debugger
      this.sourceTableList.splice(0,this.sourceTableList.length);
      for(let i=0;i<data.length;i++){

        if(data[i].displayName !="")
        {
          var removenullvalue=data[i];
          this.sourceTableList.push(removenullvalue);
           
        }
         
      }
      
     // this.getObject(AccountId);
      
    });

  }
  getObject(event:any){
    debugger
    var UserId="admin";
    var workspaceId="1";
    var ClientId="1002";
    var Connector="214";
    var ObjectName=event.target.value;
    var Databasename="zmdb";
    if(ObjectName!=""){
      this.lookupvalueservice.getGridObjectList(UserId,workspaceId,ClientId,Connector,ObjectName,Databasename).subscribe((data:any)=>{
        debugger
        this.sourcegridObjectList=data;
        this.numberofRecordsofTable=this.sourcegridObjectList.length;
        
      });

    }
   // var ObjectName="ADM_WORKSPACESETUP";
  
    
    
  }
  GetRowName(event,name,id){
    debugger
    if(event.target.checked==false)
    {
      debugger
      // var find=this.objcetnamelist.find(name);
      var RemoveIndex=this.objcetnamelist.indexOf(name);
       this.objcetnamelist.splice(RemoveIndex,1);
    }
    else{
      this.objcetnamelist.push(name);
    }
    
  }
LookupRecordSave(lookuppagevalue:newLookupModel[])
{
debugger
   var obj=[
     
   ]
  //  this.User_id = "admin";
   this.Lookupvaluemodel.User_id="admin";
   this.Lookupvaluemodel.Client_id="1002";
   this.Lookupvaluemodel.workspace_id="1";
  //  this.Client_id ="1002";
   this.workspace_id ="1";
 var gettableoption=this.Lookupvaluemodel.usedestinationtableoption;
 if(gettableoption=="Set Custom Destination")
 {
      if(this.Lookupvaluemodel.usecustomtable.length==8)
      {
        var desfield=this.Lookupvaluemodel.lookupfieldvalue;
        if(desfield=="Custom Field")
        {
          this.Lookupvaluemodel.customlookupfield;
          this.Lookupvaluemodel.defaultlookupfield=null;
        }
        else{
          this.Lookupvaluemodel.defaultlookupfield;
          this.Lookupvaluemodel.customlookupfield=null;
        }
        var destinationtable=this.Lookupvaluemodel.usedestinationtableoption;
        if(destinationtable=="Set Custom Destination")
        { 

         this.Lookupvaluemodel.usecustomtable.toUpperCase();
         this.Lookupvaluemodel.useexistingtable=null;
        }
        else{
          this.Lookupvaluemodel.useexistingtable=this.Lookupvaluemodel.useexistingtable;
          this.Lookupvaluemodel.usecustomtable=null;
        }
         var sourcefieldname=this.objcetnamelist.toString();
         if(sourcefieldname.length!=0)
         {
           
          this.ErrorMessageIfUserNotSelectAnyrow=false;
          var tablevalues=this.objcetnamelist.toString();
            this.Lookupvaluemodel.tablevalues=tablevalues;
            this.Lookupvaluemodel.procedurename="SAVELOOKUPVALUE";
           this.lookupvalueservice.SaveLookupData(this.Lookupvaluemodel).subscribe((data:any)=>{
            this.tableErrorMsg=data;
            if(this.tableErrorMsg=="Lookup table already exist")
            {
             this.errorforcustomtable=true;
                  this.message=data;
            }
            else {
             this.errorforcustomtable=false;
             this.getExistingtabledropdown();

             this.Lookupvaluemodel.procedurename="ENR";
            //  this.lookupvalueservice.DataInsertionOption(this.User_id,this.Client_id,this.workspace_id,this.Lookupvaluemodel.sourcetable,
            //   destablevalue,sourcefieldname,desfiledvalue,this.Lookupvaluemodel.datainsertionoption,destinationtable,this.Lookupvaluemodel.lookupid).subscribe((data:any)=>{
               
            //   });
             this.lookupvalueservice.DataInsertionOption(this.Lookupvaluemodel).subscribe((data:any)=>{
              
             });
            }
        })

         }

         else{

          this.ErrorMessageIfUserNotSelectAnyrow=true
          this.ErrorMessage="At least select 1 field"

         }  

     }
      else{
        this.errorforcustomtable=true;
        this.message="Table Name Character Lenght Less then 8";
      }
      
       
 }
 else if(gettableoption=="Use Existing Destination"){
   var tablevalues=this.objcetnamelist.toString();
   if(tablevalues.length!=0){
    this.ErrorMessageIfUserNotSelectAnyrow=false;
    var desfield=this.Lookupvaluemodel.lookupfieldvalue;
              if(desfield=="Custom Field")
              {
                 this.Lookupvaluemodel.customlookupfield;
                 this.Lookupvaluemodel.defaultlookupfield=null;
              }
              else{
               this.Lookupvaluemodel.defaultlookupfield;
               this.Lookupvaluemodel.customlookupfield=null;
              }
              var destinationtable=this.Lookupvaluemodel.usedestinationtableoption;
              if(destinationtable=="Set Custom Destination")
              {
                this.Lookupvaluemodel.usecustomtable.toUpperCase();
                this.Lookupvaluemodel.useexistingtable=null;
              }
              else{
                  this.Lookupvaluemodel.useexistingtable;
                  this.Lookupvaluemodel.usecustomtable=null;
              }
               var sourcefieldname=this.objcetnamelist.toString();
               this.Lookupvaluemodel.tablevalues=sourcefieldname;
            this.Lookupvaluemodel.procedurename="SAVELOOKUPVALUE";
        this.lookupvalueservice.SaveLookupData(this.Lookupvaluemodel).subscribe((data:any)=>{
        this.Lookupvaluemodel.procedurename="ENR";
        this.lookupvalueservice.DataInsertionOption(this.Lookupvaluemodel).subscribe((data:any)=>{
      });
  })

}
   else {
    this.ErrorMessageIfUserNotSelectAnyrow=true
    this.ErrorMessage="At least select 1 field"
   }
  



 }
   
   
}

GeneratetheTableForCustomUse(){
   
  var value=(<HTMLInputElement>document.getElementById("customtable")).value;
  var UserId="admin";
  var ClientId="1002";
  var WorkspaceId="1";
  if(value.length==6){
    debugger
    this.lookupvalueservice.GenerateCustomtable(UserId,ClientId,WorkspaceId,value).subscribe((data:any)=>{
      
      this.errorforcustomtable=true;
    this.message=data;
    this.getExistingtabledropdown();
    })

  }
  else{
    this.errorforcustomtable=true;
    this.message="Set the 6 character for generate the table"
  }
}

// InsertionOption(event:any){
//   debugger
   
//   var insertionoption=event.target.value;
   
//    var desfield=this.Lookupvaluemodel.lookupfieldvalue;
//    if(desfield=="Custom Field")
//    {
//      var desfiledvalue=this.Lookupvaluemodel.customlookupfield
//    }
//    else{
//     var desfiledvalue=this.Lookupvaluemodel.defaultlookupfield
//    }
//    var destinationtable=this.Lookupvaluemodel.usedestinationtableoption;
//    if(destinationtable=="Set Custom Destination")
//    {
//      var destablevalue=this.Lookupvaluemodel.usecustomtable.toUpperCase();
     
//    }
//    else{
//     var destablevalue=this.Lookupvaluemodel.useexistingtable;
//    }
    
 
   
//   var sourcetable=this.Lookupvaluemodel.sourcetable; 
   
//   var sourcefieldname=this.objcetnamelist.toString();

//   var UserId="admin";
//   var ClientId="1002";
//   var WorkspaceId="1";
//     this.lookupvalueservice.DataInsertionOption(UserId,ClientId,WorkspaceId,sourcetable,
//       destablevalue,sourcefieldname,desfiledvalue,insertionoption,destinationtable,this.Lookupvaluemodel.lookupid).subscribe((data:any)=>{

//       })
// }
GetAccountListForEditMode(){
  debugger
  var UserId="Admin";
  var WorkspaceId="1";
  var ClientId="1002";
var Sourceidvalue =null;
this.lookupvalueservice.getSourceAccount(UserId,WorkspaceId,ClientId,Sourceidvalue).subscribe((data:any)=>{
  this.sourceAccountList=data;
  
});
}
getBoolean(value){
  switch(value){
       case true:
       case "true":
       case 1:
       case "1":
       case "on":
       case "yes":
           return true;
       default: 
           return false;
   }
}



}

