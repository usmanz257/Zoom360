using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
   public class ObjectListModelForLookupInsert
    {
        [Column("OBJECT_FIELD_ID")]
        public int objectfieldid { get; set; }
        [Column("OBJECT_FIELD_NAME")]
        public string objectfieldname { get; set; }
        
    }
}
