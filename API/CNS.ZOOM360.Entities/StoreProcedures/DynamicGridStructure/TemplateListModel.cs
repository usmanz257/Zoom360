using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure
{
    public class TemplateListModel
    {
        [Column("value")]
        public string value { get; set; }

        [Column("text")]
        public string text { get; set; }
        [NotMapped]
        public List<TemplateModel> template { get; set; }
    }
}
