import { Component, OnInit } from '@angular/core';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { EnrichGridModel, EnrichGridScriptModel } from 'src/app/models/enrich/DynamicEnrichTemplate';
import { FunctionGridFormat } from 'src/app/models/enrich/enrichment-function-model';
import { DropDownLoadService } from 'src/app/services/common/drop-down-load.service';
import { DynamicEnrichScriptsService } from 'src/app/services/Enrich/dynamic-enrich-scripts.service';
import { FieldSelection } from 'src/app/services/extract/ConnectorService/FieldsSelectionsStep6Services';

@Component({
  selector: 'app-enrichment-functions-grid',
  templateUrl: './enrichment-functions-grid.component.html',
  styleUrls: ['./enrichment-functions-grid.component.css']
})
export class EnrichmentFunctionsGridComponent implements OnInit {
  userId:string='admin';
  workspaceid:string='1';
  clientId:string='1002';
  connectorId:string='214';
  AccountId:string='9003';
  DBname:string='zmdb';
  scriptname:string="";
  tableName:string='';
  scriptEnable:boolean;
  //templateId:string='';
  templateId:string='60caec4df715136691ee6333';
  tableNameList:any[]=[];
  _functionList: dropdownModel[]=[];
  public fieldsvalues:object;
  functionName:object;
  public columnNames: any[]=[];
  test:boolean=false;
  GridColumnAll:FunctionGridFormat[]=[]
  GridFunctionAll:FunctionGridFormat[]=[]
  GridState: any[][]=[];
  EnrichGridScriptValues:EnrichGridScriptModel[]=[];
  EnrichGridModelFinal:EnrichGridModel;
  ScriptData:any;
  showGrid:boolean=false;
  constructor(private fieldSelection:FieldSelection, public _dropDownLoadService: DropDownLoadService,  private dynamicEnrichScriptsService: DynamicEnrichScriptsService) { }

