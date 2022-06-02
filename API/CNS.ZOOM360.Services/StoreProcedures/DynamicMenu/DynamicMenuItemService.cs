using CNS.ZOOM360.Entities.StoreProcedures.DynamicMenu;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.DynamicMenu;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.DynamicMenu
{
    public class DynamicMenuItemService: IDynamicMenuItemService
    {
        private readonly IRepositoryBase<MainMenuModel> _mainMenuRepository;
        private readonly IRepositoryBase<SubMenuSectionItemsModel> _subMenuSectionItemsRepository;
        private readonly IRepositoryBase<SubMenusectionModel> _subMenusectionRepository;
        public DynamicMenuItemService(IRepositoryBase<MainMenuModel> mainMenuRepository,
            IRepositoryBase<SubMenuSectionItemsModel> subMenuSectionItemsRepository,
            IRepositoryBase<SubMenusectionModel> subMenusectionRepository
            ) {
            _mainMenuRepository = mainMenuRepository;
            _subMenuSectionItemsRepository = subMenuSectionItemsRepository;
            _subMenusectionRepository = subMenusectionRepository;
        }


        public async Task<List<MainMenuModel>> GetMenulist(string UserId, string SubUserId, string WorkspaceId, string Client_Id,string Mode_Id)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
            new SqlParameter("@SUB_USER_ID",(object)DBNull.Value),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@MODE_ID", Mode_Id),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
            string spQuery = StoreProcedureConstants.Sp_GetMainMenuList + " @USER_ID,@SUB_USER_ID,@CLIENT_ID, @WORKSPACE_ID, @MODE_ID" +
                ", @V_MESSAGE OUTPUT";

            List<MainMenuModel> menulist = _mainMenuRepository.ExecuteQuery(spQuery, parameters).ToList();
            return menulist;
        }
        public List<SubMenusectionModel> GetSubMenuSection(string UserId, string SubUserId, string WorkspaceId, string Client_Id, string MainMenuID, string TreeLevel, string TreeNode)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
             new SqlParameter("@SUB_USER_ID",string.IsNullOrEmpty(SubUserId) ? (object)DBNull.Value: SubUserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@MAIN_MENU_ID", MainMenuID),
            new SqlParameter("@TREE_LEVEL", TreeLevel),
            new SqlParameter("@TREE_NODE", TreeNode),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };

            string spQuery = StoreProcedureConstants.Sp_GetSubMenuList + " @USER_ID,@SUB_USER_ID,@CLIENT_ID,@WORKSPACE_ID,@MAIN_MENU_ID,@TREE_LEVEL,@TREE_NODE" +
                ", @V_MESSAGE OUTPUT";

            List<SubMenusectionModel> subMenuSectionlist = _subMenusectionRepository.ExecuteQuery(spQuery, parameters).ToList();
            return subMenuSectionlist;
        }
        public async Task<List<SubMenusectionModel>> GetSubMenuSectionItems(string UserId, string SubUserId, string WorkspaceId, string Client_Id, string MainMenuID, string TreeLevel, string TreeNode)
        {

            List<SubMenusectionModel> submenusectionList;
            
            submenusectionList = GetSubMenuSection(UserId, SubUserId, WorkspaceId, Client_Id, MainMenuID, TreeLevel, TreeNode);

            int i = 0;
            foreach (var item in submenusectionList)
            {
                item.SubmenuSectionitems = new List<SubMenuSectionItemsModel>();
                object[] parameters = {
            new SqlParameter("@USER_ID", UserId),
             new SqlParameter("@SUB_USER_ID",string.IsNullOrEmpty(SubUserId) ? (object)DBNull.Value: SubUserId),
            new SqlParameter("@WORKSPACE_ID", WorkspaceId),
            new SqlParameter("@CLIENT_ID", Client_Id),
            new SqlParameter("@MAIN_MENU_ID", MainMenuID),
            new SqlParameter("@TREE_LEVEL", TreeLevel){Value = 1 },
            new SqlParameter("@TREE_NODE", TreeNode){ Value = i + 1 },
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output}
        };
                string spQuery = StoreProcedureConstants.Sp_GetSubMenuList + " @USER_ID,@SUB_USER_ID,@CLIENT_ID,@WORKSPACE_ID,@MAIN_MENU_ID,@TREE_LEVEL,@TREE_NODE" +
                ", @V_MESSAGE OUTPUT";
                item.SubmenuSectionitems = _subMenuSectionItemsRepository.ExecuteQuery(spQuery, parameters).ToList();
                i++;
            }
            return submenusectionList;
        }
    }
}
