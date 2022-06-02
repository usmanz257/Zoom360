import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimelineModel } from 'src/app/models/TimeLine/TimelineModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
userId="admin";
workspaceId="1";
clientid="1002";
platform="";
data:TimelineModel[];
  _geturl= environment.apiUrl+'/api/timeline/GetAllTimeLineStatus';
  _geturl1=environment.apiUrl+'/api/timeline/GetUserTimelineInfo';
  _geturl2=environment.apiUrl+'/api/timeline/GetUserTimelineData';
  constructor(private http:HttpClient) {
// this.data=[{
//   apprearance_Logo:"test",
//   platform_Date:"12-02-2021",
//   platform_Time:"11:00pm",
//   platform_Name:"facebook",
//   clicks:+100,
//   postwise_Status:"slake",
//   platform_status:"warning",
//   WidgetType:"type1"
// },
// {
//   apprearance_Logo:"test2",
//   platform_Date:"02-02-2021",
//   platform_Time:"12:00pm",
//   platform_Name:"facebook",
//   clicks:-150,
//   postwise_Status:"dropped",
//   platform_status:"error",
//   WidgetType:"type2",
// }]
   }
  getTimeline(userId:string,workspaceId:string,clientId:string,platform:string){
    let params = new HttpParams().set("UserId", userId).set("WorkSpaceId", workspaceId)
    .set("Client_Id", clientId).set("Platform", platform);
    return this.http.get(this._geturl,{params:params});
  }
  getTimeLineStatus(userId:string,workspaceId:string,clientId:string){
    let params = new HttpParams()
    .set("userId", userId)
    .set("WorkSpaceId", workspaceId)
    .set("Client_Id",clientId)
    return this.http.get(this._geturl1,{params:params});
  }
  getwidgetTimeLineData(userId:string,workspaceId:string,clientId:string,widget_Id:string){
    let params = new HttpParams()
    .set("userId", userId)
    .set("workSpaceId", workspaceId)
    .set("Client_Id",clientId)
    .set("Widget_Id",widget_Id)
    return this.http.get(this._geturl2,{params:params});
  }
}
