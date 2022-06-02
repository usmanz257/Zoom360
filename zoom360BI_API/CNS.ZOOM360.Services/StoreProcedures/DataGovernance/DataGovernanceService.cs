using CNS.ZOOM360.Entities.StoreProcedures.DataGovernance;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.DataGovernance;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.DataGovernance
{
    public class DataGovernanceService : IDataGovernanceService
    {

        private readonly IRepositoryBase<DataGovernanceModel> _dataGovernanceRepository;
        public DataGovernanceService(IRepositoryBase<DataGovernanceModel> dataGovernanceRepository) {
            _dataGovernanceRepository = dataGovernanceRepository;
        }

        public async Task<List<DataGovernanceModel>> GetDataGovernance(string userId, string workSpaceId, string clientId)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", userId),
                new SqlParameter("@CLIENT_ID", clientId),
                new SqlParameter("@WORKSPACE_ID", workSpaceId),
                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GETDATAGOVERNANCELIST + " @USER_ID, @CLIENT_ID, @WORKSPACE_ID, @V_MESSAGE OUTPUT";
            List<DataGovernanceModel> calenderList = _dataGovernanceRepository.ExecuteQuery(spQuery, parameters).ToList();
            return calenderList;
        }

        public async Task<string> SaveDataGovernance(DataGovernanceModel dataGovernanceModel)
        {
            object[] parameters = {

            new SqlParameter("@USER_ID", dataGovernanceModel.userId),
            new SqlParameter("@WORKSPACE_ID", dataGovernanceModel.workSpaceId),
            new SqlParameter("@CLIENT_ID", dataGovernanceModel.CLIENT_ID),
            new SqlParameter("@SCHEMA_MODE", dataGovernanceModel.schemaMode),
            new SqlParameter("@CHILD_WORKSPACE_INHERITANCE", dataGovernanceModel.childWorkspaceInheritance),
            new SqlParameter("@WORKSPACE_SHAREDATA", dataGovernanceModel.workspaceShareData),
            new SqlParameter("@OUTOFFAPP_WEBSHAREDATA", dataGovernanceModel.outOffAppWebShareData),
            new SqlParameter("@OUTOFFAPP_APISHAREDATA", dataGovernanceModel.outOffApiShareData),
            new SqlParameter("@RAW_DATA_STAGGING", dataGovernanceModel.rawDataStagging),
            new SqlParameter("@STAGGING_STORAGE_LOCATIONTYPE", dataGovernanceModel.staggingStorageLocationType),
            new SqlParameter("@STAGGING_RETENTION_DAYS", dataGovernanceModel.staggingRetentionDays),
            new SqlParameter("@ACTIVE_SOURCE_LOCATION", dataGovernanceModel.activeSourceLocation),
            new SqlParameter("@DESTINATION_WORKSPACE", dataGovernanceModel.destinationWorkspace),
            new SqlParameter("@ACTIVE_DESTINATION_LOCATION", dataGovernanceModel.activeDestinationLocation),
            new SqlParameter("@PASSIVE_DESTINATION_LOCATION", dataGovernanceModel.passiveDestinationLocation),
            new SqlParameter("@DATA_COLLECTING_TYPE", dataGovernanceModel.dataCollectionType),
            new SqlParameter("@OVERRIDE_DATA_SNAPSHOT", dataGovernanceModel.overrideDataSnapshot),
            new SqlParameter("@DATA_STORAGE", dataGovernanceModel.dataStorage),
            new SqlParameter("@DATA_DESTINATION", dataGovernanceModel.dataDestination),
            new SqlParameter("@OVERRIDE_DATA_STORAGE", dataGovernanceModel.overrideDataStorage),
            new SqlParameter("@DESTINATION_RETENTION_DAYS", dataGovernanceModel.destinationRetentionDays),
            new SqlParameter("@CLIENT_DATE",string.IsNullOrEmpty(dataGovernanceModel.ClientDate) ? (object)DBNull.Value: dataGovernanceModel.ClientDate),
            new SqlParameter("@CLIENT_TIME",string.IsNullOrEmpty(dataGovernanceModel.ClientTime) ? (object)DBNull.Value: dataGovernanceModel.ClientTime),
            new SqlParameter("@CLIENT_TIME_ZONE",string.IsNullOrEmpty(dataGovernanceModel.ClientTimeZone) ? (object)DBNull.Value: dataGovernanceModel.ClientTimeZone),
            new SqlParameter("@REMARKS_1",string.IsNullOrEmpty(dataGovernanceModel.Remark1) ? (object)DBNull.Value: dataGovernanceModel.Remark1),
            new SqlParameter("@REMARKS_2",string.IsNullOrEmpty(dataGovernanceModel.Remark2) ? (object)DBNull.Value: dataGovernanceModel.Remark2),
            new SqlParameter("@REMARKS_3",string.IsNullOrEmpty(dataGovernanceModel.Remark3) ? (object)DBNull.Value: dataGovernanceModel.Remark3),
            new SqlParameter("@REMARKS_4",string.IsNullOrEmpty(dataGovernanceModel.Remark4) ? (object)DBNull.Value: dataGovernanceModel.Remark4),
            new SqlParameter("@FLEX_1",string.IsNullOrEmpty(dataGovernanceModel.Flex1) ? (object)DBNull.Value: dataGovernanceModel.Flex1),
            new SqlParameter("@FLEX_2",string.IsNullOrEmpty(dataGovernanceModel.Flex2) ? (object)DBNull.Value: dataGovernanceModel.Flex2),
            new SqlParameter("@FLEX_3",string.IsNullOrEmpty(dataGovernanceModel.Flex3) ? (object)DBNull.Value: dataGovernanceModel.Flex3),
            new SqlParameter("@FLEX_4",string.IsNullOrEmpty(dataGovernanceModel.Flex4) ? (object)DBNull.Value: dataGovernanceModel.Flex4),
            new SqlParameter("@FLEX_5",string.IsNullOrEmpty(dataGovernanceModel.Flex5) ? (object)DBNull.Value: dataGovernanceModel.Flex5),
            new SqlParameter("@FLEX_6",string.IsNullOrEmpty(dataGovernanceModel.Flex6) ? (object)DBNull.Value: dataGovernanceModel.Flex6),
            new SqlParameter("@FLEX_7",string.IsNullOrEmpty(dataGovernanceModel.Flex7) ? (object)DBNull.Value: dataGovernanceModel.Flex7),
            new SqlParameter("@FLEX_8",string.IsNullOrEmpty(dataGovernanceModel.Flex8) ? (object)DBNull.Value: dataGovernanceModel.Flex8),
            new SqlParameter("@FLEX_9",string.IsNullOrEmpty(dataGovernanceModel.Flex9) ? (object)DBNull.Value: dataGovernanceModel.Flex8),
            new SqlParameter("@FLEX_10",string.IsNullOrEmpty(dataGovernanceModel.Flex10) ? (object)DBNull.Value: dataGovernanceModel.Flex10),
            new SqlParameter("@FLEX_11",string.IsNullOrEmpty(dataGovernanceModel.Flex11) ? (object)DBNull.Value: dataGovernanceModel.Flex11),
            new SqlParameter("@FLEX_12",string.IsNullOrEmpty(dataGovernanceModel.Flex12) ? (object)DBNull.Value: dataGovernanceModel.Flex12),
            new SqlParameter("@FLEX_13",string.IsNullOrEmpty(dataGovernanceModel.Flex13) ? (object)DBNull.Value: dataGovernanceModel.Flex13),
            new SqlParameter("@FLEX_14",string.IsNullOrEmpty(dataGovernanceModel.Flex14) ? (object)DBNull.Value: dataGovernanceModel.Flex14),
            new SqlParameter("@FLEX_15",string.IsNullOrEmpty(dataGovernanceModel.Flex15) ? (object)DBNull.Value: dataGovernanceModel.Flex15),
            new SqlParameter("@FLEX_16",string.IsNullOrEmpty(dataGovernanceModel.Flex16) ? (object)DBNull.Value: dataGovernanceModel.Flex16),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){ Direction = ParameterDirection.Output }

        };

            string spQuery = StoreProcedureConstants.Sp_SaveDataGovernance + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @SCHEMA_MODE, @CHILD_WORKSPACE_INHERITANCE,@WORKSPACE_SHAREDATA, @OUTOFFAPP_WEBSHAREDATA," +
                " @OUTOFFAPP_APISHAREDATA, @RAW_DATA_STAGGING,@STAGGING_STORAGE_LOCATIONTYPE, " +
                "@STAGGING_RETENTION_DAYS," +
                " @ACTIVE_SOURCE_LOCATION, @DESTINATION_WORKSPACE,@ACTIVE_DESTINATION_LOCATION, @PASSIVE_DESTINATION_LOCATION," +
                " @DATA_COLLECTING_TYPE, @OVERRIDE_DATA_SNAPSHOT,@DATA_STORAGE, @DATA_DESTINATION," +
                " @OVERRIDE_DATA_STORAGE, @DESTINATION_RETENTION_DAYS," +
                " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
                " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
                " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16 ," +
                "  @V_MESSAGE OUTPUT";

            return _dataGovernanceRepository.ExecuteCommand(spQuery, parameters);


        }
    }
    }

       
