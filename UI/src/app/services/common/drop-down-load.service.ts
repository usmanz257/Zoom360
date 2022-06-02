import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppComponentBase } from '../AppComponentBase';

@Injectable({
  providedIn: 'root'
})
export class DropDownLoadService extends AppComponentBase {
  _urltreeDropDown = environment.apiUrl+'/api/CommonDropdownList/GetTreeropdown';
  _getBasicCommonDropdown= environment.apiUrl + '/api/CommonDropdownList/GetDropdownList';
  _getBasicCommonDropdownWithCategory= environment.apiUrl + '/api/CommonDropdownList/GetDropdownWithCategory';
  _getRollupTree= environment.apiUrl + '/api/CommonDropdownList/GetRollupTree';
  _getDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetMultiSelectDropDown';
  userId:string='admin';
  subUserId:string=''+12;
  workSpaceId:string=''+1;
  client_id:string='1002';
  mainmenuID: string=''+1;

  constructor(private _http: HttpClient,injector : Injector) { 
    super(injector);
   // this.subUserId=localStorage.getItem("userId");
  }
  gettreeDropDownData(dropDownType){
    let params = new HttpParams()
    .set("UserId", this.userId)
    .set("SubUserId", this.subUserId)
    .set("ClientId", this.client_id)
    .set("WorkspaceId", this.workSpaceId)
    .set("DropDownType",dropDownType)
    .set("TreeLevel",''+0)
    .set("TreeNode",''+0)
    debugger
    return this._http.get(`${this._urltreeDropDown}`,{params:params});
    
  //   this._http.get(`${this._urltreeDropDown}`,{params:params}).subscribe((data: TreeDropDownParentModel[]) => {
  //     if(data.length  > 0){
        
  //       this.subMenuSection = data;
  //       }
        
      
  // });        
}
GetDropDowns(dropdownName){
  let params = new HttpParams()
  .set("userId", this.userId)
  //.set("userId", "2")
  .set("dropdownName", dropdownName);
  return this._http.get(`${this._getBasicCommonDropdown}`,{params:params});
}
// GetUserSpecificDropDown(userId,dropdownName){
//   let params = new HttpParams()
//   .set("userId", userId)
//   //.set("userId", "2")
//   .set("dropdownName", dropdownName);
//   return this._http.get(`${this._getBasicCommonDropdown}`,{params:params});

// }


GetDropDownsWithCategory(dropdownname){
  let params = new HttpParams()
  .set("userId", this.userId)
  //.set("userId", "2")
  .set("dropdownName", dropdownname);
  return this._http.get(`${this._getBasicCommonDropdownWithCategory}`,{params:params});
}
}
