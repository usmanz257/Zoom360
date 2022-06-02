using CNS.ZOOM360.Entities.StoreProcedures.NumeralSetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.NumeralSetup;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.NumeralSetup
{
    public class NumeralSetupService: INumeralSetupService
    {
        private readonly IRepositoryBase<NumeralSetupModel> _numeralSetupRepository;
        public NumeralSetupService(IRepositoryBase<NumeralSetupModel> numeralSetupRepository) {
            _numeralSetupRepository = numeralSetupRepository;
        }

        public async Task<List<NumeralSetupModel>> GetNumeralSetup(string userId, string workSpaceId, string clientId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", clientId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GetNumeralSetup + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<NumeralSetupModel> getNumeralSetupList = _numeralSetupRepository.ExecuteQuery(spQuery, parameters).ToList();
            return getNumeralSetupList;
        }

        public async Task<string> SaveNumeralSetup(NumeralSetupModel numeralsSetupModel)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", numeralsSetupModel.userId),
            new SqlParameter("@WORKSPACE_ID", numeralsSetupModel.workSpaceId),
            new SqlParameter("@CLIENT_ID", numeralsSetupModel.clientId),
            new SqlParameter("@NUMBERING_SYSTEM_FORMAT", numeralsSetupModel.numberingSystemFormat),
            new SqlParameter("@NUMBER_SIGN_TYPE", numeralsSetupModel.numberSignType),
            new SqlParameter("@SIGN_FORMAT", numeralsSetupModel.signFormat),
            new SqlParameter("@POSITIVE_NUMBER_COLOR_CODE", numeralsSetupModel.positiveNumbeColorCode),
            new SqlParameter("@NEGATIVE_NUMBER_COLOR_CODE", numeralsSetupModel.negitiveNumberColorCode),
            new SqlParameter("@NUMBER_CONVERSION", numeralsSetupModel.numberConversion),
            new SqlParameter("@NUMBER_VALUE_CONVERSION", numeralsSetupModel.numberValueConversion),
            new SqlParameter("@NUMBER_VALUE", numeralsSetupModel.numberValue),
            new SqlParameter("@SELECTIVE_DECIMAL_PLACES", numeralsSetupModel.selectiveDecimalPlaces),
            new SqlParameter("@FULL_DECIMAL_PLACES", numeralsSetupModel.fullDecimalPlaces),
            new SqlParameter("@ROUND_OFF_NUMBER", numeralsSetupModel.roundOffNumbers),
            new SqlParameter("@SELECTIVE_ROUND_OFF_PLACES", numeralsSetupModel.selectiveRoundOffPlace),
            new SqlParameter("@NUMBER_APPLY_AND_ENFORCE", numeralsSetupModel.numberApplyAndEnforce),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(numeralsSetupModel.ClientDate) ? (object)DBNull.Value: numeralsSetupModel.ClientDate),
            new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(numeralsSetupModel.ClientTime) ? (object)DBNull.Value: numeralsSetupModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(numeralsSetupModel.ClientTimeZone) ? (object)DBNull.Value: numeralsSetupModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(numeralsSetupModel.Remark1) ? (object)DBNull.Value: numeralsSetupModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(numeralsSetupModel.Remark2) ? (object)DBNull.Value: numeralsSetupModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(numeralsSetupModel.Remark3) ? (object)DBNull.Value: numeralsSetupModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(numeralsSetupModel.Remark4) ? (object)DBNull.Value: numeralsSetupModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(numeralsSetupModel.Flex1) ? (object)DBNull.Value: numeralsSetupModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(numeralsSetupModel.Flex2) ? (object)DBNull.Value: numeralsSetupModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(numeralsSetupModel.Flex3) ? (object)DBNull.Value: numeralsSetupModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(numeralsSetupModel.Flex4) ? (object)DBNull.Value: numeralsSetupModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(numeralsSetupModel.Flex5) ? (object)DBNull.Value: numeralsSetupModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(numeralsSetupModel.Flex6) ? (object)DBNull.Value: numeralsSetupModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(numeralsSetupModel.Flex7) ? (object)DBNull.Value: numeralsSetupModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(numeralsSetupModel.Flex8) ? (object)DBNull.Value: numeralsSetupModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(numeralsSetupModel.Flex9) ? (object)DBNull.Value: numeralsSetupModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(numeralsSetupModel.Flex10) ? (object)DBNull.Value: numeralsSetupModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(numeralsSetupModel.Flex11) ? (object)DBNull.Value: numeralsSetupModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(numeralsSetupModel.Flex12) ? (object)DBNull.Value: numeralsSetupModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(numeralsSetupModel.Flex13) ? (object)DBNull.Value: numeralsSetupModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(numeralsSetupModel.Flex14) ? (object)DBNull.Value: numeralsSetupModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(numeralsSetupModel.Flex15) ? (object)DBNull.Value: numeralsSetupModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(numeralsSetupModel.Flex16) ? (object)DBNull.Value: numeralsSetupModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };

            string spQuery = StoreProcedureConstants.Sp_SaveNumeralSetup + " @USER_ID,@WORKSPACE_ID," +
                " @CLIENT_ID, @NUMBERING_SYSTEM_FORMAT, @NUMBER_SIGN_TYPE,@SIGN_FORMAT," +
                " @POSITIVE_NUMBER_COLOR_CODE, @NEGATIVE_NUMBER_COLOR_CODE, @NUMBER_CONVERSION," +
                " @NUMBER_VALUE_CONVERSION, @NUMBER_VALUE, @SELECTIVE_DECIMAL_PLACES," +
                " @FULL_DECIMAL_PLACES, @ROUND_OFF_NUMBER, @SELECTIVE_ROUND_OFF_PLACES," +
                " @NUMBER_APPLY_AND_ENFORCE,"+
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                " @V_MESSAGE OUTPUT";
            return _numeralSetupRepository.ExecuteCommand(spQuery, parameters);

        }
    }
}
