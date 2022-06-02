import { Injectable, Injector } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { MianMenuModel, SubMenusectionModel, TblSubMenu } from 'src/app/Models/mainmenu.model';
import { environment } from 'src/environments/environment';
import { debounce } from '@fullcalendar/core';
import { Observable } from 'rxjs';
import { GetWorkbookdto, GetWorkbookPagedto, Layoutdto } from 'src/app/models/DynamicDashboard/Workbookdto';
import { UAMDropdownModel } from 'src/app/models/common/dropdownmodel';
import { AppComponentBase } from '../AppComponentBase';
@Injectable({
  providedIn: 'root'
})
export class AppMenuService extends AppComponentBase {
    //_url = 'https://localhost:44357/api/MianMenu/GetTblMainMenuBySp';
    _mainMenuUrl= environment.apiUrl+'/api/DynamicMenuItem/GetMenulist';
    _urlSubMenu = environment.apiUrl+'/api/SubMenu/GetTblMainMenuBySp';
   _subMenuSectionUrl=environment.apiUrl+'/api/Menu/getsubMenuSection';
   _subMenuSectionitemsUrl=environment.apiUrl+'/api/DynamicMenuItem/GetSubMenuSectionItems';
   _workbookurl=environment.apiUrl+'/api/Workbook/GetWorkbooks';
   _workbookpageurl=environment.apiUrl+'/api/Workbook/GetWorkbookpages';
   _getDropDownUrl= environment.apiUrl+'/api/CommonDropdownList/GetMultiSelectDropDown';
  userId:string='admin';
  workSpaceId:string=''+1;
  client_id:string='1002';
  mainmenuID: string='';
  treeLevel:number=0;
  treeNode:number=0;
  id:string=''+1;
  Error_Message:string ="";
  SubUserId:number=null;
  //SubUserId:number=12;
  hideSideMenu:boolean=true;
  _mainMenu : MianMenuModel[] = [];
  subMenuSection:SubMenusectionModel[]=[];
  subMenu : TblSubMenu[]=[];
  _modelist:UAMDropdownModel[]=[];
  dropdownname:string='Mode List';
  constructor(private _http: HttpClient,injector:Injector) {
    super(injector);
   }
getMenuItems(mode_id,userId:string,workSpaceId:string,client_id:string){
    this._mainMenu=[];
    let params = new HttpParams()
    .set("userId", userId)
    .set("SubUserId", null)
   // .set("SubUserId", "24")
    .set("workSpaceId",workSpaceId)
    .set("CLIENT_ID", client_id)
    .set("Mode_Id",mode_id); //comment
    this._http.get(`${this._mainMenuUrl}`,{params:params}).subscribe((data: MianMenuModel[]) => {
      if(data.length  > 0){
        this._mainMenu = data;
      }
  });        
    } 
    
getsubMenuSection(value){
        let params = new HttpParams()
        .set("userId", this.userId)
        .set("SubUserId", ""+this.SubUserId)
        .set("workSpaceId", this.workSpaceId)
        .set("CLIENT_ID", this.client_id)
        .set("mainMenuID", value)
        .set("treeLevel", ''+this.treeLevel)
        .set("treeNode", ''+this.treeNode);
        this._http.get(`${this._subMenuSectionitemsUrl}`,{params:params}).subscribe((data: SubMenusectionModel[]) => {
          if(data.length  > 0){
            this.subMenuSection = data;
            }
          if(value==7){
            if(this.storageService.getItem('page')){
              this.setActiveClass("link"+this.storageService.getItem('page').id);
            }
          }
      });        
}

setMainMenuId(id){
  this.mainmenuID=id;
  }
  getMainMenuId(){
    return this.mainmenuID
  }
  setActiveClass(subMenuIdval){
    const slides = document.getElementsByClassName('active-class');
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.classList.remove('active-class');
        slide.className='css-1wfdhj';
    }
    let ele = document.getElementById(subMenuIdval) as HTMLElement;
    ele.className = 'active-class';
  
  }
  getNavModedropdown(userId,modeId){
    //this.SubUserId=''+12;
    let params = new HttpParams()
    .set("userId", userId)
    .set("subUserID", null)
    .set("dropdownName", this.dropdownname)
    this._http.get(`${this._getDropDownUrl}`,{params:params}).subscribe((data:any)=>{
      debugger
        var modelist=data;
        this.storageService.setItem(environment.storage.modeList,modelist);
        this.setMode(modeId);
        this.getMenuItems(
          modeId,
          userId,
          this.clientDetailService.getWorkspaceID(),
          this.clientDetailService.getClientID());
       // let ele = document.getElementById('Menu'+this.mode_id) as HTMLElement;
       // ele.className = 'main-nav-dropdown-selected';
      });
  }
  setMode(value){
    debugger
    this._modelist = this.storageService.getItem(environment.storage.modeList);
    this._modelist.forEach(e=> e.selected=false);
    var index=this._modelist.findIndex(e=> e.dropdownValue==value);
    this._modelist[index].selected=true;
    this.storageService.setItem(environment.storage.modeList,this._modelist);
    this._modelist = this.storageService.getItem(environment.storage.modeList);
  
  }
getWorkbooks(userId:string,workspaceId:string,clientId:string):Observable<any>{

  let params = new HttpParams()
  .set("userId", userId)
  .set("workSpaceId", workspaceId)
  .set("clientId",clientId)
  return this._http.get(`${this._workbookurl}`,{params:params}) 
  } 
  getWorkbookpages(workbook: GetWorkbookdto):Observable<any>{
  
    let url_ = environment.apiUrl + "/api/Workbook/GetWorkbookpages?";
              url_ += "Id=" + encodeURIComponent("" + workbook.id) + "&"; 
              url_ += "Name=" + encodeURIComponent("" + workbook.name) + "&"; 
              url_ += "Description=" + encodeURIComponent("" + workbook.description) + "&"; 
              url_ = url_.replace(/[?&]$/, "");
    
              return this._http.request("get", url_)
  }
  getPageProperties(PageId:number):Observable<any>{
  
  
    let url_ = environment.apiUrl + "/api/Workbook/GetPageProperties?";
  
              url_ += "PageId=" + encodeURIComponent("" + PageId) + "&"; 
              
              url_ = url_.replace(/[?&]$/, "");
    
              return this._http.request("get", url_)
  }
  getWidgets(page: GetWorkbookPagedto):Observable<any>{

    let url_ = environment.apiUrl + "/api/Workbook/GetWidgets?";
              url_ += "Id=" + encodeURIComponent("" + page.id) + "&"; 
              url_ += "Name=" + encodeURIComponent("" + page.name) + "&"; 
              
              url_ = url_.replace(/[?&]$/, "");
    
              return this._http.request("get", url_)
  }
  updateLayout(input:Layoutdto[]):Observable<any>{
    let url_ =  environment.apiUrl + '/api/Workbook/UpdateLayout';  
    url_ = url_.replace(/[?&]$/, "");
  
    const content_ = JSON.stringify(input);
  
          let options_ : any = {
              body: content_,
              observe: "response",
              responseType: "blob",
              headers: new HttpHeaders({
                  "Content-Type": "application/json", 
              })
          };
          return this._http.request("post", url_, options_)
  }
}
