import { Component, OnInit ,ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { isNullOrUndefined } from 'util';
import {FormControl, FormGroup,  FormBuilder,  Validators ,ReactiveFormsModule, CheckboxRequiredValidator} from '@angular/forms';
import { ConnectorName } from '../EnumForConnectorList';
import { map } from 'rxjs/operators';
import { StringDecoder } from 'string_decoder';
import { componentDictionary } from 'src/app/utils/DictionaryMapping';
import { SourceAccount, updatesourceaccountStep2 } from 'src/app/models/extract/access-microsoft-sqlserver';
import { ConnectionPagesDirective } from 'src/app/shared/directives/connection-pages.directive';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { NewConnectionSetupService } from 'src/app/services/extract/ConnectorService/new-connection-setup.service';
import { WizardControls } from 'src/app/services/extract/WizardControlsFromServices';
import { UpdateConnectorPages } from 'src/app/services/extract/ConnectorService/UpdateConnectorPages';
import { Router } from '@angular/router';
import { EstablishConnector } from 'src/app/services/extract/EstablishConnectorSave';
import { SqlConnector } from "src/app/services/extract/ConnectorService/SqlConnectorServices";
import { googleoauth } from 'src/app/services/Enrich/googleOauthToken';


   


@Component({
  selector: 'app-datastream-sql',
  templateUrl: './datastream-sql.component.html',
  styleUrls: ['./datastream-sql.component.css']
})
export class DatastreamSqlComponent implements OnInit {

  
  ComponentDictionary=new componentDictionary();
  AuthorizationAreaHide=false;
  step2update=new updatesourceaccountStep2();
  SourceAccountModel=new SourceAccount();
  UpdateSourceAccountLst:updatesourceaccountStep2[]=[];
  AccountSourceButtom:string="Save And Next";
  AuthurizeStatus:string="";
  SourceAccountForm: FormGroup;
  EmailAuthurizationtextarea=false;
  EmailAuthurizationTextAreaMsg:string="";
  checked="";
  value:string="";
  _component: any;
  selector:any;
  Acount_id=localStorage.getItem("value");
  componentsList = [];
  windowurl :Window;
   @ViewChild(ConnectionPagesDirective , { static: true }) tabHost: ConnectionPagesDirective;
 constructor(
  private viewContainerRef:ViewContainerRef,
  public sourceAccountSettup:SourceAccountSettup,
  private componentFactoryResolver:ComponentFactoryResolver,
   public NewConnection:NewConnectionSetupService,
   private SqlConnector: FormBuilder,
   public _SqlConnector:SqlConnector,
    public _WizardService:WizardControls,
    public _updateSourceAccount:UpdateConnectorPages,
    private router: Router,
    public establishConnectorServic:EstablishConnector,
  
      ) {
 
    this.getConnetorTableList();
  }
  ngOnInit():void {
    debugger
    
  // var Acount_id=localStorage.getItem("value");
    this._WizardService.SourceAccountClass="css-skkt0a";
    this._WizardService.TempleteAccountWizard=true;
    this._WizardService.SourceObjectWizard=true;
    this._WizardService.FilterWizzard=true;
    this._WizardService.FilterSelectionWizard=true;
    this._WizardService.ExecitionPlanWizard=true;
    this._WizardService.ExtractWizard=true;

  if(this.Acount_id==null)
  {
    this.AccountSourceButtom="Save And Next";
    this.SourceAccountModel.Email=null;
    this.SourceAccountModel.AccountAuthurization="Firsttimeforconnection";
    this.SourceAccountModel.EnableConnectoins=true;
    
    this.SourceAccountModel.AccountName=null;
   this.sourceAccountSettup.Hostname="192.168.223.111";
   this.sourceAccountSettup.Database=null;
   this.sourceAccountSettup.Username=null;
   this.sourceAccountSettup.Password=null;
   this.sourceAccountSettup.PortNumber=null;
  }
  else{
   this.ControlEditDataOnRefreshPage();
   this.geteditmode();

  }
  
   this.getSelectedConnectorComponent();
     this.getConnetorTableList();
     
       
   }
   dataFromChild;
   eventFromChild(data) {
     debugger
    this.dataFromChild = data;
  }
     
  AddEmialForAuthorize() { 
    debugger
    var Email=(<HTMLInputElement>document.getElementById('Email')).value;
 var AccountAuthurization = (<HTMLInputElement>document.querySelector('input[name = AccountAuthurization]:checked')).value;
    var UserData={
       Email,
      AccountAuthurization
    }
    debugger
     if(Email!=""){
      this.NewConnection.EmailAuthorization(Email,AccountAuthurization).subscribe((data:any)=>{
        debugger
         
           if(data.item2 !="0"){
             this.EmailAuthurizationtextarea=true;
             this.EmailAuthurizationTextAreaMsg=data.item2.trim();
              this.checked="checked";
           }
           
      })
     }
    }  
  getSelectedConnectorComponent(){
    debugger
    var nameOfComponent=localStorage.getItem('ConnectorName');
    var connectortitle=localStorage.getItem("Connectortitle");
    this.selector=this.ComponentDictionary.getComponent(connectortitle);
    this.loadTabComponent(this.selector);
 }
getConnetorTableList(){
  debugger
  var UserId="Admin";
  var Workspaceid="1";
  var Clientid="1002";
  var ConnectorId="214";
  this._SqlConnector.GetAllConnectionList(UserId,Workspaceid,Clientid,ConnectorId);
}
 

loadTabComponent(_selectedTab) {
  debugger
  // remove loaded Component
  if (!isNullOrUndefined(this.componentsList)) {
    this.componentsList.map((cm, i) => {
      let tmp = this.viewContainerRef;
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(cm));
      this.viewContainerRef.remove(i);
      this.componentsList.splice(i, 1);
    });
  }

  // this._component = "";
  // if (_selectedTab == ConnectorName.Sqlserver)
  //   this._component =SetupNewConnectionComponent;
  //   else if(_selectedTab=="MongoDB")
  //   this._component =MongoDbComponent;
   
  

  this.viewContainerRef.detach();
  this.viewContainerRef.clear();
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_selectedTab);
  this.viewContainerRef = this.tabHost.viewContainerRef;

  let componentRef = this.viewContainerRef.createComponent(componentFactory);
  this.componentsList.push(componentRef);
}

