import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CSVFileReadingService } from 'src/app/services/csvfile-reading.service';

@Component({
  selector: 'app-enrich-ag-grid-csvviewer',
  templateUrl: './enrich-ag-grid-csvviewer.component.html',
  styleUrls: ['./enrich-ag-grid-csvviewer.component.css']
})
export class EnrichAgGridCSVViewerComponent implements OnInit {
  @ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
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
  public propertyNames:any[]=[];
  constructor(private csvFileReadingService: CSVFileReadingService) {
    this.defaultColDef = {
      minWidth: 150,
      maxWidth: 300,
      filter: true,
      resizable: true,
      sortable: true,
      enablePivot: true,
      enableValue: true,
      autoBind:false,
      editable: true
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
    this.skipHeaderOnAutoSize=true
    this.headerHeight=40;
    this.rowHeight = 40;
    
   }

  ngOnInit() {
 
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getData();
//this.GetData(2,1002);
 
  }
  getData(){
    debugger
    this.agGrid.api.showLoadingOverlay();
    this.csvFileReadingService.getFileData().subscribe((data:any) => {
      var test=JSON.parse(data);
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
     cellStyle: {'font-size':'12px','font-weight':'400'}
   });
   
  }
  //Header Definations
  // xyz.forEach(function (colDef, index) {
  //   colDef.headerName = abc[index].columntext;
  // });
   this.columnDefs=xyz;
  this.gridApi.setColumnDefs(this.columnDefs);
  //Apply States
  this.rowData = test;  
  });
  }
  save(){
    debugger
    console.log(this.rowData);
    //  this.csvFileReadingService.sentCSVFileData(this.rowData).subscribe((message:any)=>{
    //    console.log(message);
    //  })
   }
}
