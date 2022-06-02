using System.Collections.Generic;

namespace ZOOM360.Charts.HighCharts
{
    public class BasicBarChart
    {
        public Chart Chart { get; set; }
        public Accessibility Accessibility { get; set; }
        public Title Title { get; set; }
        public Subtitle Subtitle { get; set; }
        public XAxis XAxis { get; set; }
        public YAxis YAxis { get; set; }
        public Tooltip Tooltip { get; set; }
        public PlotOptions PlotOptions { get; set; }
        public Legend Legend { get; set; }
        public Credits Credits { get; set; }
        public ResponsiveLine Responsive { get; set;}
        public List<BarSeries> Series { get; set; }
        public string[] Colors { get; set; }
        public PlotBackgroundColorChart backgroundColor { get; set; }
    }
    public class Chart
    {
        public PlotBackgroundColor backgroundColor { get; set; }
        public string PlotBorderWidth { get; set; }
        public bool PlotShadow { get; set; }
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
    }
    public class PlotBackgroundColorChart
    {
        public int[] linearGradient { get; set; }
        public dynamic[,] Stops { get; set; }
    }

    public class ChartStatic
    {
       
        public PlotBackgroundColor backgroundColor { get; set; }
        public string PlotBorderWidth { get; set; }
        public bool PlotShadow { get; set; }
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
    }
    public class PlotBackgroundColor
    {
        public int[] linearGradient { get; set; }
        public dynamic[,] Stops { get; set; }
    }
    public class Title
    {
        public string Text { get; set; }
        public bool Floating { get; set; }
    }

    public class Subtitle
    {
        public string Text { get; set; }
    }

    public class Title2
    {
        public object Text { get; set; }
    }

    public class XAxis
    {
     
        public bool Visible { get; set; }
        public int GridLineWidth { get; set; }
        public int MinorGridLineWidth { get; set; }
        public Labels Labels { get; set; }
        public List<string> Categories { get; set; }
        public Title2 Title { get; set; }
        public bool  Crosshair { get; set; }
        
    }

    public class Title3
    {
        public string Text { get; set; }
        public string Align { get; set; }
    }

    public class Labels
    {
        public bool Enabled { get; set; }
        public string Overflow { get; set; }
    }

    public class YAxis
    {
        public bool Visible { get; set; }
        public int GridLineWidth { get; set; }
        public int MinorGridLineWidth { get; set; }
        public int Min { get; set; }
        public Title3 Title { get; set; }
        public Labels Labels { get; set; }
        public StackLabels stackLabels { get; set; }
    }

    public class Tooltip
    {
        public string ValueSuffix { get; set; }
        public string PointFormat { get; set; }
        public string HeaderFormat { get; set; }
        public string ClusterFormat { get; set; }
        public string FooterFormat { get; set; }
        public bool Shared { get; set; }
        public bool useHTML { get; set; }
       

    }

    public class DataLabels
    {
        public bool Enabled { get; set; }
        public string Format { get; set; }
        public string Color { get; set; }
    }

    public class Bar
    {
        public DataLabels DataLabels { get; set; }
        public Tooltip Tooltip { get; set; }
       
    }
    public class PiePlotOptions
    {
        public bool AllowPointSelect { get; set; }
        public bool showInLegend { get; set; }
        public string Cursor { get; set; }
        public string[] Colors { get; set; }
        public DataLabels DataLabels { get; set; }
        
    }

    public class PlotOptions
    {
        public Bar Bar { get; set; }
        public PiePlotOptions Pie { get; set; }
        public Column column { get; set; }
        public Area area { get; set; }
    }

    public class StackLabels
    {
        public bool Enabled { get; set; }
        public Style Style { get; set; }
    }

    public class Style
    {
        public string fontWeight { get; set; }
        public string color { get; set; }
    }

    public class Column
    {
        public double? PointPadding { get; set; }
        public double? BorderWidth { get; set; }
        public string Stacking { get; set; }
        public DataLabels DataLabels { get; set; }
    }

    public class Legend
    {
        public string Layout { get; set; }
        public string Align { get; set; }
        public string VerticalAlign { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public bool Floating { get; set; }
        public string BorderColor { get; set; }
        public int BorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool Shadow { get; set; }
        public bool Enabled { get; set; }
        public bool Visible { get; set; }
        public Title3 Title { get; set; }
    }

    public class Credits
    {
        public bool Enabled { get; set; }
    }

    public class Point
    {
        public string ValueSuffix { get; set; }
    }

    public class Accessibility
    {
        public Point Point { get; set; }
    }

    public class BarSeries
    {
        public string Name { get; set; }
        public List<int> Data { get; set; }
    }
    public class Datum
    {
        public string Name { get; set; }
        public double Y { get; set; }
        public bool Sliced { get; set; }
        public bool Selected { get; set; }
    }
   

}
