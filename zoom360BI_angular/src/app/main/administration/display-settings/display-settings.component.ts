import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { DisplaySettingsModel } from 'src/app/Models/mainmenu.model';
import { DisplaySettingsService } from 'src/app/Services/administration/display-settings.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-display-settings',
  templateUrl: './display-settings.component.html',
  styleUrls: ['./display-settings.component.css']
})
export class DisplaySettingsComponent extends AppComponentBase implements OnInit {
  public test=new ToastMessage();
  DisplaySettings: FormGroup;
  workspaceThemeColor:any[]=[];
  user_Id:string='';
  workspace_Id:string='';
  Client_Id:string='';
  workspaceDisplayMode:string="all";
  workspaceLogo:string= "all";
  logoBackgroundColor:string= "all";
  workspaceTheme:string= "all";
  colorPallete:string= "all";
  field:object;
  statusMessage={};
   //for toast
   @ViewChild('defaulttoast',{static:true})
   public toastObj: ToastComponent;
   @ViewChild('toastBtnShow',{static:true})
   public btnEleShow: ButtonComponent;
   public position={};

  constructor(
    injector:Injector,
    private fb: FormBuilder,public displaySettingService:DisplaySettingsService) { super(injector);}

  ngOnInit(): void {

    this.position=this.test.position;
    this.createForm();
    this.getThemeColorList();
    this.getdisplaySetting();
  }
  createForm() {
    this.DisplaySettings = this.fb.group({
      workspaceDisplayMode: ['Browser based',Validators.required],
      workspaceLogo: ['image'],
      logoBackgroundColor: ['#57C1AC'],
      workspaceTheme: ['Select Theme',Validators.required],
      colorPallete: ['#73ADD9'],
    });
}
getThemeColorList()
{debugger
  this.displaySettingService.getThemeColorList().subscribe((data: any)=>{
    debugger
    if(data.length  > 0){
      this.workspaceThemeColor = data; 
       this.field = { dataSource: this.workspaceThemeColor,text:'dropdownText',value:'dropdownValue'};
      }
  })
}
SaveConfig(data:DisplaySettingsModel){
  debugger
  data.userId = this.clientDetailService.getuserID();
  data.workSpaceId=this.clientDetailService.getWorkspaceID();
  data.CLIENT_ID = this.clientDetailService.getClientID();
  data.ClientTime = this.clientDateTimeService.getCilentTime();
  data.ClientDate = this.clientDateTimeService.getCilentDate();
  data.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
  this.displaySettingService.saveDisplaySettings(data).subscribe((data:any) => {
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
  });
}

getdisplaySetting(){
  debugger
  this.user_Id = this.clientDetailService.getuserID();
  this.workspace_Id=this.clientDetailService.getWorkspaceID();
  this.Client_Id = this.clientDetailService.getClientID();
  this.displaySettingService.getdisplaySetting(this.user_Id,this.workspace_Id,this.Client_Id).subscribe((data:DisplaySettingsModel[]) => {
      //console.log(data[0].dateFormateType,)
      console.log(data)
      debugger
      this.DisplaySettings.patchValue({
        workspaceDisplayMode:data[0].workspaceDisplayMode,
        workspaceLogo:data[0]. workspaceLogo,
        logoBackgroundColor:data[0].logoBackgroundColor,
        workspaceTheme:data[0].workspaceTheme,
        colorPallete:data[0].colorPallete,
     
    })
  });

}
    


}
