using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class StockSingleLineSeriesGenaric
    {
        public StockRangeSelector rangeSelector { get; set; }
        public stockTitle title { get; set; }
        public List<StockSeries> series { get; set; }
    }



    //public class SingleLineSeries
    //{
    //    public StockRangeSelector rangeSelector { get; set; }
    //    public stockTitle title { get; set; }
    //    public List<StockSeries> series { get; set; }
    //}
    public class StockRangeSelector
    {
        public int selected { get; set; }
    }

    public class stockTitle
    {
        public string text { get; set; }
    }

    public class stockTooltip
    {
        public decimal valueDecimals { get; set; }
    }

    public class StockSeries
    {
        public string name { get; set; }
        public List<List<object>> data { get; set; }
        public stockTooltip tooltip { get; set; }
    }
}