  ngOnInit() {
    this.scriptEnable=true;
    this.GetEntityNameList();
  }
GetEntityNameList(){
    this.fieldSelection.GetEntityNameList(this.userId,this.clientId,this.workspaceid,this.connectorId,this.DBname).subscribe((data:any)=>{
        this.tableNameList=data;
        this.fieldsvalues = { dataSource: this.tableNameList,text:'objecT_NAME',value:'objecT_NAME'};
        if(this.templateId!=""){
            this.GetFinalScript();
        }
    });
    this._dropDownLoadService
    .GetDropDownsWithCategory("Row Level Function List")
    .subscribe((data: any[]) => {
      if (data.length > 0) {
        this._functionList = data;
        this.GridFunctionAllFill();
        this.functionName = {
          dataSource: this._functionList,
          // groupBy:"dropdownCategory",
          text: "dropdownText",
          value: "dropdownValue"
        };
      }
    });
  }
getobjectfield(){
    this.showGrid=false;
    if(this.tableName!=null){
    this.fieldSelection.GetObjectFieldNameList(this.userId,this.clientId,this.workspaceid,this.connectorId,this.AccountId,this.DBname,this.tableName).subscribe((data:any)=>{
      var length=this.GridColumnAll.length;
      this.columnNames=data;
      debugger
        if (this.ScriptData == undefined){
          this.resetGrid();   
        }
        if (this.ScriptData != undefined){
          if(this.tableName != this.ScriptData.tableName){
            
            // this.EnrichGridScriptValues=[];
            // this.EnrichGridScriptValues=this.ScriptData.ScriptList;
            // for(var i=0;i<this._functionList.length;i++){
            //   this.GridFunctionAll[i].checkboxToggle= false;
            // }
            // this.GridState.splice(0,this.GridState.length);
            // this.GridColumnAll.splice(0,length);
            // this.GridColumnAllFill();
            // this.GridFormatFill(this._functionList.length, this.columnNames.length);
            this.resetGrid();
          }
          else{
            // let length=0;
            //   if(this.columnNames.length<this.ScriptData.GridState[0].length)
            //   {
            //     length=this.columnNames.length;
            //   }
            //   else{
            //     length=this.ScriptData.GridState[0].length
            //   }
            this.GridColumnAll=[];
            this.GridFunctionAll=[];
            this.GridState=[];
            this.GridFormatFill(this._functionList.length,this.columnNames.length);
                for(var i=0;i<this._functionList.length;i++){
                  for(var j=0;j<this.columnNames.length;j++){
                    this.GridState[i][j].checkboxToggle=this.ScriptData.GridState[i][j].checkboxToggle;
                  }
                }  
            this.GridColumnAllFill();
              for(var i=0;i<this.GridColumnAll.length;i++){
                this.GridColumnAll[i].checkboxToggle= this.ScriptData.GridColumnAll[i].checkboxToggle;
              }
            this.GridFunctionAllFill();
              for(var i=0;i<this._functionList.length;i++){
                this.GridFunctionAll[i].checkboxToggle= this.ScriptData.GridFunctionAll[i].checkboxToggle;
              }
              }
            }  
        this.showGrid=true;   
    });
  }
}
GridFormatFill(functionsListLength,columnsListLength){
for(var i=0; i<functionsListLength;i++){
  var columnToggle:FunctionGridFormat[]=[];
  for(var j=0; j<columnsListLength;j++){
    columnToggle.push({checkboxToggle:false});
  }
  this.GridState.push(columnToggle);
}
} 
GridColumnAllFill(){
  for (var i = 0; i < this.columnNames.length; i++) {
    this.GridColumnAll.push({ checkboxToggle: false });
  }
}
GridFunctionAllFill(){
  for (var i = 0; i < this._functionList.length; i++) {
    this.GridFunctionAll.push({ checkboxToggle: false });
  }
  
}
changeHandler(i,j,value) : void {
  var count=0;
  this.GridState[i][j].checkboxToggle=value;
  for(var l=0;l<this._functionList.length;l++){
    if(this.GridState[l][j].checkboxToggle==true){
      count=count+1;
    }
  }
  if(count==this._functionList.length){
    this.GridColumnAll[j].checkboxToggle=true;
  }
  else{
    this.GridColumnAll[j].checkboxToggle=false;
  }
  var index =this.EnrichGridScriptValues.findIndex(e=> e.functionName == this._functionList[i].dropdownValue);
    if(value==true){
        if(index==-1){
          this.EnrichGridScriptValues.push(
            {functionName:this._functionList[i].dropdownValue,
              cols:[this.columnNames[j].objecT_FIELD_NAME]       
            });
        }
        else{
          var columnIndex=this.EnrichGridScriptValues[index].cols.findIndex(c => c==this.columnNames[j].objecT_FIELD_NAME);
          if(columnIndex!=-1){
          //  this.EnrichGridScriptValues[index].cols.splice(columnIndex,1);
          }
          else{
            this.EnrichGridScriptValues[index].cols.push(this.columnNames[j].objecT_FIELD_NAME);
          }
        }
  }
  else{
    var columnIndex=this.EnrichGridScriptValues[index].cols.findIndex(c => c==this.columnNames[j].objecT_FIELD_NAME);
    if(columnIndex!=-1){
      this.EnrichGridScriptValues[index].cols.splice(columnIndex,1);
    }
    if(this.EnrichGridScriptValues[index].cols.length==0){
          this.EnrichGridScriptValues.splice(index,1);
    }    
  }
  // var checkeLenght= this.GridState[i];
  // var test = checkeLenght.filter((val)=> val.checkboxToggle==true);
  if(index!=-1){
    if (this.EnrichGridScriptValues[index].cols.length == this.columnNames.length){
      this.GridFunctionAll[i].checkboxToggle=true;
    }
    else{
      this.GridFunctionAll[i].checkboxToggle=false;
    }
  }
  
}
SaveFinalScript() {
  this.EnrichGridModelFinal=new EnrichGridModel();
  this.EnrichGridModelFinal.userId=this.userId;
  this.EnrichGridModelFinal.clientId=this.clientId;
  this.EnrichGridModelFinal.workspaceId=this.workspaceid;
  this.EnrichGridModelFinal.scriptname=this.scriptname;
  this.EnrichGridModelFinal.enableScript=true;
  this.EnrichGridModelFinal.tableName=this.tableName;
  this.EnrichGridModelFinal.ScriptList=this.EnrichGridScriptValues;
  this.EnrichGridModelFinal.GridState=this.GridState;
  this.EnrichGridModelFinal.GridColumnAll= this.GridColumnAll;
  this.EnrichGridModelFinal.GridFunctionAll=this.GridFunctionAll;

  this.dynamicEnrichScriptsService
    .saveScriptByGrid(this.EnrichGridModelFinal)
    .subscribe((data: any) => {
    });
}
UpdateFinalScript() {
  this.EnrichGridModelFinal=new EnrichGridModel();
  this.EnrichGridModelFinal.userId=this.userId;
  this.EnrichGridModelFinal.clientId=this.clientId;
  this.EnrichGridModelFinal.workspaceId=this.workspaceid;
  this.EnrichGridModelFinal.scriptname=this.scriptname;
  this.EnrichGridModelFinal.enableScript=this.scriptEnable;
  this.EnrichGridModelFinal.tableName=this.tableName;
  this.EnrichGridModelFinal.ScriptList=this.EnrichGridScriptValues;
  this.EnrichGridModelFinal.GridState=this.GridState;
  this.EnrichGridModelFinal.GridColumnAll= this.GridColumnAll;
  this.EnrichGridModelFinal.GridFunctionAll=this.GridFunctionAll;
  this.dynamicEnrichScriptsService
    .updateScriptForGrid(this.EnrichGridModelFinal,this.templateId)
    .subscribe((data: any) => {
    });
}
GetFinalScript(){
  this.dynamicEnrichScriptsService
    .getScriptForGrid(this.userId,this.workspaceid,this.clientId,this.templateId)
    .subscribe((data: any) => {
        
        this.ScriptData = JSON.parse(data);
        this.tableName=this.ScriptData.tableName;
        this.scriptname= this.ScriptData.scriptname;
        this.scriptEnable= this.ScriptData.enableScript;
        this.EnrichGridScriptValues=this.ScriptData.ScriptList;
        console.log('EnrichGridScriptValues',this.EnrichGridScriptValues);
        console.log('ScriptList',this.ScriptData.ScriptList)
        this.getobjectfield();
    });
}
save(){
  debugger
        if(this.templateId==""){
              this.SaveFinalScript();
        }
        else{
              this.UpdateFinalScript();
            } 
}
SelectAllFunctionsForSingleColumn (k,value){
    debugger
  this.GridColumnAll[k].checkboxToggle=value;
    for(var j=0;j<this._functionList.length;j++){
      this.changeHandler(j, k, value);
  }
  }
SelectAllColumnsforSingleFunction(i,value){
    debugger
    this.GridFunctionAll[i].checkboxToggle= value;
      for(var j=0;j<this.columnNames.length;j++){
        this.changeHandler(i, j, value);
      }    
  }
  resetGrid(){
            this.GridColumnAll=[];
            this.GridFunctionAll=[];
            this.GridState=[];
            this.EnrichGridScriptValues=[];
            this.GridColumnAllFill();
            this.GridFunctionAllFill();
            this.GridFormatFill(this._functionList.length, this.columnNames.length);
  }
  resetAll(){
    this.scriptname='';
    this.tableName=null;
    this.ScriptData=undefined;
    this.showGrid=false;
    this.GridColumnAll=[];
    this.GridFunctionAll=[];
    this.GridState=[];
    this.EnrichGridScriptValues=[];
  }
}