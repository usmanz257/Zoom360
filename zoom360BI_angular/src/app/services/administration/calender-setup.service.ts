import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { CalenderSetupModel } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalenderSetupService {
_getStartDateDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetDropdownList';

//_saveCalenderUrl='https://localhost:44357/api/CalenderSetup/SaveCalenderSetup';
_getCalenderSetup=environment.apiUrl+'/api/CalenderSetup/GetCalenderSetup';
_saveCalenderUrl=environment.apiUrl+'/api/CalenderSetup/SaveCalenderSetup';
userId:string='admin';
workSpaceId:number=11;
client_id:string=''+1003;
dropdownName:string='Weekstart day';
WeekStartDay:any[]=[];
calenderSetupModel:CalenderSetupModel;
Status_message:string;
  constructor(private _http:HttpClient) { }
  getWeekStarDayList(){
    
    let params = new HttpParams().set("userId", this.userId).set("dropdownName", this.dropdownName);
  return  this._http.get(`${this._getStartDateDropDownUrl}`,{params:params})
  }
  getCalenderSetup(userId:string,workSpaceId:string,client_id:string){
    debugger
    let params = new HttpParams()
     .set("userId",userId)
     .set("workspaceId",workSpaceId)
     .set("ClientId",client_id);
     return this._http.get(`${this._getCalenderSetup}`,{params:params});
    }
  saveWorkSpaceSetup(UserData:CalenderSetupModel){

  return  this._http.post(`${this._saveCalenderUrl}`,UserData,{responseType:'text'})
    }
    
}
