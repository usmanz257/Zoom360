using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.CalenderSetup;
using CNS.ZOOM360.Entities.StoreProcedures.CalenderSetup;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Const;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Linq;

namespace CNS.ZOOM360.Services.StoreProcedures.CalenderSetup
{
    public class CalenderSetupService : ICalenderSetupService
    {
        private readonly IRepositoryBase<CalenderSetupModel> _CalenderSetupRepository;
        public CalenderSetupService(IRepositoryBase<CalenderSetupModel> CalenderSetupRepository) {
            _CalenderSetupRepository = CalenderSetupRepository;
        }


        async Task<string> ICalenderSetupService.SaveCalenderSetup(CalenderSetupModel calenderSetupModel)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", calenderSetupModel.userId),
                new SqlParameter("@WORKSPACE_ID", calenderSetupModel.workspaceId),
                new SqlParameter("@CLIENT_ID", calenderSetupModel.ClientId),
                new SqlParameter("@CALENDER_SETUP", calenderSetupModel.calenderSetup),
                new SqlParameter("@BUSSINESS_YEAR_DATE", calenderSetupModel.bussinessYearDate),
                new SqlParameter("@FINANCIAL_YEAR_DATE", calenderSetupModel.finacialYearDate),
                new SqlParameter("@REPORTING_YEAR_DATE", calenderSetupModel.reportingYearDate),
                new SqlParameter("@WEEK_START_DAY", calenderSetupModel.weekStartDay),
                new SqlParameter("@ANNUAL_HOLIDAY_CALDENER", calenderSetupModel.annualHolidayCalender),
                new SqlParameter("@ANNUAL_CAMPAIGNS_CALDENER", calenderSetupModel.annualCampaignCalender),
                new SqlParameter("@NOTIFY_CAMPAIGNS_CALDENER", calenderSetupModel.notifyCampaignsCalender),
                new SqlParameter("@MILESTONE_ANNUAL_HOLIDAY_CALDENER", calenderSetupModel.milestoneAnnualHolidayCalender),
                new SqlParameter("@NOTIFY_MILESTONE_CALDENER", calenderSetupModel.notifyMilestoneCalender),
                new SqlParameter("@CALENDER_APPLY_AND_ENFORCE", calenderSetupModel.calenderApplyAndEnforce),
                new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(calenderSetupModel.ClientDate) ? (object)DBNull.Value: calenderSetupModel.ClientDate),
            new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(calenderSetupModel.ClientTime) ? (object)DBNull.Value: calenderSetupModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(calenderSetupModel.ClientTimeZone) ? (object)DBNull.Value: calenderSetupModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(calenderSetupModel.Remark1) ? (object)DBNull.Value: calenderSetupModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(calenderSetupModel.Remark2) ? (object)DBNull.Value: calenderSetupModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(calenderSetupModel.Remark3) ? (object)DBNull.Value: calenderSetupModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(calenderSetupModel.Remark4) ? (object)DBNull.Value: calenderSetupModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(calenderSetupModel.Flex1) ? (object)DBNull.Value: calenderSetupModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(calenderSetupModel.Flex2) ? (object)DBNull.Value: calenderSetupModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(calenderSetupModel.Flex3) ? (object)DBNull.Value: calenderSetupModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(calenderSetupModel.Flex4) ? (object)DBNull.Value: calenderSetupModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(calenderSetupModel.Flex5) ? (object)DBNull.Value: calenderSetupModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(calenderSetupModel.Flex6) ? (object)DBNull.Value: calenderSetupModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(calenderSetupModel.Flex7) ? (object)DBNull.Value: calenderSetupModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(calenderSetupModel.Flex8) ? (object)DBNull.Value: calenderSetupModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(calenderSetupModel.Flex9) ? (object)DBNull.Value: calenderSetupModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(calenderSetupModel.Flex10) ? (object)DBNull.Value: calenderSetupModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(calenderSetupModel.Flex11) ? (object)DBNull.Value: calenderSetupModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(calenderSetupModel.Flex12) ? (object)DBNull.Value: calenderSetupModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(calenderSetupModel.Flex13) ? (object)DBNull.Value: calenderSetupModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(calenderSetupModel.Flex14) ? (object)DBNull.Value: calenderSetupModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(calenderSetupModel.Flex15) ? (object)DBNull.Value: calenderSetupModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(calenderSetupModel.Flex16) ? (object)DBNull.Value: calenderSetupModel.Flex16),

                new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000,
            Value = ""
                }

        };

            string spQuery = StoreProcedureConstants.Sp_SaveCalenderSetup + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID,  @CALENDER_SETUP,@BUSSINESS_YEAR_DATE, @FINANCIAL_YEAR_DATE, @REPORTING_YEAR_DATE, @WEEK_START_DAY, @ANNUAL_HOLIDAY_CALDENER, @ANNUAL_CAMPAIGNS_CALDENER, @NOTIFY_CAMPAIGNS_CALDENER, @MILESTONE_ANNUAL_HOLIDAY_CALDENER, @NOTIFY_MILESTONE_CALDENER, @CALENDER_APPLY_AND_ENFORCE," +
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                " @V_MESSAGE OUTPUT";
            return _CalenderSetupRepository.ExecuteCommand(spQuery, parameters);

        }

       public async Task<List<CalenderSetupModel>> GetCalenderSetup(string userId, string workspaceId, string ClientId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", ClientId),
                new SqlParameter("@WORKSPACE_ID", workspaceId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GetCalenderSetup + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<CalenderSetupModel> calenderList = _CalenderSetupRepository.ExecuteQuery(spQuery, parameters).ToList();
            return calenderList;
        }
    }

    }

