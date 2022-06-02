import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QuotaSettingsModel } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotaSettingsService {
  _quotaSettingSaveUrl= environment.apiUrl+'/api/QuotaSetting/SaveQuotaSetting';
  _quotaSettingGetUrl= environment.apiUrl+'/api/QuotaSetting/GetQuotaSetting';
  
  userId:string='admin';
  workSpaceId:number=11;
  clientId:string='1003';
  Status_message:string;
  private _recordLength: number;
  constructor(private _http:HttpClient) { }
  getQuotaSetting(userId:string,workSpaceId:string,clientId:string){
    debugger
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",workSpaceId)
    .set("clientId",clientId);
  return this._http.get(`${this._quotaSettingGetUrl}`,{params:params});
  
}
  saveQuotaSetting(model:QuotaSettingsModel){
   
   return this._http.post(`${this._quotaSettingSaveUrl}`,model,{responseType:'text'})
      
    }
}
