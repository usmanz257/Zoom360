using CNS.ZOOM360.Entities.StoreProcedures.NewFolder;
using CNS.ZOOM360.Entities.StoreProcedures.UserRights;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.UserRights
{
    public interface IUserRightsServices
    {
        Task<string> MainMenuUserRights(InputUserRightsModel inputmodel);
     }
}
