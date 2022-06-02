import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContextMenuItem, ContextMenuService, EditService, EditSettingsModel, FilterService, ForeignKeyService, GridComponent, GroupService, InfiniteScrollService, PageService, PageSettingsModel, RowDataBoundEventArgs, SortService, ToolbarItems, VirtualScrollService, } from '@syncfusion/ej2-angular-grids';
import { SyncGridColumnModel } from 'src/app/models/SyncGridColumnModel';
import { CSVFileReadingService } from 'src/app/services/csvfile-reading.service';
import { DataManager, Query, JsonAdaptor,WebApiAdaptor } from '@syncfusion/ej2-data';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-enrich-csviewer',
  templateUrl: './enrich-csviewer.component.html',
  styleUrls: ['./enrich-csviewer.component.css'],
  // encapsulation: ViewEncapsulation.None,
   providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    InfiniteScrollService,
    ContextMenuService,
    ForeignKeyService
  ]
})
export class EnrichCSViewerComponent implements OnInit {
  @ViewChild('grid',{static:true}) 
    public gridInstance : GridComponent ;  
    public toolbarOptions: ToolbarItems[];
  // public columnNameList:SyncGridColumnModel[]=[];
  public data: object[]=[];
  public pageSettings: PageSettingsModel;
  public editSettings: Object;
  public filterSettings: Object;
  public editOptions: EditSettingsModel;
  allowfilter:boolean=false;
  shipColumns:object[];
  public contextMenuItems: ContextMenuItem[];
  initialSort:object;
  constructor(private csvFileReadingService: CSVFileReadingService) { }


  ngOnInit() {
    
    this.filterSettings = { type: 'Excel' };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel','Search'];
    this.pageSettings={pageSize:100}
    this.editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
    'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
    'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
    'LastPage', 'NextPage'];
    // this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , newRowPosition: 'Top' };
  }
  getData(){
    this.gridInstance.showSpinner();
    this.csvFileReadingService.getFileData().subscribe((Data:any)=>{
    //this.data = new DataManager({ url: environment.apiUrl+'/api/CSVHelper/GetCSVFileData', adaptor: new WebApiAdaptor });
    // this.data=Data;
    // this.gridInstance.refresh();
    var test=JSON.parse(Data);
    debugger
    let xyz=[];
    var columnList= Object.keys(test[0]);
    xyz.push({field:columnList[0],headerText:columnList[0],isPrimaryKey:true});
    for(var i=1;i<columnList.length;i++){
      // this.columnNameList.push({columnName:columnList[i]});
      xyz.push({field:columnList[i],headerText:columnList[i]});
    }
    this.gridInstance.columns=xyz;
  //   this.initialSort = {
  //     columns: [{ field: columnList[0], direction: 'Descending' }]
  // };
    //  this.data=new DataManager({ json: test, adaptor: new JsonAdaptor() }).executeLocal(new Query().take(43));
    this.data=test;
    // this.gridInstance.dataSourceChange();
    
    //  this.gridInstance.refreshColumns();
     this.gridInstance.hideSpinner();
     });
  }
  save(){
   var t=JSON.stringify(this.data);
    this.csvFileReadingService.sentCSVFileData(this.data).subscribe((message:any)=>{
      console.log(message);
    })
  }
  filter(){
    debugger
    this.allowfilter =! this.allowfilter;

  }
}
