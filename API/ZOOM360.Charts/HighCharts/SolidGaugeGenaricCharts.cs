using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class SolidGaugeChartGenaric
    {
        //public SolidGaugeChartGenaric()
        //{
            //Series = new List<SolidGaugeSeriesGenaric>();
           // Colors = new List<string>();
        //}
      //  public List<string> Colors { get; set; }
        public SolidGaugeChartGenaricBasic Chart { get; set; }

        public SolidGaugeTitleGenaric Title { get; set; }
        public SolidGaugePaneGenaric Pane { get; set; }
        public SolidGaugeCreditGaugeGenaric Credits { get; set; }
        public SolidGaugeTooltipGaugeGenaric Tooltip { get; set; }
        public SolidGaugePlotOptionsGenaric PlotOptions { get; set; }
        public SolidGaugeYAxisGenaric YAxis { get; set; }
        public SolidGaugeExportingGenaric exporting { get; set; }
        public List<SolidGaugeChartSeriesGenaric> Series { get; set; }

    }



    public class SolidGaugeChartGenaricBasic
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
//    public class SolidGaugeTitleGenaric
//{ 
//        //public int? PlotBorderWidth { get; set; }

//        //public bool? PlotShadow { get; set; }

//        public object backgroundColor { get; set; }

//        }

        public class SolidGaugeTitleGenaric
    {
        public string Text { get; set; }
        //public bool Floating { get; set; }
        public string Align { get; set; }
        public SolidGaugeTitleStyleGenaric Style { get; set; }
    }
    public class SolidGaugeTitleStyleGenaric
{

        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontFamily { get; set; }
      
        
    }

    public class SolidGaugePaneGenaric
    {
        public List<string> Center { get; set; }
        public string Size { get; set; }
        public int StartAngle { get; set; }
        public int EndAngle { get; set; }
        public SolidGaugePaneGenaricBackground Background { get; set; }

    }
    public class SolidGaugePaneGenaricBackground
    {
        public string innerRadius { get; set; }
        public string outerRadius { get; set; }
        public string shape { get; set; }
    }

    public class SolidGaugeCreditGaugeGenaric
    {
        public bool Enabled { get; set; }
    }
    //public class SolidGaugeTooltipGaugeGenaric
    //{
    //    public bool? Enabled { get; set; }
    //}
    public class SolidGaugeTooltipGaugeGenaric
    {
        public bool Enabled { get; set; }

        public string BackgroundColor { get; set; }
        public SolidGaugeTooltipStyleGenaric Style { get; set; }
    }
    public class SolidGaugeTooltipStyleGenaric
    {
        public string Color { get; set; }
    }
    public class SolidGaugePlotOptionsGenaric
    {
        public GaugePlotGenaric Gauge { get; set; }
    }
    public class GaugePlotGenaric
    {
        public GaugeDatalableGenaric DataLabels { get; set; }
        public GaugeDialGenaric Dial { get; set; }
        public GaugePivotGenaric Pivot { get; set; }
    }
    public class GaugeDatalableGenaric
    {
        public int Y { get; set; }
        public int BorderWidth { get; set; }
        public bool UseHTML { get; set; }
        public string Color { get; set; }
    }
    public class GaugeDialGenaric
    {
        public string Radius { get; set; }
        public string BackgroundColor { get; set; }
        public int BorderWidth { get; set; }
        public int BaseWidth { get; set; }
        public int TopWidth { get; set; }
        public string BaseLength { get; set; }
        public string RearLength { get; set; }
    }
    public class GaugePivotGenaric
    {
        public int Radius { get; set; }
        public string BackgroundColor { get; set; }
}
    public class SolidPointGenaric
    {
        public string ValueSuffix { get; set; }
    }
    public class SolidGaugeYAxisGenaric
    {
        public int? Min { get; set; }
        public int? Max { get; set; }
        public int[] TickPositions { get; set; }
        public plotBandsYaxixGenaric PlotBands { get; set; }
   
    }
    public class plotBandsYaxixGenaric
    {
        public plotBandsColorGenaric Color { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public string InnerRadius { get; set; }
        public string OuterRadius { get; set; }
    }
    public class plotBandsColorGenaric
    {
        public int[] LinearGradient { get; set; }

        public List<dynamic> Stops { get; set; }
    }

    //public class PlotbandGaugeYAxisGenaric
    //{
    //    public plotBandsColorGenaric color { get; set; }
    //    public int? min { get; set; }
    //    public int? max { get; set; }
    //    public int from { get; set; }
    //    public dynamic[] TickPositions { get; set; }

    //    public PlotbandGaugeYAxisGenaric plotBands { get; set; }
    //    public int to { get; set; }
    //    public string innerRadius { get; set; }
    //    public string outerRadius { get; set; }

    //}
    //public class plotBandsColorGenaric
    //{
    //    public int[] LinearGradient { get; set; }
    //    public List<dynamic> stops { get; set; }
    //}
    //public class SolidGaugePaneGenaric
    //{
    //    public int StartAngle { get; set; }
    //    public int EndAngle { get; set; }
    //    public string size { get; set; }
    //    public List<string> Center { get; set; }
    //    public SolidGaugebackgroundGenaric Background { get; set; }
    //}
    //public class SolidGaugebackgroundGenaric
    //{
    //    //public string backgroundColor { get; set; }
    //    public string shape { get; set; }
    //    public string innerRadius { get; set; }
    //    public string outerRadius { get; set; }
    //}
    //public class SolidGaugecredits
    //{
    //    public bool enabled { get; set; }
    //}


    //public class PlotoptionSolidGaugeGenaric
    //{
    //    public GaugeGenaricgauge gauge { get; set; }
    //}

    //public class GaugeGenaricgauge
    //{
    //    public GaugeGenaricDataLabels dataLabels { get; set; }
    //    public GaugeGenaricpivot pivot { get; set; }
    //    public GaugeGenaricdial dial { get; set; }
    //}



    //public class GaugeGenaricDataLabels
    //{
    //    public int y { get; set; }
    //    public int borderWidth { get; set; }
    //    public bool useHTML { get; set; }
    //}
    //public class GaugeGenaricpivot
    //{
    //public int radius { get; set; }
    //}

    //public class GaugeGenaricdial
    //{
    //    public string radius { get; set; }
    //    public string backgroundColor { get; set; }
    //    public int borderWidth { get; set; }
    //    public int baseWidth { get; set; }
    //    public int topWidth { get; set; }
    //    public string baseLength { get; set; }
    //    public string rearLength { get; set; }
    //}



    //public class SolidGaugeResponsiveGenaric
    //{
    //    public SolidGaugeResponsiveGenaric()
    //    {
    //        Rules = new List<SolidGaugeRuleGenaric>();
    //    }
    //    public List<SolidGaugeRuleGenaric> Rules { get; set; }
    //}

    //public class SolidGaugeRuleGenaric
    //{
    //    public SolidGaugeConditionGenaric Condition { get; set; }
    //    public SolidGaugeChartOptionsGenaric ChartOptions { get; set; }
    //}


    //public class SolidGaugeChartOptionsGenaric
    //{
    //    public LegendGenaric Legend { get; set; }
    //}


    //public class SolidGaugeConditionGenaric
    //{
    //    public int MinHeight { get; set; }
    //    public int MinWidth { get; set; }
    //    public int MaxWidth { get; set; }
    //}
    public class SolidGaugeChartSeriesGenaric
    {
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }
        public virtual List<decimal> Data { get; set; }
        public SolidguageDataLabels dataLabels { get; set; }
        public Solidguagetooltip tooltip { get; set; }
    }
    public class SolidguageDataLabels
    {
        public string format { get; set; }
        public int y { get; set; }
        public int  borderwidth { get; set; }
    }
    public class Solidguagetooltip
    {
        public string valueSuffix { get; set; }
        
    }
    //public class SolidGuageDatumGenaric
    //{
    //    public string Name { get; set; }
    //    public decimal Y { get; set; }

    //    public bool Selected { get; set; }
    //}
    public class SolidGaugeExportingGenaric
    {
        public bool Enabled { get; set; }
        public SolidGaugeExportingButton buttons { get; set; }
    }
    public class SolidGaugeExportingButton
    {
        public SolidGaugeExportingContextButton contextButton { get; set; }
    }
    public class SolidGaugeExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public SolidGaugeExportingTheme theme { get; set; }
    }
    public class SolidGaugeExportingTheme
    {
        public string fill { get; set; }
        public SolidGaugeExportingStates states { get; set; }
    }
    public class SolidGaugeExportingStates
    {
        public SolidGaugeExportingStatesHover hover { get; set; }

        public SolidGaugeExportingStatesSelect select { get; set; }
    }
    public class SolidGaugeExportingStatesHover
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class SolidGaugeExportingStatesSelect
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
}
