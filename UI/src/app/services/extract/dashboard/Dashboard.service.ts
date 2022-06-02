import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

_graphDatafusion= environment.apiUrl+'/api/GridAndGraph/Graphdata';
_graphDataHighcharts= environment.apiUrl+'/api/GridAndGraph/HighChartGraphData';

  constructor(private _http:HttpClient) {
  }
 getFusion(): Observable<any>{
 return this._http.get<any>(`${this._graphDatafusion}`)
 }
 get(chartSettings): Observable<any>{
  // if (chartSettings.ChartType == "pie") {
    // this._graphDataHighcharts = environment.apiUrl+'/api/GridAndGraph/HighChartGraphData'
     return this._http.post(`${this._graphDataHighcharts}`,chartSettings);
   //}
   //else
   //{
    // return this._http.get(`${this._graphDataHighcharts}`,{params:{Type:param}});
  //}
 }
}
