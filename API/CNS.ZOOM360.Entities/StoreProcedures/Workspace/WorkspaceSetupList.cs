using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Workspace
{
    public class WorkspaceSetupList
    {
        [Column("WORKSPACE_ID")]
        public string workspaceId { get; set; }
        [Column("WORKSPACE_NAME")]
        public string workspaceName { get; set; }
        [Column("DISPLAY_NAME")]
        public string displayName { get; set; }
        [Column("PARENT_WORKSPACE")]
        public string parentWorkspace { get; set; }
        [Column("CHILD_APPLY_AND_ENFORCE")]
        public string childApplyandEnforce { get; set; }
        [Column("EXCLUDE_CHILD_WORKSPACE")]
        public bool excludeChildWorkspace { get; set; }
        [Column("BSTATUS")]
        public string bStatus { get; set; }
    }
}
