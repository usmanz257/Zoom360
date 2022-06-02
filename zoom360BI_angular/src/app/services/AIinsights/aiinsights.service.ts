import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AiInsightDto, GetAiInsightsModel, SaveLikeDislikeDtO } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AIinsightsService {
  _getAIWedget= environment.apiUrl+'/api/AiInsights/GetAiInsightsData';
  _getAIWedget2= environment.apiUrl+'/api/AiInsights/GetAiInsightsWidgetData';
  _getColumName=environment.apiUrl+'/api/AiInsights/GetColumNameAiInsight';
  _saveLikeDislike=environment.apiUrl+'/api/AiInsights/SaveLikeAndDislike';
  _urlChartTypeDropDown=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';

  _highd:boolean=true;
  _mediumD:boolean=true;
  _lowd:boolean=true;
  userid:string ='admin';
  workspaceId:string;
  clientID:string;
  ChartTypeDropDownName:string='AI Chart Type';
  ChartDimensionName:string='AI Chart Dimension';

  constructor(private _http:HttpClient) { }
  getAIinsightData(){
    debugger
    let params = new HttpParams()
    .set("UserID",'admin1@gmail.com')
    .set("WorkspaceId",''+1)
    .set("ClientId",''+1002);
    return this._http.get(`${this._getAIWedget}`,{params:params});
  }
  getAIinsightData2(inputDto:AiInsightDto){
    let params = new HttpParams()
    .set("UserID",inputDto.UserId)
    .set("WorkspaceId",inputDto.WorkSpaceId)
    .set("Client_Id",inputDto.Client_Id)
    .set("ConnectorId",inputDto.ConnectorId)
    .set("AccountId",inputDto.AccountId)
    .set("WidgetCategory",inputDto.WidgetCategory)
    .set("AttributeId",inputDto.AttributeId)
    .set("Attributes",inputDto.Attributes)
    .set("WidgetID",inputDto.WidgetID)
    return this._http.get(`${this._getAIWedget2}`,{params:params});
  }
  getColumname(inputDto:AiInsightDto){
    let params = new HttpParams()
    .set("UserID",inputDto.UserId)
    .set("WorkspaceId",inputDto.WorkSpaceId)
    .set("ClientId",inputDto.Client_Id)
    .set("WidgetCategory",inputDto.WidgetCategory);
    return this._http.get(`${this._getColumName}`,{params:params});
  }
  saveLikeDislike(saveLikeAndDislikeModel:SaveLikeDislikeDtO){
    return this._http.post(`${this._saveLikeDislike}`,saveLikeAndDislikeModel);
  }
  getChartTypeList(){    
    let params = new HttpParams().set("userId", this.userid).set("dropdownName", this.ChartTypeDropDownName);
    return this._http.get(`${this._urlChartTypeDropDown}`,{params:params})
  }
  getChartDimensionList(){    
    let params = new HttpParams().set("userId", this.userid).set("dropdownName", this.ChartDimensionName);
    return this._http.get(`${this._urlChartTypeDropDown}`,{params:params})
  }
}
