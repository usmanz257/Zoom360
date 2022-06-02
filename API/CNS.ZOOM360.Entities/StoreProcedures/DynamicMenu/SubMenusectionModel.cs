using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicMenu
{
    public class SubMenusectionModel
    {
        [Column("MENU_ID")]
        public string SectionId { get; set; }
        [Column("MENU_NAME")]
        public string SectionName { get; set; }
        [NotMapped]
        public List<SubMenuSectionItemsModel> SubmenuSectionitems { get; set; }
    }
}
