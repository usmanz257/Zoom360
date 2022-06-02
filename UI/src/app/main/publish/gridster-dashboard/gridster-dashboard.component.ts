import { Component, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType }  from 'angular-gridster2';
   

@Component({
  selector: 'app-gridster-dashboard',
  templateUrl: './gridster-dashboard.component.html',
  styleUrls: ['./gridster-dashboard.component.css']
})
export class GridsterDashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      draggable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      maxCols: 4
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
      
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    const item: GridsterItem = { cols: 2, rows: 2, y: 0, x: 2 };
    this.dashboard.push(item);
  }
}
