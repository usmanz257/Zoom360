using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.TimeLineStatus.Dto
{
   public class TimeLineInputModel
    {
        public string UserId { get; set; }
        public string WorkSpaceId { get; set; }
        public string Client_Id { get; set; }
        public string Platform { get; set; }
    }
}
