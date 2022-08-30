import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { RecentConnectionsService } from 'src/app/services/common/recent-connections.service';

@Component({
  selector: 'app-extract-status',
  templateUrl: './extract-status.component.html',
  styleUrls: ['./extract-status.component.css']
})
export class ExtractStatusComponent implements OnInit {
  buttonAccorStatus:boolean=false;
  widgetAccorButtonText:string='Show all';
  ResentModules:any[]=[];
  _recordLength:number;
  constructor(private recentConnectionsService:RecentConnectionsService) { }
  
  ngOnInit(): void {
    this.GetResendModule();
  }
  GetResendModule(){
   var UserId="admin";
   var Workspaceid="1";
   var Clientid="1002";
  var GetConnectorIds="182";
    this.recentConnectionsService.ResentModule(UserId,Workspaceid,Clientid).subscribe((data:any)=>{
      if(data.length >0){
        debugger
       this.ResentModules=data;
       this._recordLength = data.length;
      }
      });
  }
  buttonText(){
    this.buttonAccorStatus=!this.buttonAccorStatus;
    if(this.buttonAccorStatus){
      this.widgetAccorButtonText ='Hide All';
    }else{
      
      this.widgetAccorButtonText ='Show All';
    }
    
  }
}
