using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class MianMenuModel
    {
        public string clientId { get; set; }

        public string workspaceId { get; set; }
        public string mainManuId { get; set; }
        public string mainMenuName { get; set; }
        public string url { get; set; }
    }
}
