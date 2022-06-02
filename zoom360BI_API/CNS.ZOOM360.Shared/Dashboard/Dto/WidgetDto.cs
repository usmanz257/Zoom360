using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
    public class WidgetDto
    {
        public  int Id { get; set; }
        public  string Name { get; set; }
        public  string Description { get; set; }

        [JsonIgnore]
        public string PropertiesJson { get; set; }
        public  string Type { get; set; }
        public  int PageId { get; set; }
        public int Cols { get; set; }
        public int Rows { get; set; }
        public int Y { get; set; }
        public int X { get; set; }

        public LayoutDto Layout { get; set; }

        [JsonIgnore]
        public QueryDto Query { get; set; }
        public ICollection<MeasureDto> Measure { get; set; }
        public ICollection<DimensionDto> Dimension { get; set; }
        public dynamic Chart { get; set; }
    }
}
