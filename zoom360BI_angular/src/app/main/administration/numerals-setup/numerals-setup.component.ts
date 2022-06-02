import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastComponent, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { NumeralsSetupModel } from 'src/app/Models/mainmenu.model';
import { NumeralsSetupService } from 'src/app/Services/administration/numerals-setup.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-numerals-setup',
  templateUrl: './numerals-setup.component.html',
  styleUrls: ['./numerals-setup.component.css']
})
export class NumeralsSetupComponent extends AppComponentBase implements OnInit {
    //for toast
    public test=new ToastMessage();
    public testToast=new ToastMessage();
    @ViewChild('defaulttoast',{static:true})
    public toastObj: ToastComponent;
    @ViewChild('toastBtnShow',{static:true})
    public position;
    public btnEleShow: ButtonComponent;
userId:string='';
workSpaceId:string='';
clientId:string='';
  numeralsSetup: FormGroup;
  numberingSystemFormatToggle:boolean=false;
  numberValueConversionToggle:boolean=false;
  selectiveRoundOffPlaceToggle:boolean=false;
  signFormat: any;
  statusMessage={};
  Status_message: string;
  constructor(
    injector:Injector,
    private fb: FormBuilder,public numeralsService:NumeralsSetupService) { super(injector);}

  ngOnInit(): void {
    this.position=this.testToast.position;
    this.createForm();
    this.getNumeralSetting();
  }
  createForm() {
    this.numeralsSetup = this.fb.group({
      numberingSystemFormat: ['Show American Format', Validators.required ],
      numberSignType: ['Show Absolute/Un-Signed Number', Validators.required],
      signFormat: ['Default sign: 100 / -100', Validators.required ],
      positiveNumbeColorCode: ['#57C1AC', Validators.required ],
      negitiveNumberColorCode: ['#73ADD9', Validators.required ],
      numberConversion: ['Do not convert, use actual values', Validators.required],
      numberValueConversion: ['Value in Thousand'],
      numberValue: ['Use Actual number value', Validators.required],
      selectiveDecimalPlaces: [1, Validators.required ],
      fullDecimalPlaces: [false, Validators.required ],
      roundOffNumbers: ['Do not round off values', Validators.required ],
      selectiveRoundOffPlace : [1, Validators.required],
      numberApplyAndEnforce : ['All child workspaces', Validators.required]
    });
  }
  getNumeralSetting(){
    debugger
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.clientId = this.clientDetailService.getClientID();
    this.numeralsService.getNUmeralSetting(this.userId,this.workSpaceId,this.clientId).subscribe((data:any[]) => {
        debugger
        this.numeralsSetup.patchValue({

          numberingSystemFormat:data[0].numberingSystemFormat,
          numberSignType:data[0]. numberSignType,
          signFormat:data[0].signFormat,
          positiveNumbeColorCode:data[0].positiveNumbeColorCode,
          negitiveNumberColorCode:data[0].negitiveNumberColorCode,
          numberConversion:data[0].numberConversion,
          numberValueConversion:data[0].numberValueConversion,
          numberValue:data[0].numberValue,
          selectiveDecimalPlaces:data[0].selectiveDecimalPlaces,
          fullDecimalPlaces:data[0].fullDecimalPlaces,
          roundOffNumbers:data[0].roundOffNumbers,
          selectiveRoundOffPlace:data[0].selectiveRoundOffPlace,
          numberApplyAndEnforce:data[0].numberApplyAndEnforce,

      })
      if (data[0].numberSignType=='Show Signed Number'){
        this.showSignFormat(true,data[0].signFormat)
      }
      if (data[0].numberConversion=='Convert values before show'){
        this.shownumberValueConversion(true,data[0].numberValueConversion)
      }
    });
    console.log('Form Value', this.numeralsSetup.value)
  
  }
  showSignFormat(toggle,value){
    this.numberingSystemFormatToggle= value;
    if(toggle==false){
      this.numeralsSetup.patchValue({signFormat:value});
    }
    else{
      this.numeralsSetup.patchValue({signFormat:value});
    }
  }
  shownumberValueConversion(toggle,value){
    this.numberValueConversionToggle= toggle;
    if(toggle==false){
      this.numeralsSetup.patchValue({numberValueConversion:value});
    }
    else{
      this.numeralsSetup.patchValue({numberValueConversion:value});
    }
  }
  showselectiveRoundOffPlace(value){
    this.selectiveRoundOffPlaceToggle= value;
    if(value==false){
      this.numeralsSetup.patchValue({selectiveRoundOffPlace:''});
    }
    else{
      this.numeralsSetup.patchValue({numberValueConversion:'1'});
    }
  }
  //for toast
  
  SaveConfig(numeralsData:NumeralsSetupModel){
    debugger
    numeralsData.userId = this.clientDetailService.getuserID();
    numeralsData.workSpaceId=this.clientDetailService.getWorkspaceID();
    numeralsData.clientId = this.clientDetailService.getClientID();
    numeralsData.ClientTime = this.clientDateTimeService.getCilentTime();
    numeralsData.ClientDate = this.clientDateTimeService.getCilentDate();
    numeralsData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
    this.numeralsService.saveNumeralsSetup(numeralsData).subscribe((data:any) => {
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