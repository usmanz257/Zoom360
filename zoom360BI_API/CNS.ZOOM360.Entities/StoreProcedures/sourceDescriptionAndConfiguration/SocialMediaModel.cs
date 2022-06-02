using CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.sourceDescriptionAndConfiguration
{
    public class SocialMediaModel
    {
        public string Email { get; set; }
        public string AccountAuthurization { get; set; }

        public sourceCommonModel SourceCommonModel { get; set; }
    }
}
