using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class DonutChartGenaric
    {
        public DonutchartGenaric chart { get; set; }
        public DonutTitleGenaric Title { get; set; }
        public DonutTooltipGenaric Tooltip { get; set; }
        public DonutCreditsGenaric Credits { get; set; }
        public DonutLegendGenaric Legend { get; set; }
        public DonutplotOptionsGenaric plotOptions { get; set; }
        public DonutExportingGenaric exporting { get; set; }
        public List<DonutSeriesGenaric> series { get; set; }
    }
    public class DonutchartGenaric
    {
        public string type { get; set; }
        public string renderTo { get; set; }
        public string PlotBorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool PlotShadow { get; set; }
    }
    public class DonutTitleGenaric
    {
        public string Text { get; set; }
        public string Align { get; set; }
        public DonutTitleStyleGenaric Style { get; set; }
    }
    public class DonutTitleStyleGenaric
    {
        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontFamily { get; set; }
    }

    public class DonutTooltipGenaric
    {
        public bool Enabled { get; set; }
        public string PointFormat { get; set; }
        public string BackgroundColor { get; set; }
        public DonutTooltipStyleGenaric Style { get; set; }
    }
    public class DonutTooltipStyleGenaric
    {
        public string Color { get; set; }
    }
    public class DonutCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class DonutLegendGenaric
    {
        public bool Enabled { get; set; }
    }
    public class DonutplotOptionsGenaric
    {
        public DonutPieGenaric Pie { get; set; }

    }
    public class DonutPieGenaric
    {
        public string innerSize { get; set; }
        public DonutDataLabelsGenaric DataLabels { get; set; }
    }
    public class DonutDataLabelsGenaric
    {
        public string Color { get; set; }
        public bool Enabled { get; set; }
        public string Format { get; set; }
        public DonutDatalableStyleGenaric Style { get; set; }

        //public int DatalableStrokeWidht { get; set; }
        //public string DatalableStroke { get; set; }
        public bool Shadow { get; set; }
    }
    public class DonutDatalableStyleGenaric
    {
        public string Color { get; set; }
        public string textOutline { get; set; }
        public int DatalableStrokeWidht { get; set; }
        public string DatalableStroke { get; set; }
        public string FontFamily { get; set; }
    }
    public class DonutSeriesGenaric
    {
        public string Name { get; set; }
        public bool ColorByPoint { get; set; }
        public string InnerSize { get; set; }
        public List<DonutDatumGenaric> Data { get; set; }
    }
    public class DonutDatumGenaric
    {
        public string Name { get; set; }
        public decimal Y { get; set; }
        public bool Sliced { get; set; }
        public bool Selected { get; set; }
    }

    public class DonutExportingGenaric
    {
        public bool Enabled { get; set; }
        public DonutExportingButton buttons { get; set; }
    }
    public class DonutExportingButton
    {
        public DonutExportingContextButton contextButton { get; set; }
    }
    public class DonutExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public DonutExportingTheme theme { get; set; }
    }
    public class DonutExportingTheme
    {
        public string fill { get; set; }
        public DonutExportingStates states { get; set; }
    }
    public class DonutExportingStates
    {
        public DonutExportingStatesHover hover { get; set; }

        public DonutExportingStatesSelect select { get; set; }
    }
    public class DonutExportingStatesHover
    {
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class DonutExportingStatesSelect
    {
        public string fill { get; set; }
        public string stroke { get; set; }
    }


}
