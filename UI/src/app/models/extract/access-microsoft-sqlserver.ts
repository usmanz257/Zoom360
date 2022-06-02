export class AccessConfigServer {
HostName:string="192.168.50.101";
DataBase:string;
UserName:string;
Password:string;

}
export class EmailAuthorization {
    Email:string;
    AccountAuthurization:string;
}
export class SourceAccount {
    AccountName:string=null;
    EnableConnectoins:boolean=true;
    workspace:string="Default";
    Email:string=null;
    AccountAuthurization:string="Eachtimeforconnectionestablishing";
    visibilitymode:boolean=true;
    commentsection:string="null";
    specialcomments:string="null";
}
export class SourcObject {
    SourceDisplayName:string=null;
    WorkspaceName:string="Conference Room";
    Authorizationgranted:boolean;
     
}
export class TupleMsg {
    item1:string;
    item2:string;
    item3:string;
}
export class updatesourceaccountStep2{
     accountdisplayname:string;  
     enableconnection :boolean; 
     emailid :string; 
     authorizationgrant:string;  
     statusnotifygrant :string; 
     filedname :string; 
     fieldvalue:string;  
     bstatusforvarification:string;  
      
}
export class ExtractDataSave{
    accountdisplayname:string;  
    enableconnection :boolean; 
    emailid :string; 
    authorizationgrant:string;  
    statusnotifygrant :string; 
    filedname :string; 
    ConnectorType:string;
    fieldvalue:CreaditionalData;  
    bstatusforvarification:string;  
    tablename:string[];
}
export class CreaditionalData{
    hostName:string;
    databaseName:string;
    port:string=null;
    username:string;
    password:string;
}