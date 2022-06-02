using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.TreeControlTemplate;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.TreeControlsTemplate
{
    public interface ITreeControlsTemplate
    {
        string SaveTemplateControlsScript(TreeTemplateDto treeTemplateDto, string _id);
        Task<string> GetTemplateControlsScript(string userId, string workspaceId, string clientId, string nodeId, string subMenuId);
        string SaveTreeStructure(TreeControlModel treeControlModel);
        public string SaveTemplateSubmenu(string userId, string workspaceId, string clientId,string  mainMenuID, string templateName);

        Task<List<TreeTemplateGrid>> GetTreeTemplateGrid(InputTreeTemplateGrid inputTreeTemplateGrid);
        //Task<string> SQLserverConnctionString(SQLConnectionCredentialModel sqlConnectionCredential);
        Task<TimelineWidgetTableDataModel> GetTreeTemplateQueryData(TreeTemplateQueryDTOModel treeTemplateQueryDTOModel);
        Task<DataTable> GetContentMappingTableData(TreeTemplateQueryModel contentMapping);
    }
}
