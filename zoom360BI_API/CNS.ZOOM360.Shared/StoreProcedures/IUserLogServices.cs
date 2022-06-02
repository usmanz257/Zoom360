using CNS.ZOOM360.Entities.StoreProcedures;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures
{
   public interface IUserLogServices
    {
        Task<List<UserLogModel>> GetUserLogSetup(string userId, string workSpaceId, string ClientId);
    }
}
