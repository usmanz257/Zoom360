using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Prepare.Dto
{
    public class SaveDataLabelingInputModel
    {
    public string UserId { get; set; }
        public string Workspaceid { get; set; }
        public string ClientId { get; set; }
        public string ClientDate { get; set; }
        public string  ClientTime { get; set; }
        public string ClientTimeZone { get; set; }
        public DatalabelingList[] DatalabelingList { get; set; }
    }
    public class DatalabelingList
    {
    public string functionName { get; set; }
    public string functionParameter { get; set; }
    public string parameterValue { get; set; }  
    }
}
