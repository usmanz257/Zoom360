using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class FiltersQuery
    {
      public string pageId { get; set; }
      public List<FiltersSource> filterValues { get; set; }
    }
}
