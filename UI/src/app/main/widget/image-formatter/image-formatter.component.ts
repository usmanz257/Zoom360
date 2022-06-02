import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-formatter',
  template: `<img style="height:24px;max-width:40px" src="../../../assets/images/{{ values }}"> - {{params.value}}`,
  styles: []
})
export class ImageFormatterComponent implements OnInit {
  params: any;
  values:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  agInit(params: any){
    this.params = params;
   this.values= this.params.data.connectoR_IMAGE;
  }
}
