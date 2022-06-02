using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class _3DAreaGenaricCharts
    {
        public _3DAreaGenaricCharts()
        {
            Series = new List<ThreeDAreaSeriesGenaric>();
            Colors = new List<string>();
        }
        public List<string> Colors { get; set; }
        public ThreeDAreaChartGenaricBasic Chart { get; set; }

      //  public AreaAccessibilityGenaric Accessibility { get; set; }
        public ThreeDAreaTitleGenaric Title { get; set; }
        //  public AreaSubtitleGenaric Subtitle { get; set; }
        public ThreeDAreaGenaricCredits Credits { get; set; }
        public ThreeDAreaGenaricLegend Legend { get; set; }
        public List<ThreeDAreaXAxisGenaric> XAxis { get; set; }
        public ThreeDAreaYAxisGenaric YAxis { get; set; }
        public ThreeDAreaPlotGenaric PlotOptions { get; set; }
        public ThreeDAreaTooltipGenaric Tooltip { get; set; }
        public List<ThreeDAreaSeriesGenaric> Series { get; set; }
    }
    public class ThreeDAreaChartGenaricBasic
    {
        public string? Type { get; set; }
        public ThreeDAreaGenaricOptions3d Options3d { get; set; }
    }
    public class ThreeDAreaGenaricOptions3d
    {
        public bool enabled { get; set; }
        public int alpha { get; set; }
        public int beta { get; set; }
        public int depth { get; set; }
       public int viewDistance { get; set; }
    }
    public class ThreeDAreaTitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public ThreeDAreaTitleStyleGenaric Style { get; set; }
    }
    public class ThreeDAreaTitleStyleGenaric
    {
        public string FontSize { get; set; }
        public string Color { get; set; }
     //   public string FontWeight { get; set; }
        public string FontFamily { get; set; }
    }
    public class ThreeDAreaGenaricCredits
    {
        public bool Enabled { get; set; }
    }
    public class ThreeDAreaGenaricLegend
    {
        public bool Enabled { get; set; }
    }
    public class ThreeDAreaYAxisGenaric
    {
        public ThreeDAreaTitleYGenaric Title { get; set; }
        public ThreeDArealableYGenaric Labels { get; set; }
        public string GridLineDashStyle { get; set; }
    }
    public class ThreeDAreaTitleYGenaric
    {
        public string Text { get; set; }
        public int X { get; set; }
    }
    public class ThreeDArealableYGenaric
    {
        public string Format { get; set; }
    }

    public class ThreeDAreaXAxisGenaric
    {
        public bool Visible { get; set; }
        public bool? isX { get; set; }
        public int? index { get; set; }

    }
    public class ThreeDAreaPlotGenaric
    {
      //  public ThreeDAreaSEriesGenaric Series { get; set; }
        public ThreeDAreaPlotOptionsGenaric Area { get; set; }
    }
    public class ThreeDAreaSEriesGenaric
    {
        public int depth { get; set; }
    }
    public class ThreeDAreaPlotOptionsGenaric
    {

        public int Depth { get; set; }
     //   public bool Stacking { get; set; }

        public ThreeDAreaMarkerGenaric Marker { get; set; }
        public ThreeDAreaStatesGenaric States { get; set; }
    }
    public class ThreeDAreaMarkerGenaric
    {
        public bool Enabled { get; set; }
    }
    public class ThreeDAreaStatesGenaric
    {
        public ThreeDAreaInactiveGenaric Inactive { get; set; }
    }
    public class ThreeDAreaInactiveGenaric
    {
        public bool Enabled { get; set; }
    }
    public class ThreeDAreaTooltipGenaric
    {
        public string ValueSuffix { get; set; }
    }
}
