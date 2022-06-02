using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Common.Dto
{
    public class TreeviewInputDto
    {
        public string userId { get; set; }
        public string clientId { get; set; }
        public string workspaceId { get; set; }
        public string ClientTime { get; set; }
        public string ClientDate { get; set; }
        public string ClientTimeZone { get; set; }
        public string TreeName { get; set; }
        public string ScriptId { get; set; }
    }
}
