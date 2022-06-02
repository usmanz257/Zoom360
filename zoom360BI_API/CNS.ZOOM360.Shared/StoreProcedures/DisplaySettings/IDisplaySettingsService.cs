using CNS.ZOOM360.Entities.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings
{
    public interface IDisplaySettingsService
    {
        Task<List<DisplaySettingsModel>> GetDisplaySetting(DisplaySettingsModel displaySettingsModel);
        Task<string> SaveDisplaySetting(DisplaySettingsModel displaySettingsModel);
    }
}
