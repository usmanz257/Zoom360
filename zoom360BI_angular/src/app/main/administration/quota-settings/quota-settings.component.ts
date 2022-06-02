import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { QuotaSettingsModel } from 'src/app/Models/mainmenu.model';
import { QuotaSettingsService } from 'src/app/Services/administration/quota-settings.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-quota-settings',
  templateUrl: './quota-settings.component.html',
  styleUrls: ['./quota-settings.component.css']
})
export class QuotaSettingsComponent   extends AppComponentBase implements OnInit {
  QuotaSettings: FormGroup;
  //for toast
  public test=new ToastMessage();
  @ViewChild('defaulttoast',{static:true})
  public toastObj: ToastComponent;
  @ViewChild('toastBtnShow',{static:true})
  public btnEleShow: ButtonComponent;
  public position;
//toast end

  userId:string='';
  workSpaceId:string='';
  clientId:string='';
  statusMessage={};
  constructor(
    injector:Injector,
    private fb: FormBuilder,public quotaService:QuotaSettingsService) { super(injector);}

  ngOnInit(): void {
    this.position=this.test.position;
    this.createForm();
    this.getQuotaSetting();
  }
  createForm() {
    this.QuotaSettings = this.fb.group({
      quotaLimit: [null,Validators.required],
      quotaType: ['Source Rows Count'],
      quotaUsageCycle: ['Daily Usage'],
      quotaStartDate: ['',Validators.required],
      quotaEndDate: ['',Validators.required],
    });
}
getQuotaSetting(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workSpaceId=this.clientDetailService.getWorkspaceID();
  this.clientId = this.clientDetailService.getClientID();
  this.quotaService.getQuotaSetting(this.userId,this.workSpaceId,this.clientId).subscribe((data:any[]) => {
      debugger
      this.QuotaSettings.patchValue({

        quotaLimit:data[0].quotaLimit,
        quotaType:data[0].quotaType,
        quotaUsageCycle:data[0].quotaUsageCycle,
        quotaStartDate:data[0].quotaStartDate,
        quotaEndDate:data[0].quotaEndDate, 

    })
  });
  console.log('Form Value', this.QuotaSettings.value)

}
  SaveConfig(data:QuotaSettingsModel){
    data.userId = this.clientDetailService.getuserID();
    data.workSpaceId=this.clientDetailService.getWorkspaceID();
    data.clientId = this.clientDetailService.getClientID();
    data.ClientTime = this.clientDateTimeService.getCilentTime();
    data.ClientDate = this.clientDateTimeService.getCilentDate();
    data.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
    this.quotaService.saveQuotaSetting(data).subscribe((data:any) => {
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
  }}

  
