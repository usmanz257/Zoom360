import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GetWidgetsdto } from 'src/app/models/DynamicDashboard/Workbookdto';
import { WorkbookpagesComponent } from '../../workbookpages/workbookpages.component';

@Component({
  selector: 'app-dm-average-lead-score',
  templateUrl: './dm-average-lead-score.component.html',
  styleUrls: ['./dm-average-lead-score.component.css']
})
export class DMAverageLeadScoreComponent implements OnInit {
  scoreCardHr: boolean;
  @Input() test:any;
  bgCounterColorStyle:any;
  // test3:any[]=[];
  // constructor() {
    
  //  }




  
  ngOnInit() {
    debugger
  console.log(this.test);
  
 
  }
// @Input()  DMALSScoreCard: WorkbookpagesComponent;

// @Input() inputFromParent : string;




    //******
 //emitter code
  // @Output() lgselected = new EventEmitter();



  // onGridReady(evvent, item) {
  //   this.setColumnData(item);
  //   this.setRowData(item);
  // }
  // setColumnData(item) {
  //   item.columnDefs = [];
  //   for (let i = 0; i < item.dimension.length; i++) {
  //     item.columnDefs.push({ field: item.dimension[i].name });
  //   }
  //   for (let i = 0; i < item.measure.length; i++) {
  //     item.columnDefs.push({ field: item.measure[i].name });
  //   }
  //   return item.columnDefs;
  // }

  // setRowData(item) {
  //   item.rowData = [];
  //   // rows
  //   for (let j = 0; j < item.chart.dimensions[0].length; j++) {
  //     let row = {};
  //     for (let i = 0; i < item.measure.length; i++) {
  //       row[item.measure[i].name] = item.chart.measures[i][j];
  //     }

  //     for (let i = 0; i < item.dimension.length; i++) {
  //       row[item.dimension[i].name] = item.chart.dimensions[i][j];
  //     }
  //     item.rowData.push(row);
  //   }
  // }
  // Widgets: GetWidgetsdto[] = [];



  // @Output() DMScoreCardEvent = new EventEmitter<string>();
  // public options: GridsterConfig;
  // Widgets: GetWidgetsdto[] = [];
  // page: GetWorkbookPagedto
  // dashboardBGColor:string;
  // @Input() PageId: GetWorkbookPagedto
  // currentLayoutSettings: Layoutdto[] = [];
  // // @Input() Widgets: GetWidgetsdto[] = [];
  // public chart: Chart;
  // public chartOptions: Highcharts.Options;
  // Highcharts: typeof Highcharts = Highcharts;
  // MenuService: any;
  // itemResize: any;
  // ItemDrage: any;
  // constructor() { }
  // getWidgets(page) {
  //   this.page = page;
  //       this.MenuService.getPageProperties(this.page.id).subscribe(res => {
  //     debugger
  //     this.options = JSON.parse(res.defualtProperties);
  //     this.options.gridType = GridType.Fixed;
  //     this.options.fixedColWidth = 12;
  //     this.options.fixedRowHeight = 12;
  //     this.options.defaultItemCols = 10;
  //     this.options.itemResizeCallback = this.itemResize.bind(this),
  //       this.options.draggable.stop = this.ItemDrage.bind(this)
  //     this.MenuService.getWidgets(this.page).subscribe(res => {
  //       this.Widgets = res
  //       console.log('wedget res layout',this.Widgets)
  //     })
  //   })
  // }
 

}