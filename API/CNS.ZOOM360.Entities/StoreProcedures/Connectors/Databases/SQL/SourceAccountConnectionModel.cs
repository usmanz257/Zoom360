using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class SourceAccountConnectionModel
    {
        public string Connector_ID { get; set; }
        public string UserId { get; set; }
        public string WorkspaceId { get; set; }
        public string ClientId { get; set; }
        public string Account_Id { get; set; }
        public string HostName { get; set; }
        public object FieldValue { get; set; }
        
    }
}
