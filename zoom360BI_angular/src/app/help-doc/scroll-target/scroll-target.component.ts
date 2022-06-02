import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scroll-target',
  templateUrl: './scroll-target.component.html',
  styleUrls: ['./scroll-target.component.css']
})
export class ScrollTargetComponent implements OnInit {
  constructor(private router: Router)  {   }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  ngOnInit() {}

 
  
}