import { Component, OnInit,  ViewEncapsulation, Inject, ViewChild, HostListener, ElementRef, Injector} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencySetupModel } from 'src/app/Models/mainmenu.model';
import { CurrencySetupService } from 'src/app/services/administration/currency-setup.service';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ToastComponent, ToastCloseArgs, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';
import { ToastMessage } from '../MessageTypes/toast-message';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { AppComponentBase } from 'src/app/services/AppComponentBase';


@Component({
  selector: 'app-currency-setup',
  templateUrl: './currency-setup.component.html',
  styleUrls: ['./currency-setup.component.css']
})
export class CurrencySetupComponent extends AppComponentBase implements OnInit {
  public test=new ToastMessage();
  [x: string]: any;
  currentImageName:string;
  CurrencySetup: FormGroup;
  SetCurrency : boolean=false;
  field:object;
  label:any[]=[];
  label2:any[]=[];
  public value:string;
  VALUE1: string='Show_sign';
  _CurrencyTypeDropdown:dropdownModel[]=[];
  selectedValue:string;
  //for toast
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position;
	public btnEleShow: ButtonComponent;
  userId:string='';
  workSpaceId:string='';
  CLIENT_ID:string='';
  statusMessage={};
  constructor(
    injector:Injector,
    private fb: FormBuilder,public currencyService:CurrencySetupService) 
      { super(injector);}

  ngOnInit(): void {
    // this.currencyService.getCurrencyTypeList();
    this.position=this.testToast.position;
    this.getdropdown();
    this.radiobtnTest();
    this.radiobtn2();
    this.createForm();
    this.getDafaults();
  }
  getDafaults(){
    debugger
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.CLIENT_ID = this.clientDetailService.getClientID();
    this.currencyService.getCurrencySetupSetting(this.userId,this.workSpaceId,this.CLIENT_ID).subscribe((data:CurrencySetupModel)=>{
     this.CurrencySetup.patchValue({ 
      currencyType : data[0].currencyType,
      currenceyTypeSign: data[0].currenceyTypeSign,  
      currencyImage: data[0].currencyImage,
      currencyCollectedData:data[0].currencyCollectedData,
      currencyPrepareData: data[0].currencyPrepareData,
      currencyPresentingData:data[0].currencyPresentingData,
      currencyConversion: data[0].currencyConversion,
      exchangeRateAndDataConversion: data[0].exchangeRateAndDataConversion,
      currencyReportHeaders: data[0].currencyReportHeaders,
      currencyVisulization: data[0].currencyVisulization,
      currencyValue: data[0].currencyValue,
      currencyApplyAndEnforce :data[0].currencyApplyAndEnforce
    
    });
    
    if (data[0].currencyType=='Do not use any default currency'){
     this. showCurrencyType(true)
  }
    else{
    this.SetCurrency= false;
    }
   
    });
  }
  onFileChange(event) {
    
    let reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(event.target.files[0].name);
      this.currencyService.currencyImage=event.target.files[0].name;
      reader.readAsDataURL(file);
      
    }
  }
  
  createForm() {
    this.CurrencySetup = this.fb.group({
      currencyType: ['Use default currency for currency type data', Validators.required ],
      currenceyTypeSign: ['', Validators.required],
      currencyImage: ['', Validators.required ],
      currencyCollectedData: [false, Validators.required ],
      currencyPrepareData: [false, Validators.required ],
      currencyPresentingData: [false, Validators.required ],
      currencyConversion: [false, Validators.required ],
      exchangeRateAndDataConversion: [false, Validators.required ],
      currencyReportHeaders: ['Show sign', Validators.required ],
      currencyVisulization: ['Show sign', Validators.required ],
      currencyValue: ['Show sign', Validators.required ],
      currencyApplyAndEnforce : [null, Validators.required]
    });
  }
  showCurrencyType(value){
  
    this.SetCurrency= value;
    if(value==false){
      this.CurrencySetup.patchValue({currenceyTypeSign:''});
    }
    
  }

SaveConfig(UserData:CurrencySetupModel){
  debugger
  console.log(this.VALUE1);
  // UserData.currenceyTypeSign=this.selectedValue;
  UserData.userId = this.clientDetailService.getuserID();
  UserData.workSpaceId=this.clientDetailService.getWorkspaceID();
  UserData.CLIENT_ID = this.clientDetailService.getClientID();
  UserData.ClientTime = this.clientDateTimeService.getCilentTime();
  UserData.ClientDate = this.clientDateTimeService.getCilentDate();
  UserData.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
  this.currencyService.saveWorkSpaceSetup(UserData).subscribe((data:any) => {
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

 getdropdown(){ 
  debugger
      this.currencyService.getCurrencyTypeList()
      .subscribe((data:any[]) => {
        if(data.length  > 0){
          this._CurrencyTypeDropdown = data;
           this.field = { dataSource: this._CurrencyTypeDropdown,text:'dropdownText',value:'dropdownValue'};
          }
       
    });
   }
   public radiobtnTest(){
     this.label=[
       {catagory:"currencyReportHeaders",items:['Show sign','Do not show']},
     ];
    
   }
   public radiobtn2(){
    this.label2=[
      {catagory1:"currencyVisulization",items:['Show sign','Do not show']},
     ]
   }
   }
  


