using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
   
    public class BarChartGenaric
    {
        public BarChartGenaric()
        {
            Series = new List<BarSeriesGenaric>();
            XAxis = new List<BarXAxisGenaric>();
            Colors = new List<string>();
        }
        public List<string> Colors { get; set; }
        public BarChartGenaricBasic Chart { get; set; }
        public BarTitleGenaric Title { get; set; }
        public BarSubtitleGenaric Subtitle { get; set; }
        public List<BarXAxisGenaric> XAxis { get; set; }
        public BarYAxisGenaric YAxis { get; set; }
        public BarTooltipGenaric Tooltip { get; set; }
        public BarPlotOptionsGenaric PlotOptions { get; set; }
        public BarLegendGenaric Legend { get; set; }
        public BarCreditsGenaric Credits { get; set; }
        public BarExportingGenaric exporting { get; set; }
        public List<BarSeriesGenaric> Series { get; set; }
    }
    public class BarChartGenaricBasic
    {
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
        public object BackgroundColor { get; set; }
        public BarChartStyleGenaric Style { get; set; }

    }
    public class BarChartStyleGenaric
    {
        public string FontFamily { get; set; }
    }
    public class BarTitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public BarStyleGenaric Style { get; set; }

    }
    public class BarStyleGenaric
    {
        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontWeight { get; set; }
        public string FontFamily { get; set; }
    }
    public class BarSubtitleGenaric
    {
        public string Text { get; set; }
    }
    public class BarXAxisGenaric
    {
        public List<string> Categories { get; set; }
        public bool Crosshair { get; set; } = true;
        public bool Visible { get; set; } = true;
        public BarTitleXGenaric Title { get; set; }

        public BarLabelsXGenaric Labels { get; set; }

    }
    public class BarTitleXGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }

    }
    public class BarLabelsXGenaric
    {
        public int rotation { get; set; }
        public string Overflow { get; set; }
        public bool Enabled { get; set; } = true;
        public BarXAxislabelsStyle style { get; set; }
    }
        public class BarXAxislabelsStyle
          {
             public string fontSize { get; set; }
             public string Color { get; set; }

    }
        public class BarYAxisGenaric
         {
        public string GridLineColor { get; set; }
        public bool Visible { get; set; }
        public int? Min { get; set; }
        public int? Max { get; set; }
        public BarTitleYGenaric Title { get; set; }
        public BarLabelsYGenaric Labels { get; set; }
           }
    public class BarTitleYGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }

    }
    public class BarLabelsYGenaric
    {
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public BarLabelStyleYGenaric Style { get; set; }
    }
    public class BarLabelStyleYGenaric
    {
        public string Color { get; set; }
    }
    public class BarTooltipGenaric
    {
        public bool? Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string FooterFormat { get; set; }
        public bool Shared { get; set; }
        public bool UseHTML { get; set; }
        public string ValueSuffix { get; set; }
        public string BackgroundColor { get; set; }
        public BarToolStyleGenaric Style { get; set; }
    }
    public class BarToolStyleGenaric
    {
        public string Color { get; set; }
    }
    public class BarPlotOptionsGenaric
    {
        public BarGenaric Bar { get; set; }
    }
    public class BarGenaric
    {
        public BarDataLabelsPGenaric DataLabels { get; set; }
        public BarTooltipPGenaric Tooltip { get; set; }
    }
    public class BarDataLabelsPGenaric
    {
        public bool Enabled { get; set; }
        public string Color { get; set; }
        public string Format { get; set; }
        public BarDatalabelstylePGenaric Style { get; set; }
    }
    public class BarDatalabelstylePGenaric
    {
        public string fontsize { get; set; }
        public string Color { get; set; }
        public string TextOutline { get; set; }
    }
    public class BarTooltipPGenaric
    {
        public bool? Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string ClusterFormat { get; set; }
    }

    public class BarLegendGenaric
    {
        public string Layout { get; set; }
        public string Align { get; set; }
        public BarItemStyleGenaric ItemStyle { get; set; }
        public string VerticalAlign { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public bool Floating { get; set; }
        public string BorderColor { get; set; }
        public int BorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool Shadow { get; set; }
        public bool? Enabled { get; set; }
    }
    public class BarItemStyleGenaric
    {
        public string Color { get; set; }
    }
    public class BarCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class BarExportingGenaric
    {
        public bool Enabled { get; set; }
        public BarExportingButton buttons { get; set; }
    }
    public class BarExportingButton
    {
        public BarExportingContextButton contextButton { get; set; }
    }
    public class BarExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public BarExportingTheme theme { get; set; }
    }
    public class BarExportingTheme
    {
        public string fill { get; set; }
        public BarExportingStates states { get; set; }
    }
    public class BarExportingStates
    {
        public BarExportingStatesHover hover { get; set; }

        public BarExportingStatesSelect select { get; set; }
    }
    public class BarExportingStatesHover
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class BarExportingStatesSelect
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
}
