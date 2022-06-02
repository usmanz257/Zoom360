import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { ChildWorkspacesModel } from 'src/app/Models/mainmenu.model';
import { ChildWorkspacesSetupService } from 'src/app/services/administration/child-workspaces-setup.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-child-workspaces-setup',
  templateUrl: './child-workspaces-setup.component.html',
  styleUrls: ['./child-workspaces-setup.component.css']
})
export class ChildWorkspacesSetupComponent extends AppComponentBase implements OnInit {
  public test=new ToastMessage();
   //for toast
   @ViewChild('defaulttoast',{static:true})
   public toastObj: ToastComponent;
   @ViewChild('toastBtnShow',{static:true})
   public btnEleShow: ButtonComponent;
   public position;
  ChildspaceSetup: FormGroup;
  userId:string='';
  workSpaceId:string='';
  Client_id:string='';
  statusMessage={};
  constructor(
    injector:Injector,
    private fb: FormBuilder,public childWorkspacesService: ChildWorkspacesSetupService) { super(injector);}

  ngOnInit(): void {
    this.position=this.test.position;
    this.createForm();
    this.getchildworkspace();
  }

  createForm() {
    this.ChildspaceSetup = this.fb.group({
      childWorkspace: ['Workspace can have childs', Validators.required ],
      childSelectedOption: [false, Validators.required],
      childChange: [false, Validators.required ],
      childOverrideSelectedOption: [false, Validators.required ],
      
    });
  }
  SaveConfig(data:ChildWorkspacesModel){
    debugger
    data.userId = this.clientDetailService.getuserID();
    data.workSpaceId=this.clientDetailService.getWorkspaceID();
    data.ClientId = this.clientDetailService.getClientID();
    data.ClientTime = this.clientDateTimeService.getCilentTime();
    data.ClientDate = this.clientDateTimeService.getCilentDate();
    data.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
    this.childWorkspacesService.saveWorkSpaceSetup(data).subscribe((data:any) => {
      debugger
      console.log(data);
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
    });
  }

  getchildworkspace(){
    debugger
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.Client_id = this.clientDetailService.getClientID();
    this.childWorkspacesService.getchildWorksacesetup(this.userId,this.workSpaceId,this.Client_id).subscribe((data:ChildWorkspacesModel[]) => {
        //console.log(data[0].dateFormateType,)
        console.log(data)
        debugger
        this.ChildspaceSetup.patchValue({
          childWorkspace:data[0].childWorkspace,
          childSelectedOption:data[0]. childSelectedOption,
          childChange:data[0].childChange,
          childOverrideSelectedOption:data[0].childOverrideSelectedOption,
          
       
      })
    });
    //console.log('');
  
  }
      
}
