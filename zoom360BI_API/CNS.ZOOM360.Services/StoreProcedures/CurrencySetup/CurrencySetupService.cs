using CNS.ZOOM360.Entities.StoreProcedures.CurrencySetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.CurrencySetup;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.CurrencySetup
{
    public class CurrencySetupService: ICurrencySetupService
    {
        private readonly IRepositoryBase<CurrencySetupModel> _CurrencySetupRepository;
        public CurrencySetupService(IRepositoryBase<CurrencySetupModel> CurrencySetupRepository) {
            _CurrencySetupRepository = CurrencySetupRepository;
        }

        public async Task<string> SaveCurrencySetup(CurrencySetupModel currencySetupModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", currencySetupModel.userId),
            new SqlParameter("@WORKSPACE_ID", currencySetupModel.workSpaceId),
            new SqlParameter("@CLIENT_ID", currencySetupModel.CLIENT_ID),
            new SqlParameter("@CURRENCY_TYPE", currencySetupModel.currencyType),
            new SqlParameter("@CURRENCY_TYPE_SIGN", currencySetupModel.currenceyTypeSign),
            new SqlParameter("@CURRENCY_IMAGE", currencySetupModel.currencyImage),
            new SqlParameter("@CURRENCY_COLLECTED_DATA", currencySetupModel.currencyCollectedData),
            new SqlParameter("@CURRENCY_PREPARING_DATA", currencySetupModel.currencyPrepareData),
            new SqlParameter("@CURRENCY_PRESENTING_DATA", currencySetupModel.currencyPresentingData),
            new SqlParameter("@CURRENCY_CONVERSION", currencySetupModel.currencyConversion),
            new SqlParameter("@EXCHANGE_RATE_AND_DATA_CONVERSION", currencySetupModel.exchangeRateAndDataConversion),
            new SqlParameter("@CURRENCY_REPORT_HEADERS", currencySetupModel.currencyReportHeaders),
            new SqlParameter("@CURRENCY_VISUALIZATION", currencySetupModel.currencyVisulization),
            new SqlParameter("@CURRENCY_VALUE", currencySetupModel.currencyValue),
            new SqlParameter("@CURRENCY_APPLY_AND_ENFORCE", string.IsNullOrEmpty(currencySetupModel.currencyApplyAndEnforce) ? (object)DBNull.Value:currencySetupModel.currencyApplyAndEnforce),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(currencySetupModel.ClientDate) ? (object)DBNull.Value: currencySetupModel.ClientDate),
            new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(currencySetupModel.ClientTime) ? (object)DBNull.Value: currencySetupModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(currencySetupModel.ClientTimeZone) ? (object)DBNull.Value: currencySetupModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(currencySetupModel.Remark1) ? (object)DBNull.Value: currencySetupModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(currencySetupModel.Remark2) ? (object)DBNull.Value: currencySetupModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(currencySetupModel.Remark3) ? (object)DBNull.Value: currencySetupModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(currencySetupModel.Remark4) ? (object)DBNull.Value: currencySetupModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(currencySetupModel.Flex1) ? (object)DBNull.Value: currencySetupModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(currencySetupModel.Flex2) ? (object)DBNull.Value: currencySetupModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(currencySetupModel.Flex3) ? (object)DBNull.Value: currencySetupModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(currencySetupModel.Flex4) ? (object)DBNull.Value: currencySetupModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(currencySetupModel.Flex5) ? (object)DBNull.Value: currencySetupModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(currencySetupModel.Flex6) ? (object)DBNull.Value: currencySetupModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(currencySetupModel.Flex7) ? (object)DBNull.Value: currencySetupModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(currencySetupModel.Flex8) ? (object)DBNull.Value: currencySetupModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(currencySetupModel.Flex9) ? (object)DBNull.Value: currencySetupModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(currencySetupModel.Flex10) ? (object)DBNull.Value: currencySetupModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(currencySetupModel.Flex11) ? (object)DBNull.Value: currencySetupModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(currencySetupModel.Flex12) ? (object)DBNull.Value: currencySetupModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(currencySetupModel.Flex13) ? (object)DBNull.Value: currencySetupModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(currencySetupModel.Flex14) ? (object)DBNull.Value: currencySetupModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(currencySetupModel.Flex15) ? (object)DBNull.Value: currencySetupModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(currencySetupModel.Flex16) ? (object)DBNull.Value: currencySetupModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }

        };

            string spQuery = StoreProcedureConstants.Sp_SaveCurrencySetup + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @CURRENCY_TYPE, @CURRENCY_TYPE_SIGN,@CURRENCY_IMAGE, @CURRENCY_COLLECTED_DATA," +
                " @CURRENCY_PREPARING_DATA, @CURRENCY_PRESENTING_DATA,@CURRENCY_CONVERSION, " +
                "@EXCHANGE_RATE_AND_DATA_CONVERSION," +
                " @CURRENCY_REPORT_HEADERS, @CURRENCY_VISUALIZATION,@CURRENCY_VALUE, @CURRENCY_APPLY_AND_ENFORCE," +
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                "  @V_MESSAGE OUTPUT";

            return _CurrencySetupRepository.ExecuteCommand(spQuery, parameters);
            

        }
       
       public async Task<List<CurrencySetupModel>> GetCurrencySetup(string userId, string workSpaceId, string CLIENT_ID, string currenceyTypeSign)
        {

                object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", CLIENT_ID),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@CURRENCY_TYPE_SIGN",DBNull.Value),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

                string spQuery = StoreProcedureConstants.Sp_GetCurrencySetupList + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @CURRENCY_TYPE_SIGN, @V_MESSAGE OUTPUT";
                List<CurrencySetupModel> currencyList = _CurrencySetupRepository.ExecuteQuery(spQuery, parameters).ToList();
                return currencyList;
            }
        }
    }

