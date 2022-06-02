using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.ChangeLog
{
    public class ChangeLogListModel
    {
        [Column("CLIENT_ID")]
        public int ClientId { get; set; }
        [Column("ACCOUNT_ID")]
        public int AccountId { get; set; }
        [Column("ACCOUNT_NAME")]
        public string AccountName { get; set; }
        [Column("WORKSPACE_ID")]
        public int WorkspaceId { get; set; }
        [Column("WORKSPACE_NAME")]
        public string WorkspaceName { get; set; }
        [Column("ACCESS_GRANTED")]
        public bool AccessGranted { get; set; }
        [Column("WORKSPACE_PARENT_NAME")]
        public string WorkspaceParentName { get; set; }
        [Column("STORAGE_URL")]
        public string StorageUrl { get; set; }
        [Column("DESTINATION_PRIMARY")]
        public string DestinationPrimery { get; set; }
        [Column("DESTINATION_PASSIVE")]
        public string DetinationPassive { get; set; }
        [Column("QUOTA_SIZE")]
        public int QuotaSize { get; set; }
        [Column("QUOTA_TYPE")]
        public string QuotaType { get; set; }
        [Column("QUOTA_USED")]
        public int QuotaUsed { get; set; }
    }
}
