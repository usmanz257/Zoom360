using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
    public class QueryDto
    {
        public int Id { get; set; }
        public string Sql { get; set; }
        public string Description { get; set; }
    }
}
