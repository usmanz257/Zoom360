using CNS.ZOOM360.Entities.StoreProcedures.NewFolder;
using CNS.ZOOM360.Entities.StoreProcedures.UserRights;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.UserRights;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.UserRights
{
    public class UserRightsService : IUserRightsServices
    {
        private readonly IRepositoryBase<MainmenuRightsModel> _userRightsRepository;
        public UserRightsService(IRepositoryBase<MainmenuRightsModel> userRightsRepository)
        {
            _userRightsRepository = userRightsRepository;

        }


        public async Task<string> MainMenuUserRights(InputUserRightsModel inputmodel)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", inputmodel.UserId),
                new SqlParameter("@SUB_USER_ID", string.IsNullOrEmpty(inputmodel.subUserId) ? (object)DBNull.Value : inputmodel.subUserId),
                new SqlParameter("@WORKSPACE_ID", inputmodel.WorkspaceId),
                new SqlParameter("@CLIENT_ID", inputmodel.ClientId),
                new SqlParameter("@URL", inputmodel.url),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GetUserRihgts + " @USER_ID,@SUB_USER_ID,@WORKSPACE_ID,@CLIENT_ID, @URL ,@V_MESSAGE OUTPUT";
            return _userRightsRepository.ExecuteCommand(spQuery, parameters);

        }
    }
}
