using System.Collections.Generic;

namespace ZOOM360.Charts.HighCharts
{

    //public class ColumnChartGenaric
    //{

    //    public ColumnChartGenaric()
    //    {
    //        Series = new List<BarSeriesGenaric>();
    //        Colors = new List<string>();
    //    }
    //    public List<string> Colors { get; set; }
    //    public ChartGenaric Chart { get; set; }
    //    public CreditsGenaric Credits { get; set; }
    //    public TitleGenaricColumn Title { get; set; }
    //    public SubtitleGenaric Subtitle { get; set; }
    //    public XAxisGenaric XAxis { get; set; }
    //    public YAxisGenaric YAxis { get; set; }
    //    public TooltipGenaric Tooltip { get; set; }
    //    public legendGenaric Legend { get; set; }
    //    public ColumnPlotOptionsGenaric PlotOptions { get; set; }
    //    public List<BarSeriesGenaric> Series { get; set; }
    //}



    /// <summary>
    /// end column chart and start bar chart
    /// </summary>


    //public class BarChartGenaric
    //{
    //    public BarChartGenaric()
    //    {
    //        Series = new List<BarSeriesGenaric>();
    //        Colors = new List<string>();
    //    }
    //    public List<string> Colors { get; set; }
    //    public ChartGenaricBar Chart { get; set; }
    //    public TitleGenaricBar Title { get; set; }
    //    public SubtitleGenaricBar Subtitle { get; set; }
    //    public XAxisGenaricBar XAxis { get; set; }
    //    public YAxisGenaricBar YAxis { get; set; }
    //    public TooltipGenaric Tooltip { get; set; }
    //    public PlotOptionsGenaric PlotOptions { get; set; }
    //    public LegendGenaric Legend { get; set; }
    //    public CreditsGenaric Credits { get; set; }
    //    public List<BarSeriesGenaric> Series { get; set; }

    //    public ResponsiveGenaric Responsive { get; set; }
    //}

    //public class PieChartGenaric
    //{
    //    public PieChartGenaric()
    //    {
    //        Series = new List<PieSeriesGenaric>();
    //    }
    //    public ChartGenaric Chart { get; set; }
    //    public TitleGenaric Title { get; set; }
    //    public TooltipGenaric Tooltip { get; set; }
    //    public AccessibilityGenaric Accessibility { get; set; }
    //    public PiePlotOptionsGenaric PlotOptions { get; set; }
    //    public List<PieSeriesGenaric> Series { get; set; }
    //}


    //public class LineChartGenaric
    //{
    //    public LineChartGenaric()
    //    {
    //        Series = new List<LineSeriesGenaric>();
    //        Colors = new List<string>();
    //    }
    //    public List<string> Colors { get; set; }
    //    public ChartGenaric Chart { get; set; }
    //    public TitleGenaric Title { get; set; }
    //    public SubtitleGenaric Subtitle { get; set; }
    //    public XAxisGenaric XAxis { get; set; }
    //    public YAxisGenaric YAxis { get; set; }
    //    public TooltipGenaric Tooltip { get; set; }
    //    public PlotOptionsGenaric PlotOptions { get; set; }
    //    public LegendGenaric Legend { get; set; }
    //    public CreditsGenaric Credits { get; set; }
    //    public List<LineSeriesGenaric> Series { get; set; }

    //    public ResponsiveGenaric Responsive { get; set; }
    //}




    //public class SolidGaugeChartGenaric
    //{
    //    public SolidGaugeChartGenaric()
    //    {
    //        Series = new List<SolidGaugeSeriesGenaric>();
    //        Colors = new List<string>();
    //    }
    //    public List<string> Colors { get; set; }
    //    public ChartGenaric Chart { get; set; }

    //    public TitleGenaric Title { get; set; }
    //    public SubtitleGenaric Subtitle { get; set; }
    //    public XAxisGenaric XAxis { get; set; }
    //    public YAxisGenaric YAxis { get; set; }

    //    public PaneGenaric Pane { get; set; }
    //    public TooltipGaugeGenaric Tooltip { get; set; }
    //    public PlotOptionsGenaric PlotOptions { get; set; }
    //    public List<SolidGaugeSeriesGenaric> Series { get; set; }

    //    public ResponsiveGenaric Responsive { get; set; }
    //}

    public class ChartGenaric
    {
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }

        public string PlotBackgroundImage { get; set; }
        public int? PlotBorderWidth { get; set; }

        //public bool? PlotShadow { get; set; }

