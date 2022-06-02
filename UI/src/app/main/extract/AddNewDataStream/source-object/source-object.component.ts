import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 import { ObjectFieldsList } from 'src/app/models/extract/Step4SourceObjectistModel';
import { SourcObject } from 'src/app/models/extract/access-microsoft-sqlserver';
import { SourceObject } from 'src/app/services/extract/ConnectorService/SourceObjectStep4Servic';
import { EstablishConnector } from 'src/app/services/extract/EstablishConnectorSave';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';

// import { parse } from 'path';


@Component({
  selector: 'app-source-object',
  templateUrl: './source-object.component.html',
  styleUrls: ['./source-object.component.css']
})
export class SourceObjectComponent implements OnInit {

  constructor(public WizardControlsService:WizardControls, private router: Router,public establishConnector:EstablishConnector,public sourceobject:SourceObject) { }
 
  SourceObjectList:any[]=[];
  bgColor="d5eff6";
  Colorid:string;
   
  Length:number;
  VisibilityStatus:any[]=[];
  UpadteSourceObjecList:ObjectFieldsList[]=[];
allcheckbox=false;
count:number=0;
workspacedropdownlist:dropdownModel[]=[];
countervalue:number=0;
sourceobjectModel=new SourcObject();
 
  ngOnInit(): void {
    this.getAllSourceObjectList();
    this.getWorspaceDropdown();
    
  }
  ReversClass(){
    this.WizardControlsService.TempleteAccountWizard=false;
    this.WizardControlsService.TempleteWizardClass="css-Templatewizard";
    this.WizardControlsService.SourceObjectWizard=true;
    this.router.navigate(['extract/AddnewDataStream/Templet']);
  }
  SaveAllDataofSource(SourceData:SourcObject){
      debugger
       this.sourceobject.SaveDataForSourceObject(SourceData).subscribe((data:any)=>{
        this.router.navigate(['extract/AddnewDataStream/Filters']);
        this.WizardControlsService.SourceObjectWizard=false;
        this.WizardControlsService.SourceObjectWizardClass="css-Sourcewizardtick"
        this.WizardControlsService.FilterWizzard=false;
        this.WizardControlsService.FilterWizzardClass="css-filterwizard"
      
    });
      

  }

 getAllSourceObjectList(){
   debugger
  var  Account_Id ="NULL";
  var Mappedtable ="NULL";  
  var UserId="admin";
  var Clientid="1002";
  var Workspaceid="1";
  var ConnectorId="214";
  var Databasename="zmdb";
  this.sourceobject.GetSourceObjectList(Account_Id,Mappedtable,UserId,Clientid,Workspaceid,ConnectorId,Databasename).subscribe((data:any)=>{
    debugger
    this.SourceObjectList=data;
      for(var i=0;i<data.length;i++)
      {
        debugger
        if(this.SourceObjectList[i].objecT_VISIBILITY==null)
        this.SourceObjectList[i].objecT_VISIBILITY="No";
        }
      
      this.Length=this.SourceObjectList.length;
      
  });
  }
  ChangeColor(value:string,ClientId:string){
    debugger
    var id=document.getElementById('2C'+ClientId);
    switch(value) {
      case "No":
        id.className='';
          id.className='css-bgColorNo'
           break;
      case "yes":
        id.className='';
          id.className='css-bgColoryes'
 
         break;
       
    }

  }
  checkAll(ev) {
    this.SourceObjectList.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e,ClientId:string) {
    
    
    if(e.target.checked)
    {
      var Cell1=document.getElementById('1C'+ClientId);
    var Sr=Cell1.innerText;
    var Cell2=document.getElementById('2C'+ClientId);
    var FieldName=Cell2.innerText;
    var Cell3=document.getElementById('3C'+ClientId);
    var Fieldtype = Cell3.innerText
    var Cell4=document.getElementById('4C'+ClientId);
    var DisplayName=Cell4.innerText;
    var Cell5=document.getElementById('5C'+ClientId)
    var LastAccess=Cell5.innerText;
    var Cell7=document.getElementById('6C'+ClientId) as HTMLSelectElement;
    var visible=Cell7.options[Cell7.selectedIndex].value;
    var Cell8=document.getElementById('7C'+ClientId);
    var Image=Cell8.innerText;
      this.UpadteSourceObjecList.push({
        OBJECT_ID:Sr,
        OBJECT_NAME:FieldName,
        OBJECT_TYPE:Fieldtype,
        DISPLAY_NAME:DisplayName,
        SERVER_INSERT_DATE:LastAccess ,
         OBJECT_VISIBILITY:visible,
        OBJECT_IMAGE:Image
      });
      // this.allcheckbox=false;
      this.count+=1;
      this.countervalue+=1;
    }
    else if(e.target.checked==false){
      var find=this.UpadteSourceObjecList.find(x=>x.OBJECT_ID==Sr);
      var RemoveIndex=this.UpadteSourceObjecList.indexOf(find);
      this.UpadteSourceObjecList.splice(RemoveIndex,1);
      this.count-=1;
       
      // this.allcheckbox=false;
      this.countervalue-=1;
    }
   }
  functionCount(e){
     debugger
    if(e.target.checked)
    {
      for(var i=0;i<this.SourceObjectList.length;i++)
      {
        var id=this.SourceObjectList[i].objecT_ID;
        this.allcheckbox=true;
        this.findCount(e,id);
      }
      debugger
      this.countervalue=this.SourceObjectList.length;
       
      // this.allcheckbox=true;
      // this.countervalue=this.SourceObjectList.length;
       
    }
    else if(e.target.checked==false){
      for(var i=0;i<this.SourceObjectList.length;i++)
      {
        var id=this.SourceObjectList[i].OBJECT_ID;
        this.allcheckbox=false;
        this.findCount(e,id);
      }
         
        //  this.countervalue=0;
        //  this.allcheckbox=false;
         this.countervalue=0;
    }

   }
   getWorspaceDropdown(){
    debugger
    var UserId='admin';
    var DropdownType='workspace'
    debugger
    this.sourceobject.Step4WorkspaceDropdown(UserId,DropdownType).subscribe((data:any)=>{
      debugger
      if(data.length > 0){
      this.workspacedropdownlist=data;
    }
    });
  }
  UpdateSourceObjectList(){
    var UserId="admin";
  var Clientid="1002";
  var Workspaceid="1";
  var ConnectorId=localStorage.getItem("ConnectorId")
  this.UpadteSourceObjecList;
  if(this.UpadteSourceObjecList.length !=0){
    this.sourceobject.UpdateSourceObjectList(this.UpadteSourceObjecList,UserId,Clientid,Workspaceid,ConnectorId).subscribe((data:any)=>{
      debugger
      this.SourceObjectList=data;
      for(var i=0;i<data.length;i++)
      {
        debugger
        if(this.SourceObjectList[i].objecT_VISIBILITY==null)
        this.SourceObjectList[i].objecT_VISIBILITY="No";
        }
      
      this.Length=this.SourceObjectList.length;
        this.countervalue=0;
        this.allcheckbox=false;

        //  for(var i=0;i<this.SourceObjectList.length;i++){
        //    this.VisibilityStatus=this.SourceObjectList[i].objecT_VISIBILITY;
            
        //  }
        
        
    });
  
  }
  
  }
 
}
