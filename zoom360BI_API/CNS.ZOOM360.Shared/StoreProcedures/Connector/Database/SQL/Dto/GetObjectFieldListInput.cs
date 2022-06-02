using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto
{
    public class GetObjectFieldListInput
    {
        public string UserId { get; set; }
        public string WorkspaceId { get; set; }
        public string ClientId { get; set; }
        public string ConnectorId { get; set; }
        public string AccountId { get; set; }
        public string databasename { get; set; }
        public string ObjectName { get; set; }
       

           }
}
