using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.Prepare;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.Prepare;
using CNS.ZOOM360.Shared.StoreProcedures.Prepare.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.Prepare
{

    public class PrepareServices : IPrepare
    {
         
        private readonly IRepositoryBase<DataQualityModel> _prepareRepository;
        private readonly IRepositoryBase<LookupListModel> _prepareLookupRepository;
        private readonly IRepositoryBase<DropdownList> _dropdownRepository;
        private readonly IRepositoryBase<SourceTableListModel> _soureTableRepository;
        private readonly IRepositoryBase<ObjectListModelForLookupInsert> _soureObjectRepository;
        private readonly IRepositoryBase<LookupArray> _insertDataForLookup;
        private readonly IRepositoryBase<customeTableModel> _customeTableModel;
        private readonly IRepositoryBase<InsertionOptionModel> _insertionOptionModel;
        private readonly IRepositoryBase<saveLookupModel> _addLookupRepository;
        public PrepareServices(IRepositoryBase<DataQualityModel> prepareRepository, IRepositoryBase<LookupListModel> prepareLookupRepository,
            IRepositoryBase<DropdownList> dropdownRepository,
            IRepositoryBase<SourceTableListModel> soureTableRepository,
            IRepositoryBase<ObjectListModelForLookupInsert> soureObjectRepository,
            IRepositoryBase<LookupArray> InsertDataForLookup,
            IRepositoryBase<customeTableModel> CustomeTableModel,
            IRepositoryBase<InsertionOptionModel> InsertionOptionModel,
            IRepositoryBase<saveLookupModel> addLookupRepository
            )
        {
            _prepareLookupRepository = prepareLookupRepository;
            _prepareRepository = prepareRepository;
            _dropdownRepository = dropdownRepository;
            _soureTableRepository = soureTableRepository;
            _soureObjectRepository = soureObjectRepository;
            _insertDataForLookup = InsertDataForLookup;
            _customeTableModel = CustomeTableModel;
            _insertionOptionModel = InsertionOptionModel;
            _addLookupRepository = addLookupRepository;
        }
        public async Task<List<DataQualityModel>> GetDataQualitylist(DataQualityParamsModel ListInputmodel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", ListInputmodel.UserId),
            new SqlParameter("@WORKSPACE_ID", ListInputmodel.WorspaceId),
            new SqlParameter("@CLIENT_ID", ListInputmodel.ClientId),
            new SqlParameter("@FUNCTION_DISPLAY_NAME",string.IsNullOrEmpty(ListInputmodel.displayname) ? (object)DBNull.Value: ListInputmodel.displayname ),
            new SqlParameter("@FUNCTION_GROUP", string.IsNullOrEmpty(ListInputmodel.functiongroup) ? (object)DBNull.Value: ListInputmodel.functiongroup ),
            new SqlParameter("@FUNCTION_DETAILS", string.IsNullOrEmpty(ListInputmodel.functiondetail) ? (object)DBNull.Value : ListInputmodel.functiondetail),
            new SqlParameter("@ENABLED", string.IsNullOrEmpty(ListInputmodel.enable) ? (object)DBNull.Value : ListInputmodel.enable),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetDataQualityList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @FUNCTION_DISPLAY_NAME, @FUNCTION_GROUP,@FUNCTION_DETAILS, @ENABLED," +
                " @V_MESSAGE OUTPUT";
            List<DataQualityModel> DataQualitylist = _prepareRepository.ExecuteQuery(spQuery, parameters).ToList();
            return DataQualitylist;
        }
        public async Task<string> SaveDatalabeling(SaveDataLabelingInputModel inputModel)
        {
            string message="";
            foreach (var item in inputModel.DatalabelingList)
            {            
            object[] parameters = {

            new SqlParameter("@USER_ID",inputModel.UserId),
            new SqlParameter("@WORKSPACE_ID", inputModel.Workspaceid),
            new SqlParameter("@CLIENT_ID", inputModel.ClientId),
            new SqlParameter("@FUNCTION_NAME",string.IsNullOrEmpty(item.functionName) ? (object)DBNull.Value: item.functionName),
            new SqlParameter("@FUNCTION_PARAMETER",string.IsNullOrEmpty(item.functionParameter) ? (object)DBNull.Value: item.functionParameter),
            new SqlParameter("@PARAMETER_VALUE",string.IsNullOrEmpty(item.parameterValue) ? (object)DBNull.Value: item.parameterValue),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(inputModel.ClientDate) ? (object)DBNull.Value: inputModel.ClientDate),
            new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(inputModel.ClientTime) ? (object)DBNull.Value: inputModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(inputModel.ClientTimeZone) ? (object)DBNull.Value: inputModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",DBNull.Value),
            new SqlParameter("@REMARKS_2",DBNull.Value),
            new SqlParameter("@REMARKS_3",DBNull.Value),
            new SqlParameter("@REMARKS_4",DBNull.Value),
            new SqlParameter("@FLEX_1",DBNull.Value),
            new SqlParameter("@FLEX_2",DBNull.Value),
            new SqlParameter("@FLEX_3",DBNull.Value),
            new SqlParameter("@FLEX_4",DBNull.Value),
            new SqlParameter("@FLEX_5",DBNull.Value),
            new SqlParameter("@FLEX_6",DBNull.Value),
            new SqlParameter("@FLEX_7",DBNull.Value),
            new SqlParameter("@FLEX_8",DBNull.Value),
            new SqlParameter("@FLEX_9",DBNull.Value),
            new SqlParameter("@FLEX_10",DBNull.Value),
            new SqlParameter("@FLEX_11",DBNull.Value),
            new SqlParameter("@FLEX_12",DBNull.Value),
            new SqlParameter("@FLEX_13",DBNull.Value),
            new SqlParameter("@FLEX_14",DBNull.Value),
            new SqlParameter("@FLEX_15",DBNull.Value),
            new SqlParameter("@FLEX_16",DBNull.Value),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output },
            };
            string spQuery = StoreProcedureConstants.Sp_SaveDataLabeling + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
            " @FUNCTION_NAME, @FUNCTION_PARAMETER,@PARAMETER_VALUE, " +
            " @CLIENT_DATE, @CLIENT_TIME, @CLIENT_TIME_ZONE," +
            " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
            " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
            " @V_MESSAGE OUTPUT"; ;
             message= _insertionOptionModel.ExecuteCommand(spQuery, parameters);
            }
            return message;
        }
        public async Task<List<LookupListModel>> GetLookuplist(LookuplistParamsModel ListInputmodel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", ListInputmodel.UserId),
            new SqlParameter("@WORKSPACE_ID", ListInputmodel.workspaceId),
            new SqlParameter("@CLIENT_ID", ListInputmodel.clientId),
            new SqlParameter("@LOOKUP_ID",string.IsNullOrEmpty(ListInputmodel.lookupid) ? (object)DBNull.Value: ListInputmodel.lookupid ),
            new SqlParameter("@WORKSPACE_NAME", string.IsNullOrEmpty(ListInputmodel.workspacename) ? (object)DBNull.Value: ListInputmodel.workspacename ),
            new SqlParameter("@LOOKUP_DISPLAY_NAME", string.IsNullOrEmpty(ListInputmodel.lookupdisplayname) ? (object)DBNull.Value : ListInputmodel.lookupdisplayname),
            new SqlParameter("@ACCOUNT_DISPLAY_NAME", string.IsNullOrEmpty(ListInputmodel.accountdispalyname) ? (object)DBNull.Value : ListInputmodel.accountdispalyname),
            new SqlParameter("@TABLE_NAME", string.IsNullOrEmpty(ListInputmodel.tablename) ? (object)DBNull.Value : ListInputmodel.tablename),
            new SqlParameter("@ENABLED", string.IsNullOrEmpty(ListInputmodel.enable) ? (object)DBNull.Value : ListInputmodel.enable),
            new SqlParameter("@VISIBILITY", string.IsNullOrEmpty(ListInputmodel.visibilty) ? (object)DBNull.Value : ListInputmodel.visibilty),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetLookupList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @LOOKUP_ID, @WORKSPACE_NAME,@LOOKUP_DISPLAY_NAME, @ACCOUNT_DISPLAY_NAME," +
                " @TABLE_NAME, @ENABLED, @VISIBILITY, @V_MESSAGE OUTPUT";

            List<LookupListModel> Lookuplist = _prepareLookupRepository.ExecuteQuery(spQuery, parameters).ToList();

            return Lookuplist;
        }
        public async Task<List<DropdownList>> GetSourceAccountlist(sourceCommonModel inpoutModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", inpoutModel.userId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.workspaceId),
            new SqlParameter("@CLIENT_ID", inpoutModel.clientId),
            new SqlParameter("@CONNECTOR_ID",inpoutModel.connectorId ),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetSourceAccountList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @CONNECTOR_ID ," +
                " @V_MESSAGE OUTPUT";

            List<DropdownList> Lookuplist = _dropdownRepository.ExecuteQuery(spQuery, parameters).ToList();

            return Lookuplist;
        }
        public async Task<List<SourceTableListModel>> GetSourceTablelist(sourceCommonModel inpoutModel, string DBName, string MappedTable)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", inpoutModel.userId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.workspaceId),
            new SqlParameter("@CLIENT_ID", inpoutModel.clientId),
            new SqlParameter("@CONNECTOR_ID",inpoutModel.connectorId ),
            new SqlParameter("@DATABASE_NAME",DBName ),
            new SqlParameter("@MAPPED_TABLE",MappedTable ),
            new SqlParameter("@ACCOUNT_ID",inpoutModel.AccountId ),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_getSourceObjectList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @CONNECTOR_ID , @DATABASE_NAME, @MAPPED_TABLE, @ACCOUNT_ID ," +
                " @V_MESSAGE OUTPUT";

            List<SourceTableListModel> Lookuplist = _soureTableRepository.ExecuteQuery(spQuery, parameters).ToList();

            return Lookuplist;
        }

        public async Task<List<ObjectListModelForLookupInsert>> GetSourceObjectlist(sourceCommonModel inpoutModel, string DBName, string ObjectName)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", inpoutModel.userId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.workspaceId),
            new SqlParameter("@CLIENT_ID", inpoutModel.clientId),
            new SqlParameter("@CONNECTOR_ID",inpoutModel.connectorId ),
            new SqlParameter("@OBJECT_NAME",ObjectName ),
            new SqlParameter("@DATABASE_NAME",DBName ),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_getObjectFieldsList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @CONNECTOR_ID , @OBJECT_NAME, @DATABASE_NAME  ," +
                " @V_MESSAGE OUTPUT";

            List<ObjectListModelForLookupInsert> Lookuplist = _soureObjectRepository.ExecuteQuery(spQuery, parameters).ToList();

            return Lookuplist;
        }
        public async Task<string> SaveLookup(LookupArray InputModel, string User_id, string Client_id, string workspace_id, string tablevalues)
        {
            var tablevalue = (InputModel.useexistingtable != null ? InputModel.useexistingtable : InputModel.usecustomtable.ToUpper());
            var tablefield = (InputModel.defaultlookupfield != null ? InputModel.defaultlookupfield : InputModel.customlookupfield);
            var lookupFieldName = "";
            object[] parameters = {
                new SqlParameter("@USER_ID",User_id),
            new SqlParameter("@CLIENT_ID",Client_id),
            new SqlParameter("@WORKSPACE_ID", workspace_id),
            new SqlParameter("@LOOKUP_ID",string.IsNullOrEmpty(InputModel.lookupid) ? (object)DBNull.Value: InputModel.lookupid),
            new SqlParameter("@LOOKUP_DISPLAY_NAME", string.IsNullOrEmpty(InputModel.lookupdisplayname) ? (object)DBNull.Value: InputModel.lookupdisplayname),
            new SqlParameter("@WORKSPACE_NAME", string.IsNullOrEmpty(InputModel.workspacename) ? (object)DBNull.Value: InputModel.workspacename),
            new SqlParameter("@DESTINATION_FIELD",string.IsNullOrEmpty(InputModel.usedestinationtableoption) ? (object)DBNull.Value: InputModel.usedestinationtableoption),
            new SqlParameter("@DESTINATION_FIELD_VALUE", string.IsNullOrEmpty(tablevalue) ? (object)DBNull.Value: tablevalue),
            new SqlParameter("@SOURCE_FIELD", string.IsNullOrEmpty(InputModel.lookupfieldvalue) ? (object)DBNull.Value: InputModel.lookupfieldvalue),
            new SqlParameter("@SOURCE_FIELD_VALUE", string.IsNullOrEmpty(tablefield) ? (object)DBNull.Value: tablefield),
            new SqlParameter("@SOURCE_CONNECTOR_ID", string.IsNullOrEmpty(InputModel.sourceconnectorname) ? (object)DBNull.Value: InputModel.sourceconnectorname),
            new SqlParameter("@SOURCE_ACCOUNT_ID", string.IsNullOrEmpty(InputModel.sourceaccountname) ? (object)DBNull.Value: InputModel.sourceaccountname),
            new SqlParameter("@TABLE_NAME", string.IsNullOrEmpty(InputModel.sourcetable) ? (object)DBNull.Value: InputModel.sourcetable),
            new SqlParameter("@TABLE_FIELD_NAME", string.IsNullOrEmpty(tablevalues) ? (object)DBNull.Value: tablevalues),
            new SqlParameter("@FCT_FIELD_NAME", string.IsNullOrEmpty(lookupFieldName) ? (object)DBNull.Value: lookupFieldName),
             new SqlParameter("@LOADING_OPTION", string.IsNullOrEmpty(InputModel.Loadoption) ? (object)DBNull.Value: InputModel.Loadoption),
            new SqlParameter("@ENABLED",InputModel.enable),
            new SqlParameter("@VISIBILITY", InputModel.visibilty),
            new SqlParameter("@DATA_OPTIONS", string.IsNullOrEmpty(InputModel.datainsertionoption) ? (object)DBNull.Value: InputModel.datainsertionoption),
            new SqlParameter("@APPEARANCE_LOGO",string.IsNullOrEmpty(InputModel.AppearanceLogo) ? (object)DBNull.Value: InputModel.AppearanceLogo),
            new SqlParameter("@APPEARANCE_COLOR",string.IsNullOrEmpty(InputModel.AppearanceColor) ? (object)DBNull.Value: InputModel.AppearanceColor),
            new SqlParameter("@USER_NAME_INSERT",string.IsNullOrEmpty(InputModel.UsernameInsert) ? (object)DBNull.Value: InputModel.UsernameInsert),
            new SqlParameter("@USER_NAME_UPDATE",string.IsNullOrEmpty(InputModel.UsernameUpdate) ? (object)DBNull.Value: InputModel.UsernameUpdate),
            new SqlParameter("@SERVER_INSERT_DATE",string.IsNullOrEmpty(InputModel.ServerInsertDate) ? (object)DBNull.Value: InputModel.ServerInsertDate),
            new SqlParameter("@SERVER_INSERT_TIME",string.IsNullOrEmpty(InputModel.ServerInsertTime) ? (object)DBNull.Value: InputModel.ServerInsertTime),
            new SqlParameter("@SERVER_INSERT_TIME_ZONE",string.IsNullOrEmpty(InputModel.ServerInsertTimeZone) ? (object)DBNull.Value: InputModel.ServerInsertTimeZone),
            new SqlParameter("@SERVER_UPDATE_DATE",string.IsNullOrEmpty(InputModel.ServerUpdateDate) ? (object)DBNull.Value: InputModel.ServerUpdateDate),
            new SqlParameter("@SERVER_UPDATE_TIME",string.IsNullOrEmpty(InputModel.ServerUpdateTime) ? (object)DBNull.Value: InputModel.ServerUpdateTime),
            new SqlParameter("@SERVER_UPDATE_TIME_ZONE",string.IsNullOrEmpty(InputModel.ServerUpdateTimeZone) ? (object)DBNull.Value: InputModel.ServerUpdateTimeZone),
            new SqlParameter("@CLIENT_INSERT_DATE",string.IsNullOrEmpty(InputModel.ClientInsertDate) ? (object)DBNull.Value: InputModel.ClientInsertDate),
            new SqlParameter("@CLIENT_INSERT_TIME",string.IsNullOrEmpty(InputModel.ClientInsertTime) ? (object)DBNull.Value: InputModel.ClientInsertTime),
            new SqlParameter("@CLIENT_INSERT_TIME_ZONE",string.IsNullOrEmpty(InputModel.ClientInsertTimeZone) ? (object)DBNull.Value: InputModel.ClientInsertTimeZone),
            new SqlParameter("@CLIENT_UPDATE_DATE",string.IsNullOrEmpty(InputModel.ClientUpdateDate) ? (object)DBNull.Value: InputModel.ClientUpdateDate),
            new SqlParameter("@CLIENT_UPDATE_TIME",string.IsNullOrEmpty(InputModel.ClientUpdateTime) ? (object)DBNull.Value: InputModel.ClientUpdateTime),
            new SqlParameter("@CLIENT_UPDATE_TIME_ZONE",string.IsNullOrEmpty(InputModel.ClientUpdateTimeZone) ? (object)DBNull.Value: InputModel.ClientUpdateTimeZone),
            new SqlParameter("@BSTATUS",string.IsNullOrEmpty(InputModel.BStatus) ? (object)DBNull.Value: InputModel.BStatus),
            new SqlParameter("@BDELETE",string.IsNullOrEmpty(InputModel.BDelete) ? (object)DBNull.Value: InputModel.BDelete),
            new SqlParameter("@BMAP",string.IsNullOrEmpty(InputModel.BMap) ? (object)DBNull.Value: InputModel.BMap),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(InputModel.Remark1) ? (object)DBNull.Value: InputModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(InputModel.Remark2) ? (object)DBNull.Value: InputModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(InputModel.Remark3) ? (object)DBNull.Value: InputModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(InputModel.Remark4) ? (object)DBNull.Value: InputModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(InputModel.Flex1) ? (object)DBNull.Value: InputModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(InputModel.Flex2) ? (object)DBNull.Value: InputModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(InputModel.Flex3) ? (object)DBNull.Value: InputModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(InputModel.Flex4) ? (object)DBNull.Value: InputModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(InputModel.Flex5) ? (object)DBNull.Value: InputModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(InputModel.Flex6) ? (object)DBNull.Value: InputModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(InputModel.Flex7) ? (object)DBNull.Value: InputModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(InputModel.Flex8) ? (object)DBNull.Value: InputModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(InputModel.Flex9) ? (object)DBNull.Value: InputModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(InputModel.Flex10) ? (object)DBNull.Value: InputModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(InputModel.Flex11) ? (object)DBNull.Value: InputModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(InputModel.Flex12) ? (object)DBNull.Value: InputModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(InputModel.Flex13) ? (object)DBNull.Value: InputModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(InputModel.Flex14) ? (object)DBNull.Value: InputModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(InputModel.Flex15) ? (object)DBNull.Value: InputModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(InputModel.Flex16) ? (object)DBNull.Value: InputModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output },


        };
        string spQuery = StoreProcedureConstants.Sp_SaveLookup + " @USER_ID,@CLIENT_ID, @WORKSPACE_ID," +
            " @LOOKUP_ID, @LOOKUP_DISPLAY_NAME,@WORKSPACE_NAME, @DESTINATION_FIELD," +
            " @DESTINATION_FIELD_VALUE, @SOURCE_FIELD,@SOURCE_FIELD_VALUE, " +
            "@SOURCE_CONNECTOR_ID, @SOURCE_ACCOUNT_ID, @TABLE_NAME , @TABLE_FIELD_NAME, @FCT_FIELD_NAME, @LOADING_OPTION, @ENABLED, @VISIBILITY, @DATA_OPTIONS," +
            " @APPEARANCE_LOGO, @APPEARANCE_COLOR, @USER_NAME_INSERT, @USER_NAME_UPDATE, @SERVER_INSERT_DATE, @SERVER_INSERT_TIME, @SERVER_INSERT_TIME_ZONE, @SERVER_UPDATE_DATE," +
            " @SERVER_UPDATE_TIME, @SERVER_UPDATE_TIME_ZONE, @CLIENT_INSERT_DATE, @CLIENT_INSERT_TIME, @CLIENT_INSERT_TIME_ZONE," +
            " @CLIENT_UPDATE_DATE, @CLIENT_UPDATE_TIME, @CLIENT_UPDATE_TIME_ZONE, @BSTATUS,	@BDELETE, @BMAP," +
            " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
            " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
            "  @V_MESSAGE OUTPUT";

            return _insertDataForLookup.ExecuteCommand(spQuery, parameters);
        }
        

        public async Task<string> InsertionOption(InsertionOptionModel Insertmodel)
        {
            Insertmodel.destinationtable = "";
            Insertmodel.Action = "";
            var date = "";
            object[] parameters = {

            new SqlParameter("@USER_ID",Insertmodel.User_id),
            new SqlParameter("@WORKSPACE_ID", Insertmodel.workspace_id),
            new SqlParameter("@CLIENT_ID", Insertmodel.Client_id),
            new SqlParameter("@SRC_TABLE",string.IsNullOrEmpty(Insertmodel.destinationtable) ? (object)DBNull.Value: Insertmodel.destinationtable),
            new SqlParameter("@DES_TABLE",string.IsNullOrEmpty(Insertmodel.sourcetablename) ? (object)DBNull.Value: Insertmodel.sourcetablename),
            new SqlParameter("@LOOKUP_ID",string.IsNullOrEmpty(Insertmodel.Lookupid) ? (object)DBNull.Value:  Insertmodel.Lookupid),
            new SqlParameter("@ACTION_TYPE",string.IsNullOrEmpty(Insertmodel.Action) ? (object)DBNull.Value: Insertmodel.Action),
            new SqlParameter("@DATE",string.IsNullOrEmpty(date) ? (object)DBNull.Value: date),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output },
            };
            string spQuery = StoreProcedureConstants.Sp_LoadData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @SRC_TABLE, @DES_TABLE,@LOOKUP_ID, @ACTION_TYPE, @DATE, " +
                "  @V_MESSAGE OUTPUT";

            return _insertionOptionModel.ExecuteCommand(spQuery, parameters);
        }

        public async Task<string> GenerateCustomTable(customeTableModel customTable)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",customTable.User_id),
            new SqlParameter("@CLIENT_ID",customTable.Client_id),
            new SqlParameter("@WORKSPACE_ID",customTable.workspace_id),
            new SqlParameter("@CUSTOM_LOOKUP_TABLE", customTable.CustomLookup),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output },


        };
            string spQuery = StoreProcedureConstants.Sp_sETLOOKUPTABLE + " @USER_ID,@CLIENT_ID, @WORKSPACE_ID," +
                " @CUSTOM_LOOKUP_TABLE," +
                "  @V_MESSAGE OUTPUT";

            return _customeTableModel.ExecuteCommand(spQuery, parameters);
        }



        public async Task<string> Addlookup(LookupArray InputModel)
        {
            var tablevalue = (InputModel.useexistingtable != null ? InputModel.useexistingtable:InputModel.usecustomtable.ToUpper());
            var tablefield = (InputModel.defaultlookupfield != null ? InputModel.defaultlookupfield : InputModel.customlookupfield);
            var lookupFieldName = "";
            var clientdate = DateTime.Today.ToShortDateString();
            var clientTime= DateTime.Today.ToShortTimeString();
            object[] parameters = {
            new SqlParameter("@USER_ID",InputModel.User_id),
            new SqlParameter("@WORKSPACE_ID",InputModel.workspace_id),
            new SqlParameter("@CLIENT_ID",InputModel.Client_id),
            new SqlParameter("@PROCEDURE_NAME",InputModel.procedurename),
            new SqlParameter("@LOOKUP_ID",string.IsNullOrEmpty(InputModel.lookupid) ? (object)DBNull.Value: InputModel.lookupid),
            new SqlParameter("@LOOKUP_DISPLAY_NAME", string.IsNullOrEmpty(InputModel.lookupdisplayname) ? (object)DBNull.Value: InputModel.lookupdisplayname),
            new SqlParameter("@WORKSPACE_NAME", string.IsNullOrEmpty(InputModel.workspacename) ? (object)DBNull.Value: InputModel.workspacename),
            new SqlParameter("@DESTINATION_FIELD",string.IsNullOrEmpty(InputModel.usedestinationtableoption) ? (object)DBNull.Value: InputModel.usedestinationtableoption),
            new SqlParameter("@DESTINATION_FIELD_VALUE", string.IsNullOrEmpty(tablevalue) ? (object)DBNull.Value: tablevalue),
            new SqlParameter("@SOURCE_FIELD", string.IsNullOrEmpty(InputModel.lookupfieldvalue) ? (object)DBNull.Value: InputModel.lookupfieldvalue),
            new SqlParameter("@SOURCE_FIELD_VALUE", string.IsNullOrEmpty(tablefield) ? (object)DBNull.Value: tablefield),
            new SqlParameter("@SOURCE_CONNECTOR_ID", string.IsNullOrEmpty(InputModel.sourceconnectorname) ? (object)DBNull.Value:InputModel.sourceconnectorname),
            new SqlParameter("@SOURCE_ACCOUNT_ID", string.IsNullOrEmpty(InputModel.sourceaccountname) ? (object)DBNull.Value: InputModel.sourceaccountname),
            new SqlParameter("@TABLE_NAME", string.IsNullOrEmpty(InputModel.sourcetable) ? (object)DBNull.Value: InputModel.sourcetable),
            new SqlParameter("@TABLE_FIELD_NAME", string.IsNullOrEmpty(InputModel.tablevalues) ? (object)DBNull.Value:InputModel.tablevalues),
            new SqlParameter("@FCT_FIELD_NAME", string.IsNullOrEmpty(lookupFieldName) ? (object)DBNull.Value: lookupFieldName),
             new SqlParameter("@LOADING_OPTION", string.IsNullOrEmpty(InputModel.Loadoption) ? (object)DBNull.Value: InputModel.Loadoption),
            new SqlParameter("@ENABLED",InputModel.enable),
            new SqlParameter("@VISIBILITY", InputModel.visibilty),
            new SqlParameter("@DATA_OPTIONS", string.IsNullOrEmpty(InputModel.datainsertionoption) ? (object)DBNull.Value: InputModel.datainsertionoption),
            new SqlParameter("@DES_TABLE", string.IsNullOrEmpty(lookupFieldName) ? (object)DBNull.Value: lookupFieldName),
            new SqlParameter("@CLIENT_DATE", string.IsNullOrEmpty(clientdate) ? (object)DBNull.Value: clientdate),
            new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(clientTime) ? (object)DBNull.Value: clientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(InputModel.Remark2) ? (object)DBNull.Value: InputModel.Remark2),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(InputModel.Remark1) ? (object)DBNull.Value: InputModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(InputModel.Remark2) ? (object)DBNull.Value: InputModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(InputModel.Remark3) ? (object)DBNull.Value: InputModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(InputModel.Remark4) ? (object)DBNull.Value: InputModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(InputModel.Flex1) ? (object)DBNull.Value: InputModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(InputModel.Flex2) ? (object)DBNull.Value: InputModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(InputModel.Flex3) ? (object)DBNull.Value: InputModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(InputModel.Flex4) ? (object)DBNull.Value: InputModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(InputModel.Flex5) ? (object)DBNull.Value: InputModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(InputModel.Flex6) ? (object)DBNull.Value: InputModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(InputModel.Flex7) ? (object)DBNull.Value: InputModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(InputModel.Flex8) ? (object)DBNull.Value: InputModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(InputModel.Flex9) ? (object)DBNull.Value: InputModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(InputModel.Flex10) ? (object)DBNull.Value: InputModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(InputModel.Flex11) ? (object)DBNull.Value: InputModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(InputModel.Flex12) ? (object)DBNull.Value: InputModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(InputModel.Flex13) ? (object)DBNull.Value: InputModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(InputModel.Flex14) ? (object)DBNull.Value: InputModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(InputModel.Flex15) ? (object)DBNull.Value: InputModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(InputModel.Flex16) ? (object)DBNull.Value: InputModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output },


        };
            string spQuery = StoreProcedureConstants.Sp_Lookup + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID, @PROCEDURE_NAME," +
                " @LOOKUP_ID, @LOOKUP_DISPLAY_NAME,@WORKSPACE_NAME, @DESTINATION_FIELD," +
                " @DESTINATION_FIELD_VALUE, @SOURCE_FIELD,@SOURCE_FIELD_VALUE, " +
                "@SOURCE_CONNECTOR_ID, @SOURCE_ACCOUNT_ID, @TABLE_NAME , @TABLE_FIELD_NAME, @FCT_FIELD_NAME, @LOADING_OPTION, @ENABLED, @VISIBILITY, @DATA_OPTIONS," +
                " @DES_TABLE ,@CLIENT_DATE, @CLIENT_TIME, @CLIENT_TIME_ZONE," +
               " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                "  @V_MESSAGE OUTPUT";

            return _addLookupRepository.ExecuteCommand(spQuery, parameters);
        }


    }
}
