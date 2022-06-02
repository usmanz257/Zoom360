using CNS.ZOOM360.Entities.StoreProcedures.NumeralSetup;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.NumeralSetup
{
    public interface INumeralSetupService
    {
        Task<string> SaveNumeralSetup(NumeralSetupModel numeralsSetupModel);
        Task<List<NumeralSetupModel>> GetNumeralSetup(string userId, string workSpaceId, string clientId);
    }
}
