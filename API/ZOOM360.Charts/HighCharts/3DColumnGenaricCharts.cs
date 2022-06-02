using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class _3DColumnGenaricCharts
    {
        public _3DColumnGenaricCharts()
        {
            Series = new List<BarSeriesGenaric>();
           // Colors = new List<string>();
        }
        public ThreeColumGenaricChart Chart { get; set; }
        public ThreeColumGenaricTitle Title { get; set; }
        public ThreeColumGenaricSubtitle Subtitle { get; set; }
        public ThreeColumGenaricCredits Credits { get; set; }
        public ThreeColumGenaricLegend Legend { get; set; }
        public ThreeColumGenaricPlotOptions PlotOptions { get; set; }
        public List<BarSeriesGenaric> Series { get; set; }
    }
        public class ThreeColumGenaricChart
        {
            public string RenderTo { get; set; }
            public string Type { get; set; }
            public ThreeDGenaricOptions3d Options3d { get; set; }
        }
        public class ThreeDGenaricOptions3d
        {
            public bool Enabled { get; set; }
            public int Alpha { get; set; }
            public int Beta { get; set; }
            public int Depth { get; set; }
            public int ViewDistance { get; set; }
        }

      

        public class ThreeColumGenaricTitle
        {
            public string Text { get; set; }
        }

        public class ThreeColumGenaricSubtitle
        {
            public object Text { get; set; }
        }

        public class ThreeColumGenaricCredits
        {
            public bool Enabled { get; set; }
        }
    public class ThreeColumGenaricLegend
    {
        public bool Enabled { get; set; }
    }

    public class ThreeDGenaricColumn
        {
            public int Depth { get; set; }
        }

        public class ThreeColumGenaricPlotOptions
        {
            public ThreeDGenaricColumn Column { get; set; }
        }

      

    


    
}
