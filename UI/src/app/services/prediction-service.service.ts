import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SavePredictionModel } from '../models/Predict/predict.model';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  _getUrl='http://192.168.223.102:4444/api';
  constructor(private _http:HttpClient) { }
 _savePredictionsURL=environment.apiUrl+'/api/PredictionReach/SavePrediction';
 _getproductionProcessURL =environment.apiUrl+'/api/PredictionReach/GetProductionProcessData';

 savePredictionModel={} as SavePredictionModel;

 userId:string='';
 workspaceID:string='';
 clientID:string='';
 productionProcess:string='';
  
getReach(UserData:any){
    debugger
    console.log('dataaa',UserData)
    return  this._http.post(`${this._getUrl}`,UserData)
      }
saveReach(savePrediction:SavePredictionModel){
  return  this._http.post(`${this._savePredictionsURL}`,savePrediction)
}
      
getAmountSpend(UserData:any){
  debugger
    console.log('dataaa',UserData)
    return  this._http.post(`${this._getUrl}`,UserData)
      }

          
getPCV(UserData:any){
    debugger
    console.log('dataaa',UserData)
    return  this._http.post(`${this._getUrl}`,UserData)
      }

getImpressions(UserData:any){
   debugger
   console.log('dataaa',UserData)
   return  this._http.post(`${this._getUrl}`,UserData)
          }

getResults(UserData:any){
            debugger
            console.log('dataaa',UserData)
            return  this._http.post(`${this._getUrl}`,UserData)
              }     

getProductionProcess(userId:string,workspaceId:string,clientId:string, productionprocess:string){
  let params = new HttpParams()
    .set("UserID", userId)
    .set("WorkspaceId", workspaceId)
    .set("ClientId",clientId)
    .set("ProdctionProcess",productionprocess)
    return this._http.get(this._getproductionProcessURL,{params:params});
}
}
