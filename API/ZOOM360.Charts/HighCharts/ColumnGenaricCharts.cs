using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
   

    public class ColumnChartGenaric
    {

        public ColumnChartGenaric()
        {
            Series = new List<ColumnSeriesGenaric>();
            XAxis = new List<ColumnXAxisGenaric>();
            Colors = new List<string>();
        }
        public List<string> Colors { get; set; }
        public ColumnChartGenericBasic Chart { get; set; }
        public ColumnCreditsGenaric Credits { get; set; }
        public ColumnTitleGenaric Title { get; set; }
        public ColumnSubtitleGenaric Subtitle { get; set; }
        public List<ColumnXAxisGenaric> XAxis { get; set; }
        public ColumnYAxisGenaric YAxis { get; set; }
        public ColumnTooltipGenaric Tooltip { get; set; }
        public ColumnlegendGenaric Legend { get; set; }
        public ColumnPlotOptionsGenaric PlotOptions { get; set; }
        public ColumnExportingGenaric exporting { get; set; }
        public List<ColumnSeriesGenaric> Series { get; set; }
    }
    public class ColumnChartGenericBasic
    {
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
        public string RenderTo { get; set; }
        public object BackgroundColor { get; set; }
        public ChartStyleColumn Style { get; set; }
        public ChartOptions3dColumn Options3d { get; set; }

    }
    public class ChartOptions3dColumn
    {
        public bool Enabled { get; set; }
        public int Alpha { get; set; }
        public int Beta { get; set; }
        public int Depth { get; set; }
        public int ViewDistance { get; set; }
    }
    public class ChartStyleColumn
    {
        public string FontFamily { get; set; }
    }
    public class ColumnCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class ColumnTitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public ColumnStyleGenaric Style { get; set; }

    }
    public class ColumnStyleGenaric
    {
        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontWeight { get; set; }
        public string FontFamily { get; set; }
    }
    public class ColumnSubtitleGenaric
    {
        public string Text { get; set; }
    }
    public class ColumnXAxisGenaric
    {
        public List<string> Categories { get; set; }
        public bool Crosshair { get; set; } = true;
        public bool Visible { get; set; } = true;
        public TitleGenaric Title { get; set; }
        public ColumnLabelsXGenaric Labels { get; set; }
    }
    public class ColumnTitleXGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }

    }
    public class ColumnLabelsXGenaric
    {
        public int rotation { get; set; }
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
    public ColumnLabelsXGenaricStyle style { get; set; }
}
public class ColumnLabelsXGenaricStyle
    {
    public string fontSize { get; set; }
        public string Color { get; set; }
    }

   
    public class ColumnYAxisGenaric
    {
        public string GridLineColor { get; set; }
        public bool Visible { get; set; }
        public int? Min { get; set; }
        public int? Max { get; set; }

        public ColumnTitleYGenaric Title { get; set; }
        public ColumnLabelsYGenaric Labels { get; set; }
        public ColumnStackLabelsYGenaric StackLabels { get; set; }
    }
    public class ColumnTitleYGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }

    }
    public class ColumnLabelsYGenaric
    {
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public ColumnLabelStyleYGenaric Style { get; set; }
    }
    public class ColumnLabelStyleYGenaric
    {
        public string Color { get; set; }
    }
    public class ColumnStackLabelsYGenaric
    {
        public bool Enabled { get; set; }
        public ColumnStackLabelsStyleYGenaric Style { get; set; }
    }
    public class ColumnStackLabelsStyleYGenaric
    {
        public string FontWeight { get; set; }
        public string Color { get; set; }
        public string TextOutline { get; set; }
    }
    public class ColumnTooltipGenaric
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
        public ColumnToolStyleGenaric Style { get; set; }
    }
    public class ColumnToolStyleGenaric
    {
        public string Color { get; set; }
    }
    public class ColumnlegendGenaric
    {
        public bool? Enabled { get; set; }
    }
    public class ColumnPlotOptionsGenaric
    {
        public ColumnGenaric Column { get; set; }
        public ColumnPlotOptionsGenaricSeries series { get; set; }

    }
    public class ColumnPlotOptionsGenaricSeries
{
        public ColumnDataLabelPlotOptionsGenaric DataLabels { get; set; }

    }
    public class ColumnDataLabelPlotOptionsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class ColumnGenaric
    {
        public double PointPadding { get; set; }
        public int BorderWidth { get; set; }
        public int Depth { get; set; }
        public string Stacking { get; set; }
        public ColumnDataLabelGenaric DataLabels { get; set; }
    }

    public class ColumnDataLabelGenaric
    {
        public string Enabled { get; set; }
        public ColumnDatalableStyleGenaric Style { get; set; }
    }
    public class ColumnDatalableStyleGenaric
    {
        public string Color { get; set; }
        public string TextOutline { get; set; }
    }
    public class ColumnExportingGenaric
    {
        public bool Enabled { get; set; }
        public ColumnExportingButton buttons { get; set; }
    }
    public class ColumnExportingButton
    {
        public ColumnExportingContextButton contextButton { get; set; }
    }
    public class ColumnExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public ColumnExportingTheme theme { get; set; }
    }
    public class ColumnExportingTheme
    {
        public string fill { get; set; }
        public ColumnExportingStates states { get; set; }
    }
    public class ColumnExportingStates
    {
        public ColumnExportingStatesHover hover { get; set; }

        public ColumnExportingStatesSelect select { get; set; }
    }
    public class ColumnExportingStatesHover
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class ColumnExportingStatesSelect
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class ColumnSeriesGenaric
    {
        // public virtual int Depth { get; set; }
        public virtual string Name { get; set; }
        public virtual List<decimal> Data { get; set; }
    }
}
