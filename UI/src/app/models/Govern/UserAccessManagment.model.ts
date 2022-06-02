export class SaveUserAccessManagementModel
    {
		UserId:string;
		subUserId:string;
		ClientId :string;
		WorkspaceId:string;
		ProcedureName :string;
		EmailAddress :string;
		FirstName :string;
		LastName :string;
		Image :string;
		PhoneNo :string;
		TimeZone :number;
		OldPassword :string;
		NewPassword :string;
		RetypeNewPassword :string;
		OverwriteExisting :boolean;
		RetriveRecent :string;
		Useractive :boolean;
		UserLocked :boolean;
		Workspace :string;
		ChildWorkspace :string;
		DisplayMode :string;
		ModuleAllowed :string;
		DataOperation :string;
		MenuAllowed :string;
		SubMenuAllowed :string;
		DataOperaion :string;
		NewsLetter :boolean;
		SystemNotification :boolean;
		AccessNotification :boolean;
		RegistarionAccessMode :string;
		SupervisorMode :boolean;
		SuperVisorName :string;
		DefaultDisplaymode :string;
		DefaultPage :string;
		DisplayTheme :string;
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
	export class GetUserAccessManagmentInputModel
    {
         userID :string;
         subUserId :string;
         WorkSpaceId :string;
         Client_Id :string;
         ProcedureName :string;
    }