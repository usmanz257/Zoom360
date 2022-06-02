using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.Prepare;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.Prepare;
using CNS.ZOOM360.Shared.StoreProcedures.Prepare.Dto;
using Microsoft.AspNetCore.Mvc;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.prepare.RouteName)]
    [ApiController]
    public class PrepareController : Controller
    {
        private readonly IPrepare _preparerepository;
        private readonly ILoggerManager _logger;
        public PrepareController(IPrepare preparerepository, ILoggerManager logger)
        {
            _preparerepository = preparerepository;
            _logger = logger;
        }
        [Route(ServiceConstants.prepare.GetDataQualityList)]
        [HttpGet]
        public async Task<IActionResult> getDataQualityList([FromQuery]DataQualityParamsModel Input)
        {
            var QualityData = _preparerepository.GetDataQualitylist(Input);
            if (QualityData.Result.Count == 0)
            {

                _logger.LogInfo($"Data quality List doesn't exist in the database.");
                return NotFound();
            }

            return Ok(QualityData.Result);
        }
        [Route(ServiceConstants.prepare.GetLookupList)]
        [HttpGet]
        public async Task<IActionResult> getLookupList([FromQuery]LookuplistParamsModel Input)
        {
            var LookupListData = _preparerepository.GetLookuplist(Input);
            if (LookupListData.Result.Count == 0)
            {

                _logger.LogInfo($"Lookup data List doesn't exist in the database.");
                return NotFound();
            }

            return Ok(LookupListData.Result);
        }
        [Route(ServiceConstants.prepare.GetAccountList)]
        [HttpGet]
        public async Task<IActionResult> getAccountList([FromQuery]sourceCommonModel inpoutModel)
        {
            var SourceAccountList = _preparerepository.GetSourceAccountlist(inpoutModel);
            if (SourceAccountList.Result.Count == 0)
            {

                _logger.LogInfo($"Lookup data List doesn't exist in the database.");
                return NotFound();
            }

            return Ok(SourceAccountList.Result);
        }
        [Route(ServiceConstants.prepare.GetTableList)]
        [HttpGet]
        public async Task<IActionResult> getTableList([FromQuery]sourceCommonModel inpoutModel,string Dbname,string MappedTable)
        {
            var SourceTableList = _preparerepository.GetSourceTablelist(inpoutModel, Dbname, MappedTable);
            if (SourceTableList.Result.Count == 0)
            {

                _logger.LogInfo($"Source Table List doesn't exist in the database.");
                return NotFound();
            }

            return Ok(SourceTableList.Result);
        }
        [Route(ServiceConstants.prepare.GetobjectFieldList)]
        [HttpGet]
        public async Task<IActionResult> getobjectFieldList([FromQuery]sourceCommonModel inpoutModel, string Dbname, string objectName)
        {
            var SourceObjectFieldsList = _preparerepository.GetSourceObjectlist(inpoutModel, Dbname, objectName);
            if (SourceObjectFieldsList.Result.Count == 0)
            {

                _logger.LogInfo($"Table Field List doesn't exist in the database.");
                return NotFound();
            }

            return Ok(SourceObjectFieldsList.Result);
        }
        [Route(ServiceConstants.prepare.SaveLookup)]
        [HttpPost]
        public async Task<IActionResult> SaveLookup(LookupArray lookuppagevalue, string User_id, string Client_id, string workspace_id, string tablevalues)
        {
            var Savelookup = _preparerepository.SaveLookup(lookuppagevalue, User_id, Client_id, workspace_id, tablevalues);
            if (Savelookup.Result == null)
            {  
                _logger.LogInfo($" ");
                return NotFound();
            }

            return Ok(Savelookup.Result);
        }
        [Route(ServiceConstants.prepare.GenerateCustomTable)]
        [HttpGet]
        public async Task<IActionResult> generateCustomTable([FromQuery]customeTableModel inputmodel)
        {
            var GenerateTable = _preparerepository.GenerateCustomTable(inputmodel);
            if (GenerateTable.Result == null)
            {
                _logger.LogInfo($" ");
                return NotFound();
            }

            return Ok(GenerateTable.Result);
        }
        [Route(ServiceConstants.prepare.InsertionOptions)]
        [HttpGet]
        public async Task<IActionResult> insertionDataOptions([FromQuery]InsertionOptionModel inputmodel)
        {
            var GenerateTable = _preparerepository.InsertionOption(inputmodel);
            if (GenerateTable.Result == null)
            {
                _logger.LogInfo($" ");
                return NotFound();
            }

            return Ok(GenerateTable.Result);
        }
        [Route(ServiceConstants.prepare.addLookupScreen)]
        [HttpPost]
        public async Task<IActionResult> addLookupScreen(LookupArray lookuppagevalue)
        {
            var Savelookup = _preparerepository.Addlookup(lookuppagevalue);
            if (Savelookup.Result == null)
            {
                _logger.LogInfo($" ");
                return NotFound();
            }

            return Ok(Savelookup.Result);
        }
        [Route(ServiceConstants.prepare.saveDataLabeling)]
        [HttpPost]
        public async Task<IActionResult> SaveDatalabeling(SaveDataLabelingInputModel inputModel)
        {
            var Savelookup = _preparerepository.SaveDatalabeling(inputModel);
            if (Savelookup.Result == null)
            {
                _logger.LogInfo($" ");
                return NotFound();
            }

            return Ok(Savelookup.Result);
        }
    }
}