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
    //    clientId:string;
    //    workspaceId:string;
       mainManuId:string;
       mainMenuName:string;
       ModeId:string;
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
    workSpaceId:string;
    Client_Id:string;
    WorkSpace_Name:string = 'name';
    WorkSpaceDisplayName:string = 'display';
    WorkSpaceParentName:string = 'CNS';
    workspaceParentId :string;
    ChildWorkSpaceRule:string = '2';
    Exclude_Child_WorkSpace:boolean = true;
    ClientDate :string;
    ClientTime :string;
    ClientTimeZone :string;
    Remark1 :string;
    Remark2 :string;
    Remark3 :string;
    Remark4 :string;
    Flex1 :string;
    Flex2 :string;
    Flex3 :string;
    Flex4 :string;
    Flex5 :string;
    Flex6 :string;
    Flex7 :string;
    Flex8 :string;
    Flex9 :string;
    Flex10 :string;
    Flex11 :string;
    Flex12 :string;
    Flex13 :string;
    Flex14 :string;
    Flex15 :string;
    Flex16 :string;
}
export class WorkspaceSettingModel{
    
    WorkSpace_Name:string = 'name';
    WorkSpaceDisplayName:string = 'display';
    WorkSpaceParentName:string = 'CNS';
    ChildWorkSpaceRule:string = '2';
    Exclude_Child_WorkSpace:boolean = true;
}
export class workSpaceParentGrid_Model
{
    workspaceId:string;
    workspaceName:string; 
    displayName:string;
    parentWorkspace:string; 
    childApplyandEnforce:string; 
    excludeChildWorkspace:string; 
    bStatus : string;
}
export class CurrencySetupModel{
  length(arg0: number, length: any) {
    throw new Error('Method not implemented.');
  }
  splice(arg0: number, length: any) {
    throw new Error('Method not implemented.');
  }
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
        bStatus:string;
        ClientDate:string;
		ClientTime:string;
		ClientTimeZone:string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
}
export class TimeZoneSetupModel{
       CLIENT_ID:string 
      applyAndEnforceDatetime:string
         clockImage:string 
         dataFormatType:string 
         dateCollectedData:boolean
         dateConversion:boolean
         dateConversionValue:boolean
         dateFormat:string
         dateFormatReports:string 
         dateFormatVisulization:string 
         datePreparingData:boolean
         datePresentingData:boolean
         reportTime:string 
         reportsDate:string
         timeFormatReports:string
         timeFormatVisualization:string 
         timeZone:string 
         timeZoneType:string 
         userId:string
         visualizationTime:string
         visulizationDate:string 
         workSpaceId:string
         ClientDate :string;
		  ClientTime :string;
		  ClientTimeZone :string;
		  Remark1 :string;
		  Remark2 :string;
		  Remark3 :string;
		  Remark4 :string;
		  Flex1 :string;
		  Flex2 :string;
		  Flex3 :string;
		  Flex4 :string;
		  Flex5 :string;
		  Flex6 :string;
		  Flex7 :string;
		  Flex8 :string;
		  Flex9 :string;
		  Flex10 :string;
		  Flex11 :string;
		  Flex12 :string;
		  Flex13 :string;
		  Flex14 :string;
		  Flex15 :string;
		  Flex16 :string;

}

