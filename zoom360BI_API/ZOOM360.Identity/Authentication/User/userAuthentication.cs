using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ZOOM360.Identity.Authentication.User
{
    public  class userAuthentication
    {

        [Required]
        public string UserName { get; set; }

       // [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ClientTime { get; set; }
        public string ClientDate { get; set; }
        public string ClientTimeZone { get; set; }
        public string location { get; set; }
        public string ipAddress { get; set; }
        public string macAddress { get; set; }
        public string workspaceId { get; set; }
        public string deviceType { get; set; }
        public string connectionType { get; set; }
        public string loginStatus { get; set; }
        public string clientID { get; set; }
        public string userActivity { get; set; }
    }
}
