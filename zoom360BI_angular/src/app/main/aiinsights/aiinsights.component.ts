import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Value } from '@syncfusion/ej2-angular-querybuilder';
import { ChartType } from 'ag-grid-community';
import { AiInsightDto, AIinsightWidgetDataModel, ChartTypeModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { SavePredictionModel } from 'src/app/models/Predict/predict.model';
import { AIinsightsService } from 'src/app/services/AIinsights/aiinsights.service';
import { AppComponentBase } from 'src/app/Services/AppComponentBase';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { PredictionService } from 'src/app/services/prediction-service.service';
import { AgGridDataViewerComponent } from './ag-grid-data-viewer/ag-grid-data-viewer.component';

@Component({
  selector: 'app-aiinsights',
  templateUrl: './aiinsights.component.html',
  styleUrls: ['./aiinsights.component.css']
})
export class AIinsightsComponent extends AppComponentBase implements OnInit {
  @ViewChild('agGridComponent',{static:true})
  public AgGridComponent:AgGridDataViewerComponent;
  mainmenuID:number=6;
  widgetCategory:string='Anomaly detection';
  AiinsightList:AIinsightWidgetDataModel[]=[];
  SelectedColumnName:string[]=[]
  SelectedColumnIdList:string[]=[]
  selectedcloumnlist:string='';
  _ChartTypeDropdown: any[]=[];
  field:object;
  public mode: string;
  fieldsvalues: Object;
  columnNames:any[]=[];
  selectedcolumnId:string='';
  selectedMenuId:string='';
  showGrid:boolean=false;
  GridData:any;
  gridDisplay:string='display-none';
  widgetsDisplay:string='';
  AllCheckbox:boolean=true;
  filtersValues={} as ChartTypeModel ;
  AiInsightinput:AiInsightDto={
    UserId :'admin1@gmail.com',
		WorkSpaceId :'1',
		Client_Id :'1002',
		ConnectorId :null,
		AccountId :null,
		WidgetCategory :this.widgetCategory,
    AttributeId :'',
    Attributes:'',
		WidgetID :null,
    chartType :null,
  };
  
  saveReachModel={} as SavePredictionModel;
  saveAmountSpentModel={} as SavePredictionModel;
  savePCVModel={} as SavePredictionModel;
  saveImpressionModel={} as SavePredictionModel;
  saveResultModel={} as SavePredictionModel;
  constructor(private _AIinsightsService:AIinsightsService,public MenuService: AppMenuService,public predictionService :PredictionService,injector:Injector)
  { 
    super(injector);
  }

  ngOnInit() {
    this.filtersValues={
      userId: this.clientDetailService.getuserID(),
      workspaceId:this.clientDetailService.getWorkspaceID(),
      clientId: this.clientDetailService.getClientID(),
      chartType:null,
    };
    this.getChartTypeDropdown();
    this.MenuService.getsubMenuSection(this.mainmenuID);
    setTimeout(()=>{
    this.getColumnName(this.widgetCategory,'6001'),100});
  }
  getColumnName(widgetCategory,subMenuId){
    this.columnNames=[];
    this.SelectedColumnName=[];
    this.SelectedColumnIdList=[];
    this.widgetCategory=widgetCategory;
    this.AiInsightinput.WidgetCategory=this.widgetCategory;
    this._AIinsightsService.getColumname(this.AiInsightinput).subscribe((data:any[])=>{

    for(var i=0;i<data.length;i++){
      this.columnNames.push({
        attributeID:data[i].attributeID,
        attribute:data[i].attribute,
        columnChecked:true
      });
    this.setArray(data[i].attributeID,data[i].attribute,true);
    }
      this.getData(widgetCategory,subMenuId);
      });
  }

  getData(widgetCategory,subMenuId){
    debugger
    this.AiinsightList=[];
    this.selectedMenuId=subMenuId;
    this.widgetCategory=widgetCategory;
    this.AiInsightinput.AttributeId=this.selectedcolumnId;
    this.AiInsightinput.Attributes=this.selectedcloumnlist;
    this.AiInsightinput.chartType=this.filtersValues.chartType;
    this._AIinsightsService.getAIinsightData2(this.AiInsightinput).subscribe((data:any)=>{
      // this.AiinsightList=[];
    
      this.AiinsightList=data;
      this.selectedOption(subMenuId);
    });
  }
  setArray(columnID,columName,event){
  
  if(event==true){
    this.SelectedColumnName.push(columName);
    this.selectedcloumnlist=this.SelectedColumnName.toString();
    this.SelectedColumnIdList.push(columnID);
    this.selectedcolumnId=this.SelectedColumnIdList.toString();
  }
  else{
    var index=this.SelectedColumnName.findIndex(e=> e==columName)
    this.SelectedColumnName.splice(index,1);
    this.selectedcloumnlist=this.SelectedColumnName.toString();
    var index2=this.SelectedColumnIdList.findIndex(e=> e==columnID)
    this.SelectedColumnIdList.splice(index2,1);
    this.selectedcolumnId=this.SelectedColumnIdList.toString();
  }
  debugger
  let result=null;
  result= this.columnNames.find(e=>e.columnChecked==false);
    if(this.columnNames.length==this.SelectedColumnName.length){
      this.AllCheckbox=true;
    }
    else{
      this.AllCheckbox=false;
    }
  }
  selectedOption(subMenuId){
  
    const slides = document.getElementsByClassName('active-class');
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.classList.remove('active-class');
        slide.className='css-1wfdhj';
    }
    let ele = document.getElementById("link"+subMenuId) as HTMLElement;
    ele.className = 'active-class';
  }
  griddataReceiver(data){
    debugger
    this.gridDisplay='display-show';
    this.widgetsDisplay='display-none';
    this.AgGridComponent.getData(data.data,data.header);
  }
  gridclose(){
    this.gridDisplay='display-none';
    this.widgetsDisplay='display-show';
  }
  CalculateAndSaveReach(){
    this.saveReachModel.userID=this.clientDetailService.getuserID();
    this.saveReachModel.workspaceID = this.clientDetailService.getWorkspaceID();
    this.saveReachModel.clientId = this.clientDetailService.getClientID();
  this.predictionService.getReach({
    modelType:"Reach",
    data: [
        {
          "amountSpentUsd": this.saveReachModel.AmountSpentUSD,
          "impressions": this.saveReachModel.results,
          "results": this.saveReachModel.impressions}
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

SelectAllAttributes(value:boolean){
  this.SelectedColumnName=[];
  this.selectedcloumnlist="";
  this.SelectedColumnIdList=[];
  this.selectedcolumnId="";
  for(var i=0;i<this.columnNames.length;i++){
    this.columnNames[i].columnChecked=value;
  this.setArray(this.columnNames[i].attributeID,this.columnNames[i].attribute,value);
  }
  
  }
  getChartTypeDropdown(){
    this._AIinsightsService.getChartTypeList().subscribe((data: any[]) => {
      if(data.length  > 0){
        this._ChartTypeDropdown = data; 
        this.fieldsvalues = { text:'dropdownText',value:'dropdownValue',selected:'selected'};
        }
            
  });
  }
  Makelist(args,name){
    if(name=='Chart Type'){
    this.filtersValues.chartType=args.value.toString();
    }
}

}


