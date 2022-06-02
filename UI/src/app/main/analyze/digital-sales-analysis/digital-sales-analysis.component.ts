import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { SalesDetailAnalysisService } from 'src/app/Services/Analyze/sales-detail-analysis.service';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { GridTemplateModel } from 'src/app/models/common/DataGridTemplate.model';
import { ImageFormatterComponent } from '../../widget/image-formatter/image-formatter.component';



@Component({
  selector: 'app-digital-sales-analysis',
  templateUrl: './digital-sales-analysis.component.html',
  styleUrls: ['./digital-sales-analysis.component.css']
})
export class DigitalSalesAnalysisComponent implements OnInit {

  @ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public defaultColDef;
  public rowData: any;
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
  public analyzeType='Marketing data';
  //dynamic
  public templateValue:number=1;
  colState:any;
  test:any;
  newId:number;
  newtemplateName:string='';
  errorMessage:string;
  public template:GridTemplateModel[]=[];
//   public template:GridTemplateModel[]=[
//     {
//     value:1,
//     text:'Default',
//     template:[ { "colId": "platform", "width": 242, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "imperssions", "width": 242, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "clicks", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "ctr", "width": 242, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "period_Display_Date", "width": 242, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 } ]
//     },
//     {
//       value:2,
//       text:'Template1',
//       template:[ { "colId": "platform", "width": 335, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "clicks", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "imperssions", "width": 300, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "ctr", "width": 242, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "period_Display_Date", "width": 334, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 } ]

//     },
//     {
//       value:3,
//       text:'Template2',
//       template:[ { "colId": "clicks", "width": 150, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "period_Display_Date", "width": 335, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "platform", "width": 334, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "imperssions", "width": 300, "hide": false, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 }, { "colId": "ctr", "width": 242, "hide": true, "pinned": null, "sort": null, "sortIndex": null, "aggFunc": null, "rowGroup": false, "rowGroupIndex": null, "pivot": false, "pivotIndex": null, "flex": 1 } ]
//     },
// ]
  constructor(private http: HttpClient,
    private MenuService: AppMenuService,
    private salesDetailAnalysisService:SalesDetailAnalysisService) {
    //connectorimage
    this.columnDefs = [
      
      { headerName: 'Platform',
        field: 'platform',
        cellClass: 'font-style',
        filter: 'agSetColumnFilter',
        filterParams: {
          buttons: ['reset', 'apply'],
          applyMiniFilterWhileTyping: true 
        },
        enableRowGroup:true,
        rowDrag: true,
        cellStyle: {'font-size':'12px','font-weight':'400'},
        cellRenderer: 'group',
    cellRendererParams: {
        innerRendererFramework: ImageFormatterComponent
    }
      },
      { headerName: 'impressions',
        field: 'imperssions',
        cellClass: 'font-style',
        filter: 'agTextColumnFilter',
        minWidth:150,
        maxWidth: 300,
        filterParams: {
          buttons: ['clear', 'apply'],
        },
        enableRowGroup:true,
        cellStyle: {'font-size':'12px','font-weight':'400'}
      },
      {headerName: 'Clicks',
        field: 'clicks',
        cellClass: 'font-style',
        minWidth:150,
        filter: 'agSetColumnFilter',
        filterParams: {
          buttons: ['apply', 'cancel'],
          closeOnApply: true,
        },
        maxWidth: 150,
        enableRowGroup:true,
        chartType:'series',
        cellStyle: {'font-size':'12px','font-weight':'400'}
      },
      {headerName: 'CTR(%)',
        field: 'ctr',
        cellClass: 'font-style',
        minWidth:150,
        filter: 'agSetColumnFilter',
        filterParams: {
          buttons: ['apply', 'cancel'],
          closeOnApply: true,
        },
        enableRowGroup:true,
        cellStyle: {'font-size':'12px','font-weight':'400'}
      },
      {headerName: 'Date',
      field: 'period_Display_Date',
      cellClass: 'font-style',
      minWidth:150,
      filter: 'agSetColumnFilter',
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
      autoBind:false,
     // floatingFilter: true,
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
          text: 'Digital Sales Analysis',
        },
        legend: { position: 'bottom' },
      },
      column: { axes: { category: { label: { rotation: 0 } } } },
    };
  }
  ngOnInit(): void {
    this.salesDetailAnalysisService.getSaleDetailAnalysis()
      .subscribe((data) => {
        debugger
        this.rowData = data;
      //  params.api.getToolPanelInstance('filters').expandFilters();
      });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  redrawAllRows(){
    this.agGrid.api.setRowData(this.rowData);
    this.agGrid.api.redrawRows();
     // this.agGrid.api.applyTransaction(this.rowData);
  }
  onFirstDataRendered(params) {
    var createRangeChartParams = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 79,
        columns: ['unitPrice', 'quantity','location'],
      },
      chartType: 'groupedColumn',
      chartContainer: document.querySelector('#myChart'),
      aggFunc: 'sum',
    };
    params.api.createRangeChart(createRangeChartParams);
  }
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
  // this.colState = this.gridColumnApi.getColumnState();
  // console.log(this.colState);
  console.log(this.templateValue);
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
    this.errorMessage='Please enter template name.';
  }
  else{
  this.errorMessage='Saved..';
  this.newId = Math.floor((Math.random() * 100) + 1);
  this.colState = this.gridColumnApi.getColumnState();
  //this.template.push({value:this.newId,text:this.newtemplateName,template:this.colState});
  this.errorMessage='Saved';
  this.newtemplateName='';
  }
}
clearTemplateName(){
  this.newtemplateName='';
  this.errorMessage='';
}
}
