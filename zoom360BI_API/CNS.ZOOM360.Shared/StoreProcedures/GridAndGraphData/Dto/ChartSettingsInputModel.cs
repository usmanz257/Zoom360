using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.GridAndGraphData.Dto
{
    public class ChartSettingsInputModel
    {
        public string UserId { get; set; }
        public string WorkSpaceId { get; set; }
        public string Client_Id { get; set; }
        public string Chartid { get; set; }
        public string DimentionType { get; set; }
        public string MainTitle { get; set; }
        public string ChartType { get; set; }
        public string ModuleName { get; set; }
        public string SubTitle { get; set; }
        public bool LegendsEnabled { get; set; }
        public bool DataLabelEnabled { get; set; }
        public bool xAxisVisible { get; set; }
        public bool yAxisVisible { get; set; }
        public string GradientBGColor1 { get; set; }
        public string GradientBGColor2 { get; set; }
        public string[] Colors { get; set; }
        public string MarginLeft { get; set; }
        public string MarginBottom { get; set; }
        public string MarginRight { get; set; }
        public string MarginTop { get; set; }
        public bool XAxisallowDecimals { get; set; }
        public string ToolTipHeader { get; set; }
        public bool Marker { get; set; }
        public bool DatalableTextShadow { get; set; }
        public bool DatalableTextOutline { get; set; }
        public string DatalableStroke { get; set; }
        public int DatalableStrokeWidth { get; set; }
        public string Datalabelscolor { get; set; }
        public string Titlecolor { get; set; }
        public string StackDatalabelscolorTop { get; set; }
        //public string Areawidth { get; set; }
        public string LegendsBackgroundColor { get; set; }
        public string DatalabelfontWeight { get; set; }
        //public string Layout { get; set; }
        //public string Align { get; set; }
        //public string VerticalAlign { get; set; }

    }
}
