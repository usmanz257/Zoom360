using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class BasicColumnChart
    {
        public BasicChart chart { get; set; }
        public BasicTitle Title { get; set; }
        public BasicSubtitle Subtitle { get; set; }
        public BasicXAxis XAxis { get; set; }
        public BasicYAxis YAxis { get; set; }
        public BasicTooltip Tooltip { get; set; }
        public BasicPlotOptions PlotOptions { get; set; }
        public List<BasicSeries> Series { get; set; }
        public BasicLegend Legend { get; set; }
        public Basiccredits Credits { get; set; }
       public string[] Colors { get; set; }
        
    }
    public class PlotBackgroundColorColumn
    {
        public int[] linearGradient { get; set; }
        public dynamic[,] Stops { get; set; }
    }
    public class BasicChart
    {
      
        public string Type { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
        public PlotBackgroundColorColumn backgroundColor { get; set; }
    }

    public class BasicTitle
    {
        public string Text { get; set; }
    }
    public class BasicSubtitle
    {
        public string Text { get; set; }
    }
    public class BasicXAxis
    {

        public bool Visible { get; set; }
        public List<string> Categories { get; set; }
        public bool crosshair { get; set; }
    }
    public class BasicYAxis
    {
        public bool Visible { get; set; }
        public int Min { get; set; }
        public BasicTitle2 Title { get; set; }

    }
    public class BasicTitle2
    {
        public string Text { get; set; }
    }
    public class BasicTooltip
    {
        public bool Enabled { get; set; }
        public string headerFormat { get; set; }

        public string pointFormat { get; set; }
        public string footerFormat { get; set; }
        public bool shared { get; set; }
        public bool useHTML { get; set; }
    }
    public class BasicLegend
    {
        public bool Enabled { get; set; }
    }

    public class BasicPlotOptions
    {

        public Basiccolumn Column { get; set; }
        //public BasicColors colors { get; set; }
    }
    public class Basiccolumn
    {
        public double? pointPadding { get; set; }
        public int borderWidth { get; set; }
    }

    public class BasicSeries
    {
        public string Name { get; set; }
        public List<double> Data { get; set; }
    }
    public class Basiccredits
    {
        public bool Enabled { get; set; }
    }
    //public class BasicColors
    //{
    //    public string[] colors { get; set; }
    //}
}

