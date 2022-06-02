
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild, Injector } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { SalesDetailAnalysisService } from '../../Services/Analyze/sales-detail-analysis.service';
import { AppMenuService } from '../../Services/common/app-menu.service';
import { AnalysisToolComponent } from './analysis-tool/analysis-tool.component';
import { GridStructureService } from 'src/app/services/common/grid-structure.service';
import { NodeCheckEventArgs, TreeView } from '@syncfusion/ej2-angular-navigations';
import { ClientDetailService } from 'src/app/services/client-detail.service';
import { RollupTreeDto, RollupTreeModel } from 'src/app/models/common/RollupTree.model';
import { AppComponentBase } from 'src/app/services/AppComponentBase';
import { DropDownLoadService } from 'src/app/services/common/drop-down-load.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css'],
  providers: [AnalysisToolComponent]
})
export class AnalyzeComponent extends AppComponentBase implements OnInit,OnDestroy  {
  
  mainmenuID:number=6;
  ActiveRouteClass:string='';
  //@ContentChild(AnalysisToolComponent);
  @ViewChild('agGrid',{static:true}) agGrid: AgGridAngular;
  @ViewChild('tree',{static:true}) public tree : TreeView;
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
  public className='col-md-10';
  public fullscreentoggle=false;
  public test1='test';
  //dynamic
  public templateValue:number=1;
  colState:any;
  test:any;
  newId:number;
  newtemplateName:string='';
  errorMessage:string;
  public analyze:any;
  public analyzeType;
  public propertyNames:any[]=[];
  rollupTreeModel:RollupTreeModel[]=[];
  public field:Object;
  rollupTreeDto:RollupTreeDto={} as RollupTreeDto;
  public templates:any[]=[];
  public fields: object = { dataSource: this.templates, id: 'value', text: 'text', child: 'templateDetail' };
  public Treedropsetting: object;
  constructor(
    public MenuService: AppMenuService,
    public salesDetailAnalysisService:SalesDetailAnalysisService,
    private http: HttpClient,
    private gridStructureService:GridStructureService,
    injector:Injector,
    private dropDownLoadService:DropDownLoadService) {
      super(injector);
      this.gridStructureService.getGridStructure().subscribe((data:any)=>{
        debugger
        this.templates= data.result;
        this.fields = { dataSource: this.templates, id: 'value', text: 'text', child: 'templateDetail' };
      });
    this.defaultColDef = {
      minWidth: 150,
      maxWidth: 300,
      filter: true,
      resizable: true,
      sortable: true,
      enablePivot: true,
      enableValue: true,
      autoBind:false,
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
      column: { axes: { category: { label: { rotation: 45 } } } },
    };
    this.rowGroupPanelShow = 'always';
    this.rowSelection = 'multiple';
    this.enableRowGroup=true;
    this.pivotPanelShow = 'always';
    this.skipHeaderOnAutoSize=true
    this.headerHeight=40;
    this.rowHeight = 40;
    }
  ngOnInit(): void {
 // this.getRollup();
  }
onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
//this.GetData(2,1002);
 
  }
  // getRollup(){
  //   debugger
  //   this.rollupTreeDto.clientId=this.clientDetailService.getClientID();
  //   this.rollupTreeDto.userId=this.clientDetailService.getuserID();
  //   this.rollupTreeDto.workspaceId=this.clientDetailService.getWorkspaceID();
  //   this.rollupTreeDto.ClientTime=this.clientDateTimeService.getCilentTime();
  //   this.rollupTreeDto.ClientDate=this.clientDateTimeService.getCilentTime();
  //   this.rollupTreeDto.ClientTime=this.clientDateTimeService.getCilentTime();
  //   this.rollupTreeDto.ClientTimeZone=this.clientDateTimeService.getClientTimeZone();
  //   this.rollupTreeDto.TreeName='Rollup';
  //   this.dropDownLoadService.GetRollupTree(this.rollupTreeDto).subscribe((data:any)=>{
  //     debugger
  //     this.rollupTreeModel=data;
  //     this.Treedropsetting={ dataSource: this.rollupTreeModel, id: 'nodeId', parentID: 'parentId', text: 'nodeName', hasChildren: 'hasChild'}
  //   });
  // }
