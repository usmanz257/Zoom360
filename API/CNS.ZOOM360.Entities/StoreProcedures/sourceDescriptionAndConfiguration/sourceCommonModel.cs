using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration
{
   public  class sourceCommonModel
    {
        public string userId { get; set; }
        public string workspaceId { get; set; }
        public string clientId { get; set; }
        public string AccountId { get; set; }
        public string connectorId { get; set; }
        public sourceInfoModel SourceInfoModel { get; set; }
    }
}
