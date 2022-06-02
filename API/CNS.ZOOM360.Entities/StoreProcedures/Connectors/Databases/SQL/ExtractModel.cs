using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL
{
    public class ExtractModel
    {
        [Column("RAW_DATA")]
        public bool data_RAW_STATE { get; set; }
        [Column("DATE_LINKS")]
        public string date_LINK { get; set; }
        [NotMapped]
        public string date_LINK1 { get; set; }
        [Column("EXTRACT_PROCESS_RUNNING")]
        public string extract_PROCESS_RUNNING { get; set; }
        [Column("DATA_COLLECTION")]
        public string data_COLLECTION { get; set; }

        
            
            
            
            
    }
}
