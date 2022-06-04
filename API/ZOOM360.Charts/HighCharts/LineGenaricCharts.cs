using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
namespace ZOOM360.Charts.HighCharts
{
    
    public class LineChartGenaric
    {
        public LineChartGenaric()
        {
            Series = new List<LineSeriesGenaric>();
            XAxis = new List<LineXAxisGenaric>();
        Colors = new List<string>();
        }
        public List<string> Colors { get; set; }
        public LineChartGenaricBasic Chart { get; set; }
        public LineTitleGenaric Title { get; set; }
        public LineSubtitleGenaric Subtitle { get; set; }
        public List<LineXAxisGenaric> XAxis { get; set; }
        public LineYAxisGenaric YAxis { get; set; }
        public LineTooltipGenaric Tooltip { get; set; }
        public LinePlotOptionsGenaric PlotOptions { get; set; }
        public LineLegendGenaric Legend { get; set; }
        public LineCreditsGenaric Credits { get; set; }
        public LineExportingGenaric exporting { get; set; }
        public List<LineSeriesGenaric> Series { get; set; }
    }
    public class LineChartGenaricBasic
    {
        public string Type { get; set; }
        public string BackgroundColor { get; set; }
        public string marginLeft { get; set; }
        public string marginBottom { get; set; }
        public string marginRight { get; set; }
        public string marginTop { get; set; }
        public int spacingTop { get; set; }
        public string spacingRight { get; set; }
        public int spacingBottom { get; set; }
        public string spacingLeft { get; set; }
        public LineChartStyleGenaric Style { get; set; }



    }
    public class LineChartStyleGenaric
    {
        public string FontFamily { get; set; }
    }
    public class LineTitleGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }
        public LineStyleGenaric Style { get; set; }
    }
    public class LineStyleGenaric
    {
        public string FontSize { get; set; }
        public string Color { get; set; }
        public string FontWeight { get; set; }
        public string FontFamily { get; set; }
    }
    public class LineSubtitleGenaric
    {
        public string Text { get; set; }
    }
    public class LineXAxisGenaric
    {
        public List<string> Categories { get; set; }
        public bool Crosshair { get; set; } = true;
        public bool Visible { get; set; } = true;
        public LineLabelsXGenaric Labels { get; set; }
        public LineAccessibilityXGenaric Accessibility { get; set; }
    }
    public class LineLabelsXGenaric
    {
        public int rotation { get; set; }
        public bool Enabled { get; set; } = true;
        public LineLabelsXGenaricStyle style { get; set; }
    }
    public class LineLabelsXGenaricStyle
    {
        public string fontSize { get; set; }
    }
    public class LineAccessibilityXGenaric
    {
        public string RangeDescription { get; set; }
    
    }


    public class LineYAxisGenaric
    {
        public string GridLineColor { get; set; }
        public bool Visible { get; set; }
        public int? GridLineWidth { get; set; }
        public int? MinorGridLineWidth { get; set; }

        public object TickPositions { get; set; }
        public LineTitleYGenaric Title { get; set; }
        public LineLabelsYGenaric Labels { get; set; }

    }
    public class LineTitleYGenaric
    {
        public string Align { get; set; }
        public string Text { get; set; }
        public bool Floating { get; set; }

    }
    public class LineLabelsYGenaric
    {
      //  public string Overflow { get; set; }
        public bool Enabled { get; set; }
      //  public bool ConnectorAllowed { get; set; }
      //  public int? Distance { get; set; }
      //  public string Formatter { get; set; }
        public LineLabelStyleYGenaric Style { get; set; }
    }
    public class LineLabelStyleYGenaric
    {
        public string Color { get; set; }
    }

    public class LineTooltipGenaric
    {
        public bool? Enabled { get; set; }
        public string HeaderFormat { get; set; }
        public string PointFormat { get; set; }
        public string FooterFormat { get; set; }
        public string BackgroundColor { get; set; }
        public LineToolStyleGenaric Style { get; set; }
    }
    public class LineToolStyleGenaric
    {
        public string Color { get; set; }
    }

    public class LinePlotOptionsGenaric
    {
        public LineSeriesPGenaric Series { get; set; }
    }
    public class LineSeriesPGenaric
    {
        public int LineWidth { get; set; }
        public Linestates states { get; set; }
        public LineLabelsSeriesGenaric Label { get; set; }

        public LineMarkerGenaric Marker { get; set; }
        public int PointStart { get; set; }

    }
    public class Linestates
    {
        public LineHover hover { get; set; }

    }
    public class LineHover
    {
        public bool enabled { get; set; }
    }


    public class LineLabelsSeriesGenaric
    {
        public string Overflow { get; set; }
        public bool Enabled { get; set; }
        public bool ConnectorAllowed { get; set; }
        public int? Distance { get; set; }
        public string Formatter { get; set; }
        public Labelgenaricstyle Style { get; set; }
    }
    public class LineMarkerGenaric
    {
        public bool Enabled { get; set; }
        public string Symbol { get; set; }
        public int Radius { get; set; }
        public LineStateGenaric States { get; set; }
    }
    public class LineHoverGenaric 
    {
        public bool Enabled { get; set; }
    }
    public class LineStateGenaric
    {
        public bool Enabled { get; set; }
        public LineHoverGenaric Hover { get; set; }
    }
    public class LineLegendGenaric
    {
        public string Layout { get; set; }
        public string Align { get; set; }
        public string VerticalAlign { get; set; }
        public bool Floating { get; set; }
        public bool? Enabled { get; set; }
    }
    public class LineCreditsGenaric
    {
        public bool Enabled { get; set; }
    }
    public class LineExportingGenaric
    {
        public bool Enabled { get; set; }
        public LineExportingButton buttons { get; set; }
    }
    public class LineExportingButton
    {
        public LineExportingContextButton contextButton { get; set; }
    }
    public class LineExportingContextButton
    {
        public string[] menuItems { get; set; }
        public string symbolStroke { get; set; }
        public LineExportingTheme theme { get; set; }
    }
    public class LineExportingTheme
    {
        public string fill { get; set; }
        public LineExportingStates states { get; set; }
    }
    public class LineExportingStates
    {
        public LineExportingStatesHover hover { get; set; }

        public LineExportingStatesSelect select { get; set; }
    }
    public class LineExportingStatesHover
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class LineExportingStatesSelect
    {
        public string symbolStroke { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
    }
    public class LineSeriesGenaric
    {
        public virtual string Name { get; set; }
        public virtual List<decimal> Data { get; set; }
        public string zoneAxis { get; set; }
        public List<object> zones { get; set; }

    }
    public class Serieszonesobj1
    {
        public int value { get; set; }
    }
    public class Serieszonesobj2
    {
        public  string dashStyle { get; set; }
    }


//public class SeriesZone
//{
//    public Serieszonesobj1 value { get; set; }


//    public Serieszonesobj2 dashStyle { get; set; }
//}

//public class Serieszonesobj1
//{
//    public int value { get; set; }
//}
//public class Serieszonesobj2
//{
//    public string dashStyle { get; set; }
//}


}
