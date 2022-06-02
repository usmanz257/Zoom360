import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  dropdownModel,
  dropdownWithCategoryModel,
  UAMDropdownModel,
} from "src/app/models/common/dropdownmodel";
import { UserAccessManagementService } from "src/app/services/Govern/UserManagement/user-access-management.service";
import {
  CheckBoxSelectionService,
  FilteringEventArgs,
} from "@syncfusion/ej2-angular-dropdowns";
import {
  CollapseArray,
  DynamicEnrichTemplate,
  DynamicEnrichTemplateValues,
  EnrichScriptModel,
} from "src/app/models/enrich/DynamicEnrichTemplate";
import { DropDownLoadService } from "src/app/services/common/drop-down-load.service";
import { metaData } from "./dynamicMetaDataTest";
import { PropertyNamesList } from "./EnrichPropertyNamesList";
import { DynamicEnrichScriptsService } from "src/app/services/Enrich/dynamic-enrich-scripts.service";
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
  selector: "app-dynamic-enrich-functions",
  templateUrl: "./dynamic-enrich-functions.component.html",
  styleUrls: ["./dynamic-enrich-functions.component.css"],
  providers: [CheckBoxSelectionService],
  encapsulation: ViewEncapsulation.None
})
export class DynamicEnrichFunctionsComponent implements OnInit {
  
