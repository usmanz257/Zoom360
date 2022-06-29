import { Component, OnInit } from '@angular/core';
import { dropdownModel } from 'src/app/models/common/dropdownmodel';
import { ColumnValue, FilterQueryDto, FiltersDto} from 'src/app/models/DynamicDashboard/Workbookdto';
import { AppMenuService } from 'src/app/Services/common/app-menu.service';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.css']
})
export class DashboardFiltersComponent implements OnInit {
  _filterList:FiltersDto[]=[];
  _selectedValues:ColumnValue[]=[];
  page:any
  constructor(public MenuService: AppMenuService) {
   }

  ngOnInit() {
    if(this.MenuService.page$)
    {
      this.MenuService.page$.subscribe(res=>this.getFilters(res));
    }
  }
  getFilters(page){
    this.page=page;
    debugger
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
    debugger
    if(this._selectedValues.length>=1){
    var index = this._selectedValues.findIndex(x=>x.columnName == columnName);
    this._selectedValues.splice(index,1);
    }
  }
  applyFilters(){
    var filters= {
      pageId:this.page.id,
      filterValues:this._selectedValues
    }as FilterQueryDto;  
    this.MenuService.getFilteredWidgets(filters).subscribe((data)=>{
      this.MenuService.widgets$.next(data);
    });
  }
}
