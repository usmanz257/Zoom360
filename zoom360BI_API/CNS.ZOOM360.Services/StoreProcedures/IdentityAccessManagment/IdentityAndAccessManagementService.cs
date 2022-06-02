using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment;
using CNS.ZOOM360.Shared.StoreProcedures.IdentityAccessManagment.Dto;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.IdentityAccessManagment
{
	public class IdentityAndAccessManagementService : IIdentityAndAccessManagementService
	{
		private readonly IRepositoryBase<AccessLockingModel> _identityAndAcessManagmentRepository;
		private readonly IRepositoryBase<DropdownList> _IAMdropdownListRepository;
		private readonly IRepositoryBase<DataTable> _dynamicGridRepository;
		public IdentityAndAccessManagementService(IRepositoryBase<AccessLockingModel> identityAndAcessManagmentRepository,
		IRepositoryBase<DropdownList> IAMdropdownListRepository, IRepositoryBase<DataTable> dynamicGridRepository)
		{
			_identityAndAcessManagmentRepository = identityAndAcessManagmentRepository;
			_IAMdropdownListRepository = IAMdropdownListRepository;
			_dynamicGridRepository = dynamicGridRepository;
		}
		async Task<string> IIdentityAndAccessManagementService.SaveIdentityManagement(AccessLockingModel accessLockingModel)
		{
			object[] parameters = {
			new SqlParameter("@USER_ID", string.IsNullOrEmpty(accessLockingModel.UserId) ? (object)DBNull.Value: accessLockingModel.UserId),
			new SqlParameter("@WORKSPACE_ID",string.IsNullOrEmpty((accessLockingModel.WorkspaceId).ToString()) ? (object)DBNull.Value: accessLockingModel.WorkspaceId),
			new SqlParameter("@CLIENT_ID", string.IsNullOrEmpty((accessLockingModel.ClientId).ToString()) ? (object)DBNull.Value: accessLockingModel.ClientId),
			new SqlParameter("@PROCEDURE_NAME",string.IsNullOrEmpty( accessLockingModel.ProcedureName)? (object)DBNull.Value: accessLockingModel.ProcedureName),
			new SqlParameter("@DEFINED_FORMATS",string.IsNullOrEmpty(accessLockingModel.DefinedFormat)? (object)DBNull.Value: accessLockingModel.DefinedFormat),
			new SqlParameter("@AVAILABLE_FORMATS",string.IsNullOrEmpty(accessLockingModel.AvailableFormat)? (object)DBNull.Value: accessLockingModel.AvailableFormat),
			new SqlParameter("@MANDATORY_FIELD",string.IsNullOrEmpty(accessLockingModel.MandatoryField)? (object)DBNull.Value: accessLockingModel.MandatoryField),
			new SqlParameter("@UNIQUE_MANDATORY_FIELD",accessLockingModel.UniqueMandatoryField),
			new SqlParameter("@LOGINID_ACTIVATION",string.IsNullOrEmpty(accessLockingModel.LogInIdActivation)? (object)DBNull.Value: accessLockingModel.LogInIdActivation),
			new SqlParameter("@APPROVAL_SUPERVISOR",accessLockingModel.ApprovalSupervisor),
			new SqlParameter("@APPROVAL_EMAIL",accessLockingModel.ApprovalEmail),
			new SqlParameter("@APPROVAL_QRCODE",accessLockingModel.ApprovalQrCode),
			new SqlParameter("@LOGINID_CASESENSITIVE",string.IsNullOrEmpty(accessLockingModel.LoginIdCaseSensitive)? (object)DBNull.Value: accessLockingModel.LoginIdCaseSensitive),
			new SqlParameter("@LOGINID_AUTHENTICATION",accessLockingModel.LoginIdAuthentication),
			new SqlParameter("@SSO_AUTHENTICATION",accessLockingModel.SsoAuthentication),
			new SqlParameter("@SSL_CERTIFICATE",string.IsNullOrEmpty(accessLockingModel.SslCertificate)? (object)DBNull.Value: accessLockingModel.SslCertificate),
			new SqlParameter("@PASSWORD_LENGTH",string.IsNullOrEmpty(accessLockingModel.PasswordLength)? (object)DBNull.Value: accessLockingModel.PasswordLength),
			new SqlParameter("@STRONG_PASSWORD",string.IsNullOrEmpty(accessLockingModel.StrongPassword)? (object)DBNull.Value: accessLockingModel.StrongPassword),
			new SqlParameter("@PASSWORD_FIELD",string.IsNullOrEmpty(accessLockingModel.PasswordField)? (object)DBNull.Value: accessLockingModel.PasswordField),
			new SqlParameter("@PASSWORD_EXPIRED",string.IsNullOrEmpty(accessLockingModel.PasswordExpired)? (object)DBNull.Value: accessLockingModel.PasswordExpired),
			new SqlParameter("@FIRST_LOGIN_OPTION",accessLockingModel.FirstLoginOption),
			new SqlParameter("@FIRST_LOGIN_DAYS",string.IsNullOrEmpty(accessLockingModel.FirstLoginDays)? (object)DBNull.Value: accessLockingModel.FirstLoginDays),
			new SqlParameter("@USER_CREATED_DAYS",string.IsNullOrEmpty(accessLockingModel.UserCreatedDays)? (object)DBNull.Value: accessLockingModel.UserCreatedDays),
			new SqlParameter("@LOGIN_ATTEMPTS",string.IsNullOrEmpty(accessLockingModel.LoginAttempts)? (object)DBNull.Value: accessLockingModel.LoginAttempts),
			new SqlParameter("@LAST_PASSWORD_CHANGED",string.IsNullOrEmpty(accessLockingModel.LastPasswordChanged)? (object)DBNull.Value: accessLockingModel.LastPasswordChanged),
			new SqlParameter("@NOTIFY_USER_PASSWORDEXPIRY",string.IsNullOrEmpty(accessLockingModel.NotifyUserPasswordExpiry)? (object)DBNull.Value: accessLockingModel.NotifyUserPasswordExpiry),
			new SqlParameter("@NOTIFY_USER_PASSWORDEXPIRY_DAYS",string.IsNullOrEmpty(accessLockingModel.NotifyUserPasswordExpiryDays)? (object)DBNull.Value: accessLockingModel.NotifyUserPasswordExpiryDays),
			new SqlParameter("@NOTIFY_SUPERVISOR_PASSWORDEXPIRY",string.IsNullOrEmpty(accessLockingModel.NotifySupervisorPasswordExpiry)? (object)DBNull.Value: accessLockingModel.NotifySupervisorPasswordExpiry),
			new SqlParameter("@NOTIFY_SUPERVISOR_PASSWORDEXPIRY_DAYS",string.IsNullOrEmpty(accessLockingModel.NotifySupervisorPasswordExpiryDays)? (object)DBNull.Value: accessLockingModel.NotifySupervisorPasswordExpiryDays),
			new SqlParameter("@USER_LOCKED",accessLockingModel.UserLocked),
			new SqlParameter("@FAILED_ATTEMPTS",string.IsNullOrEmpty(accessLockingModel.FailedAttempt)? (object)DBNull.Value: accessLockingModel.FailedAttempt),
			new SqlParameter("@FAILED_TIMEINTERVAL",string.IsNullOrEmpty(accessLockingModel.FailedTimeInterval)? (object)DBNull.Value: accessLockingModel.FailedTimeInterval),
			new SqlParameter("@UNLOCK_OPTIONS", string.IsNullOrEmpty(accessLockingModel.UnlockOption) ? (object)DBNull.Value:accessLockingModel.UnlockOption),
			new SqlParameter("@UNLOCK_TIMEINTERVAL",string.IsNullOrEmpty(accessLockingModel.UnlockTimeInterval) ? (object)DBNull.Value: accessLockingModel.UnlockTimeInterval),
			new SqlParameter("@UNLOCK_ADMINISTRATOR", accessLockingModel.UnlockAdministrator),
			new SqlParameter("@UNLOCK_SUPERVISIOR", accessLockingModel.UnlockSupervisor),
			new SqlParameter("@SECURITY_QUESTION ",string.IsNullOrEmpty(accessLockingModel.SecurityQuestion) ? (object)DBNull.Value: accessLockingModel.SecurityQuestion),
			new SqlParameter("@SQ_FIRSTTIME_LOGIN",accessLockingModel.SqFirstTimeLogin),
			new SqlParameter("@SQ_PASSWORD_UPDATION",accessLockingModel.SqPasswordUpdation),
			new SqlParameter("@SECURITYQUESTION_OPTIONS",string.IsNullOrEmpty(accessLockingModel.SecurityQuestionOptions) ? (object)DBNull.Value: accessLockingModel.SecurityQuestionOptions),
			new SqlParameter("@SECURITYQUESTION_ANSWER",string.IsNullOrEmpty(accessLockingModel.SecurityQuestionAnswer) ? (object)DBNull.Value: accessLockingModel.SecurityQuestionAnswer),
			new SqlParameter("@PASSCODE_AUTHENTICATION ",string.IsNullOrEmpty(accessLockingModel.PasscodeAuthentication) ? (object)DBNull.Value: accessLockingModel.PasscodeAuthentication),
			new SqlParameter("@PA_FIRSTTIME_LOGIN ",accessLockingModel.PaFirstTimeLogin),
			new SqlParameter("@PA_PASSWORD_UPDATION",accessLockingModel.PaPasswordUpdation),
			new SqlParameter("@PASSCODE_EMAIL",accessLockingModel.PasscodeEmail),
			new SqlParameter("@PASSCODE_SMS",accessLockingModel.PasscodeSms),
			new SqlParameter("@PASSCODE_SINGLEPART ",accessLockingModel.PasscodeSinglepart),
			new SqlParameter("@PASSCODE_TWOPARTS ",accessLockingModel.PasscodeTwopart),
			new SqlParameter("@PASSCODE_VALIDITY_TIME ",string.IsNullOrEmpty(accessLockingModel.PasscodeValidityTime) ? (object)DBNull.Value: accessLockingModel.PasscodeValidityTime),
			new SqlParameter("@PASSCODE_VALIDITY_ATTEMPTS",string.IsNullOrEmpty(accessLockingModel.PasscodeValidityAttempts) ? (object)DBNull.Value: accessLockingModel.PasscodeValidityAttempts),
			new SqlParameter("@CRYPTOGRAPHIC_TOKENS ",string.IsNullOrEmpty(accessLockingModel.CryptoGraphicToken) ? (object)DBNull.Value: accessLockingModel.CryptoGraphicToken),
			new SqlParameter("@CT_FIRSTTIME_LOGIN ",accessLockingModel.CtFirsttimeLogin),
			new SqlParameter("@CT_PASSWORD_UPDATION",accessLockingModel.CtPasswordUpdation),
			new SqlParameter("@QR_CODE",string.IsNullOrEmpty(accessLockingModel.QrCode) ? (object)DBNull.Value: accessLockingModel.QrCode),
			new SqlParameter("@QR_FIRSTTIME_LOGIN",accessLockingModel.QrFirsttimeLogin),
			new SqlParameter("@QR_PASSWORD_UPDATION",accessLockingModel.QrPasswordUpdation),
			new SqlParameter("@FACE_ID",string.IsNullOrEmpty(accessLockingModel.FaceId) ? (object)DBNull.Value: accessLockingModel.FaceId),
			new SqlParameter("@FI_FIRSTTIME_LOGIN ",accessLockingModel.FiFirsttimeLogin),
			new SqlParameter("@FI_PASSWORD_UPDATION",accessLockingModel.FiPasswordUpdation),
			new SqlParameter("@SUPERVISORY_APPROVAL ",string.IsNullOrEmpty(accessLockingModel.SupervisorApproval) ? (object)DBNull.Value: accessLockingModel.SupervisorApproval),
			new SqlParameter("@SA_FIRSTTIME_LOGIN",accessLockingModel.SaFirsttimeLogin),
			new SqlParameter("@SA_PASSWORD_UPDATION",accessLockingModel.SaPasswordUpdation),
			new SqlParameter("@RBA_ACTIVATION",string.IsNullOrEmpty(accessLockingModel.RbaActivation) ? (object)DBNull.Value: accessLockingModel.RbaActivation),
			new SqlParameter("@RBA_ACCESS",string.IsNullOrEmpty(accessLockingModel.RbaAccess) ? (object)DBNull.Value: accessLockingModel.RbaAccess),
			new SqlParameter("@SUPERVISOR_RISKSUMMARY",accessLockingModel.SupervisorRiskSummarry),
			new SqlParameter("@USER_RISKSUMMARY",accessLockingModel.UserRiskSummary),
			new SqlParameter("@IP_ACCESS ",accessLockingModel.IpAccess),
			new SqlParameter("@IP_VERIFICATION ",string.IsNullOrEmpty(accessLockingModel.IpVerifcation) ? (object)DBNull.Value: accessLockingModel.IpVerifcation),
			new SqlParameter("@MAC_ACCESS",accessLockingModel.MacAccess),
			new SqlParameter("@MAC_VERIFICATION ",string.IsNullOrEmpty(accessLockingModel.MacVerifcation) ? (object)DBNull.Value: accessLockingModel.MacVerifcation),
			new SqlParameter("@TIMEZONE_ACCESS",accessLockingModel.TimeZoneAccess),
			new SqlParameter("@TIMEZONE_VERIFICATION ",string.IsNullOrEmpty(accessLockingModel.TimeZoneVerifcation) ? (object)DBNull.Value: accessLockingModel.TimeZoneVerifcation),
			new SqlParameter("@TIMESLOT_ACCESS ",accessLockingModel.TimeSlotAccess),
			new SqlParameter("@STARTTIME_VERIFICATION",string.IsNullOrEmpty(accessLockingModel.StartTimeVerifcation) ? (object)DBNull.Value: accessLockingModel.StartTimeVerifcation),
			new SqlParameter("@ENDTIME_VERIFICATION",string.IsNullOrEmpty(accessLockingModel.EndTimeVerifcation) ? (object)DBNull.Value: accessLockingModel.EndTimeVerifcation),
			new SqlParameter("@DEVICETYPE_ACCESS ",accessLockingModel.DeviceTypeAccess),
			new SqlParameter("@DEVICETYPE_VERIFICATION",string.IsNullOrEmpty(accessLockingModel.DeviceTypeVerifcation) ? (object)DBNull.Value: accessLockingModel.DeviceTypeVerifcation),
			new SqlParameter("@CONNECTIONTYPE_ACCESS",accessLockingModel.ConnectorTypeAccess),
			new SqlParameter("@CONNECTIONTYPE_VERIFICATION ",string.IsNullOrEmpty(accessLockingModel.ConnectorTypeVerifcation) ? (object)DBNull.Value: accessLockingModel.ConnectorTypeVerifcation),
			new SqlParameter("@SUPERVISOR_ACCESS",accessLockingModel.SupervisorAccess),
			new SqlParameter("@SUPERVISOR_VERIFICATION",string.IsNullOrEmpty(accessLockingModel.SupervisorVerifcation) ? (object)DBNull.Value: accessLockingModel.SupervisorVerifcation),
			new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(accessLockingModel.ClientDate) ? (object)DBNull.Value: accessLockingModel.ClientDate),
			new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(accessLockingModel.ClientTime) ? (object)DBNull.Value: accessLockingModel.ClientTime),
			new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(accessLockingModel.ClientTimeZone) ? (object)DBNull.Value: accessLockingModel.ClientTimeZone),
			new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(accessLockingModel.Remark1) ? (object)DBNull.Value: accessLockingModel.Remark1),
			new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(accessLockingModel.Remark2) ? (object)DBNull.Value: accessLockingModel.Remark2),
			new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(accessLockingModel.Remark3) ? (object)DBNull.Value: accessLockingModel.Remark3),
			new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(accessLockingModel.Remark4) ? (object)DBNull.Value: accessLockingModel.Remark4),
			new SqlParameter("@FLEX_1",string.IsNullOrEmpty(accessLockingModel.Flex1) ? (object)DBNull.Value: accessLockingModel.Flex1),
			new SqlParameter("@FLEX_2",string.IsNullOrEmpty(accessLockingModel.Flex2) ? (object)DBNull.Value: accessLockingModel.Flex2),
			new SqlParameter("@FLEX_3",string.IsNullOrEmpty(accessLockingModel.Flex3) ? (object)DBNull.Value: accessLockingModel.Flex3),
			new SqlParameter("@FLEX_4",string.IsNullOrEmpty(accessLockingModel.Flex4) ? (object)DBNull.Value: accessLockingModel.Flex4),
			new SqlParameter("@FLEX_5",string.IsNullOrEmpty(accessLockingModel.Flex5) ? (object)DBNull.Value: accessLockingModel.Flex5),
			new SqlParameter("@FLEX_6",string.IsNullOrEmpty(accessLockingModel.Flex6) ? (object)DBNull.Value: accessLockingModel.Flex6),
			new SqlParameter("@FLEX_7",string.IsNullOrEmpty(accessLockingModel.Flex7) ? (object)DBNull.Value: accessLockingModel.Flex7),
			new SqlParameter("@FLEX_8",string.IsNullOrEmpty(accessLockingModel.Flex8) ? (object)DBNull.Value: accessLockingModel.Flex8),
			new SqlParameter("@FLEX_9",string.IsNullOrEmpty(accessLockingModel.Flex9) ? (object)DBNull.Value: accessLockingModel.Flex8),
			new SqlParameter("@FLEX_10",string.IsNullOrEmpty(accessLockingModel.Flex10) ? (object)DBNull.Value: accessLockingModel.Flex10),
			new SqlParameter("@FLEX_11",string.IsNullOrEmpty(accessLockingModel.Flex11) ? (object)DBNull.Value: accessLockingModel.Flex11),
			new SqlParameter("@FLEX_12",string.IsNullOrEmpty(accessLockingModel.Flex12) ? (object)DBNull.Value: accessLockingModel.Flex12),
			new SqlParameter("@FLEX_13",string.IsNullOrEmpty(accessLockingModel.Flex13) ? (object)DBNull.Value: accessLockingModel.Flex13),
			new SqlParameter("@FLEX_14",string.IsNullOrEmpty(accessLockingModel.Flex14) ? (object)DBNull.Value: accessLockingModel.Flex14),
			new SqlParameter("@FLEX_15",string.IsNullOrEmpty(accessLockingModel.Flex15) ? (object)DBNull.Value: accessLockingModel.Flex15),
			new SqlParameter("@FLEX_16",string.IsNullOrEmpty(accessLockingModel.Flex16) ? (object)DBNull.Value: accessLockingModel.Flex16),
			new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
		};

			string spQuery = StoreProcedureConstants.Sp_SaveIAM + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID,@PROCEDURE_NAME," +
			" @DEFINED_FORMATS, @AVAILABLE_FORMATS, @MANDATORY_FIELD, @UNIQUE_MANDATORY_FIELD ,@LOGINID_ACTIVATION,@APPROVAL_SUPERVISOR, " +
			" @APPROVAL_EMAIL, @APPROVAL_QRCODE, @LOGINID_CASESENSITIVE, @LOGINID_AUTHENTICATION, @SSO_AUTHENTICATION, @SSL_CERTIFICATE, " +
			" @PASSWORD_LENGTH, @STRONG_PASSWORD, @PASSWORD_FIELD, @PASSWORD_EXPIRED, @FIRST_LOGIN_OPTION, @FIRST_LOGIN_DAYS," +
			" @USER_CREATED_DAYS, @LOGIN_ATTEMPTS, @LAST_PASSWORD_CHANGED, @NOTIFY_USER_PASSWORDEXPIRY, @NOTIFY_USER_PASSWORDEXPIRY_DAYS ,@NOTIFY_SUPERVISOR_PASSWORDEXPIRY," +
			" @NOTIFY_SUPERVISOR_PASSWORDEXPIRY_DAYS,@USER_LOCKED,@FAILED_ATTEMPTS,@FAILED_TIMEINTERVAL,@UNLOCK_OPTIONS,@UNLOCK_TIMEINTERVAL," +
			" @UNLOCK_ADMINISTRATOR,@UNLOCK_SUPERVISIOR,@SECURITY_QUESTION,@SQ_FIRSTTIME_LOGIN, @SQ_PASSWORD_UPDATION, @SECURITYQUESTION_OPTIONS," +
			" @SECURITYQUESTION_ANSWER,@PASSCODE_AUTHENTICATION ,@PA_FIRSTTIME_LOGIN, @PA_PASSWORD_UPDATION,@PASSCODE_EMAIL,@PASSCODE_SMS," +
			" @PASSCODE_SINGLEPART,@PASSCODE_TWOPARTS,@PASSCODE_VALIDITY_TIME ,@PASSCODE_VALIDITY_ATTEMPTS,@CRYPTOGRAPHIC_TOKENS,@CT_FIRSTTIME_LOGIN," +
			" @CT_PASSWORD_UPDATION,@QR_CODE,@QR_FIRSTTIME_LOGIN,@QR_PASSWORD_UPDATION,@FACE_ID ,@FI_FIRSTTIME_LOGIN," +
			" @FI_PASSWORD_UPDATION,@SUPERVISORY_APPROVAL,@SA_FIRSTTIME_LOGIN ,@SA_PASSWORD_UPDATION,@RBA_ACTIVATION ,@RBA_ACCESS," +
			" @SUPERVISOR_RISKSUMMARY,@USER_RISKSUMMARY ,@IP_ACCESS,@IP_VERIFICATION,@MAC_ACCESS ,@MAC_VERIFICATION," +
			" @TIMEZONE_ACCESS,@TIMEZONE_VERIFICATION,@TIMESLOT_ACCESS,@STARTTIME_VERIFICATION,@ENDTIME_VERIFICATION,@DEVICETYPE_ACCESS," +
			" @DEVICETYPE_VERIFICATION,@CONNECTIONTYPE_ACCESS,@CONNECTIONTYPE_VERIFICATION,@SUPERVISOR_ACCESS,@SUPERVISOR_VERIFICATION," +
			" @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
			" @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
			" @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
			" @V_MESSAGE OUTPUT";
			return _identityAndAcessManagmentRepository.ExecuteCommand(spQuery, parameters);
		}

		public async Task<List<DropdownList>> GetIAMDropDownList(string userId, string dropDownName)
		{
			object[] parameters = {
			new SqlParameter("@USER_ID",userId),
			new SqlParameter("@DROPDOWN_TYPE",dropDownName),
			new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output }
			};
			string spQuery = StoreProcedureConstants.Sp_GetIAMDropdown + " @USER_ID, @DROPDOWN_TYPE, @V_MESSAGE OUTPUT";
			List<DropdownList> dropdownLists = _IAMdropdownListRepository.ExecuteQuery(spQuery, parameters).ToList();
			return dropdownLists;
		}

        public async Task<DataTable> GetIdentityAndAccessManagment(GetIAMInputModel IAMInputModel)
        {
			DbParameter[] parameters = {
			new SqlParameter("@USER_ID",IAMInputModel.userID),
			new SqlParameter("@WORKSPACE_ID", IAMInputModel.WorkSpaceId),
			new SqlParameter("@CLIENT_ID", IAMInputModel.Client_Id),
			new SqlParameter("@PROCEDURE_NAME", IAMInputModel.ProcedureName),
			new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }
				};
			string spQuery = StoreProcedureConstants.Sp_GetIAM + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID," +
				" @PROCEDURE_NAME, @V_MESSAGE OUTPUT";
			DataTable dataTable = _dynamicGridRepository.getDynamicgrid(spQuery, parameters);
			return dataTable;
		}

	}
}
	
