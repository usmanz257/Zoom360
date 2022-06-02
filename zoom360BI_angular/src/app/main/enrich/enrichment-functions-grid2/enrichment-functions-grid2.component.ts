
import { Component, OnInit } from '@angular/core';
import { ifError } from 'assert';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { EnrichGridModel, EnrichGridScriptModel } from 'src/app/models/enrich/DynamicEnrichTemplate';
import { FunctionGridFormat } from 'src/app/models/enrich/enrichment-function-model';
import { DropDownLoadService } from 'src/app/services/common/drop-down-load.service';
import { DynamicEnrichScriptsService } from 'src/app/services/Enrich/dynamic-enrich-scripts.service';
import { FieldSelection } from 'src/app/services/extract/ConnectorService/FieldsSelectionsStep6Services';
@Component({
  selector: 'app-enrichment-functions-grid2',
  templateUrl: './enrichment-functions-grid2.component.html',
  styleUrls: ['./enrichment-functions-grid2.component.css']
})
export class EnrichmentFunctionsGrid2Component implements OnInit {

  userId:       string = 'admin';
  workspaceid:  string = '1';
  clientId:     string = '1002';
  connectorId:  string = '214';
  AccountId:    string = '9003';
  DBname:       string = 'zmdb';
  scriptname:   string = "";
  tableName:    string = '';
  selectedFunctionCategoryeName: string = '';
  scriptEnable: boolean;
  //60b09d93313fdcffb13e1a26
  //templateId:   string = '';
  templateId:   string = '60cafca3f715136691ee6d99';
  //templateId:string='';
  tableNameList:any[] = [];
  _functionList: dropdownModel[] = [];
  public fieldsvalues: object;
  functionName: object;
  public columnNames: any[] = [];
  test:boolean = false;
  // GridSelectAllState:any[]=[];
  GridState: any[][] = [];
  GridColumnAll:FunctionGridFormat[]=[]
  GridFunctionAll:FunctionGridFormat[]=[]
  EnrichGridScriptValues: EnrichGridScriptModel[] = [];
  // EnrichScriptModel:EnrichGridScriptModel;
  EnrichGridModelFinal: EnrichGridModel;
  ScriptData: any;
  functionCategory: dropdownModel[] = [];
  fieldsvalues2: object;
  DropdownName:string[]=['Table Name','Function Category'];
  showGrid:boolean=false;
  constructor(private fieldSelection: FieldSelection, public _dropDownLoadService: DropDownLoadService, private dynamicEnrichScriptsService: DynamicEnrichScriptsService) { }

