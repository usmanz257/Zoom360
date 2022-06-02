using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class UpdateSourceObjectGridModel
    {
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
        [Column("LAST_ACCESSED")]
        public string SERVER_INSERT_DATE { get; set; }
        [Column("OBJECT_IMAGE")]
        public string OBJECT_IMAGE { get; set; }

         


    }
}
