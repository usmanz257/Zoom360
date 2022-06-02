using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CNS.ZOOM360.Entities.StoreProcedures.Connectors.Databases.SQL;
using CNS.ZOOM360.Entities.StoreProcedures.sourceDescriptionAndConfiguration;
using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;


namespace CNS.ZOOM360.Shared.StoreProcedures.SourceDescriptionAndConfiguration
{
   public  interface ISourceDescriptionAndConfiguration
    {
        
          Task <string> SaveSourceDescriptionAndConfiguration(sourceCommonModel InputModel);
          Task<string> SaveDBCredentials(SourceAccountConnectionModel InputModel);
          Task<string> SaveFileInfo(SourceAccountConnectionModel InputModel);
          Task<string> SaveSocialMediaInfo(SocialMediaModel InputModel);

    }
}
