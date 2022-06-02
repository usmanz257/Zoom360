using CNS.ZOOM360.Entities.StoreProcedures.UserAccessManagment;
using CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement.Dto;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement
{
   public interface IUserAccessManagementService
    {
        Task<string> SaveUserAccessManagementSetup(SaveUserAccessManagementModel saveUserAccessManagementModel);
        List<UserListModel> GetUserlist(UserListInputModel userListInputModel);
        Task<DataTable> GetUserAccessManagment(GetUserAccessManagmentInputModel InputModel);
    }
}
