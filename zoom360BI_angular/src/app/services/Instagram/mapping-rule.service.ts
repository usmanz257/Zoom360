import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MappingRuleService {
  userId='admin';
 // _url='https://localhost:44357/api/MappingRule/getMappingTemplateDropDown';
 _url=environment.apiUrl + '/api/CommonDropdownList/GetDropdownList';
  constructor(private _http:HttpClient) { }
  GetDropDowns(dropdownname){
    let params = new HttpParams()
    .set("userId", this.userId)
    .set("dropdownName", dropdownname);
    return this._http.get(`${this._url}`,{params:params});
  }
}
