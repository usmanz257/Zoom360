using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class GEtSourceObjectList
    {
        [NotMapped]
        public string UserId { get; set; }
        [NotMapped]
        public int WORKSPACE_ID { get; set; }
        [NotMapped]
        public int CLIENT_ID { get; set; }
        [NotMapped]
        public int CONNECTOR_ID { get; set; }
        [Column("OBJECT_ID")]
        public int OBJECT_ID { get; set; }
        [Column("OBJECT_NAME")]
        public string OBJECT_NAME { get; set; }
        [Column("OBJECT_TYPE")]
        public string OBJECT_TYPE { get; set; }
        [Column("DISPLAY_NAME")]
        public string DISPLAY_NAME { get; set; }
        [Column("OBJECT_VISIBILITY")]
        public string OBJECT_VISIBILITY { get; set; }
        [Column("OBJECT_IMAGE")]
        public string OBJECT_IMAGE { get; set; }

        [NotMapped]
        public string APPEARANCE_LOGO { get; set; }
        [NotMapped]
        public string APPEARANCE_COLOR { get; set; }
        [NotMapped]
        public string USER_NAME_INSERT { get; set; }
        [NotMapped]
        public string USER_NAME_UPDATE { get; set; }
        [Column("SERVER_INSERT_DATE")]
        public string SERVER_INSERT_DATE { get; set; }
        [NotMapped]
        public string SERVER_INSERT_TIME { get; set; }
        [NotMapped]
        public string SERVER_INSERT_TIME_ZONE { get; set; }
        [NotMapped]
        public string SERVER_UPDATE_DATE { get; set; }
        [NotMapped]
        public string SERVER_UPDATE_TIME { get; set; }
        [NotMapped]
        public string SERVER_UPDATE_TIME_ZONE { get; set; }
        [NotMapped]
        public string CLIENT_INSERT_DATE { get; set; }
        [NotMapped]
        public string CLIENT_INSERT_TIME { get; set; }
        [NotMapped]
        public string CLIENT_INSERT_TIME_ZONE { get; set; }
        [NotMapped]
        public string CLIENT_UPDATE_DATE { get; set; }
        [NotMapped]
        public string CLIENT_UPDATE_TIME { get; set; }
        [NotMapped]
        public string CLIENT_UPDATE_TIME_ZONE { get; set; }
        [NotMapped]
        public string BSTATUS { get; set; }
        [NotMapped]
        public string BDELETE { get; set; }
        [NotMapped]
        public string BMAP { get; set; }
        [NotMapped]
        public string REMARKS_1 { get; set; }
        [NotMapped]
        public string REMARKS_2 { get; set; }
        [NotMapped]
        public string REMARKS_3 { get; set; }
        [NotMapped]
        public string REMARKS_4 { get; set; }
        [NotMapped]
        public string FLEX_1 { get; set; }
        [NotMapped]
        public string FLEX_2 { get; set; }
        [NotMapped]
        public string FLEX_3 { get; set; }
        [NotMapped]
        public string FLEX_4 { get; set; }
        [NotMapped]
        public string FLEX_5 { get; set; }
        [NotMapped]
        public string FLEX_6 { get; set; }
        [NotMapped]
        public string FLEX_7 { get; set; }
        [NotMapped]
        public string FLEX_8 { get; set; }
        [NotMapped]
        public string FLEX_9 { get; set; }
        [NotMapped]
        public string FLEX_10 { get; set; }
        [NotMapped]
        public string FLEX_11 { get; set; }
        [NotMapped]
        public string FLEX_12 { get; set; }
        [NotMapped]
        public string FLEX_13 { get; set; }
        [NotMapped]
        public string FLEX_14 { get; set; }
        [NotMapped]
        public string FLEX_15 { get; set; }
        [NotMapped]
        public string FLEX_16 { get; set; }


    }
}
