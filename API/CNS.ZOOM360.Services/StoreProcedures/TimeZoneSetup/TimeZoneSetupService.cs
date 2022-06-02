using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.TimeZoneSetup;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.TimeZoneSetup;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.TimeZoneSetup
{
    
    public class TimeZoneSetupService: ITimeZoneSetupService
    {
        private readonly IRepositoryBase<TimeZoneSetupModel> _timeZOneSetupRepository;

        public TimeZoneSetupService(IRepositoryBase<TimeZoneSetupModel> timeZOneSetupRepository)
        {
            _timeZOneSetupRepository = timeZOneSetupRepository;


        }


        public async Task<String> SaveTimeZoneSetup(TimezoneTestModel TimeZoneModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", TimeZoneModel.userId),
            new SqlParameter("@WORKSPACE_ID", TimeZoneModel.workSpaceId),
            new SqlParameter("@CLIENT_ID", TimeZoneModel.CLIENT_ID),
            new SqlParameter("@DATE_FORMAT_TYPE", TimeZoneModel.dataFormatType),
            new SqlParameter("@DATE_FORMAT", TimeZoneModel.dateFormat),
            new SqlParameter("@CLOCK_IMAGE", TimeZoneModel.clockImage),
            new SqlParameter("@DATE_COLLECTED_DATA", TimeZoneModel.dateCollectedData),
            new SqlParameter("@DATE_PREPARING_DATA", TimeZoneModel.datePreparingData),
            new SqlParameter("@DATE_PRESENTING_DATA", TimeZoneModel.datePresentingData),
            new SqlParameter("@DATE_CONVERSION", TimeZoneModel.dateConversion),
            new SqlParameter("@DATE_CONVERSION_VALUE", TimeZoneModel.dateConversionValue),
            new SqlParameter("@TIME_ZONE", TimeZoneModel.timeZone),
            new SqlParameter("@TIME_ZONE_TYPE", TimeZoneModel.timeZoneType),
            new SqlParameter("@DATE_FORMAT_REPORTS", TimeZoneModel.dateFormatReports),
            new SqlParameter("@REPORTS_DATE", TimeZoneModel.reportsDate),
            new SqlParameter("@DATE_FORMAT_VISUALIZATION", TimeZoneModel.dateFormatVisulization),
            new SqlParameter("@VISUALIZATION_DATE", TimeZoneModel.visulizationDate),
            new SqlParameter("@TIME_FORMAT_REPORTS", TimeZoneModel.timeFormatReports),
            new SqlParameter("@REPORTS_TIME", TimeZoneModel.reportTime),
            new SqlParameter("@TIME_FORMAT_VISUALIZATION", TimeZoneModel.timeFormatVisualization),
            new SqlParameter("@VISUALIZATION_TIME", TimeZoneModel.visualizationTime),
            new SqlParameter("@APPLY_AND_ENFORCE_DATETIME", TimeZoneModel.applyAndEnforceDatetime),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(TimeZoneModel.ClientDate) ? (object)DBNull.Value: TimeZoneModel.ClientDate),
            new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(TimeZoneModel.ClientTime) ? (object)DBNull.Value: TimeZoneModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(TimeZoneModel.ClientTimeZone) ? (object)DBNull.Value: TimeZoneModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(TimeZoneModel.Remark1) ? (object)DBNull.Value: TimeZoneModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(TimeZoneModel.Remark2) ? (object)DBNull.Value: TimeZoneModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(TimeZoneModel.Remark3) ? (object)DBNull.Value: TimeZoneModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(TimeZoneModel.Remark4) ? (object)DBNull.Value: TimeZoneModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(TimeZoneModel.Flex1) ? (object)DBNull.Value: TimeZoneModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(TimeZoneModel.Flex2) ? (object)DBNull.Value: TimeZoneModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(TimeZoneModel.Flex3) ? (object)DBNull.Value: TimeZoneModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(TimeZoneModel.Flex4) ? (object)DBNull.Value: TimeZoneModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(TimeZoneModel.Flex5) ? (object)DBNull.Value: TimeZoneModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(TimeZoneModel.Flex6) ? (object)DBNull.Value: TimeZoneModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(TimeZoneModel.Flex7) ? (object)DBNull.Value: TimeZoneModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(TimeZoneModel.Flex8) ? (object)DBNull.Value: TimeZoneModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(TimeZoneModel.Flex9) ? (object)DBNull.Value: TimeZoneModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(TimeZoneModel.Flex10) ? (object)DBNull.Value: TimeZoneModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(TimeZoneModel.Flex11) ? (object)DBNull.Value: TimeZoneModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(TimeZoneModel.Flex12) ? (object)DBNull.Value: TimeZoneModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(TimeZoneModel.Flex13) ? (object)DBNull.Value: TimeZoneModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(TimeZoneModel.Flex14) ? (object)DBNull.Value: TimeZoneModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(TimeZoneModel.Flex15) ? (object)DBNull.Value: TimeZoneModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(TimeZoneModel.Flex16) ? (object)DBNull.Value: TimeZoneModel.Flex16),

            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
        };


            string spQuery = StoreProcedureConstants.Sp_SaveTimeZoneSetup + " @USER_ID,@WORKSPACE_ID," +
                 " @CLIENT_ID, @DATE_FORMAT_TYPE, @DATE_FORMAT,@CLOCK_IMAGE, @DATE_COLLECTED_DATA," +
                 " @DATE_PREPARING_DATA ,@DATE_PRESENTING_DATA, @DATE_CONVERSION, @DATE_CONVERSION_VALUE," +
                 " @TIME_ZONE, @TIME_ZONE_TYPE, @DATE_FORMAT_REPORTS, @REPORTS_DATE, @DATE_FORMAT_VISUALIZATION," +
                 " @VISUALIZATION_DATE, @TIME_FORMAT_REPORTS, @REPORTS_TIME, @TIME_FORMAT_VISUALIZATION," +
                 " @VISUALIZATION_TIME, @APPLY_AND_ENFORCE_DATETIME,"+
                 " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                 " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                 " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                 " @V_MESSAGE OUTPUT";
            return _timeZOneSetupRepository.ExecuteCommand(spQuery, parameters);

        }

        public async Task<List<TimeZoneSetupModel>> GetTimeZoneSetup(string userId, string workSpaceId, string CLIENT_ID)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", CLIENT_ID),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GETTIMEZONESETUPLIST + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<TimeZoneSetupModel> timeZoneList = _timeZOneSetupRepository.ExecuteQuery(spQuery, parameters).ToList();
            return timeZoneList;
        }
    }
}
