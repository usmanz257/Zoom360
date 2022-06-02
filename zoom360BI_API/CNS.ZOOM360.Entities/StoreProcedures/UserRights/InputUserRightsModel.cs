using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.UserRights
{
 public   class InputUserRightsModel
    {
		public string UserId { get; set; }
		public string subUserId { get; set; }
		public string WorkspaceId { get; set; }
		public string ClientId { get; set; }
		public string url { get; set; }
		
	}
}
