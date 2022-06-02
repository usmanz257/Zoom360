using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
    public class MeasureDto
    {
        public  int Id { get; set; }
        public  string Name { get; set; }
        public  string Description { get; set; }
        public  string Type { get; set; }
        //public int value { get; set; }
        //public string dashStyle { get; set; }
        public  string Color { get; set; }
        public  bool IsEnabled { get; set; }
        public int? WidgetId { get; set; }
        public decimal Total { get; set; }

    }
}
