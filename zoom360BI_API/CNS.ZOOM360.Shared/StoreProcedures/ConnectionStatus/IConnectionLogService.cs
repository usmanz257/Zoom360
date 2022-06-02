using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.ConnectionStatus;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto;

namespace CNS.ZOOM360.Shared.StoreProcedures.ConnectionStatus
{
   public interface IConnectionLogService
    {
        Task<List<ConnectionLogModel>> GetAllConnections(ExtractListInputModel ListInputmodel);
        Task<List<ConnectionLogModel>> GetConnectorTypeDash(string userId, string workspace, string clientId, List<int> sourceConnectorId);
    }
}
