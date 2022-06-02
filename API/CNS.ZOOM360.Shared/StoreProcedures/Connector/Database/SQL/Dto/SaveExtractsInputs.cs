using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto
{
    public class SaveExtractsInputs
    {
        public string UserId { get; set; }
        public string ACCOUNT_Id { get; set; }
        public string CONNECTORID { get; set; }
        public string Workspaceid { get; set; }
        public string Clientid { get; set; }
        public string DateLink { get; set; }
        public bool data_RAW_STATE { get; set; }
        public string extract_PROCESS_RUNNING { get; set; }
        public string data_COLLECTION { get; set; }
        public string FromandTo { get; set; }








        
    }
}
