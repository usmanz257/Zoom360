using System;
using System.Collections.Generic;
using System.Text;
namespace ZOOM360.Charts.HighCharts
{
    public class TabularDataModel
    {
        public TabularDataModel()
        {
            Dimensions = new List<object>();
            Measures = new List<object>();
        }
        public List<object> Dimensions { get; set; }
        public List<object> Measures { get; set; }
    }
}
