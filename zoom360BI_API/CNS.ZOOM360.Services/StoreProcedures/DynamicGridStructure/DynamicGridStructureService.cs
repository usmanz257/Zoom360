using CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.DynamicGridStructure;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.DynamicGridStructure
{
    public class DynamicGridStructureService: IDynamicGridStructureService
    {
        private readonly IRepositoryBase<DataSourceListModel> _dynamicSourceList;
        private readonly IRepositoryBase<ColumnHeaderTextModel> _dynamicSourceHeaderList;
        private readonly IRepositoryBase<TemplateListModel> _dynamicTemplateList;
        private readonly IRepositoryBase<TemplateModel> _dynamicTemplate;
        private readonly IRepositoryBase<SaveTemplateModel> _saveTemplateChild;
        public DynamicGridStructureService(
            IRepositoryBase<DataSourceListModel> dynamicSourceList,
            IRepositoryBase<ColumnHeaderTextModel> dynamicSourceHeaderList,
            IRepositoryBase<TemplateListModel> dynamicTemplateList,
             IRepositoryBase<TemplateModel> dynamicTemplate,
             IRepositoryBase<SaveTemplateModel> saveTemplateChild)
        {
            _dynamicSourceList = dynamicSourceList;
            _dynamicSourceHeaderList = dynamicSourceHeaderList;
            _dynamicTemplateList = dynamicTemplateList;
            _dynamicTemplate = dynamicTemplate;
            _saveTemplateChild = saveTemplateChild;
        }
        public List<DataSourceListModel> GetSourceList(string UserId,string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@SUB_USER_ID", subUserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@PARENT_ID", string.IsNullOrEmpty(ParentId) ? (object)DBNull.Value: ParentId),
            //new SqlParameter("@CHILD_ID", ChildId),
            new SqlParameter("@TREE_LEVEL", TreeLevel),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
            string spQuery = StoreProcedureConstants.Sp_GetAnalyzeParentList + " @USER_ID,@SUB_USER_ID,@WORKSPACE_ID,@CLIENT_ID,@PARENT_ID,@TREE_LEVEL" +
                ", @V_MESSAGE OUTPUT";
            List<DataSourceListModel> SourceList = _dynamicSourceList.ExecuteQuery(spQuery, parameters).ToList();
            return SourceList;
        }
        public List<DataSourceListModel> GetSourceListColoumnText(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel)
        {
            List<DataSourceListModel> SourceList;
            SourceList = GetSourceList(UserId,subUserId,WorkspaceId, Client_Id,ParentId, ChildId, TreeLevel);

            int i = 0;
            foreach (var item in SourceList)
            {
             item.columntext = new List<ColumnHeaderTextModel>();
             object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@SUB_USER_ID", subUserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@PARENT_ID", item.value),
            //new SqlParameter("@CHILD_ID", ChildId),
            new SqlParameter("@TREE_LEVEL", "1" ),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
                string spQuery = StoreProcedureConstants.Sp_GetAnalyzeParentList + " @USER_ID,@SUB_USER_ID,@WORKSPACE_ID,@CLIENT_ID,@PARENT_ID,@TREE_LEVEL" +
                  ", @V_MESSAGE OUTPUT";

                item.columntext = _dynamicSourceHeaderList.ExecuteQuery(spQuery, parameters).ToList();
                i++;
            }
            return SourceList;
        }
        public List<DataSourceListModel> GetTemplateList(string UserId, string subUserId, string WorkspaceId,  string Client_Id, string ParentId,string ChildId, string TreeLevel)
        {
            List<DataSourceListModel> SourceList;
            SourceList = GetSourceListColoumnText(UserId, subUserId, WorkspaceId, Client_Id, ParentId, ChildId, TreeLevel);
            int i = 0;
            foreach (var item in SourceList)
            {
            item.templateDetail = new List<TemplateListModel>();
            object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@SUB_USER_ID", subUserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@PARENT_ID", item.value),
            new SqlParameter("@CHILD_ID",string.IsNullOrEmpty(ChildId) ? (object)DBNull.Value: ChildId),
            new SqlParameter("@TREE_LEVEL", "0" ),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
                string spQuery = StoreProcedureConstants.Sp_GetAnalyzeChildList + " @USER_ID,@SUB_USER_ID,@WORKSPACE_ID,@CLIENT_ID,@PARENT_ID,@CHILD_ID,@TREE_LEVEL" +
                  ", @V_MESSAGE OUTPUT";
                item.templateDetail = _dynamicTemplateList.ExecuteQuery(spQuery, parameters).ToList();
                i++;
            }
            return SourceList;
        }
        public async Task<List<DataSourceListModel>> GetTemplate(string UserId, string subUserId, string WorkspaceId, string Client_Id, string ParentId, string ChildId, string TreeLevel)
        {
            List<DataSourceListModel> SourceList;
            List<TemplateModel> template = new List<TemplateModel>();
           SourceList = GetTemplateList(UserId, subUserId, WorkspaceId, Client_Id, ParentId, ChildId, TreeLevel);
            int i = 0;
            foreach (var item in SourceList)
            {
                //item.templateDetail = new List<TemplateListModel>();
                int count = item.templateDetail.Count;
                for (int j = 0; j < count; j++) { 
                object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@SUB_USER_ID", subUserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@PARENT_ID",""+item.value),
            new SqlParameter("@CHILD_ID",""+ item.templateDetail[j].value),
            new SqlParameter("@TREE_LEVEL", "1"),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
                string spQuery = StoreProcedureConstants.Sp_GetAnalyzeChildList + " @USER_ID, @SUB_USER_ID, @WORKSPACE_ID, @CLIENT_ID, @PARENT_ID, @CHILD_ID, @TREE_LEVEL" +
                  ", @V_MESSAGE OUTPUT";
               template = _dynamicTemplate.ExecuteQuery(spQuery, parameters).ToList();
               item.templateDetail[j].template = template;
                }
                i++;
            }
            return SourceList;
        }
        public string SaveTemplateChildName(SaveTemplateModel saveTemplateinputModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", saveTemplateinputModel.userId),
            new SqlParameter("@SUB_USER_ID", saveTemplateinputModel.subUserId),
            new SqlParameter("@WORKSPACE_ID", saveTemplateinputModel.workSpaceId),
            new SqlParameter("@CLIENT_ID", saveTemplateinputModel.clientId),
            new SqlParameter("@PARENT_ID ", saveTemplateinputModel.parentId),
            new SqlParameter("@CHILD_NAME", saveTemplateinputModel.childName),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
            string spQuery = StoreProcedureConstants.Sp_SaveTemplateChildname + " @USER_ID,@SUB_USER_ID,@WORKSPACE_ID,@CLIENT_ID,@PARENT_ID,@CHILD_NAME" +
                ", @V_MESSAGE OUTPUT";
            return _saveTemplateChild.ExecuteCommand(spQuery, parameters);
            
        }
        public string SaveTemplate(SaveTemplateModel saveTemplateinputModel)
        {
            string resultp = "";
            string childId="";
            string message="";
            resultp = SaveTemplateChildName(saveTemplateinputModel);
            string[] values = resultp.Split(',').Select(sValue => sValue.Trim()).ToArray();
            if (values.Length >= 2) { 
            childId = values[0];
            message = values[1];
            }
            foreach (var item in saveTemplateinputModel.template) { 
            object[] parameters = {
            new SqlParameter("@USER_ID", saveTemplateinputModel.userId),
            new SqlParameter("@SUB_USER_ID", saveTemplateinputModel.subUserId),
            new SqlParameter("@WORKSPACE_ID", saveTemplateinputModel.workSpaceId),
            new SqlParameter("@CLIENT_ID", saveTemplateinputModel.clientId),
            new SqlParameter("@PARENT_ID ", saveTemplateinputModel.parentId),
            new SqlParameter("@CHILD_ID", childId),
            new SqlParameter("@TEMPLATE_ID",string.IsNullOrEmpty(saveTemplateinputModel.templateId) ? (object)DBNull.Value: saveTemplateinputModel.templateId),        
            new SqlParameter("@COL_ID", item.colId),
            new SqlParameter("@WIDTH", item.width),
            new SqlParameter("@HIDE", item.hide),
            new SqlParameter("@PINNED",string.IsNullOrEmpty(item.pinned) ? (object)DBNull.Value: item.pinned),
            new SqlParameter("@SORT",string.IsNullOrEmpty(item.sort) ? (object)DBNull.Value: item.sort),
            new SqlParameter("@SORT_INDEX",SafeDbObject(item.sortIndex)),
            new SqlParameter("@AGG_FUNC",string.IsNullOrEmpty(item.aggFunc) ? (object)DBNull.Value: item.aggFunc),
            new SqlParameter("@ROW_GROUP", SafeDbObject(item.rowGroup)),
            new SqlParameter("@ROW_GROUP_INDEX", SafeDbObject(item.rowGroupIndex)),
            new SqlParameter("@PIVOT_DETAILS", SafeDbObject(item.pivot)),
            new SqlParameter("@PIVOT_INDEX",SafeDbObject(item.pivotIndex)),
            new SqlParameter("@FLEX",string.IsNullOrEmpty(item.flex) ? (object)DBNull.Value: item.flex),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
            string spQuery = StoreProcedureConstants.Sp_SaveChildTemplateTemplateData + " @USER_ID,@SUB_USER_ID,@WORKSPACE_ID,@CLIENT_ID,@PARENT_ID,@CHILD_ID, @TEMPLATE_ID," +
                " @COL_ID, @WIDTH, @HIDE, @PINNED, @SORT, @SORT_INDEX, @AGG_FUNC, @ROW_GROUP, @ROW_GROUP_INDEX,@PIVOT_DETAILS, @PIVOT_INDEX, @FLEX" +
                ", @V_MESSAGE OUTPUT";
            string result = _saveTemplateChild.ExecuteCommand(spQuery, parameters);
                message = result;
            }
            return message;
        }
        public static Object SafeDbObject(Object input)
        {
            if (input == null)
            {
                return DBNull.Value;
            }
            else
            {
                return input;
            }
        }
    }
}

