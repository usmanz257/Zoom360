using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
   public class PageDto
    {
        public string USER_ID { get; set; }
        public string WORKSPACE_ID { get; set; }
        public string CLIENT_ID { get; set; }
        public int Id { get; set; }
        public int WorkbookId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string BSTATUS { get; set; }
        public PagePropertiesDto PageProperties { get; set; }
        //public PageBackground PageBackground { get; set; }

    }
    //public class PageBackground
    //{
    //    public string BackgroundColor1 { get; set; }
    //    public string BackgroundColor2 { get; set; }

    //}
}
