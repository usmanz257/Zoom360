using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
   public class InsertionOptionModel
    {

        public string User_id { get; set; }
        public string Client_id { get; set; }
        public string workspace_id { get; set; }
        public string sourcetablename { get; set; }
        public string destinationtablename { get; set; }
        public string sourcefieldname { get; set; }
        public string desfieldname { get; set; }
        public string Action { get; set; }
        public string destinationtable { get; set; }
        public string Lookupid { get; set; }
         

    }
}
