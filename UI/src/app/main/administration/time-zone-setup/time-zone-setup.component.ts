import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { TimeZoneSetupModel } from 'src/app/Models/mainmenu.model';
import { TimeZoneSetupService } from 'src/app/Services/Administration/time-zone-setup.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-time-zone-setup',
  templateUrl: './time-zone-setup.component.html',
  styleUrls: ['./time-zone-setup.component.css']
})
export class TimeZoneSetupComponent extends AppComponentBase implements OnInit {
  public test=new ToastMessage();
   //for toast
   public testToast=new ToastMessage();
   @ViewChild('defaulttoast',{static:true})
   public toastObj: ToastComponent;
   @ViewChild('toastBtnShow',{static:true})
   public position;
   public btnEleShow: ButtonComponent;
  TimezoneSetup: FormGroup;
  Status_message: string;
  userId:string='admin';
  workSpaceId:string="11";  
  CLIENT_ID:string="1003";
  SHOWVLAU:string="select from this";
  statusMessage={};
  _TimeFormatDropdown: any[]=[];
  field:object;
   _DateFormatDropdown: any[]=[];
  DateFormatDropdown: any;
  constructor(
    injector:Injector,
    private fb: FormBuilder,public timeZoneService:TimeZoneSetupService) { super(injector);}
  DATE_FORMAT_TYPE_toggle:boolean=false;
  dataFormatTypeToggle:boolean=false;
  timeZoneToggle:boolean=false;
  dateFormatReportsToggle:boolean=false;
  dateFormatVisulizationToggle:boolean=false;
  timeFormatReportsToggle:boolean=false;
  timeFormatVisualizationToggle:boolean=false;
  ngOnInit(): void {
    this.position=this.testToast.position;
    this.getDateDropDown();
    this.getTimeDropDown();
     this.getTimeZoneSetupSetting();
     this.createForm();
     this.timeZoneService.SaveConfig();
     this.timeZoneService.getDateFormatList();
     this.timeZoneService.getTimeFormatList();
     
     
  }
  createForm() {
    this.TimezoneSetup = this.fb.group({
      dataFormatType: ['Use default date format for date type data', Validators.required ],
      dateFormat: ['', Validators.required ],
      clockImage: ['', Validators.required ],
      dateCollectedData: [false, Validators.required ],
      datePreparingData: [false, Validators.required ],
      datePresentingData: [false, Validators.required ],
      dateConversion: [false, Validators.required ],
      dateConversionValue: [false, Validators.required ],
      timeZone: ['Use Default time zone', Validators.required ],
      timeZoneType: ['', Validators.required ],
      dateFormatReports: ['Do not show date formats', Validators.required ],
      reportsDate : ['', Validators.required],
      dateFormatVisulization: ['Do not show date formats', Validators.required ],
      visulizationDate: ['', Validators.required ],
      timeFormatReports: ['Do not show time formats', Validators.required ],
      reportTime : ['', Validators.required],
      timeFormatVisualization: ['Do not show time formats', Validators.required ],
      visualizationTime: ['', Validators.required ],
      applyAndEnforceDatetime : ['All child workspaces', Validators.required]
    });
}

SaveConfig(TimeZoneData: TimeZoneSetupModel){
  TimeZoneData.userId = this.clientDetailService.getuserID();
  TimeZoneData.workSpaceId=this.clientDetailService.getWorkspaceID();
  TimeZoneData.CLIENT_ID = this.clientDetailService.getClientID();
  TimeZoneData.ClientTime = this.clientDateTimeService.getCilentTime();
  TimeZoneData.ClientDate = this.clientDateTimeService.getCilentDate();
  TimeZoneData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();

  this.timeZoneService.saveWorkSpaceSetup(TimeZoneData).subscribe( (data:any) => {
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



onFileChange(event) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    console.log(event.target.files[0].name);
    this.timeZoneService.timeZoneImage=event.target.files[0].name;
    reader.readAsDataURL(file);
    // reader.onload = () => {
    //   // this.formGroup.patchValue({
    //   //   file: reader.result
    //   // });
      
    //   // need to run CD since file load runs outside of zone
    //   //this.cd.markForCheck();
    // };
  }
}
//1
setdateFormatVisible(value){
  this.dataFormatTypeToggle= value;
  if(value==false){
    this.TimezoneSetup.patchValue({dateFormat:''});
  }
}
//2
setTimeZoneVisible(value){
  this.timeZoneToggle= value;
  if(value==false){
    this.TimezoneSetup.patchValue({timeZoneType:''});
  }
}
//3
setdateFormatReports(value){
  this.dateFormatReportsToggle= value;
  if(value==false){
    this.TimezoneSetup.patchValue({reportsDate:''});
  }
}
//4
setdateFormatVisulization(value){
  this.dateFormatVisulizationToggle= value;
  if(value==false){
    this.TimezoneSetup.patchValue({visulizationDate:''});
  }
}
//5
setTimeFormatReports(value){
  this.timeFormatReportsToggle= value;
  if(value==false){
    this.TimezoneSetup.patchValue({reportTime:''});
  }
}
//6
setTimeFormatVisualization(value){
  this.timeFormatVisualizationToggle= value;
  if(value==false){
    this.TimezoneSetup.patchValue({visualizationTime:''});
  }
}
getTimeZoneSetupSetting(){
  this.userId = this.clientDetailService.getuserID();
  this.workSpaceId=this.clientDetailService.getWorkspaceID();
  this.CLIENT_ID = this.clientDetailService.getClientID();
  this.timeZoneService.getTimeZoneSetupSetting(this.userId,this.workSpaceId,this.CLIENT_ID).subscribe((data:any[])=>{
   this.TimezoneSetup.patchValue({ 
    dataFormatType:data[0].dataFormatType,
    dateFormat:data[0].dateFormat,
    clockImage:data[0].clockImage,
    dateCollectedData:data[0].dateCollectedData,
    datePreparingData:data[0].datePreparingData,
    datePresentingData:data[0].datePresentingData,
    dateConversion:data[0].dateConversion,
    dateConversionValue:data[0].dateConversionValue,
    timeZone:data[0].timeZone,
    timeZoneType:data[0].timeZoneType,
    dateFormatReports:data[0].dateFormatReports,
    reportsDate:data[0].reportsDate,
    dateFormatVisulization:data[0].dateFormatVisulization,
    visulizationDate:data[0].visulizationDate,
    timeFormatReports:data[0].timeFormatReports,
    reportTime:data[0].reportTime,
    timeFormatVisualization:data[0].timeFormatVisualization,
    visualizationTime:data[0].visualizationTime,
    applyAndEnforceDatetime:data[0].applyAndEnforceDatetime,
    bStatus:data[0].bStatus,
    
   
  })

    if (data[0].dataFormatType=='Do not use any default date format'){
        this.setdateFormatVisible(true)
    }
    if (data[0].timeZone=='Do not use default time zone'){
      this.setTimeZoneVisible(true)
  }
  if (data[0].dateFormatReports=='Show date formats'){
    this.setdateFormatReports(true)
}
if (data[0].dateFormatVisulization=='Show date formats'){
  this.setdateFormatVisulization(true)
}
if (data[0].timeFormatReports=='Show time formats'){
  this.setTimeFormatReports(true)
}
if (data[0].timeFormatVisualization=='Show time formats'){
  this.setTimeFormatVisualization(true)
}
  });
}
getDateDropDown(){
  debugger
  this.timeZoneService.getDateFormatList().subscribe((data: any[]) => {
    if(data.length  > 0){
      this._DateFormatDropdown = data; 
       this.field={dataSource:this._DateFormatDropdown,text:'dropdownText',value:'dropdownValue'};
      }
          
});
}
getTimeDropDown(){
  debugger
  this.timeZoneService.getTimeFormatList().subscribe((data: any[]) => {
    if(data.length  > 0){
      this._TimeFormatDropdown = data; 
       this.field={dataSource:this._TimeFormatDropdown,text:'dropdownText',value:'dropdownValue'};
      }
          
});
}


}

