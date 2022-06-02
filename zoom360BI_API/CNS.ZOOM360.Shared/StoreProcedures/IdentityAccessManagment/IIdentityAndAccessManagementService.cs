using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment.Dto;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment
{
   public interface IIdentityAndAccessManagementService
    {
        Task<string> SaveIdentityManagement(AccessLockingModel accessLockingModel);

        Task<List<DropdownList>> GetIAMDropDownList(string userId, string dropDownName);

        Task<DataTable> GetIdentityAndAccessManagment(GetIAMInputModel IAMInputModel);
    }
}
