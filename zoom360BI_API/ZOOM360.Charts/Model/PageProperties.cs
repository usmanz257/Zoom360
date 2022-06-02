using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class PageProperties
    {
        public virtual int Id { get; set; }
        public virtual string DefualtProperties { get; set; }
        public virtual string ExtendedProperties { get; set; }
        public virtual int PageId { get; set; }
        public Page Page { get; set; }
    }
}
