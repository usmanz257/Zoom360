import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreeTemplateGridService {
  _getTreeTemplateGridUrl=environment.apiUrl+'/api/TreeControlTemplate/GetTreeTemplateGrid'
  _tablecounter=0;
  _treetemplateGrid:any[]=[];
  _recordLength:number=0;
  userId:string=''
  workSpaceId:string="";
  Client_Id:string='';
  soureceConnectorId:string='';
  sourceAccountId:string='';
  templateName:string='';
  

  constructor(private _http:HttpClient,private sort: ArraySortPipe) { }

  getTreeTemplateList(userId:string,workSpaceId:string,Client_Id:string,soureceConnectorId:string,sourceAccountId:string,templateName:string){
    debugger
      let params = new HttpParams()
      .set("userId", userId)
      .set("workSpaceId",workSpaceId)
      .set("clientId", Client_Id)
      .set("soureceConnectorId",soureceConnectorId)
      .set("sourceAccountId",sourceAccountId)
      .set("templateName",templateName);
    return this._http.get(`${this._getTreeTemplateGridUrl}`,{params:params}) 
}
}
