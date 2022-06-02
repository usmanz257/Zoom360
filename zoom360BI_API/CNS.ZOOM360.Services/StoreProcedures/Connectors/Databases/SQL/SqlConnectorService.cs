using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL;
using CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.Connectors.Databases.SQL
{
    public class SqlConnectorService : ISqlConnectorService
    {
        
        private readonly IRepositoryBase<SourceAccountConnectionModel> _SourceAccountConRepository;
        private readonly IRepositoryBase<EmailAuthenticationSourceAccount> _EmailAuthenticationRepository;
        private readonly IRepositoryBase<SourceAccountModel> _SourceAccountRepository;
        private readonly IRepositoryBase<UpdateConnectorListStep2> _UpdateConnectorRepository;
        private readonly IRepositoryBase<GEtSourceObjectList> _SourceObjectListRepository;
         private readonly IRepositoryBase<SourceObjectModel> _SourceObjectRepository;
        private readonly IRepositoryBase<UpdateSourceObjectGridModel> _UpdateSourceObjectGridRepository;
        private readonly IRepositoryBase<EntityObjectFieldsList> _EntityObjectFieldListRepository;
        private readonly IRepositoryBase<ExtractModel> _ExtractRepository;

        private readonly IRepositoryBase<UpdateConnectorListStep2> _ConnectorRepository;

        public SqlConnectorService(IRepositoryBase<SourceAccountConnectionModel> SourceAccountConRepository,
            IRepositoryBase<EmailAuthenticationSourceAccount> EmailAuthenticationRepository,
            IRepositoryBase<SourceAccountModel> SourceAccountRepository,
            IRepositoryBase<UpdateConnectorListStep2> UpdateConnectorRepository,
            IRepositoryBase<GEtSourceObjectList> SourceObjectListRepository,
             IRepositoryBase<SourceObjectModel> SourceObjectRepository,
            IRepositoryBase<UpdateSourceObjectGridModel> UpdateSourceObjectGridRepository,
            IRepositoryBase<EntityObjectFieldsList> EntityObjectFieldListRepository,
            IRepositoryBase<ExtractModel> ExtractRepository, IRepositoryBase<UpdateConnectorListStep2> ConnectorRepository)
        {

            _SourceAccountConRepository = SourceAccountConRepository;
            _EmailAuthenticationRepository = EmailAuthenticationRepository;
            _SourceAccountRepository = SourceAccountRepository;
            _UpdateConnectorRepository = UpdateConnectorRepository;
            _SourceObjectListRepository = SourceObjectListRepository;
            _SourceObjectRepository = SourceObjectRepository;
            _UpdateSourceObjectGridRepository = UpdateSourceObjectGridRepository;
            _EntityObjectFieldListRepository = EntityObjectFieldListRepository;
            _ExtractRepository = ExtractRepository;
            _ConnectorRepository = ConnectorRepository;
        }

        #region// Source Account Step 2
        //SQL Connector Save
        //Source Account
        //SaveDataForConnection
        public string SaveConnection(SourceAccountConnectionModel InputModel) 
        {

            //SqlCommand SqlCmd = new SqlCommand("SOURCEACCOUNTCON", cn);

            object[] parameters = {
            new SqlParameter("@USER_ID", InputModel.UserId),
            new SqlParameter("@WORKSPACE_ID", InputModel.WorkspaceId),
            new SqlParameter("@CONNECTOR_ID", InputModel.Connector_ID),
            new SqlParameter("@CLIENT_ID", InputModel.ClientId),
            new SqlParameter("@ACCOUNT_ID", InputModel.Account_Id),
            new SqlParameter("@FIELD_NAME", InputModel.HostName),
            new SqlParameter("@FIELD_VALUE", InputModel.FieldValue==null ? (object)DBNull.Value : InputModel.FieldValue),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };


            string spQuery = StoreProcedureConstants.Sp_SourceAccountCon + " @USER_ID,@WORKSPACE_ID, @CONNECTOR_ID, @CLIENT_ID,  @ACCOUNT_ID, @FIELD_NAME, @FIELD_VALUE,  @V_MESSAGE OUTPUT";
            return _SourceAccountConRepository.ExecuteCommand(spQuery, parameters);

            

        }
        //Email Save For Authurization
        //Source Account
        public string saveEmailAuthenticationForConnection(EmailAuthenticationSourceAccount InputModel)
        {

            //SqlCommand SqlCmd = new SqlCommand("SOURCEACCOUNTREQ", cn);

            object[] parameters = {
                new SqlParameter("@USER_ID", InputModel.UserId),
                new SqlParameter("@WORKSPACE_ID", InputModel.WorkspaceId),
                new SqlParameter("@CLIENT_ID", InputModel.ClientId),
                new SqlParameter("@ACCOUNT_ID", InputModel.Account_Id),
                new SqlParameter("@ACCOUNT_AUTHORIZATION", InputModel.AccountAuthurization),
                new SqlParameter("@EMAIL_ID", InputModel.Email),
                new SqlParameter("@EMAIL_MESSAGE", SqlDbType.NVarChar, 4000) {Direction=ParameterDirection.Output },
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction=ParameterDirection.Output }
            };


            string spQuery = StoreProcedureConstants.Sp_SourceAccountReq + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID,@ACCOUNT_ID, @ACCOUNT_AUTHORIZATION, @EMAIL_ID,@EMAIL_MESSAGE OUTPUT,  @V_MESSAGE OUTPUT";
            return _EmailAuthenticationRepository.ExecuteCommand(spQuery, parameters);
        }
        //step2AccountDsplayDataSave
        //Source Account
        //SaveDataForAccountDispaly
        public string SaveAccountDispaly(SourceAccountModel InputModal)
        {

            //SqlCommand SqlCmd = new SqlCommand("SOURCEACCOUNT", cn);

            object[] parameters = {
            new SqlParameter("@USER_ID", InputModal.UserId),
            new SqlParameter("@WORKSPACE_ID", InputModal.WorkspaceId),
            new SqlParameter("@WORKSPACE_NAME",InputModal.WorkspaceName),
            new SqlParameter("@CLIENT_ID", InputModal.ClientId),
            new SqlParameter("@ACCOUNT_ID", InputModal.Account_Id),
            new SqlParameter("@CONNECTOR_ID", InputModal.ConnectorId),
            new SqlParameter("@ACCOUNT_DISPLAY_NAME", InputModal.DisplayName),
            new SqlParameter("@ENABLED_STATUS", InputModal.EnableStatus),
            new SqlParameter("@VISIBILITY_STATUS", string.IsNullOrEmpty(InputModal.visibilitystatue) ? (object)DBNull.Value: InputModal.visibilitystatue),
             new SqlParameter("@COMMENTS", string.IsNullOrEmpty(InputModal.comments) ? (object)DBNull.Value: InputModal.comments),
            new SqlParameter("@SPECIAL_COMMENTS", string.IsNullOrEmpty(InputModal.spComments) ? (object)DBNull.Value: InputModal.spComments),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output},
            };

            string spQuery = StoreProcedureConstants.Sp_SourceAccount + " @USER_ID,@WORKSPACE_ID,  @CLIENT_ID, @ACCOUNT_ID, @CONNECTOR_ID, @ACCOUNT_DISPLAY_NAME, @WORKSPACE_NAME, @ENABLED_STATUS, @VISIBILITY_STATUS, @COMMENTS, @SPECIAL_COMMENTS, @V_MESSAGE OUTPUT";
            return _SourceAccountRepository.ExecuteCommand(spQuery, parameters);


        }
        //Step2EditMode
        //Source Account
        public async Task<IEnumerable<UpdateConnectorListStep2>> GetUpdateConnectedSourceList(string Account_Id, string UserId, string WorkspaceId, string ClientId, string ConnectorId)
        {

            //SqlCommand SqlCmd = new SqlCommand("UPDATECONNECTEDSOURCELIST", SqlConn);
            object[] parameters = {
                new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", ClientId),
            new SqlParameter("@ACCOUNT_ID", Account_Id),
            new SqlParameter("@CONNECTOR_ID", ConnectorId),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output},
        };

            string spQuery = StoreProcedureConstants.Sp_UpdateConnectedSourceList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @ACCOUNT_ID, @CONNECTOR_ID, @V_MESSAGE OUTPUT";

            List<UpdateConnectorListStep2> updateConnector = _UpdateConnectorRepository.ExecuteQuery(spQuery, parameters).ToList();
            return updateConnector;
        }

        #endregion

        #region // Source Object
        //source Object
        // SaveDataForStep4
        public string SaveSourceObjects(SourceObjectModel InputModel)
        {

            //SqlCommand SqlCmd = new SqlCommand("SAVESOURCEOBJECTS", cn);

            object[] parameters = {
            new SqlParameter("@USER_ID", InputModel.UserId),
            new SqlParameter("@WORKSPACE_ID", InputModel.WorkSpaceID),
            new SqlParameter("@CLIENT_ID", InputModel.ClientId),
            new SqlParameter("@OBJECT_NAME", InputModel.ObjectName),
            new SqlParameter("@WORKSPACE_NAME", InputModel.WorkspaceName),
            new SqlParameter("@ACCESS_GRANTED", InputModel.AccessGrant),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output},

            };
            
            string spQuery = StoreProcedureConstants.Sp_SaveSourceObject + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID,  @OBJECT_NAME,@WORKSPACE_NAME, @ACCESS_GRANTED,  @V_MESSAGE OUTPUT";
            return _SourceObjectRepository.ExecuteCommand(spQuery, parameters);



        }
        //StepForDrigDataList
        //Source Object
        public async Task<IEnumerable<GEtSourceObjectList>> GetSourceObjectList(GetSourceObjectListInput input)
        {
            //SqlCommand SqlCmd = new SqlCommand("GETSOURCEOBJECTLIST", SqlConn);
            object[] parameters = {
            new SqlParameter("@USER_ID", input.UserId),
            new SqlParameter("@WORKSPACE_ID", input.WorkspaceId),
            new SqlParameter("@CLIENT_ID", input.ClientId),
            new SqlParameter("@CONNECTOR_ID", input.ConnectorId),
            new SqlParameter("@DATABASE_NAME", input.databasename),
            new SqlParameter("@MAPPED_TABLE", string.IsNullOrEmpty(input.Mappedtable) ? (object)DBNull.Value: input.Mappedtable),
            new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(input.Accountid) ? (object)DBNull.Value: input.Accountid),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output}
            };
             string spQuery = StoreProcedureConstants.Sp_GetSourceObjectList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
             " @CONNECTOR_ID, @DATABASE_NAME, @MAPPED_TABLE,@ACCOUNT_ID,@V_MESSAGE OUTPUT";

            List<GEtSourceObjectList> GEtSourceObjectList = _SourceObjectListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return GEtSourceObjectList;
        }

        //Step4UpdateGridList
        //Source Object
        public async Task<List<UpdateSourceObjectGridModel>> UpdateGridSourceObjectList(GEtSourceObjectList inputs, string UserId, int Workspaceid, int Clientid, int ConnectorId)
        {

            //SqlCommand SqlCmd = new SqlCommand("UPDATESOURCEOBJECTLIST", SqlConn);
             
                        object[] parameters = {
            new SqlParameter("@USER_ID",UserId),
            new SqlParameter("@WORKSPACE_ID", Workspaceid),
            new SqlParameter("@CLIENT_ID", Clientid),
            new SqlParameter("@CONNECTOR_ID", ConnectorId),
            new SqlParameter("@OBJECT_NAME", inputs.OBJECT_NAME),
            new SqlParameter("@DISPLAY_NAME",string.IsNullOrEmpty(inputs.DISPLAY_NAME) ? (object)DBNull.Value: inputs.DISPLAY_NAME),
            new SqlParameter("@VISIBILITY_STATUS", string.IsNullOrEmpty(inputs.OBJECT_VISIBILITY) ? (object)DBNull.Value: inputs.OBJECT_VISIBILITY),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_UpdateSourceObjectList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                "  @CONNECTOR_ID, @OBJECT_NAME, @DISPLAY_NAME,  @VISIBILITY_STATUS, @V_MESSAGE OUTPUT";

            List<UpdateSourceObjectGridModel> SourceObjectList = _UpdateSourceObjectGridRepository.ExecuteQuery(spQuery, parameters).ToList();
            return SourceObjectList;
            
        }
        #endregion

        //EntityDropdownForStep6 
        //Field Section
        // EntityDropdownList method skiped from this service you can use  GetSourceObjectList
       
       //Step6GetObjectList
        //Field Section  get table list
        public async Task<IEnumerable<EntityObjectFieldsList>> GetObjectFieldsList(GetObjectFieldListInput input)
        {

            //SqlCommand SqlCmd = new SqlCommand("GETOBJECTFIELDSLIST", SqlConn);

            object[] parameters = {
            new SqlParameter("@USER_ID", input.UserId),
            new SqlParameter("@WORKSPACE_ID", input.WorkspaceId),
            new SqlParameter("@CLIENT_ID", input.ClientId),
            new SqlParameter("@CONNECTOR_ID", input.ConnectorId),
            new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(input.AccountId) ? (object)DBNull.Value: input.AccountId),
            new SqlParameter("@DATABASE_NAME", input.databasename),
            new SqlParameter("@OBJECT_NAME", input.ObjectName),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output},
            };

        string spQuery = StoreProcedureConstants.Sp_GetObjectFieldList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
            "  @CONNECTOR_ID,@ACCOUNT_ID, @OBJECT_NAME, @DATABASE_NAME,  @V_MESSAGE OUTPUT";

        List<EntityObjectFieldsList> SourceObjectList = _EntityObjectFieldListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return SourceObjectList;
           
        }

        //Step6UpdateGridFields
        // Field Section
        public async Task<List<EntityObjectFieldsList>> UpdateEntityObjectField(UpdateEntityObjectFieldInputs input, string UserId, string Workspaceid, string Clientid, string ConnectorId, string objectName)
        {

            //   SqlCommand SqlCmd = new SqlCommand("UPDATEOBJECTFIELDSLIST", SqlConn);
            object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@WORKSPACE_ID", Workspaceid),
            new SqlParameter("@CLIENT_ID",Clientid),
            new SqlParameter("@CONNECTOR_ID",ConnectorId),
            new SqlParameter("@OBJECT_NAME", objectName),
            new SqlParameter("@FIELD_NAME", input.OBJECT_FIELD_NAME),
            new SqlParameter("@FIELD_TYPE", input.OBJECT_FIELD_TYPE),
            new SqlParameter("@DISPLAY_NAME", input.DISPLAY_NAME),
            new SqlParameter("@AGGREGATION_STATUS", input.AGGREGATION_STATUS),
            new SqlParameter("@ISKEY_STATUS", input.ISKEY_STATUS),
            new SqlParameter("@VISIBILITY_STATUS", input.VISIBILITY_STATUS),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };

            string spQuery = StoreProcedureConstants.Sp_UpdateObjectFieldList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
            "  @CONNECTOR_ID,  @OBJECT_NAME, @FIELD_NAME,@FIELD_TYPE, @DISPLAY_NAME, @AGGREGATION_STATUS," +
            " @ISKEY_STATUS, @VISIBILITY_STATUS, @V_MESSAGE OUTPUT";

            List<EntityObjectFieldsList> SourceObjectList = _EntityObjectFieldListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return SourceObjectList;

        }

        //Step8DataSaveForExtarct
        //Extract 
        public string SaveExtracts(SaveExtractsInputs inputs)
        {
            //SqlCommand SqlCmd = new SqlCommand("SAVEEXTRACTDATA", cn);

            object[] parameters = {
            new SqlParameter("@USER_ID", inputs.UserId),
            new SqlParameter("@WORKSPACE_ID", inputs.Workspaceid),
            new SqlParameter("@CLIENT_ID", inputs.Clientid),
            new SqlParameter("@CONNECTOR_ID", inputs.CONNECTORID),
            new SqlParameter("@ACCOUNT_ID", inputs.ACCOUNT_Id),
            new SqlParameter("@DATE_LINK", inputs.FromandTo),
            new SqlParameter("@DATA_RAW_STATE", inputs.data_RAW_STATE),
            new SqlParameter("@EXTRACT_PROCESS_RUNNING", inputs.extract_PROCESS_RUNNING),
            new SqlParameter("@DATA_COLLECTION", inputs.data_COLLECTION),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };

            string spQuery = StoreProcedureConstants.Sp_SaveExtracts + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, " +
                "  @CONNECTOR_ID,@ACCOUNT_ID, @DATE_LINK,@DATA_RAW_STATE, @EXTRACT_PROCESS_RUNNING," +
                " @DATA_COLLECTION, @V_MESSAGE OUTPUT";

            return _ExtractRepository.ExecuteCommand(spQuery, parameters);
        }

        //Step8EditMode
        //Extract
        public async Task<IEnumerable<ExtractModel>> GetExtractData(GetExtractDataInputs Inputs)
        {

            //SqlCommand SqlCmd = new SqlCommand("GETEXTRACTDATA", SqlConn);

            object[] parameters = {
            new SqlParameter("@USER_ID", Inputs.UserId),
            new SqlParameter("@WORKSPACE_ID", Inputs.WorkspaceId),
            new SqlParameter("@CLIENT_ID", Inputs.ClientId),
            new SqlParameter("@ACCOUNT_ID", Inputs.Account_Id),
            new SqlParameter("@CONNECTOR_ID", Inputs.ConnectorId),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}

        };

            string spQuery = StoreProcedureConstants.Sp_GetExtractData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
            " @ACCOUNT_ID, @CONNECTOR_ID, @V_MESSAGE OUTPUT";
            List<ExtractModel> extractlist = _ExtractRepository.ExecuteQuery(spQuery, parameters).ToList();
            return extractlist;

            
        }

        public async Task<List<UpdateConnectorListStep2>> GetConnectorData(string Account_Id, string UserId, string Workspaceid, string Clientid, string ConnectorId)
        {

            //   SqlCommand SqlCmd = new SqlCommand("UPDATEOBJECTFIELDSLIST", SqlConn);
            object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@WORKSPACE_ID", Workspaceid),
            new SqlParameter("@CLIENT_ID",Clientid),
            new SqlParameter("@ACCOUNT_ID",Account_Id),
            new SqlParameter("@CONNECTOR_ID", ConnectorId),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };

            string spQuery = StoreProcedureConstants.Sp_UpdateConnectionData + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
            "  @ACCOUNT_ID,  @CONNECTOR_ID, @V_MESSAGE ";

            List<UpdateConnectorListStep2> ConnectorInfoList = _ConnectorRepository.ExecuteQuery(spQuery, parameters).ToList();
            return ConnectorInfoList;

        }



    }
}
