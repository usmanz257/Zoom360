using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.SourceEdit;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.SourceEdit;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.SourceEdit
{
 public class SourceMappingRulesService: ISourceMappingRulesService

    {
        private readonly IRepositoryBase<DropdownList> _MappingruleListRepository;
        private readonly IRepositoryBase<FieldMappingRuleTemplateModel> _mappingruleTemplateRepository;
        private readonly IRepositoryBase<SaveSourceFieldMappingRuleTemplateModel> _savemappingruleTemplateRepository;
        public SourceMappingRulesService(IRepositoryBase<DropdownList> MappingruleListRepository, IRepositoryBase<FieldMappingRuleTemplateModel> mappingruleTemplateRepository, IRepositoryBase<SaveSourceFieldMappingRuleTemplateModel> savemappingruleTemplateRepository)
        {
            _MappingruleListRepository = MappingruleListRepository;
            _mappingruleTemplateRepository = mappingruleTemplateRepository;
            _savemappingruleTemplateRepository = savemappingruleTemplateRepository;
        }
        public async Task<List<DropdownList>> getMapTempDropDown(string userId, string workspaceId, string clientId, string connectorId)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", userId),
            new SqlParameter("@WORKSPACE_ID", workspaceId),
            new SqlParameter("@CLIENT_ID", clientId),
            new SqlParameter("@CONNECTOR_ID",connectorId),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };
            string spQuery = StoreProcedureConstants.Sp_GetMapTempList + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID," +" @CONNECTOR_ID," +" @V_MESSAGE OUTPUT";
            List<DropdownList> mappingTemplateList = _MappingruleListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return mappingTemplateList;
        }
        public async Task<List<FieldMappingRuleTemplateModel>>GetMappingRule(string userId, string workSpaceId, string clientId, string connectorId, string accountId, string templateName)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", userId),
            new SqlParameter("@WORKSPACE_ID", workSpaceId),
            new SqlParameter("@CLIENT_ID", clientId),
            new SqlParameter("@CONNECTOR_ID",connectorId),
            new SqlParameter("@ACCOUNT_ID",accountId),
            new SqlParameter("@TEMPLATE_NAME",templateName),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };
            string spQuery = StoreProcedureConstants.Sp_GetMapRules + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID," + " @CONNECTOR_ID," +
                " @ACCOUNT_ID, @TEMPLATE_NAME, @V_MESSAGE OUTPUT";
            List<FieldMappingRuleTemplateModel> mappingTemplateRule = _mappingruleTemplateRepository.ExecuteQuery(spQuery, parameters).ToList();
            return mappingTemplateRule;
        }
       public async Task<string> SaveMappingRules(string userId, string workSpaceId,
            string clientId, string connectorId, string templateName, FieldMappingRuleTemplateModel[] fieldMappingRuleTemplateModel)
        {
            string message = "";
            foreach (var item in fieldMappingRuleTemplateModel)
            {
                object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@CLIENT_ID", clientId),
                new SqlParameter("@CONNECTOR_ID", connectorId),
                new SqlParameter("@TEMPLATE_NAME", templateName),
                new SqlParameter("@SOURCE_COLUMN", item.sourceColumn),
                new SqlParameter("@TARGET_COLUMN", item.targetColumn),
                new SqlParameter("@FIELD_TYPE", "Field"),
                new SqlParameter("@KEY_COLUMN", item.keyColumn),
                new SqlParameter("@AGGREGATION_STATUS",string.IsNullOrEmpty(item.aggregationStatus) ? (object)DBNull.Value: item.aggregationStatus),
                new SqlParameter("@VISIBILITY_STATUS", item.visibilityStatus),
                new SqlParameter("@IMAGE", item.image),
                new SqlParameter{ ParameterName = "@V_MESSAGE",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.NVarChar,
                Size = 4000,
                Value = ""
                }
                 };
                string spQuery = StoreProcedureConstants.Sp_SaveMapRules + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, " +
                    " @CONNECTOR_ID, @TEMPLATE_NAME, @SOURCE_COLUMN, @TARGET_COLUMN, @FIELD_TYPE, @KEY_COLUMN, @AGGREGATION_STATUS,"+
                    " @VISIBILITY_STATUS, @IMAGE, @V_MESSAGE OUTPUT";
                string result= _savemappingruleTemplateRepository.ExecuteCommand(spQuery, parameters);
                message = result;
            }
            return message;
        }
    }
}
