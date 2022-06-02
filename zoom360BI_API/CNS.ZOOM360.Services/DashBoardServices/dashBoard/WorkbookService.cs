﻿
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Shared.Dashboard.Dto;
using CNS.ZOOM360.Shared.DashBoard;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ZOOM360.Charts.Model;

namespace ZOOM360.Charts.DashBoardServices.dashBoard
{
    public class WorkbookService : IWorkBookService
    {
        private readonly IRepositoryBase<Workbook> _WorkbookRepository;
        private readonly IRepositoryBase<Page> _PageRepository;
        private readonly IRepositoryBase<Widget> _WidgetRepository;

        private readonly IRepositoryBase<PageProperties> _PagePropertiesRepository;
        private readonly IGridAndGraphDataService _gridAndGraphDataService;
        private readonly IRepositoryBase<Layout> _LayoutRepository;
        private readonly IRepositoryBase<Query> _QueryRepository;
        public WorkbookService(IRepositoryBase<Workbook> WorkbookRepository,
            IRepositoryBase<Page> PageRepository,
            IRepositoryBase<Widget> WidgetRepository,
            IGridAndGraphDataService gridAndGraphDataService,
            IRepositoryBase<PageProperties> PagePropertiesRepository,
            IRepositoryBase<Layout> LayoutRepository,
            IRepositoryBase<Query> QuerytRepository
            )
        {
           
            _PageRepository = PageRepository;
            _WidgetRepository = WidgetRepository;
            _gridAndGraphDataService = gridAndGraphDataService;
            _PagePropertiesRepository = PagePropertiesRepository;
            _LayoutRepository = LayoutRepository;
            _QueryRepository = QuerytRepository;
            _WorkbookRepository = WorkbookRepository;
        }


        public async Task<IList<WorkbookDto>> GetAllWorkbooks(string userId, string workSpaceId, string clientId) 
        {
                var workbookresult = _WorkbookRepository.GetAll().Include(x => x.Pages.Where(x => x.USER_ID == userId && x.WORKSPACE_ID == workSpaceId && x.CLIENT_ID == clientId && x.BSTATUS == "1")).Where(x => x.USER_ID == userId && x.WORKSPACE_ID == workSpaceId && x.CLIENT_ID == clientId && x.BSTATUS == "1");

            //var workbookresult = _WorkbookRepository.GetAll().Where
            //    (x => x.userId == userCommonModel.userId &&
                                                                                                                                                                                                                                                                                                                                                                                            //     x.workspaceId == userCommonModel.workspaceId &&
            //     x.clientId == userCommonModel.clientId).Include(x => x.Pages);

            var result = from o in workbookresult
                         select new WorkbookDto
                         {
                             Id = o.Id,
                             Name = o.Name,
                             Description = o.Description,
                             Pages = o.Pages.Select(d => new PageDto
                             {
                                 Id = d.Id,
                                 Name = d.Name,
                                 Description = d.Description
                             }).ToList()
                         };

            return await result.ToListAsync();
        }

        public async Task<IList<PageDto>> GetAllPages(WorkbookDto workbook)
        {

            var workbookresult = _PageRepository.GetAll().Include(x => x.PageProperties)
                .Where(x => x.WorkbookId == workbook.Id);

            var result = from o in workbookresult
                         select new PageDto
                         {
                             Id = o.Id,
                             Name = o.Name,
                             Description = o.Description,
                             PageProperties = new PagePropertiesDto
                             {
                                 DefualtProperties = o.PageProperties.DefualtProperties,
                                 ExtendedProperties = string.IsNullOrEmpty(o.PageProperties.ExtendedProperties) ? o.PageProperties.DefualtProperties : o.PageProperties.ExtendedProperties
                             }
                         };

            return await result.ToListAsync();
        }
        public async Task<PagePropertiesDto> GetPageProperties(int PageID)
        {

            var workbookresult = _PagePropertiesRepository.GetAll()
                .Where(x => x.PageId == PageID);

            var result = from o in workbookresult
                         select new PagePropertiesDto
                         {

                             DefualtProperties = o.DefualtProperties,
                             ExtendedProperties = o.ExtendedProperties

                         };

            return await result.FirstOrDefaultAsync();
        }
        public async Task<IList<WidgetDto>> GetAllWidgets(PageDto Page)
        {
            var WidgetResult = _WidgetRepository.GetAll()
                .Include(x => x.Dimension)
                .Include(x => x.Measure)
                .Include(x => x.Layout)
                .Include(x => x.Query)
                .Where(x => x.PageId == Page.Id);
            //working area
            var result = await (from o in WidgetResult
                          select new WidgetDto
                          {
                              Id = o.Id,
                              Name = o.Name,
                              Description = o.Description,
                              Type = o.Type,
                              PropertiesJson = o.Properties,
                              Layout = new LayoutDto
                              {
                                  Id = o.Layout.Id,
                                  Rows = o.Layout.Rows,
                                  Cols = o.Layout.Columns,
                                  X = o.Layout.SizeX,
                                  Y = o.Layout.SizeY
                              },
                              Dimension = o.Dimension.Select(d => new DimensionDto
                              {
                                  Id = d.Id,
                                  Name = d.Name,
                                  Description = d.Description,
                                  Type = d.Type,
                                  IsEnabled = d.IsEnabled
                              }).ToList(),
                              Measure = o.Measure.Select(m => new MeasureDto
                              {
                                  Id = m.Id,
                                  Description = m.Description,
                                  Name = m.Name,
                                  Type = m.Type,
                                  //value = m.value,
                                  //dashStyle = m.dashStyle,
                                  IsEnabled = m.IsEnabled,
                                  Color = m.Color


                              }).ToList(),
                              Query= new QueryDto() { 
                                  Id = o.Query.Id,
                                  Sql = o.Query.Sql,
                              }
                          }).ToListAsync();

            foreach (var item in result)
            {
                item.Chart = await _gridAndGraphDataService.GetCharts(item);
            }

            return  result;
        }
        public async Task UpdateLayout(IList<LayoutDto> layout)
        {


            foreach (var item in layout)
            {
                var entityresult = _LayoutRepository.GetAll().Where(x => x.Id == item.Id).FirstOrDefault();

                entityresult.Rows = item.Rows;
                entityresult.Columns = item.Cols;
                entityresult.SizeX = item.X;
                entityresult.SizeY = item.Y;

                //Layout layoutentity = new Layout()
                //{
                //    Id = item.Id,
                //    Rows = item.Rows,
                //    Columns = item.Cols,
                //    SizeX = item.X,
                //    SizeY = item.Y

                //};
               await _LayoutRepository.UpdateAsync(entityresult);
            }
            _LayoutRepository.SaveChanges();
        }

        //public static List<Report> GetReportWithData(Worksheet worksheetObj)
        //{
        //    var listXml = DeserializeXml();
        //    List<Report> listRpt = new List<Report>();
        //    string dataSource = ConfigurationManager.AppSettings["DataSource"];


        //    foreach (var dash in listXml.Dashboard)
        //    {
        //        foreach (var worksheet in dash.Worksheets.Worksheet.Where(worksheet => worksheet.Id == worksheetObj.Id))
        //        {
        //            foreach (var i in worksheet.Reports.Report)
        //            {
        //                i.Data = dataSource.ToLower() == "sql"
        //                                ? QueryExecuter.GetQueryDataSql(i)
        //                                : QueryExecuter.GetQueryDataOra(i);
        //            }


        //            listRpt = worksheet.Reports.Report;
        //            break;
        //        }
        //    }
        //    return listRpt;
        //}

    }
}