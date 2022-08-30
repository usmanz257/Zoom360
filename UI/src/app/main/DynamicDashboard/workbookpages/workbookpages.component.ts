import { Component, Input, OnInit, Output, SimpleChanges,EventEmitter, ViewChild, ViewChildren, OnChanges } from '@angular/core';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import * as Highcharts from 'highcharts';
import { DashboardService } from 'src/app/services/extract/dashboard/Dashboard.service';
import { Chart } from 'highcharts';
import { GetWidgetsdto, GetWorkbookPagedto, Layoutdto } from 'src/app/models/DynamicDashboard/Workbookdto';
import HC_stock from "highcharts/modules/stock";
import { ToastMessage } from '../../administration/MessageTypes/toast-message';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { DialogUtility } from '@syncfusion/ej2-popups';
HC_stock(Highcharts);

@Component({
  selector: 'app-workbookpages',
  templateUrl: './workbookpages.component.html',
  styleUrls: ['./workbookpages.component.css']
})
export class WorkbookpagesComponent implements OnInit,OnChanges {
  public options: GridsterConfig;
  Widgets: GetWidgetsdto[] = [];
  bgCounterColorStyle:any
  page: GetWorkbookPagedto
  dashboardBGColor:string;
  @Input() PageId: GetWorkbookPagedto
  currentLayoutSettings: Layoutdto[] = [];
  // scoreCardHr: boolean;
  public chart: Chart;
  public chartOptions: Highcharts.Options;
  Highcharts: typeof Highcharts = Highcharts;
  // @ViewChild('DMScoreCard', { static: true }) DMScoreCard: DMAverageLeadScoreComponent;
  @ViewChild('gridsterItem', { static: false }) gridItem: GridsterItemComponent;
  columnDefs: any[] = [];
  rowData: any[] = [];
  scorecardRowData:any[]=[];
  scorecardColumnDefs:any[]=[];
  BRdata:any[]=[];
  workbook:any;
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
	public position;
  constructor(public MenuService: AppMenuService, private dashboardService: DashboardService) {

    this.options = {};
    // this.options = {
    //   itemResizeCallback: this.itemResize.bind(this),
    //   //gridSizeChangedCallback: this.gridSizeChanged.bind(this),
    //   gridType: GridType.Fit,
    //   margin: 10,
    //   outerMargin: true,
    //   useTransformPositioning: true,
    //   mobileBreakpoint: 640,
    //   minCols: 1,
    //   maxCols: 50,
    //   minRows: 1,
    //   maxRows: 50,
    //   displayGrid: "onDrag&Resize",
    //   draggable: {
    //     enabled: true,
    //   },
    //   resizable: {
    //     enabled: true,
    //   },
    //   swap: true,
    //   disablePushOnResize: false
    // };
  }
  ngOnInit(): void {
    this.position={ X: 'Left', Y: 'Top' };
    if(this.MenuService.page$){
      this.MenuService.page$.subscribe(res=> this.getWidgets(res));
      this.MenuService.workbook$.subscribe((res)=>{
        this.workbook = res 
      } );
      this.MenuService.widgets$.subscribe((res)=> this.setWidgets(res));
    }
    
    // this.getWidgets();
  
  }
  
ngOnChanges():void{
 
}
  onGridReady(evvent, item) {
    this.setColumnData(item);
    this.setRowData(item);
  }
  setColumnData(item) {
    console.log(item)
    item.columnDefs = [];
    for (let i = 0; i < item.dimension.length; i++) {
      item.columnDefs.push({ field: item.dimension[i].name });
    }
    for (let i = 0; i < item.measure.length; i++) {
      item.columnDefs.push({ field: item.measure[i].name });
    }
    console.log(item.columnDefs)
    return item.columnDefs;
   
  }

