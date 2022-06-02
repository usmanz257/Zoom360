using CNS.ZOOM360.Entities.Model;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.UserAuthorizarion;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using ZOOM360.Identity.Authentication.User;

namespace CNS.ZOOM360.Services.StoreProcedures.UserAuthorizarion
{
    public class CustomUserAuthorization : IUserAuthorization
    {
        private readonly IRepositoryBase<UserLoginInfomartionModel> _userAutorizationRepository;
        private readonly IRepositoryBase<userAuthentication> _userLoggedinRepository;
        public CustomUserAuthorization(
            IRepositoryBase<UserLoginInfomartionModel> userAutorizationRepository,
            IRepositoryBase<userAuthentication> userLoggedinRepository)

        {
            _userAutorizationRepository = userAutorizationRepository;
            _userLoggedinRepository = userLoggedinRepository;
        }
        public List<UserLoginInfomartionModel> CheckAuthorization(userAuthentication userAuthentication)
        {
            object[] parameters = {

                new SqlParameter("@USER_ID",string.IsNullOrEmpty(userAuthentication.Email) ? (object)DBNull.Value: userAuthentication.Email),
                new SqlParameter("@PASSWORD ",string.IsNullOrEmpty(userAuthentication.Password) ? (object)DBNull.Value: userAuthentication.Password),
                new SqlParameter("@WORKSPACE_ID",string.IsNullOrEmpty(userAuthentication.workspaceId) ? (object)DBNull.Value: userAuthentication.workspaceId),
                new SqlParameter("@CLIENT_ID", string.IsNullOrEmpty(userAuthentication.clientID) ? (object)DBNull.Value: userAuthentication.clientID),
                new SqlParameter("@IP_ADDDRESS",string.IsNullOrEmpty(userAuthentication.ipAddress) ? (object)DBNull.Value: userAuthentication.ipAddress),
                new SqlParameter("@MAC_ADDRESS",string.IsNullOrEmpty(userAuthentication.macAddress) ? (object)DBNull.Value: userAuthentication.macAddress),
                new SqlParameter("@DEVICE_TYPE",string.IsNullOrEmpty(userAuthentication.deviceType) ? (object)DBNull.Value: userAuthentication.deviceType),
                new SqlParameter("@CONNECTION_TYPE",string.IsNullOrEmpty(userAuthentication.connectionType) ? (object)DBNull.Value: userAuthentication.connectionType),
                new SqlParameter("@LOCATION ",string.IsNullOrEmpty(userAuthentication.location) ? (object)DBNull.Value: userAuthentication.location),
                new SqlParameter("@CLIENT_DATE", string.IsNullOrEmpty(userAuthentication.ClientDate) ? (object)DBNull.Value: userAuthentication.ClientDate),
                new SqlParameter("@CLIENT_TIME", string.IsNullOrEmpty(userAuthentication.ClientTime) ? (object)DBNull.Value: userAuthentication.ClientTime),
                new SqlParameter("@CLIENT_TIME_ZONE", (object)DBNull.Value),
                
                new SqlParameter{ ParameterName = "@V_MESSAGE",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.NVarChar,
                Size = 4000,
                Value = ""
                }, 
            };

            string spQuery = StoreProcedureConstants.Sp_GetuserLoginStatus + " @USER_ID,@PASSWORD, @WORKSPACE_ID, @CLIENT_ID, " +
                 "@IP_ADDDRESS, @MAC_ADDRESS, @DEVICE_TYPE, @CONNECTION_TYPE, @LOCATION," +
                "@CLIENT_DATE, @CLIENT_TIME, @CLIENT_TIME_ZONE, @V_MESSAGE OUTPUT";
            List<UserLoginInfomartionModel> extractlist = _userAutorizationRepository.ExecuteQuery(spQuery, parameters).ToList();
            return extractlist;

        }

        public string UserLoggedIn(userAuthentication userAuthentication)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",string.IsNullOrEmpty(userAuthentication.UserName) ? (object)DBNull.Value: userAuthentication.UserName),
                new SqlParameter("@WORKSPACE_ID",string.IsNullOrEmpty(userAuthentication.workspaceId) ? (object)DBNull.Value: userAuthentication.workspaceId),
                new SqlParameter("@CLIENT_ID", string.IsNullOrEmpty(userAuthentication.Email) ? (object)DBNull.Value: userAuthentication.Email),
                new SqlParameter("@USER_ACTIVITY ",string.IsNullOrEmpty(userAuthentication.userActivity) ? (object)DBNull.Value: userAuthentication.userActivity),
                new SqlParameter("@IP_ADDDRESS",string.IsNullOrEmpty(userAuthentication.ipAddress) ? (object)DBNull.Value: userAuthentication.ipAddress),
                new SqlParameter("@MAC_ADDRESS",string.IsNullOrEmpty(userAuthentication.macAddress) ? (object)DBNull.Value: userAuthentication.macAddress),
                new SqlParameter("@DEVICE_TYPE",string.IsNullOrEmpty(userAuthentication.deviceType) ? (object)DBNull.Value: userAuthentication.deviceType),
                new SqlParameter("@CONNECTION_TYPE",string.IsNullOrEmpty(userAuthentication.connectionType) ? (object)DBNull.Value: userAuthentication.connectionType),
                new SqlParameter("@LOGIN_STATUS ",string.IsNullOrEmpty(userAuthentication.loginStatus) ? (object)DBNull.Value: userAuthentication.loginStatus),
                new SqlParameter("@LOCATION ",string.IsNullOrEmpty(userAuthentication.location) ? (object)DBNull.Value: userAuthentication.location),
                new SqlParameter("@CLIENT_DATE", string.IsNullOrEmpty(userAuthentication.ClientDate) ? (object)DBNull.Value: userAuthentication.ClientDate),
                new SqlParameter("@CLIENT_TIME", string.IsNullOrEmpty(userAuthentication.ClientTime) ? (object)DBNull.Value: userAuthentication.ClientTime),
                new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(userAuthentication.ClientTimeZone) ? (object)DBNull.Value: userAuthentication.ClientTimeZone),

                new SqlParameter{ ParameterName = "@V_MESSAGE",
                Direction = ParameterDirection.Output,
                SqlDbType = SqlDbType.NVarChar,
                Size = 4000,
                Value = ""
                }
            };


            string spQuery = StoreProcedureConstants.Sp_GetuserLoginLogs + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID,@USER_ACTIVITY, " +
                 "@IP_ADDDRESS, @MAC_ADDRESS, @DEVICE_TYPE, @CONNECTION_TYPE, @LOGIN_STATUS, @LOCATION," +
                "@CLIENT_DATE, @CLIENT_TIME, @CLIENT_TIME_ZONE, " +
                " @V_MESSAGE OUTPUT";
            return _userLoggedinRepository.ExecuteCommand(spQuery, parameters);
        }
    }
    }


