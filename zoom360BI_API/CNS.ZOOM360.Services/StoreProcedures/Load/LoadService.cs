using CNS.ZOOM360.Entities.StoreProcedures.Load;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.Load;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.Load
{
   public class LoadService: ILoad
    {
        private readonly IRepositoryBase<DestinationList> _loadservice;
        public LoadService(IRepositoryBase<DestinationList> loadservice)
        {
            _loadservice = loadservice;
             
        }
        public async Task<List<DestinationList>> GetDestinationList(DestinationListModel ListInputmodel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", ListInputmodel .UserId),
            new SqlParameter("@WORKSPACE_ID", ListInputmodel.workspaceId),
            new SqlParameter("@CLIENT_ID", ListInputmodel.clientId),
            new SqlParameter("@ACCOUNT_ID",string.IsNullOrEmpty(ListInputmodel.accountid) ? (object)DBNull.Value: ListInputmodel.accountid ),
            new SqlParameter("@WORKSPACE_NAME", string.IsNullOrEmpty(ListInputmodel.workspacename) ? (object)DBNull.Value: ListInputmodel.workspacename ),
            new SqlParameter("@CONNECTION_NAME", string.IsNullOrEmpty(ListInputmodel.connectionname) ? (object)DBNull.Value : ListInputmodel.connectionname),
            new SqlParameter("@SOURCE_NAME", string.IsNullOrEmpty(ListInputmodel.sourcename) ? (object)DBNull.Value : ListInputmodel.sourcename),
             new SqlParameter("@ACCESS_GRANTED", string.IsNullOrEmpty(ListInputmodel.accessgrante) ? (object)DBNull.Value: ListInputmodel.accessgrante ),
            new SqlParameter("@CREATED_BY", string.IsNullOrEmpty(ListInputmodel.createdby) ? (object)DBNull.Value : ListInputmodel.createdby),
            new SqlParameter("@IS_ACTIVE", string.IsNullOrEmpty(ListInputmodel.isactive) ? (object)DBNull.Value : ListInputmodel.isactive),
             new SqlParameter("@DESTINATION_ENABLED", string.IsNullOrEmpty(ListInputmodel.destinationenable) ? (object)DBNull.Value: ListInputmodel.destinationenable ),
            new SqlParameter("@LAST_ACCESSED", string.IsNullOrEmpty(ListInputmodel.lastaccess) ? (object)DBNull.Value : ListInputmodel.lastaccess),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetDestinationList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @ACCOUNT_ID, @WORKSPACE_NAME,@CONNECTION_NAME, @SOURCE_NAME, @ACCESS_GRANTED, @CREATED_BY ,@IS_ACTIVE ,@DESTINATION_ENABLED ,@LAST_ACCESSED ," +
                " @V_MESSAGE OUTPUT";

            List<DestinationList> destinationlist = _loadservice.ExecuteQuery(spQuery, parameters).ToList();

            return destinationlist;
        }

    }
}
