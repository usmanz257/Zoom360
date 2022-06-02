import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { FieldMappingRuleTemplateModel, ObjectFieldsList } from 'src/app/Models/SourceSettings.Model';
import { InstagramConfigurationService } from 'src/app/Services/Instagram/instagram-configuration.service';

@Component({
  selector: 'app-mapping-rules',
  templateUrl: './mapping-rules.component.html',
  styleUrls: ['./mapping-rules.component.css']
})
export class MappingRulesComponent implements OnInit {
  dropdownName:string='Mapped Field'; 
  showHideGridDropdown:boolean[]=[];
  showHideGridButton:boolean[]=[];
  disableTrue:boolean=true;
  defaultMappingRule:string[]=[];
  mappingRules:any[]=[];
  updatedMappingRules:any[]=[];
  selectedMappingTemplate:string='Master';
  mappingTemplate:dropdownModel[]=[];
  mappingNewTemplateName:string=null;
  mappingField:dropdownModel[]=[];
 
  templateTextbox:boolean=false;
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
  toggle:any[]=[];
  constructor(private instagramConfigurationService:InstagramConfigurationService) { }

  ngOnInit(): void {
    this.getMappingtemplate();
    this.getMappingRules();
    //this.getdropdown();
    
    //this.getAllSourceObjectList();
  }
showDropDown(i){
    if(this.showHideGridDropdown[i]==false){
      this.showHideGridDropdown[i]=true;
      this.showHideGridButton[i]=false;
    }
    else{
      this.showHideGridDropdown[i]=false;
      this.showHideGridButton[i]=false;
    }
  }
getMappingRules(){
    this.instagramConfigurationService.getMappingRule(this.selectedMappingTemplate).subscribe((data:FieldMappingRuleTemplateModel[])=>
    {
      debugger
      this.mappingRules=data;    
      this.Length=data.length;
      for(let i=0;i<this.Length;i++){
        this.showHideGridDropdown[i]=false;
        this.showHideGridButton[i]=true;
        if(this.mappingRules[i].keyColumn=='1'){
          this.mappingRules[i].keyColumn=true;
        }
        else{
          this.mappingRules[i].keyColumn =false;
        }
        
      }
      console.log(this.toggle);
      this.getdropdown();
    });
  }
getMappingtemplate(){  
    this.instagramConfigurationService.getMapTempDropDown().subscribe((data:dropdownModel[])=>{
      this.mappingTemplate =data;
  });
}
changedMappingFields(index){
  debugger
var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
elemCheckBox.checked=true;
var sourceColumn = 'sourceColumn';
var  test= this.mappingRules[index][sourceColumn];
var result= this.updatedMappingRules.findIndex(x=>x.sourceColumn==test);
if(result==-1){
  this.updatedMappingRules.push(this.mappingRules[index]);
  this.countervalue +=1;
}
else{
  this.updatedMappingRules.splice(result,1);
  this.updatedMappingRules.push(this.mappingRules[index]);
}

}
saveMappingTemplate(){
   debugger
  if(this.mappingNewTemplateName==null){
    this.instagramConfigurationService.SaveMappingRuleTemplate(this.updatedMappingRules,this.selectedMappingTemplate).subscribe((data:string)=>{
      console.log(data);
    });
  }
  else{
    this.instagramConfigurationService.SaveMappingRuleTemplate(this.mappingRules,this.mappingNewTemplateName).subscribe((data:string)=>{
      console.log(data);
    });
  }
 


}
checkAll(ev) { 
     this.mappingRules.forEach(x => x.state = ev.target.checked)  
}
findCount(e,index) {
   if(e.target.checked)
  {
    // this.allcheckbox=false;
    this.countervalue+=1;
    var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
    var sourceColumn = 'sourceColumn';
    var  test= this.mappingRules[index][sourceColumn];
    var result= this.updatedMappingRules.findIndex(x=>x.sourceColumn==test);
    if(result==-1){
        this.updatedMappingRules.push(this.mappingRules[index]);
        }
    else{
        this.updatedMappingRules.splice(result,1);
        this.updatedMappingRules.push(this.mappingRules[index]);
        }

  }
  else{
    this.countervalue-=1;
    var elemCheckBox= document.getElementById('check'+(index+1)) as HTMLInputElement;
    var sourceColumn = 'sourceColumn';
    var  test= this.mappingRules[index][sourceColumn];
    var result= this.updatedMappingRules.findIndex(x=>x.sourceColumn==test);
    if(result!=-1){
      this.updatedMappingRules.splice(result,1);
        }
     this.allcheckbox=false;
  }
 }
functionCount(e){
  debugger
  if(e.target.checked)
  {
    this.allcheckbox=true;
    this.countervalue= this.Length;
    for(let i=0;i<this.mappingRules.length;i++){
      
        var sourceColumn = 'sourceColumn';
        var  test= this.mappingRules[i][sourceColumn];
        var result= this.updatedMappingRules.findIndex(x=>x.sourceColumn==test);
        if(result==-1){
            this.updatedMappingRules.push(this.mappingRules[i]);
            }
        else{
            this.updatedMappingRules.splice(result,1);
            this.updatedMappingRules.push(this.mappingRules[i]);
            }
    }     
  }
  else {
       this.allcheckbox=false;
       this.countervalue=0;
       this.updatedMappingRules.splice(0,this.updatedMappingRules.length);
  }
 }

  getdropdown(){
    this.instagramConfigurationService.GetMapedField(this.dropdownName).subscribe((data:dropdownModel[])=>{
      this.mappingField =data;
        });
  }
  templeteTextbox(){
        this.templateTextbox=true;
        this.disableTrue=false;
  }

   ChangeColor(value:string,ClientId:string){
    
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
  ClearAll(){
    this.mappingRules.forEach((element) => {
      element.targetColumn=null;
      element.keyColumn = false;
      element.vivisibilityStatus = null;
    });
 
  }
  mappingFilter(value){
    debugger
    if(value==true)
      this.mappingRules=this.mappingRules.filter((element)=> {
      element.targetColumn!="";
    });
    else if(value==false){
      this.mappingRules=this.mappingRules.filter((element)=> {
        element.targetColumn="";
      });
    }
    else if(value=='all'){
      this.getMappingRules();
    }
  }
}