  ngOnInit() {
    this.scriptEnable = true;
    this.GetEntityNameList();
    this.GetFunctionCategoryNames();
  }
  GetEntityNameList() {
    this.fieldSelection.GetEntityNameList(this.userId, this.clientId, this.workspaceid, this.connectorId, this.DBname).subscribe((data: any) => {
      this.tableNameList = data;
      this.fieldsvalues = { dataSource: this.tableNameList, text: 'objecT_NAME', value: 'objecT_NAME' };
      if (this.templateId != "") {
        this.GetFinalScript();
      }
    });

  }
  GetFunctionCategoryNames() {
    this._dropDownLoadService
      .GetDropDowns("Function Category")
      .subscribe((data: any[]) => {
        if (data.length > 0) {
          this.functionCategory = data;
          this.fieldsvalues2 = { dataSource: this.functionCategory, text: 'dropdownText', value: 'dropdownValue' };
          if(this.ScriptData == undefined){
            this.GridState=[];
            this.EnrichGridScriptValues=[];
            this.GridFunctionAllFill();
        }
        else{
          this.GridFunctionAllFill();
          for(var i=0;i<this.GridColumnAll.length;i++){
            this.GridFunctionAll[i].checkboxToggle= this.ScriptData.GridFunctionAll[i].checkboxToggle;
          }
        }
        }
      });
  }
  getFunctionlist() {
    this.showGrid=false;
    //Get function list according to selected category
    if(this.selectedFunctionCategoryeName!=null)
    {
    this.GridState.splice(0,this.GridState.length);
    this._dropDownLoadService
      .GetDropDownsWithCategory(this.selectedFunctionCategoryeName)
      .subscribe((data: any[]) => {
        this.GridState.splice(0,this.GridState.length);
        if (data.length > 0) {
          this._functionList = data;
          this.functionName = {
            dataSource: this._functionList,
            // groupBy:"dropdownCategory",
            text: "dropdownText",
            value: "dropdownValue"
          };
        }
        if (this.ScriptData != undefined) {
          var length = 0;
          this.EnrichGridScriptValues = this.ScriptData.ScriptList;
          if(this.selectedFunctionCategoryeName == this.ScriptData.functionCategory
              && this.tableName == this.ScriptData.tableName ){
                // this.buildGrid();
                //debugger
            // this.GridFunctionAll=[];
            // this.GridFunctionAllFill();
            // for(var k=0;k<this._functionList.length;k++){
            //   this.GridFunctionAll[k].checkboxToggle= this.ScriptData.GridFunctionAll[k].checkboxToggle;
            // }
            // if (this._functionList.length < this.ScriptData.GridState[0].length) {
            //   length = this._functionList.length;
            // }
            // else {
            //   length = this.ScriptData.GridState[0].length
            // }
            // this.GridState=[];
            // this.GridFormatFill(this._functionList,this.columnNames);
            // for (var i= 0; i < this.columnNames.length; i++) {
            //   for (var j = 0; j < this._functionList.length; j++) {
            //     this.GridState[i][j].checkboxToggle = this.ScriptData.GridState[i][j].checkboxToggle;
            //   }
            // }
              
          }
          else {
          this.GridFunctionAll=[];
          this.GridColumnAll=[];
          this.EnrichGridScriptValues=[];
          this.GridFunctionAllFill();
          if(this.tableName!=null){
            this.GridColumnAll=[];
            this.GridColumnAllFill();
            this.GridState=[];
            this.GridFormatFill(this._functionList, this.columnNames);
          }
          }
        }
        else if(this.ScriptData == undefined){
          this.GridFunctionAll=[];
          this.GridColumnAll=[];
          this.EnrichGridScriptValues=[];
          this.GridFunctionAllFill();
          if(this.tableName!=null){
            this.GridColumnAll=[];
            this.GridColumnAllFill();
            this.GridState=[];
            this.GridFormatFill(this._functionList, this.columnNames);
          }
          
        }
      this.showGrid=true;
      });
    }   
    console.log("grid function all",this.GridFunctionAll) 
  }
  getTableColumnfield() {
    debugger
    this.showGrid=false;
    if(this.tableName!=null){
    this.fieldSelection.GetObjectFieldNameList(this.userId, this.clientId, this.workspaceid, this.connectorId, this.AccountId, this.DBname, this.tableName).subscribe((data: any) => {
      this.columnNames = data;
      if(this.ScriptData == undefined){
          this.GridColumnAll=[];
          this.GridColumnAllFill();
          // for(var i=0;i<this.GridColumnAll.length;i++){
          //   this.GridColumnAll[i].checkboxToggle= this.ScriptData.GridColumnAll[i].checkboxToggle;
          // }
            if(this.selectedFunctionCategoryeName!=null )
            {
              this.GridFunctionAll=[];
              this.GridFunctionAllFill();
              this.GridState=[];
              this.GridFormatFill(this._functionList,this.columnNames);
              
            }
      }
      else if(this.ScriptData != undefined){
        if(this.selectedFunctionCategoryeName == this.ScriptData.functionCategory
        && this.tableName == this.ScriptData.tableName){
          this.buildGrid();
        }
        else {
            this.GridColumnAll=[];
            this.GridColumnAllFill();
            // for(var i=0;i<this.GridColumnAll.length;i++){
            //   this.GridColumnAll[i].checkboxToggle= this.ScriptData.GridColumnAll[i].checkboxToggle;
            // }
              if(this.selectedFunctionCategoryeName!=null)
              {
                this.GridFunctionAll=[];
                this.GridFunctionAllFill();
                this.GridState=[];
                this.GridFormatFill(this._functionList,this.columnNames);
                
              }
        }
      }
      this.showGrid=true;
    });
  }
    console.log("Grid column all state",this.GridColumnAll);
  }
  GridFormatFill(functionsList, columnsList) {
    if (this._functionList.length>0 && this.columnNames.length>0){
    for (var i = 0; i < columnsList.length; i++) {
      var columnToggle: FunctionGridFormat[] = [];
      for (var j = 0; j < functionsList.length; j++) {
        columnToggle.push({ checkboxToggle: false });
      }
    this.GridState.push(columnToggle);
    }
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
  changeHandler(i, j, value): void {
    this.GridState[i][j].checkboxToggle = value;
    var checked= this.GridState[i];
    var checkedlength= checked.filter((val)=> val.checkboxToggle==true);
    if(this._functionList.length==checkedlength.length){
      this.GridColumnAll[i].checkboxToggle= true;
    }
    else{
    this.GridColumnAll[i].checkboxToggle= false;
    }
    
    var index = this.EnrichGridScriptValues.findIndex(e => e.functionName == this._functionList[j].dropdownValue);
    var columnIndex;
    if(index!=-1){
      columnIndex  = this.EnrichGridScriptValues[index].cols.findIndex(c => c == this.columnNames[i].objecT_FIELD_NAME);
    }
    if (value == true) {
      if (index == -1) {
        
        this.EnrichGridScriptValues.push(
          {
            functionName: this._functionList[j].dropdownValue,
            cols: [this.columnNames[i].objecT_FIELD_NAME]
          });
      }
    else if(index != -1){ 
      if (columnIndex == -1) {
        this.EnrichGridScriptValues[index].cols.push(this.columnNames[i].objecT_FIELD_NAME);
      }
    }
  }
  
  else if(value == false){
    if (this.EnrichGridScriptValues[index].cols.length == 1) {
      this.EnrichGridScriptValues.splice(index, 1);
    }
    else if(this.EnrichGridScriptValues[index].cols.length >= 1){
    this.EnrichGridScriptValues[index].cols.splice(columnIndex, 1);
    }  
      
      
  }
  if(index!=-1){
  if (this.EnrichGridScriptValues[index].cols.length == this.columnNames.length){
    this.GridFunctionAll[j].checkboxToggle=true;
  }
  else{
    this.GridFunctionAll[j].checkboxToggle=false;
  }
}
  }
  SaveFinalScript() {
    debugger
    this.EnrichGridModelFinal = new EnrichGridModel();
    this.EnrichGridModelFinal.userId = this.userId;
    this.EnrichGridModelFinal.clientId = this.clientId;
    this.EnrichGridModelFinal.workspaceId = this.workspaceid;
    this.EnrichGridModelFinal.scriptname = this.scriptname;
    this.EnrichGridModelFinal.enableScript = true;
    this.EnrichGridModelFinal.tableName = this.tableName;
    this.EnrichGridModelFinal.functionCategory = this.selectedFunctionCategoryeName;
    this.EnrichGridModelFinal.ScriptList = this.EnrichGridScriptValues;
    this.EnrichGridModelFinal.GridColumnAll= this.GridColumnAll;
    this.EnrichGridModelFinal.GridFunctionAll = this.GridFunctionAll;
    this.EnrichGridModelFinal.GridState = this.GridState;
    console.log(this.EnrichGridModelFinal);
    this.dynamicEnrichScriptsService
      .saveScriptByGrid2(this.EnrichGridModelFinal)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  UpdateFinalScript() {
    this.EnrichGridModelFinal = new EnrichGridModel();
    this.EnrichGridModelFinal.userId = this.userId;
    this.EnrichGridModelFinal.clientId = this.clientId;
    this.EnrichGridModelFinal.workspaceId = this.workspaceid;
    this.EnrichGridModelFinal.scriptname = this.scriptname;
    this.EnrichGridModelFinal.enableScript = this.scriptEnable;
    this.EnrichGridModelFinal.tableName = this.tableName;
    this.EnrichGridModelFinal.functionCategory = this.selectedFunctionCategoryeName;
    this.EnrichGridModelFinal.ScriptList = this.EnrichGridScriptValues;
    this.EnrichGridModelFinal.GridColumnAll= this.GridColumnAll;
    this.EnrichGridModelFinal.GridFunctionAll = this.GridFunctionAll;
    this.EnrichGridModelFinal.GridState = this.GridState;
    console.log(this.EnrichGridModelFinal);
    this.dynamicEnrichScriptsService
      .updateScriptForGrid2(this.EnrichGridModelFinal, this.templateId)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  GetFinalScript() {
    this.dynamicEnrichScriptsService
      .getScriptForGrid2(this.userId, this.workspaceid, this.clientId, this.templateId)
      .subscribe((data: any) => {
        debugger
        this.ScriptData = JSON.parse(data);
        this.tableName = this.ScriptData.tableName;
        this.selectedFunctionCategoryeName = this.ScriptData.functionCategory;
        this.scriptname = this.ScriptData.scriptname;
        this.EnrichGridScriptValues=this.ScriptData.ScriptList;
        this.scriptEnable = this.ScriptData.enableScript;
       // this.getTableColumnfield();

      });
  }
  save() {
    if (this.templateId == "") {
      this.SaveFinalScript();
    }
    else {
      this.UpdateFinalScript();
    }
  }
  resetAll(){
    this.scriptname='';
      this.tableName=null;
      this.selectedFunctionCategoryeName=null;
    this.ScriptData=undefined;
    this.columnNames=[];
    this._functionList=[];
    this.EnrichGridScriptValues=[];
    // this.GridColumnAll.splice(0,this.GridColumnAll.length);
    // this.GridFunctionAll.splice(0,this.GridFunctionAll.length);
    // this.GridState.splice(0,this.EnrichGridScriptValues.length);
    this.GridColumnAll=[];
    this.GridFunctionAll=[];
    this.GridState=[];

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
  SelectAllFunctionsForSingleColumn (i,value){
    
  this.GridColumnAll[i].checkboxToggle=value;
    for(var j=0;j<this._functionList.length;j++){
      debugger
      this.changeHandler(i, j, value);
  }
  console.log('column all', this.GridColumnAll);
  }
  SelectAllColumnsforSingleFunction(k,value){
    this.GridFunctionAll[k].checkboxToggle= value;
      for(var j=0;j<this.columnNames.length;j++){
        this.changeHandler(j, k, value);
      }    
  }
  buildGrid(){
    this.GridState=[];
    this.GridFunctionAll=[]
    this.GridColumnAll=[];
    this.EnrichGridScriptValues=[];
    this.EnrichGridScriptValues=this.ScriptData.ScriptList;
    this.GridFunctionAllFill();
    for(var i=0;i<this.GridFunctionAll.length;i++){
      this.GridFunctionAll[i].checkboxToggle= this.ScriptData.GridFunctionAll[i].checkboxToggle;
    }
    this.GridColumnAllFill();
    for(var i=0;i<this.GridColumnAll.length;i++){
      this.GridColumnAll[i].checkboxToggle= this.ScriptData.GridColumnAll[i].checkboxToggle;
    }
    this.GridFormatFill(this._functionList, this.columnNames);
    for (var i = 0; i < this.columnNames.length; i++) {
      for (var j = 0; j < this._functionList.length; j++) {
        this.GridState[i][j].checkboxToggle= this.ScriptData.GridState[i][j].checkboxToggle;
      }
    }
  }
}
