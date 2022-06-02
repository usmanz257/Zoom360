import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataExportTemplete } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportTemplateSetupService {
  _urlSaveTemplateSetup= environment.apiUrl+'/api/DataExportTemplate/SaveExportTemplate';
  dataExportTemplate= new DataExportTemplete();
  

  constructor(private _http:HttpClient) { }
  saveTempleteSetup( data:DataExportTemplete){
    debugger;
   return this._http.post(`${this._urlSaveTemplateSetup}`,data,{responseType:'text'})
         // this._http
    //       .post(`${this._url}`, "abc").subscribe(results=>{
    //       console.log(results)
    // })

  }
}
