import { Script } from './../../../models/enrich/enrichment-function-model';
import { Router } from '@angular/router';
import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { ToastMessage } from 'src/app/models/MessageTypes/toast-message';
import { TreeTemplateGridService } from 'src/app/services/administration/tree-template-grid.service';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { TreeTemplateService } from 'src/app/services/common/tree-template.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tree-template-grid',
  templateUrl: './tree-template-grid.component.html',
  styleUrls: ['./tree-template-grid.component.css']
})
export class TreeTemplateGridComponent extends AppComponentBase implements OnInit {
  @ViewChild('defaulttoast',{static:true})
public toastObj: ToastComponent;
@ViewChild('toastBtnShow',{static:true})
public position;
public btnEleShow: ButtonComponent;
@ViewChild('UploadFiles',{static:true})
public uploadObj: UploaderComponent;
@Output() public onUploadFinished = new EventEmitter();
public path: Object = {
    saveUrl:environment.apiUrl+'/api/TreeControlTemplate/SaveFile',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    
};
//Json editor
public testToast=new ToastMessage();
  allcheckbox:boolean=false;
  limit:string = 'All';
  active_toggle=false;
  active_arrow:boolean=false;
  fileName_toggle:boolean=false;
  fileName_arrow:boolean=false;
  scriptName_toggle:boolean=false;
  scriptName_arrow:boolean=false;
  userId:string='';
  workSpaceId:string='';
  Client_Id:string='';
  soureceConnectorId:string='';
  sourceAccountId:string='';
  templateName:string='';
  _treeTemplateGrid:any[]=[];
  _recordLength:number=0;
  className:string="hide-div";
  scriptName :string ='';
  scriptId:string='';
scriptEnable:boolean=false;
scriptMessage:object={
  'color':'black'
}; 
public allowExtensions: string = '.xlsx ,.json';
public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;
allFiles : FileInfo[];
newSubmenuId='';
public buttons: Object = {
  browse: 'Choose file',
  clear: true,
 };
  public fullscreentoggle=false;
  constructor( injector:Injector,
    public MenuService: AppMenuService,
    public treeTemplateGridService:TreeTemplateGridService,
    public treeTemplateService :TreeTemplateService,
    public router:Router) {super(injector); }

