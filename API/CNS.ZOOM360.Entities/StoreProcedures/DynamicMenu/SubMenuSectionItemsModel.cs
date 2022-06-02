using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicMenu
{
    public class SubMenuSectionItemsModel
    {
        [Column("SUB_MENU_ID")]
        public string subMenuId { get; set; }
        [Column("SUB_MENU_NAME")]
        public string subMenuName { get; set; }
        [Column("URL")]
        public string url { get; set; }
    }
}
