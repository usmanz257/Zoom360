export class SavePredictionModel
    {
        userID  :string;
        workspaceID  :string;
        clientId  :string;
        scriptName  :string;
        AmountSpentUSD  :string;
        results  :string;
        impressions  :string;
        purchaseConversionValueUSD  :string;
        reach  :string;
        resultTypeCode  :string;
        purchaseROASReturnonAdSpend  :string;
        costPerResultUSD  :string;
        Status  :string;
        PredictedResult  :string;
        
    }
    export class ProductionProcessModel
    {
        productionProcess:string;  
        productionProcessHeader:string;      
        productionProcessControlLabels :string;
        productionProcessControlHelp :string;
    }
    export class MarketingDTOModel{
        UserId :string;
		WorkSpaceId :string;
		Client_Id :string;
		ConnectorId :string;
		AccountId :string;
		WidgetCategory :string;
        AttributeId :string;
        Attributes:string;
		WidgetID :string;
}
export class MArketingStrategy
    {
        widgetCategory :string;
        widgetID :string;
        attributeID:string;
        attribute:string;
        chartType:string;
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

