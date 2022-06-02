using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class EmailAuthenticationSourceAccount
    {
        public string UserId { get; set; }
        public string WorkspaceId { get; set; }
        public string ClientId { get; set; }
        public string Account_Id { get; set; }
        public string Email { get; set; }
        public string AccountAuthurization { get; set; }
        
    }
}
