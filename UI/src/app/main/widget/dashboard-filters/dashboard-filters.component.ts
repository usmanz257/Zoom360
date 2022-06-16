import { Component, OnInit } from '@angular/core';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.css']
})
export class DashboardFiltersComponent implements OnInit {
  _filterList:dropdownModel[]=[{
    dropdownText:"Filter 1",
    dropdownValue:"filter 1"
  },{
    dropdownText:"Filter 2",
    dropdownValue:"filter 2"
  },{
    dropdownText:"Filter 3",
    dropdownValue:"filter 3"
  }];
  _filtervalue:any;
  constructor() {
   }

  ngOnInit() {
  }
fun(fun:dropdownModel){
  fun.dropdownValue="2";
  fun.dropdownText="3";
}
}
