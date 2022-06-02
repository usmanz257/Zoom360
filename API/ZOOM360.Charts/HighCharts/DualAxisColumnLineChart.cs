using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class DualAxisColumnLineChart
    {
        public DualAxisColumnLineChart()
        {
            Series = new List<DualAxisColumnLineSeries>();
            Colors = new List<string>();
            XAxis = new List<DualColumnLineXAxis>();
            YAxis = new List<DualColumnLineYAxis>();
        }
        public List<string> Colors { get; set; }
        public DualColumnLineChart Chart { get; set; }
        public DualColumnLineTitle Title { get; set; }
        public DualColumnLineSubtitle Subtitle { get; set; }
        public List<DualColumnLineXAxis> XAxis { get; set; }
        public List<DualColumnLineYAxis> YAxis { get; set; }
        public DualColumnLineTooltip Tooltip { get; set; }
        public DualColumnLineLegend Legend { get; set; }
        public DualColumnLineCredits Credits { get; set; }
        public DualColumnLineExporting exporting { get; set; }
        public List<DualAxisColumnLineSeries> Series { get; set; }
    }
    public class DualColumnLineChart
    {
        public string ZoomType { get; set; }
        public string marginLeft { get; set; }
        public string marginBottom { get; set; }
        public string marginRight { get; set; }
        public string marginTop { get; set; }
        //public int spacingTop { get; set; }
        public int spacingRight { get; set; }
        //public int spacingBottom { get; set; }
        //public string spacingLeft { get; set; }
        //public object BackgroundColor { get; set; }

    }
    public class DualColumnLineTitle
    {
        public bool Floating { get; set; }
        public string Text { get; set; }
        public string Align { get; set; }
        public DualColumnLineTitleStyle Style { get; set; }
    }
    public class DualColumnLineTitleStyle
    {
        public string font { get; set; }
        public string Color { get; set; }
        public bool floating { get; set; }
        public string FontSize { get; set; }
        public string fontWeight { get; set; }
        public string FontFamily { get; set; }
    }



    public class DualColumnLineSubtitle
    {
        public string Text { get; set; }
    }
    public class DualColumnLineTooltip
    {
        public bool? Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string FooterFormat { get; set; }
        public string ClusterFormat { get; set; }
        public bool Shared { get; set; }
        public bool UseHTML { get; set; }
        public string ValueSuffix { get; set; }
    }
    public class DualColumnLineXAxis
    {
        public List<string> Categories { get; set; }
        public bool Crosshair { get; set; } = true;
        public bool Visible { get; set; } = true;
        public Title Title { get; set; }
        public XAxislabels labels { get; set; }
        public bool? AllowDecimals { get; set; }
    }
    public class XAxislabels{
        public int rotation { get; set; }
        public XAxislabelsStyle style { get; set; }
    }
    public class XAxislabelsStyle
    {
        public string fontSize { get; set; }
    }
    public class DualColumnLineLegend
    {
        public string Layout { get; set; }
        public string Align { get; set; }
        public string VerticalAlign { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public bool Floating { get; set; }
        public int BorderWidth { get; set; }
        public string BackgroundColor { get; set; }
        public bool Shadow { get; set; }
        public bool? Enabled { get; set; }
    }

    public class DualAxisColumnLineSeries
    {
        public virtual string Name { get; set; }
        public int yAxis { get; set; }
        public string Type { get; set; }
        public virtual List<decimal> Data { get; set; }
    }
    public class DualColumnLineYAxis
    {
        public bool Visible { get; set; } = true;
        public bool Opposite { get; set; }
        public DualColumnLineYAxisTitle Title { get; set; }
    }
    public class DualColumnLineYAxisTitle
    {
        public bool Floating { get; set; }
        public string Text { get; set; }
        public string Align { get; set; }
       // public DualColumnLineYAxisStyle Style { get; set; }
    }
    //public class DualColumnLineYAxisStyle
    //{
    //    public string Color { get; set; }
    //}

    public class DualColumnLineCredits
    {
        public bool Enabled { get; set; }
    }
    public class DualColumnLineExporting
    {
       public bool Enabled { get; set; }
    //    public DualColumnLineExportingContextButton contextButton { get; set; }
   }
    //public class DualColumnLineExportingContextButton
    //{
    //    public string[] menuItems { get; set; }
    //    public string symbolStroke { get; set; }
    //    public DualColumnLineExportingTheme theme { get; set; }
    //}
    //public class DualColumnLineExportingTheme
    //{
    //    public string fill { get; set; }
    //    public DualColumnLineExportingStates states { get; set; }
    //}
    //public class DualColumnLineExportingStates
    //{
    //    public DualColumnLineExportingStatesHover hover { get; set; }

    //    public DualColumnLineExportingStatesSelect select { get; set; }
    //}
    //public class DualColumnLineExportingStatesHover
    //{
    //    public string fill { get; set; }
    //    public string stroke { get; set; }
    //}
    //public class DualColumnLineExportingStatesSelect
    //{
    //    public string fill { get; set; }
    //    public string stroke { get; set; }
    //}
}
