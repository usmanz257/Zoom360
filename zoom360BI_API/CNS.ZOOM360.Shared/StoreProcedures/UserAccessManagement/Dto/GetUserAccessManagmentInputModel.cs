using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement.Dto
{
    public class GetUserAccessManagmentInputModel
    {
        public string userID { get; set; }
        public string? subUserId { get; set; }
        public string WorkSpaceId { get; set; }
        public string Client_Id { get; set; }
        public string ProcedureName { get; set; }
    }
}
