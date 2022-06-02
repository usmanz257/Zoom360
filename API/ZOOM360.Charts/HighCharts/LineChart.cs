using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class LineChart
    {
        public ChartLine Chart { get; set; }
        public Title Title { get; set; }
        public Subtitle Subtitle { get; set; }
        public YAxisLine YAxis { get; set; }
        public XAxisLine XAxis { get; set; }
        public LegendLine Legend { get; set; }
        public plotOptionsLine PlotOptions { get; set; }
        public List<SeriesData> Series { get; set; }
        public ResponsiveLine Responsive { get; set; }
        public TooltipColumnStack Tooltip { get; set; }
        public Creditss Credits { get; set; }
        public string[] Colors { get; set; }
    }
    public class ChartLine
    {
     //public string RenderTo { get; set; }
    public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
        
        public PlotBackgroundColorLine backgroundColor { get; set; }
    }
    public class PlotBackgroundColorLine
    {
        public int[] linearGradient { get; set; }
        public dynamic[,] Stops { get; set; }
    }
    public class YAxisLine
    {
        //public int Min { get; set; }
        public bool Visible { get; set; }
        public int GridLineWidth { get; set; }
        public int MinorGridLineWidth { get; set; }
        public bool Enabled { get; set; }
        public Title Title { get; set; }
        public LabelLine Labels { get; set; }
    }
    //public class TitleLine
    //{
    //    public string Text { get; set; }
    //}
    public class XAxisLine
    {
        public bool Visible { get; set; }
        public bool Enabled { get; set; }
        public string[] Categories { get;set;}
        public AccessibilityLine Accessibility { get; set; }
    }

    public class AccessibilityLine
    {
        public string RangeDescription { get; set; }
    }
    public class LegendLine
    {
        public bool Enabled { get; set; }
        public string Layout { get; set; }
        public string Align { get; set; }
        public string VerticalAlign { get; set; }
        public bool Floating { get; set; }
    }
    public class plotOptionsLine
    {
        public SeriesLine Series { get; set; }
    }
    public class SeriesLine
    {
      //  public int LineWidth { get; set; } 
        public LabelLine Label { get; set; }
        public int PointStart { get; set; }
        public Marker Marker { get; set; }
    }
    public class Marker
    {
        public bool Enabled { get; set; }

    }
    public class LabelLine
    {
        public bool Enabled { get; set; }
        public bool ConnectorAllowed { get; set; }
    }
    public class SeriesData
    {
        public string Color { get; set; }
        public int lineWidth { get; set; }
        public string Name { get; set; }
        public List<double> Data { get; set; }
    }
    public class ResponsiveLine
        {
        public List<Rules> Rules { get; set; }
    }
    public class Rules
    {
        public Condition Condition { get; set; }
        public ChartOptions ChartOptions { get; set; }
    }
    public class Condition
    {
        public int MinWidth { get; set; }
        public int MinHeight { get; set; }
        public int MaxWidth { get; set; }
    }
    public class ChartOptions
    {
        public LegendLine Legend { get; set; }
    }
    public class Creditss 
    {
        public bool Enabled { get; set; }
    }

}