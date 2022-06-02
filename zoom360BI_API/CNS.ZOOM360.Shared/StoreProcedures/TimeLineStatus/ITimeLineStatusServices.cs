using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.StoreProcedures.TimeLineStatus;
using CNS.ZOOM360.Entities.StoreProcedures.TreeControlTemplate;
using CNS.ZOOM360.Entities.StoreProcedures.UserTemplateInfo;
using CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus.Dto;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus
{
    public interface ITimeLineStatusServices
    {
        Task<List<MainmenuRightsModel>> GetTimeLineStatus(TimeLineInputModel Inputmodel);
        Task<List<UserTemplateInfoModel>> GetUserTemplateInfo(string userId, string workSpaceId, string Client_Id);
        Task<TimelineWidgetTableDataModel> GetTimeLineWidgetDetailData(string userId, string workSpaceId, string Client_Id, string Widget_Id);
      
    }
}
