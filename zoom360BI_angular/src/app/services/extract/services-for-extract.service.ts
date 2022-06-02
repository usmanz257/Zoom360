import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ServicesForExtractService {
  url='https://localhost:44397';
  ExtractData:any[]=[];
  ExtractFilter:any[]=[];
  AllIssuesData:any[]=[];
  ALLIssuesFilter:any[]=[];
  StatusList:any[]=[];
  DataStreamName:any[]=[];
  DataStreamType:any[]=[];
  AckForAllIssues:any[]=[];
  MsgTypeForAllIssues:any[]=[];
  selectedStatusList = [];
  AllIssuesTblLenght:number;
  ExtractTblLenght:number;
  CrossFlagShow=false;
  allcheckbox=false;
  AllissuesCout:number=0;
  AllissueCounterVal:number=0;
  count:number=0;
  countervalue:number=0;
  ErrorMsg:string;
  Errorheading=false;
  selectedDataStream:number=0;
  selectedDatastreamarray:number[]=[];
  constructor(private _http: HttpClient) {
  }
   GetExtractTableData() {
      
    return this
           ._http.get(`${this.url+'/api/AllExtractTables/GetAllExtractTable'}`).subscribe((data:any)=>{
               this.ExtractData=data;
               this.ExtractFilter=data;
               this.ExtractTblLenght=this.ExtractData.length;
               this.selectedDataStream=this.ExtractData[0].id;
 
            });
    }
    GetAllIssuesTableData() {
       
     return this
            ._http.get(`${this.url+'/api/Allissues/GetTblAllissues'}`).subscribe((data:any)=>{
                this.AllIssuesData=data;
                this.ALLIssuesFilter=data;
                this.AllIssuesTblLenght=this.AllIssuesData.length;
            });
     }
     GetStatusControlData() {
       
     return this
            ._http.get(`${this.url+'/api/AllExtractTables/GetStatus'}`).subscribe((data:any)=>{
                this.StatusList=data;
                this.selectedDatastreamarray=[this.StatusList[0].id];

                 
                
            });
     }
     GetDataStreamTypeControlData() {
      return this
            ._http.get(`${this.url+'/api/AllExtractTables/GetDatastreamType'}`).subscribe((data:any)=>{
                this.DataStreamType=data;
                
            });
     }
     GetAckControlDataForAllIssues() {
       
     return this
            ._http.get(`${this.url+'/api/Allissues/GetAckForAllIssues'}`).subscribe((data:any)=>{
                this.AckForAllIssues=data;
                
            });
     }
     GetMsgTypeControlDataForAllIssues() {
       
     return this
            ._http.get(`${this.url+'/api/Allissues/GetMsgTypeForAllIssues'}`).subscribe((data:any)=>{
                this.MsgTypeForAllIssues=data;
                
            });
     }
     GetDataStreamNameControlData() {
       
     return this
            ._http.get(`${this.url+'/api/AllExtractTables/GetDataStreamName'}`).subscribe((data:any)=>{
                this.DataStreamName=data;
                
            });
     }
    RecordRAnge(RecordLimit){
       
      let params = new HttpParams().set("RecordLimit", RecordLimit);
            this._http.get(`${this.url+'/api/AllExtractTables/GetNumberOfRecord'}`,{params:params}).subscribe((data: any) => {
             if(data.length  > 0){
               
              this.ExtractData= data;
              this.ExtractTblLenght=this.ExtractData.length; 
            }
        });         
      }
      RecordRangeForAllissues(RecordLimit){
         
        let params = new HttpParams().set("RecordLimit", RecordLimit);
              this._http.get(`${this.url+'/api/Allissues/GetRecordLimitForAllIssues'}`,{params:params}).subscribe((data: any) => {
               if(data.length  > 0){
                 
                this.AllIssuesData= data;
                this.AllIssuesTblLenght=this.AllIssuesData.length; 
                this.Errorheading=false;
              }
              else{
                this.AllIssuesData= data;
                this.AllIssuesTblLenght=this.AllIssuesData.length; 
                this.ErrorMsg='No Record Found';
                  this.Errorheading=true;
              }
          });         
        }

    GetFilterDataOFAllExtract(Mytext){
       
               this.ExtractData=this.ExtractFilter;
               this.ExtractData =  this.ExtractData.filter((data) =>data.dataStream.toLowerCase().includes(Mytext.toLowerCase()));
               this.ExtractTblLenght=this.ExtractData.length;
               this.CrossFlagShow=true;  
    }
    GetFilterDataOFAllIssues(Mytext){
       
               this.AllIssuesData=this.ALLIssuesFilter;
               this.AllIssuesData= this.AllIssuesData.filter((data) =>data.dataStream.toLowerCase().includes(Mytext.toLowerCase()));
               this.AllIssuesTblLenght=this.AllIssuesData.length;
               this.CrossFlagShow=true;  
    }
    checkAll(ev) {
      this.ExtractData.forEach(x => x.state = ev.target.checked)
      
    }
    findCount(e) {
       
      if(e.target.checked)
      {
        this.allcheckbox=false;
        this.count+=1;
        this.countervalue+=1;
      }
      else{
        this.count-=1;
        this.allcheckbox=false;
        this.countervalue-=1;
      }
     }
    functionCount(e){
       
      if(e.target.checked)
      {
        this.allcheckbox=true;
        this.countervalue=this.ExtractData.length;
         
      }
      else{
           this.allcheckbox=false;
           this.countervalue=0;
      }
  
     }
}
