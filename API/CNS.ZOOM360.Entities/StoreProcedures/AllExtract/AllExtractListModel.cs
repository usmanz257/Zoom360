using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.AllExtract
{
public class AllExtractListModel
    {
        
       
        [Column("SOURCE_ACCOUNT_ID")]
        public Int32 SourceAccountId        { get; set; }
        [Column("WORKSPACE_NAME")]
        public string WorkspaceName         { get; set; }
        [Column("STATUS_EXTRACT")]
        public string StatusExtract         { get; set; }
        [Column("FILE_NAME")]
        public string FileName      { get; set; }
        [Column("SERVER_INSERT_TIME")]
        public string ServerInsertDate    { get; set; }
        [Column("APPEARANCE_LOGO")]
        public string AppearanceLogo { get; set; }
        [Column("SOURCE_NAME")]
        public string sourceName { get; set; }
        [Column("USER_NAME_INSERT")]
        public string UserNameInsert      { get; set; }
        [Column("ROWS_COUNT_EXTRACT")]
        public Int32 RowsCountExtract       { get; set; }
        [Column("COLS_COUNT_EXTRACT")]
        public Int32 ColsCountExtract       { get; set; }
        [Column("DATA_SIZE_EXTRACT")]
        public double DataSizeExtract  { get; set; }

        
    }
}
