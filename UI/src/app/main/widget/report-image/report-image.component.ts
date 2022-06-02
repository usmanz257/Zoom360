import { Component, Input, OnInit } from '@angular/core';
import { TimelineModel } from 'src/app/models/TimeLine/TimelineModel';

@Component({
  selector: 'app-report-image',
  templateUrl: './report-image.component.html',
  styleUrls: ['./report-image.component.css']
})
export class ReportImageComponent implements OnInit {
  @Input()  notification:TimelineModel;
  constructor() { }

  ngOnInit() {
  }

}
