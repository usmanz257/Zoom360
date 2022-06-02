import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateObjectFieldlist } from 'src/app/models/extract/Step6ObjectFieldListModelClass';
import { FieldSelection } from 'src/app/services/extract/ConnectorService/FieldsSelectionsStep6Services';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';

@Component({
  selector: 'app-fields-selection',
  templateUrl: './fields-selection.component.html',
  styleUrls: ['./fields-selection.component.css']
})
export class FieldsSelectionComponent implements OnInit {
EntityDropdownData:any[]=[];
ObjcetFieldNameList:any[]=[];
 ObjectFieldlist=new UpdateObjectFieldlist();
allcheckbox=false;
count:number=0;
countervalue:number=0;
Length:number;
value:string;
EntitynameValue:string="ACCOUNT_TYPE_SRC";
workspacedropdownlist:any[]=[];
 UpadteObjecList:UpdateObjectFieldlist[]=[];
 Sr:string;
i=0;
  constructor(public WizardControlsService:WizardControls,private router: Router,public fieldselection:FieldSelection) { }
 ngOnInit(): void {
   this.getAllSourceObjectList();
   debugger
   this.GetSelectedEntityObj(this.EntitynameValue)
  }
  getAllSourceObjectList(){
    
   var UserId="admin";
   var Clientid="1002";
   var Workspaceid="1";
   var ConnectorId="214";
   var Databasename="zmdb";
   this.fieldselection.GetEntityNameList(UserId,Clientid,Workspaceid,ConnectorId,Databasename).subscribe((data:any)=>{
     debugger
       this.EntityDropdownData=data;
       
       
   });
   }
   GetSelectedEntityObj(value:string){
     debugger
    var UserId="admin";
    var Clientid="1002";
    var Workspaceid="1";
    var ConnectorId="214";
    var Databasename="zmdb";
    this.fieldselection.GetObjectFieldNameList(UserId,Clientid,Workspaceid,ConnectorId,Databasename,value,"").subscribe((data:any)=>{
      debugger
        this.ObjcetFieldNameList=data;
        this.Length=this.ObjcetFieldNameList.length;
        
        
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
    this.ObjcetFieldNameList.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e,ClientId:string) {
      debugger
     var Cell1=document.getElementById('1C'+ClientId);
     this.Sr=Cell1.innerText;
     var Cell2=document.getElementById('2C'+ClientId);
     var FieldName=Cell2.innerText;
     var Cell3=document.getElementById('3C'+ClientId)  as HTMLSelectElement;
     var Fieldtype = Cell3.options[Cell3.selectedIndex].value;
     var Cell4=document.getElementById('4C'+ClientId);
     var DisplayName=Cell4.innerText;
     var Cell5=document.getElementById('5C'+ClientId) as HTMLSelectElement;
     var Aggregation=Cell5.options[Cell5.selectedIndex].value;
     var Cell6=document.getElementById('6C'+ClientId) as HTMLSelectElement;
     var Iskey=Cell6.options[Cell6.selectedIndex].value;
     var Cell7=document.getElementById('7C'+ClientId) as HTMLSelectElement;
     var Isvisible=Cell7.options[Cell7.selectedIndex].value;
     var Cell8=document.getElementById('8C'+ClientId);
     var Image=Cell8.innerText;
     
     
    //  console.log(Object.values(this.UpadteObjecList.reduce((acc,cur)=>Object.assign(acc,{[cur.OBJECT_FIELD_ID]:cur}),{})))

 if(e.target.checked)
    {
      debugger
      this.UpadteObjecList.push({
        OBJECT_FIELD_ID:this.Sr,
        OBJECT_FIELD_NAME:FieldName,
        OBJECT_FIELD_TYPE:Fieldtype,
        DISPLAY_NAME:DisplayName,
        AGGREGATION_STATUS:Aggregation,
        ISKEY_STATUS:Iskey,
        VISIBILITY_STATUS:Isvisible,
        OBJECT_FIELD_IMAGE:Image
      });
      // this.allcheckbox=false;
      this.count+=1;
      this.countervalue+=1;
    }
    else{
      var find=this.UpadteObjecList.find(x=>x.OBJECT_FIELD_ID==this.Sr);
      var RemoveIndex=this.UpadteObjecList.indexOf(find);
      this.UpadteObjecList.splice(RemoveIndex,1);
      this.count-=1;
      // this.allcheckbox=false;
      this.countervalue-=1;
    }
   }
  functionCount(e){
   debugger
     if(e.target.checked)
    {
      for(var i=0;i<this.ObjcetFieldNameList.length;i++)
      {
        var id=this.ObjcetFieldNameList[i].objecT_FIELD_ID;
        this.allcheckbox=true;
        this.findCount(e,id);
      }
      debugger
      this.countervalue=this.ObjcetFieldNameList.length;
       
    }
    else{
      for(var i=0;i<this.ObjcetFieldNameList.length;i++)
      {
        var id=this.ObjcetFieldNameList[i].objecT_FIELD_ID;
        this.allcheckbox=false;
        this.findCount(e,id);
      }
         
         this.countervalue=0;
    }

   }
   ReversClass(){
     this.WizardControlsService.FilterWizzard=false;
     this.WizardControlsService.FilterWizzardClass="css-filterwizard";
     this.WizardControlsService.FilterSelectionWizard=true;
     this.router.navigate(['extract/AddnewDataStream/Filters']);
 }
 
UpdateFields(){
  debugger
  var UserId="admin";
  var Clientid="1002";
  var Workspaceid="1";
  var ConnectorId="214";
  this.UpadteObjecList;
  this.EntitynameValue;
  if(this.UpadteObjecList.length !=0){
    this.fieldselection.UpdateFieldNameList(this.UpadteObjecList,UserId,Clientid,Workspaceid,ConnectorId,this.EntitynameValue).subscribe((data:any)=>{
      debugger
      this.ObjcetFieldNameList=data;
      this.Length=this.ObjcetFieldNameList.length;
      this.count=0;
      this.countervalue=0;
      this.allcheckbox=false;
      
      
  });;
  }
    
}
MovetoExecutionPlan(){
  debugger
  this.WizardControlsService.ExecitionPlanWizard=false;
  this.WizardControlsService.ExecitionPlanWizardClass="css-ExecutionPlanWizard";
  this.WizardControlsService.FilterSelectionWizard=false;
  this.WizardControlsService.FilterSelectionClass="css-FilterSelectiontick";
  
  this.router.navigate(['extract/AddnewDataStream/ExecutionPlan']);
}
}
