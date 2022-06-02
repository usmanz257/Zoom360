using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.CSVHelper
{
   public interface ICSVhelperService
    {
        Task<List<Object>> GetCSVData();
    }
}
