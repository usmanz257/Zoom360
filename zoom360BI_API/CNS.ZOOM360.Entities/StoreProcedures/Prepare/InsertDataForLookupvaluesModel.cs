using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.Prepare
{
    public class InsertDataForLookupvaluesModel
    {
        public string User_id { get; set; }
        public string Client_id { get; set; }
        public string workspace_id { get; set; }
        public string tablevalues { get; set; }
		public string procedurename { get; set; }
		public List<LookupArray> lookupobj { get; set; }
    }
    public class LookupArray
    {
		public string User_id { get; set; }
		public string Client_id { get; set; }
		public string workspace_id { get; set; }
		public string tablevalues { get; set; }
		public string procedurename { get; set; }
		public string lookupdisplayname { get; set; }
        public string workspacename { get; set; }
		public string usedestinationtableoption { get; set; }
        public string usecustomtable { get; set; }
        public string useexistingtable { get; set; }
        public string lookupfieldvalue { get; set; }
        public string defaultlookupfield { get; set; }
        public string customlookupfield { get; set; }
        public string sourceconnectorname { get; set; }
        public string sourceaccountname { get; set; }
        public string sourcetable { get; set; }
        public string Loadoption { get; set; }
        public bool enable { get; set; }
        public bool visibilty { get; set; }
        public string lookupid { get; set; }
        public string datainsertionoption { get; set; }
		public string AppearanceLogo { get; set; }
		public string AppearanceColor { get; set; }
		public string UsernameInsert { get; set; }
		public string UsernameUpdate { get; set; }
		public string ServerInsertDate { get; set; }
		public string ServerInsertTime { get; set; }
		public string ServerInsertTimeZone { get; set; }
		public string ServerUpdateDate { get; set; }
		public string ServerUpdateTime { get; set; }
		public string ServerUpdateTimeZone { get; set; }
		public string ClientInsertDate { get; set; }
		public string ClientInsertTime { get; set; }

		public string ClientInsertTimeZone { get; set; }
		public string ClientUpdateDate { get; set; }
		public string ClientUpdateTime { get; set; }
		public string ClientUpdateTimeZone { get; set; }
		public string BStatus { get; set; }
		public string BDelete { get; set; }
		public string BMap { get; set; }
		public string Remark1 { get; set; }
		public string Remark2 { get; set; }
		public string Remark3 { get; set; }
		public string Remark4 { get; set; }
		public string Flex1 { get; set; }
		public string Flex2 { get; set; }
		public string Flex3 { get; set; }
		public string Flex4 { get; set; }
		public string Flex5 { get; set; }
		public string Flex6 { get; set; }
		public string Flex7 { get; set; }
		public string Flex8 { get; set; }
		public string Flex9 { get; set; }
		public string Flex10 { get; set; }
		public string Flex11 { get; set; }
		public string Flex12 { get; set; }
		public string Flex13 { get; set; }
		public string Flex14 { get; set; }
		public string Flex15 { get; set; }
		public string Flex16 { get; set; }




	}
}
