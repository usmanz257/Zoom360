using CNS.ZOOM360.Entities.Model;
using System;
using System.Collections.Generic;
using System.Text;
using ZOOM360.Identity.Authentication.User;

namespace CNS.ZOOM360.Shared.StoreProcedures.UserAuthorizarion
{
    public interface IUserAuthorization
    {
        public List<UserLoginInfomartionModel> CheckAuthorization(userAuthentication userAuthentication);
        public string UserLoggedIn(userAuthentication userAuthentication);
    }
}
