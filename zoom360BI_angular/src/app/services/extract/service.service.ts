import { Injectable, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { ArraySortPipe } from 'src/app/shared/pipes/array-pipes';
import { ExtractSqlTableData } from 'src/app/models/extract/ExtractDataModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
_sortToggle : boolean=false;
ConnectionsControlsName=true;
DataStreamControlName=true;
AllExtractControlsName=true;
AllIssuesControlsName=true;
TableRowLength:number;
allcheckbox=false;
count:number=0;
datalist:any;
countervalue:number=0;
ConnectionData:any[]=[];
SearchTxtValue:string;
GetConnectorIds:any[]=[];
searchTextval:string;
dataarray:any[]=[];
CrossFlagShow=false;
IdsCollectionArray:ExtractSqlTableData[]=[];
ShowResult(ControlsName){
   
  if(ControlsName=="Connections")
  {
   this.ConnectionsControlsName=true;
  this.DataStreamControlName=false;
  this.AllExtractControlsName=false;
  this.AllIssuesControlsName=false;
  }else
  if (ControlsName=="DataStreams")
  {
    this.DataStreamControlName=true;
    this.ConnectionsControlsName=false;
    this.AllExtractControlsName=false;
    this.AllIssuesControlsName=false;

  }
  else
  if (ControlsName=="AllExtract" || ControlsName=="All Extract")
  {
    this.AllExtractControlsName=true;
    this.DataStreamControlName=false;
    this.ConnectionsControlsName=false;
    this.AllIssuesControlsName=false;

    
  }
  else
  if (ControlsName=="All Issues" || ControlsName=="AllIssues")
  {
    this.AllIssuesControlsName=true;
    this.AllExtractControlsName=false;
    this.DataStreamControlName=false;
    this.ConnectionsControlsName=false;
  }

}

  url='https://localhost:44397';
  getPrepareSubmenu=environment.apiUrl+"/api/DynamicMenuItem/GetSubMenuSectionItems"
  constructor(private _http: HttpClient,private sort:ArraySortPipe) { 
  
  }
  ngOnInit(): void {
   
  
   }
  
  GetNavbarList() {
    return this
           ._http.get(`${this.url+'/api/ApiNavbarNames/GetNavbarNames'}`);
    }
    getSubmenuById(Id:number) { 
      debugger
      return this._http
       .get(`${this.getPrepareSubmenu}`).subscribe((data:any)=>{
        this.datalist=data;
       });
     } 
    GetConnectionsList() {
       
       this._http.get(`${this.url+'/api/TblConnections/GetTblConnection'}`).subscribe((data:any)=>{
               debugger
                this.ConnectionData=data;
                this.dataarray=data;
                this.TableRowLength=this.ConnectionData.length;
                for(var i=0;i<data.length;i++)
                {
                  debugger
                    this.GetConnectorIds.push(data[i].sourceconnectorid);
                }
              });
      }
      GetDataSourceConnectionList() {
         
        return this
               ._http.get(`${this.url+'/api/TblConnections/GetTblConnectionDataSourceList'}`);
        }
        PostDataForFilter(AccessGranted){
            
          let params = new HttpParams().set("AccessGranted",AccessGranted);
              return  this._http.get(`${this.url+'/api/TblConnections/GetFilterList'}`,{params:params}).subscribe((data: any) => {
                
                   
                  this.ConnectionData= data;
                  this.TableRowLength=this.ConnectionData.length; 
                  this.CrossFlagShow=true;               
                
            });         
          }
          RecordRAnge(RecordLimit){
             
            let params = new HttpParams().set("RecordLimit", RecordLimit);
                  this._http.get(`${this.url+'/api/TblConnections/GetNumberOfRecord'}`,{params:params}).subscribe((data: any) => {
                   if(data.length  > 0){
                     
                    this.ConnectionData= data;
                    this.TableRowLength=this.ConnectionData.length; 
                                 
                  }
              });         
            }
                    
         
          GetFilterDataOFConnections(Mytext){
             
                     this.ConnectionData=this.dataarray;
                     this.ConnectionData =  this.ConnectionData.filter((data) =>data.name.toLowerCase().includes(Mytext.toLowerCase()));
                     this.TableRowLength=this.ConnectionData.length;
                     this.CrossFlagShow=true;  
          }
        checkAll(ev) {
          this.ConnectionData.forEach(x => x.state = ev.target.checked)
          
        }
        findCount(e,ClientId:string,connectorname:string,connectorId:string) {
           debugger
          if(e.target.checked)
          {
            this.IdsCollectionArray.push({
              id:ClientId,
              connectorname:connectorname,
              connectorId:connectorId,
            });
            this.allcheckbox=false;
            this.count+=1;
            this.countervalue+=1;
          }
          else{
            var find=this.IdsCollectionArray.find(x=>x.id==ClientId);
            var RemoveIndex=this.IdsCollectionArray.indexOf(find);
            this.IdsCollectionArray.splice(RemoveIndex,1);
            this.count-=1;
            this.allcheckbox=false;
            this.countervalue-=1;
          }
         }
        functionCount(e){
          debugger
          if(e.target.checked)
          {
          for(var i=0;i<this.ConnectionData.length;i++)
          {
            var id=this.ConnectionData[i].id;
            var connectorname=this.ConnectionData[i].connectorName;
            var connectorid=this.ConnectionData[i].sourceconnectorid;
            this.allcheckbox=true;
            this.findCount(e,id,connectorname,connectorid);
           }
            //this.allcheckbox=true;
            this.countervalue=this.ConnectionData.length;
             
          }
          else if(e.target.checked==false){
            for(var i=0;i<this.ConnectionData.length;i++)
            {
              var id=this.ConnectionData[i].id;
              var connectorname=this.ConnectionData[i].connectorName;
              var connectorid=this.ConnectionData[i].sourceconnectorid;
              this.allcheckbox=false;
              this.findCount(e,id,connectorname,connectorid);
            }
              // this.allcheckbox=false;
               this.countervalue=0;
          }
      
         }
         sortAllConnections(field){
          if(this._sortToggle){
             this.ConnectionData = this.sort.transform(this.ConnectionData,field);
           }
         
           else if(!this._sortToggle){
             this.ConnectionData = this.sort.transform2(this.ConnectionData,field);
           }
         
           }
        
   
}
