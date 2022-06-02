using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class Piechart
    {
        public Chart Chart { get; set; }
        public Title Title { get; set; }
        public Subtitle Subtitle { get; set; }
        public Tooltip Tooltip { get; set; }
        public PlotOptions PlotOptions { get; set; }
        public Legend Legend { get; set; }
        public Accessibility Accessibility { get; set; }
        public List<PieSeries> Series { get; set; }
       
    }
   

    public class PieSeries
    {
        public string Name { get; set; }
        public bool ColorByPoint { get; set; }
        public List<Datum> Data { get; set; }
    }
}
