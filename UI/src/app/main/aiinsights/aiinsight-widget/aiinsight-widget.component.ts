import { Component, Input, OnInit, EventEmitter, Output, ViewChild, Injector } from '@angular/core';
import { inputs } from '@syncfusion/ej2-angular-dropdowns/src/drop-down-list/dropdownlist.component';
import { BaseComponentWrapper } from 'ag-grid-community';
import * as Highcharts from 'highcharts';
import { AIinsightWidgetDataModel, SaveLikeDislikeDtO } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { AgGridDataViewerComponent } from '../ag-grid-data-viewer/ag-grid-data-viewer.component';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-aiinsight-widget',
  templateUrl: './aiinsight-widget.component.html',
  styleUrls: ['./aiinsight-widget.component.css']
})
export class AIinsightWidgetComponent extends AppComponentBase implements OnInit {
@Input() widgetData:AIinsightWidgetDataModel;
@Output() gridData = new EventEmitter;

  widgetCategory:string='Anomaly detection';
  like:boolean;
  Status_message:string;
  injector:Injector;
  attributeId:string;
  public fullscreentoggle=false;
  SaveLikeDislikeInput:SaveLikeDislikeDtO={} as SaveLikeDislikeDtO;
chartId:string='con';

constructor(private _AIinsightsService:AIinsightsService,injector:Injector)
{
  super(injector);
}
  ngOnInit() {
    this.buildChart();
  }
  buildChart(){
  console.log(this.widgetData);
    this.chartId+=this.widgetData.widgetID;
    this.like=this.widgetData.isLike;
    this.attributeId=this.widgetData.attributeID;
    setTimeout(()=>{
      Highcharts.chart('con'+this.widgetData.widgetID,this.widgetData.chart);
    },100);
  }
SaveLikeAndDislike(value){
  if(value=='like' && this.like==false ){
    this.SaveLikeDislikeInput.isLike="1";
    this.like=true;
    if(this.widgetData.totalLike>=0){
    this.widgetData.totalLike +=1;
    if(this.widgetData.totalDislike!=0){
      this.widgetData.totalDislike -=1;
    }
    }
  }
  else if(value=='dislike' && this.like==true){
    this.SaveLikeDislikeInput.isLike="0";
    this.like=false;
    if(this.widgetData.totalDislike>=0){
      this.widgetData.totalDislike +=1;
      if(this.widgetData.totalLike>0){
        this.widgetData.totalLike -=1;
      } 
    }
  }
  this.SaveLikeDislikeInput.widgetCategory= this.widgetData.widgetCategory;
  this.SaveLikeDislikeInput.userId= this.clientDetailService.getuserID();
  this.SaveLikeDislikeInput.workspaceId= this.clientDetailService.getWorkspaceID();
  this.SaveLikeDislikeInput.clientId= this.clientDetailService.getClientID();
  this.SaveLikeDislikeInput.clientDate=this.clientDateTimeService.getCilentDate();
  this.SaveLikeDislikeInput.clientTime=this.clientDateTimeService.getCilentTime();
  this.SaveLikeDislikeInput.clientTimeZone=this.clientDateTimeService.getClientTimeZone();
  this.SaveLikeDislikeInput.AttributeId = this.attributeId;
  this.SaveLikeDislikeInput.Flex1  = (this.widgetData.totalLike).toString();
  this.SaveLikeDislikeInput.Flex2  = (this.widgetData.totalDislike).toString();
  this._AIinsightsService.saveLikeDislike(this.SaveLikeDislikeInput).subscribe((data:string) => {
    this.Status_message = data;
    console.log(this.Status_message);
    });
}
viewData(data){
  var headerAndData={
    header:['Id','Dimension Name','Dimension Value','Date','Performance','Rank'],
    data:data
  }

  this.gridData.emit(headerAndData);
}
 fullScreen(){

 this.fullscreentoggle=!this.fullscreentoggle;
 if(this.fullscreentoggle==true){
 
   }
   else{

}

 }
}
