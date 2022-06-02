using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
   
    public class PieChartGenaric
    {
        public PieChartGenaric()
        {
            Series = new List<PieSeriesGenaric>();
        }
        public PieChartGenaricBasic Chart { get; set; }
        public PieTitleGenaric Title { get; set; }
        public PieTooltipGenaric Tooltip { get; set; }
        public PieCreditsGenaric Credits { get; set; }
        public PieLegendGenaric Legend { get; set; }
        public PieAccessibilityGenaric Accessibility { get; set; }
        public PiePlotOptionsGenaric PlotOptions { get; set; }
        public PieExportingGenaric exporting { get; set; }
        public List<PieSeriesGenaric> Series { get; set; }
    }
    public class PieChartGenaricBasic
    {
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }

        public string PlotBackgroundImage { get; set; }
        public int? PlotBorderWidth { get; set; }

        public bool? PlotShadow { get; set; }

        public object BackgroundColor { get; set; }
        public PieChartStyleGenaric Style { get; set; }

    }
    public class PieChartStyleGenaric
    {
        public string FontFamily { get; set; }
    }
    public class PieTitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public PieStyleGenaric Style { get; set; }

    }
    public class PieStyleGenaric
    {
        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontWeight { get; set; }
        public string FontFamily { get; set; }
    }
    public class PieCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class PieTooltipGenaric
    {
        public bool? Enabled { get; set; }
      //  public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string BackgroundColor { get; set; }
        public PieToolStyleGenaric Style { get; set; }
    }
    public class PieToolStyleGenaric
    {
        public string Color { get; set; }
    }
    public class PieLegendGenaric
    {
        public bool Enabled { get; set; }
    }
    public class PieAccessibilityGenaric
    {
        public PiePointGenaric Point { get; set; }
    }
    public class PiePointGenaric
    {
        public string ValueSuffix { get; set; }
    }
    public class PiePlotOptionsGenaric
    {
        public PieGenaric Pie { get; set; }
    }
    public class PieGenaric
    {
        public PieGenaric()
        {
            Colors = new List<string>();
        }
        public bool AllowPointSelect { get; set; }
        public string Cursor { get; set; }

        public string Color { get; set; }

        public List<string> Colors { get; set; }
        public PieDataLabelsGenaric DataLabels { get; set; }
    }
    public class PieDataLabelsGenaric
    {
        public bool Enabled { get; set; }
        public string Color { get; set; }
        public string Format { get; set; }
        public bool Shadow { get; set; }
        public int DatalableStrokeWidth { get; set; }
        public string DatalableStroke { get; set; }
        public PieDatalabelstyleGenaric Style { get; set; }
    }
    public class PieDatalabelstyleGenaric
    {
        public string Color { get; set; }
        public string TextOutline { get; set; }
        public int DatalableStrokeWidth { get; set; }
        public string DatalableStroke { get; set; }
        public string FontFamily { get; set; }
    }
    public class PieExportingGenaric
    {
        public bool Enabled { get; set; }
        public PieExportingButton buttons { get; set; }
    }
    public class PieExportingButton
    {
        public PieExportingContextButton contextButton { get; set; }
    }
    public class PieExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public PieExportingTheme theme { get; set; }
    }
    public class PieExportingTheme
    {
        public string fill { get; set; }
        public PieExportingStates states { get; set; }
    }
    public class PieExportingStates
    {
        public PieExportingStatesHover hover { get; set; }

        public PieExportingStatesSelect select { get; set; }
    }
    public class PieExportingStatesHover
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class PieExportingStatesSelect
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
}
