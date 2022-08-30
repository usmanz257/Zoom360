using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Shared.Dashboard.Dto;
using CNS.ZOOM360.Shared.DashBoard;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZOOM360.Charts.DashBoardServices.dashBoard;
using ZOOM360.Charts.Model;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkbookController : ControllerBase
    {
        private readonly IWorkBookService _WorkBookService;

        public WorkbookController(IWorkBookService WorkBookService) {
            _WorkBookService = WorkBookService;
        }
        [Route("GetWorkbooks")]
        [HttpGet]
        public IActionResult GetWorkbooks([FromQuery] string userId, string workSpaceId, string clientId)
        {

            var workbooks = _WorkBookService.GetAllWorkbooks(userId, workSpaceId, clientId).Result;
            if (workbooks is null)
            {
                return NotFound("Item not found!");
                
            }
            else
            {
                return Ok(workbooks);
            }
        }

        [Route("GetWorkbookpages")]
        [HttpGet]
        public IActionResult GetWorkbookpages([FromQuery]WorkbookDto Workbook)
        {

            var workbooks = _WorkBookService.GetAllPages(Workbook);
            if (workbooks is null)
            {
                return NotFound("Item not found!");
            }
            else
            {
                return Ok(workbooks.Result);
                
            }
        }

        [Route("GetPageProperties")]
        [HttpGet]
        public IActionResult GetPageProperties(int PageId)
        {

            var workbooks = _WorkBookService.GetPageProperties(PageId);
            if (workbooks is null)
            {
                return NotFound("Item not found!");
            }
            else
            {
                return Ok(workbooks.Result);

            }
        }

        [Route("GetWidgets")]
        [HttpGet]
        public IActionResult GetWidgets([FromQuery] PageDto Page)
        {
            var workbooks = _WorkBookService.GetAllWidgets(Page);
            if (workbooks.Result is null)
            {
                return NotFound("Item not found!");
            }
            else
            {
                return Ok(workbooks.Result);
            }
        }
        [Route("GetFilteredWidgets")]
        [HttpPost]
        public IActionResult GetFilteredWidgets(FilterQueryDto Page)
        {
            var workbooks = _WorkBookService.GetAllFilteredWidgets(Page);
            if (workbooks.Result is null)
            {
                return NotFound("Item not found!");
            }
            else
            {
                return Ok(workbooks.Result);
            }
        }
        [Route("GetFilters")]
        [HttpPost]
        public IActionResult GetFilters(PageDto Page)
        {
            var workbooks = _WorkBookService.GetAllFilters(Page);
            if (workbooks.Result is null)
            {
                return NotFound("Item not found!");
            }
            else
            {
                return Ok(workbooks.Result);
            }
        }
        [Route("UpdateLayout")]
        [HttpPost]
        public IActionResult UpdateLayout(IList<LayoutDto> layout)
        {

            var workbooks =  _WorkBookService.UpdateLayout(layout);
            
            if (workbooks.IsCompleted)
            {
                return  Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [Route("UpdateDashboardProperties")]
        [HttpPost]
        public IActionResult UpdateDashboardProperties(DashboardProperties dashboardProperties)
        {

            var workbooks = _WorkBookService.UpdateWorkbook(dashboardProperties.workbook);
            var page = _WorkBookService.UpdatePage(dashboardProperties.page);
            if (workbooks.IsCompleted && page.IsCompleted)
            {
                return Ok(new {status=1,message="Dasboard updated"});
            }
            else
            {
                return BadRequest(new { status = 0, message = "Error occurred" });
            }
        }
        [Route("DeleteDashboardProperties")]
        [HttpPost]
        public IActionResult DeleteDashboardProperties(PageDto page)
        {

            var result = _WorkBookService.DeleteDashboard(page);
            if (result.IsCompleted)
            {
                return Ok(new { status = 1, message = "page deleted" });
            }
            else
            {
                return BadRequest(new { status = 0, message = "Error occurred" });
            }
        }
    }
}
