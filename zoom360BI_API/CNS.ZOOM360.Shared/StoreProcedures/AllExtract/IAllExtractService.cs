using CNS.ZOOM360.Entities.StoreProcedures.AllExtract;
using CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.AllExtract
{
    public interface IAllExtractService
    {
        Task<List<AllExtractListModel>> GetExtractlist(ExtractListInputModel ListInputmodel);
        Task<List<AllIssuesModel>> GetIssuetlist(ExtractListInputModel ListInputmodel);
        Task<List<ConnectionListModel>> GetConnectionlist(ExtractListInputModel ListInputmodel);
        Task<List<SourceListModel>> GetSourceList(ExtractListInputModel ListInputmodel);
        Task<List<AllIssuesModel>> GetEnrichLog(ExtractListInputModel ListInputmodel);
    }
}
