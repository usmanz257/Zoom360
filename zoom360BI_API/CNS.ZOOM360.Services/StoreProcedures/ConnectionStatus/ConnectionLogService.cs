using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.AllExtract;
using CNS.ZOOM360.Entities.StoreProcedures.ConnectionStatus;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto;
using CNS.ZOOM360.Shared.StoreProcedures.ConnectionStatus;
using Microsoft.Data.SqlClient;

namespace CNS.ZOOM360.Services.StoreProcedures.ConnectionStatus
{
    public class ConnectionLogService: IConnectionLogService
    {
        private readonly IRepositoryBase<ConnectionListModel> _ConnectionListRepository;
        private readonly IRepositoryBase<ConnectionLogModel> _ConnectionLogRepository;
        public ConnectionLogService(IRepositoryBase<ConnectionListModel> ConnectionListRepository,
          IRepositoryBase<ConnectionLogModel> ConnectionLogRepository)
        {
            _ConnectionListRepository = ConnectionListRepository;
            _ConnectionLogRepository = ConnectionLogRepository;
        }
        public async Task<List<ConnectionLogModel>> GetAllConnections(ExtractListInputModel ListInputmodel)
        {

            object[] parameters = {
            new SqlParameter("@USER_ID", ListInputmodel.UserId),
            new SqlParameter("@WORKSPACE_ID", ListInputmodel.WorkSpaceId),
            new SqlParameter("@CLIENT_ID", ListInputmodel.Client_Id),
            new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.AccountId ),
            new SqlParameter("@WORKSPACE_NAME", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.WorkspaceName ),
            new SqlParameter("@CONNECTION_NAME", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value : ListInputmodel.ConnectionName),
            new SqlParameter("@SOURCE_NAME", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value : ListInputmodel.SourceName),
            new SqlParameter("@ACCESS_GRANTED", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.AccessGranted ),
            new SqlParameter("@CREATED_BY", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.CreatedBy),
            new SqlParameter("@IS_ACTIVE", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.IsActive ),
            new SqlParameter("@DESTINATION_ENABLED", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.DestinationEnabled ),
            new SqlParameter("@LAST_ACCESSED", string.IsNullOrEmpty(ListInputmodel.AccountId) ? (object)DBNull.Value: ListInputmodel.LastAccessed ),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };

            if (string.IsNullOrEmpty(ListInputmodel.AccountId))
            {
                parameters.Append(new SqlParameter("@ACCOUNT_ID", DBNull.Value));
            }
            else
            {
                parameters.Append(new SqlParameter("@ACCOUNT_ID", ListInputmodel.AccountId));
            }

            string spQuery = StoreProcedureConstants.Sp_GetConnectionList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
               " @ACCOUNT_ID, @WORKSPACE_NAME,@CONNECTION_NAME, @SOURCE_NAME," +
               " @ACCESS_GRANTED, @CREATED_BY,@IS_ACTIVE, " +
               "@DESTINATION_ENABLED," +
               " @LAST_ACCESSED, @V_MESSAGE OUTPUT";

            List<ConnectionListModel> connectionlist = _ConnectionListRepository.ExecuteQuery(spQuery, parameters).ToList();
            List<int> sourceAccountidList = new List<int>();
            foreach (var item in connectionlist)
            {
                int sourceId;
                sourceId = item.SourceConnectorId;
                sourceAccountidList.Add(sourceId);
            }
            var list = sourceAccountidList.Distinct().ToList();
            List<ConnectionLogModel> connectionlogList = new List<ConnectionLogModel>();
            connectionlogList = await GetConnectorTypeDash(ListInputmodel.UserId, ListInputmodel.WorkSpaceId, ListInputmodel.Client_Id, list);
            return connectionlogList;
        }
       public async Task<List<ConnectionLogModel>> GetConnectorTypeDash(string userId, string workspace, string clientId, List<int> sourceConnectorId)
        {
            List <ConnectionLogModel> connectionlogList=new List<ConnectionLogModel>();
            foreach (var item in sourceConnectorId)
            {
                object[] parameters = {
            new SqlParameter("@USER_ID", userId),
            new SqlParameter("@WORKSPACE_ID", workspace),
            new SqlParameter("@CLIENT_ID",clientId),
            new SqlParameter("@SOURCE_CONNECTOR_ID",item),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
                string spQuery = StoreProcedureConstants.Sp_GETEXTRACTSUMMARY + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
               " @SOURCE_CONNECTOR_ID," +
               " @V_MESSAGE OUTPUT";
                List<ConnectionLogModel> connectionlog = _ConnectionLogRepository.ExecuteQuery(spQuery, parameters).ToList();
                foreach(var item2 in connectionlog)
                {
                    connectionlogList.Add(item2);
                }
            }
            return connectionlogList;
        }

    }
}
