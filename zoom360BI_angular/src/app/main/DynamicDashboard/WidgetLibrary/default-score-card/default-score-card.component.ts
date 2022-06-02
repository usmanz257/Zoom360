import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-score-card',
  templateUrl: './default-score-card.component.html',
  styleUrls: ['./default-score-card.component.css']
})
export class DefaultScoreCardComponent implements OnInit {
  scoreCardHr: boolean;
  constructor() { }

  ngOnInit() {
  }

}
