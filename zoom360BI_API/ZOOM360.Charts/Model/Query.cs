using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
   public class Query
    {
        public virtual int Id { get; set; }
        public string Sql { get; set; }
        public string Description { get; set; }
        public ICollection<Widget> Widgets { get; set; }
    }
}
