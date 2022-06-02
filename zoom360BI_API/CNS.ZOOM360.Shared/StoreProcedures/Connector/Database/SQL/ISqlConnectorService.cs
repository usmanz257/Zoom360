using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL
{
    public interface ISqlConnectorService
    {
        string SaveConnection(SourceAccountConnectionModel InputModel);
        string saveEmailAuthenticationForConnection(EmailAuthenticationSourceAccount InputModel);
        string SaveAccountDispaly(SourceAccountModel InputModal);
        Task<IEnumerable<UpdateConnectorListStep2>> GetUpdateConnectedSourceList(string Account_Id, string UserId, string WorkspaceId, string ClientId, string ConnectorId);
        string SaveSourceObjects(SourceObjectModel InputModel);
        Task<IEnumerable<GEtSourceObjectList>> GetSourceObjectList(GetSourceObjectListInput input);
        Task<List<UpdateSourceObjectGridModel>> UpdateGridSourceObjectList(GEtSourceObjectList inputs, string UserId, int Workspaceid, int Clientid, int ConnectorId);
        Task<IEnumerable<EntityObjectFieldsList>> GetObjectFieldsList(GetObjectFieldListInput input);
        Task<List<EntityObjectFieldsList>> UpdateEntityObjectField(UpdateEntityObjectFieldInputs input, string UserId, string Workspaceid, string Clientid, string ConnectorId, string objectName);
        string SaveExtracts(SaveExtractsInputs inputs);
        Task<IEnumerable<ExtractModel>> GetExtractData(GetExtractDataInputs Inputs);
        Task<List<UpdateConnectorListStep2>> GetConnectorData(string Account_Id, string UserId, string Workspaceid, string Clientid, string ConnectorId);
    }
}
