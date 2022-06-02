import { Component, OnInit } from '@angular/core';
import { InstagramConfigurationService } from 'src/app/Services/Instagram/instagram-configuration.service';
import { ObjectFieldsList } from 'src/app/Models/SourceSettings.Model';

@Component({
  selector: 'app-secondary-storage',
  templateUrl: './secondary-storage.component.html',
  styleUrls: ['./secondary-storage.component.css']
})
export class SecondaryStorageComponent implements OnInit {
  bgColor="d5eff6";
  Colorid:string;
  Length:number;
  allcheckbox=false;
  count:number=0;
  workspacedropdownlist:any[]=[];
  countervalue:number=0;
  UpadteSourceObjecList:ObjectFieldsList[]=[];
  SourceObjectList:any[]=[];
  VisibilityStatus:any[]=[];
  constructor(private instagramConfigurationService:InstagramConfigurationService) { }

  ngOnInit(): void {
    this.getAllSourceObjectList();
  }
  getAllSourceObjectList(){
    debugger
   var UserId="admin";
   var Clientid="1002";
   var Workspaceid="1";
   var ConnectorId="214";
   var Databasename="zmdb";
   this.instagramConfigurationService.GetSourceObjectList(UserId,Clientid,Workspaceid,ConnectorId,Databasename).subscribe((data:any)=>{
     debugger
       this.SourceObjectList=data;
       this.Length=this.SourceObjectList.length; 
   });
   }
   UpdateSourceObjectList(){
    var UserId="admin";
  var Clientid="1002";
  var Workspaceid="1";
  var ConnectorId="214";
  this.UpadteSourceObjecList;
  if(this.UpadteSourceObjecList.length !=0){
    this.instagramConfigurationService.UpdateSourceObjectList(this.UpadteSourceObjecList,UserId,Clientid,Workspaceid,ConnectorId).subscribe((data:any)=>{
      debugger
        this.SourceObjectList=data;
        this.Length=this.SourceObjectList.length;
        this.countervalue=0;
        this.allcheckbox=false;

        //  for(var i=0;i<this.SourceObjectList.length;i++){
        //    this.VisibilityStatus=this.SourceObjectList[i].objecT_VISIBILITY;
            
        //  }
        
        
    });
  
  }
  
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
    else{
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
    else{
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
}
