using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
   public  class SourceTableListModel
    {
        [Column("DISPLAY_NAME")]
        public string displayName { get; set; }
        [Column("OBJECT_NAME")]
        public string objectName { get; set; }
    }
}