  userId: string = "admin";
  workspaceId: string = "1";
  clientId: string = "1002";
  scriptName: string = "";
  scriptEnable: boolean = true;
  scriptId:string="60811b29e0a8bac7c3afd04e";
  //dropdownValues
  _functionList: { [key: string]: Object }[]=[];
  _ModeList: dropdownModel[]=[];
  _cols: UAMDropdownModel[]=[];
  _TableName: dropdownModel[]=[];
  _replacementDictionary: dropdownModel[]=[];
  _SignList: dropdownModel[]=[];
  _LanguageList: dropdownModel[]=[];
  // _dynamicScriptValues:any[]=[];
  fieldsvalues: object;
  functionName:object;
  fieldsvalues2: object;
  tablename: object;
  currencyColumn: object;
  sourceColumn: object;
  targetColumn:object;
  repl_dic:object;
  language:object;
  mode: string;
  dynamicDefaultEnrichTemplate = new DynamicEnrichTemplate();
  dynamicEnrichTemplateValues = new DynamicEnrichTemplateValues();
  //Dynamic structure
  _dynamicDefaultEnrichTemplateList:DynamicEnrichTemplate[]=[];
  _dynamicEnrichTemplateValuesList:DynamicEnrichTemplateValues[]=[];
  _dynamicServerEnrichTemplateList:any[]=[];
  _propertiesNames = new PropertyNamesList();
  //Final Script Name
  _finalScript: EnrichScriptModel;
  testFinal: any;
  collapseArray:CollapseArray[]=[];
  public items: ItemModel[] = [
    {
        text: 'Built-in Function'
    },
    {
        text: 'User Defined Function'
    },
    ];
    public DialogObj;
    public deleteIndex=0;
  constructor(
    public _dropDownLoadService: DropDownLoadService,
    public userAccessManagementService: UserAccessManagementService,
    private dynamicEnrichScriptsService: DynamicEnrichScriptsService
  ) {}
  ngOnInit() {
    
    this.tablename = {
      dataSource: this._TableName,
      text: "dropdownText",
      value: "dropdownValue",
    };
    this.currencyColumn = {
      dataSource: this._cols,
      text: "dropdownText",
      value: "dropdownValue",
    };
    this.sourceColumn = {
      dataSource: this._cols,
      text: "dropdownText",
      value: "dropdownValue",
    };
    this.targetColumn = {
      dataSource: this._cols,
      text: "dropdownText",
      value: "dropdownValue",
    };
    this.repl_dic = {
      dataSource: this._replacementDictionary,
      text: "dropdownText",
      value: "dropdownValue",
    };
    this.language = {
      dataSource: this._LanguageList,
      text: "dropdownText",
      value: "dropdownValue",
    };
    this.fieldsvalues2 = {
      datasource: this._cols,
      text: "dropdownText",
      value: "dropdownValue",
      selected: "selected",
    };
   this.getfunctionTemplate();
    // this.addnew();
    // this.dynamicEnrichScriptsService
    // .getfunctionTemplate()
    // .subscribe((data: any) => {
    //   let test = JSON.parse(data);
    //   this._dynamicServerEnrichTemplateList = test;
    // });
    this.mode = "CheckBox";
    this.getdropDowns();
    this._TableName = [
      { dropdownText: "table1", dropdownValue: "table1" },
      { dropdownText: "table2", dropdownValue: "table2" },
      { dropdownText: "table3", dropdownValue: "table3" },
      { dropdownText: "table4", dropdownValue: "table4" },
      { dropdownText: "table5", dropdownValue: "table5" },
    ];
    this._replacementDictionary = [
      { dropdownText: "Dic1", dropdownValue: "Dictionary1" },
      { dropdownText: "Dic2", dropdownValue: "Dictionary2" },
      { dropdownText: "Dic3", dropdownValue: "Dictionary3" },
      { dropdownText: "Dic4", dropdownValue: "Dictionary4" },
      { dropdownText: "Dic5", dropdownValue: "Dictionary5" },
    ];
    this._cols = [
      { dropdownValue: "col1", dropdownText: "column1", selected: false },
      { dropdownValue: "col2", dropdownText: "column2", selected: false },
      { dropdownValue: "col3", dropdownText: "column3", selected: false },
      { dropdownValue: "col4", dropdownText: "column4", selected: false },
      { dropdownValue: "col5", dropdownText: "column5", selected: false },
    ];
    this._LanguageList = [
      { dropdownValue: "python", dropdownText: "Python"},
    ];
  }
  selectedfunctionTemplate(event, i) {
    var obj;
    obj = this._dynamicServerEnrichTemplateList.find(
      (x) => x.functionName == event
    );
    if (obj != null) {
      this._dynamicDefaultEnrichTemplateList[i].functionName = obj.functionName;
      this._dynamicDefaultEnrichTemplateList[i].funcationName_toggle = obj.funcationName_toggle;
      this._dynamicDefaultEnrichTemplateList[i].cols_toggle = obj.cols_toggle;
      this._dynamicDefaultEnrichTemplateList[i].create_col_toggle =
        obj.create_col_toggle;
      this._dynamicDefaultEnrichTemplateList[i].save_previous_changes_toggle =
        obj.save_previous_changes_toggle;
      this._dynamicDefaultEnrichTemplateList[i].tablename_toggle =
        obj.tablename_toggle;
      this._dynamicDefaultEnrichTemplateList[i].currency_col_toggle =
        obj.currency_col_toggle;
      this._dynamicDefaultEnrichTemplateList[i].mode_toggle = obj.mode_toggle;
      this._dynamicDefaultEnrichTemplateList[i].rule_toggle = obj.rule_toggle;
      this._dynamicDefaultEnrichTemplateList[i].ref_string_toggle =
        obj.ref_string_toggle;
      this._dynamicDefaultEnrichTemplateList[i].separator_toggle =
        obj.separator_toggle;
      this._dynamicDefaultEnrichTemplateList[i].delimiter_toggle =
        obj.delimiter_toggle;
      this._dynamicDefaultEnrichTemplateList[i].source_toggle =
        obj.source_toggle;
      this._dynamicDefaultEnrichTemplateList[i].target_toggle =
        obj.target_toggle;
      this._dynamicDefaultEnrichTemplateList[i].replacement_dict_toggle =
        obj.replacement_dict_toggle;
      this._dynamicDefaultEnrichTemplateList[i].sign_toggle = obj.sign_toggle;
      this._dynamicDefaultEnrichTemplateList[i].value_toggle = obj.value_toggle;
      this._dynamicDefaultEnrichTemplateList[i].substring_toggle =
        obj.substring_toggle;
      this._dynamicDefaultEnrichTemplateList[i].start_date_toggle =
        obj.start_date_toggle;
      this._dynamicDefaultEnrichTemplateList[i].end_date_toggle =
        obj.end_date_toggle;
        this._dynamicDefaultEnrichTemplateList[i].dataFrame_toggle =
        obj.dataFrame_toggle;
        this._dynamicDefaultEnrichTemplateList[i].scriptLanguage_toggle =
        obj.scriptLanguage_toggle;
        this._dynamicDefaultEnrichTemplateList[i].scriptText_toggle =
        obj.scriptText_toggle;
    }

    //  this._dynamicDefaultEnrichTemplateList[i]=this.obj;
  }
  getdropDowns() {
    this._dropDownLoadService
      .GetDropDownsWithCategory("Function Name")
      .subscribe((data: any[]) => {
        if (data.length > 0) {
          debugger
          this._functionList = data;
          this.functionName = {
            dataSource: this._functionList,
            // groupBy:"dropdownCategory",
            text: "dropdownText",
            value: "dropdownValue"
          };
        }
      });
    this._dropDownLoadService
      .GetDropDowns("Mode")
      .subscribe((data: dropdownModel[]) => {
        if (data.length > 0) {
          this._ModeList = data;
          this.fieldsvalues = {
            dataSource: this._ModeList,
            text: "dropdownText",
            value: "dropdownValue",
          };
        }
      });

    this._dropDownLoadService
      .GetDropDowns("Currency Type(Sign)")
      .subscribe((data: dropdownModel[]) => {
        if (data.length > 0) {
       
          this._SignList = data;
          this.fieldsvalues = {
            dataSource: this._SignList,
            text: "dropdownText",
            value: "dropdownValue",
          };
        }
      });
  }
  addnew() {
    this.collapseArray.push({
      collapseText:'Collapse',collapseToggle:true,
      editToggle:false,editClass:""})
    var dynamicDefaultEnrichTemplate = new DynamicEnrichTemplate();
    var dynamicEnrichTemplateValues = new DynamicEnrichTemplateValues();
    dynamicDefaultEnrichTemplate = {
      functionName: "",
      funcationName_toggle:true,
      cols_toggle: false,
      create_col_toggle: false,
      save_previous_changes_toggle: false,
      tablename_toggle: false,
      currency_col_toggle: false,
      mode_toggle: false,
      rule_toggle: false,
      ref_string_toggle: false,
      separator_toggle: false,
      delimiter_toggle: false,
      source_toggle: false,
      target_toggle: false,
      replacement_dict_toggle: false,
      sign_toggle: false,
      value_toggle: false,
      substring_toggle: false,
      start_date_toggle: false,
      end_date_toggle: false,
      dataFrame_toggle:false,
      scriptLanguage_toggle:false,
      scriptText_toggle:false
    };
    dynamicEnrichTemplateValues = {
      functionName: "",
      scriptDisplayName:"",
      enableIndividualScript: true,
      cols: [],
      create_col: false,
      new_column_name:'',
      save_previous_changes: false,
      tablename: "",
      currency_col: "",
      mode: "",
      rule: "",
      ref_string: "",
      separator: "",
      delimiter: "",
      source: "",
      target: "",
      replacement_dict: "",
      sign: "",
      value: "",
      substring: "",
      start_date: "",
      end_date: "",
      dataFrame:"Data",
      scriptLanguage:"python",
      scriptText:""
    };
    this._dynamicDefaultEnrichTemplateList.push(dynamicDefaultEnrichTemplate);
    this._dynamicEnrichTemplateValuesList.push(dynamicEnrichTemplateValues);
  }
  
