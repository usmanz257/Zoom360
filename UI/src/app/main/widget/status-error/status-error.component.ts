import { Component, OnInit } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

@Component({
  selector: 'app-status-error',
  templateUrl: './status-error.component.html',
  styleUrls: ['./status-error.component.css']
})
export class StatusErrorComponent implements OnInit {

  constructor(public appMenuService:AppMenuService) { }

  ngOnInit() {
  }

}
