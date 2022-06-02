import { Injectable } from '@angular/core';
import { NumeralsSetupModel } from 'src/app/Models/mainmenu.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumeralsSetupService {
  _saveNumeralsSetupUrl= environment.apiUrl+'/api/NumeralSetup/SaveNumeralSetup';
  _getNumeralsSetupUrl= environment.apiUrl+'/api/NumeralSetup/GetNumeralSetup';
  userId:string='admin';
  workSpaceId:string='11';
  clientId:string='1003';
  Status_message:string='';
  _recordLength:number=0;
  numeralSetupModel:NumeralsSetupModel[]=[];
  constructor(private _http:HttpClient) { }

  saveNumeralsSetup(model:NumeralsSetupModel){
   return this._http.post(`${this._saveNumeralsSetupUrl}`,model,{responseType:'text'})
    
  }
  getNUmeralSetting(userId:string,workSpaceId:string,clientId:string){
    debugger
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",workSpaceId)
    .set("clientId",clientId);
  return this._http.get(`${this._getNumeralsSetupUrl}`,{params:params});
  
}
}
