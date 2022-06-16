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
    this._PredictServicesService.getAIinsightData2(this.inputDto).subscribe((data:any)=>{
    this.AiinsightList=[];
    this.AiinsightList=data;
    setTimeout(() => {
      this.test();
    }, 100);
    });
  }
test(){
  for(var i=0;i<this.AiinsightList.length;i++){
    Highcharts.chart('con'+i,this.AiinsightList[i].chart);
  }
}
  showdetail(id:string){
    debugger
    if(document.getElementById(id).style.display=='none'){
      document.getElementById(id).style.display='Block'
    }else{
      document.getElementById(id).style.display='none';
    }   
  }
}