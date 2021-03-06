export class IdentityControlModel
    {
        UserId :string;
		ClientId :number;
		WorkspaceId :number;
		DefinedFormats :string;
		AvailableFormats :string;
		MandtoryField :string;
		UniqueMandtoryField :boolean;
		LoginActivation :string;
		ApprovalSuperVisor :boolean;
		ApprovalEmail :boolean;
		ApprovalQRCode :boolean;
		LoginCaseSensitive :string;
		LoginAuthentication :boolean;
		SSOAuthentication :boolean;
		SSLCertificate :string;
		AppearanceLogo :string;
		AppearanceColor :string;
		UsernameInsert :string;
		UsernameUpdate :string;
		ServerInsertDate :string;
		ServerInsertTime :string;
		ServerInsertTimeZone :string;
		ServerUpdateDate :string;
		ServerUpdateTime :string;
		ServerUpdateTimeZone :string;
		ClientInsertDate :string;
		ClientInsertTime :string;
		ClientInsertTimeZone :string;
		ClientUpdateDate :string;
		ClientUpdateTime :string;
		ClientUpdateTimeZone :string;
		BStatus :string;
		BDelete :string;
		BMap :string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
	}
export class PasswordControlSetupModel
    {
        UserId :string;
		ClientId :number;
		WorkspaceId :number;
		DefinedFormats :string;
		PasswordLength :string;
		StrongPassword :string;
		PasswordField :string;
		PasswordExpired :string;
		FirstLoginOption :boolean;
		FirstLoginDays :number;
		UserCreatedDays :number;
		LoginAttempts :number;
		LastPasswordChanged :number;
		NotifyUserPasswordExpiry :string;
		NotifyUserPasswordExpiryDays :number;
		NotifySupervisorPasswordExpiry :string;
		NotifySupervisorPasswordExpiryDays :number;
		AppearanceLogo :string;
		AppearanceColor :string;
		UsernameInsert :string;
		UsernameUpdate :string;
		ServerInsertDate :string;
		ServerInsertTime :string;
		ServerInsertTimeZone :string;
		ServerUpdateDate :string;
		ServerUpdateTime :string;
		ServerUpdateTimeZone :string;
		ClientInsertDate :string;
		ClientInsertTime :string;
		ClientInsertTimeZone :string;
		ClientUpdateDate :string;
		ClientUpdateTime :string;
		ClientUpdateTimeZone :string;
		BStatus :string;
		BDelete :string;
		BMap :string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
	}
export class AccessLockingModel
    {
        UserId :string;
		ClientId :number;
		WorkspaceId :number;
		//
		UserLocked :boolean;
		FailedAttempt :number;
		FailedTimeInterval :number;
		UnlockOption :string;
		UnlockTimeInterval :string;
		UnlockAdministrator :boolean;
		UnlockSupervisor :boolean;
		//Common
		AppearanceLogo :string;
		AppearanceColor :string;
		UsernameInsert :string;
		UsernameUpdate :string;
		ServerInsertDate :string;
		ServerInsertTime :string;
		ServerInsertTimeZone :string;
		ServerUpdateDate :string;
		ServerUpdateTime :string;
		ServerUpdateTimeZone :string;
		ClientInsertDate :string;
		ClientInsertTime :string;
		ClientInsertTimeZone :string;
		ClientUpdateDate :string;
		ClientUpdateTime :string;
		ClientUpdateTimeZone :string;
		BStatus :string;
		BDelete :string;
		BMap :string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
	}
