using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
 
    public class AreaChartGenaric
    {
        public AreaChartGenaric()
        {
            Series = new List<AreaSeriesGenaric>();
            Colors = new List<string>();
        }
        public List<string> Colors { get; set; }
        public AreaChartGenaricBasic Chart { get; set; }

        public AreaAccessibilityGenaric Accessibility { get; set; }
        public AreaTitleGenaric Title { get; set; }
        public AreaSubtitleGenaric Subtitle { get; set; }
        public AreaXAxisGenaric XAxis { get; set; }
        public AreaYAxisGenaric YAxis { get; set; }
        public AreaTooltipGenaric Tooltip { get; set; }
        public AreaPlotOptionsGenaric PlotOptions { get; set; }
        public AreaLegendGenaric Legend { get; set; }
        public AreaCreditsGenaric Credits { get; set; }

        public AreaExportingGenaric exporting { get; set; }
        public List<AreaSeriesGenaric> Series { get; set; }

       
    }

    public class AreaChartGenaricBasic
    {
        public string Type { get; set; }
      
        public string marginLeft { get; set; }
        public string marginBottom { get; set; }
        public string marginRight { get; set; }
        public string marginTop { get; set; }
        public int spacingTop { get; set; }
        public int spacingRight { get; set; }
        public int spacingBottom { get; set; }
        public string spacingLeft { get; set; }
        public int margin { get; set; }
        public string PlotBackgroundImage { get; set; }
        public int? PlotBorderWidth { get; set; }
        public object BackgroundColor { get; set; }
       

    }
    public class AreaAccessibilityGenaric
    {
        public string Description { get; set; }
    }
 
    public class AreaTitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public AreaTitleStyleGenaric Style { get; set; }
    }
    public class AreaTitleStyleGenaric
    {
        public string font { get; set; }
        public string Color { get; set; }
        public bool floating { get; set; }
        public string fontSize { get; set; }
        public string fontWeight { get; set; }
        public string FontFamily { get; set; }
    }
    public class AreaSubtitleGenaric
    {
        public string Text { get; set; }
    }

    public class AreaXAxisGenaric
    {
        public List<string> Categories { get; set; }
        public bool AllowDecimals { get; set; } = true;
        public bool Visible { get; set; } = true;
        public AreaLabelsXGenaric Labels { get; set; }
        public AreaAccessibilityXGenaric Accessibility { get; set; }
    }
    public class AreaAccessibilityXGenaric
    {
        public string RangeDescription { get; set; }
        public string Description { get; set; }
    }

    public class AreaLabelsXGenaric
    {
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public string Formatter { get; set; }
        public AreaLabelStyleGenaric Style { get; set; }
        public AreaLableAccessibilityGenaric Accessibility { get; set; }
    }
    public class AreaLableAccessibilityGenaric
    {

    }
    public class AreaLabelStyleGenaric
    {
        public string Color { get; set; }
    }
    public class AreaYAxisGenaric
    {
        public bool Visible { get; set; }
        public string GridLineColor { get; set; }
        public AreaTitleYGenaric Title { get; set; }
        public AreaLabelsYGenaric Labels { get; set; }
    }
    public class AreaTitleYGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public bool Enabled { get; set; }
      
    }
    public class AreaLabelsYGenaric
    {
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public string Formatter { get; set; }
        public LabelGenaricYstyle Style { get; set; }
    }
    public class LabelGenaricYstyle
    {
        public string Color { get; set; }
    }

    public class AreaTooltipGenaric
    {
        public bool? Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string FooterFormat { get; set; }
        public string BackgroundColor { get; set; }
        public AreaToolStyleGenaric Style { get; set; }
    }
    public class AreaToolStyleGenaric
    {
        public string Color { get; set; }
    }
    public class AreaPlotOptionsGenaric
    {
    
        public AreaGenaric Area { get; set; }
        public SeriesGenaric series { get; set; }

    }
    public class SeriesGenaric
    {
        public string plotAreaWidth { get; set; }
        public int strokeWidth { get; set; }
        public bool enableMouseTracking {get; set;}
    }
    public class AreaGenaric
    {
        public string size { get; set; }
        public bool stickyTracking { get; set; }
        public int LineWidth { get; set; }
        public AreaMarkerGenaric Marker { get; set; }
        public int PointStart { get; set; }
    }
    public class AreaMarkerGenaric
    {
        public bool Enabled { get; set; }
        public string Symbol { get; set; }
        public int Radius { get; set; }
        public AreaStateGenaric States { get; set; }
    }
    public class AreaHoverGenaric
    {
        public bool Enabled { get; set; }
    }
    public class AreaStateGenaric
    {
        public bool Enabled { get; set; }
        public AreaHoverGenaric Hover { get; set; }
    }
    public class AreaLegendGenaric
    {
        public string BackgroundColor { get; set; }
        public bool? Enabled { get; set; }
        public string align { get; set; }
        public string verticalAlign { get; set; }
        public string layout { get; set; }
        public AreaLegendStyleGenaric Style { get; set; }
    }
    public class AreaLegendStyleGenaric
    {
        public string Color { get; set; }
    }
    public class AreaCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class AreaExportingGenaric
    {
        public bool Enabled { get; set; }
        public AreaExportingButton buttons { get; set; }
    }
    public class AreaExportingButton
    {
        public AreaExportingContextButton contextButton { get; set; }
    }
    public class AreaExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public AreaExportingTheme theme { get; set; }
    }
    public class AreaExportingTheme
    {
        public string fill { get; set; }
        public AreaExportingStates states { get; set; }
    }
    public class AreaExportingStates
    {
        public AreaExportingStatesHover hover { get; set; }
        
       public AreaExportingStatesSelect select { get; set; }
    }
    public class AreaExportingStatesHover
    {
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class AreaExportingStatesSelect
    {
        public string fill { get; set; }
        public string stroke { get; set; }
    }

}
