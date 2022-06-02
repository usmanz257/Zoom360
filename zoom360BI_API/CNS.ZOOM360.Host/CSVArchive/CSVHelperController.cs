using CNS.ZOOM360.Shared.Const;
using CNS.ZOOM360.Shared.LoggerServices;
using CNS.ZOOM360.Shared.StoreProcedures.CSVHelper;
using CsvHelper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nancy.Json;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using System.Text;
using Microsoft.VisualBasic.FileIO;

namespace CNS.ZOOM360.Host.CSVArchive
{
    [Route(ServiceConstants.ApiPrefix + ServiceConstants.CSVHelper.RouteName)]
    [ApiController]
    public class CSVHelperController : ControllerBase
    {
        //private readonly ICSVhelperService _ICSVhelperService;
        private readonly ILoggerManager _logger;
        public CSVHelperController(ILoggerManager logger)
        {
            //_ICSVhelperService = ICSVhelperService;
            _logger = logger;
        }
        [Route(ServiceConstants.CSVHelper.GetCSVFileData)]
        [HttpGet]
        public async Task<IActionResult> getCSVDataToJson()
        {
            //DataTable csvData = new DataTable();
            //string jsonString = string.Empty;
            //try
            //{
            //    using (TextFieldParser csvReader = new TextFieldParser(@"D:\FrameWorks\Office\Shaan\Project\CNS.ZOOOM360.API\cnszoom360\zoom360Api\CNS.ZOOM360.Host\CSVArchive\invoice_data.csv"))
            //    {
            //        csvReader.SetDelimiters(new string[] { "," });
            //        csvReader.HasFieldsEnclosedInQuotes = true;
            //        string[] colFields;
            //        bool tableCreated = false;
            //        while (tableCreated == false)
            //        {
            //            colFields = csvReader.ReadFields();
            //            foreach (string column in colFields)
            //            {
            //                DataColumn datecolumn = new DataColumn(column);
            //                datecolumn.AllowDBNull = true;
            //                csvData.Columns.Add(datecolumn);
            //            }
            //            tableCreated = true;
            //        }
            //        while (!csvReader.EndOfData)
            //        {
            //            csvData.Rows.Add(csvReader.ReadFields());
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.Message);
            //    return Ok("Error:Parsing CSV");
            //}
            ////if everything goes well, serialize csv to json 
            //jsonString = JsonConvert.SerializeObject(csvData);

            //return Ok(jsonString);
            var lines = System.IO.File.ReadAllLines(@"D:\FrameWorks\Office\Shaan\Project\CNS.ZOOOM360.API\cnszoom360\zoom360Api\CNS.ZOOM360.Host\CSVArchive\excel_channel_data_processed.csv");
            var csv = new List<string[]>();

            foreach (var line in lines)
            {
                csv.Add(line.Split(','));
            }
            var properties = lines[0].Split(',');

            var listObjResult = new List<Dictionary<string, string>>();

            for (int i = 1; i < lines.Length; i++)
            {
                var objResult = new Dictionary<string, string>();
                for (int j = 0; j < properties.Length; j++)
                    objResult.Add(properties[j], csv[i][j]);

                listObjResult.Add(objResult);
            }

            return Ok(JsonConvert.SerializeObject(listObjResult));

        }
        
        [Route(ServiceConstants.CSVHelper.SaveJsonDataToCSV)]
        [HttpPost]
        public async Task<IActionResult> JsonStringToCSV(string data)
        {
            XmlNode xml = JsonConvert.DeserializeXmlNode("{records:{record:" + data + "}}");

            XmlDocument xmldoc = new XmlDocument();
            xmldoc.LoadXml(xml.InnerXml);
            XmlReader xmlReader = new XmlNodeReader(xml);
            DataSet dataSet = new DataSet();
            dataSet.ReadXml(xmlReader);
            var dataTable = dataSet.Tables[0];

            //Datatable to CSV
            var lines = new List<string>();
            string[] columnNames = dataTable.Columns.Cast<DataColumn>().
                                              Select(column => column.ColumnName).
                                              ToArray();
            var header = string.Join(",", columnNames);
            lines.Add(header);
            var valueLines = dataTable.AsEnumerable()
                               .Select(row => string.Join(",", row.ItemArray));
            lines.AddRange(valueLines);
            System.IO.File.WriteAllLines(@"D:\FrameWorks\Office\Shaan\Project\CNS.ZOOOM360.API\cnszoom360\zoom360Api\CNS.ZOOM360.Host\CSVArchive\_cam1_1509438801455_000004.csv", lines);
            return Ok("Success");
        }
    }
}
