// export class TblMainMenu{
//     id: number;
//     menuName: string;
//     url: string;
//     usernameDummy:string;
// }
export class LoginListModel
    {
        workspaceName :string;
        apperanceLogo :string;
        clientName :string;
        clientLogo :string;
    }
export class MianMenuModel
    {
       clientId:string;
       workspaceId:string;
       mainManuId:string;
       mainMenuName:string;
       url:string;
    }
export class SubMenusectionModel
    {
     sectionId:string;
     sectionName:string;
     submenuSectionitems: SubMenuSectionItemsModel[]=[]; 
    }
export class SubMenuSectionItemsModel
    {
        subMenuId :string;
        subMenuName :string;
        url :string;
    }

export class  TblSubMenu{
    Id: number; 
    subMenuName: string;
    url: string;
    mainMenuId: number;
}
export class TblDatastream{
        id : number;
        sourceType : string;
        sourceImagePath: string;
        workSpace: string;
        sname:string;
        destination: string;
        snext: string;
        supdate: string;
        username:string;
        usernameDummy:string;
}
export class  tblAllConnections{
        id: number;
        type:string;
        sourceImagePath:string;
        workspace:string;
        name: string;
        userAccessGranted:string;
}

export class tblAllextracts{
    id:number;
    status: string;
    type: string;
    name:string;
    created:string;
    datastream:string;
    clientName: string;
    datarow: number;
    datacolumn: number;
    filesize:string;
    UsernameDummy: string;
}
export class tblAllissues{
    id:number;
    heading: string;
    timeRange: string;
    status:string;
    ack:string;
    statusMessage:string;
    date: string;
    hoursAgo: number;
    usernameDummy: number;
    
}
export class Filters_Model
{
    filterName:string;
    filterValue:string;
}
export class ControlDefaultsAndDiscription_Model
{
    fielD_VALUE:string;
    fielD_REMARK:string;
}
export class instConfigSave_Model{
    Workspace: string;
    Connection: string;
    ReportType: string;
    Accounts: string;
    Period: string;
    Fields: string;
}
export class WorkspaceSetup{
    userId:string;
    workSpaceId:number;
    Client_Id:string;
    WorkSpace_Name:string = 'name';
    WorkSpaceDisplayName:string = 'display';
    WorkSpaceParentName:string = 'CNS';
    ChildWorkSpaceRule:string = '2';
    Exclude_Child_WorkSpace:boolean = true;
}
export class WorkspaceSettingModel{
    
    workSpace_Name:string = 'name';
    workSpaceDisplayName:string = 'display';
    workSpaceParentName:string = 'CNS';
    childWorkSpaceRule:string = '2';
    exclude_Child_WorkSpace:boolean = true;
}
export class workSpaceParentGrid_Model
{
    workspaceId:string;
    workspaceName:string; 
    displayName:string;
    parentWorkspace:string; 
    childApplyandEnforce:string; 
    excludeChildWorkspace:boolean; 
    bStatus : string;
}
export class CurrencySetupModel{
        userId:string;
		workSpaceId:number;
		CLIENT_ID: string; 
		currencyType: string;
		currenceyTypeSign :string;
		currencyImage :string;
		currencyCollectedData:boolean;
		currencyPrepareData :boolean;
		currencyPresentingData: boolean;
		currencyConversion :boolean;
		exchangeRateAndDataConversion:boolean;
		currencyReportHeaders:string;
		currencyVisulization:string;
		currencyValue :string;
		currencyApplyAndEnforce:string;
}
export class TimeZoneSetupModel{
    userId :string;
   workSpaceId :number;
    CLIENT_ID:string; 
     dataFormatType:string;  
    dateFormat:string;
     clockImage:string;
    dateCollectedData:boolean; 
    datePreparingData:boolean; 
    datePresentingData:boolean;
    dateConversion:boolean;
    dateConversionValue:boolean; 
    timeZone:string; 
    timeZoneType:string; 
    dateFormatReports:string;
    reportsDate:string;
    dateFormatVisulization:string;
    visulizationDate:string;
    timeFormatReports:string; 
    reportTime:string;
    timeFormatVisualization:string;
    visualizationTime:string;
    applyAndEnforceDatetime:string;
}

