using CNS.ZOOM360.Entities.StoreProcedures.DynamicMenu;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.DynamicMenu
{
    public interface IDynamicMenuItemService
    {
        Task<List<MainMenuModel>> GetMenulist(string UserId,string SubUserId, string WorkspaceId, string Client_Id,string Mode_Id);
        List<SubMenusectionModel> GetSubMenuSection(string UserId, string SubUserId, string WorkspaceId, string Client_Id, string MainMenuID, string TreeLevel, string TreeNode);
        Task<List<SubMenusectionModel>> GetSubMenuSectionItems(string UserId, string SubUserId, string WorkspaceId, string Client_Id, string MainMenuID, string TreeLevel, string TreeNode);
    }
}
