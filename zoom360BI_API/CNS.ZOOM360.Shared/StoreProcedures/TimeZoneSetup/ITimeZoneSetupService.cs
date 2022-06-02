using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.TimeZoneSetup;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.TimeZoneSetup
{
    public interface ITimeZoneSetupService
    {
        Task<String> SaveTimeZoneSetup(TimezoneTestModel TimeZoneModel);
        Task<List<TimeZoneSetupModel>> GetTimeZoneSetup(string userId, string workSpaceId, string CLIENT_ID);
    }
}
