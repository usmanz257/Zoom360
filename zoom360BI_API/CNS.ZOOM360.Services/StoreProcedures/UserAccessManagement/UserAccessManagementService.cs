using CNS.ZOOM360.Entities.StoreProcedures.UserAccessManagment;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement;
using CNS.ZOOM360.Shared.StoreProcedures.UserAccessManagement.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.UserAccessManagement
{
    public class UserAccessManagementService: IUserAccessManagementService
	{
		private readonly IRepositoryBase<SaveUserAccessManagementModel> _saveUserAccessManagementRepository;
		private readonly IRepositoryBase<UserListModel> _userListRepository;
		private readonly IRepositoryBase<DataTable> _dynamicGridRepository;
		public UserAccessManagementService(IRepositoryBase<SaveUserAccessManagementModel> saveUserAccessManagementRepository,
			IRepositoryBase<UserListModel> userListRepository, IRepositoryBase<DataTable> dynamicGridRepository)
		{
			_saveUserAccessManagementRepository = saveUserAccessManagementRepository;
			_userListRepository = userListRepository;
			_dynamicGridRepository = dynamicGridRepository;
		}
		public async Task<string> SaveUserAccessManagementSetup(SaveUserAccessManagementModel saveUserAccessManagementModel)
		{
			object[] parameters = {
			new SqlParameter("@USER_ID", saveUserAccessManagementModel.UserId),
			new SqlParameter("@SUB_USER_ID", string.IsNullOrEmpty(saveUserAccessManagementModel.subUserId) ? (object)DBNull.Value : saveUserAccessManagementModel.subUserId),
			new SqlParameter("@WORKSPACE_ID",saveUserAccessManagementModel.WorkspaceId),
			new SqlParameter("@CLIENT_ID",saveUserAccessManagementModel.ClientId),
			new SqlParameter("@PROCEDURE_NAME",saveUserAccessManagementModel.ProcedureName),
			new SqlParameter("@EMAIL_ADDRESS",string.IsNullOrEmpty(saveUserAccessManagementModel.EmailAddress) ? (object)DBNull.Value:saveUserAccessManagementModel.EmailAddress),
			new SqlParameter("@FIRST_NAME",string.IsNullOrEmpty(saveUserAccessManagementModel.FirstName) ? (object)DBNull.Value:saveUserAccessManagementModel.FirstName),
			new SqlParameter("@LAST_NAME",string.IsNullOrEmpty(saveUserAccessManagementModel.LastName) ? (object)DBNull.Value:saveUserAccessManagementModel.LastName),
			new SqlParameter("@IMAGE",string.IsNullOrEmpty(saveUserAccessManagementModel.Image) ? (object)DBNull.Value:saveUserAccessManagementModel.Image),
			new SqlParameter("@PHONE_NO",string.IsNullOrEmpty(saveUserAccessManagementModel.PhoneNo) ? (object)DBNull.Value:saveUserAccessManagementModel.PhoneNo),
			new SqlParameter("@TIME_ZONE",saveUserAccessManagementModel.TimeZone),
			new SqlParameter("@OLD_PASSWORD",string.IsNullOrEmpty(saveUserAccessManagementModel.OldPassword) ? (object)DBNull.Value:saveUserAccessManagementModel.OldPassword),
			new SqlParameter("@NEW_PASSWORD",string.IsNullOrEmpty(saveUserAccessManagementModel.NewPassword) ? (object)DBNull.Value:saveUserAccessManagementModel.NewPassword),
			new SqlParameter("@RETYPE_NEW_PASSWORD",string.IsNullOrEmpty(saveUserAccessManagementModel.RetypeNewPassword) ? (object)DBNull.Value:saveUserAccessManagementModel.RetypeNewPassword),
			new SqlParameter("@OVERWRITE_EXISTING",saveUserAccessManagementModel.OverwriteExisting),
			new SqlParameter("@RETRIEVE_RECENT",string.IsNullOrEmpty(saveUserAccessManagementModel.RetriveRecent) ? (object)DBNull.Value:saveUserAccessManagementModel.RetriveRecent),
			new SqlParameter("@USER_ACTIVE",saveUserAccessManagementModel.Useractive),
			new SqlParameter("@USER_LOCKED",saveUserAccessManagementModel.UserLocked),
			new SqlParameter("@WORKSPACES",string.IsNullOrEmpty(saveUserAccessManagementModel.Workspace) ? (object)DBNull.Value:saveUserAccessManagementModel.Workspace),
			new SqlParameter("@CHILD_WORKSPACES",string.IsNullOrEmpty(saveUserAccessManagementModel.ChildWorkspace) ? (object)DBNull.Value:saveUserAccessManagementModel.ChildWorkspace),
			new SqlParameter("@DISPLAY_MODES",string.IsNullOrEmpty(saveUserAccessManagementModel.DisplayMode) ? (object)DBNull.Value:saveUserAccessManagementModel.DisplayMode),
			new SqlParameter("@MODULE_ALLOWED",string.IsNullOrEmpty(saveUserAccessManagementModel.ModuleAllowed) ? (object)DBNull.Value:saveUserAccessManagementModel.ModuleAllowed),
			
			//new SqlParameter("@MENU_ALLOWED",saveUserAccessManagementModel.ClientId),
			//new SqlParameter("@SUBMENU_ALLOWED",saveUserAccessManagementModel.ClientId),
			new SqlParameter("@DATA_OPERATIONS",string.IsNullOrEmpty(saveUserAccessManagementModel.DataOperaion) ? (object)DBNull.Value:saveUserAccessManagementModel.DataOperaion),
			new SqlParameter("@NEWS_LETTER",saveUserAccessManagementModel.NewsLetter),
			new SqlParameter("@SYSTEM_NOTIFICATION",saveUserAccessManagementModel.SystemNotification),
			new SqlParameter("@ACCESS_NOTIFICATION",saveUserAccessManagementModel.AccessNotification),
			new SqlParameter("@RESTRICTION_ACCESS_MODE",string.IsNullOrEmpty(saveUserAccessManagementModel.RegistarionAccessMode) ? (object)DBNull.Value:saveUserAccessManagementModel.RegistarionAccessMode),
			new SqlParameter("@SUPERVISOR_MODE",saveUserAccessManagementModel.SupervisorMode),
			new SqlParameter("@SUPERVISOR_NAME",string.IsNullOrEmpty(saveUserAccessManagementModel.SuperVisorName) ? (object)DBNull.Value:saveUserAccessManagementModel.SuperVisorName),
			new SqlParameter("@DEFAULT_DISPLAY_MODE",string.IsNullOrEmpty(saveUserAccessManagementModel.DefaultDisplaymode) ? (object)DBNull.Value:saveUserAccessManagementModel.DefaultDisplaymode),
			new SqlParameter("@DEFAULT_PAGE",string.IsNullOrEmpty(saveUserAccessManagementModel.DefaultPage) ? (object)DBNull.Value:saveUserAccessManagementModel.DefaultPage),
			new SqlParameter("@DISPLAY_THEME",string.IsNullOrEmpty(saveUserAccessManagementModel.DisplayTheme) ? (object)DBNull.Value:saveUserAccessManagementModel.DisplayTheme),
			new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(saveUserAccessManagementModel.ClientDate) ? (object)DBNull.Value: saveUserAccessManagementModel.ClientDate),
			new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(saveUserAccessManagementModel.ClientTime) ? (object)DBNull.Value: saveUserAccessManagementModel.ClientTime),
			new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(saveUserAccessManagementModel.ClientTimeZone) ? (object)DBNull.Value: saveUserAccessManagementModel.ClientTimeZone),
			new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(saveUserAccessManagementModel.Remark1) ? (object)DBNull.Value: saveUserAccessManagementModel.Remark1),
			new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(saveUserAccessManagementModel.Remark2) ? (object)DBNull.Value: saveUserAccessManagementModel.Remark2),
			new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(saveUserAccessManagementModel.Remark3) ? (object)DBNull.Value: saveUserAccessManagementModel.Remark3),
			new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(saveUserAccessManagementModel.Remark4) ? (object)DBNull.Value: saveUserAccessManagementModel.Remark4),
			new SqlParameter("@FLEX_1",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex1) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex1),
			new SqlParameter("@FLEX_2",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex2) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex2),
			new SqlParameter("@FLEX_3",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex3) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex3),
			new SqlParameter("@FLEX_4",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex4) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex4),
			new SqlParameter("@FLEX_5",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex5) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex5),
			new SqlParameter("@FLEX_6",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex6) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex6),
			new SqlParameter("@FLEX_7",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex7) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex7),
			new SqlParameter("@FLEX_8",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex8) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex8),
			new SqlParameter("@FLEX_9",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex9) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex8),
			new SqlParameter("@FLEX_10",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex10) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex10),
			new SqlParameter("@FLEX_11",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex11) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex11),
			new SqlParameter("@FLEX_12",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex12) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex12),
			new SqlParameter("@FLEX_13",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex13) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex13),
			new SqlParameter("@FLEX_14",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex14) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex14),
			new SqlParameter("@FLEX_15",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex15) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex15),
			new SqlParameter("@FLEX_16",string.IsNullOrEmpty(saveUserAccessManagementModel.Flex16) ? (object)DBNull.Value: saveUserAccessManagementModel.Flex16),
			new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output },
		};
			string spQuery = StoreProcedureConstants.Sp_SaveUAM + " @USER_ID, @SUB_USER_ID, @WORKSPACE_ID, @CLIENT_ID, @PROCEDURE_NAME," +
			" @EMAIL_ADDRESS, @FIRST_NAME, @LAST_NAME, @IMAGE, @PHONE_NO, @TIME_ZONE," +
			" @OLD_PASSWORD, @NEW_PASSWORD,@RETYPE_NEW_PASSWORD, @OVERWRITE_EXISTING, @RETRIEVE_RECENT," +
			" @USER_ACTIVE, @USER_LOCKED, @WORKSPACES, @CHILD_WORKSPACES, @DISPLAY_MODES, @MODULE_ALLOWED," +
			" @DATA_OPERATIONS,"+
			" @NEWS_LETTER, @SYSTEM_NOTIFICATION, @ACCESS_NOTIFICATION, @RESTRICTION_ACCESS_MODE, @SUPERVISOR_MODE, @SUPERVISOR_NAME," +
			" @DEFAULT_DISPLAY_MODE, @DEFAULT_PAGE, @DISPLAY_THEME," +
			" @CLIENT_DATE, @CLIENT_TIME, @CLIENT_TIME_ZONE," +
			" @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
			" @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
			" @V_MESSAGE OUTPUT";
			return _saveUserAccessManagementRepository.ExecuteCommand(spQuery, parameters);
		}
		public List<UserListModel> GetUserlist(UserListInputModel userListInputModel)
		{
			object[] parameters = {
			new SqlParameter("@USER_ID", userListInputModel.UserId),
			new SqlParameter("@WORKSPACE_ID", userListInputModel.WorkSpaceId),
			new SqlParameter("@CLIENT_ID", userListInputModel.Client_Id),
			new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
		};

			string spQuery = StoreProcedureConstants.Sp_UserList + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, @V_MESSAGE OUTPUT";
			List<UserListModel> extractlist = _userListRepository.ExecuteQuery(spQuery, parameters).ToList();
			return extractlist;
		}
		public async Task<DataTable> GetUserAccessManagment(GetUserAccessManagmentInputModel InputModel)
        {
			//DataTable dataTable = new DataTable();
			DbParameter[] parameters = {
			new SqlParameter("@USER_ID",InputModel.userID),
			new SqlParameter("@SUB_USER_ID", string.IsNullOrEmpty(InputModel.subUserId) ? (object)DBNull.Value : InputModel.subUserId),
			new SqlParameter("@WORKSPACE_ID", InputModel.WorkSpaceId),
			new SqlParameter("@CLIENT_ID", InputModel.Client_Id),
			new SqlParameter("@PROCEDURE_NAME", InputModel.ProcedureName),
			new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
				};
			string spQuery = StoreProcedureConstants.Sp_GetUAM + " @USER_ID, @SUB_USER_ID, @WORKSPACE_ID, @CLIENT_ID," +
				" @PROCEDURE_NAME, @V_MESSAGE OUTPUT";
			DataTable dataTable = _dynamicGridRepository.getDynamicgrid(spQuery, parameters);
			return dataTable;
		}
	}
}
