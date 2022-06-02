import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DisplaySettingsModel } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisplaySettingsService {
  _urlSaveCurrencySetup= environment.apiUrl+'/api/DisplaySettings/SaveDisplaySetting';
  _urlWorkspaceThemeDropDowns=environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';
  _urlDisplaySetting=environment.apiUrl+'/api/DisplaySettings/GetDisplaySetting';
  userId:string='admin';
  workSpaceId:number=11;
  client_id:string=''+1003;
  _AllDisplaySetting: DisplaySettingsModel[]=[];
  _recordLength:number=0;
  Status_message:string;
  constructor(private _http:HttpClient) { }
  getThemeColorList(){
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", 'Workspace Theme/Color');
    return this._http.get(`${this._urlWorkspaceThemeDropDowns}`,{params:params});
  }
  saveDisplaySettings(model:DisplaySettingsModel){
   
   return this._http.post(`${this._urlSaveCurrencySetup}`,model,{responseType:'text'})

  }
  getdisplaySetting(user_Id:string,workspace_Id:string,Client_Id:string){
    this._AllDisplaySetting.splice(0,this._AllDisplaySetting.length); 
    //this.accountId= localStorage.getItem("accountId");'abs
    debugger
    this._recordLength=0;
    let params = new HttpParams()
    .set("UserId",user_Id)
    .set("WorkSpaceId",workspace_Id)
    .set("Client_Id",Client_Id);
  return this._http.get(`${this._urlDisplaySetting}`,{params:params});
  
}
}