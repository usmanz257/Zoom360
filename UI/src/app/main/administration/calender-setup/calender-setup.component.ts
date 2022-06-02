import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';

import { CalenderSetupModel } from 'src/app/Models/mainmenu.model';
import { CalenderSetupService } from 'src/app/services/administration/calender-setup.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-calender-setup',
  templateUrl: './calender-setup.component.html',
  styleUrls: ['./calender-setup.component.css']
})
export class CalenderSetupComponent extends AppComponentBase implements OnInit {
  public test=new ToastMessage();
   //for toast
   @ViewChild('defaulttoast',{static:true})
   public toastObj: ToastComponent;
   @ViewChild('toastBtnShow',{static:true})
   public btnEleShow: ButtonComponent;
   public position ;
  CalenderSetup: FormGroup;
  userId:string='';
  workSpaceId:string='';
  client_id:string='';
  bussinessYearDateToggle:boolean=false;
  WeekStartDay: any[];
  statusMessage={};
  field:object;
  constructor(
    injector:Injector,
    private fb: FormBuilder,public calenderService:CalenderSetupService) { super(injector);}

  ngOnInit(): void {
    this.position=this.test.position;
    this.createForm();
    this.calenderService.getWeekStarDayList();
     this._getCalenderSetup();
    this.getDropDown();
    
  }
  createForm() {
    this.CalenderSetup = this.fb.group({
      CalenderSetup: ['Apply this calender'],
      bussinessYearDate: [''],
      finacialYearDate: [''],
      reportingYearDate: [''],
      weekStartDay: ['Monday'],
      annualHolidayCalender: [''],
      annualCampaignCalender: [''],
      notifyCampaignsCalender: [false],
      milestoneAnnualHolidayCalender: [''],
      notifyMilestoneCalender: [false],
      calenderApplyAndEnforce:['All child workspaces']
    });
  }
  setbussinessYearDate(value){

  this.bussinessYearDateToggle= value;
  if(value==false){
    this.CalenderSetup.patchValue({bussinessYearDate:''});
  }
}
_getCalenderSetup(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workSpaceId=this.clientDetailService.getWorkspaceID();
  this.client_id = this.clientDetailService.getClientID();
  this.calenderService.getCalenderSetup(this.userId,this.workSpaceId,this.client_id).subscribe((data:CalenderSetupModel) => {
      
      debugger
      this.CalenderSetup.patchValue({
        CalenderSetup:data[0].calenderSetup,
        bussinessYearDate:data[0].bussinessYearDate,
        finacialYearDate:data[0].finacialYearDate,
        reportingYearDate:data[0].reportingYearDate,
        weekStartDay:data[0].weekStartDay,
        annualHolidayCalender:data[0].annualHolidayCalender,
        annualCampaignCalender:data[0].annualCampaignCalender,
        notifyCampaignsCalender:data[0].notifyCampaignsCalender,
        milestoneAnnualHolidayCalender:data[0].milestoneAnnualHolidayCalender,
        notifyMilestoneCalender:data[0].notifyMilestoneCalender,
        calenderApplyAndEnforce:data[0].calenderApplyAndEnforce,
        
        
     
    })
    if (data[0].calenderSetup=='Do not use this calender'){
        this.setbussinessYearDate(true)
    }
  });
}
getDropDown(){
  this.calenderService.getWeekStarDayList().subscribe((data: any[]) => {
    if(data.length  > 0){
      this.WeekStartDay = data; 
       this.field = { dataSource: this.WeekStartDay,text:'dropdownText',value:'dropdownValue'};
      }
          
});
}
  SaveConfig(data:CalenderSetupModel){
    debugger
    data.userId = this.clientDetailService.getuserID();
    data.workSpaceId=this.clientDetailService.getWorkspaceID();
    data.ClientId = this.clientDetailService.getClientID();
    data.ClientTime = this.clientDateTimeService.getCilentTime();
    data.ClientDate = this.clientDateTimeService.getCilentDate();
    data.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
    this.calenderService.saveWorkSpaceSetup(data).subscribe((data:any) => {
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
