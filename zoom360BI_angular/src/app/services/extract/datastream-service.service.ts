import { Injectable, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastreamServiceService {
  TblDataStreamData:any[]=[];
  TbliDataStreamFilter:any[]=[];
  TblSchedule:any[]=[];
  TblEnabled:any[]=[];
  TblConnections:any[]=[];
  TblDataSource:any[]=[];
  TblCreator:any[]=[];
  TblDatastreamLenght:number=0;
  TblDatastreamCounter:number=0;
  CrossFlagShow=false;
  url='https://localhost:44397';
  constructor(private _http: HttpClient) { }


  GetDataStreamList() {
    this._http.get(`${this.url+'/api/Datastreams/GetTblDatastream'}`).subscribe((data:any)=>{
             
              this.TblDataStreamData=data;
              this.TbliDataStreamFilter=data;
              this.TblDatastreamLenght=this.TblDataStreamData.length;
              
            });
    }
    GetDSScheduled() {
  
       this._http.get(`${this.url+'/api/Datastreams/GetScheduled'}`).subscribe((data:any)=>{
               
                this.TblSchedule=data;
               });
      }
      GetDSEnabled() {
         
         this._http.get(`${this.url+'/api/Datastreams/GetEnabled'}`).subscribe((data:any)=>{
                 
                  this.TblEnabled=data;
                 });
        }
        GetDSConnections() {
           
           this._http.get(`${this.url+'/api/Datastreams/GetConnectionsForDS'}`).subscribe((data:any)=>{
                   
                    this.TblConnections=data;
                   });
          }
          GetDSDatasource() {
             
             this._http.get(`${this.url+'/api/Datastreams/GetDataSourceForDs'}`).subscribe((data:any)=>{
                     
                      this.TblDataSource=data;
                     });
            }
            GetDSCreator() {
               
               this._http.get(`${this.url+'/api/Datastreams/GetCreators'}`).subscribe((data:any)=>{
                       
                        this.TblCreator=data;
                       });
              }
              RecordRAnge(RecordLimit){
             
                let params = new HttpParams().set("RecordLimit", RecordLimit);
                      this._http.get(`${this.url+'/api/Datastreams/GetRecordLimit'}`,{params:params}).subscribe((data: any) => {
                       if(data.length  > 0){
                         
                        this.TblDataStreamData= data;
                        this.TblDatastreamLenght=this.TblDataStreamData.length; 
                                     
                      }
                  });         
                }

                GetVerifyCode(ConnectorId,ConnectorName): Observable<any>{
                debugger
                  let params = new HttpParams().set("ConnectorId",ConnectorId).set("ConnectorName",ConnectorName);
                  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
                   let obj={
                     ConnectorId,
                     ConnectorName
                    }
               
                
          return this._http.post(this.url+'/api/Allissues/GetVeryfyCode',obj,{responseType:'text'});
          
        }
    GetFilterDataOFDatastream(Mytext){
       
               this.TblDataStreamData=this.TbliDataStreamFilter;
               this.TblDataStreamData =  this.TblDataStreamData.filter((data) =>data.sname.toLowerCase().includes(Mytext.toLowerCase()));
               this.TblDatastreamLenght=this.TblDataStreamData.length;
               this.CrossFlagShow=true;  
    }
}
