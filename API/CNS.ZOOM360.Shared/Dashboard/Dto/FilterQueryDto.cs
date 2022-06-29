using System;
using System.Collections.Generic;
using System.Text;
using ZOOM360.Charts.Model;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
    public class FilterQueryDto
    {
        public int pageId { get; set; }
        public List<ColumnValue> filterValues { get; set; }
    }
}
