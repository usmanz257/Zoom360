using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
   public class ColumnStackChartModel
    {
        public ChartColumnStack Chart { get; set; }
        public AccessibilityColumnStack Accessibility { get; set; }
        public TitleColumnStack Title { get; set; }
        public SubtitleColumnStack Subtitle { get; set; }
        public XAxisColumnStack XAxis { get; set; }
        public YAxisColumnStack YAxis { get; set; }
        public TooltipColumnStack Tooltip { get; set; }
        public PlotOptionsColumnStack PlotOptions { get; set; }
        public LegendColumnStack Legend { get; set; }
        public CreditsColumnStack Credits { get; set; }
        public List<BarSeries> Series { get; set; }

        public string[] Colors { get; set; }
    }
    public class ChartColumnStack
    {
        public PlotBackgroundColorColumnStack backgroundColor { get; set; }
        public string PlotBorderWidth { get; set; }
        public bool PlotShadow { get; set; }
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
    }
    public class PlotBackgroundColorColumnStack
    {
        public int[] linearGradient { get; set; }
        public dynamic[,] Stops { get; set; }
    }
    public class TitleColumnStack
    {
        public string Text { get; set; }
    }
    public class SubtitleColumnStack
    {
        public string Text { get; set; }
    }
    public class Title2ColumnStack
    {
        public object Text { get; set; }
    }
    public class XAxisColumnStack
    {

        public bool Visible { get; set; }
        //public int GridLineWidth { get; set; }
        //public int MinorGridLineWidth { get; set; }
        //public Labels Labels { get; set; }
        public List<string> Categories { get; set; }
        //public Title2 Title { get; set; }
        //public bool Crosshair { get; set; }

    }
    public class Title3ColumnStack
    {
        public string Text { get; set; }
        public string Align { get; set; }
    }
    public class LabelsColumnStack
    {
        public bool Enabled { get; set; }
        public string Overflow { get; set; }
    }
    public class YAxisColumnStack
    {
        public bool Visible { get; set; }
        public int GridLineWidth { get; set; }
        public int MinorGridLineWidth { get; set; }
        public int Min { get; set; }
        public Title3ColumnStack Title { get; set; }
        public LabelsColumnStack Labels { get; set; }
        public StackLabelsColumnStack stackLabels { get; set; }
    }
    public class TooltipColumnStack
    {
        public string ValueSuffix { get; set; }
        public string PointFormat { get; set; }
        public string HeaderFormat { get; set; }
        public string ClusterFormat { get; set; }
        public string FooterFormat { get; set; }
        public bool Shared { get; set; }
        public bool useHTML { get; set; }


    }
    public class DataLabelsColumnStack
    {
        public bool Enabled { get; set; }
        public string Format { get; set; }
        public string Color { get; set; }
    }
    public class BarColumnStack
    {
        public DataLabelsColumnStack DataLabels { get; set; }
        public TooltipColumnStack Tooltip { get; set; }
    }
    public class PiePlotOptionsColumnStack
    {
        public bool AllowPointSelect { get; set; }
        public bool showInLegend { get; set; }
        public string Cursor { get; set; }
        public DataLabels DataLabels { get; set; }

    }
    public class PlotOptionsColumnStack
    {
        public BarColumnStack Bar { get; set; }
        public PiePlotOptionsColumnStack Pie { get; set; }
        public ColumnColumnStack column { get; set; }
        public AreaColumnStack Area { get; set; }
    }
    public class ColumnColumnStack
    {
        public double? PointPadding { get; set; }
        public double? BorderWidth { get; set; }
        public string Stacking { get; set; }
        public DataLabels DataLabels { get; set; }
    }
    public class AreaColumnStack
    {
        public int pointStart { get; set; }
        public AreaMarker marker { get; set; }
    }
    public class StackLabelsColumnStack
        {
            public bool Enabled { get; set; }
            public StyleColumnStack Style { get; set; }
        }
        public class StyleColumnStack
        {
            public string fontWeight { get; set; }
        }
        public class LegendColumnStack
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
           
        }
        public class CreditsColumnStack
        {
            public bool Enabled { get; set; }
        }

        public class PointColumnStack
        {
            public string ValueSuffix { get; set; }
        }

        public class AccessibilityColumnStack
        {
            public Point Point { get; set; }
        }

        public class BarSeriesColumnStack
        {
            public string Name { get; set; }
            public List<int> Data { get; set; }
        }
        public class DatumColumnStack
        {
            public string Name { get; set; }
            public double Y { get; set; }
            public bool Sliced { get; set; }
            public bool Selected { get; set; }
        }

    
}
