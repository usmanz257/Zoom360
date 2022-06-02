
using CNS.ZOOM360.Shared.Dashboard.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ZOOM360.Charts.Model;

namespace CNS.ZOOM360.Shared.DashBoard
{
    public interface IWorkBookService
    {
        Task<IList<WorkbookDto>> GetAllWorkbooks(string userId, string workSpaceId, string clientId); 

        Task<IList<PageDto>> GetAllPages(WorkbookDto workbook);
        Task<PagePropertiesDto> GetPageProperties(int PageID);
        Task<IList<WidgetDto>> GetAllWidgets(PageDto Page);
        Task UpdateLayout(IList<LayoutDto> layout);
    }
}
