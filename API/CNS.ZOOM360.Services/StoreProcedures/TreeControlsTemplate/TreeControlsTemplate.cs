using CNS.ZOOM360.Entities.StoreProcedures;
using CNS.ZOOM360.Entities.StoreProcedures.Common;
using CNS.ZOOM360.Entities.StoreProcedures.TreeControlTemplate;
using CNS.ZOOM360.Host;
using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.Repositories;
using CNS.ZOOM360.Shared.StoreProcedures.TreeControlsTemplate;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;

using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.TreeControlsTemplate
{
    public class TreeControlsTemplate : ITreeControlsTemplate
    {
        public IMongoDatabase _db { get; set; }
        private MongoClient _mongoClient { get; set; }
        public IClientSessionHandle Session { get; set; }
        private readonly IRepositoryBase<TreeControlModel> _TreeStructureSave;
        private readonly IRepositoryBase<TreeTemplateGrid> _TreeTemplateGrid;
        private readonly IRepositoryBase<TreeTemplateQueryModel> _TreeTemplateQuery;
        public TreeControlsTemplate(IOptions<Mongosettings> configuration, IRepositoryBase<TreeControlModel> treeStructureSave,
            IRepositoryBase<TreeTemplateGrid> TreeTemplateGrid,
               IRepositoryBase<TreeTemplateQueryModel> TreeTemplateQuery)
        {
            _mongoClient = new MongoClient(configuration.Value.ConnectionString);
            _db = _mongoClient.GetDatabase("ZMDB");
            _TreeStructureSave = treeStructureSave;
            _TreeTemplateGrid = TreeTemplateGrid;
            _TreeTemplateQuery = TreeTemplateQuery;
        }

        public string SaveTemplateControlsScript(TreeTemplateDto treeTemplateDto, string _id)
        {
            var collection = _db.GetCollection<TreeTemplateDto>("TreeTemplateScripts");
            var Filter = Builders<TreeTemplateDto>.Filter.Eq("scriptId", treeTemplateDto.scriptId)
                        & Builders<TreeTemplateDto>.Filter.Eq("Node_id", treeTemplateDto.Node_id);
            var replaceOptions = new ReplaceOptions() { IsUpsert = true };
            var result = collection.ReplaceOne(Filter, treeTemplateDto, replaceOptions).ToString();
            return "updated...";

            //var collectionn = _db.GetCollection<TreeTemplateDto>("TreeTemplateScripts");
            //await collectionn.InsertOneAsync(treeTemplateDto);
            //return "save to mongodb...";

        }
        public async Task<string> GetTemplateControlsScript(string userId, string workspaceId, string clientId, string nodeId, string scriptId)
        {
            var cars = _db.GetCollection<BsonDocument>("TreeTemplateScripts");
            var filter = Builders<BsonDocument>.Filter.Eq("userId", userId)
                & Builders<BsonDocument>.Filter.Eq("workspaceId", workspaceId)
                & Builders<BsonDocument>.Filter.Eq("clientId", clientId)
                & Builders<BsonDocument>.Filter.Eq("scriptId", scriptId)
                & Builders<BsonDocument>.Filter.Eq("Node_id", nodeId);
            //var doc = cars.Find(filter).Project<BsonDocument>("{_id: {$toString : '$_id' },userId:1,workspaceId:1,clientId:1,Node_id:1,Temp_Name:1,Temp_Enable:1,Template:1}")
            //   .FirstOrDefault().ToString();

            try
            {

                var doc = cars.Find(filter).Project<BsonDocument>("{_id: {$toString : '$_id' },Temp_Name:1,Temp_Enable:1,Template:1}")
                                 .FirstOrDefault().ToString();
                return doc;
            }
            catch (Exception e)
            {
                string doc = "error";
                return doc;
            }
        }
        public string SaveTreeStructure(TreeControlModel treeControlModel)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID", treeControlModel.userId),
            new SqlParameter("@WORKSPACE_ID", treeControlModel.workspaceId),
            new SqlParameter("@CLIENT_ID", treeControlModel.clientId),
            new SqlParameter("@MAINMENU_ID", string.IsNullOrEmpty(treeControlModel.mainMenuid) ? (object)DBNull.Value: treeControlModel.mainMenuid ),
            new SqlParameter("@SCRIPT_ID", string.IsNullOrEmpty(treeControlModel.subMenuId) ? (object)DBNull.Value: treeControlModel.subMenuId ),
            new SqlParameter("@SCRIPT_NAME", string.IsNullOrEmpty(treeControlModel.scriptName) ? (object)DBNull.Value : treeControlModel.scriptName),
            new SqlParameter("@SCRIPT_ENABLED", treeControlModel.scriptEnable),
            new SqlParameter("@NODE_ID", string.IsNullOrEmpty(treeControlModel.nodeId) ? (object)DBNull.Value: treeControlModel.nodeId ),
            new SqlParameter("@NODE_NAME", string.IsNullOrEmpty(treeControlModel.nodeName) ? (object)DBNull.Value: treeControlModel.nodeName),
            new SqlParameter("@PARENT_ID", string.IsNullOrEmpty(treeControlModel.parentId) ? (object)DBNull.Value: treeControlModel.parentId),
            new SqlParameter("@HAS_CHILD",  treeControlModel.hasChild ),
            new SqlParameter("@IS_EXPANDED",treeControlModel.isExpanded ),
            new SqlParameter("@NODE_DESCRIPTION", string.IsNullOrEmpty(treeControlModel.nodeName) ? (object)DBNull.Value: treeControlModel.nodeName ),
            new SqlParameter("@CLIENT_DATE",(object)DBNull.Value ),
            new SqlParameter("@CLIENT_TIME",(object)DBNull.Value),
            new SqlParameter("@CLIENT_TIME_ZONE",(object)DBNull.Value),
            new SqlParameter("@REMARKS_1",(object)DBNull.Value),
            new SqlParameter("@REMARKS_2",(object)DBNull.Value),
            new SqlParameter("@REMARKS_3",(object)DBNull.Value),
            new SqlParameter("@REMARKS_4",(object)DBNull.Value),
            new SqlParameter("@FLEX_1",string .IsNullOrEmpty(treeControlModel.fileName) ?(object)DBNull.Value:treeControlModel.fileName),
            new SqlParameter("@FLEX_2",(object)DBNull.Value),
            new SqlParameter("@FLEX_3",(object)DBNull.Value),
            new SqlParameter("@FLEX_4",(object)DBNull.Value),
            new SqlParameter("@FLEX_5",(object)DBNull.Value),
            new SqlParameter("@FLEX_6",(object)DBNull.Value),
            new SqlParameter("@FLEX_7",(object)DBNull.Value),
            new SqlParameter("@FLEX_8",(object)DBNull.Value),
            new SqlParameter("@FLEX_9",(object)DBNull.Value),
            new SqlParameter("@FLEX_10",(object)DBNull.Value),
            new SqlParameter("@FLEX_11",(object)DBNull.Value),
            new SqlParameter("@FLEX_12",(object)DBNull.Value),
            new SqlParameter("@FLEX_13",(object)DBNull.Value),
            new SqlParameter("@FLEX_14",(object)DBNull.Value),
            new SqlParameter("@FLEX_15",(object)DBNull.Value),
            new SqlParameter("@FLEX_16",(object)DBNull.Value),
            new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000,
            Value = ""
                }
        };
            string spQuery = StoreProcedureConstants.Sp_SaveTemplateData + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID," +
               " @MAINMENU_ID,@SCRIPT_ID, @SCRIPT_NAME, @SCRIPT_ENABLED, @NODE_ID, @NODE_NAME, @PARENT_ID, @HAS_CHILD, @IS_EXPANDED, @NODE_DESCRIPTION," +
               " @CLIENT_DATE,@CLIENT_TIME, @CLIENT_TIME_ZONE," +
               " @REMARKS_1, @REMARKS_2, @REMARKS_3, @REMARKS_4, @FLEX_1, @FLEX_2, @FLEX_3,@FLEX_4,@FLEX_5, @FLEX_6," +
               " @FLEX_7, @FLEX_8, @FLEX_9, @FLEX_10, @FLEX_11, @FLEX_12, @FLEX_13, @FLEX_14, @FLEX_15, @FLEX_16, @V_MESSAGE OUTPUT";
            return _TreeStructureSave.ExecuteCommand(spQuery, parameters);


            //var collectionn = _db.GetCollection<TreeTemplateDto>("TreeTemplateScripts");
            //await collectionn.InsertOneAsync(treeTemplateDto);
            //return "save to mongodb...";

        }
        public string SaveTemplateSubmenu(string userId, string workspaceId, string clientId, string mainMenuID, string templateName)
        {
            object[] parameters = {
            new SqlParameter("@USER_ID",  string.IsNullOrEmpty(userId) ? (object)DBNull.Value:userId),
            new SqlParameter("@WORKSPACE_ID", string.IsNullOrEmpty(workspaceId) ? (object)DBNull.Value:workspaceId),
            new SqlParameter("@CLIENT_ID",string.IsNullOrEmpty(clientId) ? (object)DBNull.Value:clientId),
            new SqlParameter("@MAINMENU_ID", string.IsNullOrEmpty(mainMenuID) ? (object)DBNull.Value: mainMenuID ),
            new SqlParameter("@SCRIPT_NAME", string.IsNullOrEmpty(templateName) ? (object)DBNull.Value : templateName),
            new SqlParameter{ ParameterName = "@V_MESSAGE",
            Direction = ParameterDirection.Output,
            SqlDbType = SqlDbType.NVarChar,
            Size = 4000,
            Value = ""
                }
        };
            string spQuery = StoreProcedureConstants.SaveTemplateSubmenu + " @USER_ID, @WORKSPACE_ID, @CLIENT_ID," +
               " @MAINMENU_ID, @SCRIPT_NAME, @V_MESSAGE OUTPUT";
            return _TreeStructureSave.ExecuteCommand(spQuery, parameters);
        }

        public async Task<List<TreeTemplateGrid>> GetTreeTemplateGrid(InputTreeTemplateGrid inputTreeTemplateGrid)
        {
            object[] parameters = {
                new SqlParameter("@USER_ID",inputTreeTemplateGrid.userId),
                new SqlParameter("@WORKSPACE_ID",inputTreeTemplateGrid.workspaceId),
                new SqlParameter("@CLIENT_ID",inputTreeTemplateGrid.clientId),
                new SqlParameter("@SOURCE_CONNECTOR_ID",string.IsNullOrEmpty(inputTreeTemplateGrid.soureceConnectorId) ? (object)DBNull.Value: inputTreeTemplateGrid.soureceConnectorId ),
                new SqlParameter("@SOURCE_ACCOUNT_ID",string.IsNullOrEmpty(inputTreeTemplateGrid.sourceAccountId) ? (object)DBNull.Value: inputTreeTemplateGrid.sourceAccountId),
                new SqlParameter("@TEMPLATE_NAME",string.IsNullOrEmpty(inputTreeTemplateGrid.templateName) ? (object)DBNull.Value: inputTreeTemplateGrid.templateName ),

                new SqlParameter("@V_MESSAGE",SqlDbType.NVarChar,4000){Direction = ParameterDirection.Output}
            };

            string spQuery = StoreProcedureConstants.Sp_GETTEMPLATELIST + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, @SOURCE_CONNECTOR_ID, @SOURCE_ACCOUNT_ID, @TEMPLATE_NAME, @V_MESSAGE OUTPUT";
            List<TreeTemplateGrid> treeTemplateList = _TreeTemplateGrid.ExecuteQuery(spQuery, parameters).ToList();
            return treeTemplateList;
        }


        public async Task<TimelineWidgetTableDataModel> GetTreeTemplateQueryData(TreeTemplateQueryDTOModel treeTemplateQueryDTOModel)
        {
            
            DbParameter[] parameters = {
                new SqlParameter("@USER_ID", treeTemplateQueryDTOModel.userId),
                new SqlParameter("@WORKSPACE_ID", treeTemplateQueryDTOModel.workspaceId),
                new SqlParameter("@CLIENT_ID", treeTemplateQueryDTOModel.clientId),
                new SqlParameter("@SCRIPT_ID", string.IsNullOrEmpty(treeTemplateQueryDTOModel.scriptId) ? (object)DBNull.Value : treeTemplateQueryDTOModel.scriptId),
                new SqlParameter("@NODE_ID", string.IsNullOrEmpty(treeTemplateQueryDTOModel.nodeId) ? (object)DBNull.Value : treeTemplateQueryDTOModel.nodeId),
                new SqlParameter("@V_MESSAGE", SqlDbType.NVarChar, 4000) { Direction = ParameterDirection.Output }
            };
            string spQuery = StoreProcedureConstants.Sp_GETTREETEMPLATEQUERYDATA + " @USER_ID,@WORKSPACE_ID, @CLIENT_ID, @SCRIPT_ID, @NODE_ID, @V_MESSAGE OUTPUT";
            List<TreeTemplateQueryModel> treeTemplatequery = _TreeTemplateQuery.ExecuteQuery(spQuery, parameters).ToList();
            DataTable result = await GetContentMappingTableData(treeTemplatequery[0]);
            TimelineWidgetTableDataModel TreeTemplateData = new TimelineWidgetTableDataModel();

          

            TreeTemplateData.gridValues = result;
            TreeTemplateData.gridColumnNames = (from dc in TreeTemplateData.gridValues.Columns.Cast<DataColumn>()
                                        select dc.ColumnName).ToArray();


            

           
            
            for (int i=0;i< TreeTemplateData.gridColumnNames.Length;i++)
            {
                string abc = TreeTemplateData.gridColumnNames[i];
                string abc1 = abc.Replace('_', ' ');
                TreeTemplateData.gridColumnNames[i] = abc1;
            }

            return TreeTemplateData;

         
        }


        public async Task<DataTable> GetContentMappingTableData(TreeTemplateQueryModel contentMapping)
        {
            DataTable dataTable = new DataTable();
            dataTable.Clear();
            DBConnectionCredentialModel sqlDbConnectionCredential = new DBConnectionCredentialModel();
            //string test =  "Server = 192.168.223.111; Database = ZMDB; Trusted_Connection = True; User Id = sa; Password = CNSE@12345; Integrated Security = false";
            sqlDbConnectionCredential.serverName = contentMapping.serverName;
            sqlDbConnectionCredential.DatabaseName = contentMapping.databaseName;
            sqlDbConnectionCredential.TrustedConnection = true;
            sqlDbConnectionCredential.userId = contentMapping.id;
            sqlDbConnectionCredential.password = contentMapping.password;
            sqlDbConnectionCredential.Integrated_Security = false;
            string connString = await SQLserverConnctionString(sqlDbConnectionCredential);

            string query = "select " + contentMapping.columnName + " from " + contentMapping.datatableName + "";
            try
            {
                SqlConnection conn = new SqlConnection(connString);
                SqlCommand cmd = new SqlCommand(query, conn);
                conn.Open();

                // create data adapter
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                // this will query your database and return the result to your datatable
                da.Fill(dataTable);
                conn.Close();
                da.Dispose();

            }
            catch (Exception e)
            {
                //   _logger.LogInfo("SQL Helper class " + e.Message);
                dataTable.Clear();
            }
            return dataTable;
        }



        private async Task<string> SQLserverConnctionString(DBConnectionCredentialModel sqlConnectionCredential)
        {

            string treeTemplatequery = "";
            if (sqlConnectionCredential.Integrated_Security)
            {
                return treeTemplatequery = @"Server = " + sqlConnectionCredential.serverName + "; Database =" + sqlConnectionCredential.DatabaseName + "; Trusted_Connection = " + sqlConnectionCredential.TrustedConnection +
                 "; Integrated Security = " + sqlConnectionCredential.Integrated_Security + "";
            }
            else
            {
                return treeTemplatequery = @"Server = " + sqlConnectionCredential.serverName + "; Database =" + sqlConnectionCredential.DatabaseName + "; Trusted_Connection = " + sqlConnectionCredential.TrustedConnection +
                 "; User Id = " + sqlConnectionCredential.userId + "; Password =" + sqlConnectionCredential.password + "; Integrated Security = " + sqlConnectionCredential.Integrated_Security + "";
            }
        }

  
    }
   
}




