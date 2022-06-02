import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Injector, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ButtonComponent } from 'ej-angular2';
import { parseJSON } from 'jquery';
import { TreeTemplateDto, TreeTemplateInput, TreeTemplateList, TreeTemplateQueryDataModel } from 'src/app/models/common/TreeTemplate.model';
import { ToastMessage } from 'src/app/models/MessageTypes/toast-message';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { DropDownLoadService } from 'src/app/services/common/drop-down-load.service';
import { TreeTemplateService } from 'src/app/services/common/tree-template.service';
import { environment } from 'src/environments/environment';
import { EmitType } from '@syncfusion/ej2-base'
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { getStyle } from 'highcharts';
import { AgGridDataViewerComponent } from '../../aiinsights/ag-grid-data-viewer/ag-grid-data-viewer.component';
import { AgGridAngular } from 'ag-grid-angular';
import { Console } from 'console';
@Component({
  selector: 'app-treetemplate',
  templateUrl: './treetemplate.component.html',
  styleUrls: ['./treetemplate.component.css']
})
export class  TreetemplateComponent  extends AppComponentBase implements OnInit,OnChanges {
  @ViewChild('UploadFiles',{static:true})
  public uploadObj: UploaderComponent;
  @Output() public onUploadFinished = new EventEmitter();
  public path: Object = {
      saveUrl:environment.apiUrl+'/api/TreeControlTemplate/SaveFile',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
      
  };
@ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
@ViewChild('defaulttoast',{static:true})
public toastObj: ToastComponent;
@ViewChild('toastBtnShow',{static:true})

@Output() gridData = new EventEmitter;
@ViewChild('agGridComponent',{static:true})
public AgGridComponent:AgGridDataViewerComponent;
@ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
gridDisplay:string='display-none';
widgetsDisplay:string='';
public position;
public btnEleShow: ButtonComponent;
//Json editor
public testToast=new ToastMessage();
public editorOptions: JsonEditorOptions;
public data: any;
public jsonDescription:string='';
public message:string;
public nodeid:string='';
scriptName :string ='';
scriptEnable:boolean=false;
sourcelist:string[]=[];
enabled:boolean=true;
dropdownsDataList:any[]=[];
dropdownsDataListFinal:any[]=[];
isDone:boolean=false;
length:number=0;
templatejson:any=[];
templatejsonn:any[]=[];
subMenuId:string='';
userId:string='';
workspaceId:string='';
clientId:string='';
nodeId:string='';
gridColumnNames:any[];
gridValues:any[];
scriptId:string='';


scriptMessage:object={
  'color':'black'
}; 

newSubmenuId='';
public fullscreentoggle=false;
className:string="hide-div";
//Json editor
  treeTemplateInput={} as TreeTemplateInput;
  treeTemplateDto:TreeTemplateDto={} as TreeTemplateDto;
  template:TreeTemplateList[]=[];
  treeTemplateQueryData={} as TreeTemplateQueryDataModel;
  public headerText: Object = [{ text: "Controls"},
  { text: "Json"}];
  fields:object={};
  // File uploader
  
  public allowExtensions: string = '.json';
  allFiles : FileInfo[];
  public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;
  public buttons: Object = {
    browse: 'Choose file',
    clear: true,
   };
  // public onFileUpload: EmitType<SelectedEventArgs> = (args: any) =>  {
  //   debugger
  
  // }
  constructor(public MenuService: AppMenuService,
    injector:Injector,public treeTemplateService:TreeTemplateService,private dropDownLoadService:DropDownLoadService) {
    super(injector);
//Json editor

this.editorOptions = new JsonEditorOptions();
this.editorOptions.mode = 'code'; // set all allowed modes
this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
this.editorOptions.statusBar = false;
this.editorOptions.mainMenuBar = false;
this.editorOptions.onChange= () => {

this.templatejson = this.editor.get();
debugger
this.templatejsonn=this.templatejson;};


//Json editor
  }

