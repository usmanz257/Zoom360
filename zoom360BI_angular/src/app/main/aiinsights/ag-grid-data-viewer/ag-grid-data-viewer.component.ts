import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AIinsightWidgetDataModel } from 'src/app/models/AIinsight/AIinsghtscardModel';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';



@Component({
  selector: 'app-ag-grid-data-viewer',
  templateUrl: './ag-grid-data-viewer.component.html',
  styleUrls: ['./ag-grid-data-viewer.component.css']
})
export class AgGridDataViewerComponent implements OnInit {
  // @Input() widgetGridData:AIinsightWidgetDataModel[];
  @ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
  @Output() gridClose = new EventEmitter;
  private gridApi;
  private gridColumnApi;
  public columnDefs=[];
  public defaultColDef;
  public rowData:any[]=[];
  public sideBar;
  public rowGroupPanelShow;
  public rowSelection;
  public enableRowGroup;
  public rowClassRules;
  public pivotPanelShow;
  public statusBar;
  public skipHeaderOnAutoSize;
  public chartThemeOverrides;
  public headerHeight;
  public rowHeight;
  public rowStyle;
  public tooltipShowDelay;
  public propertyNames:any[]=[];
  private colResizeDefault;
  public fullscreentoggle=false;
  public className='col-md-10';
  hideSideMenu:boolean=true;
  constructor() {
    this.defaultColDef = {
      minWidth: 70,
      maxWidth: 130,
      filter: true,
      resizable: true,
      sortable: true,
      enablePivot: true,
      enableValue: true,
      autoBind:false,
      editable: true,
     // floatingFilter: true,
    };  
    // this.rowStyle = { background: 'black' };
    this.sideBar = {
      toolPanels: [
          {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
          },
          {
              id: 'filters',
              labelDefault: 'Filters',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
          }
      ],
      position: 'Right',
      defaultToolPanel: '',
    
  }
  this.statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left',
      },
      { statusPanel: 'agFilteredRowCountComponent' },
      { statusPanel: 'agSelectedRowCountComponent' },
      { statusPanel: 'agAggregationComponent',
      statusPanelParams: {
        // possible values are: 'count', 'sum', 'min', 'max', 'avg'
        aggFuncs: ['count', 'sum', 'min', 'max', 'avg']
    } 
  },
    ],
    
  };
    this.chartThemeOverrides = {
      common: {
        title: {
          enabled: true,
          text: 'Digital Sales Analysis',
        },
        legend: { position: 'bottom' },
      },
      column: { axes: { category: { label: { rotation: 0 } } } },
    };
    this.rowGroupPanelShow = 'always';
    this.rowSelection = 'multiple';
    this.enableRowGroup=true;
    this.pivotPanelShow = 'always';
    this.skipHeaderOnAutoSize=true;
    this.headerHeight=40;
    this.rowHeight = 40;
    
   }
  ngOnInit() {
 
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
//this.GetData(2,1002);
 
  }
  getData(data,header){
    debugger
    // var data=this.widgetGridData;
    this.agGrid.api.showLoadingOverlay();
    // this.csvFileReadingService.getFileData().subscribe((data:any) => {
      var test=data;
      this.propertyNames = Object.keys(test[0]);
      let xyz=[];
    for(let i=0;i<this.propertyNames.length;i++){
      xyz.push(
    { headerName: this.propertyNames[i],
     field: this.propertyNames[i],
     cellClass: 'font-style',
     suppressSizeToFit:true,
     filter: 'agMultiColumnFilter',
     filterParams: {
       buttons: ['clear', 'apply'],
     },
     enableRowGroup:true,
     tooltipField: this.propertyNames[i],
     cellStyle: {'font-size':'12px','font-weight':'400'}
   });
   this.tooltipShowDelay = 100;
  }
 // Header Definations
 // var abc=['Id','Dimension Name','Dimension Value','Date','Performance','Rank'];
  xyz.forEach(function (colDef, index) {
    colDef.headerName = header[index];
    colDef.headerTooltip=header[index];
  });
  
   this.columnDefs=xyz;
  this.gridApi.setColumnDefs(this.columnDefs);
  
  //Apply States
  this.rowData = test;  
 
  // });
  }
  fullScreen(){
    this.fullscreentoggle=!this.fullscreentoggle;
    if(this.fullscreentoggle===true){
      
      document.getElementById("side-bar").style.display = "none";
      document.getElementById("tree-view").style.display = "none";
      document.getElementById("console").style.display = "none";
      document.getElementById("ag-grid").classList.add("col-md-12")
      document.getElementById("grid-expand").classList.add("col-md-12")
      document.getElementById("grid-expand").classList.add("col-lg-12")
      document.getElementById("grid-expand").classList.add("col-xl-12")
      document.getElementById("grid-expand").classList.remove("main-body")
      document.getElementById("grid-expand").classList.add("main-body-for-agGrid-expand")
     
    }
    else{
      document.getElementById("side-bar").style.display = "block";
      document.getElementById("tree-view").style.display = "block";
      document.getElementById("console").style.display = "block";
      document.getElementById("ag-grid").classList.remove("col-md-12")
      document.getElementById("grid-expand").classList.remove("col-md-12")
      document.getElementById("grid-expand").classList.remove("col-lg-12")
      document.getElementById("grid-expand").classList.remove("col-xl-12")
      document.getElementById("grid-expand").classList.remove("main-body-for-agGrid-expand")
      document.getElementById("grid-expand").classList.add("main-body")
    }

    }
  
  save(){
    console.log(this.rowData);
    //  this.csvFileReadingService.sentCSVFileData(this.rowData).subscribe((message:any)=>{
    //    console.log(message);
    //  })
   }
   close(){
     this.gridClose.emit();
   }
   ExportExcel(){
     debugger
     this.gridApi.exportDataAsExcel();
   }
   ExportCSV(){
    debugger
    this.gridApi.exportDataAsCsv();
  }
}