export class MultiFactorSetupeModel
    {
        UserId :string;
		ClientId :number;
		WorkspaceId :number;
		//
		 SecurityQuestion:string;
		 SQFirstTimeLogin:boolean;
		 SQPasswordUpdation:boolean;
		 SecurityQestionOption:string;
		 SecurityQestionAnswer:string;
		 PasscodeAuthentication:string;
		 PAFirsttimeLogin:boolean;
		 PAPasswordUpdation:boolean;
		 PasscodeEmail:boolean;
		 PasscodeSMS:boolean;
		 PasscodeSinglepart:boolean;
		 PasscodeTwopart:boolean;
		 PasscodeValidityTime:number;
		 PasscodeValidityAttempts:number;
		 CryptographicTokens:string;
		 CTFirsttimeLogin:boolean;
		 CTPasswordUpdation:boolean;
		 QRCode:string;
		 QRFirsttimeLogin:boolean;
		 QRPasswordUpdation:boolean;
		 FaceID:string;
		 FIFirsttimeLogin:boolean;
		 FIPasswordUpdation:boolean;
		 SupervisoryApproval:string;
		 SAFirsttimeLogin:boolean;
		 SAPasswordUpdation:boolean;
		//Common
		AppearanceLogo :string;
		AppearanceColor :string;
		UsernameInsert :string;
		UsernameUpdate :string;
		ServerInsertDate :string;
		ServerInsertTime :string;
		ServerInsertTimeZone :string;
		ServerUpdateDate :string;
		ServerUpdateTime :string;
		ServerUpdateTimeZone :string;
		ClientInsertDate :string;
		ClientInsertTime :string;
		ClientInsertTimeZone :string;
		ClientUpdateDate :string;
		ClientUpdateTime :string;
		ClientUpdateTimeZone :string;
		BStatus :string;
		BDelete :string;
		BMap :string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
	}
	export class RiskBaseAuthenticationModel
    {
        UserId :string;
		ClientId :number;
		WorkspaceId :number;
		//
		 RBAActivation :string;
		 RBAAccess :string;
		 SupervisorSummary :boolean;
		 UserRiskSummary :boolean;
		 IPSummary :string;
		 IPVerification :string;
		 IPAccess :boolean;
		 MacAccess :boolean;
		 MacVerification :string;
		 TimeZoneAccess :boolean;
		 TimeZoneVerification :string;
		 TimeSlotAccess :boolean;
		 StartTimeVerification :string;
		 EndTimeVerification :string;
		 DeviceTypeAcces :boolean;
		 DeviceTypeVerification :string;
		 ConnectionTypeAccess :boolean;
		 ConnectionTypeVerification :string;
		 SupervisorAccess :boolean;
		 SupervisorVerification :string;
		//Common
		AppearanceLogo :string;
		AppearanceColor :string;
		UsernameInsert :string;
		UsernameUpdate :string;
		ServerInsertDate :string;
		ServerInsertTime :string;
		ServerInsertTimeZone :string;
		ServerUpdateDate :string;
		ServerUpdateTime :string;
		ServerUpdateTimeZone :string;
		ClientInsertDate :string;
		ClientInsertTime :string;
		ClientInsertTimeZone :string;
		ClientUpdateDate :string;
		ClientUpdateTime :string;
		ClientUpdateTimeZone :string;
		BStatus :string;
		BDelete :string;
		BMap :string;
		Remark1 :string;
		Remark2 :string;
		Remark3 :string;
		Remark4 :string;
		Flex1 :string;
		Flex2 :string;
		Flex3 :string;
		Flex4 :string;
		Flex5 :string;
		Flex6 :string;
		Flex7 :string;
		Flex8 :string;
		Flex9 :string;
		Flex10 :string;
		Flex11 :string;
		Flex12 :string;
		Flex13 :string;
		Flex14 :string;
		Flex15 :string;
		Flex16 :string;
    }
	export class IdentityAccessManagmentModel
    {
          UserId :string;
		  ClientId :string;
		  WorkspaceId :string;
		  ProcedureName :string;
		  DefinedFormat :string;
		  AvailableFormat :string;
		  MandatoryField :string;
		  UniqueMandatoryField :boolean;
		  LogInIdActivation :string;
		  ApprovalSupervisor :boolean;
		  ApprovalEmail :boolean;
		  ApprovalQrCode :boolean;
		  LoginIdCaseSensitive :string;
		  LoginIdAuthentication :boolean;
		  SsoAuthentication :boolean;
		  SslCertificate :string;
		  PasswordLength :string;
		  StrongPassword :string;
		  PasswordField :string;
		  PasswordExpired :string;
		  FirstLoginOption :boolean;
		  FirstLoginDays :string;
		  UserCreatedDays :string;
		  LoginAttempts :string;
		  LastPasswordChanged :string;
		  NotifyUserPasswordExpiry :string;
		  NotifyUserPasswordExpiryDays :string;
		  NotifySupervisorPasswordExpiry :string;
		  NotifySupervisorPasswordExpiryDays :string;
		  UserLocked :boolean;
		  FailedAttempt :string;
		  FailedTimeInterval :string;
		  UnlockOption :string;
		  UnlockTimeInterval :string;
		  UnlockAdministrator :boolean;
		  UnlockSupervisor :boolean;
		  SecurityQuestion :string;
		  SqFirstTimeLogin :boolean;
		  SqPasswordUpdation :boolean;
		  SecurityQuestionOptions :string;
		  SecurityQuestionAnswer:string;
		  PasscodeAuthentication :string;
		  PaFirstTimeLogin :boolean;
		  PaPasswordUpdation :boolean;
		  PasscodeEmail :boolean;
		  PasscodeValidityTime :string;
		  PasscodeSms :boolean;
		  PasscodeSinglepart :boolean;
		  PasscodeTwopart :boolean;
		  PasscodeValidityAttempts :string;
		  CryptoGraphicToken :string;
		  CtFirsttimeLogin :boolean;
		  CtPasswordUpdation :boolean;
		  QrCode :string;
		  QrFirsttimeLogin :boolean;
		  QrPasswordUpdation :boolean;
		  FaceId :string;
		  FIFirsttimeLogin :boolean;
		  FiPasswordUpdation :boolean;
		  SupervisorApproval :string;
		  SaFirsttimeLogin :boolean;
		  SaPasswordUpdation :boolean;
		  RbaActivation :string;
		  RbaAccess:string;
		  UserRiskSummary :boolean;
		  SupervisorRiskSummarry :boolean;
		  IpAccess :boolean;
		  IpVerifcation :string;
		  MacAccess :boolean;
		  MacVerifcation :string;
		  TimeZoneAccess :boolean;
		  TimeZoneVerifcation :string;
		  TimeSlotAccess :boolean;
		  StartTimeVerifcation :string;
		  EndTimeVerifcation :string;
		  DeviceTypeAccess :boolean;
		  DeviceTypeVerifcation :string;
		  ConnectorTypeAccess :boolean;
		  ConnectorTypeVerifcation:string;
		  SupervisorAccess :boolean;
		  SupervisorVerifcation :string;
		  ClientDate :string;
		  ClientTime :string;
		  ClientTimeZone :string;
		  Remark1 :string;
		  Remark2 :string;
		  Remark3 :string;
		  Remark4 :string;
		  Flex1 :string;
		  Flex2 :string;
		  Flex3 :string;
		  Flex4 :string;
		  Flex5 :string;
		  Flex6 :string;
		  Flex7 :string;
		  Flex8 :string;
		  Flex9 :string;
		  Flex10 :string;
		  Flex11 :string;
		  Flex12 :string;
		  Flex13 :string;
		  Flex14 :string;
		  Flex15 :string;
		  Flex16 :string;
    }