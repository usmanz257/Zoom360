import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.css']
})
export class RevealComponent implements OnInit {
  mainmenuID:number=19;
  constructor(public MenuService: AppMenuService) { }

  ngOnInit() {
    this.MenuService.getsubMenuSection(this.mainmenuID);
  }
  

}
