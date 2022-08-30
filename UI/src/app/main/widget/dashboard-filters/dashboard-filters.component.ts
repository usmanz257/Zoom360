import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { ColumnValue, FilterQueryDto, FiltersDto} from 'src/app/models/DynamicDashboard/Workbookdto';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';
import { ToastMessage } from '../../administration/MessageTypes/toast-message';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.css']
})
export class DashboardFiltersComponent implements OnInit {
  public testToast=new ToastMessage();
	@ViewChild('defaulttoast',{static:true})
	public toastObj: ToastComponent;
	@ViewChild('toastBtnShow',{static:true})
  _filterList:FiltersDto[]=[];
  _selectedValues:ColumnValue[]=[];
  workbookName:string="";
  pageName:string="";
  workbook:any;
  page:any
  public position;
  constructor(public MenuService: AppMenuService) {
   }

  ngOnInit() {
    this.position={ X: 'Left', Y: 'Top' };
      this.MenuService.workbook$.subscribe((res)=> {
        this.workbook=res;
        this.workbookName=this.workbook.name;
      });
    this.MenuService.page$.subscribe((res)=>this.getFilters(res));
  }
  getFilters(page){
    this.pageName=page.name
    this.page=page;
    this.MenuService.getFilters(page).subscribe((data)=>{
      if(data){
        this._filterList = data;
      }
    });
  }
  selectedFilterValues(columnName:string,event:any){
    if(event!=undefined){
      var index = this._selectedValues.findIndex(x=>x.columnName==columnName);
      if(index==-1){
        this._selectedValues.push({columnName:columnName,filterValue:event.filterValue});
      }else{
        this._selectedValues.splice(index,1,{columnName:columnName,filterValue:event.filterValue});
      }
    }
  }
  remove(columnName:any){
    if(this._selectedValues.length>=1){
    var index = this._selectedValues.findIndex(x=>x.columnName == columnName);
    this._selectedValues.splice(index,1);
    }
  }
  applyFilters(){
    var filters= {
      id:this.page.id,
      filterValues:this._selectedValues
    }as FilterQueryDto;  
    this.MenuService.getFilteredWidgets(filters).subscribe((data)=>{
      this.MenuService.widgets$.next(data);
    });
  }
  updateDashboard(){
    const dashboard={
      workbook:this.workbook,
      page : this.page
    }
    // dashboard.workbook.name=this.workbookName;
    // dashboard.page.name=this.pageName;
    this.MenuService.updateDashboard(dashboard).subscribe((data)=>{
      if(data.status==1){
        this.testToast.toast[1].content=data.message;
        this.toastObj.show(this.testToast.toast[1]);
        this.workbook.name = this.workbookName;
        this.page.name = this.pageName;
      }else{
      this.testToast.toast[2].content=data.message;;
      this.toastObj.show(this.testToast.toast[2]);
      }
      
    });
  }
 
}