  ngOnInit() {
    this.reloadPage();
  }
   checkAll(ev) {
//     this.treeTemplateGridService._workSpaceGrid.forEach(x => x.state = ev.target.checked)
    
  }
  findCount(e) {
    
//     if(e.target.checked)
//     {
//     this.allcheckbox=false;
//     this.WorkSpaceService._tablecounter+=1;
//     }
//     else{
//       this.WorkSpaceService._tablecounter-=1;
//       this.allcheckbox=false;
//     }    
}
   functionCount(e){
    
//     if(e.target.checked)
//     {
//       this.allcheckbox=true;
//       this.WorkSpaceService._tablecounter= this.WorkSpaceService._recordLength;      
//     }
//     else{
//          this.allcheckbox=false;
//          this.WorkSpaceService._tablecounter=0;
//     }
   }
   applySort(fieldName){
//   if(fieldName=='workspaceName'){
//     this.type_arrow=true;
//     this.type_toggle=!this.type_toggle;
//     this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
//     this.WorkSpaceService.sortWorkSetup(fieldName);
//   }
//   else if(fieldName=='displayName'){
//     this.displayName_arrow=true;
//     this.displayName_toggle=!this.displayName_toggle;
//     this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
//     this.WorkSpaceService.sortWorkSetup(fieldName);
//   }
//   else if(fieldName=='parentWorkspace'){
//     this.workspace_arrow=true;
//     this.workspace_toggle=!this.workspace_toggle;
//     this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
//     this.WorkSpaceService.sortWorkSetup(fieldName);
//   }
//   else if(fieldName=='childApplyandEnforce'){
//     this.name_arrow=true;
//     this.name_toggle=!this.name_toggle;
//     this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
//     this.WorkSpaceService.sortWorkSetup(fieldName);
//   }
//   else if(fieldName=='excludeChildWorkspace'){
//     this.userAccessGranted_arrow=true;
//     this.userAccessGranted_toggle=!this.userAccessGranted_toggle;
//     this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
//     this.WorkSpaceService.sortWorkSetup(fieldName);
//   }
//   else if(fieldName=='bStatus'){
    
//     this.bStatus_arrow=true;
//     this.bStatus_toggle=!this.bStatus_toggle;
//     this.WorkSpaceService._sortToggle=!this.WorkSpaceService._sortToggle;
//     this.WorkSpaceService.sortWorkSetup(fieldName);
//   }
 
 }
   reloadPage(){
     debugger
    this.active_arrow=false;
    this. fileName_arrow=false
    this.scriptName_arrow=false;
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.Client_Id = this.clientDetailService.getClientID();
    this.soureceConnectorId='';
    this.sourceAccountId='';
    this.templateName='';
    this.treeTemplateGridService.getTreeTemplateList(this.userId,this.workSpaceId,this.Client_Id,this.soureceConnectorId,this.sourceAccountId,this.templateName).subscribe((data: any[]) =>{
      debugger
      if(data.length  > 0){
        for(let i=0;i<data.length;i++)
        {
                if(data[i].active_arrow==0)
                {
                  data[i].active_arrow="no"
                }
                else
                {
                  data[i].active_arrow="yes"
                }
        }
        this._treeTemplateGrid = data;
        this._recordLength = this._treeTemplateGrid.length;
      }
    });

   }
  ShowModel(){
    debugger
    this.ClearData();
        this.fullscreentoggle=!this.fullscreentoggle;
        if(this.fullscreentoggle==true){
          this.className='show-div overlay';
        }
        else{
          this.className='hide-div';
        }
      }
    ClearData(){
      this.scriptName = "";
      this.scriptEnable = false;
      this.uploadObj.clearAll();
      debugger
      this.applyColor(true);
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
uploadFile(){
  debugger
  if(this.scriptName != ""){
    this.uploadObj.upload();
   this.applyColor(true);
  }
    else {
    this.applyColor(false);
  }
}
onUploadStatus(args) { 
  debugger
  if(args.response.statusCode== 208)
  {
  
  var result= args.response.statusText; 
  result = result.split(",");
   if(result[0]==0){
    
      console .log(result[1]);
  }
  else if(result[0]==1){
    console .log(result[1]);
  }
  else if(result[0]==2){
    console .log(result[1]);
  }
  args.statusText=result[1];
debugger
  this.scriptId= result[2];

 this.storageService.setItem(environment.storage.treeScriptId, this.scriptId);
 //return result;
  //this.MenuService.getsubMenuSection(this.storageService.getItem(environment.storage.mainMenu));
 
  }
else{
  
}
  this.reloadPage();
}
public onFileRemove(args: RemovingEventArgs): void {
  debugger
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
  debugger
  args.filesData.splice(2);
  
  //  this.filenamesequence+this.counterthis.filename;
  var obj={
      
  }
  let filesData : FileInfo[] = this.uploadObj.getFilesData();
  
  this.allFiles= filesData.concat(args.filesData);
  localStorage.setItem("allFiles",JSON.stringify(this.allFiles))
  
  if (this.allFiles.length > 2) {
      for (let i : number = 0; i < this.allFiles.length; i++) {
          if (this.allFiles.length > 2) {
            this.allFiles.shift();
          }
      }
      args.filesData = this.allFiles;
      args.modifiedFilesData = args.filesData;
  }
  args.isModified = true;
}
public onUploadBegin(args: UploadingEventArgs) {
  debugger
    // add addition data as key-value pair.
    let userId = this.clientDetailService.getuserID();
    let WorkspaceId = this.clientDetailService.getWorkspaceID();
    let ClientId = this.clientDetailService.getClientID();
    let mainMenu = this.storageService.getItem(environment.storage.mainMenu);
    let templateName= this.scriptName;
    let scriptEnable = this.scriptEnable;
    // localStorage.setItem("scriptId",this.scriptId)
    // let scriptId = this.storageService.setItem(environment.storage.treeScriptId);
    // this.storageService.setItem(environment.storage.treeScriptId, this.scriptId);
    args.customFormData = [
      {'userId': userId},{'workspaceId':WorkspaceId},
      {'clientId':ClientId},{'mainMenuID':mainMenu},
      {'scriptId':this.scriptId},{'scriptName':templateName},{'scriptEnable':scriptEnable}
    ];
}
TreeRollUp(treeScriptId){
  debugger
  this.treeTemplateService.setSubMenuId(treeScriptId)
  this.router.navigate(['templates/TreeTemplate/treeview']);
}

}
