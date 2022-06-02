using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.StoreProcedures.Workspace;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using static CNS.ZOOM360.Shared.Const.ServiceConstants;
using WorkspaceSetup = CNS.ZOOM360.Entities.StoreProcedures.Workspace.WorkspaceSetup;

namespace CNS.ZOOM360.Shared.StoreProcedures.Workspace
{
    public interface IWorkspaceSetupService 
    {
        Task<WorkspaceSetup> GetWorkspaceSetupSettings(string userId, string client_Id, string workspaceId);
        Task<List<WorkspaceSetupList>> GetWorkspaceSetupList(string userId, string workSpaceId, string CLIENT_ID, string workSpaceName, string parentWorkSpace);
        
        Task<string> SaveWorkspaceSetup(WorkspaceSetup modal);
    }
}
