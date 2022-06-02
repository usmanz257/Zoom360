using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.SourceDescriptionAndConfiguration;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using CNS.ZOOM360.Shared.Const;
using System.Data;
using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.sourceDescriptionAndConfiguration;

namespace CNS.ZOOM360.Services.StoreProcedures.SourceConnectorDescAndConfigure
{
   public  class sourceDescriptionAndConfigurationService: ISourceDescriptionAndConfiguration
    {
        private readonly IRepositoryBase<sourceCommonModel> _sourcedescription;

        public sourceDescriptionAndConfigurationService(IRepositoryBase<sourceCommonModel> sourceRepository)
        {
            _sourcedescription = sourceRepository;
             
        }
        public async Task<string> SaveSourceDescriptionAndConfiguration(sourceCommonModel inpoutModel)
        {

            object[] parameters = {

            new SqlParameter("@USER_ID",inpoutModel.userId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.workspaceId),
            new SqlParameter("@CLIENT_ID", inpoutModel.clientId),
            new SqlParameter("@ACCOUNT_ID", inpoutModel.AccountId),
            new SqlParameter("@CONNECTOR_ID", inpoutModel.connectorId),
            new SqlParameter("@ACCOUNT_DISPLAY_NAME", inpoutModel.SourceInfoModel.accountName),
            new SqlParameter("@WORKSPACE_NAME", inpoutModel.SourceInfoModel.workspace),
            new SqlParameter("@ENABLED_STATUS", inpoutModel.SourceInfoModel.enableConnectoin),
            new SqlParameter("@VISIBILITY_STATUS", inpoutModel.SourceInfoModel.visibilitymode),
            new SqlParameter("@COMMENTS", inpoutModel.SourceInfoModel.commentsection),
            new SqlParameter("@SPECIAL_COMMENTS", inpoutModel.SourceInfoModel.specialcomments),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }

        };

            string spQuery = StoreProcedureConstants.Sp_SaveSourceCounfiguration + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                " @ACCOUNT_ID, @CONNECTOR_ID,@ACCOUNT_DISPLAY_NAME, @WORKSPACE_NAME," +
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
            new SqlParameter("@CONNECTOR_ID", inpoutModel.ClientId),
            new SqlParameter("@CLIENT_ID", inpoutModel.Account_Id),
            new SqlParameter("@ACCOUNT_ID", inpoutModel.Connector_ID),
            new SqlParameter("@FIELD_NAME", inpoutModel.HostName),
            new SqlParameter("@FIELD_VALUE",inpoutModel.FieldValue==null ? (object)DBNull.Value : inpoutModel.FieldValue),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }
           };
           
            string spQuery = StoreProcedureConstants.Sp_SavedbCredential + " @USER_ID,@WORKSPACE_ID, @CONNECTOR_ID," +
                " @CLIENT_ID, @ACCOUNT_ID,@FIELD_NAME, @FIELD_VALUE," +
                 "  @V_MESSAGE OUTPUT";

            return _sourcedescription.ExecuteCommand(spQuery, parameters);


        }
        
         public async Task<string> SaveFileInfo(SourceAccountConnectionModel inpoutModel)
        {

            object[] parameters = {

            new SqlParameter("@USER_ID",inpoutModel.UserId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.WorkspaceId),
            new SqlParameter("@CONNECTOR_ID", inpoutModel.ClientId),
            new SqlParameter("@CLIENT_ID", inpoutModel.Account_Id),
            new SqlParameter("@ACCOUNT_ID", inpoutModel.Connector_ID),
            new SqlParameter("@FIELD_NAME", inpoutModel.HostName),
            new SqlParameter("@FIELD_VALUE",inpoutModel.FieldValue),
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }
           };

            string spQuery = StoreProcedureConstants.Sp_Savefile + " @USER_ID,@WORKSPACE_ID, @CONNECTOR_ID," +
                " @CLIENT_ID, @ACCOUNT_ID,@FIELD_NAME, @FIELD_VALUE," +
                "  @V_MESSAGE OUTPUT";

            return _sourcedescription.ExecuteCommand(spQuery, parameters);


        }
        public async Task<string> SaveSocialMediaInfo(SocialMediaModel inpoutModel)
        {

            object[] parameters = {

            new SqlParameter("@USER_ID",inpoutModel.SourceCommonModel.userId),
            new SqlParameter("@WORKSPACE_ID", inpoutModel.SourceCommonModel.workspaceId),
            new SqlParameter("@CONNECTOR_ID", inpoutModel.SourceCommonModel.connectorId),
            new SqlParameter("@CLIENT_ID", inpoutModel.SourceCommonModel.clientId),
            new SqlParameter("@ACCOUNT_ID", inpoutModel.SourceCommonModel.AccountId),
            new SqlParameter("@ACCOUNT_AUTHORIZATION",inpoutModel.AccountAuthurization),
            new SqlParameter("@EMAIL_ID", inpoutModel.Email),
             
            new SqlParameter("@EMAIL_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output },
            new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000){Direction = ParameterDirection.Output }
           };

            string spQuery = StoreProcedureConstants.Sp_SaveSocialMedia + " @USER_ID,@WORKSPACE_ID, @CONNECTOR_ID," +
                " @CLIENT_ID, @ACCOUNT_ID,@ACCOUNT_AUTHORIZATION, @EMAIL_ID," +
                " @EMAIL_MESSAGE, @V_MESSAGE OUTPUT";

            return _sourcedescription.ExecuteCommand(spQuery, parameters);


        }
    }
}