        public object BackgroundColor { get; set; }

    }

    public class PaneGenaric
    {
        public int StartAngle { get; set; }
        public int EndAngle { get; set; }
        public object Background { get; set; }
    }
    public class BackgroundColorGenaric
    {
        public object LinearGradient { get; set; }
        public object Stops { get; set; }
    }

    public class ResponsiveGenaric
    {
        public ResponsiveGenaric()
        {
            Rules = new List<RuleGenaric>();
        }
        public List<RuleGenaric> Rules { get; set; }
    }

    public class RuleGenaric
    {
        public ConditionGenaric Condition { get; set; }
        public ChartOptionsGenaric ChartOptions { get; set; }
    }


    public class ChartOptionsGenaric
    {
        public LegendGenaric Legend { get; set; }
    }
  

    public class ConditionGenaric
    {

        public int MinHeight { get; set; }
        public int MinWidth { get; set; }
        public int MaxWidth { get; set; }
    }
    public class TitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
   
    }
    //public class StyleGenaric
    //{
    //    public string Color { get; set; }
    //}
    public class SubtitleGenaric
    {
        public string Text { get; set; }
    }

    public class XAxisGenaric
    {
        public List<string> Categories { get; set; }
        public bool Crosshair { get; set; } = true;
        public bool Visible { get; set; } = true;
        public TitleGenaric Title { get; set; }
      
        public LabelsGenaric Labels { get; set; }

        public AccessibilityGenaric Accessibility { get; set; }
    }

    public class LabelsGenaric
    {
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public bool ConnectorAllowed { get; set; }
        public int? Distance { get; set; }
        public string Formatter { get; set; }
        public Labelgenaricstyle Style { get; set; }
    }
    public class Labelgenaricstyle
    {
        public string Color { get; set; }
    }

    public class YAxisGenaric
    {
        public object Stops { get; set; }
        public bool Visible { get; set; } 
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int MinorTickLength { get; set; }
        public int LineWidth { get; set; }

        public int? GridLineWidth { get; set; }
        public int? MinorGridLineWidth { get; set; }

        public object TickPositions { get; set; }
        public TitleGenaric Title { get; set; }
        public LabelsGenaric Labels { get; set; }
        public StackLabelsGenaric StackLabels { get; set; }
    }
    public class StackLabelsGenaric
    {
        public bool Enabled { get; set; }
        public stackStyle Style { get; set; }
    }
    public class stackStyle
    {
        public string FontWeight { get; set; }
        public string Color { get; set; }
        public string TextOutline { get; set; }
    }
    public class legendGenaric
    {
        public bool? Enabled { get; set; }
    }

    public class TooltipGenaric
    {
        public bool? Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string FooterFormat { get; set; }
        public string ClusterFormat { get; set; }
        public bool Shared { get; set; }
        public bool UseHTML { get; set; }
        public string ValueSuffix { get; set; }
        public string BackgroundColor { get; set; }
        public ToolStyleGenaric Style { get; set; }
    }
    public class ToolStyleGenaric
    {
        public string Color { get; set; }
    }

    public class TooltipGaugeGenaric
    {
        public bool? Enabled { get; set; }
    }
    public class DataLabelsGenaric
    {
        public bool Enabled { get; set; }
        public string Color { get; set; }
        public string Format { get; set; }
        public Datalabelstyle Style { get; set; }
    }
    public class Datalabelstyle
    {
        public string TextOutline { get; set; }
    }

    //public class BarGenaric
    //{
    //    public DataLabelsGenaric DataLabels { get; set; }
    //    public TooltipGenaric Tooltip { get; set; }
    //}

    public class PlotOptionsGenaric
    {
      //  public BarGenaric Bar { get; set; }
      //  public ColumnGenaric Column { get; set; }
        public LineGenaric Series { get; set; }
        public AreaGenaric Area { get; set; }
        //public SolidGaugeGenaric SolidGauge { get; set; }
    }


    public class LegendAreaGenaric
    {
        public int X { get; set; }
        public int Y { get; set; }
        public bool Floating { get; set; }
        public int BorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool Shadow { get; set; }
        public bool? Enabled { get; set; }
    }
    public class LegendGenaric
    {
        public string Layout { get; set; }
        public string Align { get; set; }
        public stylegen ItemStyle { get; set; }
        public string VerticalAlign { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public bool Floating { get; set; }
        public int BorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool Shadow { get; set; }
        public bool? Enabled { get; set; }
    }
    public class stylegen
    {
        public string Color { get; set; }
    }

    public class CreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class HoverGenaric
    {
        public bool Enabled { get; set; }
    }
    public class StateGenaric
    {
        public bool Enabled { get; set; }
        public HoverGenaric Hover { get; set; }
    }
    //public class MarkerGenaric
    //{
    //    public bool Enabled { get; set; }
    //    public string Symbol { get; set; }
    //    public int Radius { get; set; }
    //    public StateGenaric States { get; set; }
    //}
    public class BarSeriesGenaric
    {
       // public virtual int Depth { get; set; }
        public virtual string Name { get; set; }
        public virtual List<decimal> Data { get; set; }
    }

    //public class LineSeriesGenaric : BarSeriesGenaric
    //{
    //}
    public class AreaSeriesGenaric : BarSeriesGenaric
    {
    }

    public class SolidGaugeSeriesGenaric : SolidSeriesGenaric
    {
    }
    //public class BulletSeriesGenaric : BullSeriesGenaric
    //{
    //}
    public class ThreeDAreaSeriesGenaric : ThreeDAreaGenaric
    {
    }

    public class ThreeDAreaGenaric
    {
       
        public virtual string Name { get; set; }
      //  public virtual string? LineColor { get; set; }
      //  public virtual string? Color { get; set; }
     //   public virtual string? FillColor { get; set; }
        //  public virtual int? Depth { get; set; }
        //   public virtual int xAxis { get; set; }
        public virtual List<decimal> Data { get; set; }
    }
    //public class BullSeriesGenaric
    //{
      
    //    public virtual List<BulletData> Data { get; set; }
    //}
    //public class BulletData
    //{
       
    //    public virtual decimal Y { get; set; }
    //    public virtual decimal Target { get; set; }
    //}
    public class SolidSeriesGenaric
    {
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }
        public virtual List<decimal> Data { get; set; }
    }
    public class PieSeriesGenaric
    {
        public string Name { get; set; }

        public string InnerSize { get; set; }
        public bool ColorByPoint { get; set; }
        public List<DatumGenaric> Data { get; set; }
    }
    //public class ColumnGenaric
    //{
    //    public double PointPadding { get; set; }
    //    public int BorderWidth { get; set; }
    //    public string Stacking { get; set; }
    //    public DataLabelGenaricStack DataLabels { get; set; }
    //}
    public class DataLabelGenaricStack
    {
        public string Enabled { get; set; }
        public Datalablestackstyle Style { get; set; }
    }
    public class Datalablestackstyle
    {
        public string Color { get; set; }
        public string TextOutline { get; set; }
    }

    public class LineGenaric
    {
        public int LineWidth { get; set; }
        public LabelsGenaric Label { get; set; }

     //   public MarkerGenaric Marker { get; set; }
        public int PointStart { get; set; }
    }

    //public class AreaGenaric
    //{
    //    public int LineWidth { get; set; }
    //    public LabelsGenaric Label { get; set; }

    //    public MarkerGenaric Marker { get; set; }
    //    public int PointStart { get; set; }
    //}

    //public class SolidGaugeGenaric
    //{
    //    public string Color { get; set; }
    //    public int BorderWidth { get; set; }
    //    public bool Shadow { get; set; }
    //    public bool Enabled { get; set; }
    //    public object Style { get; set; }
    //    public string ValueSuffix { get; set; }
    //    public string PointFormat { get; set; }

    //    public string LineCap { get; set; }
    //    public bool StickyTracking { get; set; }
    //    public bool Rounded { get; set; }
    //}

    //public class ColumnPlotOptionsGenaric
    //{
    //    public ColumnGenaric Column { get; set; }
    //}

    //public class PieGenaric
    //{
    //    public PieGenaric()
    //    {
    //        Colors = new List<string>();
    //    }
    //    public bool AllowPointSelect { get; set; }
    //    public string Cursor { get; set; }

    //    public string Color { get; set; }

    //    public List<string> Colors { get; set; }
    //    public DataLabelsGenaric DataLabels { get; set; }
    //}

    //public class PiePlotOptionsGenaric
    //{
    //    public PieGenaric Pie { get; set; }
    //}

    public class PointGenaric
    {
        public string ValueSuffix { get; set; }
    }

    public class AccessibilityGenaric
    {
        public PointGenaric Point { get; set; }
        public string RangeDescription { get; set; }
        public string Description { get; set; }
    }


    public class DatumGenaric
    {
        public string Name { get; set; }
        public decimal Y { get; set; }
        public bool Sliced { get; set; }
        public bool Selected { get; set; }
    }


}
