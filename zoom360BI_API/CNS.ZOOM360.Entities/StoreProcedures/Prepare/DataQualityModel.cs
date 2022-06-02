using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
   public class DataQualityModel
    {
        [Column("FUNCTION_DISPLAY_NAME")]
        public string funcitionDisplayName { get; set; }
        [Column("FUNCTION_NAME")]
        public string functoinName { get; set; }
        [Column("FUNCTION_GROUP")]
        public string functiongroup { get; set; }
        
        [Column("FUNCTION_DETAILS")]
        public string functiondetail { get; set; }
        
        [Column("ENABLED")]
        public string enable { get; set; }
         
    }
}
