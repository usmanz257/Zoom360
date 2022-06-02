using CNS.ZOOM360.Entities.StoreProcedures.Load;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.Load
{
   public interface ILoad
    {
        Task<List<DestinationList>> GetDestinationList(DestinationListModel model);

    }
}
