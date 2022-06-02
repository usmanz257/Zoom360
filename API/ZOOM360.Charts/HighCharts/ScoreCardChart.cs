using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.HighCharts
{
    public class ScoreCardChart
    {
       
        public ScoreCardChart()
        {
            Dimensions = new List<object>();
            Measures = new List<object>();
        }
        public string Prefix { get; set; }
        public string Suffix { get; set; }
        public string CardImg { get; set; }
        public string CardImgText { get; set; }
        public string ColorForeground { get; set; }
        public string ColorBackground { get; set; }
        public string display { get; set; }
        public string justifyContent { get; set; }
        public string flexDirection { get; set; }
        public string alignItems { get; set; }
        public string width { get; set; }
        public string fontSize { get; set; }
        public string fontWeight { get; set; }
        public string labelfontSize { get; set; }
        public string labelfontWeight { get; set; }
        public string counterAlign { get; set; }
        public string data { get; set; }
        public bool scoreCardHr { get; set; }
        public string bgCounterColor { get; set; }
        public bool bgCounterColorStyle { get; set; }
        public List<object> Dimensions { get; set; }
        public List<object> Measures { get; set; }
    }
}
