using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.TreeControlTemplate;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.TreeControlsTemplate;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.TreeControlTemplate.RouteName)]
    [ApiController]
    public class TreeControlTemplateController : ControllerBase
    {
        private readonly ITreeControlsTemplate _treeControlTemplate;
        private readonly ILoggerManager _logger;
        private IHostingEnvironment _hostingEnv;
        public TreeControlTemplateController(ITreeControlsTemplate treeControlTemplate, ILoggerManager logger,
            IHostingEnvironment hostingEnv)
        {
            _treeControlTemplate = treeControlTemplate;
            _logger = logger;
            _hostingEnv = hostingEnv;
        }

        [Route(ServiceConstants.TreeControlTemplate.SaveTreeControlTemplate)]
        [HttpPut]
        public async Task<ActionResult> SaveTreeControlTemplate(TreeTemplateDto treeTemplateDto, string _id)
        {

            var ResultData = _treeControlTemplate.SaveTemplateControlsScript(treeTemplateDto, _id);
            if (ResultData != "updated...")
            {
                _logger.LogInfo($"tree Template data not saved in the database.");
                return NotFound();
            }

            return Ok(ResultData);
        }
        //public async Task<ActionResult> SaveTreeControlTemplate(TreeTemplateDto treeTemplateDto)
        //{
        //    var ResultData = _treeControlTemplate.SaveTemplateControlsScript(treeTemplateDto);
        //    if (ResultData.Result != "save to mongodb...")
        //    {
        //        _logger.LogInfo($"tree Template data not saved in the database.");
        //        return NotFound();
        //    }

        //    return Ok(ResultData.Result);
        //}
        // get object
        [Route(ServiceConstants.TreeControlTemplate.GetTreeControlTemplate)]
        [HttpGet]
        public async Task<ActionResult> GetTreeControlTemplate(string userId, string workspaceId, string clientId, string nodeid, string scriptId)
        {
            var Data = this._treeControlTemplate.GetTemplateControlsScript(userId, workspaceId, clientId, nodeid, scriptId);
            if (Data.Result == "error")
            {
                _logger.LogInfo($"No data Found");
                return NotFound("No data Found");
            }
            return Ok(Data.Result);
        }
        [Route(ServiceConstants.TreeControlTemplate.SaveFile)]
        [HttpPost()]
        [RequestFormLimits(MultipartBodyLengthLimit = 999999999)]
        [RequestSizeLimit(999999999)]
        public IActionResult Save(IList<IFormFile> UploadFiles)
        {
            string userId = HttpContext.Request.Form["userId"];
            string workspaceId = HttpContext.Request.Form["workspaceId"];
            string clientId = HttpContext.Request.Form["clientId"];
            string mainMenuID = HttpContext.Request.Form["mainMenuID"];
            //string submenuId = HttpContext.Request.Form["subMenuId"];
            string scriptId = HttpContext.Request.Form["scriptId"];
            string templateName = HttpContext.Request.Form["scriptName"];
            bool templateEnable = Convert.ToBoolean(HttpContext.Request.Form["scriptEnable"]);
            //   string FileName = HttpContext.Request.Form["filename"];
            string sqlDBMessage = "";
            string newSubMenuId = "";

            List<TreeControlModel> fileData = new List<TreeControlModel>();
            try
            {

                //string firstfile = UploadFiles[0].FileName.ToString();
                //var extentation = firstfile.Split(".");
                //if (extentation[1] == "json")
                //{
                //    IFormFile swapfile;
                //    swapfile = UploadFiles[0];
                //    UploadFiles[0] = UploadFiles[1];
                //    UploadFiles[1]=swapfile;
                //}

                foreach (var file in UploadFiles)
                {
                    if (UploadFiles != null)
                    {
                        // filename = this._hostingEnv.WebRootPath + $@"\{filename}";

                        //var fileserversavepath = @"//192.168.223.100/zoom_files_dump/" + file.FileName;
                        // string FolderPath = Path.Combine("xlsxArchive");
                        var folderName = Path.Combine("xlsxArchive");
                        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                        var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                        FileInfo fi = new FileInfo(fileName);
                        var fileExtention = fi.Extension;
                        string filefullpath = fi.FullName;
                        var fullPath = Path.Combine(pathToSave, fileName);

                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                            //var filereading = file.OpenReadStream();
                        }
                        if (fileExtention == ".xlsx")
                        {
                            string fileToRead = pathToSave + "\\" + fileName;
                            FileInfo FiRead = new FileInfo(fileToRead);
                            using (ExcelPackage package = new ExcelPackage(FiRead))
                            {
                                ExcelWorksheet worksheet = package.Workbook.Worksheets.FirstOrDefault();
                                if (worksheet == null)
                                {
                                    //return or alert message here
                                }
                                else
                                {
                                    //read excel file data and add data in  model.StaffInfoViewModel.StaffList

                                    //var DBMessage = _treeControlTemplate.SaveTemplateSubmenu(userId, workspaceId, clientId, mainMenuID, templateName);

                                    // sqlDBMessage = sqlResult[0];
                                    //scriptId = sqlResult[1];
                                    var rowCount = worksheet.Dimension.Rows;
                                    for (int row = 2; row <= rowCount; row++)
                                    {
                                        fileData.Add(new TreeControlModel
                                        {
                                            userId = userId,
                                            workspaceId = workspaceId,
                                            clientId = clientId,
                                            mainMenuid = mainMenuID,
                                            scriptId = scriptId,
                                            scriptName = templateName,
                                            scriptEnable = templateEnable,
                                            fileName = fileName,
                                            nodeId = (worksheet.Cells[row, 1].Value ?? string.Empty).ToString().Trim(),
                                            nodeName = (worksheet.Cells[row, 2].Value ?? string.Empty).ToString().Trim(),
                                            parentId = (worksheet.Cells[row, 3].Value ?? string.Empty).ToString().Trim(),
                                            hasChild = Convert.ToBoolean((worksheet.Cells[row, 4].Value ?? string.Empty).ToString().Trim()),
                                            isExpanded = Convert.ToBoolean((worksheet.Cells[row, 5].Value ?? string.Empty).ToString().Trim()),
                                            nodeDescription = (worksheet.Cells[row, 6].Value ?? string.Empty).ToString().Trim(),

                                        }); ;
                                    }

                                    int i = 0;
                                    foreach (var node in fileData)
                                    {
                                        node.scriptId = scriptId;
                                        sqlDBMessage = _treeControlTemplate.SaveTreeStructure(node);
                                        var sqlResult = sqlDBMessage.Split(",");
                                        i += 1;
                                        if (sqlResult[0] == "0")
                                        {
                                            Response.Clear();
                                            Response.StatusCode = 208;
                                            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = sqlDBMessage;
                                            return Content("");
                                        }
                                        else if (sqlResult[0] == "1" && i == fileData.Count)
                                        {
                                            Response.Clear();
                                            Response.StatusCode = 208;
                                            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = sqlDBMessage;
                                            return Content("");
                                        }
                                        else if (sqlResult[0] == "1")
                                        {
                                            scriptId = sqlResult[2];
                                        }
                                        else if (sqlResult[0] == "2")
                                        {
                                            Response.Clear();
                                            Response.StatusCode = 208;
                                            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = sqlDBMessage;
                                            return Content("");
                                        }

                                    }
                                }

                            }
                        }
                        else if (fileExtention == ".json" && scriptId != "")
                        {


                            var JSON = System.IO.File.ReadAllText(fullPath);
                            List<TreeTemplateDto> template = JsonConvert.DeserializeObject<List<TreeTemplateDto>>(JSON);
                            //dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(JSON);
                            foreach (var item in template)
                            {
                                item.userId = userId;
                                item.workspaceId = workspaceId;
                                item.clientId = clientId;
                                item.scriptId = scriptId;
                                item.Temp_Name = templateName;
                                item.Temp_Enable = templateEnable;
                                string message = _treeControlTemplate.SaveTemplateControlsScript(item, "");

                            }

                            Response.Clear();
                            Response.StatusCode = 208;
                            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "JSON saved complete...";
                            return Content("");
                        }

                        else if (fileExtention == ".json" && scriptId == "")
                        {
                            Response.Clear();
                            Response.ContentType = "application/json; charset=utf-8";
                            Response.StatusCode = 208;
                            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "0,Please Firstly Upload xlsx File";
                            return Content("");
                        }
                        else
                        {
                            Response.Clear();
                            Response.StatusCode = 208;
                            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "0,File already exists.";
                            return Content("");
                        }
                    }
                }
            }
            catch (Exception e)
            {
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 204;
                Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "No Content";
                Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = e.Message;
                return Content("");
            }
            return Content("");
        }


        [Route(ServiceConstants.TreeControlTemplate.GetTreeTemplateGrid)]
        [HttpGet]
        public async Task<ActionResult> GetTreeTemplateGrid([FromQuery] InputTreeTemplateGrid inputTreeTemplateGrid)
        {
            var workspaceData = this._treeControlTemplate.GetTreeTemplateGrid(inputTreeTemplateGrid);
            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(workspaceData.Result);

        }

        [Route(ServiceConstants.TreeControlTemplate.GetTreeTemplatequerydata)]
        [HttpGet]
        public async Task<ActionResult> GetTreeTemplateQueryData([FromQuery] TreeTemplateQueryDTOModel treeTemplateQueryDTOModel)
        {
            var workspaceData = await this._treeControlTemplate.GetTreeTemplateQueryData(treeTemplateQueryDTOModel);

            if (workspaceData == null)
            {
                _logger.LogInfo($"Workspace data doesn't exist in the database.");
                return NotFound();
            }
            return Ok(workspaceData);
        }
    }
}



