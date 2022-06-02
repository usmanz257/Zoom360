export  class GetAiInsightsModel
    {
        header_Content:string;
        tail_Content:string;
    }
export class AIinsightWidgetDataModel
    {
        widgetCategory :string;
        widgetID :string;
        attributeID:string;
        chartType:string;
        widgetType:string;
        attribute:string;
        SeverityColor:string;
        severityLevel :string;
        workspaceName :string;
        subCategory :string;
        connectorIcon :string;
        mlOutlier:string;
        WorkspaceColor:string;
        mlaiOutcome :string;
        detailDescription :string;
        totalLike :number;
        totalDislike :number;
        isLike?:boolean;
        dislike?:boolean;
        totalShare :number;
        totalComments :number;
        chart :any;
        data:object;
    }

export class AiInsightDto{
        UserId :string;
		WorkSpaceId :string;
		Client_Id :string;
		ConnectorId :string;
		AccountId :string;
		WidgetCategory :string;
        AttributeId :string;
        Attributes:string;
		WidgetID :string;
        chartType : string;
}

export class SaveLikeDislikeDtO{
      userId:string; 
      workspaceId:string;
      clientId:string; 
      widgetCategory:string; 
      AttributeId:string;
      isLike:string; 
      clientDate:string; 
      clientTime:string;  
      clientTimeZone:string;  
      remarks1?:string;  
      remarks2?:string;  
      remarks3?:string;  
      remarks4?:string;  
      Flex1?:string;  
      Flex2?:string;  
      Flex3?:string;  
      Flex4?:string;  
      Flex5?:string;  
      Flex6?:string;  
      Flex7?:string;  
      Flex8?:string; 
      Flex9?:string; 
      Flex10?:string;  
      Flex11?:string;  
      Flex12?:string;  
      Flex13?:string;  
      Flex14?:string;  
      Flex15?:string;  
      Flex16?:string;  
}
import { UserDetail } from "../user-detail.model";

export class ChartTypeModel extends UserDetail{
    chartType:string;
}
export class ChartTypeDiemnsion extends UserDetail{
    chartDimension:string;
}

