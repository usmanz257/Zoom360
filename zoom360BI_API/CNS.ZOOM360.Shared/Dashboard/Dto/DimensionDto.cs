using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
    public class DimensionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public bool IsEnabled { get; set; }
        
    }
}
