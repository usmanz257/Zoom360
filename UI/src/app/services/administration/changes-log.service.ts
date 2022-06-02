import { Injectable, Injector } from '@angular/core';
import { ChangeLogListModel } from 'src/app/Models/mainmenu.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from '../AppComponentBase';

@Injectable({
  providedIn: 'root'
})
export class ChangesLogService extends AppComponentBase {
  _urlGetChangeLog= environment.apiUrl+'/api/ChangeLog/GETCHANGESLOGLIST';
  userId:string='admin';
  client_id:string='1002';
  workSpaceId:string='1';
  _sortToggle : boolean=false;
  _recordLength:number=0;
  _tablecounter:number=0;
  _ChangeLogGrid:any[]=[];
  _ChangeLogGridRandom:ChangeLogListModel[]=[];
  constructor(injector:Injector,
    private _http:HttpClient,private sort: ArraySortPipe) {super(injector);}
  getChangeLogList(){
    let params = new HttpParams()
    .set("userId", this.clientDetailService.getuserID())
    .set("workSpaceId",this.clientDetailService.getWorkspaceID())
    .set("CLIENT_ID", this.clientDetailService.getClientID())
    this._http.get(`${this._urlGetChangeLog}`,{params:params}).subscribe((data: any[]) => {
      debugger
      if(data.length  > 0){
      
          for(let i=0;i<data.length;i++)
          {
                  if(data[i].accessGranted==0)
                  {
                    data[i].accessGranted="no"
                  }
                  else
                  {
                    data[i].accessGranted="yes"
                  }
          }
        this._ChangeLogGrid = data;
        this._ChangeLogGridRandom = data;
        this._recordLength = this._ChangeLogGrid.length;
      }
    });
}
  sortWorkSetup(field){
    if(this._sortToggle){
       this._ChangeLogGrid = this.sort.transform(this._ChangeLogGrid,field);
     }
   
     else if(!this._sortToggle){
       this._ChangeLogGrid = this.sort.transform2(this._ChangeLogGrid,field);
     }
   
      }
}
