using CNS.ZOOM360.Entities.StoreProcedures.DataGovernance;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.DataGovernance
{
    public interface IDataGovernanceService
    {
        Task<List<DataGovernanceModel>> GetDataGovernance(string userId, string workSpaceId, string clientId);
        Task<string> SaveDataGovernance(DataGovernanceModel dataGovernanceModel);
    }
}
