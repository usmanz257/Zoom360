import { Component, Injector, OnInit } from '@angular/core';
import { ProductionProcessModel, SavePredictionModel } from 'src/app/models/Predict/predict.model';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { PredictionService } from 'src/app/services/prediction-service.service';

@Component({
  selector: 'app-predictionResults',
  templateUrl:'./predictionResults.component.html',
  styleUrls: ['./predictionResults.component.css']
})
export class predictionResultsComponent extends AppComponentBase implements OnInit {
  amountSpentUSD:number=0;
  reach:number=0;
  impression:number=0;
  costPerResult:number=0;
  pridictedRsults:string;
  userId="";  
  workspaceId=""; 
  clientId=""; 
  productionprocess="Results";
  saveResultModel={} as SavePredictionModel;
  labelsData:ProductionProcessModel[]=[];
  constructor(public predictionService :PredictionService,injector:Injector) {  super(injector);}

  ngOnInit() {
   this.getproductionprocessData();
  }
getResults(){
    this.predictionService.getResults({
      modelType:"Results",
      data: [
          {
            "amountSpentUsd": this.amountSpentUSD,
            "reach": this.reach,
            "impressions": this.impression,
            "costPerResultUsd":this.costPerResult
          }
            ]
      }).subscribe((data:any)=>{
        debugger
        this.pridictedRsults=data.PredictedResults;
      
      });
}
getproductionprocessData(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workspaceId=this.clientDetailService.getWorkspaceID();
  this.clientId = this.clientDetailService.getClientID();
  this.productionprocess = 'Results';
  this.predictionService.getProductionProcess(this.userId,this.workspaceId,this.clientId , this.productionprocess).subscribe((data:any)=> {
  debugger
    this.labelsData=data;
  })
}
CalculateAndSaveResults(){
  this.saveResultModel.userID=this.clientDetailService.getuserID();
  this.saveResultModel.workspaceID = this.clientDetailService.getWorkspaceID();
  this.saveResultModel.clientId = this.clientDetailService.getClientID();
      this.predictionService.getResults({
        modelType:"Results",
        data: [
            {
              "amountSpentUsd": this.saveResultModel.AmountSpentUSD,
              "reach": this.saveResultModel.reach,
              "impressions": this.saveResultModel.impressions,
              "costPerResultUsd":this.saveResultModel.costPerResultUSD
            }
              ]
        }).subscribe((data:any)=>{
          debugger
          this.saveResultModel.PredictedResult=data.predictedResults;
          this.saveResultModel.scriptName='RESULTS';
          this.saveResultModel.Status='P';
          this.predictionService.saveReach(this.saveResultModel).subscribe((data:any)=>{
            console.log("calculated");
          })
        });
  }
}
