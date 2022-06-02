using CNS.ZOOM360.Entities.StoreProcedures;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures
{
    public interface IChildWorkspaces
    {
        Task<List<ChildWorkspacesModel>> GetChildWorkspace(string userId, string workSpaceId, string CLIENT_ID);
        Task<String> SaveChildWorkspace(ChildWorkspacesModel childWorkspaces);
    }
}
