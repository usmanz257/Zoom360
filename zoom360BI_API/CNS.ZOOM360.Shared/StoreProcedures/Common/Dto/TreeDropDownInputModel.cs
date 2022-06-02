using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Workspace.Dto
{
   public class TreeDropDownInputModel
    {
        public string UserId { get; set; }
        public string subUserId { get; set; }
        public string ClientId { get; set; }
        public string WorkspaceId { get; set; }
        public string DropDownType { get; set; }
        public string TreeLevel { get; set; }
        public string TreeNode { get; set; }
    }
}
