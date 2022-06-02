using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class Widget
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string Type { get; set; }
        public virtual int PageId { get; set; }
        public virtual string Properties { get; set; }
        public Page Page { get; set; }
        public ICollection<Measure> Measure { get; set; }
        public ICollection<Dimension> Dimension { get; set; }
        public Layout Layout { get; set; }

        public virtual int QueryId { get; set; }
        public Query Query { get; set; }
    }
}
