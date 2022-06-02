import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
 
import { DatalabelingList, DataLabelingSaveRecord, DataQualityList } from 'src/app/models/enrich/DataqualityModel';
import { ClientDateTimeService } from 'src/app/services/client-date-time.service';
import { DataQualityService } from 'src/app/services/Enrich/DataQuality';
 
@Component({
  selector: 'app-data-quality',
  templateUrl: './data-quality.component.html',
  styleUrls: ['./data-quality.component.css']
})
export class DataQualityComponent implements OnInit {

  userId:string;
  workspaceid:string;
  clientId:string;
  clientDate:string;
  clientTime:string;
  clientTimeZone:string;
 DataqualityModel:DataQualityList[]=[];
 dataqualitylistrecord:number;
 selectedData:DatalabelingList[]=[];
 dataLabelingSaveRecord=new DataLabelingSaveRecord;
 _workspaces = [
   {dropdownText:'ID',dropdownValue:'id',selected:false},
   {dropdownText:'First Name',dropdownValue:'first_name',selected:true},
   {dropdownText:'Last Name',dropdownValue:'last_name',selected:false},
   {dropdownText:'Phone',dropdownValue:'phone3',selected:false}
  ];
  public mode: string;
  public filterPlaceholder: string;
public fields:Object = { text:'dropdownText',value:'dropdownValue',selected:'selected'};
 public checkWaterMark: string = 'Select countries';
 // set the MultiSelect popup height
  constructor( private dataQualityService:DataQualityService,private clientDateTimeService:ClientDateTimeService) {
    this.userId='admin';
    this.workspaceid='1';
    this.clientId='1002';
    this.clientDate=this.clientDateTimeService.getCilentDate();
    this.clientTime=this.clientDateTimeService.getCilentTime();
    this.clientTimeZone=this.clientDateTimeService.getClientTimeZone();
   }
  ngOnInit(): void {
    this.mode = 'CheckBox';
    this.filterPlaceholder = 'Search countries';
   this.GetDataQualityList();
  }

GetDataQualityList(){
  
  var UserId="admin";
  var Workspace="1";
  var ClientId="1002";
  var FunctionDisplayName=null;
  var functiongroup=null;
  var functiondetail=null;
  var enable =null;
  
 this.dataQualityService.getdataQualityList(UserId,Workspace,ClientId,
  FunctionDisplayName,functiongroup,functiondetail,enable).subscribe((data: any) => {
      debugger
       this.DataqualityModel=data;
       for(let i=0;i<data.length;i++){
        if(this.DataqualityModel[i].enable=="0")
        {
         this.DataqualityModel[i].enable=JSON.parse("false")
        }
        else{
         this.DataqualityModel[i].enable=JSON.parse("true")
        }
      }
       this.dataqualitylistrecord=this.DataqualityModel.length;  
                      
      
  });  
}
Makelist(args,index){
  var result= this.selectedData.findIndex(x=>x.functionName==this.DataqualityModel[index].functoinName);
  if(args.value.length==0){
    this.selectedData.splice(result,1);
  }
  else{
    if(result==-1){
      this.selectedData.push({
        functionName:this.DataqualityModel[index].functoinName,
        functionParameter:'cols',
        parameterValue: args.value.toString()
     });
    }
    else{
      this.selectedData.splice(result,1);
      this.selectedData.push({
        functionName:this.DataqualityModel[index].functoinName,
        functionParameter:'cols',
        parameterValue: args.value.toString()
     });
    }
  }


}
SaveConfiguration(){
  this.dataLabelingSaveRecord.UserId=this.userId;
  this.dataLabelingSaveRecord.Workspaceid=this.workspaceid;
  this.dataLabelingSaveRecord.ClientId=this.clientId;
  this.dataLabelingSaveRecord.ClientDate=this.clientDate;
  this.dataLabelingSaveRecord.ClientTime=this.clientTime;
  this.dataLabelingSaveRecord.ClientTimeZone=this.clientTimeZone;
  this.dataLabelingSaveRecord.DatalabelingList=this.selectedData;
  this.dataQualityService.SaveConfiguration(this.dataLabelingSaveRecord).subscribe((data:any)=>{
  console.log(data);
  });
}

}
