using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
  public class StaticGuageChart
    {
        public SolidGaugeChartBasic Chart { get; set; }

        public SolidGaugeTitle Title { get; set; }
        public SolidGaugePane Pane { get; set; }
        public SolidGaugeCreditGauge  Credits { get; set; }
        public SolidGaugeTooltipGauge Tooltip { get; set; }
        public SolidGaugePlotOptions PlotOptions { get; set; }
        public SolidGaugeYAxis YAxis { get; set; }
        public SolidGaugeExporting exporting { get; set; }
        public List<SolidGaugeChartSeries> Series { get; set; }

    }
    public class SolidGaugeChartBasic
    {
        public string Type { get; set; }
        public string PlotBackgroundImage { get; set; }
        public string PlotBorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public int MarginTop { get; set; }
        public int MarginLeft { get; set; }
        public int MarginBottom { get; set; }
        public int MarginRight { get; set; }
    }

    public class SolidGaugeTitle
    {
        public string Text { get; set; }
        //public bool Floating { get; set; }
        public string Align { get; set; }
        public SolidGaugeTitleStyle Style { get; set; }
    }
    public class SolidGaugeTitleStyle
    {

        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontFamily { get; set; }
    }
    public class SolidGaugePane
    {
        public List<string> Center { get; set; }
        public string Size { get; set; }
        public int StartAngle { get; set; }
        public int EndAngle { get; set; }
        public SolidGaugePaneBackground Background { get; set; }

    }
    public class SolidGaugePaneBackground
    {
        public string innerRadius { get; set; }
        public string outerRadius { get; set; }
        public string shape { get; set; }
    }
    public class SolidGaugeCreditGauge
    {
        public bool Enabled { get; set; }
    }
    public class SolidGaugeTooltipGauge
    {
        public bool Enabled { get; set; }

        public string BackgroundColor { get; set; }
        public SolidGaugeTooltipStyle Style { get; set; }
    }
    public class SolidGaugeTooltipStyle
    {
        public string Color { get; set; }
    }
    public class SolidGaugePlotOptions
    {
        public GaugePlot Gauge { get; set; }
    }
    public class GaugePlot
    {
        public string Color { get; set; } 
        public GaugeDatalable DataLabels { get; set; }
        public GaugeDial Dial { get; set; }
        public GaugePivot Pivot { get; set; }
    }
    public class GaugeDatalable
    {
        public int Y { get; set; }
        public int BorderWidth { get; set; }
        public bool UseHTML { get; set; }
        public string Color { get; set; }
    }
    public class GaugeDial
    {
        public string Radius { get; set; }
        public string BackgroundColor { get; set; }
        public int BorderWidth { get; set; }
        public int BaseWidth { get; set; }
        public int TopWidth { get; set; }
        public string BaseLength { get; set; }
        public string RearLength { get; set; }
    }
    public class GaugePivot
    {
        public int Radius { get; set; }
        public string BackgroundColor { get; set; }
    }
    public class SolidPoint
    {
        public string ValueSuffix { get; set; }
    }
    public class SolidGaugeYAxis
    {
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int[] TickPositions { get; set; }
        public LabelsStyle Lable { get; set; }
        public plotBandsYaxix PlotBands { get; set; }

    }
    public class LabelsStyle
    {
        public int Y { get; set; }

    }
    public class plotBandsYaxix
    {
        //public plotBandsColor Color { get; set; }
        public string Color { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public string InnerRadius { get; set; }
        public string OuterRadius { get; set; }
    }

    //public class plotBandsColor
    //{
    //    public int[] LinearGradient { get; set; }

    //    public List<dynamic> Stops { get; set; }
    //}
    public class SolidGaugeChartSeries
    {
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }
        public virtual List<double> Data { get; set; }
        public StaticSolidguageDataLabels dataLabels { get; set; }
        public StaticSolidguagetooltip tooltip { get; set; }
    }
    public class StaticSolidguageDataLabels
    {
        public string format { get; set; }
        public int y { get; set; }
        public int borderwidth { get; set; }
    }
    public class StaticSolidguagetooltip
    {
        public string valueSuffix { get; set; }

    }
    public class SolidGaugeExporting
    {
        public bool Enabled { get; set; }
        public StaticSolidGaugeExportingButton buttons { get; set; }
    }
    public class StaticSolidGaugeExportingButton
    {
        public StaticSolidGaugeExportingContextButton contextButton { get; set; }
    }
    public class StaticSolidGaugeExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public StaticSolidGaugeExportingTheme theme { get; set; }
    }

    public class StaticSolidGaugeExportingTheme
    {
        public string fill { get; set; }
        public StaticSolidGaugeExportingStates states { get; set; }
    }
    public class StaticSolidGaugeExportingStates
    {
        public StaticSolidGaugeExportingStatesHover hover { get; set; }

        public StaticSolidGaugeExportingStatesSelect select { get; set; }
    }
    public class StaticSolidGaugeExportingStatesHover
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class StaticSolidGaugeExportingStatesSelect
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
}
