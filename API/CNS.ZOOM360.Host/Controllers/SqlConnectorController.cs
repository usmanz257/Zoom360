using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL;
using CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.SqlConnector.RouteName)]
    [ApiController]
    public class SqlConnectorController : ControllerBase
    {
        private readonly ISqlConnectorService _sqlConnectorService;
        public SqlConnectorController(ISqlConnectorService sqlConnectorService) {
            _sqlConnectorService = sqlConnectorService;
        }

        [Route(ServiceConstants.SqlConnector.SaveStep1Data)]
        // POST: api/SqlConnector/SaveStep1Data
        [HttpPost]
        public void SaveStep1Data(SOURCE_CNF ChildData, string AccountDisplayName, string EnableConnectoins, string Email, string AccountAuthurization, string Workspace)
        {

            EmailAuthenticationSourceAccount EmailAuthentication = new EmailAuthenticationSourceAccount();

            SourceAccountConnectionModel sourceAccountConnectionModel = new SourceAccountConnectionModel();



            Type myClassType = ChildData.GetType();
            PropertyInfo[] properties = myClassType.GetProperties();
            var list = "";
            string UserId = "admin";
            string WORKSPACEID = "1";
            string CLIENTID = "1002";
            string AccountId = "9003";
            string ConnectorId = "214";


            sourceAccountConnectionModel.Connector_ID = "214";
            sourceAccountConnectionModel.UserId = "admin";
            sourceAccountConnectionModel.WorkspaceId = "1";
            sourceAccountConnectionModel.ClientId = "1002";
            sourceAccountConnectionModel.Account_Id = "9003";


            foreach (PropertyInfo property in properties)
            {
                //property.Name 
                sourceAccountConnectionModel.HostName = property.Name;
                sourceAccountConnectionModel.FieldValue = property.GetValue(ChildData, null);
                list = _sqlConnectorService.SaveConnection(sourceAccountConnectionModel);

            }
            EmailAuthentication.UserId = UserId;
            EmailAuthentication.WorkspaceId = WORKSPACEID;
            EmailAuthentication.ClientId = CLIENTID;
            EmailAuthentication.Account_Id = AccountId;
            EmailAuthentication.Email = Email;
            EmailAuthentication.AccountAuthurization = AccountAuthurization;
            if (EmailAuthentication.Email != null || EmailAuthentication.AccountAuthurization != null)
            {
                var list2 = _sqlConnectorService.saveEmailAuthenticationForConnection(EmailAuthentication);

            }
            SourceAccountModel sourceAccountModel = new SourceAccountModel();
            sourceAccountModel.UserId = UserId;
            sourceAccountModel.WorkspaceId = WORKSPACEID;
            sourceAccountModel.WorkspaceName = Workspace;
            sourceAccountModel.ClientId = CLIENTID;
            sourceAccountModel.Account_Id = AccountId;
            sourceAccountModel.ConnectorId = ConnectorId;
            sourceAccountModel.DisplayName = AccountDisplayName;
            sourceAccountModel.EnableStatus = Convert.ToBoolean(Convert.ToInt32(EnableConnectoins));
            var list3 = _sqlConnectorService.SaveAccountDispaly(sourceAccountModel);
            return;
        }
        // POST: api/SqlConnector/SaveStep4Data
        //savestep4data
        [Route(ServiceConstants.SqlConnector.SaveSourceObjects)]
        [HttpPost]
        public string SaveSourceObjects(ConnectionObjectStep4Model Connector)
        {


            string UserId = "1";
            string WORKSPACEID = "1";
            string CLIENTID = "1002";

            SourceObjectModel sourceObjectModel = new SourceObjectModel();
            sourceObjectModel.UserId = UserId;
            sourceObjectModel.WorkSpaceID = WORKSPACEID;
            sourceObjectModel.ClientId = CLIENTID;
            sourceObjectModel.WorkspaceName = Connector.WorkspaceName;
            sourceObjectModel.ObjectName = Connector.SourceDisplayName;
            sourceObjectModel.AccessGrant = Connector.Authorizationgranted;


            return _sqlConnectorService.SaveSourceObjects(sourceObjectModel);
            
        }
        // GET: api/SqlConnector/GetSourceObjectListForStep4Grid
        [Route(ServiceConstants.SqlConnector.GetSourceObjectListForStep4Grid)]
        [HttpGet]
        public async Task<IEnumerable<GEtSourceObjectList>> GetSourceObjectListForStep4Grid([FromQuery]GetSourceObjectListInput  input)
        {

            var list = await _sqlConnectorService.GetSourceObjectList(input);
            return list;
        }
        // GET: api/SqlConnector/GetEntityNameDropdownStep6

        [Route(ServiceConstants.SqlConnector.GetEntityNameDropdownStep6)]
        [HttpGet]
        public async Task<IEnumerable<GEtSourceObjectList>> GetEntityNameDropdownStep6([FromQuery]GetSourceObjectListInput input)
        {

            var list = await _sqlConnectorService.GetSourceObjectList(input);
            return list;
        }
        // GET: api/SqlConnector/StepForWorkspaceDropdown

        // GET: api/SqlConnector/GetObjectFieldsListStep6

        [Route(ServiceConstants.SqlConnector.GetObjectFieldsListStep6)]
        [HttpGet]
        public async Task<IEnumerable<EntityObjectFieldsList>> GetObjectFieldsListStep6([FromQuery]GetObjectFieldListInput input)
        {

            var list = await _sqlConnectorService.GetObjectFieldsList(input);
            return list;
        }
        // Post: api/SqlConnector/ObjectEntityFieldUpdateStep6

        [Route(ServiceConstants.SqlConnector.ObjectEntityFieldUpdateStep6)]
        [HttpPost]
        public async Task<IEnumerable<EntityObjectFieldsList>> ObjectEntityFieldUpdateStep6(UpdateEntityObjectFieldInputs[] inputs, string UserId, string Workspaceid, string Clientid, string ConnectorId, string objectName)
        {
            List<EntityObjectFieldsList> list2 = new List<EntityObjectFieldsList>();
           
            for (int i = 0; i < inputs.Length; i++)
            {
                list2 = await _sqlConnectorService.UpdateEntityObjectField(inputs[i],  UserId,  Workspaceid,  Clientid,  ConnectorId,  objectName);
            }

            
            return list2;
        }


        // Post: api/SqlConnector/SourceObjectGridListUpdateStep4
        [Route(ServiceConstants.SqlConnector.SourceObjectGridListUpdateStep4)]
        [HttpPost]
        public async Task<List<UpdateSourceObjectGridModel>> SourceObjectGridListUpdateStep4(GEtSourceObjectList[] inputs,string UserId, string Workspaceid, string Clientid, string ConnectorId)
        {
            List<UpdateSourceObjectGridModel> list2 = new List<UpdateSourceObjectGridModel>();
            GEtSourceObjectList sourcelist = new GEtSourceObjectList();
            sourcelist.UserId = UserId;
            sourcelist.WORKSPACE_ID = Convert.ToInt32(Workspaceid);
            sourcelist.CLIENT_ID = Convert.ToInt32(Clientid);
            sourcelist.CONNECTOR_ID = Convert.ToInt32(ConnectorId);

            for (int i = 0; i < inputs.Length; i++)
            {
                list2 = await _sqlConnectorService.UpdateGridSourceObjectList(inputs[i], UserId, Convert.ToInt32(Workspaceid), Convert.ToInt32(Clientid), Convert.ToInt32(ConnectorId));
            }


            return list2;
        }
        // Post: api/SqlConnector/ExtractPageDataSaveForStep8
        [Route(ServiceConstants.SqlConnector.ExtractPageDataSaveForStep8)]

        [HttpPost]
        public string ExtractPageDataSaveForStep8(SaveExtractsInputs inputs)
        {
             
           // var datelink = Data.date_LINK + "To" + Data.date_LINK1;
            var list2 = _sqlConnectorService.SaveExtracts(inputs);


            return list2;
        }
        [Route(ServiceConstants.SqlConnector.GetSqlConnectorList)]
        // GET: api/SqlConnector/GetSqlConnectorList
        [HttpGet]
        public async Task<List<UpdateConnectorListStep2>> GetSqlConnectorList(string Account_Id, string UserId, string Workspaceid, string Clientid, string ConnectorId)
        {

            var list = await _sqlConnectorService.GetConnectorData(Account_Id, UserId, Workspaceid, Clientid, ConnectorId);
            return list;
        }

        // GET: api/SqlConnector/GetSqlExtractPageList

        [Route(ServiceConstants.SqlConnector.GetSqlExtractPageList)]
        [HttpPost]
        public async Task<IEnumerable<ExtractModel>> GetSqlExtractPageList(GetExtractDataInputs Inputs)
        {

            var list = await _sqlConnectorService.GetExtractData(Inputs);
            return list;
        }
    }
}