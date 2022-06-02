import { Component, Injector, OnInit } from '@angular/core';
import { ProductionProcessModel, SavePredictionModel } from 'src/app/models/Predict/predict.model';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { PredictionService } from 'src/app/services/prediction-service.service';

@Component({
  selector: 'app-prediction2',
  templateUrl: './prediction2.component.html',
  styleUrls: ['./prediction2.component.css']
})
export class Prediction2Component extends AppComponentBase implements OnInit {
  purchaseConversionValue:number=0;
  impression:number=0;
  result:number=0;
  reach:number=0;
  resultTypeCode:number=0;
  PredictedAmountSpend:string;
  userId="";  
  workspaceId=""; 
  clientId=""; 
  productionprocess="Amount Spend";
  saveAmountSpentModel={} as SavePredictionModel;
  saveReachModel={} as SavePredictionModel;
  labelsData:ProductionProcessModel[]=[];
  constructor(public predictionService :PredictionService, injector:Injector) {  super(injector); }

  ngOnInit() {
    this.getproductionprocessData();
  }
  getAmountSpend(){
    this.predictionService.getAmountSpend(
      {
        modelType:"AmountSpent",
      data: [
          {
            "purchasesConversionValueUsd": this.purchaseConversionValue,
            "impressions": this.impression,
            "results":this.result,
            "reach": this.reach,
            "resultTypeCode": this.resultTypeCode,
          }
            ]
      }).subscribe((data:any)=>{
        debugger
        this.PredictedAmountSpend=data["PredictedAmountSpent"];
      
      });
}
getproductionprocessData(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workspaceId=this.clientDetailService.getWorkspaceID();
  this.clientId = this.clientDetailService.getClientID();
  this.productionprocess = 'Amount Spend';
  this.predictionService.getProductionProcess(this.userId,this.workspaceId,this.clientId , this.productionprocess).subscribe((data:any)=> {
  debugger
    this.labelsData=data;
  })
}
CalculateAndSaveAmountSpend(){
  this.saveAmountSpentModel.userID=this.clientDetailService.getuserID();
  this.saveAmountSpentModel.workspaceID = this.clientDetailService.getWorkspaceID();
  this.saveAmountSpentModel.clientId = this.clientDetailService.getClientID();
      this.predictionService.getAmountSpend(
        {
          modelType:"AmountSpent",
        data: [
            {
              "purchasesConversionValueUsd": this.saveAmountSpentModel.purchaseConversionValueUSD,
              "impressions": this.saveAmountSpentModel.impressions,
              "results":this.saveAmountSpentModel.results,
              "reach": this.saveAmountSpentModel.reach,
              "resultTypeCode": this.saveAmountSpentModel.resultTypeCode,
            }
              ]
        }).subscribe((data:any)=>{
          this.saveAmountSpentModel.PredictedResult=data["predictedAmountSpent"];
          if(this.saveReachModel.PredictedResult!= null){
          this.saveAmountSpentModel.scriptName='AMOUNT SPEND';
          this.saveAmountSpentModel.Status='P';
          this.predictionService.saveReach(this.saveAmountSpentModel).subscribe((data:any)=>{
            console.log("calculated");
          })
        }
        });
  }

}
