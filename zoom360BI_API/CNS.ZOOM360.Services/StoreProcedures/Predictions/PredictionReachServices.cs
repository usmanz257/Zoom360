using CNS.ZOOM360.Entities.StoreProcedures.Predictions;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.Predictions;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.Predictions
{
    public class PredictionReachServices : IPredictionReachServices
    {
        private readonly IRepositoryBase<PredictionReachModel> _PredictionReachRepositry;
        private readonly IRepositoryBase<SavePredictionModel> _predictionReachRepositrySave;
        private readonly IRepositoryBase<ProductionProcessModel> _ProductionProcessRepositry;
        public PredictionReachServices(IRepositoryBase<PredictionReachModel> PredictionReachRepositry,
            IRepositoryBase<SavePredictionModel> predictionReachRepositrySave,
            IRepositoryBase<ProductionProcessModel> ProductionProcessRepositry)
        {
            _PredictionReachRepositry = PredictionReachRepositry;
            _predictionReachRepositrySave = predictionReachRepositrySave;
            _ProductionProcessRepositry = ProductionProcessRepositry;
        }

        public List<PredictionReachModel> GetPredictionReachData(string UserID, string WorkspaceId, string ClientId)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",UserID),
                new SqlParameter("@WORKSPACE_ID",WorkspaceId),
                new SqlParameter("@CLIENT_ID",ClientId),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GETPREDICTIONREACH + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID," +
                 " @V_MESSAGE OUTPUT";
            List<PredictionReachModel> AiInsightGraphData = _PredictionReachRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return AiInsightGraphData;
        }

        public List<ProductionProcessModel> GetProductionProcess(string UserID, string WorkspaceId, string ClientId, string ProdctionProcess)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",UserID),
                new SqlParameter("@WORKSPACE_ID",WorkspaceId),
                new SqlParameter("@CLIENT_ID",ClientId),
                new SqlParameter("@PRODUCTION_PROCESS",ProdctionProcess),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GETPRODUCTIONPROCESS + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, @PRODUCTION_PROCESS," +
                 " @V_MESSAGE OUTPUT";
            List<ProductionProcessModel> productionProcessData = _ProductionProcessRepositry.ExecuteQuery(spQuery, parameters).ToList();

            return productionProcessData;
        }

        public async Task<string> SavePredictionSetup(SavePredictionModel input)
        {

            object[] parameters = {
                new SqlParameter("@USER_ID", input.userID),
                new SqlParameter("@WORKSPACE_ID", input.workspaceID),
                new SqlParameter("@CLIENT_ID", input.clientId),
                new SqlParameter("@SCRIPT_NAME", string.IsNullOrEmpty(input.scriptName) ? (object)DBNull.Value:input.scriptName),
                new SqlParameter("@AMOUNT_SPENT_USD", string.IsNullOrEmpty(input.AmountSpentUSD) ? (object)DBNull.Value:input.AmountSpentUSD),
                new SqlParameter("@RESULTS", string.IsNullOrEmpty(input.results) ? (object)DBNull.Value:input.results),
                new SqlParameter("@IMPRESSIONS", string.IsNullOrEmpty(input.impressions) ? (object)DBNull.Value:input.impressions),
                new SqlParameter("@PURCHASES_CONVERSION_VALUE_USD", string.IsNullOrEmpty(input.purchaseConversionValueUSD) ? (object)DBNull.Value:input.purchaseConversionValueUSD),
                new SqlParameter("@REACH", string.IsNullOrEmpty(input.reach) ? (object)DBNull.Value:input.reach),
                new SqlParameter("@RESULT_TYPE_CODE",string.IsNullOrEmpty(input.resultTypeCode) ? (object)DBNull.Value: input.resultTypeCode),
                new SqlParameter("@PURCHASE_ROAS_RETURN_ON_AD_SPEND",string.IsNullOrEmpty(input.purchaseROASReturnonAdSpend) ? (object)DBNull.Value: input.purchaseROASReturnonAdSpend),
                new SqlParameter("@COST_PER_RESULT_USD",string.IsNullOrEmpty(input.costPerResultUSD) ? (object)DBNull.Value: input.costPerResultUSD),
                new SqlParameter("@STATUS",string.IsNullOrEmpty(input.Status) ? (object)DBNull.Value: input.Status),
                new SqlParameter("@PREDICTED_RESULTS",string.IsNullOrEmpty(input.PredictedResult) ? (object)DBNull.Value: input.PredictedResult),
                new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000,
            Value = ""
                }
        };
            string spQuery = StoreProcedureConstants.Sp_SavePrediction + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, o @SCRIPT_NAME,@AMOUNT_SPENT_USD, @RESULTS, @IMPRESSIONS, @PURCHASES_CONVERSION_VALUE_USD, @REACH, @RESULT_TYPE_CODE " +
                ", @PURCHASE_ROAS_RETURN_ON_AD_SPEND, @COST_PER_RESULT_USD, @STATUS, @PREDICTED_RESULTS," +
                " @V_MESSAGE OUTPUT";
            return _predictionReachRepositrySave.ExecuteCommand(spQuery, parameters);

        }
    }
}
