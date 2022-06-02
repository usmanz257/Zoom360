using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.SourceDestination
{
   public  interface IDestination
    {
       Task<string> SavedestinationDescription(sourceCommonModel InputModel);
       Task<string> SaveDBCredentials(SourceAccountConnectionModel InputModel);
    }
}
