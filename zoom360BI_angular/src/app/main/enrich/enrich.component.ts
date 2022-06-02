import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMenuService } from '../../Services/common/app-menu.service';
import { ServiceService } from '../../services/extract/service.service';

@Component({
  selector: 'app-enrich',
  templateUrl: './enrich.component.html',
  styleUrls: ['./enrich.component.css']
})
export class EnrichComponent implements OnInit {
  mianmenuid=2;
   
  constructor(public MenuService:AppMenuService , private router:Router) { }

  ngOnInit(): void {
    this.getid(this.mianmenuid);
  }
  getid(id){
    this.MenuService.getsubMenuSection(id); 
}
// GetName(name){
    
     
//   this.Hservices.ShowResult(name);

// }

}
