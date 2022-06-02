using CNS.ZOOM360.Entities.StoreProcedures.CalenderSetup;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.CalenderSetup
{
    public interface ICalenderSetupService
    {
        Task<string> SaveCalenderSetup(CalenderSetupModel calenderSetupModel);
        Task<List<CalenderSetupModel>> GetCalenderSetup(string userId, string workspaceId, string ClientId);
    }
}
