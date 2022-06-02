import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { WorkspaceSetup, WorkspaceSettingModel } from 'src/app/Models/mainmenu.model';
import { WorkSpaceSetupService } from 'src/app/Services/administration/work-space-setup.service';
import { Router } from '@angular/router';

import {  ViewEncapsulation, ViewChild, HostListener, ElementRef, Inject, Injector } from '@angular/core';
import { ToastComponent, ToastCloseArgs, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ToastMessage } from '../MessageTypes/toast-message';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { WorkspaceSetupGridComponent } from './workspace-setup-grid/workspace-setup-grid.component';


@Component({
  selector: 'app-workspace-setup',
  templateUrl: './workspace-setup.component.html',
  styleUrls: ['./workspace-setup.component.css']
})
export class WorkspaceSetupComponent extends AppComponentBase implements OnInit {
  //for toast
  public test=new ToastMessage();
  @ViewChild('defaulttoast',{static:true})
  public toastObj: ToastComponent;
  @ViewChild('toastBtnShow',{static:true})
  public btnEleShow: ButtonComponent;
  @ViewChild('Grid',{static:true}) 
  public GridList : WorkspaceSetupGridComponent;
  public position;
  userId:string='';
  workSpaceId:string='';
  Client_Id:string='';
  statusMessage={};

  
  WorkspaceSetting: WorkspaceSettingModel=new WorkspaceSettingModel;
  Status_message: string;
  _workSpaceParentDropdown: any[];
  field:object;

  constructor(
    injector:Injector,
    private fb: FormBuilder,public WorkSpaceService:WorkSpaceSetupService,private router:Router) { super(injector);}
   WorkspaceSetup: FormGroup;
  ngOnInit(): void {
    this.position=this.test.position;
    this.createForm();
    this.WorkSpaceService.getWorkSpaceParentList();
    this.getDropDown();
    //this.getdefaultvalues();
  }
  createForm() {
    this.WorkspaceSetup = this.fb.group({
      WorkSpace_Name: [null, [Validators.required] ],
      WorkSpaceDisplayName: [null, [Validators.required] ],
      WorkSpaceParentName: ['Select Parent Workspace', [Validators.required] ],
      ChildWorkSpaceRule: ['All child workspaces'],
      Exclude_Child_WorkSpace: [false],
    });
  }
  getdefaultvalues(){
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.Client_Id = this.clientDetailService.getClientID();
    this.WorkSpaceService.getWorkSpaceList(this.userId,this.workSpaceId,this.Client_Id).subscribe((data:WorkspaceSetup)=>{
      debugger
      
      this.WorkspaceSetup.patchValue({
        
        WorkSpace_Name: data[0].workspaceName,
        WorkSpaceDisplayName: data[0].displayName,
        WorkSpaceParentName: data[0].parentWorkspace,
        ChildWorkSpaceRule: data[0].childApplyandEnforce,
        Exclude_Child_WorkSpace: data[0].excludeChildWorkspace
        
       });
    });
   
   console.log('Form Value', this.WorkspaceSetup.value)
  }
  getDropDown(){
    this.WorkSpaceService.getWorkSpaceParentList().subscribe((data: any[]) => {
      if(data.length  > 0){
        this._workSpaceParentDropdown = data; 
        this.field = { dataSource: this._workSpaceParentDropdown,text:'dropdownText',value:'dropdownText'};
        }
    });
  }
 
  
  SaveConfig(UserData:WorkspaceSetup) { 
    debugger
    var workspace = this._workSpaceParentDropdown.find(e=>e.dropdownText== UserData.WorkSpaceParentName);
    UserData.workspaceParentId = String(workspace.dropdownValue);
    UserData.userId = this.clientDetailService.getuserID();
    UserData.workSpaceId=this.clientDetailService.getWorkspaceID();
    UserData.Client_Id = this.clientDetailService.getClientID();
    UserData.ClientTime = this.clientDateTimeService.getCilentTime();
    UserData.ClientDate = this.clientDateTimeService.getCilentDate();
    UserData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
    
    this.WorkSpaceService.saveWorkSpaceSetup(UserData).subscribe((data:any) => {
      debugger
      var dbMessage = JSON.parse(data);
      var statusMessage = dbMessage.result;
      statusMessage = statusMessage.split(',');
      if(statusMessage[0]=='1'){
        this.test.toast[1].content=statusMessage[1];
        this.toastObj.show(this.test.toast[1]);

      }else if(statusMessage[0]=='0'){

      }else if(statusMessage[0]=='2'){
        this.test.toast[2].content=statusMessage[1];
        this.toastObj.show(this.test.toast[2]);
      }
      this.GridList.reloadPage();
    });
  }
}
  