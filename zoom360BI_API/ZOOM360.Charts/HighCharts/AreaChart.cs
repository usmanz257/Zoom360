using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class AreaChart
    {
        public AreaCharts chart { get; set; }
        public AreaAccessibility Accessibility { get; set; }
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
        public string pointFormat { get; set; }
    }

    public class AreaHover
    {
        public bool enabled { get; set; }
    }

    public class AreaStates
    {
        public AreaHover hover { get; set; }
    }

    public class AreaMarker
    {
        public bool enabled { get; set; }
        public string symbol { get; set; }
        public int radius { get; set; }
        public AreaStates states { get; set; }
    }

    public class Area
    {
        public int pointStart { get; set; }
        public AreaMarker marker { get; set; }
    }

    public class AreaPlotOptions
    {
        public Area area { get; set; }
    }
    public class AreaLegend
    {
        public bool floating { get; set; }
        public bool draggable { get; set; }
        public bool Enabled { get; set; }
    }
    public class AreaSeries
    {
        public string name { get; set; }
        public List<double> data { get; set; }
    }


    public class Areacredits
    {
        public bool Enabled { get; set; }
    }

}