GetData(parentId,childId){

  this.MenuService.setActiveClass(childId);
  let sourceid= parentId;
  let templateid = childId;

//find relevent data source
  this.analyze = this.templates.find((data)=> data.value==sourceid);
  
if (this.analyzeType != this.analyze.text){
    this.analyzeType= this.analyze.text;

  //loading overly and dynamic Data get Request
    this.agGrid.api.showLoadingOverlay();
    this.salesDetailAnalysisService.getGridDynamicData(this.analyzeType)
    .subscribe((data:any[]) => {
      this.propertyNames = Object.keys(data[0]);
      let xyz=[];
      let abc= this.analyze.columntext;
    for(let i=0;i<this.propertyNames.length;i++){
      xyz.push(
    { headerName: this.propertyNames[i],
      field: this.propertyNames[i],
      cellClass: 'font-style',
      suppressSizeToFit:true,
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['clear', 'apply'],
      },
      enableRowGroup:true,
      cellStyle: {'font-size':'12px','font-weight':'400'}
    });
    
  }
  //Header Definations
  xyz.forEach(function (colDef, index) {
    colDef.headerName = abc[index].columntext;
  });
  
  this.columnDefs=xyz;
  this.gridApi.setColumnDefs(this.columnDefs);
  //Apply States
  this.colState = this.analyze.templateDetail.find((data) =>data.value == templateid);
  this.test = this.colState.template;
  this.gridColumnApi.applyColumnState({
    state: this.test,
    applyOrder: true,
  });
  this.rowData = data;  
  });
  }
  else{
    //Apply States
  this.colState = this.analyze.templateDetail.find((data) =>data.value == templateid);
  this.test = this.colState.template;
  this.gridColumnApi.applyColumnState({
    state: this.test,
    applyOrder: true,
  });
  }
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
  debugger
  this.fullscreentoggle=!this.fullscreentoggle;
  if(this.fullscreentoggle==true){
    this.MenuService.hideSideMenu=false;
    this.className='overlay col-md-12';
  }
  else{
    this.MenuService.hideSideMenu=true;
    this.className='col-md-10';
  }
  }
setTemplate(){
   debugger
  //  let val= '11'
  //let val = test.target.value;
  //get state
//   this.colState = this.gridColumnApi.getColumnState();
//  console.log(this.colState);
  
  //console.log(this.templateValue);
  // set state
  // this.colState = this.templates[0].templateDetail.find((data) =>data.value == val);
  // console.log(this.colState);
  // this.test = this.colState.template;
  // this.gridColumnApi.applyColumnState({
  //   state: this.test,
  //   applyOrder: true,
  // });
}
saveTemplate(){
  debugger
  if(this.newtemplateName =='')
  {
    this.errorMessage='Please enter template name';
  }
  else{
  
 // this.newId = Math.floor((Math.random() * 100) + 1);
  this.colState = this.gridColumnApi.getColumnState();
  let temp={
    userId:'admin',
    subUserId:'1',
    workSpaceId:'1',
    clientId:'1002',
    parentId : this.analyze.value,
    templateId: null,
    childName:this.newtemplateName,
      template:this.colState
  }
  this.gridStructureService.SaveGridStructure(temp).subscribe((data:any)=>{
    let message = data.result;
    console.log(message);
    this.gridStructureService.getGridStructure().subscribe((data:any)=>{
      this.templates= data.result;
      this.fields = { dataSource: this.templates, id: 'value', text: 'text', child: 'templateDetail' };
      this.tree.refresh();
      
    });
   
    // var treeObj = $("#tree").ejTreeView('instance'); 
    // treeObj.refresh(); 
  });
  //this.analyze.templateDetail[0].push({value:null,text:this.newtemplateName,template:this.colState});
  // this.errorMessage='Saved';
  // console.log(this.analyze);
  // this.newtemplateName='';
  // console.log(this.templates);
  
  }
}
clearTemplateName(){
  this.newtemplateName='';
  this.errorMessage='';
}
ngOnDestroy() {
    console.log
    this.ActiveRouteClass='';
}
SaledetailAnalysis(){   
    // this.salesDetailAnalysisService.getSaleDetailAnalysis();
}
callMethod(){
    debugger
    this.ActiveRouteClass='ActiveRoute';
    this.salesDetailAnalysisService.callComponentMethod();
}
changeClass(){
    this.ActiveRouteClass='';
}
onNodeClick(){ 
    var treenode= document.getElementById('treeelement') as HTMLInputElement;
   console.log(treenode);
} 
Test(val){
}
nodeSelected(args,id) {
  debugger
  //console.log(args.nodeData);
   console.log(id.treeData);
}
public editing(args: NodeCheckEventArgs,id) {
  debugger
    //check whether node is root node or not
    if (args.node.parentNode.parentNode.nodeName !== "LI") {
        args.cancel = true;
    }
    else{
     console.log(args.node);
     console.log(id.treeData);
    }
}
}
