using CNS.ZOOM360.Shared.StoreProcedures.Workspace;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Repositories
{
    public interface IRepositoryManager
    {
        IWorkspaceSetupService workspaceSetupService { get; }
    }
}
