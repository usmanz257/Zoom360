using System;
using System.Collections.Generic;
using System.Text;

namespace ZOOM360.Charts.Model
{
    public class Page
    {
        public virtual int Id { get; set; }
        public virtual int WorkbookId { get; set; }
        public virtual Workbook Workbook { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public ICollection<Widget> Widget { get; set; }
        public PageProperties PageProperties { get; set; }

        public string USER_ID { get; set; }
        public string CLIENT_ID { get; set; }
        public string WORKSPACE_ID { get; set; }

        public string BSTATUS { get; set; }
    }
}
