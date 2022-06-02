import { HttpClient } from '@angular/common/http';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { SalesDetailAnalysisService } from 'src/app/Services/Analyze/sales-detail-analysis.service';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { GridTemplateModel } from 'src/app/models/common/DataGridTemplate.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-analysis-tool',
  templateUrl: './analysis-tool.component.html',
  styleUrls: ['./analysis-tool.component.css']
})
export class AnalysisToolComponent implements OnInit {
  @ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
  @ViewChild('analyzeTool',{static:true}) analyzetool : ElementRef; 
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public defaultColDef;
  public rowData:any[]=[];
  public sideBar;
  public rowGroupPanelShow;
  public rowSelection;
  public enableRowGroup;
  public rowClassRules;
  public pivotPanelShow;
  public statusBar;
  public chartThemeOverrides;
  public headerHeight;
  public rowHeight;
  public rowStyle;
  public className;
  public fullscreentoggle=false;
  public params;
 // public autoBind;
 //Dynamic Grid
 public templateValue:number=1;
 colState:any;
 test:any;
 newId:number;
 newtemplateName:string;
 errorMessage:boolean=false;
 public template:GridTemplateModel[]=[];
//  public template:GridTemplateModel[]=[
//    {
//    value:1,
//    text:'Default',
//    template:[ { "colId": "invoiceNo", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "stockCode", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "description", "width": 300, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "quantity", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceDate", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "unitPrice", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": "sum", "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "customerId", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "location", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceTime", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 } ]
//    },
//    {
//      value:2,
//      text:'Template1',
//      template:[ { "colId": "invoiceNo", "width": 150, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "stockCode", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "description", "width": 300, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "quantity", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "unitPrice", "width": 179, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": "sum", "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceDate", "width": 179, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "customerId", "width": 150, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "location", "width": 178, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceTime", "width": 150, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 } ]

//    },
//    {
//      value:3,
//      text:'Template2',
//      template:[ { "colId": "customerId", "width": 150, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceNo", "width": 179, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "stockCode", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "description", "width": 300, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "quantity", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceDate", "width": 150, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "unitPrice", "width": 268, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": "sum", "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "invoiceTime", "width": 150, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "location", "width": 268, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 } ]
//     },
// ]
  constructor(private http: HttpClient,private MenuService: AppMenuService,public salesDetailAnalysisService:SalesDetailAnalysisService) {
    this.salesDetailAnalysisService.componentMethodCalled.subscribe(() => {
     this.redrawAllRows();
    });
    this.columnDefs = [
      
      {headerName: 'Invoice No',
        field: 'invoiceNo',
        cellClass: 'font-style',
        filter: 'agNumberColumnFilter',
        filterParams: {
          buttons: ['reset', 'apply'],
        },
        enableRowGroup:true,
        rowDrag: true,
        cellStyle: {'font-size':'12px','font-weight':'400'}
      },
      {
        headerName: 'Stock Code',
        field: 'stockCode',
        cellClass: 'font-style',
        minWidth:150,
        maxWidth: 150,
        filter: 'agNumberColumnFilter',
        filterParams: {
          buttons: ['apply', 'reset'],
          closeOnApply: true,
        },
        enableRowGroup:true
      },
      {headerName: 'Description',
        field: 'description',
        cellClass: 'font-style',
        filter: 'agTextColumnFilter',
        minWidth:300,
        maxWidth: 300,
        filterParams: {
          buttons: ['clear', 'apply'],
        },
        enableRowGroup:true,
        cellStyle: {'font-size':'12px','font-weight':'400'},
        editable:true
      },
      {headerName: 'Quantity',
        field: 'quantity',
        cellClass: 'font-style',
        minWidth:150,
        filter: 'agSetColumnFilter',
        filterParams: {
          buttons: ['apply', 'cancel'],
          closeOnApply: true,
        },
        maxWidth: 150,
        enableRowGroup:true,
        cellStyle: {'font-size':'12px','font-weight':'400'}
      },
      {headerName: 'Invoice Date',
        field: 'invoiceDate',
        cellClass: 'font-style',
        minWidth:150,
        filter: 'agNumberColumnFilter',
        filterParams: {
          buttons: ['apply', 'cancel'],
          closeOnApply: true,
          filterOptions: ['inRange']
        },
        enableRowGroup:true,
        cellStyle: {'font-size':'12px','font-weight':'400'}
      },
      {headerName: 'Unit Price',
      field: 'unitPrice',
      cellClass: 'font-style',
      minWidth:150,
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['apply', 'cancel'],
        closeOnApply: true,
      },
      enableRowGroup:true,
      cellStyle: {'font-size':'12px','font-weight':'400'},
      aggFunc: 'sum',
    },
    {headerName: 'Customer ID',
    field: 'customerId',
    cellClass: 'font-style',
    minWidth:150,
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['apply', 'cancel'],
      closeOnApply: true,
    },
    enableRowGroup:true,
    maxWidth: 150,
    cellStyle: {'font-size':'12px','font-weight':'400'}
  },
  {headerName: 'Location',
  field: 'location',
  cellClass: 'font-style',
  
  filter: 'agSetColumnFilter',
  filterParams: {
    buttons: ['apply', 'cancel'],
    closeOnApply: true,
  },
  enableRowGroup:true,
  resizable: true,
  cellStyle: {'font-size':'12px','font-weight':'400'}
},
{headerName: 'Invoice Time',
field: 'invoiceTime',
cellClass: 'font-style',
minWidth:150,
filter: 'agTextColumnFilter',
filterParams: {
  buttons: ['apply', 'cancel'],
  closeOnApply: true,
},
enableRowGroup:true,
cellStyle: {'font-size':'12px','font-weight':'400'}
},
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
      resizable: true,
      sortable: true,
      enablePivot: true,
      enableValue: true,
      autoBind:false
    };    
    this.rowGroupPanelShow = 'always';
    this.rowSelection = 'multiple';
    this.enableRowGroup=true;
    this.pivotPanelShow = 'always';
    this.headerHeight=40;
    this.rowHeight = 40;
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
          text: 'Sales Detail Analysis',
        },
        legend: { position: 'bottom' },
      },
      column: { axes: { category: { label: { rotation:  45} } } },
    };
    this.gridColumnApi.applyColumnState({
      state: this.test,
      applyOrder: true,
    });
  }
  ngOnInit(): void {
   }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  redrawAllRows(){
    this.colState = this.gridColumnApi.getColumnState();
    console.log(this.colState);
    this.http.get(`${environment.apiUrl}`+'/api/GridAndGraph/GridData')
    .subscribe((data:any[]) => {
      this.rowData = data;
    //  params.api.getToolPanelInstance('filters').expandFilters();
    });
    this.agGrid.api.setRowData(this.rowData);
    this.agGrid.api.showLoadingOverlay();
    this.agGrid.api.refreshCells();
     // this.agGrid.api.applyTransaction(this.rowData);
     
  }
  // onFirstDataRendered(params) {
  //   var createRangeChartParams = {
  //     cellRange: {
  //       rowStartIndex: 0,
  //       rowEndIndex: 79,
  //       columns: ['unitPrice', 'quantity','location'],
  //     },
  //     chartType: 'groupedColumn',
  //     chartContainer: document.querySelector('#myChart'),
  //     aggFunc: 'sum',
  //   };
  //   params.api.createRangeChart(createRangeChartParams);
  // }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { make: node.key, model: 'Group' };
      }
      return node.data;
    });
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
fullScreen(){
  this.fullscreentoggle=!this.fullscreentoggle;
  if(this.fullscreentoggle==true){
    this.MenuService.hideSideMenu=false;
    this.className='overlay col-sm-12';
  }
  else{
    this.MenuService.hideSideMenu=true;
    this.className='';
  }
  }
setTemplate(){
    debugger
  //  this.colState = this.gridColumnApi.getColumnState();
  //  console.log(this.colState);
  //  console.log(this.templateValue);
   this.colState = this.template.filter((data) =>data.value == this.templateValue);
   this.test = this.colState[0].template;
   this.gridColumnApi.applyColumnState({
     state: this.test,
     applyOrder: true,
   });
 }
 saveTemplate(){
  debugger
  if(this.newtemplateName =='')
  {
    this.errorMessage=true;
  }
  else{
  this.errorMessage=false;
  this.newId = Math.floor((Math.random() * 100) + 1);
  this.colState = this.gridColumnApi.getColumnState();
 // this.template.push({value:this.newId,text:this.newtemplateName,template:this.colState});
    
  }
}
 clearTemplateName(){
  this.newtemplateName='';
  this.errorMessage=false;
}
}
