using CNS.ZOOM360.Entities.StoreProcedures.EnrichDynamicModel;
using CNS.ZOOM360.Host;
using CNS.ZOOM360.Shared.StoreProcedures.EnrichDynamivMetadata;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Services.StoreProcedures.enrichDynamicMetadata
{
    public class EnrichDynamicMetadata : IEnrichDynamicMetadata
    {
        public IMongoDatabase _db { get; set; }
        private MongoClient _mongoClient { get; set; }
        public IClientSessionHandle Session { get; set; }

        public EnrichDynamicMetadata(IOptions<Mongosettings> configuration)
        {
            _mongoClient = new MongoClient(configuration.Value.ConnectionString);
            _db = _mongoClient.GetDatabase("ZMDB");

        }
        public string GetEnrichScript(string userId, string workspaceId, string clientId, string _id)
        {
            var cars = _db.GetCollection<BsonDocument>("EnrichScripts");
            var filter = Builders<BsonDocument>.Filter.Eq("userId", userId)
                & Builders<BsonDocument>.Filter.Eq("workspaceId", workspaceId)
                & Builders<BsonDocument>.Filter.Eq("clientId", clientId)
                & Builders<BsonDocument>.Filter.Eq("_id", ObjectId.Parse(_id));
            var doc = cars.Find(filter).Project<BsonDocument>("{_id: {$toString : '$_id' },userId:1,workspaceId:1,clientId:1,scriptname:1,enableScript:1,ScriptList:1}")
                .FirstOrDefault().ToString();
            return doc;
        }
        public async Task<string> SaveEnrichScript(EnrichDynamicModel collection)

        {
            var collectionn = _db.GetCollection<EnrichDynamicModel>("EnrichScripts");

            await collectionn.InsertOneAsync(collection);
            return "save to mongodb...";
          
        }
        public string UpdateEnrichScript(EnrichDynamicModel coll, string _id)
        {
            var collection = _db.GetCollection<EnrichDynamicModel>("EnrichScripts");
            var Filter = Builders<EnrichDynamicModel>.Filter.Eq("_id", ObjectId.Parse(_id));
            var result = collection.ReplaceOne(Filter, coll).ToString();
            return "updated...";
        }
        //Enrichment by using grid
        public async Task<string> SaveEnrichScriptUsingGrid(EnrichmentByGridModel collection)

        {
            var collectionn = _db.GetCollection<EnrichmentByGridModel>("EnrichScriptsbyGrid");
            await collectionn.InsertOneAsync(collection);
            return "save to mongodb...";

        }
        public string GetEnrichScriptForGrid(string userId, string workspaceId, string clientId, string _id)
        {
            var cars = _db.GetCollection<BsonDocument>("EnrichScriptsbyGrid");
            var filter = Builders<BsonDocument>.Filter.Eq("userId", userId)
                & Builders<BsonDocument>.Filter.Eq("workspaceId", workspaceId)
                & Builders<BsonDocument>.Filter.Eq("clientId", clientId)
                & Builders<BsonDocument>.Filter.Eq("_id", ObjectId.Parse(_id));
            var doc = cars.Find(filter).Project<BsonDocument>("{_id:0,userId:1,workspaceId:1,clientId:1,scriptname:1,enableScript:1,tableName:1,ScriptList:1,GridState:1,GridColumnAll:1,GridFunctionAll:1}")
                .FirstOrDefault().ToString();

            return doc;
        }
        public string UpdateEnrichScriptForGrid(EnrichmentByGridModel coll, string _id)
        {
            var collection = _db.GetCollection<EnrichmentByGridModel>("EnrichScriptsbyGrid");
            var Filter = Builders<EnrichmentByGridModel>.Filter.Eq("_id", ObjectId.Parse(_id));
            var result = collection.ReplaceOne(Filter, coll).ToString();
            return "updated...";
        }
        //Enrichment by using grid2
        public async Task<string> SaveEnrichScriptUsingGrid2(EnrichmentByGridModel collection)

        {
            var collectionn = _db.GetCollection<EnrichmentByGridModel>("EnrichScriptsbyGrid2");
            await collectionn.InsertOneAsync(collection);
            return "save to mongodb...";

        }
        public string GetEnrichScriptForGrid2(string userId, string workspaceId, string clientId, string _id)
        {
            var cars = _db.GetCollection<BsonDocument>("EnrichScriptsbyGrid2");
            var filter = Builders<BsonDocument>.Filter.Eq("userId", userId)
                & Builders<BsonDocument>.Filter.Eq("workspaceId", workspaceId)
                & Builders<BsonDocument>.Filter.Eq("clientId", clientId)
                & Builders<BsonDocument>.Filter.Eq("_id", ObjectId.Parse(_id));
            var doc = cars.Find(filter).Project<BsonDocument>("{_id:0,userId:1,workspaceId:1,clientId:1,scriptname:1,enableScript:1,tableName:1,functionCategory:1,ScriptList:1,GridState:1,GridColumnAll:1,GridFunctionAll:1}")
                .FirstOrDefault().ToString();

            return doc;
        }
        public string UpdateEnrichScriptForGrid2(EnrichmentByGridModel coll, string _id)
        {
            var collection = _db.GetCollection<EnrichmentByGridModel>("EnrichScriptsbyGrid2");
            var Filter = Builders<EnrichmentByGridModel>.Filter.Eq("_id", ObjectId.Parse(_id));
            var result = collection.ReplaceOne(Filter, coll).ToString();
            return "updated...";
        }


        public string getFunctionTemplate()

        {
            var fieldsBuilder = Builders<BsonDocument>.Projection;
            var fields = fieldsBuilder.Exclude("_id");
            var cars = _db.GetCollection<BsonDocument>("EnrichDynamicScriptMetadata");
            var documents = cars.Find(new BsonDocument()).Project<BsonDocument>(fields).ToList().ToJson();
            return documents;
            //var cars = _db.GetCollection<BsonDocument>("enrichDynamicMetadata");
            //var documents = cars.Find(new BsonDocument()).ToList().ToJson();
            // var result = JsonConvert.SerializeObject(documents);
            //return documents;
        }
        public string WriteArray(object[] arr)
        {
            List<string> doc = new List<string>();
            for (int i = 0; i < arr.Length; i++)
            {
                doc.Add(arr[i].ToString());
                var document = BsonSerializer.Deserialize<BsonDocument>(doc[i]);
                var collectionn = _db.GetCollection<BsonDocument>("test_arraystore");
                collectionn.InsertOneAsync(document);
            };
            return "Store to mongoDB complete...";
        }
        
    }
}
