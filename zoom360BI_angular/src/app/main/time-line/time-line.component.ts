import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { TimelineModel, WidgetDetailDataModel } from 'src/app/models/TimeLine/TimelineModel';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { TimelineService } from 'src/app/services/Timeline/timeline.service';
import { environment } from 'src/environments/environment';
import { AgGridDataViewerComponent } from '../aiinsights/ag-grid-data-viewer/ag-grid-data-viewer.component';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent extends AppComponentBase implements OnInit {

  @ViewChild('agGridComponent',{static:true})
  public AgGridComponent:AgGridDataViewerComponent;
  gridDisplay:string='display-none';
  widgetsDisplay:string='';
  userId="";  
  workSpaceId=""; 
  client_id=""; 
  widget_Id="";
  userProfileImage:string;
  timeline
  timelinedata
  notification:TimelineModel[];
  widgetdata:WidgetDetailDataModel[];
  constructor(private _timelineService:TimelineService, injector:Injector) { super(injector) }

  ngOnInit() {
    this.userProfileImage=this.storageService.getItem(environment.storage.userProfileImage);
    this.userId=this.storageService.getItem(environment.storage.userId);
    this.workSpaceId=this.storageService.getItem(environment.storage.workspaceId);
    this.client_id=this.storageService.getItem(environment.storage.clientId);
    this.getNotification();
    this.getTimelinedata();
    // this.getTimeLinewidgetData();
  }
getNotification(){
 
this._timelineService.getTimeline(this.userId,this.workSpaceId,this.client_id,'').subscribe((data:any)=>{
 
this.notification=data;
});
//this.notification=this._timelineService.getTimeline();
}
getTimelinedata(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workSpaceId=this.clientDetailService.getWorkspaceID();
  this.client_id = this.clientDetailService.getClientID();
  this._timelineService.getTimeLineStatus(this.userId,this.workSpaceId,this.client_id).subscribe((data:any)=> {
    this.timeline=data.result[0];
    console.log("this.timeline",this.timeline)
  })
}
// getTimeLinewidgetData(){
//   debugger
//   this.userId = this.clientDetailService.getuserID();
//   this.workSpaceId=this.clientDetailService.getWorkspaceID();
//   this.client_id = this.clientDetailService.getClientID();
//   this.widget_Id='';
//   this._timelineService.getwidgetTimeLineData(this.userId,this.workSpaceId,this.client_id,this.widget_Id).subscribe((data:any)=> {
//     this.timelinedata=data.result[0];
//     console.log("this.timeline",this.timelinedata)
//   })
// }
viewGrid(data){
  this.gridDisplay='display-show';
  this.widgetsDisplay='display-none';
  this.AgGridComponent.getData(data.data,data.header);
}
//  griddataReceiver(data){
//     // this.showGrid=true;
   
//     this.AgGridComponent.getData(data.data,data.header);;
//   }
gridclose(){
  this.gridDisplay='display-none';
  this.widgetsDisplay='display-show';
}
}
