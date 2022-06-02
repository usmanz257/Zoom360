export class SourceConnectionSettingModel
    {
        userId :string;
        workspaceId :string;
        clientId :string;
        connectorId :string;
        accountId :string;
        workspaceName :string;
        workspaceDisplayName :string;
        connectionName :string;
        destinationEnabled :boolean;
        nextRunScheduled :boolean;
    }
    export class ObjectFieldsList {
        OBJECT_ID:string="";  
         OBJECT_NAME:string="";  
         OBJECT_TYPE:string="";  
         DISPLAY_NAME:string="";   
         OBJECT_VISIBILITY :string="";  
         SERVER_INSERT_DATE:string="";  
         OBJECT_IMAGE:string=""; 
       }
       export class FieldMappingRuleTemplateModel
       {
            sourceColumn :string;
            targetColumn :string;
            keyColumn :boolean;
            aggregationStatus :string=null;
            visibilityStatus :string;
            image :string=null;
       }