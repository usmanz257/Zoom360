using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Const
{
    public static class ServiceConstants
    {
        public const string ApiPrefix = "api/";

        public class UserLog
        {
            public const string RouteName = "UserLog";
            public const string GETUSERWORKSPACELIST = "GETUSERWORKSPACELIST";

        }
        public class ChildWorkSpace
        {
            public const string RouteName = "ChildWorkSpace";
            public const string GetAllWorkSpaces = "GetAllWorkSpaces";
            public const string SaveChildWorkspaces = "SaveChildWorkspaces";
            public const string GETCHILDWORKSPACESLIST = "GetChildWorkSpace";


        }
        public class AiInsights
        {
            public const string RouteName = "AiInsights";
            public const string GetAiInsightsData = "GetAiInsightsData";
            public const string GetAiInsightsWidgetData = "GetAiInsightsWidgetData";
            public const string GetColumNameAiInsight = "GetColumNameAiInsight";
            public const string SaveLikeAndDislike = "SaveLikeAndDislike";
        }
        public class CommonDropdown
        {
            public const string RouteName = "CommonDropdownList";
            public const string GetDropdownList = "GetDropdownList";
            public const string GetMultiSelectDropDown = "GetMultiSelectDropDown";
            public const string GetTreeDropdown = "GetTreeropdown";
            public const string GetIAMDropdown = "GetIAMDropdown";
            public const string GetDropdownWithCategory = "GetDropdownWithCategory";
            public const string GetRollupTree = "GetRollupTree";
        }
        //public class AIinsights
        //{
        //    public const string RouteName = "aiinsigts";
        //    public const string getLineGraph = "getlinegraph";
        //}
        public class WorkspaceSetup
        {
            public const string RouteName = "WorkspaceSetup";
            public const string GetWorkspaceSetupSettings = "GetWorkspaceSetupSettings";
            public const string SaveWorkspaceSetup = "SaveWorkspaceSetup";
            public const string GetWorkspaceSetupList = "GetWorkspaceSetupList";
            public const string  GetParentWorkspaceDropdown  = "GetParentWorkspaceList";
        }
        public class CalenderSetup {
            public const string RouteName = "CalenderSetup";
            public const string SaveCalenderSetup = "SaveCalenderSetup";
            public const string GetCalenderSetup = "GetCalenderSetup";
        }

        public class CurrencySetup
        {
            public const string RouteName = "CurrencySetup";
            public const string SaveCurrencySetup = "SaveCurrencySetup";
            public const string GetCurrencySetupList = "GetCurrencySetupList";
        }

       

        public class DataGovernance
        {
            public const string RouteName = "DataGovernance";
            public const string SaveDataGovernance = "Save";
            public const string GetDataGovernance = "GetDataGovernance";
        }
        public class DisplaySettings
        {
            public const string RouteName = "DisplaySettings";
            public const string SaveDisplaySetting = "SaveDisplaySetting";
            public const string GetDisplaySetting = "GetDisplaySetting";
        }
        public class NumeralSetup
        {
            public const string RouteName = "NumeralSetup";
            public const string SaveNumeralSetup = "SaveNumeralSetup";
            public const string GETNUMERALSSETUPLIST = "GetNumeralSetup";
        }

        public class QuotaSetting
        {
            public const string RouteName = "QuotaSetting";
            public const string SaveQuotaSetting = "SaveQuotaSetting";
            public const string GetQuotaSetting = "GetQuotaSetting";
        }

        public class TimeZoneSetup
        {
            public const string RouteName = "TimeZoneSetup";
            public const string SaveTimeZoneSetup = "SaveTimeZoneSetup";
            public const string GetTimeZoneSetup = "GetTimeZoneSetup";
        }

        public class ChangeLog
        {
            public const string RouteName = "ChangeLog";
            public const string GETCHANGESLOGLIST = "GETCHANGESLOGLIST";
        }
        public class AllExtract
        {
            public const string RouteName = "AllExtract";
            public const string GetAllExtractList = "getAllExtractList";
            public const string GetAllIssueList = "GetAllIssueList";
            public const string GetConnectionList = "GetConnectionList";
            public const string GetSourceList = "GetSourceList";
            public const string GetEnrichLog = "GetEnrichLog";
        }
        public class SourceDescAndConfiration
        {
            
            public const string RouteName = "SourceDescriptionAndConfigurtionController";
            public const string saveDescriptionInfo = "saveDescriptionInfo";
            public const string saveDbCredentialInfo = "saveDbCredentialInfo";
            public const string savefile  = "savefile";
            public const string saveSocialMedia = "saveSocialMedia";
            public const string UploadFIle = "UploadFIle";
        }

        public class Predictions
        {

            public const string RouteName = "PredictionReach";
            public const string GetPredictionReach = "GetPredictionReach";
            public const string SavePrediction = "SavePrediction";
            public const string GetProductionProcessData = "GetProductionProcessData";
        }
        public class DynamicMenuItem
        {
            public const string RouteName = "DynamicMenuItem";
            public const string GetMenulist = "GetMenulist";
            public const string GetSubMenuSection = "GetSubMenuSection";
            public const string GetSubMenuSectionItems = "GetSubMenuSectionItems";
            
        }
        public class CSVHelper
        {
            public const string RouteName = "CSVHelper";
            public const string GetCSVFileData = "GetCSVFileData";
            public const string SaveJsonDataToCSV = "SaveJsonDataToCSV";
        }
        //Prepare Modules 
        public class prepare
        {
            public const string RouteName = "Prepare";
            public const string GetDataQualityList = "GetDataQualityList";
            public const string GetLookupList = "GetLookupList";
            public const string GetAccountList = "GetAccountList";
            public const string GetTableList = "GetTableList";
            public const string GetobjectFieldList = "GetobjectFieldList";
            public const string SaveLookup = "SaveLookup";
            public const string GenerateCustomTable = "GenerateCustomTable";
            public const string InsertionOptions = "InsertionOptions";
            public const string addLookupScreen ="addLookupScreen";
            public const string saveDataLabeling = "saveDataLabeling";

        }
        public class SourceDestination
        {

            public const string RouteName = "Destination";
            public const string saveDescriptionInfo = "saveDescriptionInfo";
            public const string saveDbCredentialInfo = "saveDbCredentialInfo";
            public const string savefile = "savefile";
            public const string saveSocialMedia = "saveSocialMedia";

        }


        public class SqlConnector
        {
            public const string RouteName = "SqlConnector";
            public const string SaveStep1Data = "SaveStep1Data";
            public const string SaveSourceObjects = "SaveSourceObjects";
            public const string GetSourceObjectListForStep4Grid = "GetSourceObjectListForStep4Grid";
            public const string GetEntityNameDropdownStep6 = "GetEntityNameDropdownStep6";
            public const string GetObjectFieldsListStep6 = "GetObjectFieldsListStep6";
            public const string ObjectEntityFieldUpdateStep6 = "ObjectEntityFieldUpdateStep6";
            public const string SourceObjectGridListUpdateStep4 = "SourceObjectGridListUpdateStep4";
            public const string ExtractPageDataSaveForStep8 = "ExtractPageDataSaveForStep8";
            public const string GetSqlExtractPageList = "GetSqlExtractPageList";
            public const string GetSqlConnectorList = "GetSqlConnectorList";

        }
        public class ConnectionLog
        {
            public const string RouteName = "ConnectionLog";
            public const string RecentConnectionLog = "RecentConnectionLog";
        }
        public class GridAndGraph
        {
            public const string RouteName = "GridAndGraph";
            public const string GraphData = "Graphdata";
            public const string HighChartGraphData = "HighChartGraphData";
            public const string GridData = "Griddata";
            public const string GridDynamicData = "GridDynamicData";
            public const string getLineGraph = "getlinegraph";

        }
        public class SourceEdit
        {
            public const string RouteName = "SourceEdit";
            public const string GetMapTempList = "GetMapTempList";
            public const string GetMappingRule = "GetMappingRule";
            public const string SaveMappingRule = "SaveMappingRule";
        }

        public class Load
        {
            public const string RouteName = "Load";
            public const string GetdestinationList = "GetdestinationList";
             
        }
        
        public class IndentityAndAccessmanagement
        {
            public const string RouteName = "IdentityAndAccessmanagement";
            public const string SaveIdentityAndAccessManagment = "SaveIdentityAndAccessManagment";
            public const string GetIdentityAndAccessManagement = "GetIdentityAndAccessManagement";
            //
            //public const string RouteName = "IndentityAndAccessmanagement";
        }
        public class UserAccessManagement
        {
            public const string RouteName = "UserAccessManagement";
            public const string SaveUserAccessManagmentSetup = "SaveUserAccesManagmentSetup";
            public const string GetUserList = "GetUserList";
            public const string GetUserAccessManagement = "GetUserAccessManagement";

        }
        public class DynamicGridStructure
        {
            public const string RouteName = "DynamicGridStructure";
            public const string getGridStructure = "getDynamicGridStructure";
            public const string saveTemplateStructure = "saveTemplateStructure";
        }
        public class timeLine
        {
            public const string RouteName = "timeline";
            public const string GetAllTimeLineStatus = "GetAllTimeLineStatus";
            public const string GetUserTimelineInfo = "GetUserTimelineInfo";
            public const string GetUserTimelineData = "GetUserTimelineData";
        }
        public class UserRights
        {
            public const string RouteName = "UserRights";
            public const string GetMainMenuRights = "GetMainMenuRights";
          
        }
        public class DynamicEnrichScript
        {
            public const string RouteName = "DynamicEnrichScript";
            public const string getFunctionTemplate = "getfunctiontemplate";
            public const string saveEnrichScript = "saveEnrichScript";
            public const string getEnrichScript = "getEnrichScript";
            public const string updateEnrichScript = "updateEnrichScript";
            //Grid
            public const string saveEnrichScriptByGrid = "saveEnrichScriptByGrid";
            public const string getEnrichScriptForGrid = "getEnrichScriptForGrid";
            public const string updateEnrichScriptOfGrid = "updateEnrichScriptOfGrid";
            //Grid2
            public const string saveEnrichScriptByGrid2 = "saveEnrichScriptByGrid2";
            public const string getEnrichScriptForGrid2 = "getEnrichScriptForGrid2";
            public const string updateEnrichScriptOfGrid2 = "updateEnrichScriptOfGrid2";
        }
        public class TreeControlTemplate
        {
            public const string RouteName = "TreeControlTemplate";
            public const string SaveTreeControlTemplate = "SaveTreeControlTemplate";
            public const string GetTreeControlTemplate = "GetTreeControlTemplate";
            public const string SaveFile = "SaveFile";
            public const string GetTreeTemplateGrid = "GetTreeTemplateGrid";
            public const string GetTreeTemplatequerydata = "GetTreeTemplatequerydata";
        }
        public class CustomScript
        {
            public const string RouteName = "CustomScript";
            public const string GetCustomScriptsDetail = "GetCustomScriptsDetail";
        }
    }

}
