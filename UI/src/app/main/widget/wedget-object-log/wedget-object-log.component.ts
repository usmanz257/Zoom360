import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedget-object-log',
  templateUrl: './wedget-object-log.component.html',
  styleUrls: ['./wedget-object-log.component.css']
})
export class WedgetObjectLogComponent implements OnInit {
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
