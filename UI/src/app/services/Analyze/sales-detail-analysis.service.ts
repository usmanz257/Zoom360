import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';
;
@Injectable({
  providedIn: 'root'
})
export class SalesDetailAnalysisService {
  userId:string='admin';
  workSpaceId:number=11;
  client_id:string=''+1002;
  public rowData:any[]=[];
  public isLoading:boolean=false;
  private componentMethodCallSource = new Subject<any>();
  graphDataUrl=environment.apiUrl+'/api/GridAndGraph/Graphdata';
  getDynamicGridUrl=environment.apiUrl+'/api/GridAndGraph/GridDynamicData';
  templates:any[]=[
    {
      id:1
      // temp:
    }
  ];
  // Observable string streams
  componentMethodCalled = this.componentMethodCallSource.asObservable();

  constructor(private http:HttpClient) { }
  callComponentMethod() {
    this.componentMethodCallSource.next();
  }
  getSaleDetailAnalysis(){
    return this.http.get(this.graphDataUrl);
  }
  getGridDynamicData(analyzeType){
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("WorkSpaceId",  (this.workSpaceId).toString())
    .set("Client_Id", this.client_id)
    .set("analysisType", analyzeType);
    return this.http.get(this.getDynamicGridUrl,{params:params});
  }
  getGridTemplateDefination(TempID){

  }
  
}
