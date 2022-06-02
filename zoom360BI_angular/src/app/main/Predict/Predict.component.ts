import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

@Component({
  selector: 'app-administration',
  templateUrl: './Predict.component.html',
  styleUrls: ['./Predict.component.css']
})
export class PredictionComponent implements OnInit {

  mainmenuID:number=18;
  constructor(public MenuService: AppMenuService) { }

  ngOnInit() {
    //this.mainmenuID=this.MenuService.getMainMenuId()
    this.MenuService.getsubMenuSection(this.mainmenuID);
  }

}
