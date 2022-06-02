import { Component, Injector, OnInit } from '@angular/core';
import { ProductionProcessModel, SavePredictionModel } from 'src/app/models/Predict/predict.model';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { PredictionService } from 'src/app/services/prediction-service.service';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SAMComponent extends AppComponentBase implements OnInit {
  amountSpentUSD:number=0;
  Results:number=0;
  impression:number=0;
  pridictedReach:string;
  userId="";  
  workspaceId=""; 
  clientId=""; 
  productionprocess="SAM";
  labelsData:ProductionProcessModel[]=[];
  saveReachModel={} as SavePredictionModel;
  constructor(public predictionService :PredictionService , injector:Injector) { super(injector)}

  ngOnInit() {
    this.getproductionprocessData();
  }
getReach(){

    this.predictionService.getReach({
      modelType:"Reach",
      data: [
          {
            "amountSpentUsd": this.amountSpentUSD,
            "results": this.Results,
            "impressions": this.impression}
            ]
      }).subscribe((data:any)=>{
        debugger
        this.pridictedReach=data.PredictedReach;
      
      });
}
getproductionprocessData(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workspaceId=this.clientDetailService.getWorkspaceID();
  this.clientId = this.clientDetailService.getClientID();
  this.productionprocess = 'SAM';
  this.predictionService.getProductionProcess(this.userId,this.workspaceId,this.clientId , this.productionprocess).subscribe((data:any)=> {
  debugger
    this.labelsData=data;
  })
}
CalculateAndSaveReach(){
  debugger
  this.saveReachModel.userID=this.clientDetailService.getuserID();
  this.saveReachModel.workspaceID = this.clientDetailService.getWorkspaceID();
  this.saveReachModel.clientId = this.clientDetailService.getClientID();
this.predictionService.getReach({
  modelType:"Reach",
  data: [
      {
        "amountSpentUsd": this.saveReachModel.AmountSpentUSD,
        "results": this.saveReachModel.results,
        "impressions": this.saveReachModel.impressions}
        ]
  }).subscribe((data:any)=>{
    this.saveReachModel.PredictedResult=data.predictedReach;
  
      this.saveReachModel.scriptName='REACH';
      this.saveReachModel.Status='P';
      this.predictionService.saveReach(this.saveReachModel).subscribe((data:any)=>{
        console.log("calculated");
      })
    
  });
}

}

