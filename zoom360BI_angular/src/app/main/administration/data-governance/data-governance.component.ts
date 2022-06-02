import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { ButtonComponent } from 'ej-angular2';
import { DataGovernanceModel } from 'src/app/Models/mainmenu.model';
import { DataGovernanceService } from 'src/app/services/administration/data-governance.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { ToastMessage } from '../MessageTypes/toast-message';

@Component({
  selector: 'app-data-governance',
  templateUrl: './data-governance.component.html',
  styleUrls: ['./data-governance.component.css']
})
export class DataGovernanceComponent  extends AppComponentBase implements OnInit {
  DataGovernance : FormGroup;
     //for toast
     public test=new ToastMessage();
     @ViewChild('defaulttoast',{static:true})
     public toastObj: ToastComponent;
     @ViewChild('toastBtnShow',{static:true})
     public btnEleShow: ButtonComponent;
   public position;
   userId:string='';
  workSpaceId:string='';
  clientId:string='';
  constructor(
    injector:Injector,
    private fb: FormBuilder,public dataGovernanceService:DataGovernanceService) { super(injector);}
  ActiveSourceLocation:any[]=[];
  Workspaces:any[]=[];
  ActiveDestinationLocation :any[]=[];
  PassiveDestinationLocation:any[]=[];
  field:object;
  statusMessage={};
  ngOnInit(): void {
    this.position=this.test.position;
    this.createForm();
    this.getDropDowns();
    this.getDataGovernanceSetting();
  }
  createForm() {
    this.DataGovernance = this.fb.group({
      schemaMode: ['Data Tap schema mode'],
      childWorkspaceInheritance: ['Full inheritance'],
      workspaceShareData: ['Can share data'],
      outOffAppWebShareData: ['Can share data'],
      outOffApiShareData: ['Can share data'],
      rawDataStagging: ['Use stagging server to process source data'],
      staggingStorageLocationType: ['CSV only'],
      staggingRetentionDays: [0],
      activeSourceLocation: ['Active Source Location'],
      destinationWorkspace: ['Destination Workspace'],
      activeDestinationLocation:['Active Destination Location'],
      passiveDestinationLocation:['Passive Destination Location'],
      dataCollectionType:['Full Data Snapshot'],
      overrideDataSnapshot:[false],
      dataStorage:['Truncate existing data'],
      dataDestination:['Destination table is mandatory for source data'],
      overrideDataStorage:[false],
      destinationRetentionDays:[0]
    });
  }
  getDropDowns(){
    this.dataGovernanceService.getActiveSourceLoactionList().subscribe((data: any) => {
      this.ActiveSourceLocation = data; if(data.length  > 0){
        this.ActiveSourceLocation = data; 
         this.field = { dataSource: this.ActiveSourceLocation,text:'dropdownText',value:'dropdownValue'};
        }      
  });
  this.dataGovernanceService.getWorkspacesList().subscribe((data: any) => {
   if(data.length  > 0){
      this.Workspaces = data; 
       this.field = { dataSource: this.Workspaces,text:'dropdownText',value:'dropdownValue'};
      }       
  });
  this.dataGovernanceService.getActiveDestinationLocationList().subscribe((data: any) => {
    if(data.length  > 0){
      this.ActiveDestinationLocation = data; 
       this.field = { dataSource: this.ActiveDestinationLocation,text:'dropdownText',value:'dropdownValue'};
      }       
});
this.dataGovernanceService.getPassiveDestinationLocationList().subscribe((data: any) => {
  if(data.length  > 0){
    this.PassiveDestinationLocation = data; 
     this.field = { dataSource: this.PassiveDestinationLocation,text:'dropdownText',value:'dropdownValue'};
    }       
});
  }
  getDataGovernanceSetting(){
    debugger
    this.userId = this.clientDetailService.getuserID();
    this.workSpaceId=this.clientDetailService.getWorkspaceID();
    this.clientId = this.clientDetailService.getClientID();
    this.dataGovernanceService.getDataGovernance(this.userId,this.workSpaceId,this.clientId).subscribe((data:any[]) => {
        debugger
        this.DataGovernance.patchValue({

          schemaMode:data[0].schemaMode,
          childWorkspaceInheritance:data[0].childWorkspaceInheritance,
          workspaceShareData:data[0].workspaceShareData,
          outOffAppWebShareData:data[0].outOffAppWebShareData,
          outOffApiShareData:data[0].outOffApiShareData,
          rawDataStagging:data[0].rawDataStagging,
          staggingStorageLocationType:data[0].staggingStorageLocationType,
          staggingRetentionDays:data[0].staggingRetentionDays,
          activeSourceLocation:data[0].activeSourceLocation,
          destinationWorkspace:data[0].destinationWorkspace,
          activeDestinationLocation:data[0].activeDestinationLocation,
          passiveDestinationLocation:data[0].passiveDestinationLocation,
          dataCollectionType:data[0].dataCollectionType,
          overrideDataSnapshot:data[0].overrideDataSnapshot,
          dataStorage:data[0].dataStorage,
          dataDestination:data[0].dataDestination,
          overrideDataStorage:data[0].overrideDataStorage,
          destinationRetentionDays:data[0].destinationRetentionDays,
      })
    });
    console.log('Form Value', this.DataGovernance.value)
  
  }
    SaveConfig(data:DataGovernanceModel){
      data.userId = this.clientDetailService.getuserID();
      data.workSpaceId=this.clientDetailService.getWorkspaceID();
      data.CLIENT_ID = this.clientDetailService.getClientID();
      data.ClientTime = this.clientDateTimeService.getCilentTime();
      data.ClientDate = this.clientDateTimeService.getCilentDate();
      data.ClientTimeZone = this.clientDateTimeService.getClientTimeZone();
      this.dataGovernanceService.saveDataGovernance(data).subscribe((data:any) => {
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
