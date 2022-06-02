using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Entities.StoreProcedures.Workspace;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using System.Linq;
using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Shared.StoreProcedures.Workspace;

namespace CNS.ZOOM360.Services.StoreProcedures.Workspace
{
    public class WorkspaceSetupService: IWorkspaceSetupService
    {
        private IRepositoryBase<WorkspaceSetup> _WorkspaceSetupRepository;
        private IRepositoryBase<WorkspaceSetupList> _WorkspaceSetupListRepository;
        
        public WorkspaceSetupService(IRepositoryBase<WorkspaceSetup> WorkspaceSpRepository, IRepositoryBase<WorkspaceSetupList> WorkspaceSetupListRepository)
        {
            _WorkspaceSetupRepository = WorkspaceSpRepository;
            _WorkspaceSetupListRepository = WorkspaceSetupListRepository;
            
        }
        public async Task<string> SaveWorkspaceSetup(WorkspaceSetup workspaceModel)
        {

            object[] parameters = {
            new SqlParameter("@USER_ID",workspaceModel.userId),
             new SqlParameter("@CLIENT_ID", workspaceModel.Client_Id),
            new SqlParameter("@WORKSPACE_ID",workspaceModel.workSpaceId),
            new SqlParameter("@WORKSPACE_NAME",workspaceModel.WorkSpace_Name),
            new SqlParameter("@WORKSPACE_DISPLAY_NAME",workspaceModel.WorkSpaceDisplayName),
            new SqlParameter("@WORKSPACE_PARENT_NAME",workspaceModel.WorkSpaceParentName),
            new SqlParameter("@CHILD_WORKSPACE_RULE",workspaceModel.ChildWorkSpaceRule),
            new SqlParameter("@EXCLUDE_CHILD_WORKSPACE",workspaceModel.Exclude_Child_WorkSpace),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(workspaceModel.ClientDate) ? (object)DBNull.Value: workspaceModel.ClientDate),
            new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(workspaceModel.ClientTime) ? (object)DBNull.Value: workspaceModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(workspaceModel.ClientTimeZone) ? (object)DBNull.Value: workspaceModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(workspaceModel.Remark1) ? (object)DBNull.Value: workspaceModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(workspaceModel.Remark2) ? (object)DBNull.Value: workspaceModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(workspaceModel.Remark3) ? (object)DBNull.Value: workspaceModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(workspaceModel.Remark4) ? (object)DBNull.Value: workspaceModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(workspaceModel.workspaceParentId) ? (object)DBNull.Value: workspaceModel.workspaceParentId),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(workspaceModel.Flex2) ? (object)DBNull.Value: workspaceModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(workspaceModel.Flex3) ? (object)DBNull.Value: workspaceModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(workspaceModel.Flex4) ? (object)DBNull.Value: workspaceModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(workspaceModel.Flex5) ? (object)DBNull.Value: workspaceModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(workspaceModel.Flex6) ? (object)DBNull.Value: workspaceModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(workspaceModel.Flex7) ? (object)DBNull.Value: workspaceModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(workspaceModel.Flex8) ? (object)DBNull.Value: workspaceModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(workspaceModel.Flex9) ? (object)DBNull.Value: workspaceModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(workspaceModel.Flex10) ? (object)DBNull.Value: workspaceModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(workspaceModel.Flex11) ? (object)DBNull.Value: workspaceModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(workspaceModel.Flex12) ? (object)DBNull.Value: workspaceModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(workspaceModel.Flex13) ? (object)DBNull.Value: workspaceModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(workspaceModel.Flex14) ? (object)DBNull.Value: workspaceModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(workspaceModel.Flex15) ? (object)DBNull.Value: workspaceModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(workspaceModel.Flex16) ? (object)DBNull.Value: workspaceModel.Flex16),
            new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000
            }
            };

            string spQuery = StoreProcedureConstants.Sp_SaveWorkspaceSetup + " @USER_ID,@CLIENT_ID,@WORKSPACE_ID, @WORKSPACE_NAME, @WORKSPACE_DISPLAY_NAME,@WORKSPACE_PARENT_NAME, @CHILD_WORKSPACE_RULE, @EXCLUDE_CHILD_WORKSPACE," +
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                " @V_MESSAGE OUTPUT";
            return _WorkspaceSetupRepository.ExecuteCommand(spQuery, parameters);

        }
        public async Task<WorkspaceSetup> GetWorkspaceSetupSettings(string userId, string client_Id, string workSpaceId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@CLIENT_ID", client_Id),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GetWorkspaceSetup + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID,  @V_MESSAGE OUTPUT";

            WorkspaceSetup workspaceSetup = _WorkspaceSetupRepository.ExecuteQuery(spQuery, parameters).FirstOrDefault();
            return workspaceSetup;
        }

        public async Task<List<WorkspaceSetupList>> GetWorkspaceSetupList(string userId, string workSpaceId, string CLIENT_ID, string workSpaceName, string parentWorkSpace)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", CLIENT_ID),
                new SqlParameter("@WORKSPACE_ID", string.IsNullOrEmpty(workSpaceId) ? (object)DBNull.Value:workSpaceId),
                new SqlParameter("@WORKSPACE_NAME",string.IsNullOrEmpty(workSpaceName) ? (object)DBNull.Value: workSpaceName),
                new SqlParameter("@PARENT_WORKSPACE",string.IsNullOrEmpty(parentWorkSpace) ? (object)DBNull.Value: parentWorkSpace),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GetWorkspaceSetupList + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @WORKSPACE_NAME, @PARENT_WORKSPACE,   @V_MESSAGE OUTPUT";
            List<WorkspaceSetupList> workspacelist = _WorkspaceSetupListRepository.ExecuteQuery(spQuery, parameters).ToList();
            return workspacelist;
        }

        

    }
}
