using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class AreaChart
    {
        public AreaChart()
        {
            Series = new List<AreaSeries>();
        }
        public AreaCharts chart { get; set; }
        public AreaAccessibility Accessibility { get; set; }
        public AreaExporting Exporting { get; set; }
        public AreaTitle Title { get; set; }
        public AreaSubtitle Subtitle { get; set; }
        public AreaXAxis XAxis { get; set; }
        public AreaYAxis YAxis { get; set; }
        public AreaTooltip Tooltip { get; set; }
        public AreaPlotOptions PlotOptions { get; set; }
        public List<AreaSeries> Series { get; set; }
        public AreaLegend Legend { get; set; }
        public Areacredits Credits { get; set; }
        public string[] Colors { get; set; }
        
    }
    public class PlotBackgroundColorArea
    {
        public int[] linearGradient { get; set; }
        public dynamic[,] Stops { get; set; }
    }
    public class AreaCharts
    {
        //public string backgroundColor { get; set; }
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
        public PlotBackgroundColorArea backgroundColor { get; set; }
    }
    public class AreaAccessibility
    {
        public string Description { get; set; }
        public string RangeDescription { get; set; }
    }
    public class AreaExporting
    {
        public bool Enabled { get; set; }
    }
    public class AreaTitle
    {
        public string Text { get; set; }
    }

    public class AreaSubtitle
    {
        public string text { get; set; }
    }

    public class AreaLabels
    {
        public string formatter { get; set; }
    }

    public class AreaXAxis
    {
        public bool Visible { get; set; }
        public bool allowDecimals { get; set; }
        public AreaLabels labels { get; set; }
        public AreaAccessibility accessibility { get; set; }
    }

    public class AreaYAxis
    {
        public bool Visible { get; set; }
        public AreaTitle title { get; set; }
        public AreaLabels labels { get; set; }
    }

    public class AreaTooltip
    {
        public bool Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
    }
    public class AreaPlotOptions
    {
        public Area Area { get; set; }
        public AreaSeriesPlot series { get; set; }
    }
    public class AreaSeriesPlot
    {
        public string plotAreaWidth { get; set; }
        public int strokeWidth { get; set; }
        public bool enableMouseTracking { get; set; }
    }
    public class Area
    {
        public  string Stacking { get; set; }
        public string  LineColor { get; set; }
        public string size { get; set; }
        public bool stickyTracking { get; set; }
        public int LineWidth { get; set; }
        public AreaMarker Marker { get; set; }
        public int PointStart { get; set; }
    }
    public class AreaMarker
    {
        public bool Enabled { get; set; }
        public string Symbol { get; set; }
        public int Radius { get; set; }
        public AreaState States { get; set; }
    }
    public class AreaState
    {
        public bool Enabled { get; set; }
        public AreaHover Hover { get; set; }
    }
    public class AreaHover
    {
        public bool enabled { get; set; }
    }
    public class AreaLegend
    {
        public bool floating { get; set; }
        public bool draggable { get; set; }
        public bool Enabled { get; set; }
    }
    public class AreaSeries
    {
        public virtual string name { get; set; }
        public virtual List<double> data { get; set; }
    }
    public class Areacredits
    {
        public bool Enabled { get; set; }
    }

}
