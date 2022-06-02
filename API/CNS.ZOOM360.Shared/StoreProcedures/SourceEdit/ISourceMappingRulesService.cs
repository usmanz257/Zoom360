using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.SourceEdit;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.SourceEdit
{
   public interface ISourceMappingRulesService
    {
        //Task<List<DropdownList>> getMappedfieldDropDown(string userId, string dropDownName);
        Task<List<DropdownList>> getMapTempDropDown(string userId, string workspaceId, string clientId, string connectorId);
        Task<List<FieldMappingRuleTemplateModel>> GetMappingRule(string userId, string workSpaceId,string clientId, string connectorId, string accountId, string templateName);
         Task<string> SaveMappingRules(string userId, string workSpaceId,
            string clientId, string connectorId, string templateName, FieldMappingRuleTemplateModel[] fieldMappingRuleTemplateModel);
            
    }
}
