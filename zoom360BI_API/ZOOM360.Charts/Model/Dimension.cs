﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class Dimension
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string Type { get; set; }
        public virtual bool IsEnabled { get; set; }
        public virtual int WidgetId { get; set; }
        public Widget Widget { get; set; }
    }
}
