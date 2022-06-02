using CNS.ZOOM360.Entities.StoreProcedures.EnrichDynamicModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace CNS.ZOOM360.Shared.StoreProcedures.EnrichDynamivMetadata
{
   public interface IEnrichDynamicMetadata
    {
        public string getFunctionTemplate();
        public string GetEnrichScript(string user_id, string workspace_id, string client_id, string record);
        Task<string> SaveEnrichScript(EnrichDynamicModel collection);
        public string WriteArray(object[] arr);
        public string UpdateEnrichScript(EnrichDynamicModel coll, string _id);
        //Enricment by Grid
        Task<string> SaveEnrichScriptUsingGrid(EnrichmentByGridModel collection);
        public string GetEnrichScriptForGrid(string userId, string workspaceId, string clientId, string _id);
        public string UpdateEnrichScriptForGrid(EnrichmentByGridModel coll, string _id);
        //Enrichment by Grid2
        Task<string> SaveEnrichScriptUsingGrid2(EnrichmentByGridModel collection);
        public string GetEnrichScriptForGrid2(string userId, string workspaceId, string clientId, string _id);
        public string UpdateEnrichScriptForGrid2(EnrichmentByGridModel coll, string _id);
    }
}
