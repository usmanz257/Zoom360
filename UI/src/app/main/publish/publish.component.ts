import { Component, OnInit } from '@angular/core';
import { AppMenuService } from '../../Services/common/app-menu.service';


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  mainmenuID:number=5;
  constructor(public MenuService: AppMenuService) { }

  ngOnInit(): void {
    this.MenuService.getsubMenuSection(this.mainmenuID);
  }

}
