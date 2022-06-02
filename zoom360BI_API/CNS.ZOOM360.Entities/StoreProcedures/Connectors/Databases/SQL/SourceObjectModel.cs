using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class SourceObjectModel
    {
        
        public string UserId { get; set; }
        public string WorkSpaceID { get; set; }
        public string ClientId { get; set; }
        public string WorkspaceName { get; set; }
        public string ObjectName { get; set; }
        public bool AccessGrant { get; set; }
        
    }
}
