using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CNS.ZOOM360.Entities.StoreProcedures.GridAndGraphData
{
    public class GridDataModel
    {
        [Column("INVOICE_NO")]
        public string invoiceNo { get; set; }
        [Column("STOCK_CODE")]
        public string stockCode { get; set; }
        [Column("DESCRIPTION")]
        public string description { get; set; }
        [Column("QUANTITY")]
        public string Quantity { get; set; }
        [Column("INVOICE_DATE")]
        public string invoiceDate { get; set; }
        [Column("UNIT_PRICE")]
        public string unitPrice { get; set; }
        [Column("CUSTOMER_ID")]
        public string customerId { get; set; }
        [Column("COUNTRY")]
        public string Location { get; set; }
        [Column("INVOICE_TIME")]
        public string InvoiceTime { get; set; }
    }
}
