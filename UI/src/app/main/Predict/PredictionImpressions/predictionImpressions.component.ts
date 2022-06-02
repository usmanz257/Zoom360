import { Component, Injector, OnInit } from '@angular/core';
import { ProductionProcessModel, SavePredictionModel } from 'src/app/models/Predict/predict.model';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { PredictionService } from 'src/app/services/prediction-service.service';

@Component({
  selector: 'app-predictionImpressions',
  templateUrl: './predictionImpressions.component.html',
  styleUrls: ['./predictionImpressions.component.css']
})
export class predictionImpressionsComponent extends AppComponentBase implements OnInit {
  amountSpentUSD:number=0;
  Results:number=0;
  reach:number=0;
  pridictedImpression:string;
  saveImpressionModel={} as SavePredictionModel;
  userId="";  
  workspaceId=""; 
  clientId=""; 
  productionprocess="Impressions";
  labelsData:ProductionProcessModel[]=[];
  constructor(public predictionService :PredictionService,injector:Injector) {super(injector); }

  ngOnInit() {
    this.getproductionprocessData();
  }
  getImpressions(){
    this.predictionService.getImpressions({
      modelType:"Impression",
      data: [
          {
            "amountSpentUsd": this.amountSpentUSD,
            "results": this.Results,
            "reach": this.reach}
            ]
      }).subscribe((data:any)=>{
        debugger
        this.pridictedImpression=data.PredictedImpression;
      
      });
}
getproductionprocessData(){
  debugger
  this.userId = this.clientDetailService.getuserID();
  this.workspaceId=this.clientDetailService.getWorkspaceID();
  this.clientId = this.clientDetailService.getClientID();
  this.productionprocess = 'Impressions';
  this.predictionService.getProductionProcess(this.userId,this.workspaceId,this.clientId , this.productionprocess).subscribe((data:any)=> {
  debugger
    this.labelsData=data;
  })
}
CalculateAndSaveImpressions(){
  this.saveImpressionModel.userID=this.clientDetailService.getuserID();
  this.saveImpressionModel.workspaceID = this.clientDetailService.getWorkspaceID();
  this.saveImpressionModel.clientId = this.clientDetailService.getClientID();
        this.predictionService.getImpressions({
          modelType:"Impression",
          data: [
              {
                "amountSpentUsd": this.saveImpressionModel.AmountSpentUSD,
                "results": this.saveImpressionModel.results,
                "reach": this.saveImpressionModel.reach}
                ]
          }).subscribe((data:any)=>{
            debugger
            this.saveImpressionModel.PredictedResult=data.predictedImpression;
            this.saveImpressionModel.scriptName='IMPRESSION';
            this.saveImpressionModel.Status='P';
            this.predictionService.saveReach(this.saveImpressionModel).subscribe((data:any)=>{
              console.log("calculated");
            })
          
          });
    }
}
