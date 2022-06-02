import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
 
import {observable, Observable} from 'rxjs';
import { extractModel } from 'src/app/models/extract/ExtractPageModelForStep8';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ExtractServices {
  url=environment.apiUrl+'/api/SqlConnector/ExtractPageDataSaveForStep8';
  constructor(private _http: HttpClient) { }


  SaveDataForExtract(inputs:extractModel,UserId:string,Clientid:string,Workspaceid:string,AccountId:string,ConnectorId:string){
    debugger
    inputs.UserId=UserId;
    inputs.ACCOUNT_Id=AccountId;
    inputs.CONNECTORID=ConnectorId;
    inputs.Workspaceid=Workspaceid;
    inputs.Clientid=Clientid;
    inputs.FromandTo=inputs.date_LINK+"To"+inputs.date_LINK1;
  //  let params = new HttpParams()
  //  .set("UserId", UserId)
  //  .set("ACCOUNT_Id", AccountId)
  //  .set("CONNECTORID", ConnectorId)
  //  .set("Workspaceid",Workspaceid)
  //  .set("Clientid", Clientid)
  //  .set("DateLink", Data.date_LINK+Data.date_LINK1)
  //  .set("RowData", ""+Data.data_RAW_STATE)
  //  .set("ExractRunning", Data.extract_PROCESS_RUNNING)
  //  .set("DataCollection", Data.data_COLLECTION)
   return this._http.post(this.url,inputs); 
}


}