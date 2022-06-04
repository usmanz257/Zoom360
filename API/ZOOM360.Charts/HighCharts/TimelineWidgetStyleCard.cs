using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
   public class TimelineWidgetStyleCard
    {
        public TimelineWidgetStyleCard()
        {
            Dimensions = new List<object>();
            Measures = new List<object>();
        }
        public string Type { get; set; }
        public string IconImg { get; set; }
        public List<object> Dimensions { get; set; }
        public List<object> Measures { get; set; }
        public string data { get; set; }

    }
}
