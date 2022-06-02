using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.sourceDescriptionAndConfiguration
{
    public  class DBCredentialSourceDescriptonAndConfigModel
    {

        public sourceCommonModel SourceCommonModel { get; set; }
        public SOURCE_CNF sOURCE_CNF { get; set; }
    }
}
