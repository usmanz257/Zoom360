using CNS.ZOOM360.Entities.StoreProcedures.EnrichDynamicModel;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.StoreProcedures.EnrichDynamivMetadata;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Host.Controllers
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.DynamicEnrichScript.RouteName)]
    [ApiController]
    public class EnrichDynamicScriptController : ControllerBase
    {
        private readonly IEnrichDynamicMetadata _context;
        protected List<string> _dbCollection;
        private IMongoDatabase database;


        public EnrichDynamicScriptController(IEnrichDynamicMetadata context)
        {
            _context = context;
            //  _dbCollection = _context.GetCollections();
        }
        [Route(ServiceConstants.DynamicEnrichScript.getFunctionTemplate)]
        [HttpGet]
        public async Task<ActionResult> GetFunctionTemplate()
        {
            return Ok(this._context.getFunctionTemplate());
        }
        //[HttpGet]
        //[Route("GetObject")]
        //public async Task<ActionResult<IEnumerable<Collection>>> GetObject(string user_id, string workspace_id, string client_id, string record)
        //{
        //    return Ok(this._context.GetObject(user_id, workspace_id, client_id, record));
        //}


        [Route(ServiceConstants.DynamicEnrichScript.saveEnrichScript)]
        [HttpPost]
        public async Task<ActionResult> SaveEnrichScript(EnrichDynamicModel collection)
        {
            var message = this._context.SaveEnrichScript(collection);
            return Ok(message);
        }
        // get object
        [Route(ServiceConstants.DynamicEnrichScript.getEnrichScript)]
        [HttpGet]
        public async Task<ActionResult> GetEnrichScript(string userId, string workspaceId, string clientId, string templateId)
        {
            return Ok(this._context.GetEnrichScript(userId, workspaceId, clientId, templateId));
        }
        //updating selected script
        [Route(ServiceConstants.DynamicEnrichScript.updateEnrichScript)]
        [HttpPut]
        public async Task<ActionResult> UpdateEnrichScript(EnrichDynamicModel Script, string _id)
        {
            return Ok(this._context.UpdateEnrichScript(Script, _id));
        }
        //Save EnrciScript using Grid

        [Route(ServiceConstants.DynamicEnrichScript.saveEnrichScriptByGrid)]
        [HttpPost]
        public async Task<ActionResult> SaveEnrichScriptByGrid(EnrichmentByGridModel collection)
        {
            var message = this._context.SaveEnrichScriptUsingGrid(collection);
            return Ok(message);
        }
        //Get EnrciScript for Grid
        [Route(ServiceConstants.DynamicEnrichScript.getEnrichScriptForGrid)]
        [HttpGet]
        public async Task<ActionResult> GetEnrichScriptForGrid(string userId, string workspaceId, string clientId, string templateId)
        {
            return Ok(this._context.GetEnrichScriptForGrid(userId, workspaceId, clientId, templateId));
        }
        // update Enrich script of Grid  
        [Route(ServiceConstants.DynamicEnrichScript.updateEnrichScriptOfGrid)]
        [HttpPut]
        public async Task<ActionResult> UpdateEnrichScriptOfGrid(EnrichmentByGridModel Script, string _id)
        {
            return Ok(this._context.UpdateEnrichScriptForGrid(Script, _id));
        }
        //Save EnrciScript using Grid2

        [Route(ServiceConstants.DynamicEnrichScript.saveEnrichScriptByGrid2)]
        [HttpPost]
        public async Task<ActionResult> SaveEnrichScriptByGrid2(EnrichmentByGridModel collection)
        {
            var message = this._context.SaveEnrichScriptUsingGrid2(collection);
            return Ok(message);
        }
        //Get EnrciScript for Grid2
        [Route(ServiceConstants.DynamicEnrichScript.getEnrichScriptForGrid2)]
        [HttpGet]
        public async Task<ActionResult> GetEnrichScriptForGrid2(string userId, string workspaceId, string clientId, string templateId)
        {
            return Ok(this._context.GetEnrichScriptForGrid2(userId, workspaceId, clientId, templateId));
        }
        // update Enrich script of Grid2  
        [Route(ServiceConstants.DynamicEnrichScript.updateEnrichScriptOfGrid2)]
        [HttpPut]
        public async Task<ActionResult> UpdateEnrichScriptOfGrid2(EnrichmentByGridModel Script, string _id)
        
        {
            return Ok(this._context.UpdateEnrichScriptForGrid2(Script, _id));
        }
    }
}
