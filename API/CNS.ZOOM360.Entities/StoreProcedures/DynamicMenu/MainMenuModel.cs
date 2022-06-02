using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DynamicMenu
{
    public class MainMenuModel
    {
      
        [Column("MAIN_MENU_ID")]
        public string MainManuId { get; set; }
        
        [Column("MAIN_MENU_NAME")]
       
        public string MainMenuName { get; set; }
        
        [Column("MODE_ID")]
        public string ModeId { get; set; }
        
        [Column("URL")]
        public string url { get; set; }
    }
}
