using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class BulletGenaricCharts
    {
        public BulletGenaricCharts()
        {
            Series = new List<BulletSeriesGenaric>();
            XAxis = new List<BulletXAxisGenaric>();
            // Colors = new List<string>();
        }
        //  public List<string> Colors { get; set; }
        public BulletChartGenaricBasic Chart { get; set; }

        public BulletTitleGenaric Title { get; set; }
        public BulletCreditGaugeGenaric Legend { get; set; }
        public List<BulletXAxisGenaric> XAxis { get; set; }
        public BulletYAxisGenaric YAxis { get; set; }
        public BulletPlotOptionsGenaric PlotOptions { get; set; }
        public BulletCreditGaugeGenaric Credits { get; set; }
        public BulletExportingGenaric Exporting { get; set; }
        public BulletTooltipGenaric Tooltip { get; set; }


        public List<BulletSeriesGenaric> Series { get; set; }

    }

    public class BulletChartGenaricBasic
    {
        public int MarginTop { get; set; }
        public bool Inverted { get; set; }
        public int MarginLeft { get; set; }
        public string Type { get; set; }
    }
    public class BulletTitleGenaric
    {
        public string Text { get; set; }
    }
    public class BulletCreditGaugeGenaric
    {
        public bool Enabled { get; set; }
    }
    public class classBulletXAxisGenaric 
    {
        public List<string> Categories { get; set; }
    }

    public class BulletXAxisGenaric
    {
        public List<string> Categories { get; set; }
        public bool Crosshair { get; set; } = true;
        public bool Visible { get; set; } = true;
        public BulletTitleXGenaric Title { get; set; }
        public BulletLabelsXGenaric Labels { get; set; }
    }
    public class BulletTitleXGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }

    }
    public class BulletLabelsXGenaric
    {
        public int rotation { get; set; }
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public BulletLabelsXGenaricStyle style { get; set; }
    }
    public class BulletLabelsXGenaricStyle
    {
        public string fontSize { get; set; }
        public string Color { get; set; }
    }


    public class BulletYAxisGenaric
    {
        public int GridLineWidth { get; set; }
        public List<BulletPlotbandGenaric> PlotBands { get; set; }
        public string Title { get; set; }
    }
    public class BulletPlotbandGenaric
    {
        public int From { get; set; }
        public int To { get; set; }
        public string Color { get; set; }
    }

    public class BulletPlotOptionsGenaric
    {
        public BulletPlotGenaric Bullet { get; set; }
    }
    public class BulletPlotGenaric
    {
        public int pointPadding { get; set; }
        public int BorderWidth { get; set; }
        public string Color { get; set; }
        public string Width { get; set; }
        public BulletTargetOptionsGenaric TargetOptions { get; set; }
    }
    public class BulletTargetOptionsGenaric
    {
        public string Width { get; set; }
        public int Height { get; set; }
    }
    public class BulletExportingGenaric
    {
        public bool Enabled { get; set; }
    }
    public class BulletTooltipGenaric
    {
        public string PointFormat { get; set; }
    }
    public class BulletSeriesGenaric
    {

        public virtual List<BulletData> Data { get; set; }
    }
    public class BulletData
    {

        public virtual decimal Y { get; set; }
        public virtual decimal Target { get; set; }
    }
}
