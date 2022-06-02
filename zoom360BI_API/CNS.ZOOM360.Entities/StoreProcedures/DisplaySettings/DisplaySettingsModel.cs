using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.DisplaySettings
{
    public class DisplaySettingsModel
    {
        [NotMapped]
        public string UserId { get; set; }
        
        [NotMapped]
        public string WorkSpaceId { get; set; }
        [NotMapped]
        public string Client_Id { get; set; }
        [Column("WORKSPACE_DISPLAY_MODE")]
        public string WorkspaceDisplayMode { get; set; }
        [Column("WORKSPACE_LOGO")]
        public string WorkspaceLogo { get; set; }
        [Column("LOGO_BACKGROUND_COLOR")]
        public string LogoBackgroundColor { get; set; }
        [Column("WORKSPACE_THEME")]
        public string WorkspaceTheme { get; set; }
        [Column("COLOR_PALETTE")]
        public string ColorPallete { get; set; }
        [Column("BSTATUS")]
        public string BStatus { get; set; }
        [NotMapped]
        public string ClientDate { get; set; }
        [NotMapped]
        public string ClientTime { get; set; }
        [NotMapped]
        public string ClientTimeZone { get; set; }
        [NotMapped]
        public string Remark1 { get; set; }
        [NotMapped]
        public string Remark2 { get; set; }
        [NotMapped]
        public string Remark3 { get; set; }
        [NotMapped]
        public string Remark4 { get; set; }
        [NotMapped]
        public string Flex1 { get; set; }
        [NotMapped]
        public string Flex2 { get; set; }
        [NotMapped]
        public string Flex3 { get; set; }
        [NotMapped]
        public string Flex4 { get; set; }
        [NotMapped]
        public string Flex5 { get; set; }
        [NotMapped]
        public string Flex6 { get; set; }
        [NotMapped]
        public string Flex7 { get; set; }
        [NotMapped]
        public string Flex8 { get; set; }
        [NotMapped]
        public string Flex9 { get; set; }
        [NotMapped]
        public string Flex10 { get; set; }
        [NotMapped]
        public string Flex11 { get; set; }
        [NotMapped]
        public string Flex12 { get; set; }
        [NotMapped]
        public string Flex13 { get; set; }
        [NotMapped]
        public string Flex14 { get; set; }
        [NotMapped]
        public string Flex15 { get; set; }
        [NotMapped]
        public string Flex16 { get; set; }
    }
}
