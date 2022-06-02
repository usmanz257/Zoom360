using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Shared.StoreProcedures.Common.Dto;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.Common
{
    public interface ICommonDropdownListService
    {
        Task<List<DropdownList>> GetDropDownList(string userId, string dropDownName);
        Task<List<UAMDropdownListModel>> GetMultiSelectDropDown(string userId, string dropDownName,string subUserID);
        List<TreeDropDownParentModel> GetTreeDropDownParent(TreeDropDownInputModel treeDropDownInputModel);
        Task<List<TreeDropDownParentModel>> GetTreeDropDownChild(TreeDropDownInputModel treeDropDownInputModel);
        Task<List<DropDownWithCategoryModel>> GetDropDownListWithCategory(string userId, string dropDownName);
        Task<List<TreeControlModel>> TreeViewData(TreeviewInputDto treeDropDownInputModel);
    }
}
