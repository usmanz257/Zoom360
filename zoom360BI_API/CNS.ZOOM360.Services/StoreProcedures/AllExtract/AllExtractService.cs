using CNS.ZOOM360.Entities.StoreProcedures.AllExtract;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.AllExtract
{
    public class AllExtractService: IAllExtractService
    {
        private readonly IRepositoryBase<AllExtractListModel> _allExtractListRepository;
        private readonly IRepositoryBase<AllIssuesModel> _allIssuesRepository;
        private readonly IRepositoryBase<ConnectionListModel> _ConnectionListRepository;
        private readonly IRepositoryBase<SourceListModel> _SourceListRepository;
        public AllExtractService(IRepositoryBase<AllExtractListModel> allExtractListRepository, 
            IRepositoryBase<AllIssuesModel> allIssuesRepository, 
            IRepositoryBase<ConnectionListModel> ConnectionListRepository,
            IRepositoryBase<SourceListModel> SourceListRepository) {
            _allExtractListRepository = allExtractListRepository;
            _allIssuesRepository = allIssuesRepository;
            _ConnectionListRepository = ConnectionListRepository;
            _SourceListRepository = SourceListRepository;
        }

        public async Task<List<AllExtractListModel>> GetExtractlist(ExtractListInputModel ListInputmodel)
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

            string spQuery = StoreProcedureConstants.Sp_GetAllExtractList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @ACCOUNT_ID, @WORKSPACE_NAME,@CONNECTION_NAME, @SOURCE_NAME," +
                " @ACCESS_GRANTED, @CREATED_BY,@IS_ACTIVE, " +
                "@DESTINATION_ENABLED," +
                " @LAST_ACCESSED, @V_MESSAGE OUTPUT";

            List<AllExtractListModel> extractlist = _allExtractListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return extractlist;
        }

        public async Task<List<AllIssuesModel>> GetIssuetlist(ExtractListInputModel ListInputmodel)
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

            string spQuery = StoreProcedureConstants.Sp_GetAllIssueList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @ACCOUNT_ID, @WORKSPACE_NAME,@CONNECTION_NAME, @SOURCE_NAME," +
                " @ACCESS_GRANTED, @CREATED_BY,@IS_ACTIVE, " +
                "@DESTINATION_ENABLED," +
                " @LAST_ACCESSED, @V_MESSAGE OUTPUT";

            List<AllIssuesModel> issuelist = _allIssuesRepository.ExecuteQuery(spQuery, parameters).ToList();

            return issuelist;

        }
        public async Task<List<AllIssuesModel>> GetEnrichLog(ExtractListInputModel ListInputmodel)
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

            string spQuery = StoreProcedureConstants.Sp_GETENRICHLOG + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @ACCOUNT_ID, @WORKSPACE_NAME,@CONNECTION_NAME, @SOURCE_NAME," +
                " @ACCESS_GRANTED, @CREATED_BY,@IS_ACTIVE, " +
                "@DESTINATION_ENABLED," +
                " @LAST_ACCESSED, @V_MESSAGE OUTPUT";

            List<AllIssuesModel> EnrichLog = _allIssuesRepository.ExecuteQuery(spQuery, parameters).ToList();

            return EnrichLog;

        }
        public async Task<List<ConnectionListModel>> GetConnectionlist(ExtractListInputModel ListInputmodel)
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
            return connectionlist;
        }

        public async Task<List<SourceListModel>> GetSourceList(ExtractListInputModel ListInputmodel)
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

            string spQuery = StoreProcedureConstants.Sp_GetSourceList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
               " @ACCOUNT_ID, @WORKSPACE_NAME,@CONNECTION_NAME, @SOURCE_NAME," +
               " @ACCESS_GRANTED, @CREATED_BY,@IS_ACTIVE, " +
               "@DESTINATION_ENABLED," +
               " @LAST_ACCESSED, @V_MESSAGE OUTPUT";

            List<SourceListModel> sourcelist = _SourceListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return sourcelist;
        }


    }
}
