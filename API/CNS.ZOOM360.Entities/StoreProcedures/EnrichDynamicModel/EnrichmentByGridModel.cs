using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.EnrichDynamicModel
{
   public class EnrichmentByGridModel
    {
        [BsonElement("userId")]
         public string userId { get; set; }

        [BsonElement("clientId")]
        public string clientId { get; set; }
        [BsonElement("workspaceId")]
        public string workspaceId { get; set; }
        [BsonElement("scriptname")]
        public string scriptname { get; set; }
        [BsonElement("enableScript")]
        public bool enableScript { get; set; }

        [BsonElement("tableName")]
        public string tableName { get; set; }
        [BsonElement("functionCategory")]
        public string functionCategory { get; set; }

        [BsonElement("ScriptList")]
        public EnrichGridScriptModel[] ScriptList { get; set; }
        [BsonElement("GridColumnAll")]
        
         public FunctionGridFormat[] GridColumnAll { get; set; }
        [BsonElement("GridFunctionAll")]
        public FunctionGridFormat[] GridFunctionAll { get; set; }
        [BsonElement("GridState")]
        public FunctionGridFormat[][] GridState { get; set; }
        [BsonElement("UpdatedOn")]
        public DateTime UpdatedOn { get; set; }
        [BsonElement("CreatedOn")]
        public DateTime CreatedOn { get; set; }  
        [BsonElement("IsDeleted")]
        public bool IsDeleted { get; set; }
    }
    public class EnrichGridScriptModel
    {
        [BsonElement("functionName")]
        public string functionName { get; set; }

        [BsonElement("cols")]
        public string[] cols { get; set; }
    }
    public class FunctionGridFormat
    {
        [BsonElement("checkboxToggle")]
        public bool checkboxToggle { get; set; }
    }
}
