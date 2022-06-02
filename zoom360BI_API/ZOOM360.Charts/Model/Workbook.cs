using CNS.ZOOM360.Entities.StoreProcedures.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class Workbook
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public ICollection<Page> Pages { get; set; }

        public string USER_ID { get; set; }
        public string CLIENT_ID { get; set; }
        public string WORKSPACE_ID { get; set; }

        public string BSTATUS { get; set; }
    }
}
