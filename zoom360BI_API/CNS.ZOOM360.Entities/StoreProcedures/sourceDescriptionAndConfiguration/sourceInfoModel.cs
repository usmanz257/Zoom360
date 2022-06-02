using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.SourceDescriptionAndConfiguration 
{
   public class sourceInfoModel
    {
        public string accountName { get; set; }
        public bool enableConnectoin { get; set; }
        public string workspace { get; set; }
        public string email { get; set; }
        public string accountAuthurization { get; set; }
        public bool visibilitymode { get; set; }
        public string commentsection { get; set; }
        public string specialcomments { get; set; }



    }
}
