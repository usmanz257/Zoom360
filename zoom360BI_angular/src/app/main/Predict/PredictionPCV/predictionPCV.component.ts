import { Component, Injector, OnInit } from '@angular/core';
import { ProductionProcessModel, SavePredictionModel } from 'src/app/models/Predict/predict.model';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { PredictionService } from 'src/app/services/prediction-service.service';

@Component({
  selector: 'app-predictionPCV',
  templateUrl: './predictionPCV.component.html',
  styleUrls: ['./predictionPCV.component.css']
})
export class PredictionPCVComponent extends AppComponentBase implements OnInit {
  purchaseRoas:number=0;
  costPerResults:number=0;
  impression:number=0;
  amountSpent:number=0;
  reach:number=0;
  pridictedPCV:string;
  userId="";  
  workspaceId=""; 
  clientId=""; 
  productionprocess="PCV";
  labelsData:ProductionProcessModel[]=[];
  savePCVModel={} as SavePredictionModel;
  constructor(public predictionService :PredictionService,injector:Injector) { super(injector); }

  ngOnInit() {
   this.getproductionprocessData();
  }
  getPCV(){
    this.predictionService.getPCV({
      modelType:"PCV",
      data: [
          {
            "purchaseReturnOnAdSpend": this.purchaseRoas,
            "impressions": this.impression,
            "costPerResultUsd(USD)": this.costPerResults,
            "amountSpentUsd(USD)":this.amountSpent,
            "reach": this.reach,
          }
            ]
      }).subscribe((data:any)=>{
        debugger
        this.pridictedPCV=data.PredictedPCV;
      
      });
}
getproductionprocessData(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workspaceId=this.clientDetailService.getWorkspaceID();
  this.clientId = this.clientDetailService.getClientID();
  this.productionprocess = 'PCV';
  this.predictionService.getProductionProcess(this.userId,this.workspaceId,this.clientId , this.productionprocess).subscribe((data:any)=> {
  debugger
    this.labelsData=data;
  })
}
CalculateAndSavePCV(){
  this.savePCVModel.userID=this.clientDetailService.getuserID();
  this.savePCVModel.workspaceID = this.clientDetailService.getWorkspaceID();
  this.savePCVModel.clientId = this.clientDetailService.getClientID();

  this.predictionService.getPCV({
    modelType:"PCV",
    data: [
        {
          "purchaseReturnOnAdSpend": this.savePCVModel.purchaseROASReturnonAdSpend,
          "impressions": this.savePCVModel.impressions,
          "costPerResultUsd": this.savePCVModel.costPerResultUSD,
          "amountSpentUsd":this.savePCVModel.AmountSpentUSD,
          "reach": this.savePCVModel.reach,
        }
          ]
    }).subscribe((data:any)=>{
      this.savePCVModel.PredictedResult=data.predictedPCV;
      this.savePCVModel.scriptName='PCV';
      this.savePCVModel.Status='P';
     
      this.predictionService.saveReach(this.savePCVModel).subscribe((data:any)=>{
        console.log("calculated");
      })
    });
  }

}
