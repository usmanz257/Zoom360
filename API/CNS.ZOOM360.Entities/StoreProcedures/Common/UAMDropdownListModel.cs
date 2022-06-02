using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Common
{
   public class UAMDropdownListModel
    {
       

            [Column("DROPDOWN_VALUE")]
            public string DropdownValue { get; set; }

            [Column("DROPDOWN_TEXT")]
            public string DropdownText { get; set; }
            [Column("SELECTED")]
            public bool? Selected { get; set; }

        
    }
}
