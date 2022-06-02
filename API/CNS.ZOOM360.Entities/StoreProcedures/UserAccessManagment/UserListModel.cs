using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.UserAccessManagment
{
   public class UserListModel
    {
		[Column("SUB_USER_ID")]
		public string SubUserId { get; set; }

		[Column("EMAIL_ADDRESS")]
		public string EmailAddress { get; set; }
		[Column("WORKSPACE_NAME")]
		public string? Workspaces { get; set; }
		[Column("LAST_ACTIVITY")]
		public string LastActivity { get; set; }
		[Column("LAST_STATUS")]
		public string? LastStatus { get; set; }
		[Column("USER_ACTIVE")]
		public bool? UserActive { get; set; }
		
	}
}
