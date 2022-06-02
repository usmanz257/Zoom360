using CNS.ZOOM360.Services.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Services.StoreProcedures.Workspace;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Services
{
    public class RepositoryManager : IRepositoryManager
    {
        private IWorkspaceSetupService _WorkspaceSetupService;
        private ICalenderSetupService _CalenderSetupService;
        public RepositoryManager()
        {

        }



        //public IWorkspaceSetupService Company
        //{
        //    get
        //    {
                
        //            _WorkspaceSetupService = new WorkspaceSetupService();

        //        return _WorkspaceSetupService;
        //    }
        //}
        public IWorkspaceSetupService workspaceSetupService => throw new NotImplementedException();
        //public IWorkspaceSpService workspaceSpService
        //{
        //    get {

        //        if (_WorkspaceService == null)
        //            _WorkspaceService = new WorkspaceSpService(_WorkspaceService);

        //        return _WorkspaceService;
        //    }

        //}


    }
}
