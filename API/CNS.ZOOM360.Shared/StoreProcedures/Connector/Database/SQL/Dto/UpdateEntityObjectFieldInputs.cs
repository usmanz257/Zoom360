using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Shared.StoreProcedures.Connector.Database.SQL.Dto
{
    public class UpdateEntityObjectFieldInputs
    {
        public string OBJECT_FIELD_ID { get; set; }
        public string OBJECT_FIELD_NAME { get; set; }
        public string OBJECT_FIELD_TYPE { get; set; }
        public string DISPLAY_NAME { get; set; }
        public string AGGREGATION_STATUS { get; set; }
        public string ISKEY_STATUS { get; set; }
        public string VISIBILITY_STATUS { get; set; }
        public string OBJECT_FIELD_IMAGE { get; set; }

    }
}
