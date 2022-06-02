using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement.Dto
{
   public class UserListInputModel
    {
        public string UserId { get; set; }
        public string WorkSpaceId { get; set; }
        public string Client_Id { get; set; }
    }
}
