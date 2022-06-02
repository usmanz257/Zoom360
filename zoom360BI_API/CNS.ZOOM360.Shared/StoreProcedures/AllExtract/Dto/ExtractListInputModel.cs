using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.AllExtract.Dto
{
    public class ExtractListInputModel
    {
        public string UserId { get; set; }
        public string WorkSpaceId { get; set; }
        public string Client_Id { get; set; }
        public string AccountId { get; set; }
        public string WorkspaceName { get; set; }
        public string ConnectionName { get; set; }
        public string SourceName { get; set; }
        public string AccessGranted { get; set; }
        public string CreatedBy { get; set; }
        public string IsActive { get; set; }
        public string DestinationEnabled { get; set; }
        public string LastAccessed { get; set; }

    }
}
