import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { CurrencySetupModel } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';



@Injectable({
  providedIn: 'root'
})
export class CurrencySetupService {
 
_urlCurrencyTypeDropDown=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
_urlSaveCurrencySetup=environment.apiUrl+'/api/CurrencySetup/SaveCurrencySetup';
_getCurrencySetupSettings=environment.apiUrl+'/api/CurrencySetup/GetCurrencySetupList';

userId:string='admin';
workSpaceId:number=11;
client_id:string=''+1003;
currencyImage:string='';
currenceyTypeSign:string='';

_CurrencyTypeDropdown:any[]=[];
currencySetupModel :CurrencySetupModel;
dropDownParentName='Currency Type(Sign)';
Status_message:string;
currencyTypeSign="";
  private _recordLength: number;
  constructor(private _http:HttpClient) { }
  getCurrencyTypeList(){
    debugger
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", this.dropDownParentName);
    return this._http.get(`${this._urlCurrencyTypeDropDown}`,{params:params})
  //   .subscribe((data: any) => {
  //     this._CurrencyTypeDropdown = data;       
  // });
  }
  getCurrencySetupSetting(userId:string,workSpaceId:string,CLIENT_ID:string){
    debugger
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",workSpaceId)
    .set("CLIENT_ID",CLIENT_ID)
    .set("currenceyTypeSign",null);
    return this._http.get(`${this._getCurrencySetupSettings}`,{params:params});
}
  saveWorkSpaceSetup(modal:CurrencySetupModel){
    debugger
    
  
   return this._http.post(`${this._urlSaveCurrencySetup}`,modal,{responseType:'text'});
  }
 
}

