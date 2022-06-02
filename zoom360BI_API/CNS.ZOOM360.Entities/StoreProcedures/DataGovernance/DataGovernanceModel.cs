using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DataGovernance
{
    public class DataGovernanceModel
    {
        [NotMapped]
        public string userId { get; set; }
        [NotMapped]
        public string workSpaceId { get; set; }
        [NotMapped]
        public string CLIENT_ID { get; set; }
        [Column("SCHEMA_MODE")]
        public string schemaMode { get; set; }
        [Column("CHILD_WORKSPACE_INHERITANCE")]
        public string childWorkspaceInheritance { get; set; }
        [Column("WORKSPACE_SHAREDATA")]
        public string workspaceShareData { get; set; }
        [Column("OUTOFFAPP_WEBSHAREDATA")]
        public string outOffAppWebShareData { get; set; }
        [Column("OUTOFFAPP_APISHAREDATA")]
        public string outOffApiShareData { get; set; }
        [Column("RAW_DATA_STAGGING")]
        public string rawDataStagging { get; set; }
        [Column("STAGGING_STORAGE_LOCATIONTYPE")]
        public string staggingStorageLocationType { get; set; }
        [Column("STAGGING_RETENTION_DAYS")]
        public string staggingRetentionDays { get; set; }
        [Column("ACTIVE_SOURCE_LOCATION")]
        public string activeSourceLocation { get; set; }
        [Column("DESTINATION_WORKSPACE")]
        public string destinationWorkspace { get; set; }
        [Column("ACTIVE_DESTINATION_LOCATION")]
        public string activeDestinationLocation { get; set; }
        [Column("PASSIVE_DESTINATION_LOCATION")]
        public string passiveDestinationLocation { get; set; }
        [Column("DATA_COLLECTING_TYPE")]
        public string dataCollectionType { get; set; }
        [Column("OVERRIDE_DATA_SNAPSHOT")]
        public bool overrideDataSnapshot { get; set; }
        [Column("DATA_STORAGE")]
        public string dataStorage { get; set; }
        [Column("DATA_DESTINATION")]
        public string dataDestination { get; set; }
        [Column("OVERRIDE_DATA_STORAGE")]
        public bool overrideDataStorage { get; set; }
        [Column("DESTINATION_RETENTION_DAYS")]
        public string destinationRetentionDays { get; set; }
        [Column("BSTATUS")]
        public string bStatus { get; set; }
        [NotMapped]
        public string ClientDate { get; set; }
        [NotMapped]
        public string ClientTime { get; set; }
        [NotMapped]
        public string ClientTimeZone { get; set; }
        [NotMapped]
        public string Remark1 { get; set; }
        [NotMapped]
        public string Remark2 { get; set; }
        [NotMapped]
        public string Remark3 { get; set; }
        [NotMapped]
        public string Remark4 { get; set; }
        [NotMapped]
        public string Flex1 { get; set; }
        [NotMapped]
        public string Flex2 { get; set; }
        [NotMapped]
        public string Flex3 { get; set; }
        [NotMapped]
        public string Flex4 { get; set; }
        [NotMapped]
        public string Flex5 { get; set; }
        [NotMapped]
        public string Flex6 { get; set; }
        [NotMapped]
        public string Flex7 { get; set; }
        [NotMapped]
        public string Flex8 { get; set; }
        [NotMapped]
        public string Flex9 { get; set; }
        [NotMapped]
        public string Flex10 { get; set; }
        [NotMapped]
        public string Flex11 { get; set; }
        [NotMapped]
        public string Flex12 { get; set; }
        [NotMapped]
        public string Flex13 { get; set; }
        [NotMapped]
        public string Flex14 { get; set; }
        [NotMapped]
        public string Flex15 { get; set; }
        [NotMapped]
        public string Flex16 { get; set; }

    }
}