  setRowData(item) {
    console.log(item)
    item.rowData = [];
    // rows
    for (let j = 0; j < item.chart.dimensions[0].length; j++) {
      let row = {};
      for (let i = 0; i < item.measure.length; i++) {
        row[item.measure[i].name] = item.chart.measures[i][j];
      }

      for (let i = 0; i < item.dimension.length; i++) {
        row[item.dimension[i].name] = item.chart.dimensions[i][j];
      }
      item.rowData.push(row);
    }
    console.log(item.rowData)
  }
  setScoreCardRowData(item) {
    console.log(item)
    this.scorecardRowData = [];
    // rows
    for (let j = 0; j < item.chart.dimensions[0].length; j++) {
      let row = {};
      for (let i = 0; i < item.measure.length; i++) {
        row[item.measure[i].name] = item.chart.measures[i][j];
      }

      for (let i = 0; i < item.dimension.length; i++) {
        row[item.dimension[i].name] = item.chart.dimensions[i][j];
      }
      this.scorecardRowData.push(row);
    }
    console.log("score row",this.scorecardRowData);
  }
  setScoreCardColumnData(item) {
    console.log(item)
    this.scorecardColumnDefs = [];
    for (let i = 0; i < item.dimension.length; i++) {
      this.scorecardColumnDefs.push({ field: item.dimension[i].name });
    }
    for (let i = 0; i < item.measure.length; i++) {
      this.scorecardColumnDefs.push({ field: item.measure[i].name });
    }
    console.log("score column",this.scorecardColumnDefs);
  }  
  getWidgets(page:any) {
    this.page = page;
      this.MenuService.getPageProperties(this.page.id).subscribe(res => {
      this.options = JSON.parse(res.defualtProperties);

      this.options.gridType = GridType.Fixed;
      this.options.fixedColWidth = 12;
      this.options.fixedRowHeight = 12;
      this.options.defaultItemCols = 10;
      this.options.itemResizeCallback = this.itemResize.bind(this),
        this.options.draggable.stop = this.ItemDrage.bind(this)
      this.MenuService.getFilteredWidgets(this.page).subscribe(res => {
        this.setWidgets(res);
      })
    });
  }
  setWidgets(res){
    this.Widgets=[];
    this.Widgets = res;
    // this.BRdata = JSON.parse(this.Widgets[0].chart.data);
    for(var i=0;i<this.Widgets.length;i++){
      if(this.Widgets[i].type=="MultiBRScoreCardimg"){
       this.Widgets[i].chart.data=JSON.parse(this.Widgets[i].chart.data);
      }
     else if(this.Widgets[i].type=="MultiBRScoreCardimgTwo"){
       this.Widgets[i].chart.data=JSON.parse(this.Widgets[i].chart.data);
      }
      else if(this.Widgets[i].type=="AIWidgetStyleCard"){
       this.Widgets[i].chart.data=JSON.parse(this.Widgets[i].chart.data);
      }
      else if(this.Widgets[i].type=="TimelineWidgetStyleCard"){
       this.Widgets[i].chart.data=JSON.parse(this.Widgets[i].chart.data);
      }
      
    }
  }
  public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {


    for (var i = 0; i <= Highcharts.charts.length; i++) {
      if (Highcharts.charts[i]) {
        Highcharts.charts[i].reflow()
      }
    }

    var isPresent = this.currentLayoutSettings.some(function (el) { return el.id === item.id });

    if (isPresent) {
      this.currentLayoutSettings.some(function (el) {
        if (el.id === item.id) {
          el.rows = itemComponent.$item.rows;
          el.cols = itemComponent.$item.cols;
          el.x = itemComponent.$item.x;
          el.y = itemComponent.$item.y;
        }
      })
    }
    else {
      this.currentLayoutSettings.push({ id: item.id, rows: item.rows, cols: item.cols, x: item.x, y: item.y })
    }

    console.log(this.currentLayoutSettings)
  }

  ItemDrage(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.log("item dragged")
    var isPresent = this.currentLayoutSettings.some(function (el) { return el.id === item.id });

    if (isPresent) {
      this.currentLayoutSettings.some(function (el) {
        if (el.id === item.id) {
          el.rows = itemComponent.$item.rows
          el.cols = itemComponent.$item.cols
          el.x = itemComponent.$item.x
          el.y = itemComponent.$item.y
        }
      })
    }
  }

  updateLayout(): void {
    this.MenuService.updateLayout(this.currentLayoutSettings).subscribe(res => {
      this.testToast.toast[1].content='Layout updated successfully';
      this.toastObj.show(this.testToast.toast[1]);
    })
  }
  multiBRScorecard(){
    this.Widgets.forEach(element => {
      if(element.chart=="MultiBRScoreCardimg"){
        this.setScoreCardColumnData(element);
        this.setScoreCardRowData(element);
      }
     });
  }
  Refresh(){
    this.MenuService.page$.next(this.page);
     this.MenuService.workbook$.next(this.workbook);
  }
  DeleteDashboard(){
    this.page.BSTATUS = "0"
    this.MenuService.DeleteDashboard(this.page).subscribe((data)=>{
      debugger
      if(data.status==1){
        this.testToast.toast[1].content=data.message;
        this.toastObj.show(this.testToast.toast[1]);
        this.MenuService.deletedpage$.next(this.page);
      }else{
      this.testToast.toast[2].content=data.message;;
      this.toastObj.show(this.testToast.toast[2]);
      }
      
    });
  }
  public onOpenDialog = function(event: any): void {
    DialogUtility.confirm({
    title: 'Delete',
    content: "Do you realy want to delete dashboard",
    okButton: {  text: 'Yes', click: this.DeleteDashboard.bind(this) },
    cancelButton: {text: 'No'},
    showCloseIcon: false,
    closeOnEscape: true,
    animationSettings: { effect: 'Zoom' }
});
}
}
