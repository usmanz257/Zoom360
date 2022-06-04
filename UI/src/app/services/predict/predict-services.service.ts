import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarketingDTOModel } from 'src/app/models/Predict/predict.model';

@Injectable({
  providedIn: 'root'
})
export class PredictServicesService {
  _getMArketingWidget= environment.apiUrl+'/api/PredictionReach/GetMarketingStrategyData';

  constructor(private _http:HttpClient) { }

  getAIinsightData2(inputDto:MarketingDTOModel){
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
    return this._http.get(`${this._getMArketingWidget}`,{params:params});
  }
}
