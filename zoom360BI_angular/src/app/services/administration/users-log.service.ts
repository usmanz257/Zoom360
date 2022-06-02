import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { UserWorkspaceListModel } from 'src/app/Models/mainmenu.model';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersLogService {
  _UrlgetuserLogList= environment.apiUrl+'/api/UserLog/GETUSERWORKSPACELIST';
  userId:string='admin';
  ClientId:string='1003';
  workSpaceId:string='11';
  _sortToggle : boolean=false;
  _recordLength:number=0;
  _tablecounter:number=0;
  _UserLogGrid:any[]=[];
  _UserLogGridRandom:UserWorkspaceListModel[]=[];
  constructor(private _http:HttpClient,private sort: ArraySortPipe) { }
  getGridUserWorkSpaceList(){
    debugger
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("workSpaceId",this.workSpaceId)
    .set("ClientId", this.ClientId)
    this._http.get(`${this._UrlgetuserLogList}`,{params:params}).subscribe((data: any[]) => {
      debugger
      if(data.length  > 0){
        for(let i=0;i<data.length;i++)
        {
               if(data[i].statusGranted_arrow==0)
               {
                data[i].statusGranted_arrow="no"
               }
               else
               {
                data[i].statusGranted_arrow="yes"
               }
        }
        this._UserLogGrid = data;
        this._UserLogGridRandom = data;
        this._recordLength = this._UserLogGrid.length;
      }
    });
}
  sortWorkSetup(field){
    if(this._sortToggle){
       this._UserLogGrid = this.sort.transform(this._UserLogGrid,field);
     }
   
     else if(!this._sortToggle){
       this._UserLogGrid = this.sort.transform2(this._UserLogGrid,field);
     }
   
     }
}