ValidateEmail(mail) {
debugger
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}
}

SaveallDataFroScreen1(UserData:SourceAccount){
  debugger
 var  workspacename="Default";
 if(UserData.Email==undefined)
 {
   UserData.Email="";
 }
 if(UserData.AccountAuthurization==undefined){
   UserData.AccountAuthurization="";
 }
  var obj={
     "AccountDisplayName":UserData.AccountName,
     "EnableConnectoins":UserData.EnableConnectoins,
   
     "Email":UserData.Email,
     "AccountAuthurization":UserData.AccountAuthurization,
     "Workspace":workspacename
          }
     this.establishConnectorServic.SaveAllData(obj);
 

 
  
  
}
ReversClass(){
  this._WizardService.SourceAccountDisable=true;
 this._WizardService.ConnectionTypeWizardClass="css-Connectorwizard"
  // this._WizardService.TempleteWizardClass='css-11p48i9';
  this.router.navigate(['extract/AddnewDataStream/SelectType']);

}
geteditmode(){
  debugger
  this.AccountSourceButtom="Update And Next";
  let resultkeyname = this._updateSourceAccount.UpdateSourceAccountLst.map(a => a.filedname);
  let resultkeyvalue = this._updateSourceAccount.UpdateSourceAccountLst.map(a => a.fieldvalue);
  this.SourceAccountModel.Email=this._updateSourceAccount.UpdateSourceAccountLst.map(a=>a.emailid)[0];
  this.SourceAccountModel.AccountAuthurization=this._updateSourceAccount.UpdateSourceAccountLst.map(a=>a.authorizationgrant)[0];
  this.SourceAccountModel.EnableConnectoins=this._updateSourceAccount.UpdateSourceAccountLst.map(a=>a.enableconnection)[0];
   
  this.SourceAccountModel.AccountName=this._updateSourceAccount.UpdateSourceAccountLst.map(a=>a.accountdisplayname)[0];
 this.sourceAccountSettup.Hostname=resultkeyvalue[1];
 this.sourceAccountSettup.Database=resultkeyvalue[0];
 this.sourceAccountSettup.Username=resultkeyvalue[3];
 this.sourceAccountSettup.Password=resultkeyvalue[2];
 this.sourceAccountSettup.PortNumber=resultkeyvalue[4];

}
 ControlEditDataOnRefreshPage(){
  var UserId="Admin";
  var Workspaceid="1";
  var Clientid="1002";
  var ConnectorId="214";
  this._updateSourceAccount.RefreshSourceAccountEditMode(this.Acount_id,UserId,Workspaceid,Clientid,ConnectorId).subscribe((data:updatesourceaccountStep2[])=>{
    debugger
    if(data.length > 0){
      this.AccountSourceButtom="Update And Next";
       this.UpdateSourceAccountLst=data;
       let resultkeyvalue = this.UpdateSourceAccountLst.map(a => a.fieldvalue);
       this.SourceAccountModel.Email=this.UpdateSourceAccountLst.map(a=>a.emailid)[0];
       this.SourceAccountModel.AccountAuthurization=this.UpdateSourceAccountLst.map(a=>a.authorizationgrant)[0];
       this.SourceAccountModel.EnableConnectoins=this.UpdateSourceAccountLst.map(a=>a.enableconnection)[0];
      
       this.SourceAccountModel.AccountName=this.UpdateSourceAccountLst.map(a=>a.accountdisplayname)[0];
      this.sourceAccountSettup.Hostname=resultkeyvalue[1];
      this.sourceAccountSettup.Database=resultkeyvalue[0];
      this.sourceAccountSettup.Username=resultkeyvalue[4];
      this.sourceAccountSettup.Password=resultkeyvalue[2];
      this.sourceAccountSettup.PortNumber=resultkeyvalue[3];


  }
  });
 }
  
}
