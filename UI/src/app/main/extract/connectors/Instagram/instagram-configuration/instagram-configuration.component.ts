import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { instConfigSave_Model } from 'src/app/Models/mainmenu.model';

import { SourceListModel } from 'src/app/Models/connect.model';
import { SourceConnectionSettingModel } from 'src/app/Models/SourceSettings.Model';
import { InstagramConfigurationService } from 'src/app/Services/Instagram/instagram-configuration.service';
import { GetDataStreamService } from 'src/app/Services/extract/get-data-stream.service';
@Component({
  selector: 'app-instagram-configuration',
  templateUrl: './instagram-configuration.component.html',
  styleUrls: ['./instagram-configuration.component.css']
})
export class InstagramConfigurationComponent implements OnInit {
  instaConfigForm: FormGroup;
  sourcedata: SourceListModel[]=[];
  workspaceName:string=null;
  connectionName:string=null;
  sourceName:string=null;
  accessGranted:string=null;
  createdBy:string=null;
  isActive:string=null;
  lastAccessed:string=null;
  destinationEnabled:string=null;
  destinationEnableToggle:boolean=false;
  scheduletoggle:boolean=false;
  sourceConnectorId:string='';
  accountId:string='';
  // selectValue:string='Default';
  // fieldValue:string='Default';
  // ControlLabels=["Workspace","Connection","Report Type","Accounts","Period"];
  constructor(public instaService:InstagramConfigurationService,private fb: FormBuilder,public DataStreamService:GetDataStreamService) {
    
   }

  ngOnInit(): void {
 //this.getDefaultandDesc();
 this.createForm();
 this.getValues();
  }
  createForm() {
    this.instaConfigForm = this.fb.group({
      workspaceName: ['', Validators.required ],
      workSpaceDisplayName: ['', Validators.required ],
      connectionName: ['', Validators.required ],
      destinationEnabled: [this.destinationEnableToggle],
      nextRunScheduled: [this.scheduletoggle],
     
    });
  }
  getValues(){
    this.DataStreamService.getDatastreamsEdit(this.workspaceName,this.connectionName,this.sourceName,this.accessGranted
      ,this.createdBy,this.isActive,this.lastAccessed,this.destinationEnabled,5).subscribe((data: SourceListModel[]) => {
        if(data.length  > 0){
          debugger
          this.sourcedata= data;
          this.sourceConnectorId= data[0].sourceConnectorId;
          this.accountId = data[0].sourceAccountid;
          if(data[0].nextRun='Scheduled'){
            this.scheduletoggle=true;
          }
          else{
            this.scheduletoggle=false;
          }
        if(data[0].destinationEnabled='yes'){
            this.destinationEnableToggle=true;
          }
        else{
            this.destinationEnableToggle=false;
          }

          this.instaConfigForm.patchValue({
            workspaceName: this.sourcedata[0].workspaceName,
            workSpaceDisplayName: this.sourcedata[0].workSpaceDisplayName,
            connectionName: this.sourcedata[0].workspaceName,
            destinationEnabled: this.destinationEnableToggle,
            nextRunScheduled:this.scheduletoggle
           });
        }
    });
  }
  SaveConfig(UserData:SourceConnectionSettingModel){
    debugger
      UserData.connectorId= this.sourceConnectorId;
      UserData.accountId= this.accountId;
      this.instaService.updateSourceConnectionSettings(UserData);
  }
//   getDefaultandDesc(){
//     for(let i=0;i<this.ControlLabels.length;i++)
//     {
//       this.instaService.getDefaultAndDescription(this.ControlLabels[i],i);
//       console.log(this.ControlLabels[i]);
//     }
    
//   }
//   SaveConfig(UserData:instConfigSave_Model[] ) { 
//     debugger
//       console.log(UserData);
//     debugger
//     // var listPropertyNames = Object.keys(UserData);
//     // var listValues = Object.values(UserData);
//     // console.log(this.selectValue);
// //     var labels = document.getElementsByTagName('label');
// // for (var i = 0; i < labels.length; i++) {
// //     if (labels[i].htmlFor != '') {
           
                       
// //     }
// // } 
//     debugger;  
//      var user=UserData;

//    }  

}
