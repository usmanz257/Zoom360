
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
        private readonly IRepositoryBase<Filters> _FiltersRepository;
        private readonly IRepositoryBase<FiltersSource> _FilterQueryRepositry;
        public WorkbookService(IRepositoryBase<Workbook> WorkbookRepository,
            IRepositoryBase<Page> PageRepository,
            IRepositoryBase<Widget> WidgetRepository,
            IGridAndGraphDataService gridAndGraphDataService,
            IRepositoryBase<PageProperties> PagePropertiesRepository,
            IRepositoryBase<Layout> LayoutRepository,
            IRepositoryBase<Query> QuerytRepository,
            IRepositoryBase<Filters> FiltersRepository,
            IRepositoryBase<FiltersSource> FilterQueryRepositry
            )
        {
           
            _PageRepository = PageRepository;
            _WidgetRepository = WidgetRepository;
            _gridAndGraphDataService = gridAndGraphDataService;
            _PagePropertiesRepository = PagePropertiesRepository;
            _LayoutRepository = LayoutRepository;
            _QueryRepository = QuerytRepository;
            _WorkbookRepository = WorkbookRepository;
            _FiltersRepository = FiltersRepository;
            _FilterQueryRepositry = FilterQueryRepositry;
        }


        public async Task<IList<WorkbookDto>> GetAllWorkbooks(string userId, string workSpaceId, string clientId) 
        {
                var workbookresult = _WorkbookRepository.GetAll().Include(x => x.Pages);

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
                             Pages = o.Pages.Where(x => x.BSTATUS == "1").Select(d => new PageDto
                             {
                                 Id = d.Id,
                                 Name = d.Name,
                                 Description = d.Description,
                                 BSTATUS = d.BSTATUS
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
        public async Task<IList<WidgetDto>> GetAllFilteredWidgets(FilterQueryDto Page)
        {
            var WidgetResult = _WidgetRepository.GetAll()
                .Include(x => x.Dimension)
                .Include(x => x.Measure)
                .Include(x => x.Layout)
                .Include(x => x.Query)
                .Where(x => x.PageId == Page.id);

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
                                    Query = new QueryDto()
                                    {
                                        Id = o.Query.Id,
                                        Sql = o.Query.Sql,
                                    }
                                }).ToListAsync();
            string whereCluse = " HAVING ";
            if (Page.filterValues?.Count > 0)
            {
                for (int i = 0; i < Page.filterValues.Count; i++)
                {
                    if (Page.filterValues.Count == 1)
                    {
                        whereCluse += Page.filterValues[i].columnName + " = '" + Page.filterValues[i].filterValue + "'";
                    }
                    else if (Page.filterValues.Count > 1)
                    {
                        if (i < Page.filterValues.Count - 1)
                        {
                            whereCluse += Page.filterValues[i].columnName + " = '" + Page.filterValues[i].filterValue + "' AND ";
                        }
                        else if (i == Page.filterValues.Count - 1)
                        {
                            whereCluse += Page.filterValues[i].columnName + " = '" + Page.filterValues[i].filterValue + "'";
                        }

                    }

                }
            }
            
            foreach (var item in result)
            {
                if (Page.filterValues?.Count > 0)
                {
                    item.Query.Sql = item.Query.Sql + whereCluse;
                    item.Chart = await _gridAndGraphDataService.GetCharts(item);
                }
                else
                {
                    item.Chart = await _gridAndGraphDataService.GetCharts(item);
                }                    
               
            }

            return result;
        }
        public async Task<IList<Filters>> GetAllFilters(PageDto Page)
        {
            var filters = _FiltersRepository.GetAll().Where(x => x.pageId == Page.Id).Take(2).ToList();
            foreach(var item in filters)
            {
                var filterValues = _FilterQueryRepositry.ExecutePlainQuery(item.query).ToList();
                item.filterValues = filterValues;
            }
            return filters;
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
        public async Task UpdatePage(Page page)
        {
                Page entityresult = _PageRepository.GetAll().Where(x => x.Id == page.Id).FirstOrDefault();
                entityresult.Name = page.Name;
                await _PageRepository.UpdateAsync(entityresult);
                _PageRepository.SaveChanges();
        }
        public async Task UpdateWorkbook(Workbook workbook)
        {
            Workbook entityresult = _WorkbookRepository.GetAll().Where(x => x.Id == workbook.Id).FirstOrDefault();
            entityresult.Name = workbook.Name;
            await _WorkbookRepository.UpdateAsync(entityresult);
            _WorkbookRepository.SaveChanges();
        }
        public async Task DeleteDashboard(PageDto page)
        {
            Page entityresult = _PageRepository.GetAll().Where(x => x.Id == page.Id).FirstOrDefault();
            entityresult.BSTATUS = page.BSTATUS;
            await _PageRepository.UpdateAsync(entityresult);
            _PageRepository.SaveChanges();

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
