using CNS.ZOOM360.Entities.StoreProcedures.QuotaSettings;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.QuotaSettings
{
    public interface IQuotaSettingService
    {
        Task<List<QuotaSettingsModel>> GetQuotaSetting(string userId, string workSpaceId, string clientId);
        Task<string> SaveQuotaSetting(QuotaSettingsModel quotaSettingsModel);
    }
}