  ngOnInit() {
    

  this.position = this.testToast.position;
  this.scriptId= this.storageService.getItem(environment.storage.treeScriptId);
  this.nodeid = this.storageService.getItem(environment.storage.treeNodeid);
  this.treeTemplateService.GetRollupTree();

   // this.getNodeTemplate(this.nodeid);
  //this.getNodeTemplate(1);

}
ngOnChanges(){
// this.templatejson=this.template;
}
SaveDataByJson(){
  
  console.log("json Editor",this.templatejson);
  this.saveNodeTemplate('json');
  }
SaveDataByControls(){
  
  this.saveNodeTemplate('SaveDataByControls');
  this.getwidgetDetailData();
  }
saveNodeTemplate(value){
    this.treeTemplateDto.userId= this.clientDetailService.getuserID();
    this.treeTemplateDto.workspaceId= this.clientDetailService.getWorkspaceID();
    this.treeTemplateDto.clientId= this.clientDetailService.getClientID();
    this.treeTemplateDto.Node_id=this.nodeid;
    this.treeTemplateDto.scriptId= this.storageService.getItem(environment.storage.treeScriptId);
    this.treeTemplateDto.Temp_Name='Template1';
    this.treeTemplateDto.Temp_Enable=true;
    if(value=='json'){
    this.treeTemplateDto.Template = this.templatejson;
    }
    else{
      this.treeTemplateDto.Template= this.template;
      this.editor.set(parseJSON(JSON.stringify(this.template)));
    }
    console.log(this.treeTemplateDto)
    this.treeTemplateService.saveTreeTempalte(this.treeTemplateDto,this.scriptId).subscribe(
      (data:any) => {
    
        this.testToast.toast[1].content='Data Saved Successfully';
        this.toastObj.show(this.testToast.toast[1]);
       
      },
      (err:any) => {
    
        this.testToast.toast[2].content='Data not saved...';
        this.toastObj.show(this.testToast.toast[2]);
      });
  }
getNodeTemplate(nodeid){
    
    this.templatejson=[];
    this.storageService.setItem(environment.storage.treeNodeid,nodeid.nodeData.id);
    this.nodeid = this.storageService.getItem(environment.storage.treeNodeid);
    this.isDone=false;
    this.treeTemplateInput.userId= this.clientDetailService.getuserID();
    this.treeTemplateInput.workspaceId= this.clientDetailService.getWorkspaceID();
    this.treeTemplateInput.clientId= this.clientDetailService.getClientID();
    this.treeTemplateInput.Node_id= this.nodeid;
    this.treeTemplateInput.scriptId = this.storageService.getItem(environment.storage.treeScriptId);
      //Getting templates
      debugger
    this.treeTemplateService.getTreeTemplate(this.treeTemplateInput).subscribe(
      (data:any) => {
     
        this.sourcelist.splice(0,this.sourcelist.length);
        this.dropdownsDataList.splice(0,this.dropdownsDataList.length);
        this.template.splice(0,this.template.length);
        this.dropdownsDataListFinal.splice(0,this.dropdownsDataListFinal.length);
        var result = JSON.parse(data);
        this.treeTemplateDto.Temp_Name=result.Temp_Name;
        this.treeTemplateDto.Temp_Enable=result.Temp_Enable;
        this.scriptId = result._id;
        this.template = result.Template;
        result.Template.forEach(item => {
          if(item.Data.Input_Source!=""){
          this.sourcelist.push(item.Data.Input_Source);
        }
        });
        //Getting data for evey dropdown in template
        this.sourcelist.forEach(item=>{
          this.dropDownLoadService.GetDropDowns(item).subscribe((dropDown:any)=>{
              this.dropdownsDataList.push({
                dropDownSource:item,
                dropdownData:dropDown
              });
                this.fields={text:'dropdownText',value:'dropdownValue'};
              if (this.dropdownsDataList.length==this.sourcelist.length){
               // this.isDone=true;
               //settng dropdowndata list
                // this.template.forEach(element => {
                //   if(element.Data.Input_Source==""){
                //     this.dropdownsDataListFinal.push({
                //       dropDownSource:'',
                //       dropdownData:''
                //     });
                //   }
                //   else{
                //     this.dropdownsDataListFinal.push(this.dropdownsDataList[this.length]);
                //     this.length+=1;
                //   }
                // });
                this.isDone=true;
                this.length=0
              //  this.fields={text:'dropdownText',value:'dropdownValue'};
              }
            });
        });
      },
      
      (err:any) => {
        debugger
        this.template=[];
        this.testToast.toast[2].content= err.error;
        this.toastObj.show(this.testToast.toast[2]);
      });
      this.getwidgetDetailData();
    }

  
findSource(dropdownSource){
  
 //console.log('source list',this.dropdownsDataList);
 //console.log('sourcelistFinal',this.dropdownsDataListFinal);
 
  var datasource = this.dropdownsDataList.find(ele => ele.dropDownSource == dropdownSource);
  // console.log('datasource',datasource.dropdownData )
  return datasource.dropdownData;
}
ShowModel(){
  this.ClearData();
      this.fullscreentoggle=!this.fullscreentoggle;
      if(this.fullscreentoggle==true){
        this.className='show-div overlay';
      }
      else{
        this.className='hide-div';
      }
  }
 
onUploadStatus(args) { 
    
    if(args.response.statusCode== 208)
    {
      this.scriptId= this.storageService.getItem(environment.storage.treeScriptId);
    var result =args.response.statusText;
    result = result.split(",");
    this.scriptId= result[1];
    // this.MenuService.getsubMenuSection(this.storageService.getItem(environment.storage.mainMenu));
    }
    else{
      args.statusText = args.response.statusText; 
    }
  }
public onFileRemove(args: RemovingEventArgs): void {
    
   var getrow=args.filesData.splice(20);
   var findfilename=args.filesData[0].name;

    for(var i=0;i<this.allFiles.length;i++)
    {

      var find=this.allFiles.find(x=>x.name==findfilename);
      var RemoveIndex=this.allFiles.indexOf(find);
      this.allFiles.splice(RemoveIndex,1);
    }
      args.postRawFile = false;
      localStorage.setItem("allFiles",JSON.stringify(this.allFiles))
  }
  public onSelected(args : SelectedEventArgs) : void {
    
    args.filesData.splice(1);
    
    //  this.filenamesequence+this.counterthis.filename;
    var obj={
        
    }
    let filesData : FileInfo[] = this.uploadObj.getFilesData();
    
    this.allFiles= filesData.concat(args.filesData);
    localStorage.setItem("allFiles",JSON.stringify(this.allFiles))
    
    if (this.allFiles.length > 1) {
        for (let i : number = 0; i < this.allFiles.length; i++) {
            if (this.allFiles.length > 1) {
              this.allFiles.shift();
            }
        }
        args.filesData = this.allFiles;
        args.modifiedFilesData = args.filesData;
    }
    args.isModified = true;
}
public onUploadBegin(args: UploadingEventArgs) {
  
      // add addition data as key-value pair.
      let userId = this.clientDetailService.getuserID();
      let WorkspaceId = this.clientDetailService.getWorkspaceID();
      let ClientId = this.clientDetailService.getClientID();
      let mainMenu = this.storageService.getItem(environment.storage.mainMenu);
      let templateName= this.scriptName;
      let scriptEnable = this.scriptEnable;
      args.customFormData = [
        {'userId': userId},{'workspaceId':WorkspaceId},
        {'clientId':ClientId},{'mainMenuID':mainMenu},
        {'scriptId':this.scriptId},{'scriptName':templateName},{'scriptEnable':scriptEnable}
      ];
}
ClearData(){
  
  this.scriptName = "";
  this.scriptEnable = false;
  this.uploadObj.clearAll();
  this.applyColor(true);
}
uploadFile(){
  
  // if(this.scriptName != ""){
    this.uploadObj.upload();
  //  this.applyColor(true);
  // }
  //   else {
  //   this.applyColor(false);
  // }
}
applyColor(value: boolean ){
    if(value == true){
      this.scriptMessage={
        'color':'black'
      }
    }else{
      this.scriptMessage={
        'color':'red'
      };
    }
}
  getwidgetDetailData(){
    debugger
    this.userId = this.clientDetailService.getuserID();
    this.workspaceId=this.clientDetailService.getWorkspaceID();
    this.clientId = this.clientDetailService.getClientID();
    this.scriptId= this.storageService.getItem(environment.storage.treeScriptId)
    this.treeTemplateService.getTreeTemplateQueryData(this.userId,this.workspaceId,this.clientId,this.scriptId,this.nodeid).subscribe((data:TreeTemplateQueryDataModel)=> {
  
      // this.treeTemplateQueryData.gridValues=data.gridValues;
      //  this.treeTemplateQueryData.gridColumnNames=data.gridColumnNames;
      this.viewGrid(data);
      // this.gridDisplay='display-show';
      // this.widgetsDisplay='display-none';
      // debugger
    })
  }
    viewGrid(data){
      debugger
      this.gridDisplay='display-show';
      this.widgetsDisplay='display-none';
      this.AgGridComponent.getData(data.gridValues,data.gridColumnNames);
     
    }
    gridclose(){
      debugger
      this.gridDisplay='display-none';
      this.widgetsDisplay='display-show';
    }
}