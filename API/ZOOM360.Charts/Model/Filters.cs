using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class Filters
    {
        [Key]
        public virtual int filterId { get; set; }
        public virtual int pageId { get; set; }
        public virtual string query { get; set; }
        public virtual string displayName { get; set; }
        public virtual string columnName { get; set; }
        public virtual bool isActive { get; set; }
        [NotMapped]
        public List<FiltersSource> filterValues { get; set; }
    }
}
