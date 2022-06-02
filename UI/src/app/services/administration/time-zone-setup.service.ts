import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TimeZoneSetupModel } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TimeZoneSetupService {
   SaveConfig() {
   throw new Error('Method not implemented.');
   }

  _urlDateFormatDropDown=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  _urlTimeFormatDropDown=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  _urlSaveTimeZoneSetup= environment.apiUrl+ '/api/TimeZoneSetup/SaveTimeZoneSetup';
  _urlGetTimeZoneSetup=environment.apiUrl+'/api/TimeZoneSetup/GetTimeZoneSetup';

userId:string='admin';
workSpaceId:string="11";
CLIENT_ID:string="1003";
_DateFormatDropdown:any[]=[];
_TimeFormatDropdown:any[]=[];
_recordLength:number=0;
timezoneModel: TimeZoneSetupModel;
SetCurrency : boolean=false;
DateFormatDropDownName:string='Date Format';
TimeFormatDropDownName:string='Time Format';
timeZoneImage:string='';
Status_message:string;
  constructor(private _http:HttpClient) { }
  getDateFormatList(){    
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", this.DateFormatDropDownName);
    return this._http.get(`${this._urlDateFormatDropDown}`,{params:params})
  }
  getTimeFormatList(){
    
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", this.TimeFormatDropDownName);
  return  this._http.get(`${this._urlTimeFormatDropDown}`,{params:params})
  }
  getTimeZoneSetupSetting(userId:string,workSpaceId:string,CLIENT_ID:string){
    
    this._recordLength=0;
    let params = new HttpParams()
    .set("userId",userId)
    .set("workSpaceId",workSpaceId)
    .set("CLIENT_ID",CLIENT_ID)
    
    return this._http.get(`${this._urlGetTimeZoneSetup}`,{params:params})
}
  saveWorkSpaceSetup(TimeZoneModel:TimeZoneSetupModel){
    debugger
    //var workspaceModel = JSON.stringify(TimeZoneModel);
   return this._http.post(this._urlSaveTimeZoneSetup,TimeZoneModel,{responseType:'text'})
       

  }
}
