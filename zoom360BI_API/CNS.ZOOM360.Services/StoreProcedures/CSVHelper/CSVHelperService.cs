using CNS.ZOOM360.Shared.StoreProcedures.CSVHelper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.CSVHelper
{
   public class CSVHelperService : ICSVhelperService

    {
       public async Task<List<Object>> GetCSVData()
        {
            List<Object> CSVData = new List<Object>();
            return CSVData;

        }
    }
}
