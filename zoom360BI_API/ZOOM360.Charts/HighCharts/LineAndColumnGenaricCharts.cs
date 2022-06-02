using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class LineAndColumnGenaricCharts
    {
        public LineAndColumnGenaricCharts()
        {
          //  Series = new List<DualLineColumnSeriesGenaric>();
            Colors = new List<string>();
        }
        public List<string> Colors { get; set; }
        public LineColumnChartGenaricBasic Chart { get; set; }
        public LineColumnTitleGenaric Title { get; set; }
        public LineColumnSubtitleGenaric Subtitle { get; set; }
        public LineColumnXAxisGenaric XAxis { get; set; }
        public List<object> YAxis { get; set; }
        public LineColumnTooltipGenaric Tooltip { get; set; }
        public LineColumnPlotOptionsGenaric PlotOptions { get; set; }
        public LineColumnLegendGenaric Legend { get; set; }
        public LineColumnCreditsGenaric Credits { get; set; }
       // public List<DualLineColumnSeriesGenaric> Series { get; set; }
    }
    public class LineColumnChartGenaricBasic 
       {
        public string ZoomType { get; set; }
       }
    public class LineColumnTitleGenaric
    {
        public string Title { get; set; }
    }
    public class LineColumnSubtitleGenaric
    {
        public string Title { get; set; }
    }
    public class LineColumnXAxisGenaric
    {
        public string Categories { get; set; }
        public bool Crosshair { get; set; }
        public XAxislabelsLC labels { get; set; }
    }
    public class XAxislabelsLC
    {
      
        public XAxislabelsStyleLC style { get; set; }
    }
    public class XAxislabelsStyleLC
    {
        public string fontSize { get; set; }
    }
    public class LineColumnTooltipGenaric
    {
        public bool Shared { get; set; }
    }


    public class LineColumnPlotOptionsGenaric
    {
        public string LineWidth { get; set; }
        public DualLinePlotGenaric Line { get; set; }
    }
    public class DualLinePlotGenaric
    {
        public string Marker { get; set; }
    }
    public class LineColumnLegendGenaric
    {
        public bool Enabled { get; set; }
    }
    public class LineColumnCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
}
