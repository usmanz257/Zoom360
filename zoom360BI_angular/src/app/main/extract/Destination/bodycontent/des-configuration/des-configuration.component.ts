import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { SourceAccount } from 'src/app/models/extract/access-microsoft-sqlserver';
import { SourceAccountSettup } from 'src/app/services/extract/AddNewConnectionServices/SourceAccountSettup';
import { AddNewConnectoinWizardStyle } from 'src/app/services/extract/AddNewConnectionWizardStyle';
import { Destinationservices } from 'src/app/services/extract/destination/destinationservice';
import { Destination } from 'src/app/services/extract/destination/wizard-services';
import { ConnectionPagesDirective } from 'src/app/shared/directives/connection-pages.directive';
import { componentDictionary } from 'src/app/utils/DictionaryMapping';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-des-configuration',
  templateUrl: './des-configuration.component.html',
  styleUrls: ['./des-configuration.component.css']
})
export class DesConfigurationComponent implements OnInit {
  _component: any;
  componentsList = [];
  buttonDisabled=true;
  EmailAuthorizationStaus=false;
  EmailAuthurizationtextarea=false;
  EmailAuthurizationTextAreaMsg:string="";
  SourceAccountModel=new SourceAccount();
  EmailAuthurizationArea=true;
  SettupNewConnection=false;
  ComponentDictionary=new componentDictionary();
  savebtn=false;
  workspacedropdownlist:any[]=[];
  imgname:string;
  // @ViewChild(LoadConnectorsDirective , { static: true }) tabHost: LoadConnectorsDirective;
  @ViewChild(ConnectionPagesDirective , { static: true }) tabHost: ConnectionPagesDirective;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
     private router: Router,
     public sourceAccountSettup:SourceAccountSettup,
     public addNewConnectoinWizardStyle:Destination,
     private destinationservices:Destinationservices
    
  ) {
    this.imgname=localStorage.getItem('src');

  }

  ngOnInit(): void {
   this.getWorspaceDropdown()
   this.GetSelectedComponent()
  }
  ReversClass(){
     

    this.addNewConnectoinWizardStyle.SourceAccountClass="AddNewConnectionSourcewizard"
    this.addNewConnectoinWizardStyle.ConfiguureWizard=true;
    this.router.navigate(['extract/destination/Template']);
  
  }
   
  ShowSettupNewConButton(){
    this.EmailAuthurizationArea=false;
    this.SettupNewConnection=true;
  }
  ShowEmailAuthorization(){
    this.EmailAuthurizationArea=true;
    this.SettupNewConnection=false;
  }
  GetSelectedComponent(){
      debugger
     var nameOfComponent=JSON.parse(localStorage.getItem('ConnectorName'));
    var idOfComponent=JSON.parse(localStorage.getItem('Connectorid'));
    var Coonectortitle=localStorage.getItem("Connectortitle");

    this._component=this.ComponentDictionary.getComponent(Coonectortitle);
    
         
         
    if(nameOfComponent=="FileComponent"){
       this.savebtn=true;
     }
     if(nameOfComponent=="Socialmedia"){
      this.savebtn=true;
    }
     
    if(this._component!=undefined){
      this.loadTabComponent(this._component);

    }
    
  }
  loadTabComponent(_selectedTab) {
    debugger
     if (!isNullOrUndefined(this.componentsList)) {
      this.componentsList.map((cm, i) => {
        let tmp = this.viewContainerRef;
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(cm));
        this.viewContainerRef.remove(i);
        this.componentsList.splice(i, 1);
      });
    }

     

    this.viewContainerRef.detach();
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_selectedTab);
    this.viewContainerRef = this.tabHost.viewContainerRef;

    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentsList.push(componentRef);
  }

  getWorspaceDropdown(){
    debugger
    var UserId='admin';
    var DropdownType='workspace'
    debugger
    this.sourceAccountSettup.SourceAccountSettup(UserId,DropdownType).subscribe((data:any)=>{
      debugger
      if(data.length > 0){
      this.workspacedropdownlist=data;
    }
    });
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
     
    }  
    SaveAuthorizData(SourceAccountSettupData:SourceAccount){
    debugger
    if(SourceAccountSettupData.Email!=undefined){
      this.sourceAccountSettup.SourceAccountSettupEmailAuthorization(SourceAccountSettupData).subscribe((data:any)=>{
        debugger
            this.EmailAuthurizationtextarea=true;
             this.EmailAuthurizationTextAreaMsg=data.trim();
            //  this.router.navigate(['/extract/destination/ViewdataSummary']);

      })
    }
     }

     SaveCredential(){
       this.destinationservices.Savedbcredentials();
     }

}
