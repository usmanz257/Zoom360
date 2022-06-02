using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.DisplaySettings.RouteName)]
    [ApiController]
    public class DisplaySettingsController : ControllerBase
    {
        private readonly IDisplaySettingsService _displaySettingsService;
        private readonly ILoggerManager _logger;
        public DisplaySettingsController(IDisplaySettingsService displaySettingsService, ILoggerManager logger) {
            _displaySettingsService = displaySettingsService;
            _logger = logger;
        }
        [Route(ServiceConstants.DisplaySettings.GetDisplaySetting)]
        [HttpGet]
        public async Task<IActionResult> getDisplaySetting([FromQuery] DisplaySettingsModel Input)
        {
            var DisplayData = _displaySettingsService.GetDisplaySetting(Input);
            if (DisplayData.Result.Count == 0)
            {
                _logger.LogInfo($"Display Setting List data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(DisplayData.Result);
        }

        [Route(ServiceConstants.DisplaySettings.SaveDisplaySetting)]
        [HttpPost]
        public async Task<IActionResult> SaveDisplaySetting(DisplaySettingsModel model) {
            var displaySetting = _displaySettingsService.SaveDisplaySetting( model);
            if (displaySetting.Result == null)
            {
                _logger.LogError("");
                return NotFound(displaySetting);
            }

            return Ok(displaySetting);

        }

    }
}