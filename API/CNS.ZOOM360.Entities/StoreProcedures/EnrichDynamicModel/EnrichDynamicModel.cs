//using MongoDB.Bson;
//using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.EnrichDynamicModel
{
    public class EnrichDynamicModel
    {
      //  [BsonId]
     //   public ObjectId Id { get; set; }
    //    [BsonElement("user_id")]
        public string userId { get; set; }
        [BsonElement("workspaceId")]
        public string workspaceId { get; set; }
        [BsonElement("clientId")]
        public string clientId { get; set; }
        [BsonElement("scriptname")]
        public string scriptname { get; set; }
        [BsonElement("enableScript")]
        public bool enableScript { get; set; }
        [BsonElement("ScriptList")]
        public mongoscripttemplate[] ScriptList { get; set; }
      //  public List<mongoscripttemplate> scripttemplate = new List<mongoscripttemplate>();
        
    }
    public class mongoscripttemplate
    {
        //     [BsonElement("id")]
        // public bool id { get; set; }
        [BsonElement("scriptDisplayName")]
        public string scriptDisplayName { get; set; }
        [BsonElement("enableIndividualScript")]
        public bool enableIndividualScript { get; set; }
        [BsonElement("functionName")]
        public string functionName { get; set; }
         [BsonElement("cols")]
        public string[] cols { get; set; }
        [BsonElement("create_col")]
        public bool create_col { get; set; }
        [BsonElement("new_column_name")]
        public string new_column_name { get; set; }
        [BsonElement("save_previous_changes")]
        public bool save_previous_changes { get; set; }
        [BsonElement("tablename")]
        public string tablename { get; set; }
        [BsonElement("currency_col")]
        public string currency_col { get; set; }
        [BsonElement("mode")]
        public string mode { get; set; }
        [BsonElement("rule")]
        public string rule { get; set; }
        [BsonElement("ref_string")]
        public string ref_string { get; set; }
        [BsonElement("separator")]
        public string separator { get; set; }
        [BsonElement("delimiter")]
        public string delimiter { get; set; }
        [BsonElement("source")]
        public string source { get; set; }
        [BsonElement("target")]
        public string target { get; set; }
        [BsonElement("replacement_dict")]
        public string replacement_dict { get; set; }
        [BsonElement("sign")]
        public string sign { get; set; }
        [BsonElement("value")]
        public string value { get; set; }
        [BsonElement("substring")]
        public string substring { get; set; }
        [BsonElement("start_date")]
        public string start_date { get; set; }
        [BsonElement("end_date")]
        public string end_date { get; set; }
        [BsonElement("dataFrame")]
        public string dataFrame { get; set; }
        [BsonElement("scriptLanguage")]
        public string scriptLanguage { get; set; }
        [BsonElement("scriptText")]
        public string scriptText { get; set; }

    }
}
