using CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.DynamicGridStructure
{
    public interface IDynamicGridStructureService
    {
        public List<DataSourceListModel> GetSourceList(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel);
        public List<DataSourceListModel> GetSourceListColoumnText(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel);
        public List<DataSourceListModel> GetTemplateList(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel);
        public Task<List<DataSourceListModel>> GetTemplate(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel);
        public string SaveTemplateChildName(SaveTemplateModel saveTemplateinputModel);
        public string SaveTemplate(SaveTemplateModel saveTemplateinputModel);
    }
}