export class NumeralsSetupModel
{
    userId:string;
    workSpaceId:string;
    clientId:string;
    numberingSystemFormat:string;
    numberSignType:string;
    signFormat:string
    positiveNumbeColorCode:string;
    negitiveNumberColorCode:string;
    numberConversion:string;
    numberValueConversion:string;
    numberValue:string;
    selectiveDecimalPlaces:number;
    fullDecimalPlaces:boolean;
    roundOffNumbers:string;
    selectiveRoundOffPlace:number;
    numberApplyAndEnforce:string;
    ClientDate :string;
	ClientTime :string;
	ClientTimeZone :string;
	Remark1 :string;
	Remark2 :string;
	Remark3 :string;
	Remark4 :string;
	Flex1 :string;
	Flex2 :string;
	Flex3 :string;
	Flex4 :string;
	Flex5 :string;
	Flex6 :string;
	Flex7 :string;
	Flex8 :string;
	Flex9 :string;
	Flex10 :string;
	Flex11 :string;
	Flex12 :string;
	Flex13 :string;
	Flex14 :string;
	Flex15 :string;
	Flex16 :string;
}
export class CalenderSetupModel
{
    userId :string;
    workSpaceId :number;
    ClientId:string;
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
    bstatus:string; 
    ClientDate :string;
    ClientTime :string;
    ClientTimeZone :string;
    Remark1 :string;
    Remark2 :string;
    Remark3 :string;
    Remark4 :string;
    Flex1 :string;
    Flex2 :string;
    Flex3 :string;
    Flex4 :string;
    Flex5 :string;
    Flex6 :string;
    Flex7 :string;
    Flex8 :string;
    Flex9 :string;
    Flex10 :string;
    Flex11 :string;
    Flex12 :string;
    Flex13 :string;
    Flex14 :string;
    Flex15 :string;
    Flex16 :string;
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
        ClientDate :string;
        ClientTime :string;
        ClientTimeZone :string;
        Remark1 :string;
        Remark2 :string;
        Remark3 :string;
        Remark4 :string;
        Flex1 :string;
        Flex2 :string;
        Flex3 :string;
        Flex4 :string;
        Flex5 :string;
        Flex6 :string;
        Flex7 :string;
        Flex8 :string;
        Flex9 :string;
        Flex10 :string;
        Flex11 :string;
        Flex12 :string;
        Flex13 :string;
        Flex14 :string;
        Flex15 :string;
        Flex16 :string;

	}
    export class QuotaSettingsModel
    {   userId :string;
        workSpaceId :number;
        clientId:string;
        quotaLimit:string;
        quotaType:string;
        quotaUsageCycle:string;
        quotaStartDate:string; 
        quotaEndDate:string; 
        ClientDate :string;
        ClientTime :string;
        ClientTimeZone :string;
        Remark1 :string;
        Remark2 :string;
        Remark3 :string;
        Remark4 :string;
        Flex1 :string;
        Flex2 :string;
        Flex3 :string;
        Flex4 :string;
        Flex5 :string;
        Flex6 :string;
        Flex7 :string;
        Flex8 :string;
        Flex9 :string;
        Flex10 :string;
        Flex11 :string;
        Flex12 :string;
        Flex13 :string;
        Flex14 :string;
        Flex15 :string;
        Flex16 :string;

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
        ClientDate :string;
		ClientTime :string;
		ClientTimeZone :string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
    }
    export class DataExportTemplete
    {
		userId:string=null;
		workSpaceId:number=null;
		CLIENT_ID:string=null;
        ClientTime:string=null;
        ClientDate:string=null;
        ClientTimeZone:string=null;
		exportXLS:string=null;
		exportPPT:string=null;
		exportPDF:string=null;
	
    }
    export class ChildWorkspacesModel
    {
        userId :string;
        workSpaceId :number;
        ClientId:string;
        childWorkspace :string;
        childSelectedOption:boolean; 
        childChange:boolean; 
        childOverrideSelectedOption:boolean;
        ClientDate :string;
        ClientTime :string;
        ClientTimeZone :string;
        Remark1 :string;
        Remark2 :string;
        Remark3 :string;
        Remark4 :string;
        Flex1 :string;
        Flex2 :string;
        Flex3 :string;
        Flex4 :string;
        Flex5 :string;
        Flex6 :string;
        Flex7 :string;
        Flex8 :string;
        Flex9 :string;
        Flex10 :string;
        Flex11 :string;
        Flex12 :string;
        Flex13 :string;
        Flex14 :string;
        Flex15 :string;
        Flex16 :string;
    }
    export class UserWorkspaceListModel
    {
        clientId :string
        userLoginId :string
        workspaceName :string
        workspaceParentName :string
        dateAccessStart :string
        dateAccessEnd :string
        active :string
    }
    export class ChangeLogListModel
    {
          ClientId:number 
          AccountId:number
          AccountName:string
          WorkspaceId:number 
          WorkspaceName:string
         AccessGranted:boolean
          WorkspaceParentName:string
          StorageUrl:string
          DestinationPrimery:string 
            DetinationPassive:string 
          QuotaSize:number 
          QuotaType:string
          QuotaUsed:number

    }