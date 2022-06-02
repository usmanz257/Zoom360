import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AIinsightWidgetDataModel, ChartTypeDiemnsion, SaveLikeDislikeDtO } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';

@Component({
  selector: 'app-aiinsights-expand-widget',
  templateUrl: './aiinsights-expand-widget.component.html',
  styleUrls: ['./aiinsights-expand-widget.component.css']
})
export class AiinsightsExpandWidgetComponent extends AppComponentBase implements OnInit {

@Input() widgetData:AIinsightWidgetDataModel;
@Output() gridData = new EventEmitter;
  widgetCategory:string='Anomaly detection';
  like:boolean;
  Status_message:string;
  injector:Injector;
  attributeId:string;
  public mode: string;
  public fullscreentoggle=false;
  filtersValues={} as ChartTypeDiemnsion;
  SaveLikeDislikeInput:SaveLikeDislikeDtO={} as SaveLikeDislikeDtO;
  _ChartDimensionDropdown: any[]=[];
  chartId:string='con';
  fieldsvalues: Object;
  constructor(private _AIinsightsService:AIinsightsService,injector:Injector) {super(injector); }

  ngOnInit() {
    // this.getChartDimensiondropdown();
    this.buildChart();
  }
  buildChart(){
  console.log(this.widgetData);
    this.chartId+=this.widgetData.widgetID;
    this.like=this.widgetData.isLike;
    this.attributeId=this.widgetData.attributeID;
    debugger
    setTimeout(()=>{
      Highcharts.chart('con'+this.widgetData.widgetID,this.widgetData.chart);
    },100);
    this.widgetData.chart.series.forEach(element => {
    this._ChartDimensionDropdown.push(
      {
        dropdownText:element.name,
        dropdownValue:element.name,
        selected:true
      });
    });
    this.fieldsvalues = {text:'dropdownText',value:'dropdownValue',selected:'selected'};
  }
SaveLikeAndDislike(value){
  debugger
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
  debugger
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
  debugger
  this.gridData.emit(headerAndData);
}
 fullScreen(){
 debugger
 this.fullscreentoggle=!this.fullscreentoggle;
 if(this.fullscreentoggle==true){
   }
 }
//  getChartDimensiondropdown(){
//   this._AIinsightsService. getChartDimensionList().subscribe((data: any[]) => {
//     if(data.length  > 0){
//       this._ChartDimensionDropdown = data; 
//       }
// });
//}
Makelist(args,name){
  if(name=='Chart Dimension'){
  this.filtersValues.chartDimension=args.value.toString();
  }
}
}
