using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.ChildWorkspace
{
    public class ChildWorkspaceService : IChildWorkspaces
    {
        private readonly IRepositoryBase<ChildWorkspacesModel> _ChildWorkspaceRepository;
        public ChildWorkspaceService(IRepositoryBase<ChildWorkspacesModel> CalenderSetupRepository)
        {
            _ChildWorkspaceRepository = CalenderSetupRepository;
        }

        public async Task<List<ChildWorkspacesModel>> GetChildWorkspace(string userId, string workSpaceId, string CLIENT_ID)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", CLIENT_ID),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GETCHILDWORKSPACESLIST + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<ChildWorkspacesModel> childWorkspaceList = _ChildWorkspaceRepository.ExecuteQuery(spQuery, parameters).ToList();
            return childWorkspaceList;
        }
  

        public async Task<string> SaveChildWorkspace(ChildWorkspacesModel childWorkspacesModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", childWorkspacesModel.userId),
            new SqlParameter("@CLIENT_ID", childWorkspacesModel.ClientId),
            new SqlParameter("@WORKSPACE_ID", childWorkspacesModel.workspaceId),
            new SqlParameter("@CHILD_WORKSPACE", childWorkspacesModel.childWorkspace),
            new SqlParameter("@CHILD_SELECTED_OPTIONS", childWorkspacesModel.childSelectedOption),
            new SqlParameter("@CHILD_CHANGES", childWorkspacesModel.childChange),
            new SqlParameter("@CHILD_OVERRIDE_SELECTED_OPTIONS", childWorkspacesModel.childOverrideSelectedOption),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(childWorkspacesModel.ClientDate) ? (object)DBNull.Value: childWorkspacesModel.ClientDate),
            new SqlParameter("@CLIENT_TIME   ",string.IsNullOrEmpty(childWorkspacesModel.ClientTime) ? (object)DBNull.Value: childWorkspacesModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(childWorkspacesModel.ClientTimeZone) ? (object)DBNull.Value: childWorkspacesModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(childWorkspacesModel.Remark1) ? (object)DBNull.Value: childWorkspacesModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(childWorkspacesModel.Remark2) ? (object)DBNull.Value: childWorkspacesModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(childWorkspacesModel.Remark3) ? (object)DBNull.Value: childWorkspacesModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(childWorkspacesModel.Remark4) ? (object)DBNull.Value: childWorkspacesModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(childWorkspacesModel.Flex1) ? (object)DBNull.Value: childWorkspacesModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(childWorkspacesModel.Flex2) ? (object)DBNull.Value: childWorkspacesModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(childWorkspacesModel.Flex3) ? (object)DBNull.Value: childWorkspacesModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(childWorkspacesModel.Flex4) ? (object)DBNull.Value: childWorkspacesModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(childWorkspacesModel.Flex5) ? (object)DBNull.Value: childWorkspacesModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(childWorkspacesModel.Flex6) ? (object)DBNull.Value: childWorkspacesModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(childWorkspacesModel.Flex7) ? (object)DBNull.Value: childWorkspacesModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(childWorkspacesModel.Flex8) ? (object)DBNull.Value: childWorkspacesModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(childWorkspacesModel.Flex9) ? (object)DBNull.Value: childWorkspacesModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(childWorkspacesModel.Flex10) ? (object)DBNull.Value: childWorkspacesModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(childWorkspacesModel.Flex11) ? (object)DBNull.Value: childWorkspacesModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(childWorkspacesModel.Flex12) ? (object)DBNull.Value: childWorkspacesModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(childWorkspacesModel.Flex13) ? (object)DBNull.Value: childWorkspacesModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(childWorkspacesModel.Flex14) ? (object)DBNull.Value: childWorkspacesModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(childWorkspacesModel.Flex15) ? (object)DBNull.Value: childWorkspacesModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(childWorkspacesModel.Flex16) ? (object)DBNull.Value: childWorkspacesModel.Flex16),
               new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000,
            Value = ""
                }
            };
            
            string spQuery = StoreProcedureConstants.Sp_SaveChildWorkSpaces + " @USER_ID,@CLIENT_ID ,@WORKSPACE_ID, @CHILD_WORKSPACE, @CHILD_SELECTED_OPTIONS, @CHILD_CHANGES, @CHILD_OVERRIDE_SELECTED_OPTIONS,"+
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
            " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
            " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
            " @V_MESSAGE OUTPUT";

            return _ChildWorkspaceRepository.ExecuteCommand(spQuery, parameters);
        }
    }

    }

