using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.SourceEdit;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.SourceEdit;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers.SourceEdit
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.SourceEdit.RouteName)]
    [ApiController]
    public class SourceMappingRulesController : ControllerBase
    {
        private readonly ISourceMappingRulesService _sourceMappingRules;
        private readonly ILoggerManager _logger;
        public SourceMappingRulesController(ISourceMappingRulesService sourceMappingRules, ILoggerManager logger)
        {
            _sourceMappingRules = sourceMappingRules;
            _logger = logger;
        }
        [Route(ServiceConstants.SourceEdit.GetMapTempList)]
        [HttpGet]
        public async Task<IActionResult> getMapTempDropDown(string userId, string workspaceId, string clientId, string connectorId)
        {
            var ExtractData = await _sourceMappingRules.getMapTempDropDown(userId, workspaceId, clientId, connectorId);
            if (ExtractData.Count == 0)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(ExtractData);

        }
        [Route(ServiceConstants.SourceEdit.GetMappingRule)]
        [HttpGet]
        public async Task<IActionResult> GetMappingRule(string userId, string workspaceId, string clientId, string connectorId, string accountId, string templateName)
        {
            var ExtractData = await _sourceMappingRules.GetMappingRule(userId, workspaceId, clientId, connectorId,accountId,templateName);
            if (ExtractData.Count == 0)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }

            return Ok(ExtractData);

        }
        [Route(ServiceConstants.SourceEdit.SaveMappingRule)]
        [HttpPost]
        public async Task<IActionResult> SaveMappingRule(string userId, string workSpaceId,
            string clientId, string connectorId, string templateName, FieldMappingRuleTemplateModel[] fieldMappingRuleTemplateModel)
        {
            var ExtractData = _sourceMappingRules.SaveMappingRules(userId,workSpaceId, clientId, connectorId, templateName,fieldMappingRuleTemplateModel);
            if (ExtractData.ToString() == string.Empty)
            {
                _logger.LogInfo($"Recent Connection List data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(ExtractData.Result);
        }
    }
}
