using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class EntityObjectFieldsList
    {
        
        [Column("OBJECT_FIELD_ID")]
        public int OBJECT_FIELD_ID { get; set; }

        [Column("OBJECT_FIELD_NAME")]
        public string OBJECT_FIELD_NAME { get; set; }

        [Column("OBJECT_FIELD_TYPE")]
        public string OBJECT_FIELD_TYPE { get; set; }

        [Column("DISPLAY_NAME")]
        public string DISPLAY_NAME { get; set; }

        [Column("AGGREGATION_STATUS")]
        public string AGGREGATION_STATUS { get; set; }

        [Column("ISKEY_STATUS")]
        public string ISKEY_STATUS { get; set; }

        [Column("VISIBILITY_STATUS")]
        public string VISIBILITY_STATUS { get; set; }

        [Column("OBJECT_FIELD_IMAGE")]
        public string OBJECT_FIELD_IMAGE { get; set; }
         
    }
}
