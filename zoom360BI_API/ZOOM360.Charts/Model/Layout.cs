using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class Layout
    {
        public virtual int Id { get; set; }
        public virtual int Columns { get; set; }
        public virtual int Rows { get; set; }
        public virtual int SizeX { get; set; }
        public virtual int SizeY { get; set; }

        public virtual int WidgetId { get; set; }
        public Widget Widget { get; set; }
    }
}
