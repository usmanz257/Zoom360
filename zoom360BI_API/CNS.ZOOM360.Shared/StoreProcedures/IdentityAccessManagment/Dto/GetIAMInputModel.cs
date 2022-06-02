using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment.Dto
{
    public class GetIAMInputModel
    {
        public string userID { get; set; }
        public string WorkSpaceId { get; set; }
        public string Client_Id { get; set; }
        public string ProcedureName { get; set; }
    }
}
