import { data } from './../../../services/datasource';
import { Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { TimelineModel, WidgetDetailDataModel } from 'src/app/models/TimeLine/TimelineModel';
import { TimelineService } from 'src/app/services/Timeline/timeline.service';
import { AgGridDataViewerComponent } from '../../aiinsights/ag-grid-data-viewer/ag-grid-data-viewer.component';
import { items } from 'fusioncharts';
import { Item } from '@syncfusion/ej2-angular-navigations';
import { not } from '@angular/compiler/src/output/output_ast';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';

@Component({
  selector: 'app-report-widget',
  templateUrl: './report-widget.component.html',
  styleUrls: ['./report-widget.component.css']
})
export class ReportWidgetComponent extends AppComponentBase implements OnInit {
@Input()  notification:TimelineModel;

@Output() gridData = new EventEmitter;
public AgGridComponent:AgGridDataViewerComponent;
@ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
gridDisplay:string='display-none';
widgetsDisplay:string='';
gridColumnNames:any[];
gridValues:any[];
userId:'';
workSpaceId:'';
client_id:'';
widget_Id:'';
widgetDetailData:WidgetDetailDataModel;

constructor(private _timelineService:TimelineService,injector:Injector){
  super(injector)

}
ngOnInit(){
  console.log(this.notification)
}
//   notification:TimelineModel[];
//   constructor(private _timelineService:TimelineService) { }

//   ngOnInit() {
//     this.getNotification();
//   }
// getNotification(){
 // debugger
// this._timelineService.getTimeline().subscribe((data:any)=>{
//   debugger
// this.notification=data;
//});
// this.notification=this._timelineService.getTimeline();
// }

getwidgetDetailData(widgetId){
debugger
this.userId = this.clientDetailService.getuserID();
this.workSpaceId=this.clientDetailService.getWorkspaceID();
this.client_id = this.clientDetailService.getClientID();
this.widget_Id='';
this._timelineService.getwidgetTimeLineData(this.userId,this.workSpaceId,this.client_id,widgetId).subscribe((data:any)=> {
  debugger
  this.widgetDetailData=data.result;
  console.log("this.timeline",this.widgetDetailData)
  this.viewData(this.widgetDetailData.gridColumnNames,this.widgetDetailData.gridValues)
})
}


viewData(gridColumnNames,gridValues){
  debugger
 var headerAndData={
    header: gridColumnNames,
    data:gridValues
  }
  
  this.gridData.emit(headerAndData);
  console.log("widgetidddd",this.notification)
}
// griddataReceiver(data){
//   // this.showGrid=true;
//   this.gridDisplay='display-show';
//   this.widgetsDisplay='display-none';
//   this.AgGridComponent.getData(data.data,data.header);;
//}
gridclose(){
  this.gridDisplay='display-none';
  this.widgetsDisplay='display-show';
}
}
