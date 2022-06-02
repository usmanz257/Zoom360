using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CNS.ZOOM360.EntityFrameworkCore.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccessLockingModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    UserLocked = table.Column<bool>(type: "bit", nullable: false),
                    FailedAttempt = table.Column<int>(type: "int", nullable: false),
                    FailedTimeInterval = table.Column<int>(type: "int", nullable: false),
                    UnlockOption = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UnlockTimeInterval = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UnlockAdministrator = table.Column<bool>(type: "bit", nullable: false),
                    UnlockSupervisor = table.Column<bool>(type: "bit", nullable: false),
                    AppearanceLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameInsert = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameUpdate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BDelete = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BMap = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex7 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex8 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex9 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex11 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex13 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex14 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex15 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex16 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "AllExtractListModel",
                columns: table => new
                {
                    SOURCE_ACCOUNT_ID = table.Column<int>(type: "int", nullable: false),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STATUS_EXTRACT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FILE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SERVER_INSERT_TIME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    APPEARANCE_LOGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    USER_NAME_INSERT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ROWS_COUNT_EXTRACT = table.Column<int>(type: "int", nullable: false),
                    COLS_COUNT_EXTRACT = table.Column<int>(type: "int", nullable: false),
                    DATA_SIZE_EXTRACT = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "AllExtractListModels",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    ClientId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChildWorkspace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChildSelectedOption = table.Column<bool>(type: "bit", nullable: false),
                    ChildChange = table.Column<bool>(type: "bit", nullable: false),
                    ChildOverrideSelectedOption = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "AllIssuesModel",
                columns: table => new
                {
                    APPEARANCE_LOGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTOR_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_ACCOUNT_ID = table.Column<int>(type: "int", nullable: false),
                    FILE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTON_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DAYS_AGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HOURS_AGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MESSAGE_TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MESSAGE_1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STATUS_ACK = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SERVER_INSERT_DATE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CalenderSetupModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    ClientId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CalenderSetup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BussinessYearDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FinacialYearDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReportingYearDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WeekStartDay = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnnualHolidayCalender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnnualCampaignCalender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NotifyCampaignsCalender = table.Column<bool>(type: "bit", nullable: false),
                    MilestoneAnnualHolidayCalender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NotifyMilestoneCalender = table.Column<bool>(type: "bit", nullable: false),
                    CalenderApplyAndEnforce = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "ChangeLogListModel",
                columns: table => new
                {
                    CLIENT_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCOUNT_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCOUNT_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WORKSPACE_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCESS_GRANTED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WORKSPACE_PARENT_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STORAGE_URL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_PRIMARY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_PASSIVE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QUOTA_SIZE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QUOTA_TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QUOTA_USED = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "ConnectionListModel",
                columns: table => new
                {
                    SOURCE_ACCOUNT_ID = table.Column<int>(type: "int", nullable: false),
                    APPEARANCE_LOGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTOR_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_CONNECTOR_ID = table.Column<int>(type: "int", nullable: false),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCOUNT_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_ENABLED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCESS_GRANTED = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "ConnectionLogModel",
                columns: table => new
                {
                    APPEARANCE_LOGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTION_TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONFIGURED_ACCOUNTS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FIRST_CREATED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TOTAL_EXTRACTS = table.Column<int>(type: "int", nullable: false),
                    LAST_ACCESSED = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "CurrencySetupModel",
                columns: table => new
                {
                    userId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    workSpaceId = table.Column<int>(type: "int", nullable: false),
                    CLIENT_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currencyType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currenceyTypeSign = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currencyImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currencyCollectedData = table.Column<bool>(type: "bit", nullable: false),
                    currencyPrepareData = table.Column<bool>(type: "bit", nullable: false),
                    currencyPresentingData = table.Column<bool>(type: "bit", nullable: false),
                    currencyConversion = table.Column<bool>(type: "bit", nullable: false),
                    exchangeRateAndDataConversion = table.Column<bool>(type: "bit", nullable: false),
                    currencyReportHeaders = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currencyVisulization = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currencyValue = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    currencyApplyAndEnforce = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "DataGovernanceModel",
                columns: table => new
                {
                    userId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    workSpaceId = table.Column<int>(type: "int", nullable: false),
                    CLIENT_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    schemaMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    childWorkspaceInheritance = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    workspaceShareData = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    outOffAppWebShareData = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    outOffApiShareData = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rawDataStagging = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    staggingStorageLocationType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    staggingRetentionDays = table.Column<int>(type: "int", nullable: false),
                    activeSourceLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    destinationWorkspace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    activeDestinationLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    passiveDestinationLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dataCollectionType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    overrideDataSnapshot = table.Column<bool>(type: "bit", nullable: false),
                    dataStorage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dataDestination = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    overrideDataStorage = table.Column<bool>(type: "bit", nullable: false),
                    destinationRetentionDays = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "DataQualityModel",
                columns: table => new
                {
                    FUNCTION_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FUNCTION_GROUP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FUNCTION_DETAILS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ENABLED = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "DestinationList",
                columns: table => new
                {
                    DES_ACCOUNT_ID = table.Column<int>(type: "int", nullable: false),
                    APPEARANCE_LOGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTOR_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_CONNECTOR_ID = table.Column<int>(type: "int", nullable: false),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCOUNT_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_ENABLED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCESS_GRANTED = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "DisplaySettingsModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceId = table.Column<int>(type: "int", nullable: false),
                    Client_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceDisplayMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LogoBackgroundColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceTheme = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ColorPallete = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "DropdownList",
                columns: table => new
                {
                    DROPDOWN_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DROPDOWN_TEXT = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "emplyee",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DOJ = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_emplyee", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EntityObjectFieldsList",
                columns: table => new
                {
                    OBJECT_FIELD_ID = table.Column<int>(type: "int", nullable: false),
                    OBJECT_FIELD_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_FIELD_TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AGGREGATION_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ISKEY_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VISIBILITY_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_FIELD_IMAGE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "FieldMappingRuleTemplateModel",
                columns: table => new
                {
                    SOURCE_COLUMN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TARGET_COLUMN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KEY_COLUMN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AGGREGATION_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VISIBILITY_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IMAGE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "GEtSourceObjectList",
                columns: table => new
                {
                    OBJECT_ID = table.Column<int>(type: "int", nullable: false),
                    OBJECT_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_VISIBILITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_IMAGE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SERVER_INSERT_DATE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "GraphDataModel",
                columns: table => new
                {
                    PLATFORM = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PERIOD_DATE = table.Column<long>(type: "bigint", nullable: false),
                    PERIOD_DISPLAY_DATE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IMPRESSIONS = table.Column<long>(type: "bigint", nullable: false),
                    CLICKS = table.Column<long>(type: "bigint", nullable: false),
                    CTR = table.Column<long>(type: "bigint", nullable: false),
                    CONNECTOR_IMAGE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "GridDataModel",
                columns: table => new
                {
                    INVOICE_NO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STOCK_CODE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESCRIPTION = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QUANTITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    INVOICE_DATE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UNIT_PRICE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CUSTOMER_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    COUNTRY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    INVOICE_TIME = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "IdentityControlModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    DefinedFormats = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AvailableFormats = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MandtoryField = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UniqueMandtoryField = table.Column<bool>(type: "bit", nullable: false),
                    LoginActivation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApprovalSuperVisor = table.Column<bool>(type: "bit", nullable: false),
                    ApprovalEmail = table.Column<bool>(type: "bit", nullable: false),
                    ApprovalQRCode = table.Column<bool>(type: "bit", nullable: false),
                    LoginCaseSensitive = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LoginAuthentication = table.Column<bool>(type: "bit", nullable: false),
                    SSOAuthentication = table.Column<bool>(type: "bit", nullable: false),
                    SSLCertificate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameInsert = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameUpdate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BDelete = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BMap = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex7 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex8 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex9 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex11 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex13 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex14 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex15 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex16 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "LookupListModel",
                columns: table => new
                {
                    LOOKUP_ID = table.Column<int>(type: "int", nullable: false),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LOOKUP_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCOUNT_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ENABLED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LOOKUP_FIELDS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VISIBILTY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_FIELD_SELECTION = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_FIELD_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_FIELD_SELECTION = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_FIELD_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTOR_ID = table.Column<int>(type: "int", nullable: false),
                    SOURCE_ACCOUNT_ID = table.Column<int>(type: "int", nullable: false),
                    TABLE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LOAD_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_OPTIONS = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "MainMenuModel",
                columns: table => new
                {
                    MAIN_MENU_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MAIN_MENU_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MODE_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    URL = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "MultiFactorAuthenticationModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    SecurityQuestion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SQFirstTimeLogin = table.Column<bool>(type: "bit", nullable: false),
                    SQPasswordUpdation = table.Column<bool>(type: "bit", nullable: false),
                    SecurityQestionOption = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityQestionAnswer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasscodeAuthentication = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAFirsttimeLogin = table.Column<bool>(type: "bit", nullable: false),
                    PAPasswordUpdation = table.Column<bool>(type: "bit", nullable: false),
                    PasscodeEmail = table.Column<bool>(type: "bit", nullable: false),
                    PasscodeSMS = table.Column<bool>(type: "bit", nullable: false),
                    PasscodeSinglepart = table.Column<bool>(type: "bit", nullable: false),
                    PasscodeTwopart = table.Column<bool>(type: "bit", nullable: false),
                    PasscodeValidityTime = table.Column<int>(type: "int", nullable: false),
                    PasscodeValidityAttempts = table.Column<int>(type: "int", nullable: false),
                    CryptographicTokens = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CTFirsttimeLogin = table.Column<bool>(type: "bit", nullable: false),
                    CTPasswordUpdation = table.Column<bool>(type: "bit", nullable: false),
                    QRCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QRFirsttimeLogin = table.Column<bool>(type: "bit", nullable: false),
                    QRPasswordUpdation = table.Column<bool>(type: "bit", nullable: false),
                    FaceID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FIFirsttimeLogin = table.Column<bool>(type: "bit", nullable: false),
                    FIPasswordUpdation = table.Column<bool>(type: "bit", nullable: false),
                    SupervisoryApproval = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SAFirsttimeLogin = table.Column<bool>(type: "bit", nullable: false),
                    SAPasswordUpdation = table.Column<bool>(type: "bit", nullable: false),
                    AppearanceLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameInsert = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameUpdate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BDelete = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BMap = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex7 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex8 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex9 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex11 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex13 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex14 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex15 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex16 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "NumeralSetupModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceId = table.Column<int>(type: "int", nullable: false),
                    Client_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberingSystemFormat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberSignType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SignFormat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PositiveNumbeColorCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NegitiveNumberColorCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberConversion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberValueConversion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberValue = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SelectiveDecimalPlaces = table.Column<int>(type: "int", nullable: false),
                    FullDecimalPlaces = table.Column<bool>(type: "bit", nullable: false),
                    RoundOffNumbers = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SelectiveRoundOffPlace = table.Column<int>(type: "int", nullable: false),
                    NumberApplyAndEnforce = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "ObjectListModelForLookupInsert",
                columns: table => new
                {
                    OBJECT_FIELD_ID = table.Column<int>(type: "int", nullable: false),
                    OBJECT_FIELD_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "PasswordControlSetupModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    PasswordLength = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StrongPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordField = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PasswordExpired = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstLoginOption = table.Column<bool>(type: "bit", nullable: false),
                    FirstLoginDays = table.Column<int>(type: "int", nullable: false),
                    UserCreatedDays = table.Column<int>(type: "int", nullable: false),
                    LoginAttempts = table.Column<int>(type: "int", nullable: false),
                    LastPasswordChanged = table.Column<int>(type: "int", nullable: false),
                    NotifyUserPasswordExpiry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NotifyUserPasswordExpiryDays = table.Column<int>(type: "int", nullable: false),
                    NotifySupervisorPasswordExpiry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NotifySupervisorPasswordExpiryDays = table.Column<int>(type: "int", nullable: false),
                    AppearanceLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameInsert = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameUpdate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BDelete = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BMap = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex7 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex8 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex9 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex11 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex13 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex14 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex15 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex16 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "QuotaSettingsModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceId = table.Column<int>(type: "int", nullable: false),
                    Client_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuotaLimit = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuotaType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuotaUsageCycle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuotaStartDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuotaEndDate = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "RiskBaseAuthenticationModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    WorkspaceId = table.Column<int>(type: "int", nullable: false),
                    RBAActivation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RBAAccess = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupervisorSummary = table.Column<bool>(type: "bit", nullable: false),
                    UserRiskSummary = table.Column<bool>(type: "bit", nullable: false),
                    IPSummary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IPVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IPAccess = table.Column<bool>(type: "bit", nullable: false),
                    MacAccess = table.Column<bool>(type: "bit", nullable: false),
                    MacVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeZoneAccess = table.Column<bool>(type: "bit", nullable: false),
                    TimeZoneVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeSlotAccess = table.Column<bool>(type: "bit", nullable: false),
                    StartTimeVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EndTimeVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DeviceTypeAcces = table.Column<bool>(type: "bit", nullable: false),
                    DeviceTypeVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConnectionTypeAccess = table.Column<bool>(type: "bit", nullable: false),
                    ConnectionTypeVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupervisorAccess = table.Column<bool>(type: "bit", nullable: false),
                    SupervisorVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppearanceColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameInsert = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsernameUpdate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ServerUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientInsertTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientUpdateTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BDelete = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BMap = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex7 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex8 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex9 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex11 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex13 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex14 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex15 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex16 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SaveSourceFieldMappingRuleTemplateModel",
                columns: table => new
                {
                    userId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    workspaceId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    clientId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    connectorId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    templateName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    sourceColumn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    targetColumn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    keyColumn = table.Column<bool>(type: "bit", nullable: false),
                    aggregationStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    visibilityStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SaveUserAccessManagementModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubUserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProcedureName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OldPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NewPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RetypeNewPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OverwriteExisting = table.Column<bool>(type: "bit", nullable: false),
                    RetriveRecent = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Useractive = table.Column<bool>(type: "bit", nullable: false),
                    UserLocked = table.Column<bool>(type: "bit", nullable: false),
                    Workspace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChildWorkspace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DisplayMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ModuleAllowed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataOperation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MenuAllowed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubMenuAllowed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataOperaion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NewsLetter = table.Column<bool>(type: "bit", nullable: false),
                    SystemNotification = table.Column<bool>(type: "bit", nullable: false),
                    AccessNotification = table.Column<bool>(type: "bit", nullable: false),
                    RegistarionAccessMode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupervisorMode = table.Column<bool>(type: "bit", nullable: false),
                    SuperVisorName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DefaultDisplaymode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DefaultPage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DisplayTheme = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientTimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Remark4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex7 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex8 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex9 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex11 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex13 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex14 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex15 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flex16 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SourceListModel",
                columns: table => new
                {
                    SOURCE_ACCOUNT_ID = table.Column<int>(type: "int", nullable: false),
                    CONNECTION_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONNECTOR_TYPE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    APPEARANCE_LOGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_CONNECTOR_ID = table.Column<int>(type: "int", nullable: false),
                    WORKSPACE_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SOURCE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BSTATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    USER_NAME_INSERT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SERVER_INSERT_DATE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESTINATION_ENABLED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACCESS_GRANTED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NEXT_RUN = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SourceObjectModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkspaceName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ObjectName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AccessGrant = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SourceTableListModel",
                columns: table => new
                {
                    DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SubMenuSectionItemsModel",
                columns: table => new
                {
                    SUB_MENU_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SUB_MENU_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    URL = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "SubMenusectionModel",
                columns: table => new
                {
                    MENU_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MENU_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "TimeZoneSetupModel",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceId = table.Column<int>(type: "int", nullable: false),
                    Client_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataFormatType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateFormat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClockImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCollectedData = table.Column<bool>(type: "bit", nullable: false),
                    DatePreparingData = table.Column<bool>(type: "bit", nullable: false),
                    DatePresentingData = table.Column<bool>(type: "bit", nullable: false),
                    DateConversion = table.Column<bool>(type: "bit", nullable: false),
                    DateConversionValue = table.Column<bool>(type: "bit", nullable: false),
                    TimeZone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeZoneType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateFormatReports = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReportsDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateFormatVisulization = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VisulizationDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeFormatReports = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReportTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimeFormatVisualization = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VisualizationTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApplyAndEnforceDatetime = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "TreeDropDownChildModel",
                columns: table => new
                {
                    DROPDOWN_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DROPDOWN_TEXT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SELECTED = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "TreeDropDownParentModel",
                columns: table => new
                {
                    DROPDOWN_VALUE = table.Column<int>(type: "int", nullable: false),
                    DROPDOWN_TEXT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SELECTED = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "UAMDropdownListModel",
                columns: table => new
                {
                    DROPDOWN_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DROPDOWN_TEXT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SELECTED = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "UpdateConnectorListStep2",
                columns: table => new
                {
                    ACCOUNT_DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ENABLED_CONNECTION = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMAIL_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AUTHORIZATION_GRANT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    status_notify_grant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FIELD_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FIELD_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BSTATUS = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "UpdateSourceObjectGridModel",
                columns: table => new
                {
                    OBJECT_ID = table.Column<int>(type: "int", nullable: false),
                    OBJECT_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_TYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_VISIBILITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LAST_ACCESSED = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBJECT_IMAGE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "UserListModel",
                columns: table => new
                {
                    SUB_USER_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMAIL_ADDRESS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LAST_ACTIVITY = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LAST_STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    USER_ACTIVE = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "WorkspaceSetupList",
                columns: table => new
                {
                    WORKSPACE_ID = table.Column<int>(type: "int", nullable: false),
                    WORKSPACE_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DISPLAY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARENT_WORKSPACE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CHILD_APPLY_AND_ENFORCE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EXCLUDE_CHILD_WORKSPACE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BSTATUS = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "workspaceSpModal",
                columns: table => new
                {
                    userId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    workSpaceId = table.Column<int>(type: "int", nullable: false),
                    CLIENT_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpace_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkSpaceParentName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChildWorkSpaceRule = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Exclude_Child_WorkSpace = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ee1c5685-3f6e-4653-ae38-a9889929a5c1", "27aec9fc-07c8-4d24-a1f4-6f3d29e85148", "ADMIN", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "b6a6e4f5-5374-4795-b195-770cbd7e68ab", "1d53820f-fa74-4b92-b25f-f1b6af5fa836", "Manager", "MANAGER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6fa778b1-5e74-4d72-8810-8f50f81921b7", "c6735236-2b10-4ac0-afd4-4a5482eeb1b1", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccessLockingModel");

            migrationBuilder.DropTable(
                name: "AllExtractListModel");

            migrationBuilder.DropTable(
                name: "AllExtractListModels");

            migrationBuilder.DropTable(
                name: "AllIssuesModel");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "CalenderSetupModel");

            migrationBuilder.DropTable(
                name: "ChangeLogListModel");

            migrationBuilder.DropTable(
                name: "ConnectionListModel");

            migrationBuilder.DropTable(
                name: "ConnectionLogModel");

            migrationBuilder.DropTable(
                name: "CurrencySetupModel");

            migrationBuilder.DropTable(
                name: "DataGovernanceModel");

            migrationBuilder.DropTable(
                name: "DataQualityModel");

            migrationBuilder.DropTable(
                name: "DestinationList");

            migrationBuilder.DropTable(
                name: "DisplaySettingsModel");

            migrationBuilder.DropTable(
                name: "DropdownList");

            migrationBuilder.DropTable(
                name: "emplyee");

            migrationBuilder.DropTable(
                name: "EntityObjectFieldsList");

            migrationBuilder.DropTable(
                name: "FieldMappingRuleTemplateModel");

            migrationBuilder.DropTable(
                name: "GEtSourceObjectList");

            migrationBuilder.DropTable(
                name: "GraphDataModel");

            migrationBuilder.DropTable(
                name: "GridDataModel");

            migrationBuilder.DropTable(
                name: "IdentityControlModel");

            migrationBuilder.DropTable(
                name: "LookupListModel");

            migrationBuilder.DropTable(
                name: "MainMenuModel");

            migrationBuilder.DropTable(
                name: "MultiFactorAuthenticationModel");

            migrationBuilder.DropTable(
                name: "NumeralSetupModel");

            migrationBuilder.DropTable(
                name: "ObjectListModelForLookupInsert");

            migrationBuilder.DropTable(
                name: "PasswordControlSetupModel");

            migrationBuilder.DropTable(
                name: "QuotaSettingsModel");

            migrationBuilder.DropTable(
                name: "RiskBaseAuthenticationModel");

            migrationBuilder.DropTable(
                name: "SaveSourceFieldMappingRuleTemplateModel");

            migrationBuilder.DropTable(
                name: "SaveUserAccessManagementModel");

            migrationBuilder.DropTable(
                name: "SourceListModel");

            migrationBuilder.DropTable(
                name: "SourceObjectModel");

            migrationBuilder.DropTable(
                name: "SourceTableListModel");

            migrationBuilder.DropTable(
                name: "SubMenuSectionItemsModel");

            migrationBuilder.DropTable(
                name: "SubMenusectionModel");

            migrationBuilder.DropTable(
                name: "TimeZoneSetupModel");

            migrationBuilder.DropTable(
                name: "TreeDropDownChildModel");

            migrationBuilder.DropTable(
                name: "TreeDropDownParentModel");

            migrationBuilder.DropTable(
                name: "UAMDropdownListModel");

            migrationBuilder.DropTable(
                name: "UpdateConnectorListStep2");

            migrationBuilder.DropTable(
                name: "UpdateSourceObjectGridModel");

            migrationBuilder.DropTable(
                name: "UserListModel");

            migrationBuilder.DropTable(
                name: "WorkspaceSetupList");

            migrationBuilder.DropTable(
                name: "workspaceSpModal");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
