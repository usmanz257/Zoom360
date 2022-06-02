import { ConnectorName } from "../main/extract/AddNewDataStream/EnumForConnectorList";
import { MongoDbSettupComponent } from "../main/extract/DataBase/mongo-db-settup/mongo-db-settup.component";
import { FilesUploadeComponent } from "../main/extract/Filse/files-uploade/files-uploade.component";
import { FBPublicPageComponent } from "../main/extract/Social-media/facebook/fbpublic-page/fbpublic-page.component";

export class componentDictionary{
     fingerCounts: Map<string, any> = new Map();
    constructor( ) {
        this.fingerCounts.set(ConnectorName.Sqlserver,MongoDbSettupComponent);
        this.fingerCounts.set(ConnectorName.DBConnector,MongoDbSettupComponent );
        this.fingerCounts.set(ConnectorName.FilesName,FilesUploadeComponent);
        this.fingerCounts.set(ConnectorName.SocialMedia,FBPublicPageComponent)
        //DB Component mapping
        this.fingerCounts.set(ConnectorName.MySQL,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.OracleDBMS,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.MongoDB,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.MicrosoftAccess,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.PostgreSQL,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.ElasticDB,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.CassandraDB,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.CosmosDB,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.Redis,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.AmazonDynamoDB,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.AmazonRedshift,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.MicrosoftAzure,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.GoogleBigQuery,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.Snowflake,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.MicroFocusVertica,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.AmazonRDS,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.MariaDB,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.IBMDb2,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.OracleAutonomous,MongoDbSettupComponent)
        this.fingerCounts.set(ConnectorName.MarkLogic,MongoDbSettupComponent)
       //file component  mapping 
        this.fingerCounts.set(ConnectorName.CSVFile,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.XMLFile,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.JSONFile,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.PDFFile,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.ZipFil,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.MicrosoftExcel,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.GoogleSheet,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.OpenOffice,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.ODSFile,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.FTPServer,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.SFTPServer,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.Dropbox,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.GoogleDrive,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.MicrosoftOneDrive,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.OneHub,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.Box,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.EgnyteUSA,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.MASV,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.eFileCabinet,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.iDrive,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.Wire,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.MEGA,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.ApacheHDFS,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.Azurefile,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.AmazonS3,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.GoogleCloud,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.WeTransfe,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.SendAnywheree,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.EmailAttachment,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.Hightail,FilesUploadeComponent)
        this.fingerCounts.set(ConnectorName.Slack,FilesUploadeComponent)
        //SocialMedia 
        this.fingerCounts.set(ConnectorName.FacebookPublicPage,FBPublicPageComponent)

 
     }

 getComponent(name:string):any{
  return  this.fingerCounts.get(name);
 }
 
}

 