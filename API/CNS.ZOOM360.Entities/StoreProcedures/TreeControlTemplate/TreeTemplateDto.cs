using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.TreeControlTemplate
{
    public class TreeTemplateDto
    {
        [BsonElement("userId")]
        public string userId { get; set; }
        [BsonElement("workspaceId")]
        public string workspaceId { get; set; }
        [BsonElement("clientId")]
        public string clientId { get; set; }
        [BsonElement("Node_id")]
        public string Node_id { get; set; }
        //[BsonElement("subMenuId")]
        //public string subMenuId { get; set; }

        [BsonElement("scriptId")]
        public string scriptId { get; set; }
        [BsonElement("Temp_Name")] 
        public string Temp_Name { get; set; }
        [BsonElement("Temp_Enable")]
        public bool Temp_Enable { get; set; }
        [BsonElement("Template")]
        public TreeTemplateList[] Template { get; set; }
    }
   
    
    public class TreeTemplateList
    {
        [BsonElement("Properties")]
        public TreeTemplatePropertiesDto Properties { get; set; }
        [BsonElement("Data")]
        public TreeTemplateDataDto Data { get; set; }
        [BsonElement("Validation")]
        public TreeTemplateValidationDto Validation { get; set; }
    }
    public class TreeTemplatePropertiesDto
    {
        [BsonElement("Display_Name")]
        public string Display_Name { get; set; }
        [BsonElement("Control_Type")]
        public string Control_Type { get; set; }
        [BsonElement("Control_Value")]
        public dynamic Control_Value { get; set; }
        [BsonElement("Checkbox_Control_Value")]
        public bool Checkbox_Control_Value { get; set; }
        [BsonElement("ToolTip")]
        public string ToolTip { get; set; }
        [BsonElement("Help_Icon")]
        public bool Help_Icon { get; set; }
        [BsonElement("Help_Text")]
        public string Help_Text { get; set; }
        [BsonElement("Visible")]
        public bool Visible { get; set; }
        [BsonElement("Background_Color")]
        public string Background_Color { get; set; }
        [BsonElement("Optional")]
        public string Optional { get; set; }
    }
    public class TreeTemplateDataDto
    {
        [BsonElement("Input_Source")]
        public string Input_Source { get; set; }
        [BsonElement("Source_Type")]
        public string Source_Type { get; set; }
    }
    public class TreeTemplateValidationDto
    {
        [BsonElement("condition1")]
        public string condition1 { get; set; }
    }
    public class TreeTemplateGrid
    {
        [Column("SCRIPT_ID")]
        public string scriptId { get; set; }

        [Column("SCRIPT_NAME")]
        public string scriptName { get; set; }
        [Column("FILE_NAME")]
        public string fileName { get; set; }
        [Column("ACTIVE")]
        public bool active { get; set; }
    }

    public class InputTreeTemplateGrid
    {
        public string userId { get; set; }
        public string workspaceId { get; set; }
        public string clientId { get; set; }
        public string soureceConnectorId { get; set; }
        public string sourceAccountId { get; set; }
        public string templateName { get; set; }

    }
    public class DBConnectionCredentialModel
    {
        public string serverName { get; set; }
        public string DatabaseName { get; set; }
        public bool TrustedConnection { get; set; }
        public string userId { get; set; }
        public string password { get; set; }
        public bool Integrated_Security { get; set; }
    }

    public class TreeTemplateQueryModel
    {
        [Column("SCRIPT_ID")]
        public string scriptId { get; set; }

        [Column("NODE_ID")]
        public string nodeId { get; set; }

        [Column("SERVER_NAME")]
        public string serverName { get; set; }

        [Column("DATABASE_NAME")]
        public string databaseName { get; set; }

        [Column("TRUSTED_CONNECTION")]
        public string trustedConnection { get; set; }

        [Column("ID")]
        public string id { get; set; }

        [Column("PASSWORD")]
        public string password { get; set; }

        [Column("SECURITY")]
        public string security { get; set; }

        [Column("DATA_TABLE_NAME")]
        public string datatableName { get; set; }

        [Column("COLUMN_NAMES")]
        public string columnName { get; set; }

        [Column("DATABASE_TYPE")]
        public string databaseType { get; set; }

        [Column("PORT_NUMBER")]
        public string portNumber { get; set; }
    }
    public class TreeTemplateQueryDTOModel
    {
        public string userId { get; set; }
        public string workspaceId { get; set; }
        public string clientId { get; set; }
        public string scriptId { get; set; }
        public string nodeId { get; set; }
    }
}
