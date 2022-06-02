using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.Model
{
    public class UserLoginInfomartionModel
    {
        [Column("SUB_USER_ID")] 
        public string subUserId { get; set; }
        [Column("CLIENT_ID")]
        public string clientId { get; set; }
        [Column("WORKSPACE_ID")]
        public string workspaceId { get; set; }
        [Column("CLIENT_NAME")]
        public string clientName { get; set; }
        [Column("CLIENT_LOGO")]
        public string clientLogo { get; set; }
        [Column("EMAIL_ADDRESS")]
        public string emailAddress { get; set; }
        [Column("LOGIN_USER_NAME")]
        public string loginUserName { get; set; }
        [Column("USER_DEPARTMENT_INFO")]
        public string userDeptInfo { get; set; }
        [Column("LOGIN_USER_IAMGE")]
        public string loginuserImage { get; set; }
        [Column("DEFAULT_DISPLAY_MODE")]
        public string defaultDisplayMode { get; set; }
        [Column("DEFAULT_PAGE")]
        public string defaultPage { get; set; }
        [Column("DISPLAY_THEME")]
        public string displayTheme { get; set; }
    }
}
