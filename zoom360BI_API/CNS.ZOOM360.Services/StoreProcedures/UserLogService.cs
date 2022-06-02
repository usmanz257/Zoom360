using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures
{
   public class UserLogService : IUserLogServices
    {
        private readonly IRepositoryBase<UserLogModel> _UserLogSetupRepository;

        public UserLogService(IRepositoryBase<UserLogModel> userLogSetupRepository)
        {
            _UserLogSetupRepository = userLogSetupRepository;


        }
        public async Task<List<UserLogModel>> GetUserLogSetup(string userId, string workSpaceId, string ClientId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@CLIENT_ID", ClientId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GETUSERWORKSPACELIST + " @USER_ID,@WORKSPACE_ID,@CLIENT_ID, @V_MESSAGE OUTPUT";
            List<UserLogModel> userLOgList = _UserLogSetupRepository.ExecuteQuery(spQuery, parameters).ToList();
            return userLOgList;
        }
    }
}
