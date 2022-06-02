using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
namespace CNS.ZOOM360.Entities.StoreProcedures.UserTemplateInfo
{
  public  class UserTemplateInfoModel
    {
        [NotMapped]
        public string userId { get; set; }
        [NotMapped]
        public string workSpaceId { get; set; }
        [NotMapped]
        public string CLIENT_ID { get; set; }

        [Column("FOLLOWING_COUNT")]
        public string followingCount { get; set; }
        [Column("STREAMS")]
        public string streams { get; set; }
        [Column("FAVOURITE")]
        public string favourite { get; set; }
    }
}
