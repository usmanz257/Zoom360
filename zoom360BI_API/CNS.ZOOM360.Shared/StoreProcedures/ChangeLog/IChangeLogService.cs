using CNS.ZOOM360.Entities.StoreProcedures.ChangeLog;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.ChangeLog
{
    public interface IChangeLogService
    {
        Task<List<ChangeLogListModel>> getChangeLogList(string userId, string workSpaceId, string client_id);
    }
}
