using CNS.ZOOM360.Entities.StoreProcedures.ChangeLog;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.ChangeLog;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.ChangeLog
{
    public class ChangeLogService: IChangeLogService
    {
        private readonly IRepositoryBase<ChangeLogListModel> _changeLogListRepository;
        public ChangeLogService(IRepositoryBase<ChangeLogListModel> changeLogListRepository) {
            _changeLogListRepository = changeLogListRepository;
        }

        public async Task<List<ChangeLogListModel>> getChangeLogList(string userId, string workSpaceId, string client_id)
        {

            object[] parameters = {
            new SqlParameter("@USER_ID", userId),
            new SqlParameter("@WORKSPACE_ID", workSpaceId),
            new SqlParameter("@CLIENT_ID", client_id),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };

            string spQuery = StoreProcedureConstants.Sp_ChangeLogList + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID,   @V_MESSAGE OUTPUT";

           List<ChangeLogListModel> result = _changeLogListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return result;

        }
    }
}
