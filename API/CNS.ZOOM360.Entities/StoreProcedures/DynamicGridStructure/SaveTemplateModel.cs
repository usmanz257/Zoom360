using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicGridStructure
{
   public class SaveTemplateModel
    {
        public string userId { get; set; }
        public string subUserId { get; set; }
        public string workSpaceId { get; set; }
        public string clientId { get; set; }
        public string parentId { get; set; }
        public string? templateId { get; set; }
        public string childName { get; set; }
        public List<TemplateModel> template { get; set; }
    }
}
