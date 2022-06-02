using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.SourceDestination;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.DestinationService
{
   public class destinationService: IDestination
    {
        private readonly IRepositoryBase<sourceCommonModel> _sourcedescription;
        private readonly IRepositoryBase<SourceAccountConnectionModel> _sourcredential;

        public destinationService(IRepositoryBase<sourceCommonModel> sourceRepository)
        {
            _sourcedescription = sourceRepository;

        }
        public async Task<string> SavedestinationDescription(sourceCommonModel inpoutModel)
        {

            object[] parameters = {

            new SqlParameter("@USER_ID",inpoutModel.userId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.workspaceId),
            new SqlParameter("@CLIENT_ID", inpoutModel.clientId),
            new SqlParameter("@DES_ACCOUNT_ID ", inpoutModel.AccountId),
            new SqlParameter("@CONNECTOR_ID", inpoutModel.connectorId),
            new SqlParameter("@ACCOUNT_DISPLAY_NAME", inpoutModel.SourceInfoModel.accountName),
            new SqlParameter("@WORKSPACE_NAME", inpoutModel.SourceInfoModel.workspace),
            new SqlParameter("@ENABLED_STATUS", inpoutModel.SourceInfoModel.enableConnectoin),
            new SqlParameter("@VISIBILITY_STATUS", inpoutModel.SourceInfoModel.visibilitymode),
            new SqlParameter("@COMMENTS", inpoutModel.SourceInfoModel.commentsection),
            new SqlParameter("@SPECIAL_COMMENTS", inpoutModel.SourceInfoModel.specialcomments),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }

        };

            string spQuery = StoreProcedureConstants.Sp_SavedestinationDescription + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @DES_ACCOUNT_ID , @CONNECTOR_ID,@ACCOUNT_DISPLAY_NAME, @WORKSPACE_NAME," +
                " @ENABLED_STATUS, @VISIBILITY_STATUS,@COMMENTS, " +
                "@SPECIAL_COMMENTS," +
                "  @V_MESSAGE OUTPUT";

            return _sourcedescription.ExecuteCommand(spQuery, parameters);


        }
        public async Task<string> SaveDBCredentials(SourceAccountConnectionModel inpoutModel)
        {

            object[] parameters = {

            new SqlParameter("@USER_ID",inpoutModel.UserId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.WorkspaceId),
            new SqlParameter("@CLIENT_ID", inpoutModel.ClientId),
            new SqlParameter("@CONNECTOR_ID", inpoutModel.Connector_ID),
            new SqlParameter("@DES_ACCOUNT_ID", inpoutModel.Account_Id),
            new SqlParameter("@FIELD_NAME", inpoutModel.HostName),
            new SqlParameter("@FIELD_VALUE",inpoutModel.FieldValue==null ? (object)DBNull.Value : inpoutModel.FieldValue),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }
           };

            string spQuery = StoreProcedureConstants.Sp_dESTINATIONACCOUNTCON + " @USER_ID,@WORKSPACE_ID,@CLIENT_ID, @CONNECTOR_ID," +
                " @DES_ACCOUNT_ID,@FIELD_NAME, @FIELD_VALUE," +
                 "  @V_MESSAGE OUTPUT";

            return _sourcedescription.ExecuteCommand(spQuery, parameters);


        }

    }
}
