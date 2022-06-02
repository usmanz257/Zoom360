using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.SourceEdit
{
    public class SaveSourceFieldMappingRuleTemplateModel
    {
        public string userId { get; set; }
        public string workspaceId { get; set; }
        public string clientId { get; set; }
        public string connectorId { get; set; }
        //public string accountId { get; set; }
        public string templateName { get; set; }
        public string sourceColumn { get; set; }
        public string? targetColumn { get; set; }
        public bool keyColumn { get; set; }
        public string? aggregationStatus { get; set; }  
        public string? visibilityStatus { get; set; }
        public string? image { get; set; }
    }
}
