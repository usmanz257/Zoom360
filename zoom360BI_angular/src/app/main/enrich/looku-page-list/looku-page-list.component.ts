import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { parse } from 'querystring';
import { Lookvaluemodel } from 'src/app/models/enrich/LookupvalueListModel';
import { LookupvalueListservice } from 'src/app/services/Enrich/LookValuesList';
 

@Component({
  selector: 'app-looku-page-list',
  templateUrl: './looku-page-list.component.html',
  styleUrls: ['./looku-page-list.component.css']
})
export class LookuPageListComponent implements OnInit {

  constructor( private lookupvalueListservice:LookupvalueListservice,private router: Router) { }
lookuplist:Lookvaluemodel[]=[];
lookuplistrecord:number=0;
  ngOnInit(): void {
    this.GetLookFieldList();
  }

GetLookFieldList(){
  var USER_ID ="admin";
  var WORKSPACE_ID="1";
  var CLIENT_ID= "1002";
  var WORKSPACE_NAME=null ;
  var lookupid=null;
  var LOOKUP_DISPLAY_NAME =null;
  var ACCOUNT_DISPLAY_NAME=null;
  var TABLE_NAME=null;
   var ENABLED = null;
   var VISIBILTY =null; 
this.lookupvalueListservice.getLookupList(USER_ID,WORKSPACE_ID,CLIENT_ID,WORKSPACE_NAME,LOOKUP_DISPLAY_NAME,
  ACCOUNT_DISPLAY_NAME,TABLE_NAME,ENABLED,VISIBILTY,lookupid).subscribe((data:any)=>{
    debugger
  this.lookuplist=data;
   for(let i=0;i<data.length;i++){
     
     if(this.lookuplist[i].enableconnection=="0"){
       this.lookuplist[i].enableconnection=JSON.parse("false");
     }
     else{
      this.lookuplist[i].enableconnection=JSON.parse("true");
     }

     if(this.lookuplist[i].visibiltyconnection=="0"){
      this.lookuplist[i].visibiltyconnection=JSON.parse("false");
    }
    else{
     this.lookuplist[i].visibiltyconnection=JSON.parse("true");
    }
   }
  this.lookuplistrecord=this.lookuplist.length;

  })


}
GetvalueforEditmode(LookupId:string)
{
  JSON.stringify(localStorage.setItem("LookupId",LookupId));
  this.router.navigate(['/enrich/prepare/LookupValuesAdd']);
   
}
 
Addlookupvalue(){
  debugger
   localStorage.removeItem("LookupId");
  this.router.navigate(['/enrich/prepare/LookupValuesAdd']);
}
}
