using CNS.ZOOM360.Entities.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings;
using CNS.ZOOM360.Shared.StoreProcedures.DisplaySettings;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.DisplaySettings
{
    public class DisplaySettingsService:IDisplaySettingsService
    {
        private readonly IRepositoryBase<DisplaySettingsModel> _displaySettingRepository;
        private readonly IRepositoryBase<DisplaySettingsModel> _displaySettingInputRepository;
        public DisplaySettingsService(IRepositoryBase<DisplaySettingsModel> displaySettingRepository,
         IRepositoryBase<DisplaySettingsModel> displaySettingInputRepository) {
            _displaySettingRepository = displaySettingRepository;
            _displaySettingInputRepository = displaySettingInputRepository;
        }
        

        public async Task<List<DisplaySettingsModel>> GetDisplaySetting(DisplaySettingsModel displaySettingsModel)
        {
            object[] parameters = {

                new SqlParameter("@USER_ID", displaySettingsModel.UserId),
                new SqlParameter("@CLIENT_ID", displaySettingsModel.Client_Id),
                new SqlParameter("@WORKSPACE_ID", displaySettingsModel.WorkSpaceId),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GETDISPLAYSETTINGSLIST + " @USER_ID,@CLIENT_ID," +
                "@WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<DisplaySettingsModel> _dispalySettingList = _displaySettingInputRepository.ExecuteQuery(spQuery, parameters).ToList();
            return _dispalySettingList;
        }


        public async Task<string> SaveDisplaySetting(DisplaySettingsModel displaySettingsModel)
        {
            object[] parameters = {

            new SqlParameter("@USER_ID", displaySettingsModel.UserId),
              new SqlParameter("@CLIENT_ID", displaySettingsModel.Client_Id),
            new SqlParameter("@WORKSPACE_ID", displaySettingsModel.WorkSpaceId),
            new SqlParameter("@WORKSPACE_DISPLAY_MODE", displaySettingsModel.WorkspaceDisplayMode),
            new SqlParameter("@WORKSPACE_LOGO", displaySettingsModel.WorkspaceLogo),
            new SqlParameter("@LOGO_BACKGROUND_COLOR", displaySettingsModel.LogoBackgroundColor),
            new SqlParameter("@WORKSPACE_THEME", displaySettingsModel.WorkspaceTheme),
            new SqlParameter("@COLOR_PALETTE", displaySettingsModel.ColorPallete),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(displaySettingsModel.ClientDate) ? (object)DBNull.Value: displaySettingsModel.ClientDate),
            new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(displaySettingsModel.ClientTime) ? (object)DBNull.Value: displaySettingsModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(displaySettingsModel.ClientTimeZone) ? (object)DBNull.Value: displaySettingsModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(displaySettingsModel.Remark1) ? (object)DBNull.Value: displaySettingsModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(displaySettingsModel.Remark2) ? (object)DBNull.Value: displaySettingsModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(displaySettingsModel.Remark3) ? (object)DBNull.Value: displaySettingsModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(displaySettingsModel.Remark4) ? (object)DBNull.Value: displaySettingsModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(displaySettingsModel.Flex1) ? (object)DBNull.Value: displaySettingsModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(displaySettingsModel.Flex2) ? (object)DBNull.Value: displaySettingsModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(displaySettingsModel.Flex3) ? (object)DBNull.Value: displaySettingsModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(displaySettingsModel.Flex4) ? (object)DBNull.Value: displaySettingsModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(displaySettingsModel.Flex5) ? (object)DBNull.Value: displaySettingsModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(displaySettingsModel.Flex6) ? (object)DBNull.Value: displaySettingsModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(displaySettingsModel.Flex7) ? (object)DBNull.Value: displaySettingsModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(displaySettingsModel.Flex8) ? (object)DBNull.Value: displaySettingsModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(displaySettingsModel.Flex9) ? (object)DBNull.Value: displaySettingsModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(displaySettingsModel.Flex10) ? (object)DBNull.Value: displaySettingsModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(displaySettingsModel.Flex11) ? (object)DBNull.Value: displaySettingsModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(displaySettingsModel.Flex12) ? (object)DBNull.Value: displaySettingsModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(displaySettingsModel.Flex13) ? (object)DBNull.Value: displaySettingsModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(displaySettingsModel.Flex14) ? (object)DBNull.Value: displaySettingsModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(displaySettingsModel.Flex15) ? (object)DBNull.Value: displaySettingsModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(displaySettingsModel.Flex16) ? (object)DBNull.Value: displaySettingsModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }
        };
            string spQuery = StoreProcedureConstants.Sp_SaveDisplaySettings + " @USER_ID,@CLIENT_ID," +
                "@WORKSPACE_ID, @WORKSPACE_DISPLAY_MODE, @WORKSPACE_LOGO," +
                " @LOGO_BACKGROUND_COLOR, @WORKSPACE_THEME, @COLOR_PALETTE," +
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                " @V_MESSAGE OUTPUT";
            return _displaySettingRepository.ExecuteCommand(spQuery, parameters);
        }

    }
}
