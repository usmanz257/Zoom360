
import { Component, OnInit, ViewChild } from '@angular/core';
import { RuleModel , RuleChangeEventArgs} from '@syncfusion/ej2-querybuilder';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { hardwareData } from './datasource';
import { DataManager, Query, ReturnOption, Predicate } from '@syncfusion/ej2-data';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { GridComponent, PageService, SelectionService } from '@syncfusion/ej2-angular-grids';
import { Browser } from '@syncfusion/ej2-base';
import { FieldSelection } from 'src/app/services/extract/ConnectorService/FieldsSelectionsStep6Services';
@Component({
  selector: 'app-query-rule-builder',
  templateUrl: './query-rule-builder.component.html',
  styleUrls: ['./query-rule-builder.component.css'],
  providers: [PageService, SelectionService]
})
export class QueryRuleBuilderComponent implements OnInit {
    @ViewChild('querybuilder',{static:true}) qryBldrObj: QueryBuilderComponent;
    @ViewChild('grid',{static:true}) grid: GridComponent;
    tableNameList:any[]=[];
    public fieldsvalues:object;
    public columnNames: any[]=[];
    gridDataSource = hardwareData;
        pageSettings = { pageSize: 8, pageCount: 5 };
        importRules: RuleModel = {
            'condition': 'or',
            'rules': [{
                'label': 'Category',
                'field': 'Category',
                'type': 'string',
                'operator': 'endswith',
                'value': 'Laptop'
            }]
        };
    values: string[] = ['Mr.', 'Mrs.'];
    //   public importRules: RuleModel;
      queryjson:string;
  constructor(private fieldSelection:FieldSelection) { }
  ngOnInit(): void {
    // this.data = hardwareData;
    this.GetEntityNameList();
}
GetEntityNameList(){
    debugger
    this.fieldSelection.GetEntityNameList("admin","1002","1","214","zmdb").subscribe((data:any)=>{
        this.tableNameList=data;
        this.fieldsvalues = { dataSource: this.tableNameList,text:'objecT_NAME',value:'objecT_NAME'};
    });
}
getobjectfield(tableName){
    debugger
    this.fieldSelection.GetObjectFieldNameList("admin","1002","1","214",null,"zmdb",tableName).subscribe((data:any)=>{
        debugger
        this.columnNames=data;
    });
}
    createdControl(): void {
        if (Browser.isDevice) {
            this.qryBldrObj.summaryView = true;
          }
      }
    setRulesJson(): void {
        this.qryBldrObj.setRules(this.importRules);
    }
      setRules(): void {
        this.qryBldrObj.setRulesFromSql("TaskID = 1 and Status LIKE ('Assigned%')");
    }
    getSql(): void {
        console.log(this.qryBldrObj.getSqlFromRules(this.qryBldrObj.getRules()));
        alert(this.qryBldrObj.getSqlFromRules(this.qryBldrObj.getRules()));
    
    }
     getJson(): void {
       console.log(JSON.stringify({ condition: this.qryBldrObj.rule.condition, rules: this.qryBldrObj.rule.rules }, null, 4));
       alert(JSON.stringify({ condition: this.qryBldrObj.rule.condition, rules: this.qryBldrObj.rule.rules }, null, 4));
       this.queryjson =JSON.stringify({ condition: this.qryBldrObj.rule.condition, rules: this.qryBldrObj.rule.rules }, null, 4);
    }
    // updateRule(args: RuleChangeEventArgs): void {
    //     const predicate: Predicate = this.qryBldrObj.getPredicate(args.rule);
    //     const fltrDataSource: Object[] = [];
    //     let dataManagerQuery: Query;
    //     if (isNullOrUndefined(predicate)) {
    //         dataManagerQuery = new Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status']);
    //     } else {
    //         dataManagerQuery = new Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status'])
    //             .where(predicate);
    //     }
    //     new DataManager(hardwareData)
    //         .executeQuery(dataManagerQuery)
    //         .then((e: ReturnOption) => {
    //             (<Object[]>e.result).forEach((data: Object) => {
    //                 fltrDataSource.push(data);
    //             });
    //         });
    //     this.gridDataSource = fltrDataSource;
    //     this.grid.refresh();
    // }
    // onGridCreated(): void {
    //     this.updateRule({rule: this.qryBldrObj.getValidRules(this.qryBldrObj.rule)})
    // }
}
