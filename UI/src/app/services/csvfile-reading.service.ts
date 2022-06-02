import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { data } from './datasource';

@Injectable({
  providedIn: 'root'
})
export class CSVFileReadingService  {
  _getCSVData= environment.apiUrl+'/api/CSVHelper/GetCSVFileData';
  _saveDataPython= 'http://192.168.223.102:4444/sendData1';
  _saveData= environment.apiUrl+'/api/CSVHelper/SaveJsonDataToCSV';
Data:object[];
  constructor(private _http:HttpClient) {
    
   }
  // getFileData(){
  //   this.Data = data;
  //   return data
  // }
  getFileData(){
   return this._http.get(`${this._getCSVData}`);
  }
  sentCSVFileData(data){
    return this._http.post(this._saveData,{data})
  }
}
