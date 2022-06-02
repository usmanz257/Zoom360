import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SyncGridColumnModel, SyncMappingGridModel } from 'src/app/models/SyncGridColumnModel';
import { CSVFileReadingService } from 'src/app/services/csvfile-reading.service';
@Component({
  selector: 'app-enrich-model-mapping',
  templateUrl: './enrich-model-mapping.component.html',
  styleUrls: ['./enrich-model-mapping.component.css']
})
export class EnrichModelMappingComponent implements OnInit {
  @ViewChild('grid',{static:true}) 
    public gridInstance : GridComponent ;  
  @ViewChild('template',{static:true}) 
    public toolbarTemplate: any;
  _modelList = [
    {dropdownText:'ID',dropdownValue:'id',selected:false},
    {dropdownText:'First Name',dropdownValue:'first_name',selected:true},
    {dropdownText:'Last Name',dropdownValue:'last_name',selected:false},
    {dropdownText:'Phone',dropdownValue:'phone3',selected:false}
   ];
 public headerList:SyncMappingGridModel[]=[];
 public pageSettings: PageSettingsModel;
 public fieldsvalues:object;
 public workspaceName:string;
test:any='<ejs-dropdownlist id="_workspace" Name="workspaceDropDown" [dataSource]="_workspaces" [fields]="fieldsvalues" placeholder="Select Model" ></ejs-dropdownlist>';
  constructor(private csvFileReadingService: CSVFileReadingService) {
    this.fieldsvalues = { dataSource: this._modelList,text:'dropdownText',value:'dropdownValue'};
   }

  ngOnInit() {
    this.getData();
    this.defineColumns();
    this.pageSettings = { pageSize: 6 };
    
  }
  defineColumns() {
    this.gridInstance.columns=[
      {
     field:'SourceColumn',
     headerText:'Source Column',
    },
    {
     headerText:'Target Column',
     template:this.test
    //  template:'<select><option>test</option></select>'
     // textAlign:'left',
     // width:120
    },
    
  ]
  }
  getData(){
    debugger
    var data=this.csvFileReadingService.getFileData();
    var columnList= Object.keys(data[0]);
    for(var i=0;i<columnList.length;i++){
      this.headerList.push(
        {
          SourceColumn:columnList[i],
         
        });
    }
  }
  Makelist(args,index){
    // var result= this.selectedData.findIndex(x=>x.functionName==this.DataqualityModel[index].functoinName);
    // if(args.value.length==0){
    //   this.selectedData.splice(result,1);
    // }
    // else{
    //   if(result==-1){
    //     this.selectedData.push({
    //       functionName:this.DataqualityModel[index].functoinName,
    //       functionParameter:'cols',
    //       parameterValue: args.value.toString()
    //    });
    //   }
    //   else{
    //     this.selectedData.splice(result,1);
    //     this.selectedData.push({
    //       functionName:this.DataqualityModel[index].functoinName,
    //       functionParameter:'cols',
    //       parameterValue: args.value.toString()
    //    });
    //   }
    // }
  
  
  }
}
