export class DataQualityList{
    funcitionDisplayName:string;
    functoinName:string; 
    functiongroup:string;  
    functiondetail:string;  
    enable:string;  
    
}
export class DatalabelingList{
    functionName:string;
    functionParameter:string;
    parameterValue:string;
}
export class DataLabelingSaveRecord{
    UserId:string;
    Workspaceid:string;
    ClientId:string;
    ClientDate:string;
    ClientTime:string;
    ClientTimeZone:string;
    DatalabelingList:DatalabelingList[];
}