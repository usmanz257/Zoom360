using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto
{
    public class UpdateSourceObjectInputs
    {
        public string UserId { get; set; }
        public string WorkspaceId { get; set; }
        public string ClientId { get; set; }
        public string ConnectorId { get; set; }
        public string objectname { get; set; }
        public string DisplayName { get; set; }
        public string VisibilityStatus { get; set; }
        
    }
}
