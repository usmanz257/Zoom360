using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class DualAxisColumnAreaChart
    {
            public DualAxisColumnAreaChart()
            {
                Series = new List<DualAxisColumnAreaSeries>();
                Colors = new List<string>();
                XAxis = new List<DualColumnAreaXAxis>();
                YAxis = new List<DualColumnAreaYAxis>();
            }
            public List<string> Colors { get; set; }
            public DualColumnAreaChart Chart { get; set; }
            public DualColumnAreaTitle Title { get; set; }
            public DualColumnAreaSubtitle Subtitle { get; set; }
            public List<DualColumnAreaXAxis> XAxis { get; set; }
            public List<DualColumnAreaYAxis> YAxis { get; set; }
            public DualColumnAreaTooltip Tooltip { get; set; }
            public DualColumnAreaLegend Legend { get; set; }
            public DualColumnAreaCredits Credits { get; set; }
            public DualColumnAreaExporting exporting { get; set; }
            public List<DualAxisColumnAreaSeries> Series { get; set; }
        }
        public class DualColumnAreaChart
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
        public class DualColumnAreaTitle
    {
            public bool Floating { get; set; }
            public string Text { get; set; }
            public string Align { get; set; }
            public DualColumnAreaTitleStyle Style { get; set; }
        }
        public class DualColumnAreaTitleStyle
        {
            public string font { get; set; }
            public string Color { get; set; }
            public bool floating { get; set; }
            public string FontSize { get; set; }
            public string fontWeight { get; set; }
            public string FontFamily { get; set; }
        }



        public class DualColumnAreaSubtitle
        {
            public string Text { get; set; }
        }
        public class DualColumnAreaTooltip
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
        public class DualColumnAreaXAxis
        {
            public List<string> Categories { get; set; }
            public bool Crosshair { get; set; } = true;
            public bool Visible { get; set; } = true;
            public Title Title { get; set; }
            public DualColumnAreaXAxislabels labels { get; set; }
            public bool? AllowDecimals { get; set; }
        }
        public class DualColumnAreaXAxislabels
    {
            public int rotation { get; set; }
            public DualColumnAreaXAxislabelsStyle style { get; set; }
        }
        public class DualColumnAreaXAxislabelsStyle
    {
            public string fontSize { get; set; }
        }
        public class DualColumnAreaLegend
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

        public class DualAxisColumnAreaSeries
        {
            public virtual string Name { get; set; }
            public int yAxis { get; set; }
            public string Type { get; set; }
            public virtual List<decimal> Data { get; set; }
        }
        public class DualColumnAreaYAxis
        {
            public bool Visible { get; set; } = true;
            public bool Opposite { get; set; }
            public DualColumnAreaYAxisTitle Title { get; set; }
        }
        public class DualColumnAreaYAxisTitle
        {
            public bool Floating { get; set; }
            public string Text { get; set; }
            public string Align { get; set; }
            // public DualColumnAreaYAxisStyle Style { get; set; }
        }
        //public class DualColumnAreaYAxisStyle
        //{
        //    public string Color { get; set; }
        //}

        public class DualColumnAreaCredits
        {
            public bool Enabled { get; set; }
        }
        public class DualColumnAreaExporting
        {
            public bool Enabled { get; set; }
            //    public DualColumnAreaExportingContextButton contextButton { get; set; }
        }
        //public class DualColumnAreaExportingContextButton
        //{
        //    public string[] menuItems { get; set; }
        //    public string symbolStroke { get; set; }
        //    public DualColumnAreaExportingTheme theme { get; set; }
        //}
        //public class DualColumnAreaExportingTheme
        //{
        //    public string fill { get; set; }
        //    public DualColumnAreaExportingStates states { get; set; }
        //}
        //public class DualColumnAreaExportingStates
        //{
        //    public DualColumnAreaExportingStatesHover hover { get; set; }

        //    public DualColumnAreaExportingStatesSelect select { get; set; }
        //}
        //public class DualColumnAreaExportingStatesHover
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
