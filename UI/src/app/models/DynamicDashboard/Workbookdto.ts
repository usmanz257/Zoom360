export class GetWorkbookdto{
    id:number;  
    name:string;  
    description:string;
    pages:GetWorkbookPagedto[]
}

export class GetWorkbookPagedto{
    id:number;  
    name:string;  
    description:string;
    BSTATUS:string;
}
export class GetWidgetsdto{
    rowData
    columnDefs
    id:number;  
    name:string;  
    description:string; 
    type:string;
    pageId:number;
    cols:number;
    rows:number;
    layout:any;
    chart:any;
    x:number;
    y:number;
    
    
}

export class Layoutdto{
    id:number;  
    cols:number;  
    rows:number; 
    x:number;
    y:number;
}
export class FiltersDto
{
    filterId :number;
    id :number;
    query :string;
    displayName :string;
    columnName :string;
    isActive :boolean;
    filterValues:FiltersSource[];
    constructor(){
        this.filterValues=[];
    }
}
export class FiltersSource
    {
        filterText:string;
        filterValue:string;
    }
export class ColumnValue
{
    columnName:string;
    filterValue:string;
}
export class FilterQueryDto
{
    id:number;
    filterValues:ColumnValue[];
    constructor(){
        this.filterValues=[];
    }
}