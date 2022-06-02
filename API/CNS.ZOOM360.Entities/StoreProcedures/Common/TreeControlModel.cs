using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Common
{
   public class TreeControlModel
    {
        [NotMapped]
        public string userId { get; set; }
        [NotMapped]
        public string workspaceId { get; set; }
        [NotMapped]
        public string clientId { get; set; }
        [NotMapped]
        public string mainMenuid { get; set; }
        [NotMapped]
        public string subMenuId { get; set; }
        [NotMapped]
        public string scriptName { get; set; }
        [NotMapped]
        public bool scriptEnable { get; set; }
        [NotMapped]
        public string fileName { get; set; }

        [Column("SCRIPT_ID")]
        public string scriptId { get; set; }
        [Column("NODE_ID")]
        public string nodeId { get; set; }
        [Column("NODE_NAME")]
        public string nodeName { get; set; }
        [Column("PARENT_ID")]
        public string? parentId { get; set; }
        [Column("HAS_CHILD")]
        public bool? hasChild { get; set; }
        [Column("IS_EXPANDED")]
        public bool? isExpanded { get; set; }
        [Column("NODE_DESCRIPTION")]
        public string nodeDescription { get; set; }
    }
}