export class NumeralsSetupModel
{
    userId :string;
    workSpaceId :number;
    CLIENT_ID:string;
    numberingSystemFormat:string;
    numberSignType:string;
    signFormat:string
    PositiveNumbeColorCode:string;
    negitiveNumberColorCode:string;
    numberConversion:string;
    numberValueConversion:string;
    numberValue:string;
    selectiveDecimalPlaces:number;
    fullDecimalPlaces:boolean;
    roundOffNumbers:string;
    selectiveRoundOffPlace:Number;
    numberApplyAndEnforce:string;
}
export class CalenderSetupModel
{
    userId :string;
    workSpaceId :number;
    CLIENT_ID:string;
    calenderSetup :string;    
    bussinessYearDate :string;    
    finacialYearDate :string;    
    reportingYearDate :string;    
    weekStartDay :string; 
    annualHolidayCalender :string;    
    annualCampaignCalender :string;   
    notifyCampaignsCalender :boolean;  
    milestoneAnnualHolidayCalender :string;   
    notifyMilestoneCalender :boolean;  
    calenderApplyAndEnforce :string;  
}
export class DataGovernanceModel
    {
		userId :string;
        workSpaceId :number;
        CLIENT_ID:string;
		schemaMode:string; 
		childWorkspaceInheritance:string; 
		workspaceShareData:string; 
		outOffAppWebShareData:string; 
		outOffApiShareData:string; 
		rawDataStagging:string; 
		staggingStorageLocationType:string; 
		staggingRetentionDays:number; 
		activeSourceLocation:string; 
		destinationWorkspace:string; 
		activeDestinationLocation:string; 
		passiveDestinationLocation:string; 
		dataCollectionType:string 
		overrideDataSnapshot:boolean; 
		dataStorage:string; 
		dataDestination:string; 
		overrideDataStorage:boolean; 
		destinationRetentionDays:number; 
	}
    export class QuotaSettingsModel
    {   userId :string;
        workSpaceId :number;
        CLIENT_ID:string;
        quotaLimit:string;
        quotaType:string;
        quotaUsageCycle:string;
        quotaStartDate:string; 
        quotaEndDate:string; 
    }
    export class DisplaySettingsModel
    {
        userId :string;
        workSpaceId :number;
        CLIENT_ID:string;
		workspaceDisplayMode:string; 
		workspaceLogo:string; 
		logoBackgroundColor:string; 
		workspaceTheme:string; 
		colorPallete:string; 
    }
    export class DataExportTemplete
    {
		userId:string=null;
		workSpaceId:number=null;
		CLIENT_ID:string=null;
		exportXLS:string=null;
		exportPPT:string=null;
		exportPDF:string=null;
	
    }
    export class ChildWorkspacesModel
    {
        userId :string;
        workSpaceId :number;
        CLIENT_ID:string;
        childWorkspace :string;
        childSelectedOption:boolean; 
        childChange:boolean; 
        childOverrideSelectedOption:boolean;
    }
    export class UserWorkspaceListModel
    {
        clientId :string
        userLoginId :string
        workspaceName :string
        workspaceParentName :string
        dateAccessStart :string
        dateAccessEnd :string
        statusGranted :string
    }
    export class ChangeLogListModel
    {
        clientId :string;
        accountId :string;
        AccountName :string;
        workspaceId :string;
        workspaceName :string;
        accessGranted :string;
        workspaceParentName :string;
        storageUrl :string;
        destinationPrimery :string;
        detinationPassive :string;
        quotaSize :string;
        quotaType :string;
        quotaUsed :string;

    }
    export class DropDownModel{
        displayText:string;
    }