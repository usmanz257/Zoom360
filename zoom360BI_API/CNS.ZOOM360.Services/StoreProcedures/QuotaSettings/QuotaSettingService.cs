using CNS.ZOOM360.Entities.StoreProcedures.QuotaSettings;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.QuotaSettings;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.QuotaSettings
{
    public class QuotaSettingService: IQuotaSettingService
    {
        private readonly IRepositoryBase<QuotaSettingsModel> _quotaSettingRepository;
        public QuotaSettingService(IRepositoryBase<QuotaSettingsModel> quotaSettingRepository) {
            _quotaSettingRepository = quotaSettingRepository;
        }

        public async Task<List<QuotaSettingsModel>> GetQuotaSetting(string userId, string workSpaceId, string clientId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", clientId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GETQUOTASETTINGSLIST + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<QuotaSettingsModel> getQuotaSettingList = _quotaSettingRepository.ExecuteQuery(spQuery, parameters).ToList();
            return getQuotaSettingList;
        }
        public async Task<string> SaveQuotaSetting(QuotaSettingsModel quotaSettingsModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", quotaSettingsModel.UserId),
            new SqlParameter("@CLIENT_ID", quotaSettingsModel.clientId),
            new SqlParameter("@WORKSPACE_ID", quotaSettingsModel.WorkSpaceId),
            new SqlParameter("@QUOTA_LIMIT", quotaSettingsModel.QuotaLimit),
            new SqlParameter("@QUOTA_TYPE", quotaSettingsModel.QuotaType),
            new SqlParameter("@QUOTA_USAGE_CYCLE", quotaSettingsModel.QuotaUsageCycle),
            new SqlParameter("@QUOTA_START_DATE", quotaSettingsModel.QuotaStartDate),
            new SqlParameter("@QUOTA_END_DATE", quotaSettingsModel.QuotaEndDate),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(quotaSettingsModel.ClientDate) ? (object)DBNull.Value: quotaSettingsModel.ClientDate),
            new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(quotaSettingsModel.ClientTime) ? (object)DBNull.Value: quotaSettingsModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(quotaSettingsModel.ClientTimeZone) ? (object)DBNull.Value: quotaSettingsModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(quotaSettingsModel.Remark1) ? (object)DBNull.Value: quotaSettingsModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(quotaSettingsModel.Remark2) ? (object)DBNull.Value: quotaSettingsModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(quotaSettingsModel.Remark3) ? (object)DBNull.Value: quotaSettingsModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(quotaSettingsModel.Remark4) ? (object)DBNull.Value: quotaSettingsModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(quotaSettingsModel.Flex1) ? (object)DBNull.Value: quotaSettingsModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(quotaSettingsModel.Flex2) ? (object)DBNull.Value: quotaSettingsModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(quotaSettingsModel.Flex3) ? (object)DBNull.Value: quotaSettingsModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(quotaSettingsModel.Flex4) ? (object)DBNull.Value: quotaSettingsModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(quotaSettingsModel.Flex5) ? (object)DBNull.Value: quotaSettingsModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(quotaSettingsModel.Flex6) ? (object)DBNull.Value: quotaSettingsModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(quotaSettingsModel.Flex7) ? (object)DBNull.Value: quotaSettingsModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(quotaSettingsModel.Flex8) ? (object)DBNull.Value: quotaSettingsModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(quotaSettingsModel.Flex9) ? (object)DBNull.Value: quotaSettingsModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(quotaSettingsModel.Flex10) ? (object)DBNull.Value: quotaSettingsModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(quotaSettingsModel.Flex11) ? (object)DBNull.Value: quotaSettingsModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(quotaSettingsModel.Flex12) ? (object)DBNull.Value: quotaSettingsModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(quotaSettingsModel.Flex13) ? (object)DBNull.Value: quotaSettingsModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(quotaSettingsModel.Flex14) ? (object)DBNull.Value: quotaSettingsModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(quotaSettingsModel.Flex15) ? (object)DBNull.Value: quotaSettingsModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(quotaSettingsModel.Flex16) ? (object)DBNull.Value: quotaSettingsModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };

            string spQuery = StoreProcedureConstants.Sp_SaveQuotaSetting + " @USER_ID,@CLIENT_ID," +
                " @WORKSPACE_ID, @QUOTA_LIMIT, @QUOTA_TYPE,@QUOTA_USAGE_CYCLE," +
                " @QUOTA_START_DATE, @QUOTA_END_DATE," +
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                " @V_MESSAGE OUTPUT";
            return _quotaSettingRepository.ExecuteCommand(spQuery, parameters);


        }
    }
}
