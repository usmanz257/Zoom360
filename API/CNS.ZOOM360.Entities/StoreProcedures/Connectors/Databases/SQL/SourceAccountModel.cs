using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class SourceAccountModel
    {
        public string UserId { get; set; }
        public string WorkspaceId { get; set; }
        public string ClientId { get; set; }
        public string WorkspaceName { get; set; }
        public string Account_Id { get; set; }
        public string ConnectorId { get; set; }
        public string DisplayName { get; set; }
        public bool EnableStatus { get; set; }
        public string visibilitystatue { get; set; }
        public string comments { get; set; }
        public string spComments { get; set; }


    }
}
