using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures
{
   public class UserLogModel
    {
        [Column("SUB_USER_ID")]
        public string sub_User_Id { get; set; }
        [Column("CLIENT_ID")]
        public string Client_Id { get; set; }
        [Column("USER_LOGIN_ID")]
        public string user_LogIn_Id { get; set; }
        [Column("DATE_ACCESS_START")]
        public string date_Access_Start { get; set; }
        [Column("WORKSPACE_PARENT_NAME")]
        public string workSpace_Parent_Name { get; set; }
        [Column("WORKSPACE_NAME")]
        public string workSpace_Name { get; set; }
        [Column("DATE_ACCESS_END")]
        public string date_Access_End { get; set; }
        [Column("ACTIVE")]
        public string active { get; set; }

    }
}
