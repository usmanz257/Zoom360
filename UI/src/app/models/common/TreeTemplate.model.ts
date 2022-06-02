import { classNames } from "@syncfusion/ej2-angular-lists";
import { DataTable } from "fusioncharts";
import { UserDetail } from "../user-detail.model";

export class TreeTemplateInput extends UserDetail{
    Node_id:string;
    scriptId:string;
}
export class TreeTemplateDto extends UserDetail{

    Node_id:string;
    scriptId:string;
    Temp_Name:string;
    Temp_Enable:boolean;
    Template: TreeTemplateList[];
}
export class TreeTemplatePropertiesDto{
    Display_Name:string;
    Control_Type:string;
    Control_Value:string;
    Checkbox_Control_Value:boolean;
    ToolTip:string;
    Help_Icon:boolean;
    Help_Text:string;
    Visible:boolean;
    Background_Color:string;
    Optional:string;
}
export class TreeTemplateDataDto{
    Input_Source:string;
    Source_Type:string;
}
export class TreeTemplateValidationDto{
    condition1:string;
}
export class TreeTemplateList{
    Properties:TreeTemplatePropertiesDto;
    Data:TreeTemplateDataDto;
    Validation:TreeTemplateValidationDto;
}
export class InputSourceList{
    Input_Source:string;
}
export class TreeTemplateQueryDataModel{
      userId :string;
      workspaceId :string;
      clientId :string;
      scriptId :string;
      nodeId :string;
      serverName: string;
      databaseName:string;
      trustedConnection:string;
      id:string;
      password:string;
      security:string;
      datatableName:string;
      columnName:string;
      databaseType:string;
      portNumber:string;
      gridColumnNames :string[];
      gridValues :DataTable;

}



  