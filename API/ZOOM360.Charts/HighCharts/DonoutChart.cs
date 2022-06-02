using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
   public class DonoutChart
    {
        public Donutchart chart { get; set; }
        public DonutTitle Title { get; set; }
        public DonutTooltip Tooltip { get; set; }
        public AccessibilityDonut Accessibility { get; set; }
        public DonutCredits Credits { get; set; }
        public DonutLegend Legend { get; set; }
        public DonutplotOptions plotOptions { get; set; }
        //public DonutExporting exporting { get; set; }
        public List<DonutSeries> series { get; set; }
    }
    public class Donutchart
    {
        public int PlotBorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool PlotShadow { get; set; }
    }
    public class DonutTitle
    {
        public string Text { get; set; }
        public string Align { get; set; }
        public string VerticalAlign { get; set; }
        public int Y { get; set; }
        public DonutTitleStyle Style { get; set; }
    }
    public class DonutTitleStyle { 
        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontFamily { get; set; }
    }

    public class DonutTooltip
    {
        public string PointFormat { get; set; }
        public bool Enabled { get; set; }
        public string BackgroundColor { get; set; }
        public DonutTooltipStyle Style { get; set; }
    }
    public class DonutTooltipStyle
    {
        public string Color { get; set; }
    }
    public class AccessibilityDonut
    {
        public pointDonut Point { get; set; }

    }
    public class pointDonut
    {
        public string ValueSuffix { get; set; }
    }
    public class DonutCredits
    {
        public bool Enabled { get; set; }
    }
    public class DonutLegend
    {
        public bool Enabled { get; set; }
    }
    public class DonutplotOptions
    {
        public DonutPie Pie { get; set; }

    }
    public class DonutPie
    {
        public bool AllowPointSelect { get; set; }

        public string Cursor { get; set; }
        public string Size { get; set; }
      
        public DonutDataLabels DataLabels { get; set; }
    }
    public class DonutDataLabels
    {

        public bool Enabled { get; set; }
        public string Format { get; set; }
        public int Distance { get; set; }
        public DonutDatalableStyle Style { get; set; }

        //public int DatalableStrokeWidht { get; set; }
        //public string DatalableStroke { get; set; }
        public bool Shadow { get; set; }
    }
    public class DonutDatalableStyle
    {
        public string Color { get; set; }
        public string FontWeight { get; set; }
    }
    public class DonutSeries
    {
        public string type { get; set; }
        public string Name { get; set; }
        public bool ColorByPoint { get; set; }
        public string InnerSize { get; set; }
        public List<DonutDatum> Data { get; set; }
    }
    public class DonutDatum
    {
        public string Name { get; set; }
        public decimal Y { get; set; }
        public bool Sliced { get; set; }
        public bool Selected { get; set; }
    }

    //public class DonutExporting { 
    //    public bool Enabled { get; set; }
    //    public StaticDonutExportingButton buttons { get; set; }
    //}
    //public class StaticDonutExportingButton
    //{
    //    public StaticDonutExportingContextButton contextButton { get; set; }
    //}
    //public class StaticDonutExportingContextButton
    //{
    //    public string[] menuItems { get; set; }
    //    public string symbolStroke { get; set; }
    //    public StaticDonutExportingTheme theme { get; set; }
    //}
    //public class StaticDonutExportingTheme
    //{
    //    public string fill { get; set; }
    //    public StaticDonutExportingStates states { get; set; }
    //}
    //public class StaticDonutExportingStates
    //{
    //    public StaticDonutExportingStatesHover hover { get; set; }

    //    public StaticDonutExportingStatesHover select { get; set; }
    //}
    //public class StaticDonutExportingStatesHover
    //{
    //    public string fill { get; set; }
    //    public string stroke { get; set; }
    //}
    //public class StaticDonutExportingStatesSelect
    //{
    //    public string fill { get; set; }
    //    public string stroke { get; set; }
    //}


}
