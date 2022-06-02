using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.Common;
using CNS.ZOOM360.Shared.StoreProcedures.Common.Dto;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.Common
{
    public class CommonDropdownListService : ICommonDropdownListService
    {
        private readonly IRepositoryBase<DropdownList> _dropdownListRepository;
        private readonly IRepositoryBase<UAMDropdownListModel> _UAMdropdownListRepository;
        private readonly IRepositoryBase<TreeDropDownParentModel> _treedropdownListRepository;
        private readonly IRepositoryBase<TreeDropDownChildModel> _treedropdownChildRepository;
        private readonly IRepositoryBase<DropDownWithCategoryModel> _UAMdropdownListCategoryRepository;
        private readonly IRepositoryBase<TreeControlModel> _TreeControlRepository; 
        public CommonDropdownListService(IRepositoryBase<DropdownList> dropdownListRepository,
            IRepositoryBase<UAMDropdownListModel> UAMdropdownListRepository,
            IRepositoryBase<TreeDropDownParentModel> treedropdownListRepository,
            IRepositoryBase<TreeDropDownChildModel> treedropdownChildRepository,
            IRepositoryBase<DropDownWithCategoryModel> UAMdropdownListCategoryRepository,
            IRepositoryBase<TreeControlModel> TreeControlRepository) {
            _dropdownListRepository = dropdownListRepository;
            _UAMdropdownListRepository = UAMdropdownListRepository;
            _treedropdownListRepository = treedropdownListRepository;
            _treedropdownChildRepository = treedropdownChildRepository;
            _UAMdropdownListCategoryRepository = UAMdropdownListCategoryRepository;
            _TreeControlRepository = TreeControlRepository;
        }

        public async Task<List<DropdownList>> GetDropDownList(string userId, string dropDownName)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID",userId),
            new SqlParameter("@DROPDOWN_TYPE",dropDownName),
            new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetDropdownList + " @USER_ID, @DROPDOWN_TYPE, @V_MESSAGE OUTPUT";
            List<DropdownList> dropdownLists = _dropdownListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return dropdownLists;
        }
        public async Task<List<UAMDropdownListModel>> GetMultiSelectDropDown(string userId, string dropDownName, string subUserID)
        {
            if (subUserID == "null")
            {
                subUserID = null;
            }
            object[] parameters = {
            new SqlParameter("@USER_ID",userId),
            new SqlParameter("@SUB_USER_ID",string.IsNullOrEmpty(subUserID) ? (object)DBNull.Value : subUserID),
            new SqlParameter("@DROPDOWN_TYPE",dropDownName),
            new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output }
            };

            string spQuery = StoreProcedureConstants.Sp_GetUAMDropdown + " @USER_ID, @SUB_USER_ID, @DROPDOWN_TYPE, @V_MESSAGE OUTPUT";
            List<UAMDropdownListModel> dropdownLists = _UAMdropdownListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return dropdownLists;
        }
        public List<TreeDropDownParentModel> GetTreeDropDownParent(TreeDropDownInputModel treeDropDownInputModel)
        {
            if (treeDropDownInputModel.subUserId == "null")
            {
                treeDropDownInputModel.subUserId = null;
            }
            object[] parameters = {
            new SqlParameter("@USER_ID", treeDropDownInputModel.UserId),
            new SqlParameter("@SUB_USER_ID", string.IsNullOrEmpty(treeDropDownInputModel.subUserId) ? (object)DBNull.Value : treeDropDownInputModel.subUserId),
            new SqlParameter("@CLIENT_ID", treeDropDownInputModel.ClientId),
             new SqlParameter("@WORKSPACE_ID", treeDropDownInputModel.WorkspaceId),
            new SqlParameter("@DROPDOWN_TYPE", treeDropDownInputModel.DropDownType),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
            string spQuery = StoreProcedureConstants.Sp_GetTreeDropDownParentList + " @USER_ID,@SUB_USER_ID,@CLIENT_ID,@WORKSPACE_ID,@DROPDOWN_TYPE " +
                ", @V_MESSAGE OUTPUT";
            List<TreeDropDownParentModel> subMenuSectionlist = _treedropdownListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return subMenuSectionlist;

        }
        public async Task<List<TreeDropDownParentModel>> GetTreeDropDownChild(TreeDropDownInputModel treeDropDownInputModel)
        {
            List<TreeDropDownParentModel> submenusectionList;
            //List<TreeDropDownChildModel> submenusectionList;

            submenusectionList = GetTreeDropDownParent(treeDropDownInputModel);

            int i = 0;
            foreach (var item in submenusectionList)
            {
                item.TreeDropDownChildItems = new List<TreeDropDownChildModel>();
                object[] parameters = {
                    new SqlParameter("@USER_ID", treeDropDownInputModel.UserId),
                    new SqlParameter("@SUB_USER_ID", string.IsNullOrEmpty(treeDropDownInputModel.subUserId) ? (object)DBNull.Value : treeDropDownInputModel.subUserId),
                    new SqlParameter("@CLIENT_ID", treeDropDownInputModel.ClientId),
                    new SqlParameter("@WORKSPACE_ID", treeDropDownInputModel.WorkspaceId),
                    new SqlParameter("@DROPDOWN_TYPE", treeDropDownInputModel.DropDownType),
                    new SqlParameter("@MAIN_MENU_ID", item.DropdownValue),
                    new SqlParameter("@TREE_LEVEL",'0'),
                    new SqlParameter("@TREE_NODE", '0'),
                    new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
             };
                string spQuery = StoreProcedureConstants.Sp_GetTreeDropDownChildList + " @USER_ID,@SUB_USER_ID,@CLIENT_ID,@WORKSPACE_ID,@DROPDOWN_TYPE,@MAIN_MENU_ID,@TREE_LEVEL,@TREE_NODE " +
                 ", @V_MESSAGE OUTPUT";

                item.TreeDropDownChildItems = _treedropdownChildRepository.ExecuteQuery(spQuery, parameters).ToList();
                i++;
            }
            return submenusectionList;
        }
        public async Task<List<DropDownWithCategoryModel>> GetDropDownListWithCategory(string userId, string dropDownName)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID",userId),
            new SqlParameter("@DROPDOWN_TYPE",dropDownName),
            new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetFunctionList + " @USER_ID, @DROPDOWN_TYPE, @V_MESSAGE OUTPUT";
            List<DropDownWithCategoryModel> dropdownLists = _UAMdropdownListCategoryRepository.ExecuteQuery(spQuery, parameters).ToList();
            return dropdownLists;
        }
        public async Task<List<TreeControlModel>> TreeViewData(TreeviewInputDto treeDropDownInputModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID",treeDropDownInputModel.userId),
            new SqlParameter("@WORKSPACE_ID",treeDropDownInputModel.workspaceId),
            new SqlParameter("@CLIENT_ID",treeDropDownInputModel.clientId),
            new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(treeDropDownInputModel.ClientTime) ? (object)DBNull.Value :treeDropDownInputModel.ClientTime),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(treeDropDownInputModel.ClientDate) ? (object)DBNull.Value :treeDropDownInputModel.ClientDate),
            new SqlParameter("@CLIENT_TIMEZONE",string.IsNullOrEmpty(treeDropDownInputModel.ClientTimeZone) ? (object)DBNull.Value :treeDropDownInputModel.ClientTimeZone),
            new SqlParameter("@TREE_NAME",(object)DBNull.Value),
            new SqlParameter("@SCRIPT_ID",treeDropDownInputModel.ScriptId),
            new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GetRollUpTree + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID,"+
                "@CLIENT_TIME,@CLIENT_DATE,@CLIENT_TIMEZONE,@TREE_NAME,@SCRIPT_ID, @V_MESSAGE OUTPUT";
            List<TreeControlModel> dropdownLists = _TreeControlRepository.ExecuteQuery(spQuery, parameters).ToList();
            return dropdownLists;
        }
    }
}
