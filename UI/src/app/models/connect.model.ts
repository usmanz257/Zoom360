
export class ConnectionListModel
    {
        sourceConnectionId:string;
        appearanceLogo :string;
        connectorName :string;
        sourceConnectorId:string;
        workspaceName :string;
        accountDisplayName :string;
        destinationEnabled:boolean;
        accessgranted :string;
        
    }
    export class SourceListModel
    {
    sourceAccountid:string;
    connectionName :string;
    connectorTypeName:string;
    appearanceLogo:string;
    workspaceName :string;
    sourceConnectorId:string;
    workSpaceDisplayName:string;
    connectorDisplayName: string;
    sourceName:string;
    bStatus:number;
    userNameInsert:string;
    serverInsertDate:string;
    destinationEnabled:string;
    accessGranted:string
    nextRun :string;
    }
export class AllExtractListModel
{
    sourceAccountid:string;
    appearanceLogo:string;
    connectorDisplayName: string;
     workspaceName :string;
     statusExtract :string;
     fileName :string;
     serverInsertDate :string;
     connectionName :string;
     sourceName:string;
     userNameInsert :string;
     rowsCountExtract :string;
     colsCountExtract :string;
     dataSizeExtract :string;
     bStatus :string;
  
}
export class AllIssuesModel
{
    entryId:String;
    appearanceLogo:string;
    connectorDisplayName: string;
    fileName:string;
    connectionName:string;
    daysAgo:string;
    hoursAgo:string;
    messageType:string;
    message_1:string;
    statusAck:string;
}