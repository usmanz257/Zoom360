import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedget-source-log',
  templateUrl: './wedget-source-log.component.html',
  styleUrls: ['./wedget-source-log.component.css']
})
export class WedgetSourceLogComponent implements OnInit {
  
  widgetAccorButtonText:string='Show all';
  buttonAccorStatus:boolean=false;
  constructor() { }

  ngOnInit(): void {
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
