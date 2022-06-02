using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.IdentityAccessManagment
{
 public class AccessLockingModel
    {
		public string UserId { get; set; }
		public string ClientId { get; set; }
		public string WorkspaceId { get; set; }
		public string ProcedureName { get; set; }
		public string DefinedFormat { get; set; }
		public string AvailableFormat { get; set; }
		public string MandatoryField { get; set; }
		public bool UniqueMandatoryField { get; set; }
		public string LogInIdActivation { get; set; }
		public bool ApprovalSupervisor { get; set; }
		public bool ApprovalEmail { get; set; }
		public bool ApprovalQrCode { get; set; }
		public string LoginIdCaseSensitive { get; set; }
		public bool LoginIdAuthentication { get; set; }
		public bool SsoAuthentication { get; set; }
		public string SslCertificate { get; set; }
		public string PasswordLength { get; set; }
		public string StrongPassword { get; set; }
		public string PasswordField { get; set; }
		public string PasswordExpired { get; set; }
		public bool FirstLoginOption { get; set; }
		public string FirstLoginDays { get; set; }
		public string UserCreatedDays { get; set; }
		public string LoginAttempts { get; set; }
		public string LastPasswordChanged { get; set; }
		public string NotifyUserPasswordExpiry { get; set; }
		public string NotifyUserPasswordExpiryDays { get; set; }
		public string NotifySupervisorPasswordExpiry { get; set; }
		public string NotifySupervisorPasswordExpiryDays { get; set; }
		public bool UserLocked { get; set; }
		public string FailedAttempt { get; set; }
		public string FailedTimeInterval { get; set; }
		public string UnlockOption { get; set; }
		public string UnlockTimeInterval { get; set; }
		public bool UnlockAdministrator { get; set; }
		public bool UnlockSupervisor { get; set; }
		public string SecurityQuestion { get; set; }
		public bool SqFirstTimeLogin { get; set; }
		public bool SqPasswordUpdation { get; set; }
		public string SecurityQuestionOptions { get; set; }
		public string SecurityQuestionAnswer{ get; set; }
		public string PasscodeAuthentication { get; set; }
		public bool PaFirstTimeLogin { get; set; }
		public bool PaPasswordUpdation { get; set; }
		public bool PasscodeEmail { get; set; }
		public string PasscodeValidityTime { get; set; }
		public bool PasscodeSms { get; set; }
		public bool PasscodeSinglepart { get; set; }
		public bool PasscodeTwopart { get; set; }
		public string PasscodeValidityAttempts { get; set; }
		public string CryptoGraphicToken { get; set; }
		public bool CtFirsttimeLogin { get; set; }
		public bool CtPasswordUpdation { get; set; }
		public string QrCode { get; set; }
		public bool QrFirsttimeLogin { get; set; }
		public bool QrPasswordUpdation { get; set; }
		public string FaceId { get; set; }
		public bool FiFirsttimeLogin { get; set; }
		public bool FiPasswordUpdation { get; set; }
		public string SupervisorApproval { get; set; }
		public bool SaFirsttimeLogin { get; set; }
		public bool SaPasswordUpdation { get; set; }
		public string RbaActivation { get; set; }
		public string RbaAccess{ get; set; }
		public bool UserRiskSummary { get; set; }
		public bool SupervisorRiskSummarry { get; set; }
		public bool IpAccess { get; set; }
		public string IpVerifcation { get; set; }
		public bool MacAccess { get; set; }
		public string MacVerifcation { get; set; }
		public bool TimeZoneAccess { get; set; }
		public string TimeZoneVerifcation { get; set; }
		public bool TimeSlotAccess { get; set; }
		public string StartTimeVerifcation { get; set; }
		public string EndTimeVerifcation { get; set; }
		public bool DeviceTypeAccess { get; set; }
		public string DeviceTypeVerifcation { get; set; }
		public bool ConnectorTypeAccess { get; set; }
		public string ConnectorTypeVerifcation { get; set; }
		public bool SupervisorAccess { get; set; }
		public string SupervisorVerifcation { get; set; }
		public string ClientDate { get; set; }
		public string ClientTime { get; set; }
		public string ClientTimeZone { get; set; }
		public string Remark1 { get; set; }
		public string Remark2 { get; set; }
		public string Remark3 { get; set; }
		public string Remark4 { get; set; }
		public string Flex1 { get; set; }
		public string Flex2 { get; set; }
		public string Flex3 { get; set; }
		public string Flex4 { get; set; }
		public string Flex5 { get; set; }
		public string Flex6 { get; set; }
		public string Flex7 { get; set; }
		public string Flex8 { get; set; }
		public string Flex9 { get; set; }
		public string Flex10 { get; set; }
		public string Flex11 { get; set; }
		public string Flex12 { get; set; }
		public string Flex13 { get; set; }
		public string Flex14 { get; set; }
		public string Flex15 { get; set; }
		public string Flex16 { get; set; }
	}
}
