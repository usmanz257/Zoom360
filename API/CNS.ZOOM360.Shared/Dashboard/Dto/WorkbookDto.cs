
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.Dashboard.Dto
{
    public class WorkbookDto
    {
        public string USER_ID { get; set; }
        public string WORKSPACE_ID { get; set; }
        public string CLIENT_ID { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string BSTATUS { get; set; }
        public IList<PageDto> Pages { get; set; }
    }
}
