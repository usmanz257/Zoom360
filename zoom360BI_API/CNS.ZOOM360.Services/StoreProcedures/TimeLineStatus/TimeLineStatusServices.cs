using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Entities.StoreProcedures.UserTemplateInfo;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.TimeLineStatus
{
    public class TimeLineStatusServices : ITimeLineStatusServices
    {

        private readonly IRepositoryBase<MainmenuRightsModel> _timeLineRepository;
        private readonly IRepositoryBase<UserTemplateInfoModel> _timeLineInfoRepository;
        private readonly IRepositoryBase<DataTable> _timeLineDataRepository;
        public TimeLineStatusServices(IRepositoryBase<MainmenuRightsModel> timeLineRepository,
            IRepositoryBase<UserTemplateInfoModel> timeLineInfoRepository,
            IRepositoryBase<DataTable> timeLineDataRepository)
        {
            _timeLineRepository = timeLineRepository;
            _timeLineInfoRepository = timeLineInfoRepository;
            _timeLineDataRepository = timeLineDataRepository;
        }

        public async Task<List<MainmenuRightsModel>> GetTimeLineStatus(TimeLineInputModel Inputmodel)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", Inputmodel.UserId),
                new SqlParameter("@WORKSPACE_ID", Inputmodel.WorkSpaceId),
                new SqlParameter("@CLIENT_ID", Inputmodel.Client_Id),
                new SqlParameter("@PLATFORM", string.IsNullOrEmpty(Inputmodel.Platform) ? (object)DBNull.Value : Inputmodel.Platform),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }

            };

            string spQuery = StoreProcedureConstants.Sp_TimeLineStatus + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                 " @PLATFORM, @V_MESSAGE OUTPUT";

            List<MainmenuRightsModel> timeLine = _timeLineRepository.ExecuteQuery(spQuery, parameters).ToList();


            //string idlist = IDList.ToString();
            return timeLine;
        }
        public async Task<TimelineWidgetTableDataModel> GetTimeLineWidgetDetailData(string userId, string workSpaceId, string Client_Id, string Widget_Id)
        {
            TimelineWidgetTableDataModel GridData = new TimelineWidgetTableDataModel();
            DbParameter[] parameters = {
                new SqlParameter("@USER_ID",userId),
                new SqlParameter("@WORKSPACE_ID",workSpaceId),
                new SqlParameter("@CLIENT_ID", Client_Id),
                new SqlParameter("@WIDGET_ID", string.IsNullOrEmpty(Widget_Id) ? (object)DBNull.Value : Widget_Id),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }

            };

            string spQuery = StoreProcedureConstants.Sp_GETTIMELINEWIDGETDATA + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                 " @WIDGET_ID, @V_MESSAGE OUTPUT";
            GridData.gridValues = _timeLineDataRepository.getDynamicgrid(spQuery, parameters);
            GridData.gridColumnNames = (from dc in GridData.gridValues.Columns.Cast<DataColumn>()
                                        select dc.ColumnName).ToArray();

            for (int i = 0; i < GridData.gridColumnNames.Length; i++)
            {
                string abc = GridData.gridColumnNames[i];
                string abc1 = abc.Replace('_', ' ');
                GridData.gridColumnNames[i] = abc1;
            }

            return GridData;
        }
        
        public async Task<List<UserTemplateInfoModel>> GetUserTemplateInfo(string userId, string workSpaceId, string Client_Id)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@CLIENT_ID", Client_Id),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GetUserTimelineInfo + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID,@V_MESSAGE OUTPUT";
            List<UserTemplateInfoModel> timeLineinfo = _timeLineInfoRepository.ExecuteQuery(spQuery, parameters).ToList();
            return timeLineinfo;
        }
    }

}

   
    
    