  SaveValue(index2, prop_Name, prop_Value) {
    console.log("event", prop_Value);
    // let test ;
    // prop_Value.forEach(element => {
    //   var result = this._dynamicDefaultEnrichTemplateList[index2].colsValues.findIndex(item =>item.dropdownValue==element);
    //   this._dynamicDefaultEnrichTemplateList[index2].colsValues[result].selected=true;
    // this._dynamicDefaultEnrichTemplateList[index].colsValues[result].selected=true;
    //});
  }
  test() {
    console.log(this._dynamicDefaultEnrichTemplateList);
  }
  SaveFinalScript() {
    this._finalScript = new EnrichScriptModel();
    this._finalScript.userId = this.userId;
    this._finalScript.workspaceId = this.workspaceId;
    this._finalScript.clientId = this.clientId;
    this._finalScript.scriptname = this.scriptName;
    this._finalScript.enableScript = this.scriptEnable;
    this._finalScript.ScriptList = this._dynamicEnrichTemplateValuesList;
    console.log("Final Script", this._finalScript);
    this.dynamicEnrichScriptsService
      .saveScript(this._finalScript)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  updateScript(){
    this._finalScript = new EnrichScriptModel();
    this._finalScript.userId = this.userId;
    this._finalScript.workspaceId = this.workspaceId;
    this._finalScript.clientId = this.clientId;
    this._finalScript.scriptname = this.scriptName;
    this._finalScript.enableScript = this.scriptEnable;
    this._finalScript.ScriptList = this._dynamicEnrichTemplateValuesList;
    console.log("Final Script", this._finalScript);
    this.dynamicEnrichScriptsService
      .updateScript(this._finalScript,this.scriptId)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  getfunctionTemplate() {
    this.dynamicEnrichScriptsService.getScript(this.userId,this.workspaceId,this.clientId,this.scriptId).subscribe((data:any)=>{
      var result=JSON.parse(data);
      this.scriptName=result.scriptname;
      this.scriptEnable=result.enableScript;
      this._dynamicEnrichTemplateValuesList=result.ScriptList;
    });
    this.dynamicEnrichScriptsService
      .getfunctionTemplate()
      .subscribe((data: any) => {
        let test = JSON.parse(data);
        this._dynamicServerEnrichTemplateList = test;
        if(this._dynamicEnrichTemplateValuesList.length>=1){
        for (var i = 0; i < this._dynamicEnrichTemplateValuesList.length; i++) {
          this.collapseArray.push(
            {
              collapseText:'Collapse',collapseToggle:true,
              editToggle:false,editClass:""
            });
          var ynamicDefaultEnrichTemplate = new DynamicEnrichTemplate();
          this._dynamicDefaultEnrichTemplateList.push(
            ynamicDefaultEnrichTemplate
          );
          this.selectedfunctionTemplate(
            this._dynamicEnrichTemplateValuesList[i].functionName,
            i
          );
        }
      }
      else{
        this.addnew();
      }
      });
  }
  collapseHandling(index){
    this.collapseArray[index].collapseToggle =! this.collapseArray[index].collapseToggle;
    if(this.collapseArray[index].collapseToggle){
      this.collapseArray[index].collapseText ='Collapse';
    }else{
      
      this.collapseArray[index].collapseText ='Expand';
    }
}

drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this._dynamicDefaultEnrichTemplateList, event.previousIndex, event.currentIndex);
  moveItemInArray(this._dynamicEnrichTemplateValuesList, event.previousIndex, event.currentIndex);
}
functionTypeSelected(event){
console.log(event.item.properties.text);
if(event.item.properties.text=='Built-in Function'){
this.addnew();
}
else if(event.item.properties.text=='User Defined Function'){
  this.addnew();
  this.selectedfunctionTemplate('execute_script',this._dynamicDefaultEnrichTemplateList.length-1);
  this._dynamicEnrichTemplateValuesList[this._dynamicEnrichTemplateValuesList.length-1].functionName='execute_script';
}
}
ClearColumnName(index){
if(this._dynamicEnrichTemplateValuesList[index].create_col==false)
  this._dynamicEnrichTemplateValuesList[index].new_column_name='';
}
public onOpenDialog = function(event: AnimationPlaybackEvent,i): void {
  this.deleteIndex=i;
  this.DialogObj = DialogUtility.confirm({
  title: 'Delete',
  content: "Are you sure you want to delete this?",
  position:{Y:200},
  okButton: {  text: 'OK', click: this.okClick.bind(this) },
  cancelButton: {  text: 'Cancel', click: this.cancelClick.bind(this) },
  showCloseIcon: true,
  closeOnEscape: true,
  animationSettings: { effect: 'None' }
});
}
private okClick(): void {
  debugger
  this.deleteScript(this.deleteIndex);
  this.DialogObj.hide();
}

private cancelClick(): void {
  this.DialogObj.hide();
}
deleteScript(i) {
  this._dynamicDefaultEnrichTemplateList.splice(i, 1);
  this._dynamicEnrichTemplateValuesList.splice(i, 1);
  // this._dynamicScriptValues.splice(i,1);
}
editDisplayName(index){
  debugger
  this.collapseArray[index].editToggle =! this.collapseArray[index].editToggle;
  if(this.collapseArray[index].editToggle){
    this.collapseArray[index].editClass ='scriptNameEdit';
  }else{
    
    this.collapseArray[index].editClass ='';
  }
}
}