using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Const
{
    
    public static class StoreProcedureConstants
    {
        #region WorkSpaces
        public const string Sp_SaveChildWorkSpaces = "SAVECHILDWORKSPACES";
        public const string Sp_GETCHILDWORKSPACESLIST = "GETCHILDWORKSPACESLIST";
        public const string Sp_SaveWorkspaceSetup = "SAVEWORKSPACESETUP";
        public const string Sp_GetWorkspaceSetup = "GETWORKSPACESETUP";
        public const string Sp_GetWorkspaceSetupList = "GETWORKSPACELIST";
        public const string Sp_GetDropdownList = "GETDR0PDOWNLIST";
        public const string Sp_GetUAMDropdown = "GETUAMDROPDOWN";
        public const string Sp_TestDropList = "GETTESTINGLIST";
        #endregion

        #region //Prepare
        public const string Sp_GetDataQualityList = "GETDATAQUALITYLIST";
        public const string Sp_GetLookupList = "GETLOOKUPVALUELIST";
        public const string Sp_GetSourceAccountList = "GETSOURCEACCOUNTLIST";
        public const string Sp_getSourceObjectList = "GETSOURCEOBJECTLIST";
        public const string Sp_getObjectFieldsList = "GETOBJECTFIELDSLIST";
        public const string Sp_SaveDataLabeling = "SAVEDATALABELING";
        public const string Sp_GetFunctionList = "GETFUNCTIONLIST";
        public const string Sp_GetRollUpTree = "GETROLLUPTREE"; 
        public const string Sp_SaveTemplateData = "SAVETEMPLATEDATA";
        public const string SaveTemplateSubmenu = "SAVETEMPLATESUBMENU";
        public const string Sp_GETTEMPLATELIST = "GETTEMPLATELIST";
        public const string Sp_GETTREETEMPLATEQUERYDATA = "GETTREETEMPLATEQUERYDATA";
        #endregion

        #region UserLog
        public const string Sp_GETUSERWORKSPACELIST = "GETUSERWORKSPACELIST";
        #endregion

        #region CalenderSetup
        public const string Sp_SaveCalenderSetup = "SAVECALENDERSETUP";
        public const string Sp_GetCalenderSetup = "GETCALENDERSETUPLIST";
        public const string Sp_SavePrediction = "SAVEPREDICTIONANAIINSIGHTS";
        #endregion

        #region // CurrencySetup
        public const string Sp_SaveCurrencySetup = "SAVECURRENCYSETUP";
        public const string Sp_GetCurrencySetupList = "GETCURRENCYSETUPLIST";
        #endregion

      

        #region // DataGouvernance
        public const string Sp_SaveDataGovernance = "SAVEDATAGOVERNANCE";
        public const string Sp_GETDATAGOVERNANCELIST = "GETDATAGOVERNANCELIST";
        #endregion

        #region // DisplaySettings
        public const string Sp_SaveDisplaySettings = "SAVEDISPLAYSETTINGS";
        public const string Sp_GETDISPLAYSETTINGSLIST = "GETDISPLAYSETTINGSLIST";


        #endregion
        #region // NumeralSetup
        public const string Sp_SaveNumeralSetup = "SAVENUMERALSSETUP";
        public const string Sp_GetNumeralSetup = "GETNUMERALSSETUPLIST";
        #endregion

        #region // QuotaSetting
        public const string Sp_SaveQuotaSetting = "SAVEQUOTASETTINGS";
        public const string Sp_GETQUOTASETTINGSLIST = "GETQUOTASETTINGSLIST";
        #endregion
        #region // TimeZoneSetup
        public const string Sp_SaveTimeZoneSetup = "SAVETIMEZONESETUP";
        public const string Sp_GETTIMEZONESETUPLIST = "GETTIMEZONESETUPLIST";
        #endregion

        #region // ChangeLog
        public const string Sp_ChangeLogList = "GETCHANGESLOGLIST";
        #endregion

        #region // ExtractList
        public const string Sp_GetAllExtractList = "GETALLEXTRACTLIST";
        public const string Sp_GetAllIssueList = "GETALLISSUESLIST";
        public const string Sp_GetConnectionList = "GETCONNECTIONLIST";
        public const string Sp_GetSourceList = "GETSOURCESLIST";
        public const string Sp_GETENRICHLOG = "GETENRICHLOG";
        #endregion
        #region
        public const string Sp_GETEXTRACTSUMMARY = "GETEXTRACTSUMMARY";
        #endregion

        #region // Prediction
        public const string Sp_GETPREDICTIONREACH = "GETPREDICTIONREACH";
        public const string Sp_GETPRODUCTIONPROCESS = "GETPRODUCTIONPROCESSPREDICT";
        #endregion
        #region //DynamicMenu
        public const string Sp_GetMainMenuList = "GETMAINMENULIST";
        public const string Sp_GetSubMenuList = "GETSUBMENULIST";

        #endregion

        #region
        public const string Sp_GetMapTempList = "GETMAPTEMPLIST";
        public const string Sp_GetMapRules = "GETMAPRULES";
        public const string Sp_SaveMapRules = "SAVEMAPRULES";
        #endregion

        #region
        public const string Sp_GetUserRihgts = "GETMENULEVELRIGHTS";
        #endregion
        #region
        //Identity Access Management

        public const string Sp_SaveIAM = "SAVEIAM";
        public const string Sp_GetIAM = "GETIAM";
        public const string Sp_GetIAMDropdown = "GETIAMDROPDOWN";
        #endregion
        #region 
        //UAM Save Procedures
        public const string Sp_SaveUAM = "SAVEUAM";
        public const string Sp_UserList = "GETUSERSLIST";
        public const string Sp_GetUAM = "GETUAM";
        public const string Sp_GetTreeDropDownParentList = "GETTREEPARENTLIST";
        public const string Sp_GetTreeDropDownChildList = "GETTREECHILDLIST";
        //public const string Sp_SaveUserProfile = "SAVEUSERPROFILE";
        //public const string Sp_SaveUserPassword = "SAVEUSERPASSWORD";
        //public const string Sp_SavePermissions = "SAVEUSERPERMISSIONS";
        //public const string Sp_SaveUserNotification = "SAVEUSERNOTIFICATIONS";
        //public const string Sp_SaveUserRestrictions = "SAVEUSERRESTRICTIONS";
        //public const string Sp_SaveUserSettings = "SAVEUSERSETTINGS";
        #endregion

        #region
        public const string Sp_GetAnalyzeParentList = "GETANALYZEPARENTLIST";
        public const string Sp_GetAnalyzeChildList = "GETANALYZECHILDLIST";
        public const string Sp_SaveTemplateChildname = "SAVEANALYZECHILDDATA";
        public const string Sp_SaveChildTemplateTemplateData = "SAVECHILDTEMPLATEDATA";
        #endregion
        #region
        public const string Sp_GetAnalyzeData = "GETANALYZEDATA";
        #endregion
        #region
        public const string Sp_GetLineGraphData = "GETLINEGRAPHDATA";
        #endregion
        /// Hafiz umer Work
        /// 
        #region // sql connector Source Account
        public const string Sp_SourceAccountCon = "SOURCEACCOUNTCON";
        public const string Sp_SourceAccountReq = "SOURCEACCOUNTREQ";
        public const string Sp_SourceAccount = "SOURCEACCOUNT";
        public const string Sp_UpdateConnectedSourceList = "UPDATECONNECTEDSOURCELIST";
        public const string Sp_SaveSourceObject = "SAVESOURCEOBJECTS";
        public const string Sp_GetSourceObjectList = "GETSOURCEOBJECTLIST";
        public const string Sp_UpdateSourceObjectList = "UPDATESOURCEOBJECTLIST";
        public const string Sp_GetObjectFieldList = "GETOBJECTFIELDSLIST";
        public const string Sp_UpdateObjectFieldList = "UPDATEOBJECTFIELDSLIST";
        public const string Sp_SaveExtracts = "SAVEEXTRACTDATA";
        public const string Sp_GetExtractData = "GETEXTRACTDATA";
        public const string Sp_UpdateConnectionData = "UPDATECONNECTEDSOURCELIST";

        #endregion

        #region // SourceDescriptionConfiguration
        public const string Sp_SaveSourceCounfiguration = "SOURCEACCOUNT";
        public const string Sp_SavedbCredential="SOURCEACCOUNTCON";
        public const string Sp_Savefile="SOURCEACCOUNTCON";
        public const string Sp_SaveSocialMedia= "SOURCEACCOUNTREQ";
        public const string Sp_SaveLookup="SAVELOOKUPVALUE";
        public const string Sp_sETLOOKUPTABLE = "SETLOOKUPTABLE";
        public const string Sp_LoadData="LOAD_DATA";
        /////  single proc for save,create table ,and enrichment
        public const string Sp_Lookup = "LOAD_DATA";

        #endregion

        #region // Load
        public const string Sp_GetDestinationList = "GETDESTINATIONLIST";


        #endregion
        #region // CustomScriptsEnrich
        public const string Sp_GetCustomScripts = "GETCUSTOMSCRIPTSLIST";


        #endregion

        #region // SourceDestination
        public const string Sp_SavedestinationDescription="DESTINATIONACCOUNT";
        public const string Sp_dESTINATIONACCOUNTCON = "DESTINATIONACCOUNTCON";
        //public const string Sp_Savefile = "SOURCEACCOUNTCON";
        //public const string Sp_SaveSocialMedia = "SOURCEACCOUNTREQ";
        //public const string Sp_SaveLookup = "SAVELOOKUPVALUE";
        //public const string Sp_sETLOOKUPTABLE = "SETLOOKUPTABLE";
        //public const string Sp_LoadData = "LOAD_DATA";
        /////  single proc for save,create table ,and enrichment


        #endregion
        public const string Sp_TimeLineStatus = "GETTIMELINESTATUS";
        public const string Sp_GetUserTimelineInfo = "GETUSERTIMELINEINFO";
        public const string Sp_GETTIMELINEWIDGETDATA = "GETTIMELINEWIDGETDATA";

        public const string Sp_AiInsightsData = "GETAIINSIGHTSDATA";
        public const string Sp_AiInsightsWidgetData = "GETAIWIDGETDATA";
        public const string Sp_AiInsightsWidgetGraphData = "GETAIWIDGETGRAPHDATA";
        public const string Sp_GetcolumAiInsights = "GETAIATTRIBUTES";
        public const string Sp_SaveLikeAndDislike = "SAVEAIWIDGETLIKEDISLIKE";
        public const string Sp_GetuserLoginStatus = "GETUSERLOGINSTATUS";
        public const string Sp_GetuserLoginLogs = "GETUSERLOGINLOGS";
    }
}
