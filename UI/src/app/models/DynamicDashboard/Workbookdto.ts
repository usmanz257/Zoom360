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