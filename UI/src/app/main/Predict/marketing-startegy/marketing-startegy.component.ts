import { Component, Injector, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { ChartTypeModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
// import { MarketingDTOModel, MArketingStrategy } from 'src/app/models/Predict/predict.model';
// import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { PredictServicesService } from 'src/app/services/predict/predict-services.service';

@Component({
  selector: 'app-marketing-startegy',
  templateUrl: './marketing-startegy.component.html',
  styleUrls: ['./marketing-startegy.component.css']
})
export class MarketingStartegyComponent extends AppComponentBase implements OnInit {
  widgetCategory:string='Anomaly detection';
  chartId:string='con';
  like:boolean;
  Status_message:string;
  injector:Injector;
  attributeId:string;
  alpha:boolean=false;
  hideshow:string="Show Detail";
  constructor(private _PredictServicesService:PredictServicesService ,injector:Injector) { super(injector); }
  // @Input() AiinsightList:MArketingStrategy;
   AiinsightList:any[]=[];
   filtersValues={} as any ;
  

  //inputDto:MarketingDTOModel;
  inputDto:any={
    UserId :'admin1@gmail.com',
		WorkSpaceId :'1',
		Client_Id :'1002',
		ConnectorId :'222,300,219',
		AccountId :null,
		WidgetCategory :this.widgetCategory,
    AttributeId :'1001,1002,1003',
    Attributes:'Home Accessory,Accessory Item,Gift Item',
		WidgetID :'',
  };
 
  ngOnInit() {
   
    // this.inputDto.UserId= this.clientDetailService.getuserID(),
    // this.inputDto.WorkSpaceId=this.clientDetailService.getWorkspaceID(),
    // this.inputDto.Client_Id= this.clientDetailService.getClientID(),
    
    
     this.getData(this.widgetCategory);
  //   this. buildChart(this.AiinsightList);   
  }
  getData(widgetCategory){
    debugger
    
    // this.widgetCategory=widgetCategory;
    this._PredictServicesService.getAIinsightData2(this.inputDto).subscribe((data:any)=>{
      // this.AiinsightList=[];
    
      this.AiinsightList=data;
      console.log("this.AiinsightList=>",this.AiinsightList);
      debugger
      
      // for(int i=0;i<this.AiinsightList.length;i++;){}
      this.chartId+=this.AiinsightList[0].widgetID;
      this.attributeId=this.AiinsightList[0].attributeID;
      setTimeout(()=>{
        Highcharts.chart('con'+this.AiinsightList[0].widgetID,this.AiinsightList[0].chart);
      },100);
   
    });
  }
  // buildChart(AiinsightList:MArketingStrategy){
  //   console.log("this.widgetData ==>",this.AiinsightList);
  //     this.chartId+=this.AiinsightList.widgetID;
  //     this.like=this.AiinsightList.isLike;
  //     this.attributeId=this.AiinsightList.attributeID;
  //     setTimeout(()=>{
  //       Highcharts.chart('con'+this.AiinsightList.widgetID,this.AiinsightList.chart);
  //     },100);
  //   }

  showdetail(){
    debugger
    this.alpha= !this.alpha
    if(this.alpha){
      this.hideshow="Hide Detail";
    }
    else{
      this.hideshow="Show Detail";
    }

    

  }
}
